/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    modularizeImports: {
      "lucide-react": {
        transform: "lucide-react/dist/esm/icons/{{member}}",
        skipDefaultConversion: true, // prevents the full bundle
      },
    },
  },
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "api.amadeus.com",
      "api.travelpayouts.com",
      "booking.com",
      "expedia.com",
      "viator.com",
      "airbnb.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/book",
        destination: "/#booking",
        permanent: true,
      },
      {
        source: "/destinations",
        destination: "/#destinations",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ]
  },
}

module.exports = nextConfig
