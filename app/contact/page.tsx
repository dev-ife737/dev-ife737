"use client"

import type React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactOptions from "@/components/contact-options"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactMethod: "whatsapp",
  })

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/2348036386134?text=Hello! I'd like to get in touch with Vingel Travels.", "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.contactMethod === "whatsapp" || formData.contactMethod === "both") {
      const whatsappMessage = `Hello Vingel Travels!

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message: ${formData.message}

Please get back to me at your earliest convenience.`

      window.open(`https://wa.me/2348036386134?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
    }

    if (formData.contactMethod === "email" || formData.contactMethod === "both") {
      const emailSubject = encodeURIComponent(`Contact Form: ${formData.subject}`)
      const emailBody = encodeURIComponent(`Hello Vingel Travels,

Name: ${formData.name}
Phone: ${formData.phone}

Message: ${formData.message}

Please get back to me at your earliest convenience.

Best regards,
${formData.name}`)

      window.open(`mailto:info@vingeltravels.com?subject=${emailSubject}&body=${emailBody}`, "_blank")
    }

    const methodText =
      formData.contactMethod === "both"
        ? "WhatsApp and Email"
        : formData.contactMethod === "whatsapp"
          ? "WhatsApp"
          : "Email"

    alert(`Your message has been prepared for ${methodText}! We'll respond as soon as possible.`)

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      contactMethod: "whatsapp",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help you plan your perfect journey. Reach out to us anytime!
          </p>
        </div>

        <ContactOptions />

        {/* Contact Information & Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>

                <div className="space-y-8">
                  {/* Nigeria Office */}
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-green-100 p-3 rounded-full">
                          <span className="text-2xl">🇳🇬</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">Nigeria Office</h3>
                          <div className="space-y-2 text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-[rgb(253,124,71)]" />
                              <span>+234 803 638 6134</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-[rgb(253,124,71)]" />
                              <span>+234 809 304 7021</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4 text-[rgb(253,124,71)]" />
                              <span>info@vingeltravels.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* UK Office */}
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <span className="text-2xl">🇬🇧</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">UK Office</h3>
                          <div className="space-y-2 text-gray-600">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-[rgb(253,124,71)]" />
                              <span>34 Hatton Garden, London EC1N 8DX, UK</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-[rgb(253,124,71)]" />
                              <span>+44 749 686 1913</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4 text-[rgb(253,124,71)]" />
                              <span>uk@vingeltravels.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Business Hours */}
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-100 p-3 rounded-full">
                          <Clock className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h3>
                          <div className="space-y-1 text-gray-600">
                            <p>Monday - Saturday: 8:00 AM - 6:00 PM (WAT)</p>
                            <p className="text-[rgb(253,124,71)] font-medium">Sunday: Closed</p>
                            <p className="text-sm text-gray-500 mt-2">
                              WhatsApp support available 24/7 for urgent inquiries
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                    <p className="text-gray-600 mb-6">
                      Choose how you'd like to send your message - via WhatsApp, Email, or both for maximum reach.
                    </p>

                    {/* Contact Method Selection */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Contact Method</label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, contactMethod: "whatsapp" })}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            formData.contactMethod === "whatsapp"
                              ? "border-[rgb(253,124,71)] bg-[rgb(253,124,71)]/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <MessageCircle className="w-5 h-5 text-green-600 mx-auto mb-1" />
                          <span className="text-xs font-medium">WhatsApp</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, contactMethod: "email" })}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            formData.contactMethod === "email"
                              ? "border-[rgb(253,124,71)] bg-[rgb(253,124,71)]/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <Mail className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                          <span className="text-xs font-medium">Email</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, contactMethod: "both" })}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            formData.contactMethod === "both"
                              ? "border-[rgb(253,124,71)] bg-[rgb(253,124,71)]/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex justify-center space-x-1 mb-1">
                            <MessageCircle className="w-4 h-4 text-green-600" />
                            <Mail className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-xs font-medium">Both</span>
                        </button>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="border-2 focus:border-[rgb(253,124,71)]"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="border-2 focus:border-[rgb(253,124,71)]"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-2 focus:border-[rgb(253,124,71)]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="border-2 focus:border-[rgb(253,124,71)]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="border-2 focus:border-[rgb(253,124,71)]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full btn-primary py-3">
                        <Send className="w-4 h-4 mr-2" />
                        Send via{" "}
                        {formData.contactMethod === "both"
                          ? "WhatsApp & Email"
                          : formData.contactMethod === "whatsapp"
                            ? "WhatsApp"
                            : "Email"}
                      </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-center space-x-1">
                          <MessageCircle className="w-4 h-4 text-green-600" />
                          <span>WhatsApp: Instant response</span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <Mail className="w-4 h-4 text-blue-600" />
                          <span>Email: Within 4 hours</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
