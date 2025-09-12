"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function UgandaBanner() {
  return (
    <section className="bg-gradient-to-r from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-800/60 py-10">
      <div className="container mx-auto px-4">
        <div className="rounded-xl border border-orange-200 dark:border-gray-700 p-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Experience Kampala, Uganda</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Explore curated activities, culture, and adventures. Don’t miss the Kampala Event.
          </p>
          <div className="mt-4">
            <Button className="btn-primary" asChild>
              <Link href="/uganda2025">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
