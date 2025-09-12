import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Vingel Travels & Tours - Explore the World",
  description:
    "Premium travel experiences with Vingel Travels & Tours. Over 1,000 happy travelers served, 95% visa success rate. Operating in Lagos, Nigeria - Your trusted travel partner worldwide.",
  keywords: [
    "premium travel",
    "luxury travel",
    "travel agency Nigeria",
    "visa assistance",
    "flight booking",
    "travel experiences",
    "Africa travel",
    "content creator travel",
    "Lagos travel agency",
    "Vingel Travels",
  ],
  authors: [{ name: "Vingel Travels & Tours" }],
  creator: "Vingel Travels & Tours",
  publisher: "Vingel Travels & Tours",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vingeltravels.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vingel Travels & Tours - Explore the World",
    description:
      "Premium travel experiences. Over 1,000 happy travelers served, 95% visa success rate. Operating in Lagos, Nigeria - Your trusted travel partner worldwide.",
    url: "https://vingeltravels.com",
    siteName: "Vingel Travels & Tours",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vingel Travels & Tours - Premium Travel Experiences",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vingel Travels & Tours - Explore the World",
    description: "Premium travel experiences. Over 1,000 happy travelers served worldwide.",
    images: ["/og-image.jpg"],
    creator: "@vingeltravels",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f37021" />
        <meta name="msapplication-TileColor" content="#f37021" />
        <meta name="application-name" content="Vingel Travels & Tours" />
        <meta name="apple-mobile-web-app-title" content="Vingel Travels" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`font-sans bg-white text-[#2D2D2D] antialiased`}>{children}</body>
    </html>
  )
}
