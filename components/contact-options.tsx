"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone, Clock, MapPin } from "lucide-react"

export default function ContactOptions() {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/2348036386134?text=Hello! I'd like to get in touch with Vingel Travels.", "_blank")
  }

  const handleEmailContact = () => {
    window.open("mailto:info@vingeltravels.com?subject=Travel Inquiry", "_blank")
  }

  const handlePhoneContact = () => {
    window.open("tel:+2348036386134", "_blank")
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Multiple Ways to Reach Us</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose your preferred method of communication. We're here to help with all your travel needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <div>
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">WhatsApp</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Instant messaging for quick responses and real-time communication
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <p className="font-medium text-green-600 dark:text-green-400">+234 803 638 6134</p>
                  <p className="text-xs">Available 24/7</p>
                  <p className="text-xs text-green-600 dark:text-green-400">Fastest response time</p>
                </div>
                <Button onClick={handleWhatsAppContact} className="w-full btn-primary">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Email */}
          <div>
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Traditional email for detailed inquiries and formal documentation
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <p className="font-medium text-blue-600 dark:text-blue-400">info@vingeltravels.com</p>
                  <p className="text-xs">Response within 4 hours</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">Detailed records kept</p>
                </div>
                <Button onClick={handleEmailContact} variant="outline" className="w-full btn-secondary bg-transparent">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Phone */}
          <div>
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Phone Call</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Direct voice communication with our travel experts
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <p className="font-medium text-orange-600 dark:text-orange-400">+234 803 638 6134</p>
                  <p className="font-medium text-orange-600 dark:text-orange-400">+44 749 686 1913</p>
                  <p className="text-xs">Mon-Sat: 8AM-6PM (WAT)</p>
                </div>
                <Button onClick={handlePhoneContact} variant="outline" className="w-full btn-secondary bg-transparent">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-[rgb(253,124,71)]/10 to-[rgb(235,104,51)]/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-[rgb(253,124,71)]" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Business Hours</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                <div>
                  <p className="font-medium">Office Hours:</p>
                  <p>Monday - Saturday: 8:00 AM - 6:00 PM (WAT)</p>
                  <p className="text-[rgb(253,124,71)]">Sunday: Closed</p>
                </div>
                <div>
                  <p className="font-medium">WhatsApp Support:</p>
                  <p className="text-green-600 dark:text-green-400">Available 24/7</p>
                  <p className="text-xs">For urgent travel assistance</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4 text-[rgb(253,124,71)]" />
                <span>Offices in Nigeria & United Kingdom</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
