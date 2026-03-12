"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const successStories = [
  {
    id: 1,
    name: "Adekunle Okonkwo",
    visaType: "UK Work Visa",
    date: "2024-02-20",
    story:
      "The team at Vingel Travels made my work visa application seamless. Their expert guidance on documentation and interview preparation was invaluable. I was approved on the first attempt!",
    result: "Approved in 3 weeks",
  },
  {
    id: 2,
    name: "Chioma Adeyemi",
    visaType: "Canadian Student Visa",
    date: "2024-02-10",
    story:
      "I was overwhelmed by the student visa process until Vingel Travels stepped in. They guided me through every step and coordinated with my university. I couldn't have done it without them.",
    result: "Approved with full support",
  },
  {
    id: 3,
    name: "Tunde Adedeji",
    visaType: "Schengen Visa",
    date: "2024-01-25",
    story: "Professional, knowledgeable, and thorough. Vingel's team understood European visa requirements better than anyone I consulted. Highly recommended for anyone considering Schengen travel.",
    result: "Multiple entry approved",
  },
  {
    id: 4,
    name: "Grace Abiola",
    visaType: "US Business Visa",
    date: "2024-01-15",
    story:
      "Complex business visa situation resolved expertly. The team provided strategic advice that made my interview stress-free. Professional service from start to finish.",
    result: "Approved for business activities",
  },
  {
    id: 5,
    name: "Emeka Nwosu",
    visaType: "Australian PR",
    date: "2023-12-20",
    story:
      "Permanent residency visa process is complex, but Vingel made it manageable. They assessed my eligibility, prepared documentation, and guided me throughout. Now I'm planning my move!",
    result: "PR approved",
  },
  {
    id: 6,
    name: "Zainab Hassan",
    visaType: "Family Sponsorship",
    date: "2023-12-10",
    story:
      "Reuniting with family abroad seemed daunting, but Vingel's family sponsorship expertise made it possible. Their attention to detail and timely follow-ups were exceptional.",
    result: "Visa approved, family reunited",
  },
]

export default function SuccessStoriesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    review: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Forward to WhatsApp
      const whatsappMessage = `New Review Submission:
Name: ${formData.name}
Email: ${formData.email}
Rating: ${formData.rating}/5 stars
Review: ${formData.review}`

      const whatsappUrl = `https://wa.me/256704365503?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappUrl, "_blank")

      // Forward to Email
      const emailSubject = "New Review Submission - Vingel Travels"
      const emailBody = `New Review Submission:

Name: ${formData.name}
Email: ${formData.email}
Rating: ${formData.rating}/5 stars
Review: ${formData.review}

Please follow up with this customer.`

      const emailUrl = `mailto:info@vingeltravels.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      window.open(emailUrl, "_blank")

      setSubmitted(true)
      setFormData({ name: "", email: "", rating: 5, review: "" })
    } catch (error) {
      console.error("Error submitting review:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our travelers say about their experiences with Vingel Travels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Existing Reviews */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <div className="space-y-6">
              {existingReviews.map((review) => (
                <Card key={review.id} className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{review.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{review.name}</h3>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-lg">
                              ⭐
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{review.review}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Review Form */}
          <div>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Share Your Experience</CardTitle>
                <p className="text-gray-600">We'd love to hear about your journey with Vingel Travels</p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You for Your Review!</h3>
                    <p className="text-gray-600 mb-4">
                      Your review has been forwarded to our team via WhatsApp and email.
                    </p>
                    <Button onClick={() => setSubmitted(false)} className="bg-orange-600 hover:bg-orange-700">
                      Write Another Review
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Your Name *</Label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Rating *</Label>
                      <div className="flex space-x-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingChange(star)}
                            className={`text-2xl ${
                              star <= formData.rating ? "text-yellow-400" : "text-gray-300"
                            } hover:text-yellow-400 transition-colors`}
                          >
                            ⭐
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="review">Your Review *</Label>
                      <Textarea
                        id="review"
                        name="review"
                        value={formData.review}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Tell us about your experience with Vingel Travels..."
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Review"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
