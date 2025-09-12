"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - could integrate with EmailJS or other service
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-[#2D2D2D] mb-6 fade-in-up">
            Start Your Journey Today
          </h2>
          <p className="font-inter text-xl text-[#2D2D2D]/80 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Ready to explore the world? Get in touch with our travel experts and let us craft your perfect adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="fade-in-up">
            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="font-poppins text-2xl font-bold text-[#2D2D2D] mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-inter font-medium text-[#2D2D2D] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-inter font-medium text-[#2D2D2D] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block font-inter font-medium text-[#2D2D2D] mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your WhatsApp number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-inter font-medium text-[#2D2D2D] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your travel plans..."
                    />
                  </div>

                  <Button type="submit" className="w-full btn-primary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="fade-in-up space-y-8">
            <div>
              <h3 className="font-poppins text-2xl font-bold text-[#2D2D2D] mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[#2D2D2D] mb-1">Our Location</h4>
                    <p className="font-inter text-[#2D2D2D]/80">Operating in Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[#2D2D2D] mb-1">Email Us</h4>
                    <p className="font-inter text-[#2D2D2D]/80">info@vingeltravels.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[#2D2D2D] mb-1">WhatsApp</h4>
                    <p className="font-inter text-[#2D2D2D]/80">Available 24/7 for instant support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[#2D2D2D] mb-1">Website</h4>
                    <p className="font-inter text-[#2D2D2D]/80">www.vingeltravels.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-[#FF6600]/10 to-[#FF6600]/5 rounded-2xl p-8">
              <h4 className="font-poppins text-xl font-bold text-[#2D2D2D] mb-4">Why Choose Us?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6600] mb-1">1,000+</div>
                  <div className="text-sm font-inter text-[#2D2D2D]/80">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6600] mb-1">95%</div>
                  <div className="text-sm font-inter text-[#2D2D2D]/80">Visa Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6600] mb-1">24/7</div>
                  <div className="text-sm font-inter text-[#2D2D2D]/80">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6600] mb-1">50+</div>
                  <div className="text-sm font-inter text-[#2D2D2D]/80">Destinations</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button className="w-full btn-primary">Book Consultation Call</Button>
              <Button variant="outline" className="w-full btn-secondary bg-transparent">
                Download Travel Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
