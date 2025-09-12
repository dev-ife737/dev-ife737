import { Button } from "@/components/ui/button"

export default function ExpediaSection() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Hotels & Accommodations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find and book the perfect accommodation for your stay. From luxury hotels to budget-friendly options,
            discover great deals worldwide.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-6xl mb-6">🏨</div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Hotels with Expedia</h3>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Search and compare millions of hotels, resorts, and vacation rentals worldwide. Find the perfect place to
            stay for your next adventure with exclusive deals and member prices.
          </p>

          <a
            href="https://expedia.com/affiliate/VaSAcKD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold">
              Search Hotels on Expedia
            </Button>
          </a>

          <p className="text-sm text-gray-500 mt-4">Support our site at no extra cost when you book via Expedia!</p>
        </div>
      </div>
    </section>
  )
}
