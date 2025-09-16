import { Button } from "@/components/ui/button"

export default function TravelstartSection() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Flight</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare and book flights from hundreds of airlines worldwide. Get the best deals on domestic and
            international flights.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-6xl mb-6">✈️</div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Flights with Travelstart</h3>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Search, compare, and book flights to destinations around the world. Find the best prices and convenient
            flight times for your journey.
          </p>

          <a href="https://bit.ly/4gny4lv" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold">
              Search Flights on Travelstart
            </Button>
          </a>

          <p className="text-sm text-gray-500 mt-4">Find the best flight deals for your next adventure!</p>
        </div>
      </div>
    </section>
  )
}
