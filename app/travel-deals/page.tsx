import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function TravelDealsPage() {
  const partners = [
    {
      name: "Travelstart",
      tagline: "Book flights to anywhere in the world",
      description:
        "Find the best flight deals with our trusted partner Travelstart. Compare prices from multiple airlines and save on your next trip.",
      logo: "TS",
      color: "bg-blue-600",
      link: "https://www.travelstart.com.ng/?utm_source=vingel&utm_medium=affiliate",
      features: ["Best flight prices", "Multiple airlines", "24/7 support", "Instant booking"],
    },
    {
      name: "Expedia",
      tagline: "Hotels, flights, and vacation packages",
      description:
        "Complete travel solutions with Expedia. Book hotels, flights, car rentals, and vacation packages all in one place.",
      logo: "EX",
      color: "bg-yellow-600",
      link: "https://expedia.com/affiliate/VaSAcKD",
      features: ["Hotel deals", "Package savings", "Rewards program", "Price matching"],
    },
    {
      name: "Viator",
      tagline: "Tours and experiences worldwide",
      description:
        "Discover amazing tours and experiences with Viator. From city tours to adventure activities, make your trip unforgettable.",
      logo: "VI",
      color: "bg-green-600",
      link: "https://www.viator.com/?m=33953&supag=1240250194145278&supca=676923706&supsc=kwd-77515991602646&supai=77515770892157&supdv=c&supnt=o&suplp=152628&supli=3169&supti=kwd-77515991602646&tsem=true&supci=kwd-77515991602646&gclid=04b31dd4b24716c0a76175bdfac3df92&gclsrc=3p.ds&msclkid=04b31dd4b24716c0a76175bdfac3df92&pid=P00102658&mcid=42383&medium=link&campaign=vingel-website",
      features: ["Skip-the-line tickets", "Local guides", "Instant confirmation", "Free cancellation"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f37021] to-[#d85f1a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Exclusive Travel Deals</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Access the best travel deals through our trusted partners. Save money on flights, hotels, and experiences
            worldwide.
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
            <span className="text-sm font-semibold">TRUSTED BY 1,000+ TRAVELERS</span>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">Our Travel Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've partnered with the world's leading travel platforms to bring you the best deals and experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${partner.color} rounded-xl flex items-center justify-center mr-4`}>
                      <span className="text-white font-bold text-lg">{partner.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2D2D2D]">{partner.name}</h3>
                      <p className="text-sm text-gray-600">{partner.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{partner.description}</p>

                  <div className="space-y-2 mb-8">
                    {partner.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#f37021] rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href={partner.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-[#f37021] hover:bg-[#d85f1a] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                      Visit {partner.name}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-8">Why Choose Our Partners?</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f37021] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Trusted & Verified</h3>
                <p className="text-gray-600">
                  All our partners are verified and trusted by millions of travelers worldwide.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#f37021] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">$</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Best Prices</h3>
                <p className="text-gray-600">
                  Get access to exclusive deals and competitive prices on flights, hotels, and tours.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#f37021] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">24</span>
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock customer support to help you with any travel-related queries.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
              <p className="text-gray-600 mb-6">
                Our travel experts are here to help you find the perfect deals for your next adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+2348036386134">
                  <Button className="bg-[#f37021] hover:bg-[#d85f1a] text-white px-8 py-3 rounded-xl">
                    Call Us Now
                  </Button>
                </a>
                <a href="https://wa.me/2348036386134" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-[#f37021] text-[#f37021] hover:bg-[#f37021] hover:text-white px-8 py-3 rounded-xl bg-transparent"
                  >
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
