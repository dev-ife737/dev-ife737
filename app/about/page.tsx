import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: "⭐",
      title: "Excellence",
      description: "We strive for perfection in every aspect of your travel experience.",
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Building lasting relationships through honest and reliable service.",
    },
    {
      icon: "🌍",
      title: "Adventure",
      description: "Opening doors to new cultures, experiences, and memories.",
    },
    {
      icon: "💝",
      title: "Care",
      description: "Treating every traveler like family with personalized attention.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Vingel Travels      </h1>
            <p className="text-xl lg:text-2xl text-orange-100 max-w-3xl mx-auto">
              Your trusted travel partner helping individuals, families, and businesses plan seamless journeys since
              2014
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Vingel Travels, we believe travel should be exciting, stress-free, and memorable. We are a Nigeria-based travel agency helping individuals, families, and businesses plan and enjoy seamless journeys — whether across continents or just a few hours away.
                </p>
                <p>
                  What began as a passion for connecting people to new destinations has grown into a trusted travel
                  brand serving over 1,000 satisfied clients across Nigeria and beyond. Over the years, we've built
                  strong global partnerships, delivered a 95%+ success rate in visa assistance, and designed unique
                  experiences that keep our clients coming back.
                </p>
                <p>
                  From exotic beach getaways to cultural expeditions, adventure tours to business travel, we handle
                  every detail with care and precision. Our commitment to excellence has earned us the trust of
                  thousands of satisfied travelers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/airplane-sunset.jpg" alt="Travel inspiration" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">1,000+</div>
              <div className="text-gray-700 font-medium">Happy Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">95%+</div>
              <div className="text-gray-700 font-medium">Visa Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We specialize in comprehensive travel services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl font-bold">✈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flight Bookings</h3>
              <p className="text-gray-600">
                Competitive rates with reliable airline partners for domestic and international flights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl font-bold">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visa Assistance</h3>
              <p className="text-gray-600">
                Expert guidance for faster, stress-free visa approvals with 95%+ success rate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl font-bold">🏨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hotel Reservations</h3>
              <p className="text-gray-600">Comfortable stays that match your style and budget worldwide.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl font-bold">🗺</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tours & Experiences</h3>
              <p className="text-gray-600">
                Curated adventures that leave lasting memories and unique cultural experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl font-bold">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Group & Corporate Travel</h3>
              <p className="text-gray-600">Seamless planning for events, retreats, and conferences of any size.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be Africa's most trusted and innovative travel brand, connecting people to experiences that inspire
                  and transform.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To simplify travel through expert guidance, reliable partnerships, and exceptional customer service,
                  ensuring every journey is worth remembering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-orange-100 mb-8">Let's go places together. Your next adventure starts here.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3">
                Book Your Trip
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
