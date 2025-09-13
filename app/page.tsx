"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Affliatesection from "@/components/Affliatesection"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { useEffect } from "react"

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
      <div className="fade-in-section">
        <Affliatesection />
      </div>
      <div className="fade-in-section">
        <AboutSection />
      </div>
      <div className="fade-in-section">
        <ServicesSection />
      </div>
      <div className="fade-in-section">
        <Testimonials />
      </div>
      <div className="fade-in-section">
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}
