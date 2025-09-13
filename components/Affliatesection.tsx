"use client"

import Link from "next/link"

export default function AffiliateSection() {
  return (
    <section className="py-20 bg-gray-50 fade-in-section">
    
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Exclusive travel deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Link href="/affiliate-booking-section">
          <button className="btn-primary mt-6">Exclusive travel deals</button>
          </Link>
          
          {/* expedia */}
          <Link
            href="https://expedia.com/affiliate/VaSAcKD"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center"
          >
            <div className="h-16 w-16 mb-4 flex items-center justify-center rounded-full bg-yellow-500 text-white text-2xl font-bold">
              E
            </div>
            <h3 className="text-xl font-semibold mb-2">Expedia</h3>
            <p className="text-gray-600">Unlock deals on hotels, flights & more</p>
          </Link>


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

          {/* Viator */}
           <a
            href="https://www.viator.com/?m=33953&supag=1240250194145278&supca=676923706&supsc=kwd-77515991602646&supai=77515770892157&supdv=c&supnt=o&suplp=152628&supli=3169&supti=kwd-77515991602646&tsem=true&supci=kwd-77515991602646&gclid=04b31dd4b24716c0a76175bdfac3df92&gclsrc=3p.ds&msclkid=04b31dd4b24716c0a76175bdfac3df92&pid=P00102658&mcid=42383&medium=link&campaign=vingel-website"
            target="_blank"
            rel="noopener noreferrer"
            
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center"
          >
            <div className="h-16 w-16 mb-4 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold">
              V
            </div>
            <h3 className="text-xl font-semibold mb-2">Viator</h3>
            <p className="text-gray-600">Tours & experiences worldwide</p>
           </a>
          

          {/* Travelstart */}
          <Link
            href="https://www.travelstart.com.ng/?affid=209600&utm_source=affiliate&utm_medium=209600"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center"
          >
            <div className="h-16 w-16 mb-4 flex items-center justify-center rounded-full bg-green-500 text-white text-2xl font-bold">
              T
            </div>
            <h3 className="text-xl font-semibold mb-2">Travelstart</h3>
            <p className="text-gray-600">Affordable flights & hotel deals</p>
          </Link>

        </div>
      </div>
    </section>
  )
}
