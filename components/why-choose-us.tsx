export default function WhyChooseUs() {
  const features = [
    {
      icon: "🌟",
      title: "Expert Planning",
      description: "Our experienced team crafts personalized itineraries tailored to your preferences and budget.",
    },
    {
      icon: "🛡️",
      title: "Trusted Service",
      description: "With years of experience and thousands of satisfied customers, your journey is in safe hands.",
    },
    {
      icon: "💰",
      title: "Best Value",
      description: "We offer competitive prices without compromising on quality or service excellence.",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Round-the-clock assistance ensures you're never alone during your travel adventures.",
    },
    {
      icon: "🌍",
      title: "Global Network",
      description: "Our worldwide partnerships provide you with exclusive access to unique experiences.",
    },
    {
      icon: "⚡",
      title: "Quick Booking",
      description: "Fast and efficient booking process gets you from planning to traveling in no time.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Vingel Travels?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to making your travel dreams come true with exceptional service and unforgettable
            experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
