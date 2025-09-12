"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    preferredContact: "",

    // Travel Details
    destinations: "",
    tripType: "",
    departureCity: "",
    departureDate: "",
    departureDateFlexible: false,
    returnDate: "",
    returnDateFlexible: false,
    adults: "1",
    children: "0",
    infants: "0",
    preferredAirline: "",
    cabinClass: "",

    // Accommodation
    accommodationType: "",
    starRating: "",
    roomType: "",
    accommodationRequests: "",

    // Budget & Preferences
    budgetRange: "",
    currency: "",
    paymentMethod: "",
    activities: [],
    visaAssistance: false,
    airportTransfers: false,
    insurance: false,

    // Additional Notes
    additionalNotes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      if (name === "activities") {
        const currentActivities = formData.activities || []
        setFormData((prev) => ({
          ...prev,
          activities: checked
            ? [...currentActivities, value]
            : currentActivities.filter((activity) => activity !== value),
        }))
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Generate booking reference
      const bookingRef = `VT${Date.now().toString().slice(-6)}`

      // Format form data for email
      const emailBody = `
New Booking Request - ${bookingRef}

PERSONAL DETAILS:
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
WhatsApp: ${formData.whatsapp}
Preferred Contact: ${formData.preferredContact}

TRAVEL DETAILS:
Destinations: ${formData.destinations}
Trip Type: ${formData.tripType}
Departure City: ${formData.departureCity}
Departure Date: ${formData.departureDate} ${formData.departureDateFlexible ? "(Flexible)" : ""}
Return Date: ${formData.returnDate} ${formData.returnDateFlexible ? "(Flexible)" : ""}
Travelers: ${formData.adults} Adults, ${formData.children} Children, ${formData.infants} Infants
Preferred Airline: ${formData.preferredAirline}
Cabin Class: ${formData.cabinClass}

ACCOMMODATION:
Type: ${formData.accommodationType}
Star Rating: ${formData.starRating}
Room Type: ${formData.roomType}
Special Requests: ${formData.accommodationRequests}

BUDGET & PREFERENCES:
Budget Range: ${formData.budgetRange}
Currency: ${formData.currency}
Payment Method: ${formData.paymentMethod}
Activities: ${formData.activities.join(", ")}
Visa Assistance: ${formData.visaAssistance ? "Yes" : "No"}
Airport Transfers: ${formData.airportTransfers ? "Yes" : "No"}
Insurance: ${formData.insurance ? "Yes" : "No"}

ADDITIONAL NOTES:
${formData.additionalNotes}
      `.trim()

      // Send WhatsApp notification
      const whatsappMessage = `🎯 NEW BOOKING REQUEST - ${bookingRef}

👤 ${formData.fullName}
📧 ${formData.email}
📱 ${formData.phone}

🌍 Destination: ${formData.destinations}
✈️ Trip Type: ${formData.tripType}
📅 Departure: ${formData.departureDate}
👥 Travelers: ${formData.adults} Adults, ${formData.children} Children

💰 Budget: ${formData.budgetRange}

Full details sent to info@vingeltravels.com`

      const whatsappUrl = `https://wa.me/2348036386134?text=${encodeURIComponent(whatsappMessage)}`

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank")

      // Simulate email sending (in real implementation, this would be handled by a backend API)
      console.log("Email would be sent to info@vingeltravels.com with:", emailBody)

      setSubmitStatus("success")
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        whatsapp: "",
        preferredContact: "",
        destinations: "",
        tripType: "",
        departureCity: "",
        departureDate: "",
        departureDateFlexible: false,
        returnDate: "",
        returnDateFlexible: false,
        adults: "1",
        children: "0",
        infants: "0",
        preferredAirline: "",
        cabinClass: "",
        accommodationType: "",
        starRating: "",
        roomType: "",
        accommodationRequests: "",
        budgetRange: "",
        currency: "",
        paymentMethod: "",
        activities: [],
        visaAssistance: false,
        airportTransfers: false,
        insurance: false,
        additionalNotes: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const tripTypes = [
    "Vacation/Holiday",
    "Honeymoon",
    "Business Travel",
    "Family Trip",
    "Solo Travel",
    "Group Travel",
    "Religious/Pilgrimage",
    "Medical Tourism",
  ]

  const activities = [
    "City Tours",
    "Safari",
    "Nightlife",
    "Shopping",
    "Food & Dining",
    "Cultural Experiences",
    "Religious Sites",
    "Adventure Sports",
    "Beach Activities",
    "Museums & Art",
    "Photography",
    "Business Meetings",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2D2D2D] mb-4">Professional Trip Booking</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Request a personalized itinerary and quote. Our experts will create the perfect trip for you.
          </p>
        </div>

        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h3 className="text-green-800 font-semibold mb-2">Thank you for booking with Vingel Travels!</h3>
            <p className="text-green-700">
              Our team will review your details and contact you shortly with your personalized itinerary.
            </p>
          </div>
        )}

        <Card className="shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Details */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Personal Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="font-semibold">
                      Full Name (as on passport) *
                    </Label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-[#f37021]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-[#f37021]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-[#f37021]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp" className="font-semibold">
                      WhatsApp Number *
                    </Label>
                    <Input
                      name="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-[#f37021]"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="preferredContact" className="font-semibold">
                      Preferred Contact Method *
                    </Label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="mt-2 w-full border-2 border-gray-300 focus:border-[#f37021] rounded-md p-3"
                      required
                    >
                      <option value="">Select preferred contact</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Travel Details */}
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Travel Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="destinations" className="font-semibold">
                      Destination(s) *
                    </Label>
                    <Input
                      name="destinations"
                      value={formData.destinations}
                      onChange={handleInputChange}
                      placeholder="e.g., London, Paris, Dubai"
                      className="mt-2 border-2 focus:border-[#f37021]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="tripType" className="font-semibold">
                      Trip Type *
                    </Label>
                    <select
                      name="tripType"
                      value={formData.tripType}
                      onChange={handleInputChange}
                      className="mt-2 w-full border-2 border-gray-300 focus:border-[#f37021] rounded-md p-3"
                      required
                    >
                      <option value="">Select trip type</option>
                      {tripTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="departureCity" className="font-semibold">
                      Departure City *
                    </Label>
                    <Input
                      name="departureCity"
                      value={formData.departureCity}
                      onChange={handleInputChange}
                      placeholder="e.g., Lagos, Abuja"
                      className="mt-2 border-2 focus:border-[#f37021]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="departureDate" className="font-semibold">
                      Departure Date *
                    </Label>
                    <Input
                      name="departureDate"
                      type="date"
                      value={formData.departureDate}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-[#f37021]"
                      required
                    />
                    <div className="mt-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="departureDateFlexible"
                          checked={formData.departureDateFlexible}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-sm">Flexible dates</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="returnDate" className="font-semibold">
                      Return Date
                    </Label>
                    <Input
                      name="returnDate"
                      type="date"
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-[#f37021]"
                    />
                    <div className="mt-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="returnDateFlexible"
                          checked={formData.returnDateFlexible}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-sm">Flexible dates</span>
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="adults" className="font-semibold">
                        Adults *
                      </Label>
                      <select
                        name="adults"
                        value={formData.adults}
                        onChange={handleInputChange}
                        className="mt-2 w-full border-2 border-gray-300 focus:border-[#f37021] rounded-md p-3"
                        required
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="children" className="font-semibold">
                        Children
                      </Label>
                      <select
                        name="children"
                        value={formData.children}
                        onChange={handleInputChange}
                        className="mt-2 w-full border-2 border-gray-300 focus:border-[#f37021] rounded-md p-3"
                      >
                        {[0, 1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="infants" className="font-semibold">
                        Infants
                      </Label>
                      <select
                        name="infants"
                        value={formData.infants}
                        onChange={handleInputChange}
                        className="mt-2 w-full border-2 border-gray-300 focus:border-[#f37021] rounded-md p-3"
                      >
                        {[0, 1, 2, 3].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="preferredAirline" className="font-semibold">
                      Preferred Airline
                    </Label>
                    <Input
                      name="preferredAirline"
                      value={formData.preferredAirline}
                      onChange={handleInputChange}
                      placeholder="e.g., Emirates, British Airways"
                      className="mt-2 border-2 focus:border-[#f37021]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cabinClass" className="font-semibold">
                      Cabin Class
                    </Label>
                    <select
                      name="cabinClass"
                      value={formData.cabinClass}
                      onChange={handleInputChange}
                      className="mt-2 w-full border-2 border-gray-300 focus:border-[#f37021] rounded-md p-3"
                    >
                      <option value="">Select class</option>
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business">Business</option>
                      <option value="First Class">First Class</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Accommodation */}
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Accommodation Preferences</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="accommodationType" className="font-semibold">
                      Accommodation Type
                    </Label>
                    <select
                      name="accommodationType"
                      value={formData.accommodationType}
                      onChange={handleInputChange}
                      className="mt-2 w-full border-2 border-gray-300 focus:border-[#f37021] rounded-md p-3"
                    >
                      <option value="">Select type</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Resort">Resort</option>
                      <option value="Serviced Apartment">Serviced Apartment</option>
                      <option value="Airbnb">Airbnb</option>
                      <option value="Boutique Hotel">Boutique Hotel</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="starRating" className="font-semibold">
                      Star Rating
                    </Label>
                    <select
                      name="starRating"
                      value={formData.starRating}
                      onChange={handleInputChange}
                      className="mt-2 w-full border-2 border-gray-300 focus:border-[#f37021] rounded-md p-3"
                    >
                      <option value="">Select rating</option>
                      <option value="3 Star">3 Star</option>
                      <option value="4 Star">4 Star</option>
                      <option value="5 Star">5 Star</option>
                      <option value="Luxury">Luxury</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="roomType" className="font-semibold">
                      Room Type
                    </Label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      className="mt-2 w-full border-2 border-gray-300 focus:border-[#f37021] rounded-md p-3"
                    >
                      <option value="">Select room type</option>
                      <option value="Single">Single</option>
                      <option value="Double">Double</option>
                      <option value="Twin">Twin</option>
                      <option value="Family Room">Family Room</option>
                      <option value="Suite">Suite</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="accommodationRequests" className="font-semibold">
                      Special Requests
                    </Label>
                    <Input
                      name="accommodationRequests"
                      value={formData.accommodationRequests}
                      onChange={handleInputChange}
                      placeholder="e.g., Ocean view, ground floor"
                      className="mt-2 border-2 focus:border-[#f37021]"
                    />
                  </div>
                </div>
              </div>

              {/* Budget & Preferences */}
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Budget & Preferences</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budgetRange" className="font-semibold">
                      Budget Range *
                    </Label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="mt-2 w-full border-2 border-gray-300 focus:border-[#f37021] rounded-md p-3"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="Over $10,000">Over $10,000</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="currency" className="font-semibold">
                      Preferred Currency *
                    </Label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                      className="mt-2 w-full border-2 border-gray-300 focus:border-[#f37021] rounded-md p-3"
                      required
                    >
                      <option value="">Select currency</option>
                      <option value="NGN">Nigerian Naira (₦)</option>
                      <option value="USD">US Dollar ($)</option>
                      <option value="EUR">Euro (€)</option>
                      <option value="GBP">British Pound (£)</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="paymentMethod" className="font-semibold">
                      Payment Method
                    </Label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="mt-2 w-full border-2 border-gray-300 focus:border-[#f37021] rounded-md p-3"
                    >
                      <option value="">Select payment method</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="Card Payment">Card Payment</option>
                      <option value="Installments">Installments</option>
                      <option value="Cash">Cash</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <Label className="font-semibold">Activities of Interest</Label>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                      {activities.map((activity) => (
                        <label key={activity} className="flex items-center">
                          <input
                            type="checkbox"
                            name="activities"
                            value={activity}
                            checked={formData.activities.includes(activity)}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span className="text-sm">{activity}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2 grid grid-cols-3 gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="visaAssistance"
                        checked={formData.visaAssistance}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Visa Assistance</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="airportTransfers"
                        checked={formData.airportTransfers}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Airport Transfers</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="insurance"
                        checked={formData.insurance}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Travel Insurance</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Tell Us More</h3>
                <div>
                  <Label htmlFor="additionalNotes" className="font-semibold">
                    Additional Notes
                  </Label>
                  <Textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us more about your dream trip, special occasions, preferences, or any other details..."
                    className="mt-2 border-2 focus:border-[#f37021]"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#f37021] hover:bg-[#d85f1a] text-white font-bold px-12 py-4 rounded-xl text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  By submitting this form, you agree to our terms and conditions. We'll contact you within 24 hours.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
