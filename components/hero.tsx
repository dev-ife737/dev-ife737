"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Professional business meeting and consultation",
    title: "Expert Guidance",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Global map and international travel documentation",
    title: "Global Expertise",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Professional workspace with documents",
    title: "Visa Advisory",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "International travel and immigration services",
    title: "Travel Documentation",
  },
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  if (!isMounted) {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="text-center text-white">
          <div className="w-12 h-12 border-2 border-[rgb(253,124,71)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p>Loading...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* rotating backgrounds */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1.1 : 1,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Your Immigration & Visa
          <motion.span
            className="block text-[rgb(253,124,71)] drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Advisory Experts
          </motion.span>
        </h1>

        <p className="font-sans text-xl sm:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Expert guidance on immigration, visa applications, and travel documentation. Trusted by over 1,000+ clients with a 95% visa success rate.
        </p>

        {/* ctas */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link href="/consultation">
            <Button size="lg" className="btn-primary text-lg font-semibold px-8 py-3">
              Book Consultation
            </Button>
          </Link>

          <Link href="/immigration-advisory">
            <Button variant="outline" size="lg" className="btn-outline text-lg font-semibold px-8 py-3">
              Learn More
            </Button>
          </Link>
        </div>

        {/* stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white">1,000+</div>
            <div className="text-white/80 font-medium">Visa Applications</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">95%</div>
            <div className="text-white/80 font-medium">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">10+</div>
            <div className="text-white/80 font-medium">Years Experience</div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 font-medium">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
