"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"

const bookingSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  destination: z.string().min(1, "Please select a destination"),
  travelers: z.string().min(1, "Please select number of travelers"),
  departureDate: z.string().min(1, "Departure date is required"),
  returnDate: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

export function useBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically send the data to your API
      console.log("Travel request submitted:", data)

      // Show success message
      alert(
        "Thank you for your travel request! Our team will contact you within 24 hours during business hours (Monday-Saturday, 8AM-6PM WAT).",
      )

      // Reset form
      reset()
    } catch (error) {
      console.error("Booking submission error:", error)
      alert("There was an error submitting your request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    setValue,
    watch,
    onSubmit,
  }
}
