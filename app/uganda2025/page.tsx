import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import UgandaBanner from "@/components/uganda-banner"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Uganda2025Page() {
  const itinerary = [
    {
      day: "Day 1 - December 28",
      title: "Arrival in Kampala",
      activities: [
        "Airport pickup and transfer to hotel",
        "Welcome dinner at local restaurant",
        "Evening city orientation tour",
      ],
    },
    {
      day: "Day 2 - December 29",
      title: "Kampala City Tour",
      activities: [
        "Visit Uganda Museum and cultural sites",
        "Explore local markets and craft centers",
        "Traditional Ugandan lunch experience",
      ],
    },
    {
      day: "Day 3 - December 30",
      title: "Nature & Wildlife",
      activities: [
        "Day trip to nearby national park",
        "Wildlife viewing and nature walks",
        "Picnic lunch in natural setting",
      ],
    },
    {
      day: "Day 4 - December 31",
      title: "New Year's Eve Celebration",
      activities: [
        "Cultural performances and local entertainment",
        "Traditional New Year's Eve dinner",
        "Midnight celebration with fireworks",
      ],
    },
    {
      day: "Day 5 - January 1",
      title: "New Year's Day",
      activities: [
        "Relaxed morning and brunch",
        "Visit to local community projects",
        "Farewell dinner and cultural show",
      ],
    },
    {
      day: "Day 6 - January 2",
      title: "Departure",
      activities: ["Final shopping and souvenir hunting", "Airport transfer", "Safe journey home"],
    },
  ]

  const inclusions = [
    "5 nights accommodation in quality hotels",
    "All meals as specified in itinerary",
    "Airport transfers and local transportation",
    "Professional English-speaking guide",
    "All entrance fees and activities",
    "New Year's Eve celebration dinner",
    "Cultural performances and entertainment",
    "Travel insurance coverage",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <UgandaBanner />

      {/* Event Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience Uganda Like Never Before</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Join us for an unforgettable New Year celebration in the heart of Uganda! This exclusive 6-day,
                  5-night experience combines cultural immersion, natural beauty, and festive celebrations.
                </p>
                <p>
                  Discover the warmth of Ugandan hospitality, explore vibrant markets, witness incredible wildlife, and
                  ring in 2025 with traditional music, dance, and cuisine that will create memories to last a lifetime.
                </p>
                <p>
                  Our carefully crafted itinerary balances adventure with relaxation, ensuring you experience the best
                  of Uganda while enjoying comfortable accommodations and expert guidance throughout your journey.
                </p>
              </div>

              {/* Pricing */}
              <div className="mt-8 bg-orange-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Launch Price</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl font-bold text-orange-600">$130</span>
                  <span className="text-lg text-gray-600">per person</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  *Limited time offer. Price includes all activities, meals, and accommodation.
                </p>
                <Link href="/booking">
                  <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Book Your Spot Now - $130
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/jungle-stream.jpg" alt="Uganda landscape" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your 6-Day Adventure Itinerary</h2>
            <p className="text-xl text-gray-600">Every moment carefully planned for maximum enjoyment</p>
          </div>

          <div className="space-y-8">
            {itinerary.map((day, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="text-orange-600 font-semibold text-lg">{day.day}</div>
                    <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                  </div>
                  <div className="md:w-3/4">
                    <ul className="space-y-2">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start space-x-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included in Your $130 Package</h2>
            <p className="text-xl text-gray-600">Everything you need for an amazing experience</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inclusions.map((inclusion, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-green-500 text-xl mt-1">✓</span>
                <span className="text-gray-700">{inclusion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Limited Spots Available!</h2>
          <p className="text-xl text-orange-100 mb-8">
            Don't miss this incredible opportunity to experience Uganda and celebrate New Year 2025 in style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3">
                Book Now - Only $130
              </Button>
            </Link>
            <a
              href="tel:+256704365503"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-orange-600 rounded-lg transition-colors text-lg font-semibold"
            >
              📞 Call for Details
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
