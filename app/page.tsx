"use client"

import Navigation from "@/components/navigation"
import PremiumHero from "@/components/premium-hero"
import PremiumServices from "@/components/premium-services"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    } 

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    // Observe all sections with fade-in-up class
    const sections = document.querySelectorAll(".fade-in-section")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      <PremiumHero />

      {/* Premium Services Showcase */}
      <div className="fade-in-section">
        <PremiumServices />
      </div>

      {/* Why Choose Vingel */}
      <div className="fade-in-section">
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <p className="text-sm uppercase tracking-widest text-brand-orange mb-4">Why Partner With Us</p>
                <h2 className="text-5xl sm:text-6xl font-playfair font-bold mb-8 leading-tight">
                  Trusted by 1,000+ Global Aspirants
                </h2>
                <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                  We're not just another visa consultancy. We're your dedicated partners in achieving your international dreams with integrity, expertise, and personalized care.
                </p>

                <div className="space-y-6">
                  {[
                    { stat: "10+", label: "Years of Excellence" },
                    { stat: "95%", label: "Visa Success Rate" },
                    { stat: "1,000+", label: "Clients Served" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-brand-orange rounded-lg">
                        <span className="font-bold text-lg">{item.stat.split("+")[0]}</span>
                      </div>
                      <div>
                        <p className="text-brand-orange font-bold text-sm uppercase tracking-wide">{item.stat}</p>
                        <p className="text-neutral-400">{item.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="relative h-96 bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 rounded-lg border border-brand-orange/30 overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-playfair font-bold text-brand-orange/20 mb-4">
                      Global
                    </div>
                    <p className="text-neutral-500 text-lg">Immigration & Travel Advisory</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Success Stories */}
      <div className="fade-in-section">
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-widest text-brand-orange mb-4">Client Testimonials</p>
              <h2 className="text-5xl sm:text-6xl font-playfair font-bold mb-6">
                Stories of Success
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Real experiences from clients who achieved their immigration goals with our guidance.
              </p>
            </motion.div>

            <Testimonials />
          </div>
        </section>
      </div>

      {/* Premium CTA Section */}
      <div className="fade-in-section">
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-brand-orange to-neutral-900 opacity-95" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.h2
              className="text-6xl sm:text-7xl font-playfair font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Transform Your Future?
            </motion.h2>
            
            <motion.p
              className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Schedule a personalized consultation with our immigration experts to discover your path to global opportunity.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link href="/consultation">
                <Button className="btn-primary bg-white text-brand-orange hover:bg-neutral-100">
                  Book Your Consultation
                </Button>
              </Link>
              <Link href="/success-stories">
                <Button className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-brand-orange">
                  View Success Stories
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div className="fade-in-section">
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  )
}
