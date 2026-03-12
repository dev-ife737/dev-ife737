"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
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
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      {/* Immigration Advisory Highlights */}
      <div className="fade-in-section">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Immigration Advisory Services</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">Expert guidance on visa applications, immigration law, and travel documentation to help you achieve your global goals.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { title: "Visa Assessment", desc: "Personalized evaluation of your visa options" },
                { title: "Documentation Support", desc: "Complete guidance on required documents" },
                { title: "Interview Prep", desc: "Thorough preparation for visa interviews" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-8 rounded-lg border-l-4 border-[#f37021] shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/immigration-advisory">
                <Button size="lg" className="bg-[#f37021] hover:bg-[#d85f1a] text-white font-semibold px-8 py-3">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <div className="fade-in-section">
        <AboutSection />
      </div>

      {/* Why Choose Us - Immigration Focused */}
      <div className="fade-in-section">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Vingel Travels & Tours?</h2>
              <p className="text-xl text-gray-700">Your trusted partner for immigration and travel services</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Immigration Expertise</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#f37021] font-bold mr-3">✓</span>
                    <span>10+ years of immigration advisory experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f37021] font-bold mr-3">✓</span>
                    <span>1,000+ successful visa applications processed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f37021] font-bold mr-3">✓</span>
                    <span>95% visa approval success rate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f37021] font-bold mr-3">✓</span>
                    <span>Expert knowledge of multiple visa categories</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Support</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#f37021] font-bold mr-3">✓</span>
                    <span>Personalized consultation and visa assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f37021] font-bold mr-3">✓</span>
                    <span>Document preparation and guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f37021] font-bold mr-3">✓</span>
                    <span>Interview preparation and coaching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f37021] font-bold mr-3">✓</span>
                    <span>Integrated travel services coordination</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Services Section */}
      <div className="fade-in-section">
        <ServicesSection />
      </div>

      {/* Success Stories */}
      <div className="fade-in-section">
        <Testimonials />
      </div>

      {/* CTA Section */}
      <div className="fade-in-section">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f37021] to-[#d85f1a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Achieve Your Immigration Goals?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Schedule a consultation with our immigration and travel advisors to discuss your visa options and create a personalized strategy.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button size="lg" className="bg-white text-[#f37021] hover:bg-gray-100 text-lg font-semibold px-8 py-3">
                  Book Consultation
                </Button>
              </Link>
              <Link href="/success-stories">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg font-semibold px-8 py-3">
                  Read Success Stories
                </Button>
              </Link>
            </div>
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
