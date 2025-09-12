import { API_KEYS } from "./api-keys"

interface AmadeusTokenResponse {
  access_token: string
  token_type: string
  expires_in: number
}

interface FlightOffer {
  id: string
  source: string
  instantTicketingRequired: boolean
  nonHomogeneous: boolean
  oneWay: boolean
  lastTicketingDate: string
  numberOfBookableSeats: number
  itineraries: any[]
  price: {
    currency: string
    total: string
    base: string
    fees: any[]
    grandTotal: string
  }
  pricingOptions: {
    fareType: string[]
    includedCheckedBagsOnly: boolean
  }
  validatingAirlineCodes: string[]
  travelerPricings: any[]
}

class AmadeusAPI {
  private baseUrl = "https://test.api.amadeus.com"
  private accessToken: string | null = null
  private tokenExpiry = 0

  private async getAccessToken(): Promise<string> {
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return this.accessToken
    }

    const response = await fetch(`${this.baseUrl}/v1/security/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: API_KEYS.AMADEUS_CLIENT_ID,
        client_secret: API_KEYS.AMADEUS_CLIENT_SECRET,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to get Amadeus access token")
    }

    const data: AmadeusTokenResponse = await response.json()
    this.accessToken = data.access_token
    this.tokenExpiry = Date.now() + data.expires_in * 1000 - 60000 // Refresh 1 minute early

    return this.accessToken
  }

  async searchFlights(params: {
    originLocationCode: string
    destinationLocationCode: string
    departureDate: string
    returnDate?: string
    adults: number
    children?: number
    infants?: number
    travelClass?: string
    currencyCode?: string
    max?: number
  }): Promise<FlightOffer[]> {
    try {
      const token = await this.getAccessToken()

      const searchParams = new URLSearchParams({
        originLocationCode: params.originLocationCode,
        destinationLocationCode: params.destinationLocationCode,
        departureDate: params.departureDate,
        adults: params.adults.toString(),
        max: (params.max || 10).toString(),
        currencyCode: params.currencyCode || "USD",
      })

      if (params.returnDate) {
        searchParams.append("returnDate", params.returnDate)
      }
      if (params.children) {
        searchParams.append("children", params.children.toString())
      }
      if (params.infants) {
        searchParams.append("infants", params.infants.toString())
      }
      if (params.travelClass) {
        searchParams.append("travelClass", params.travelClass)
      }

      const response = await fetch(`${this.baseUrl}/v2/shopping/flight-offers?${searchParams}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`Amadeus API error: ${response.status}`)
      }

      const data = await response.json()
      return data.data || []
    } catch (error) {
      console.error("Error searching flights:", error)
      return []
    }
  }

  async getHotelOffers(params: {
    cityCode: string
    checkInDate: string
    checkOutDate: string
    adults: number
    rooms?: number
    currency?: string
  }) {
    try {
      const token = await this.getAccessToken()

      const searchParams = new URLSearchParams({
        cityCode: params.cityCode,
        checkInDate: params.checkInDate,
        checkOutDate: params.checkOutDate,
        adults: params.adults.toString(),
        rooms: (params.rooms || 1).toString(),
        currency: params.currency || "USD",
      })

      const response = await fetch(`${this.baseUrl}/v3/shopping/hotel-offers?${searchParams}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`Amadeus API error: ${response.status}`)
      }

      const data = await response.json()
      return data.data || []
    } catch (error) {
      console.error("Error searching hotels:", error)
      return []
    }
  }
}

export const amadeusAPI = new AmadeusAPI()
