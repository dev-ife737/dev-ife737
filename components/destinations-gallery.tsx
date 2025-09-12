"use client"

import { useState } from "react"
import Image from "next/image"

const destinations = [
  {
    id: 1,
    name: "Tropical Paradise",
    image: "/images/tropical-beach.jpg",
    description: "Crystal clear waters and pristine beaches",
  },
  {
    id: 2,
    name: "Mountain Adventure",
    image: "/images/limestone-cliffs.jpg",
    description: "Breathtaking peaks and scenic trails",
  },
  {
    id: 3,
    name: "Cultural Journey",
    image: "/images/new-york.jpg",
    description: "Rich history and vibrant traditions",
  },
  {
    id: 4,
    name: "Desert Oasis",
    image: "/images/desert-oasis.jpg",
    description: "Endless dunes and starlit nights",
  },
  {
    id: 5,
    name: "Ocean Escape",
    image: "/images/sunset-ocean.jpg",
    description: "Serene waters and golden sunsets",
  },
  {
    id: 6,
    name: "Mediterranean Coast",
    image: "/images/mediterranean.jpg",
    description: "Charming villages and azure seas",
  },
]

export default function DestinationsGallery() {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore breathtaking locations around the world with our carefully curated travel experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={selectedDestination.image || "/placeholder.svg"}
                alt={selectedDestination.name}
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedDestination.name}</h3>
                <p className="text-lg opacity-90">{selectedDestination.description}</p>
              </div>
            </div>
          </div>

          {/* Destination Grid */}
          <div className="grid grid-cols-2 gap-4">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                  selectedDestination.id === destination.id ? "ring-4 ring-orange-500 scale-105" : "hover:scale-105"
                }`}
                onClick={() => setSelectedDestination(destination)}
              >
                <div className="aspect-w-16 aspect-h-12">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h4 className="text-white font-semibold text-center px-2">{destination.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
