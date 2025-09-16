"use client"

import { Button } from "@/components/ui/button"

export default function AffiliatePage() {
  const partners = [
    {
      name: "Expedia",
      url: "https://bit.ly/46APrvI",
      color: "bg-orange-500",
      icon: "E",
      description: "Unlock exclusive deals on hotels, flights, and more.",
    },
    {
      name: "Viator",
      url: "https://bit.ly/4poICor",
      color: "bg-orange-500",
      icon: "V",
      description: "Book tours and experiences worldwide with trusted guides.",
    },
    {
      name: "Travelstart",
      url: "https://bit.ly/4gny4lv",
      color: "bg-orange-500",
      icon: "T",
      description: "Affordable flights and hotel packages made easy.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-white">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Book With Our Affiliate Partners
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We’ve partnered with leading travel platforms to bring you the best
          flight, hotel, and activity deals in one place. Click a partner below
          to start booking securely.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 p-10 flex flex-col items-center text-center"
          >
            <div
              className={`h-20 w-20 mb-6 flex items-center justify-center rounded-full text-white text-3xl font-bold ${partner.color}`}
            >
              {partner.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {partner.name}
            </h3>
            <p className="text-gray-600 mb-6">{partner.description}</p>
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                size="lg"
                className="w-full bg-orange-500 text-white hover:bg-orange-600 text-lg font-semibold rounded-xl"
              >
                Visit {partner.name}
              </Button>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
