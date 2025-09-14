"use client"

import { Button } from "@/components/ui/button"

export default function Affliatesection() {
  const partners = [
    {
      name: "Travelstart",
      tagline: "Book flights to anywhere in the world",
      description:
        "Find the best flight deals with our trusted partner Travelstart. Compare prices from multiple airlines and save on your next trip.",
      logo: "TS",
      color: "bg-blue-600",
      link: "https://www.travelstart.com.ng/?utm_source=vingel&utm_medium=affiliate",
      features: ["Best flight prices", "Multiple airlines", "24/7 support", "Instant booking"],
    },
    {
      name: "Expedia",
      tagline: "Hotels, flights, and vacation packages",
      description:
        "Complete travel solutions with Expedia. Book hotels, flights, car rentals, and vacation packages all in one place.",
      logo: "EX",
      color: "bg-yellow-600",
      link: "https://expedia.com/affiliate/VaSAcKD",
      features: ["Hotel deals", "Package savings", "Rewards program", "Price matching"],
    },
    {
      name: "Viator",
      tagline: "Tours and experiences worldwide",
      description:
        "Discover amazing tours and experiences with Viator. From city tours to adventure activities, make your trip unforgettable.",
      logo: "VI",
      color: "bg-green-600",
      link: "https://www.viator.com/?pid=P00102658&mcid=42383&medium=link&campaign=vingel-website",
      features: ["Skip-the-line tickets", "Local guides", "Instant confirmation", "Free cancellation"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 fade-in-section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Exclusive Travel Deals</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                {/* Logo + Title */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${partner.color} rounded-xl flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold text-lg">{partner.logo}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">{partner.name}</h3>
                    <p className="text-sm text-gray-600">{partner.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">{partner.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {partner.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#f37021] rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <a href={partner.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    className="w-full bg-[#f37021] hover:bg-[#d85f1a] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Visit {partner.name}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
