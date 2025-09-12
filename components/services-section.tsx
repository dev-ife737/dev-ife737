"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesSection() {
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

  const services = [
    {
      title: "Flight Booking",
      description: "Premium flight booking services with access to exclusive deals and flexible options worldwide.",
      features: ["Best Price Guarantee", "24/7 Support", "Flexible Booking"],
      icon: "✈️",
    },
    {
      title: "Tours & Experiences",
      description:
        "Curated cultural experiences and guided tours that showcase the authentic spirit of each destination.",
      features: ["Expert Local Guides", "Small Groups", "Authentic Experiences"],
      icon: "🗺️",
    },
    {
      title: "Visa Processing",
      description: "Comprehensive visa assistance with 95% success rate and expert guidance through every step.",
      features: ["95% Success Rate", "Document Review", "Fast Processing"],
      icon: "📋",
    },
    {
      title: "Hotel Booking",
      description: "Handpicked accommodations from luxury resorts to boutique hotels that match your style and budget.",
      features: ["Luxury Properties", "Best Rates", "Instant Confirmation"],
      icon: "🏨",
    },
    {
      title: "Group Travel",
      description:
        "Specialized group packages for corporate events, family reunions, and content creator collaborations.",
      features: ["Custom Itineraries", "Group Discounts", "Dedicated Support"],
      icon: "👥",
    },
    {
      title: "Travel Insurance",
      description: "Comprehensive travel protection to ensure peace of mind throughout your journey.",
      features: ["Medical Coverage", "Trip Cancellation", "24/7 Assistance"],
      icon: "🛡️",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-[#2D2D2D] mb-6 fade-in-up">
            Premium Travel Services
          </h2>
          <p className="font-inter text-xl text-[#2D2D2D]/80 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Comprehensive travel solutions crafted for discerning travelers who demand excellence in every detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="fade-in-up card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF6600] to-[#E55A00] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl text-white">{service.icon}</span>
                    </div>
                    <h3 className="font-poppins text-2xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#FF6600] transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-inter text-[#2D2D2D]/80 leading-relaxed mb-6">{service.description}</p>
                  </div>

                  <div className="flex-grow mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-[#2D2D2D]/70">
                          <div className="w-2 h-2 bg-[#FF6600] rounded-full mr-3"></div>
                          <span className="font-inter text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/booking">
                    <Button className="w-full btn-primary group-hover:scale-105 transition-transform">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center fade-in-up">
          <div className="bg-gradient-to-r from-[#FF6600] to-[#E55A00] rounded-3xl p-12 text-white">
            <h3 className="font-poppins text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="font-inter text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join over 1,000 satisfied travelers who trust us with their most important journeys.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#FF6600] hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
