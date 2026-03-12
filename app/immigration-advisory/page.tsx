'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ImmigrationAdvisory() {
  const services = [
    {
      title: 'Visa Assessment & Planning',
      description: 'Comprehensive evaluation of your visa options and personalized immigration strategy based on your goals and circumstances.',
      details: ['Eligibility assessment', 'Visa type selection', 'Timeline planning', 'Document preparation roadmap']
    },
    {
      title: 'Documentation Guidance',
      description: 'Expert assistance with gathering, organizing, and preparing all required documents for visa applications.',
      details: ['Document checklist', 'Translation services', 'Notarization guidance', 'Quality assurance review']
    },
    {
      title: 'Application Support',
      description: 'Professional guidance through the entire visa application process to maximize approval chances.',
      details: ['Form completion', 'Application review', 'Submission assistance', 'Follow-up coordination']
    },
    {
      title: 'Interview Preparation',
      description: 'Thorough preparation for visa interviews including common questions, documentation review, and confidence building.',
      details: ['Interview coaching', 'Question practice', 'Documentation strategy', 'Presentation tips']
    },
    {
      title: 'Policy & Requirement Updates',
      description: 'Stay informed about the latest immigration policies, visa requirement changes, and procedural updates.',
      details: ['Policy monitoring', 'Requirement updates', 'Process changes', 'New opportunities']
    },
    {
      title: 'Post-Approval Guidance',
      description: 'Support with visa processing, arrival preparations, and integration guidance for your destination country.',
      details: ['Visa processing', 'Travel arrangements', 'Accommodation guidance', 'Integration resources']
    }
  ]

  const visaTypes = [
    { name: 'Work Visa', description: 'Employment-based immigration and work permit guidance' },
    { name: 'Student Visa', description: 'Education visa applications and institution verification' },
    { name: 'Family Sponsorship', description: 'Family reunification and dependent visa support' },
    { name: 'Business Visa', description: 'Entrepreneur and business immigration solutions' },
    { name: 'Schengen Visa', description: 'European travel and residence visa expertise' },
    { name: 'Residency Programs', description: 'Permanent residency and citizenship pathway guidance' }
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
            Immigration Advisory Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert guidance on visa applications, immigration law, and travel documentation. Our advisors have over 10+ years of experience helping clients navigate complex immigration processes with confidence.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">Comprehensive immigration advisory tailored to your unique situation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg p-8 hover:border-[#f37021] hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-[#f37021] mr-3 font-bold">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visa Categories We Serve</h2>
            <p className="text-xl text-gray-600">Expertise across multiple immigration pathways</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg border-l-4 border-[#f37021] hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{visa.name}</h3>
                <p className="text-gray-600">{visa.description}</p>
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
            Ready to Start Your Immigration Journey?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Schedule a consultation with our immigration experts to discuss your visa options and create a personalized strategy.
          </motion.p>
          <Link href="/consultation">
            <Button size="lg" className="bg-white text-[#f37021] hover:bg-gray-100 text-lg font-semibold px-8 py-3">
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
