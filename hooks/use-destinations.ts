"use client"

import { useState, useEffect } from "react"

interface Destination {
  id: number
  name: string
  image: string
  price: string
  rating: number
  description: string
}

export function useDestinations() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        // Simulate API call - replace with actual API integration
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockDestinations: Destination[] = [
          {
            id: 1,
            name: "Tropical Paradise",
            image:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
            price: "$1,299",
            rating: 4.9,
            description:
              "Pristine beaches with crystal clear waters, swaying palm trees, and dramatic mountain backdrops",
          },
          {
            id: 2,
            name: "Crystal Lagoon",
            image:
              "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            price: "$2,499",
            rating: 4.9,
            description:
              "Luxury overwater villas in crystal clear lagoons with pristine coral reefs and tropical paradise",
          },
          {
            id: 3,
            name: "Desert Oasis",
            image:
              "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            price: "$1,899",
            rating: 4.8,
            description:
              "Majestic desert landscapes with traditional architecture, stunning sunsets, and cultural experiences",
          },
          {
            id: 4,
            name: "Limestone Cliffs & Beaches",
            image:
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            price: "$1,599",
            rating: 4.8,
            description:
              "Dramatic limestone karst formations with turquoise waters and hidden beaches in tropical paradise",
          },
          {
            id: 5,
            name: "New York City",
            image:
              "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            price: "$1,899",
            rating: 4.7,
            description:
              "The city that never sleeps - iconic Times Square, Broadway shows, and world-class attractions",
          },
          {
            id: 6,
            name: "Mediterranean Coast",
            image:
              "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
            price: "$1,799",
            rating: 4.8,
            description:
              "Warm terracotta buildings, charming staircases, and authentic Mediterranean coastal experiences",
          },
        ]

        setDestinations(mockDestinations)
      } catch (err) {
        setError("Failed to fetch destinations")
        console.error("Error fetching destinations:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchDestinations()
  }, [])

  return { destinations, loading, error }
}
