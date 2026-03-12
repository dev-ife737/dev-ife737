'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function ConsultationBooking() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    currentResidence: '',
    serviceType: 'immigration',
    visaType: '',
    desiredDestination: '',
    timeframe: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send to email
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'info@vingeltravels.com',
          subject: `New Consultation Request from ${formData.fullName}`,
          html: `
            <h2>New Consultation Request</h2>
            <p><strong>Name:</strong> ${formData.fullName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Service Type:</strong> ${formData.serviceType}</p>
            <p><strong>Visa Type:</strong> ${formData.visaType || 'N/A'}</p>
            <p><strong>Desired Destination:</strong> ${formData.desiredDestination || 'N/A'}</p>
            <p><strong>Timeframe:</strong> ${formData.timeframe}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          `
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          country: '',
          currentResidence: '',
          serviceType: 'immigration',
          visaType: '',
          desiredDestination: '',
          timeframe: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
    
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Book Your Consultation
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Schedule a personalized consultation with our immigration and travel advisors
          </motion.p>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation Request Submitted</h2>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for reaching out! Our team will review your request and contact you within 24 hours to confirm your consultation time.
              </p>
              <p className="text-gray-600 mb-4">
                You can also reach us directly:
              </p>
              <div className="space-y-2 text-gray-600">
                <p>Email: <strong>info@vingeltravels.com</strong></p>
                <p>WhatsApp: <strong>+234 803 638 6134</strong></p>
              </div>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-lg p-8 border border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f37021]"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f37021]"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f37021]"
                    placeholder="+234 8XX XXX XXXX"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Type *</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f37021]"
                  >
                    <option value="immigration">Immigration Advisory</option>
                    <option value="visa">Visa Assistance</option>
                    <option value="travel">Travel Services</option>
                    <option value="combined">Immigration + Travel</option>
                  </select>
                </div>

                {/* Visa Type */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Visa Type (if applicable)</label>
                  <select
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f37021]"
                  >
                    <option value="">Select visa type</option>
                    <option value="work">Work Visa</option>
                    <option value="student">Student Visa</option>
                    <option value="family">Family Sponsorship</option>
                    <option value="business">Business Visa</option>
                    <option value="schengen">Schengen Visa</option>
                    <option value="residency">Residency/PR</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Desired Destination */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Desired Destination Country</label>
                  <input
                    type="text"
                    name="desiredDestination"
                    value={formData.desiredDestination}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f37021]"
                    placeholder="e.g., Canada, UK, Australia"
                  />
                </div>

                {/* Timeframe */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">When are you planning to travel/relocate? *</label>
                  <select
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f37021]"
                  >
                    <option value="">Select timeframe</option>
                    <option value="within3months">Within 3 months</option>
                    <option value="3to6months">3-6 months</option>
                    <option value="6to12months">6-12 months</option>
                    <option value="over12months">Over 12 months</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Additional Information</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f37021] resize-none"
                    placeholder="Tell us about your situation, questions, or specific needs..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f37021] hover:bg-[#d85f1a] text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We'll review your request and contact you within 24 hours
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
            <p className="text-lg text-gray-600">Reach out to us directly if you prefer</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg border-l-4 border-[#f37021]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email</h3>
              <p className="text-lg text-[#f37021] font-semibold">info@vingeltravels.com</p>
              <p className="text-gray-600 mt-2">Response within 24 hours</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg border-l-4 border-[#f37021]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WhatsApp</h3>
              <p className="text-lg text-[#f37021] font-semibold">+234 803 638 6134</p>
              <p className="text-gray-600 mt-2">Quick messaging for urgent inquiries</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
