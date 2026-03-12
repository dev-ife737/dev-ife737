'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function TravelServices() {
  const services = [
    {
      title: 'Flight Booking',
      description: 'Access to global flight options through our trusted partners with competitive rates and flexible payment options.',
      icon: '✈️'
    },
    {
      title: 'Hotel & Accommodation',
      description: 'Curated hotel selections and accommodation arrangements at verified properties worldwide.',
      icon: '🏨'
    },
    {
      title: 'Tour & Activity Planning',
      description: 'Expertly planned tours, guided experiences, and activities tailored to your interests.',
      icon: '🗺️'
    },
    {
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance coverage for peace of mind during your journey.',
      icon: '🛡️'
    },
    {
      title: 'Visa & Documentation',
      description: 'Complete visa application support integrated with your travel arrangements.',
      icon: '📋'
    },
    {
      title: 'Travel Consultation',
      description: 'Personalized travel planning and itinerary design from our experienced travel advisors.',
      icon: '💼'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Travel Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Complementary travel services to support your journey. From flights and accommodation to tours and travel insurance, we handle the details so you can focus on your experience.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Travel Solutions</h2>
            <p className="text-xl text-gray-600">Everything you need for a seamless travel experience</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#f37021] hover:shadow-lg transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with Immigration Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Integrated Travel & Immigration Planning</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our travel services are designed to work seamlessly with our immigration advisory expertise. Whether you're traveling for business, education, or relocation, we coordinate every aspect of your journey—from visa applications to accommodations and ground arrangements.
            </p>
            <div className="bg-white border-l-4 border-[#f37021] p-8 text-left rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#f37021] font-bold mr-4">1.</span>
                  <span>Assess your immigration and travel needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f37021] font-bold mr-4">2.</span>
                  <span>Provide visa guidance aligned with your travel timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f37021] font-bold mr-4">3.</span>
                  <span>Arrange flights, accommodations, and activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f37021] font-bold mr-4">4.</span>
                  <span>Provide travel insurance and document support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f37021] font-bold mr-4">5.</span>
                  <span>Ensure smooth coordination throughout your journey</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Networks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted Partner Networks</h2>
            <p className="text-xl text-gray-600">Access to global providers for flights, hotels, and tours</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Travelstart', description: 'Global flight and travel booking platform' },
              { name: 'Viator', description: 'Premium tours and activities worldwide' },
              { name: 'Expedia', description: 'Hotels, flights, and complete travel bundles' }
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f37021] to-[#d85f1a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Plan Your Complete Travel & Immigration Journey
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let us handle both your visa needs and travel arrangements for a seamless experience.
          </motion.p>
          <Link href="/consultation">
            <Button size="lg" className="bg-white text-[#f37021] hover:bg-gray-100 text-lg font-semibold px-8 py-3">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
