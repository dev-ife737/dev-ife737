import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/airplane-sunset.jpg')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 to-gray-800/90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f37021] to-[#d85f1a] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">VT</span>
              </div>
              <span className="text-xl font-bold text-[#f37021]">Vingel Travels</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted travel partner for unforgettable experiences. Over 1,000 happy travelers served with 95% visa
              success rate.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-lg font-bold text-[#f37021]">1K+</div>
                <div className="text-xs text-gray-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-[#f37021]">50+</div>
                <div className="text-xs text-gray-400">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-[#f37021]">95%</div>
                <div className="text-xs text-gray-400">Visa Success</div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://instagram.com/vingeltravels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#f37021] transition-all duration-300 hover:scale-110"
              >
                Instagram
              </a>
              <a
                href="https://www.vingeltravels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#f37021] transition-all duration-300 hover:scale-110"
              >
                Website
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#f37021] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#f37021] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-gray-300 hover:text-[#f37021] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Book Now
                </Link>
              </li>
              <li>
                <Link
                  href="/travel-deals"
                  className="text-gray-300 hover:text-[#f37021] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Travel Deals
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-gray-300 hover:text-[#f37021] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-300 hover:text-[#f37021] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Travel Partners */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Travel Partners</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.travelstart.com.ng/?utm_source=vingel&utm_medium=affiliate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#f37021] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Travelstart - Flights
                </a>
              </li>
              <li>
                <a
                  href="https://www.viator.com/?m=33953&supag=1240250194145278&supca=676923706&supsc=kwd-77515991602646&supai=77515770892157&supdv=c&supnt=o&suplp=152628&supli=3169&supti=kwd-77515991602646&tsem=true&supci=kwd-77515991602646&gclid=04b31dd4b24716c0a76175bdfac3df92&gclsrc=3p.ds&msclkid=04b31dd4b24716c0a76175bdfac3df92&pid=P00102658&mcid=42383&medium=link&campaign=vingel-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#f37021] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Viator - Tours
                </a>
              </li>
              <li>
                <a
                  href="https://expedia.com/affiliate/VaSAcKD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#f37021] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Expedia - Hotels
                </a>
              </li>
            </ul>

            <h4 className="text-md font-semibold mt-6 mb-3 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Flight Bookings</li>
              <li className="text-gray-400">Visa Assistance</li>
              <li className="text-gray-400">Hotel Reservations</li>
              <li className="text-gray-400">Tours & Experiences</li>
              <li className="text-gray-400">Group & Corporate Travel</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#f37021] to-[#d85f1a] rounded-full flex items-center justify-center text-sm shadow-lg">
                  📞
                </div>
                <a
                  href="tel:+2348036386134"
                  className="text-gray-300 hover:text-[#f37021] transition-colors duration-300"
                >
                  +234 803 638 6134
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#f37021] to-[#d85f1a] rounded-full flex items-center justify-center text-sm shadow-lg">
                  ✉
                </div>
                <a
                  href="mailto:info@vingeltravels.com"
                  className="text-gray-300 hover:text-[#f37021] transition-colors duration-300"
                >
                  info@vingeltravels.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-sm shadow-lg">
                  💬
                </div>
                <a
                  href="https://wa.me/2348036386134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#f37021] transition-colors duration-300"
                >
                  WhatsApp Support
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#f37021] to-[#d85f1a] rounded-full flex items-center justify-center text-sm shadow-lg mt-1">
                  📍
                </div>
                <span className="text-gray-300">Operating in Lagos, Nigeria</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-white mb-2">Business Hours</h4>
              <p className="text-xs text-gray-400">Mon-Sat: 8AM-6PM (WAT)</p>
              <p className="text-xs text-gray-400">24/7 WhatsApp Support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">© {currentYear} Vingel Travels & Tours. All rights reserved.</p>
              <p className="text-xs text-gray-500 mt-1">Your trusted travel partner since inception</p>
            </div>

            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <Link href="/privacy" className="hover:text-[#f37021] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#f37021] transition-colors">
                Terms of Service
              </Link>
              <span className="text-[#f37021] font-semibold">Made with ❤️ in Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
