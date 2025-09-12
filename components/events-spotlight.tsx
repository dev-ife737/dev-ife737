"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EventsSpotlight() {
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/desert-oasis.jpg')",
                }}
              >
                <div className="absolute inset-0 gradient-overlay-dark"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                      <span className="text-3xl">🎥</span>
                    </div>
                    <h4 className="font-poppins text-2xl font-bold mb-2">Africa Travel Content</h4>
                    <p className="font-inter opacity-90">Creator Conference 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-up">
            <div className="mb-6">
              <span className="inline-block bg-[#FF6600]/10 text-[#FF6600] px-4 py-2 rounded-full font-semibold text-sm mb-4">
                FEATURED EVENT
              </span>
              <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-[#2D2D2D] mb-6">
                Africa Travel Content Creator Conference 2025
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              <p className="font-inter text-lg text-[#2D2D2D]/80 leading-relaxed">
                Join Africa's premier gathering of travel content creators, influencers, and industry professionals.
                Network with like-minded creators while exploring Uganda's breathtaking landscapes.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#FF6600]/5 rounded-2xl p-6">
                  <h4 className="font-poppins font-bold text-[#2D2D2D] mb-2">When</h4>
                  <p className="font-inter text-[#2D2D2D]/80">Oct 22-25, 2025</p>
                </div>
                <div className="bg-[#FF6600]/5 rounded-2xl p-6">
                  <h4 className="font-poppins font-bold text-[#2D2D2D] mb-2">Where</h4>
                  <p className="font-inter text-[#2D2D2D]/80">Kampala, Uganda</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF6600]/10 to-[#FF6600]/5 rounded-2xl p-6">
                <h4 className="font-poppins font-bold text-[#2D2D2D] mb-3">What's Included</h4>
                <ul className="space-y-2">
                  {[
                    "7-day Uganda adventure experience",
                    "Networking with 100+ creators",
                    "Professional workshops & masterclasses",
                    "Exclusive content creation opportunities",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center font-inter text-[#2D2D2D]/80">
                      <div className="w-2 h-2 bg-[#FF6600] rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/uganda2025" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-primary">
                  Register Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="btn-secondary bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
