"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-xl" : "bg-white shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-[#f37021] to-[#d85f1a] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <span className="text-white font-bold text-sm">VT</span>
            </div>
            <span className="text-xl font-bold text-[#f37021] transition-colors duration-300 group-hover:text-[#d85f1a]">
              Vingel Travels
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#f37021] transition-all duration-300 hover:scale-105 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#f37021] transition-all duration-300 hover:scale-105 font-medium"
            >
              About
            </Link>
            <Link
              href="/booking"
              className="text-gray-700 hover:text-[#f37021] transition-all duration-300 hover:scale-105 font-medium"
            >
              Book Now
            </Link>
            <Link
              href="/travel-deals"
              className="text-gray-700 hover:text-[#f37021] transition-all duration-300 hover:scale-105 font-medium"
            >
              Travel Deals
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#f37021] transition-all duration-300 hover:scale-105 font-medium"
            >
              Contact
            </Link>
            <Link
              href="/reviews"
              className="text-gray-700 hover:text-[#f37021] transition-all duration-300 hover:scale-105 font-medium"
            >
              Reviews
            </Link>
            <Link
              href="/faqs"
              className="text-gray-700 hover:text-[#f37021] transition-all duration-300 hover:scale-105 font-medium"
            >
              FAQs
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              <span className="text-lg">{isDark ? "☀️" : "🌙"}</span>
            </button>

            {/* Call Button */}
            <a
              href="tel:+2348036386134"
              className="bg-gradient-to-r from-[#f37021] to-[#d85f1a] text-white px-6 py-2 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 font-semibold"
            >
              <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#f37021] text-xs">📞</span>
              </span>
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <span className="text-sm">{isDark ? "☀️" : "🌙"}</span>
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="hover:bg-[#f37021]/10 transition-colors duration-300"
            >
              <span className={`text-xl transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}>
                {isMenuOpen ? "✕" : "☰"}
              </span>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-xl shadow-xl">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:text-[#f37021] hover:bg-[#f37021]/5 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-gray-700 hover:text-[#f37021] hover:bg-[#f37021]/5 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/booking"
                className="block px-4 py-3 text-gray-700 hover:text-[#f37021] hover:bg-[#f37021]/5 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
              <Link
                href="/travel-deals"
                className="block px-4 py-3 text-gray-700 hover:text-[#f37021] hover:bg-[#f37021]/5 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Travel Deals
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-gray-700 hover:text-[#f37021] hover:bg-[#f37021]/5 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/reviews"
                className="block px-4 py-3 text-gray-700 hover:text-[#f37021] hover:bg-[#f37021]/5 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/faqs"
                className="block px-4 py-3 text-gray-700 hover:text-[#f37021] hover:bg-[#f37021]/5 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>
              <a
                href="tel:+2348036386134"
                className="block px-4 py-3 text-[#f37021] font-semibold hover:bg-[#f37021]/5 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                📞 Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
