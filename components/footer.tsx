import Link from "next/link"
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 relative overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 bg-[url('/images/airplane-sunset.jpg')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 to-gray-800/90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* company info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f37021] to-[#d85f1a] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">VT</span>
              </div>
              <span className="text-xl font-bold text-[#f37021]">Vingel Travels</span>
            </div>
            <p className="mb-6 leading-relaxed">
              Your trusted travel partner for unforgettable experiences. over 1,000 happy travelers served with a 95%
              visa success rate.
            </p>
          </div>

          {/* quick links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Book Now", href: "/booking" },
                { name: "Travel Deals", href: "/travel-deals" },
                { name: "Reviews", href: "/reviews" },
                { name: "FAQs", href: "/faqs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#f37021] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* partners */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Travel Partners</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://bit.ly/4gny4lv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f37021]"
                >
                  Travelstart - Flights
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/4poICor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f37021]"
                >
                  Viator - Tours
                </a>
              </li>
              <li>
                <a
                  href="https://expedia.com/affiliate/VaSAcKD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f37021]"
                >
                  Expedia - Hotels
                </a>
              </li>
            </ul>
          </div>

          {/* contact info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#f37021]" />
                <a href="tel:+2348036386134" className="text-gray-200 hover:text-[#f37021]">
                  +234 803 638 6134
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#f37021]" />
                <span className="text-gray-200 font-medium">info@vingeltravels.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <a
                  href="https://wa.me/2348036386134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-[#f37021]"
                >
                  WhatsApp Support
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#f37021]" />
                <span className="text-gray-200">Lagos, Nigeria</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-white mb-2">Business Hours</h4>
              <p className="text-xs text-gray-400">Mon-Sat: 8AM-6PM (WAT)</p>
              <p className="text-xs text-gray-400">24/7 WhatsApp Support</p>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p>© {currentYear} Vingel Travels & Tours. All rights reserved.</p>
            <p className="text-xs text-gray-500 mt-1">your trusted travel partner since inception</p>
          </div>
          <div className="flex items-center space-x-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-[#f37021]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#f37021]">Terms of Service</Link>
            <span className="text-[#f37021] font-semibold">Made with ❤️ in Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
