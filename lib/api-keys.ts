// Public API Keys (safe to expose to client)
export const PUBLIC_API_KEYS = {
  AMADEUS_CLIENT_ID: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID || "",
  STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
}

// Server-side only API Keys (never expose to client)
// These should only be used in server actions or API routes
export const getServerApiKeys = () => {
  return {
    AMADEUS_CLIENT_SECRET: process.env.AMADEUS_CLIENT_SECRET || "",
    TRAVEL_PAYOUTS_TOKEN: process.env.TRAVEL_PAYOUTS_TOKEN || "",
    TRAVEL_PAYOUTS_MARKER: process.env.TRAVEL_PAYOUTS_MARKER || "",
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
  }
}

// Validate required API keys (server-side only)
export const validateApiKeys = () => {
  const serverKeys = getServerApiKeys()
  const requiredKeys = ["AMADEUS_CLIENT_SECRET", "TRAVEL_PAYOUTS_TOKEN"]

  const missingKeys = requiredKeys.filter((key) => !serverKeys[key as keyof typeof serverKeys])

  if (missingKeys.length > 0) {
    console.warn("Missing API keys:", missingKeys)
  }

  return missingKeys.length === 0
}
