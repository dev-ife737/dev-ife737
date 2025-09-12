"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const TRAVELSTART_URL = "https://www.travelstart.com.ng/lp/affiliate/vingeltravels"

// Your provided Viator affiliate URL
const VIATOR_URL =
  "https://www.viator.com/?m=33953&supag=1240250194145278&supca=676923706&supsc=kwd-77515991602646&supai=77515770892157&supdv=c&supnt=o&suplp=152628&supli=3169&supti=kwd-77515991602646&tsem=true&supci=kwd-77515991602646&gclid=04b31dd4b24716c0a76175bdfac3df92&gclsrc=3p.ds&msclkid=04b31dd4b24716c0a76175bdfac3df92&pid=P00102658&mcid=42383&medium=link&campaign=vingel-website"

const EXPEDIA_URL = "https://expedia.com/affiliate/VaSAcKD"

export default function AffiliateBookingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Book with Our Trusted Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our verified travel partners for the best deals on flights, hotels, and experiences
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Flights card */}
          <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="relative h-40 w-full overflow-hidden rounded-xl mb-4">
              <Image
                src="/images/airplane-sunset.jpg"
                alt="Flights"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">✈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Flights</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Book with our trusted partner for competitive flight rates and reliable service.
            </p>
            <Button className="btn-primary w-full" asChild>
              <a href={TRAVELSTART_URL} target="_blank" rel="noopener noreferrer">
                Book on Travelstart
              </a>
            </Button>
          </div>

          {/* Tours card */}
          <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="relative h-40 w-full overflow-hidden rounded-xl mb-4">
              <Image
                src="/images/travel-signpost.jpg"
                alt="Tours & Activities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">🗺</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Tours & Activities</h3>
            </div>
            <p className="text-gray-600 mb-4">Book with our trusted partner for curated tours and local experiences.</p>
            <Button className="btn-primary w-full" asChild>
              <a href={VIATOR_URL} target="_blank" rel="noopener noreferrer">
                Browse on Viator
              </a>
            </Button>
          </div>

          {/* Hotels card */}
          <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-orange-300">
            <div className="relative h-40 w-full overflow-hidden rounded-xl mb-4">
              <Image
                src="/images/beach-chairs.jpg"
                alt="Hotels & Stays"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">🏨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Hotels & Stays</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Book with our trusted partner for comfortable accommodations worldwide.
            </p>
            <Button className="btn-primary w-full" asChild>
              <a href={EXPEDIA_URL} target="_blank" rel="noopener noreferrer">
                Book on Expedia
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
