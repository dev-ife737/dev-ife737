"use client"

import Link from "next/link"

export default function AffiliateSection() {
  const affiliates = [
    {
      name: "Travelstart",
      url: "https://www.travelstart.com.ng/?affiliateid=yourid",
      logo: "/images/affiliates/travelstart.png",
    },
    {
      name: "Booking.com",
      url: "https://www.booking.com",
      logo: "/images/affiliates/booking.png",
    },
    {
      name: "Expedia",
      url: "https://www.expedia.com",
      logo: "/images/affiliates/expedia.png",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 fade-in-section">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
          our trusted affiliates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {affiliates.map((affiliate) => (
            <Link
              key={affiliate.name}
              href={affiliate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <img
                src={affiliate.logo}
                alt={affiliate.name}
                className="h-16 mx-auto mb-4 object-contain"
              />
              <p className="text-lg font-semibold text-gray-700 group-hover:text-[#f37021]">
                {affiliate.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
