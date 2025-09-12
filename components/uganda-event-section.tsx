"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function UgandaEventSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-10-22T00:00:00Z").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-[#f37021] to-[#d85f1a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">LIMITED HOSTED TRIP OPPORTUNITY</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">Uganda Travel Content Creator Conference 2025</h2>

          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join creators from across Africa for an exclusive conference experience.
            <strong className="block mt-2">
              Note: Vingel Travels is Nigeria-based - this is a special hosted trip opportunity.
            </strong>
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold">{item.value.toString().padStart(2, "0")}</div>
                <div className="text-sm text-white/80">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Event Details</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>October 22-25, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Kampala, Uganda</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>$130 ticket includes city tour</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Vingel Support Includes</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Visa assistance & processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Flight booking support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Discounted hotel reservations</span>
                </div>
              </div>
            </div>
          </div>

          <Link href="/uganda2025">
            <Button
              size="lg"
              className="bg-white text-[#f37021] hover:bg-gray-100 font-bold px-12 py-4 rounded-xl text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Register with Vingel Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
