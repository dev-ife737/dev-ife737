"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
        style={{
          backgroundImage: "url('/images/airplane-sunset.jpg')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto fade-in-up animate">
        <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Explore the World
          <span className="block text-white drop-shadow-lg">with Vingel Travels & Tours</span>
        </h1>

        <p className="font-sans text-xl sm:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Premium travel experiences crafted for discerning travelers. Join over 1,000 satisfied clients who trust us
          with their journeys.
        </p>
  
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/booking">
            <Button size="lg" className="btn-primary text-lg font-semibold">
              Book Your Trip
            </Button>
          </Link>

          <Link href="/travel-deals">
            <Button variant="outline" size="lg" className="btn-outline text-lg font-semibold bg-transparent">
              View Travel Deals
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="fade-in-up animate" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold text-white">1,000+</div>
            <div className="text-white/80 font-medium">Clients Served</div>
          </div>
          <div className="fade-in-up animate" style={{ animationDelay: "0.4s" }}>
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-white/80 font-medium">Destinations</div>
          </div>
          <div className="fade-in-up animate" style={{ animationDelay: "0.6s" }}>
            <div className="text-3xl font-bold text-white">95%</div>
            <div className="text-white/80 font-medium">Visa Success Rate</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 font-medium">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
