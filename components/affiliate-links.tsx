"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Hotel, MapPin, Plane } from "lucide-react"
import Image from "next/image"

const affiliatePartners = [
  {
    id: 1,
    name: "Booking.com",
    type: "Hotels",
    description: "Find the perfect accommodation for your stay",
    logo: "/placeholder.svg?height=60&width=120",
    link: "https://booking.com",
    icon: Hotel,
    color: "bg-[rgb(253,124,71)]",
  },
  {
    id: 2,
    name: "Expedia",
    type: "Flights & Hotels",
    description: "Book flights and hotels together for great deals",
    logo: "/placeholder.svg?height=60&width=120",
    link: "https://expedia.com",
    icon: Plane,
    color: "bg-[rgb(253,124,71)]",
  },
  {
    id: 3,
    name: "Viator",
    type: "Tours & Activities",
    description: "Discover amazing tours and local experiences",
    logo: "/placeholder.svg?height=60&width=120",
    link: "https://viator.com",
    icon: MapPin,
    color: "bg-[rgb(253,124,71)]",
  },
  {
    id: 4,
    name: "Airbnb",
    type: "Unique Stays",
    description: "Stay in unique homes and experiences",
    logo: "/placeholder.svg?height=60&width=120",
    link: "https://airbnb.com",
    icon: Hotel,
    color: "bg-[rgb(253,124,71)]",
  },
]

export default function AffiliateLinks() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Trusted Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book with confidence through our verified travel partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {affiliatePartners.map((partner) => {
            const IconComponent = partner.icon
            return (
              <div key={partner.id}>
                <Card className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${partner.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="mx-auto mb-4 opacity-70 transition-opacity"
                    />

                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{partner.name}</h3>
                    <p className="text-sm text-[rgb(253,124,71)] font-medium mb-2">{partner.type}</p>
                    <p className="text-gray-600 text-sm mb-4">{partner.description}</p>

                    <Button
                      className="w-full btn-primary transition-all duration-300"
                      onClick={() => window.open(partner.link, "_blank")}
                    >
                      <span>Visit {partner.name}</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            * Vingel Travels may earn a commission from bookings made through these partners at no extra cost to you
          </p>
        </div>
      </div>
    </section>
  )
}
