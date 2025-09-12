"use client"

import { useEffect, useRef } from "react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-[#2D2D2D] mb-6 fade-in-up">
            Your Trusted Travel Partner
          </h2>
          <p className="font-inter text-xl text-[#2D2D2D]/80 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Operating in Lagos, Nigeria, Vingel Travels & Tours has been crafting exceptional travel experiences for
            individuals, families, and businesses since our inception.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <h3 className="font-poppins text-3xl font-bold text-[#2D2D2D] mb-6">Our Story</h3>
            <p className="font-inter text-lg text-[#2D2D2D]/80 mb-6 leading-relaxed">
              We believe that travel is more than just visiting new places—it's about creating memories, building
              connections, and expanding horizons. Our mission is to make every journey seamless, memorable, and
              transformative.
            </p>
            <p className="font-inter text-lg text-[#2D2D2D]/80 leading-relaxed">
              With our expertise in visa processing, flight bookings, and curated experiences, we've helped over 1,000
              travelers explore the world with confidence and ease.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 fade-in-up">
            <div className="text-center p-8 bg-gradient-to-br from-[#FF6600]/5 to-[#FF6600]/10 rounded-2xl card-hover">
              <div className="text-4xl font-bold text-[#FF6600] mb-2">1,000+</div>
              <div className="text-[#2D2D2D] font-medium">Clients Served</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-[#FF6600]/5 to-[#FF6600]/10 rounded-2xl card-hover">
              <div className="text-4xl font-bold text-[#FF6600] mb-2">50+</div>
              <div className="text-[#2D2D2D] font-medium">Destinations</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-[#FF6600]/5 to-[#FF6600]/10 rounded-2xl card-hover">
              <div className="text-4xl font-bold text-[#FF6600] mb-2">95%</div>
              <div className="text-[#2D2D2D] font-medium">Visa Success</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-[#FF6600]/5 to-[#FF6600]/10 rounded-2xl card-hover">
              <div className="text-4xl font-bold text-[#FF6600] mb-2">24/7</div>
              <div className="text-[#2D2D2D] font-medium">Support</div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center fade-in-up">
          <div className="bg-gradient-to-r from-[#FF6600]/10 to-[#FF6600]/5 rounded-3xl p-12">
            <h3 className="font-poppins text-3xl font-bold text-[#2D2D2D] mb-4">
              Trusted by Creators and Tourists Worldwide
            </h3>
            <p className="font-inter text-xl text-[#2D2D2D]/80 max-w-4xl mx-auto">
              From content creators seeking unique experiences to families planning their dream vacations, we deliver
              personalized service that exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
