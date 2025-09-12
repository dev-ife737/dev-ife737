"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Vingel Travels made our honeymoon absolutely perfect! Every detail was taken care of, and we had the most amazing experience in Bali.",
    avatar: "👩‍💼",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "Professional service and incredible attention to detail. Our family trip to Europe was seamless thanks to their expert planning.",
    avatar: "👨‍💻",
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "London, UK",
    rating: 5,
    text: "I've used many travel agencies, but Vingel Travels stands out. Their 24/7 support saved our trip when we had an unexpected issue.",
    avatar: "👩‍🎨",
  },
  {
    id: 4,
    name: "David Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "Exceptional value for money and personalized service. They understood exactly what we wanted and delivered beyond expectations.",
    avatar: "👨‍🔬",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        setIsAnimating(false)
      }, 150)
    }
  }

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
        setIsAnimating(false)
      }, 150)
    }
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/airplane-sunset.jpg')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/80"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#f37021]/10 rounded-full px-6 py-2 mb-4">
            <span className="text-[#f37021] font-semibold text-sm">1,000+ HAPPY TRAVELERS</span>
          </div>
          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">What Our Travelers Say</h2>
          <p className="text-xl text-gray-600">Real experiences from real travelers who chose Vingel Travels</p>
        </div>

        <div className="relative">
          <div
            className={`bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center transition-all duration-500 hover:shadow-3xl ${
              isAnimating ? "opacity-75 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <div className="text-6xl mb-6 animate-bounce">{currentTestimonial.avatar}</div>

            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <span
                  key={i}
                  className="text-yellow-400 text-2xl animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  ⭐
                </span>
              ))}
            </div>

            <blockquote className="text-xl text-gray-700 mb-8 italic leading-relaxed">
              "{currentTestimonial.text}"
            </blockquote>

            <div>
              <h4 className="text-lg font-semibold text-[#2D2D2D]">{currentTestimonial.name}</h4>
              <p className="text-gray-600">{currentTestimonial.location}</p>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#f37021] hover:text-white group"
            aria-label="Previous testimonial"
          >
            <span className="text-xl group-hover:animate-pulse">←</span>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#f37021] hover:text-white group"
            aria-label="Next testimonial"
          >
            <span className="text-xl group-hover:animate-pulse">→</span>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  setTimeout(() => {
                    setCurrentIndex(index)
                    setIsAnimating(false)
                  }, 150)
                }
              }}
              className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex ? "bg-[#f37021] shadow-lg scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-[#f37021] mb-2">1,000+</div>
            <div className="text-gray-600 font-medium">Clients Served</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-[#f37021] mb-2">50+</div>
            <div className="text-gray-600 font-medium">Destinations</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-[#f37021] mb-2">95%</div>
            <div className="text-gray-600 font-medium">Visa Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
