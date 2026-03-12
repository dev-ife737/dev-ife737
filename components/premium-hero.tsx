"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PremiumHero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-neutral-50">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-brand-orange-light to-neutral-100 opacity-30" />

      {/* Content container */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Main headline */}
        <motion.div
          className="max-w-5xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-playfair font-bold leading-tight mb-8">
            Your Path to
            <motion.span
              className="block text-brand-orange mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Global Opportunity
            </motion.span>
          </h1>

          <motion.p
            className="text-xl sm:text-2xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Expert immigration advisory and travel services. 10+ years of experience. 95% visa success rate. 1,000+ clients served.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link href="/consultation">
              <Button className="btn-primary">
                Book Consultation
              </Button>
            </Link>
            <Link href="/immigration-advisory">
              <Button className="btn-secondary">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm text-neutral-600 tracking-widest uppercase">Scroll to explore</span>
            <svg
              className="w-5 h-5 text-brand-orange"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Trust indicators */}
      <motion.div
        className="absolute bottom-16 left-0 right-0 flex justify-center gap-12 sm:gap-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-neutral-600 mb-2">Visa Applications</p>
          <p className="text-3xl font-bold text-neutral-900">1,000+</p>
        </div>
        <div className="w-px bg-neutral-300" />
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-neutral-600 mb-2">Success Rate</p>
          <p className="text-3xl font-bold text-brand-orange">95%</p>
        </div>
        <div className="w-px bg-neutral-300" />
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-neutral-600 mb-2">Experience</p>
          <p className="text-3xl font-bold text-neutral-900">10+ yrs</p>
        </div>
      </motion.div>
    </div>
  )
}
