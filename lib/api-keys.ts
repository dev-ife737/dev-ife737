// API Keys Configuration
export const API_KEYS = {
  // Amadeus API
  AMADEUS_CLIENT_ID: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID || "",
  AMADEUS_CLIENT_SECRET: process.env.AMADEUS_CLIENT_SECRET || "",

  // Travel Payouts API
  TRAVEL_PAYOUTS_TOKEN: process.env.TRAVEL_PAYOUTS_TOKEN || "",
  TRAVEL_PAYOUTS_MARKER: process.env.TRAVEL_PAYOUTS_MARKER || "",

  // Other APIs
  STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",

  // Email Service
  EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
}

// Validate required API keys
export const validateApiKeys = () => {
  const requiredKeys = ["AMADEUS_CLIENT_ID", "TRAVEL_PAYOUTS_TOKEN"]

  const missingKeys = requiredKeys.filter((key) => !API_KEYS[key as keyof typeof API_KEYS])

  if (missingKeys.length > 0) {
    console.warn("Missing API keys:", missingKeys)
  }

  return missingKeys.length === 0
}
