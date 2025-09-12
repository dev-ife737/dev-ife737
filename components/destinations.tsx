"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Calendar, Users } from "lucide-react"
import LazyImage from "@/components/lazy-image"
import { useDestinations } from "@/hooks/use-destinations"

export default function Destinations() {
  const ref = useRef(null)
  const { destinations, loading, error } = useDestinations()

  const handleViewDetails = (destinationId: number) => {
    window.open(`/destinations/${destinationId}`, "_blank")
  }

  if (loading) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[rgb(253,124,71)] mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading destinations...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400">Error loading destinations. Please try again later.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="destinations" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23fd7c47' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover amazing places around the world with our carefully curated travel packages
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white dark:bg-gray-700">
                <div className="relative overflow-hidden">
                  <LazyImage
                    src={destination.image}
                    alt={destination.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium dark:text-white">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 transition-opacity duration-300">
                    <div className="flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>7 days</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>2-8 people</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-[rgb(253,124,71)]" />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{destination.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-[rgb(253,124,71)]">{destination.price}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">per person</span>
                    </div>
                    <Button className="btn-primary" onClick={() => handleViewDetails(destination.id)}>
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
