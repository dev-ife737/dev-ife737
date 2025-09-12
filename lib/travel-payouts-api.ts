import { API_KEYS } from "./api-keys"

interface TravelPayoutsResponse {
  success: boolean
  data: any
  error?: string
}

class TravelPayoutsAPI {
  private baseUrl = "https://api.travelpayouts.com"

  async searchFlights(params: {
    origin: string
    destination: string
    departure_date: string
    return_date?: string
    currency?: string
    limit?: number
  }) {
    try {
      const searchParams = new URLSearchParams({
        origin: params.origin,
        destination: params.destination,
        departure_date: params.departure_date,
        currency: params.currency || "USD",
        limit: (params.limit || 30).toString(),
        token: API_KEYS.TRAVEL_PAYOUTS_TOKEN,
      })

      if (params.return_date) {
        searchParams.append("return_date", params.return_date)
      }

      const response = await fetch(`${this.baseUrl}/v1/prices/cheap?${searchParams}`)

      if (!response.ok) {
        throw new Error(`Travel Payouts API error: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("Error searching flights with Travel Payouts:", error)
      return { success: false, data: [], error: error.message }
    }
  }

  async getPopularDestinations(origin: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/v1/city-directions?origin=${origin}&currency=USD&token=${API_KEYS.TRAVEL_PAYOUTS_TOKEN}`,
      )

      if (!response.ok) {
        throw new Error(`Travel Payouts API error: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("Error getting popular destinations:", error)
      return { success: false, data: [], error: error.message }
    }
  }

  async getHotelPrices(params: {
    location: string
    checkIn: string
    checkOut: string
    adults: number
    currency?: string
  }) {
    try {
      const searchParams = new URLSearchParams({
        location: params.location,
        checkIn: params.checkIn,
        checkOut: params.checkOut,
        adults: params.adults.toString(),
        currency: params.currency || "USD",
        token: API_KEYS.TRAVEL_PAYOUTS_TOKEN,
      })

      const response = await fetch(`${this.baseUrl}/v2/hotels/search?${searchParams}`)

      if (!response.ok) {
        throw new Error(`Travel Payouts API error: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("Error searching hotels:", error)
      return { success: false, data: [], error: error.message }
    }
  }
}

export const travelPayoutsAPI = new TravelPayoutsAPI()
