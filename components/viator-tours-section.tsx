import { Button } from "@/components/ui/button"

export default function ViatorToursSection() {
  const viatorUrl =
    "https://bit.ly/4gny4lv"

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Tours & Activities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing tours and activities around the world with our trusted partner Viator. From cultural
            experiences to adventure tours, find your perfect activity.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-6xl mb-6">🎯</div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Tours & Activities Worldwide</h3>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Access thousands of tours, activities, and experiences in destinations around the globe. From skip-the-line
            tickets to guided tours, make the most of your travels.
          </p>

          <a href={viatorUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold">
              Browse Tours on Viator
            </Button>
          </a>

          <p className="text-sm text-gray-500 mt-4">Support our site at no extra cost when you book via Viator!</p>
        </div>
      </div>
    </section>
  )
}
