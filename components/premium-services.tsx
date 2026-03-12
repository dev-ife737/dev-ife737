"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const services = [
  {
    number: "01",
    title: "Visa Assessment",
    description: "Comprehensive evaluation of your eligibility and optimal visa pathway",
    features: ["Eligibility analysis", "Visa options review", "Success probability"],
  },
  {
    number: "02",
    title: "Documentation Support",
    description: "Expert guidance on all required documents and application materials",
    features: ["Document checklist", "Preparation guidance", "Quality review"],
  },
  {
    number: "03",
    title: "Interview Preparation",
    description: "Thorough coaching and mock interviews to ensure confidence",
    features: ["Mock interviews", "Q&A coaching", "Confidence building"],
  },
  {
    number: "04",
    title: "Travel Coordination",
    description: "Integrated travel services from flights to accommodation",
    features: ["Flight booking", "Accommodation", "Travel planning"],
  },
  {
    number: "05",
    title: "Follow-up Support",
    description: "Ongoing assistance throughout your journey",
    features: ["Status updates", "Emergency support", "Post-arrival guidance"],
  },
  {
    number: "06",
    title: "Premium Consultation",
    description: "One-on-one personalized guidance from immigration experts",
    features: ["Expert consultation", "Custom strategy", "Priority support"],
  },
]

export default function PremiumServices() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-widest text-brand-orange mb-4">Our Expertise</p>
          <h2 className="text-5xl sm:text-6xl font-playfair font-bold mb-6 max-w-3xl">
            Comprehensive Immigration & Travel Solutions
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            We provide end-to-end support designed specifically for African professionals seeking international opportunities.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Service card */}
              <div className="h-full flex flex-col bg-neutral-50 p-8 rounded-lg border border-neutral-200 group-hover:border-brand-orange transition-all duration-300 group-hover:shadow-lg">
                {/* Number */}
                <div className="text-6xl font-playfair font-bold text-neutral-200 group-hover:text-brand-orange/20 transition-colors duration-300 mb-4">
                  {service.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-playfair font-bold mb-3 text-neutral-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      <span className="text-sm text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
