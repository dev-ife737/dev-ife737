"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    id: 1,
    question: "How do I book a trip with Vingel Travels?",
    answer:
      "You can book a trip by filling out our booking form on the website, calling us directly at +256 704 365 503, or messaging us on WhatsApp. Our team will work with you to create a personalized itinerary.",
  },
  {
    id: 2,
    question: "What destinations do you offer?",
    answer:
      "We offer travel packages to destinations worldwide, including popular locations in Africa, Europe, Asia, and the Americas. Our specialty is East African destinations, but we can arrange travel anywhere you'd like to go.",
  },
  {
    id: 3,
    question: "Do you provide travel insurance?",
    answer:
      "Yes, we strongly recommend travel insurance and can help you find the right coverage for your trip. We work with reputable insurance providers to ensure you're protected during your travels.",
  },
  {
    id: 4,
    question: "What is included in your tour packages?",
    answer:
      "Our packages typically include accommodation, transportation, guided tours, and some meals. The exact inclusions vary by package, and we'll provide a detailed itinerary with all inclusions clearly listed.",
  },
  {
    id: 5,
    question: "Can you arrange custom itineraries?",
    answer:
      "We specialize in creating custom itineraries tailored to your preferences, budget, and travel dates. Just let us know what you're looking for, and we'll design the perfect trip for you.",
  },
  {
    id: 6,
    question: "What are your payment options?",
    answer:
      "We accept various payment methods including bank transfers, mobile money, and cash payments. We typically require a deposit to secure your booking, with the balance due before departure.",
  },
  {
    id: 7,
    question: "Do you offer group discounts?",
    answer:
      "Yes, we offer attractive discounts for group bookings. The discount amount depends on the group size and destination. Contact us for a custom quote for your group.",
  },
  {
    id: 8,
    question: "What happens if I need to cancel my trip?",
    answer:
      "Our cancellation policy varies depending on the timing and type of booking. We'll explain all terms and conditions before you book, and we always try to work with our clients to find the best solution.",
  },
  {
    id: 9,
    question: "Do you provide 24/7 support during travel?",
    answer:
      "Yes, we provide round-the-clock support for all our travelers. You'll have emergency contact numbers and can reach us anytime if you need assistance during your trip.",
  },
  {
    id: 10,
    question: "What makes Vingel Travels different from other agencies?",
    answer:
      "Our personalized service, local expertise, competitive pricing, and commitment to customer satisfaction set us apart. We treat every client like family and go the extra mile to ensure your trip exceeds expectations.",
  },
]

export default function FAQsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and booking process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="bg-white shadow-sm">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <span className="text-2xl text-orange-600 flex-shrink-0">{openFAQ === faq.id ? "−" : "+"}</span>
                  </div>
                </button>

                {openFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">Our travel experts are here to help you plan the perfect trip</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+256704365503"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              📞 Call Us Now
            </a>
            <a
              href="https://wa.me/256704365503"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
