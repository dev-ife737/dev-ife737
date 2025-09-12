import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function KampalaEventSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-4">
              🎉 Special Event
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Africa Travel Content Creator Conference 2025
              <span className="block text-orange-200">- Kampala, Uganda</span>
            </h2>

            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Join Vingel Travels as we head to Kampala, Uganda for the 2025 Africa Travel Creator Conference (ATCC) - the biggest gathering of Travel Creators, innovators, and industry leaders on the continent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📅</span>
                <span className="text-lg">October 22, 2025 - October 25, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💰</span>
                <span className="text-lg font-semibold">Starting at $130</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/uganda2025">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
                >
                  View Event Details ($130)
                </Button>
              </Link>

              <Link href="/booking">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg bg-transparent"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/jungle-stream.jpg" alt="Uganda landscape" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <span className="text-2xl">🇺🇬</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-orange-500 rounded-full p-4 shadow-lg">
              <span className="text-2xl text-white">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
