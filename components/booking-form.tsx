"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, FileText, Plane, Building, CreditCard, User, MessageCircle, Mail, Send } from "lucide-react"
import { useDevice } from "@/hooks/use-device"

interface SimpleSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[]
  placeholder?: string
}

function SimpleSelect({ options, placeholder, className, ...props }: SimpleSelectProps) {
  return (
    <select
      className={`border-2 focus:border-[rgb(253,124,71)] transition-colors rounded-md p-2 w-full touch-target ${className ?? ""}`}
      {...props}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )
}

export default function BookingForm() {
  const ref = useRef(null)
  const { isMobile, isTablet, isTouchDevice } = useDevice()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionMethod, setSubmissionMethod] = useState<"whatsapp" | "email" | "both">("whatsapp")
  const [formData, setFormData] = useState({
    service: "",
    destination: "",
    departureAirport: "",
    arrivalAirport: "",
    travelers: "",
    departureDate: "",
    returnDate: "",
    travelClass: "",
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    passportNumber: "",
    passportExpiry: "",
    accommodationType: "",
    roomType: "",
    specialRequests: "",
    travelInsurance: "",
    airportTransfer: "",
    visaAssistance: "",
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelation: "",
    dietaryRequirements: "",
    medicalConditions: "",
    previousTravelExperience: "",
    budgetRange: "",
    hearAboutUs: "",
    additionalComments: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const formatBookingMessage = () => {
    return `🌍 COMPREHENSIVE TRAVEL BOOKING REQUEST

📋 SERVICE DETAILS:
Service: ${formData.service}
Destination: ${formData.destination}
Departure Airport: ${formData.departureAirport}
Arrival Airport: ${formData.arrivalAirport}
Number of Travelers: ${formData.travelers}
Travel Class: ${formData.travelClass}
Departure Date: ${formData.departureDate}
${formData.returnDate ? `Return Date: ${formData.returnDate}` : ""}

👤 PERSONAL INFORMATION:
Name: ${formData.title} ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Date of Birth: ${formData.dateOfBirth}
Nationality: ${formData.nationality}
Passport Number: ${formData.passportNumber}
Passport Expiry: ${formData.passportExpiry}

🏨 ACCOMMODATION PREFERENCES:
Type: ${formData.accommodationType}
Room Type: ${formData.roomType}
Special Requests: ${formData.specialRequests || "None"}

✈️ ADDITIONAL SERVICES:
Travel Insurance: ${formData.travelInsurance}
Airport Transfer: ${formData.airportTransfer}
Visa Assistance: ${formData.visaAssistance}

🚨 EMERGENCY CONTACT:
Name: ${formData.emergencyName}
Phone: ${formData.emergencyPhone}
Relationship: ${formData.emergencyRelation}

📝 ADDITIONAL INFORMATION:
Dietary Requirements: ${formData.dietaryRequirements || "None"}
Medical Conditions: ${formData.medicalConditions || "None"}
Previous Travel Experience: ${formData.previousTravelExperience}
Budget Range: ${formData.budgetRange}
How did you hear about us: ${formData.hearAboutUs}

💬 Additional Comments:
${formData.additionalComments || "None specified"}

Please provide a detailed quote and assistance with this comprehensive booking request. Thank you!`
  }

  const sendViaWhatsApp = () => {
    const message = formatBookingMessage()
    window.open(`https://wa.me/2348036386134?text=${encodeURIComponent(message)}`, "_blank")
  }

  const sendViaEmail = () => {
    const subject = encodeURIComponent("Travel Booking Request - " + formData.destination)
    const body = encodeURIComponent(formatBookingMessage())
    window.open(`mailto:info@vingeltravels.com?subject=${subject}&body=${body}`, "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const requiredFields = [
        "service",
        "destination",
        "departureAirport",
        "arrivalAirport",
        "travelers",
        "departureDate",
        "firstName",
        "lastName",
        "email",
        "phone",
        "dateOfBirth",
        "nationality",
        "emergencyName",
        "emergencyPhone",
        "emergencyRelation",
      ]

      const missingFields = requiredFields.filter((field) => !formData[field as keyof typeof formData])

      if (missingFields.length > 0) {
        alert(`Please fill in all required fields: ${missingFields.join(", ")}`)
        setIsSubmitting(false)
        return
      }

      if (submissionMethod === "whatsapp") {
        sendViaWhatsApp()
        alert(
          "Redirecting to WhatsApp with your detailed travel request! Our team will respond with a comprehensive quote within 2 hours during business hours.",
        )
      } else if (submissionMethod === "email") {
        sendViaEmail()
        alert(
          "Opening your email client with the travel request! Please send the email and we'll respond within 4 hours during business hours.",
        )
      } else if (submissionMethod === "both") {
        sendViaWhatsApp()
        setTimeout(() => {
          sendViaEmail()
        }, 1000)
        alert(
          "Sending your request via both WhatsApp and Email for fastest response! We'll get back to you within 2 hours during business hours.",
        )
      }

      setFormData({
        service: "",
        destination: "",
        departureAirport: "",
        arrivalAirport: "",
        travelers: "",
        departureDate: "",
        returnDate: "",
        travelClass: "",
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        nationality: "",
        passportNumber: "",
        passportExpiry: "",
        accommodationType: "",
        roomType: "",
        specialRequests: "",
        travelInsurance: "",
        airportTransfer: "",
        visaAssistance: "",
        emergencyName: "",
        emergencyPhone: "",
        emergencyRelation: "",
        dietaryRequirements: "",
        medicalConditions: "",
        previousTravelExperience: "",
        budgetRange: "",
        hearAboutUs: "",
        additionalComments: "",
      })
    } catch (error) {
      console.error("Booking submission error:", error)
      alert("There was an error. Please try contacting us directly via phone: +234 803 638 6134")
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    "Visa Application Processing",
    "Flight Booking (Local)",
    "Flight Booking (International)",
    "Hotel Reservation",
    "Travel Insurance",
    "Airport Transfers",
    "Family Holiday Package",
    "Tour Booking",
    "School Outsourcing",
    "Complete Travel Package",
    "Business Travel",
    "Honeymoon Package",
    "Group Travel",
  ]

  const destinations = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Dubai, UAE",
    "South Africa",
    "Ghana",
    "Kenya",
    "Turkey",
    "Italy",
    "Spain",
    "Netherlands",
    "Belgium",
    "Switzerland",
    "Austria",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Japan",
    "China",
    "Singapore",
    "Malaysia",
    "Thailand",
    "India",
    "Brazil",
    "Argentina",
    "Mexico",
    "Other (Please specify)",
  ]

  const nigerianAirports = [
    "Lagos (LOS) - Murtala Muhammed International",
    "Abuja (ABV) - Nnamdi Azikiwe International",
    "Port Harcourt (PHC) - Port Harcourt International",
    "Kano (KAN) - Mallam Aminu Kano International",
    "Enugu (ENU) - Akanu Ibiam International",
    "Calabar (CBQ) - Margaret Ekpo International",
    "Kaduna (KAD) - Kaduna Airport",
    "Ilorin (ILR) - Ilorin International",
    "Benin City (BNI) - Benin Airport",
    "Jos (JOS) - Yakubu Gowon Airport",
  ]

  const internationalAirports = [
    "New York (JFK) - John F. Kennedy International",
    "New York (LGA) - LaGuardia Airport",
    "Los Angeles (LAX) - Los Angeles International",
    "Chicago (ORD) - O'Hare International",
    "Miami (MIA) - Miami International",
    "Atlanta (ATL) - Hartsfield-Jackson Atlanta International",
    "Washington (DCA) - Ronald Reagan Washington National",
    "Boston (BOS) - Logan International",
    "San Francisco (SFO) - San Francisco International",
    "London (LHR) - Heathrow Airport",
    "London (LGW) - Gatwick Airport",
    "London (STN) - Stansted Airport",
    "Manchester (MAN) - Manchester Airport",
    "Birmingham (BHX) - Birmingham Airport",
    "Edinburgh (EDI) - Edinburgh Airport",
    "Glasgow (GLA) - Glasgow Airport",
    "Toronto (YYZ) - Pearson International",
    "Vancouver (YVR) - Vancouver International",
    "Montreal (YUL) - Pierre Elliott Trudeau International",
    "Calgary (YYC) - Calgary International",
    "Paris (CDG) - Charles de Gaulle",
    "Amsterdam (AMS) - Schiphol Airport",
    "Frankfurt (FRA) - Frankfurt Airport",
    "Rome (FCO) - Leonardo da Vinci International",
    "Madrid (MAD) - Adolfo Suárez Madrid-Barajas",
    "Barcelona (BCN) - Barcelona-El Prat",
    "Zurich (ZUR) - Zurich Airport",
    "Vienna (VIE) - Vienna International",
    "Brussels (BRU) - Brussels Airport",
    "Copenhagen (CPH) - Copenhagen Airport",
    "Stockholm (ARN) - Stockholm Arlanda",
    "Oslo (OSL) - Oslo Airport",
    "Helsinki (HEL) - Helsinki Airport",
    "Dubai (DXB) - Dubai International",
    "Doha (DOH) - Hamad International",
    "Istanbul (IST) - Istanbul Airport",
    "Tokyo (NRT) - Narita International",
    "Singapore (SIN) - Changi Airport",
    "Hong Kong (HKG) - Hong Kong International",
    "Bangkok (BKK) - Suvarnabhumi Airport",
    "Kuala Lumpur (KUL) - Kuala Lumpur International",
    "Mumbai (BOM) - Chhatrapati Shivaji International",
    "Delhi (DEL) - Indira Gandhi International",
    "Johannesburg (JNB) - O.R. Tambo International",
    "Cape Town (CPT) - Cape Town International",
    "Cairo (CAI) - Cairo International",
    "Casablanca (CMN) - Mohammed V International",
    "Accra (ACC) - Kotoka International",
    "Nairobi (NBO) - Jomo Kenyatta International",
    "Sydney (SYD) - Kingsford Smith Airport",
    "Melbourne (MEL) - Melbourne Airport",
    "São Paulo (GRU) - Guarulhos International",
    "Mexico City (MEX) - Mexico City International",
  ]

  return (
    <section
      id="booking"
      className={`${isMobile ? "py-12" : "py-20"} bg-white dark:bg-gray-900 relative overflow-hidden`}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[rgb(253,124,71)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[rgb(253,124,71)] rounded-full blur-3xl" />
      </div>

      <div className={`container mx-auto ${isMobile ? "px-4" : "px-4 sm:px-6 lg:px-8"} relative z-10`}>
        <div className={`text-center ${isMobile ? "mb-12" : "mb-16"}`}>
          <h2
            className={`${
              isMobile ? "text-2xl sm:text-3xl" : isTablet ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"
            } font-bold text-gray-800 dark:text-white mb-4`}
          >
            Comprehensive Travel Booking
          </h2>
          <p className={`${isMobile ? "text-base" : "text-xl"} text-gray-600 dark:text-gray-300 max-w-2xl mx-auto`}>
            Complete this detailed form to help us create the perfect travel experience for you
          </p>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <Card className="shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-[rgb(253,124,71)] to-[rgb(235,104,51)] text-white rounded-t-lg">
              <CardTitle
                className={`${isMobile ? "text-xl" : "text-2xl"} text-center font-bold flex items-center justify-center space-x-2`}
              >
                <FileText className={`${isMobile ? "w-5 h-5" : "w-6 h-6"}`} />
                <span>Detailed Travel Request Form</span>
              </CardTitle>
            </CardHeader>
            <CardContent className={`${isMobile ? "p-4" : "p-8"}`}>
              {/* Submission Method Selection */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                  <Send className="w-5 h-5 text-[rgb(253,124,71)] mr-2" />
                  How would you like to send your request?
                </h3>
                <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "md:grid-cols-3 gap-4"}`}>
                  <Card
                    className={`cursor-pointer transition-all duration-300 ${
                      submissionMethod === "whatsapp"
                        ? "ring-2 ring-[rgb(253,124,71)] bg-[rgb(253,124,71)]/10"
                        : "hover:shadow-lg"
                    }`}
                    onClick={() => setSubmissionMethod("whatsapp")}
                  >
                    <CardContent className="p-4 text-center">
                      <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-1">WhatsApp</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Instant messaging</p>
                      <p className="text-xs text-green-600 mt-1">Fastest response</p>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all duration-300 ${
                      submissionMethod === "email"
                        ? "ring-2 ring-[rgb(253,124,71)] bg-[rgb(253,124,71)]/10"
                        : "hover:shadow-lg"
                    }`}
                    onClick={() => setSubmissionMethod("email")}
                  >
                    <CardContent className="p-4 text-center">
                      <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Email</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Traditional email</p>
                      <p className="text-xs text-blue-600 mt-1">Detailed records</p>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all duration-300 ${
                      submissionMethod === "both"
                        ? "ring-2 ring-[rgb(253,124,71)] bg-[rgb(253,124,71)]/10"
                        : "hover:shadow-lg"
                    }`}
                    onClick={() => setSubmissionMethod("both")}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="flex justify-center space-x-1 mb-2">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Both</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">WhatsApp + Email</p>
                      <p className="text-xs text-[rgb(253,124,71)] mt-1">Maximum reach</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {submissionMethod === "whatsapp" && (
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-green-600" />
                        <span>
                          <strong>WhatsApp:</strong> Instant messaging for fastest response (within 2 hours during
                          business hours)
                        </span>
                      </div>
                    )}
                    {submissionMethod === "email" && (
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span>
                          <strong>Email:</strong> Traditional email communication (response within 4 hours during
                          business hours)
                        </span>
                      </div>
                    )}
                    {submissionMethod === "both" && (
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="w-4 h-4 text-green-600" />
                          <span>
                            <strong>WhatsApp:</strong> For instant communication and quick updates
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-blue-600" />
                          <span>
                            <strong>Email:</strong> For detailed documentation and formal records
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className={`space-y-${isMobile ? "6" : "8"}`}>
                {/* Service Details Section */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <Plane className="w-5 h-5 text-[rgb(253,124,71)] mr-2" />
                    Service Details
                  </h3>

                  <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "md:grid-cols-2 gap-6"}`}>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="font-semibold">
                        Service Required *
                      </Label>
                      <SimpleSelect
                        name="service"
                        placeholder="Select service"
                        options={services}
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destination" className="font-semibold">
                        Destination *
                      </Label>
                      <SimpleSelect
                        name="destination"
                        placeholder="Select destination"
                        options={destinations}
                        value={formData.destination}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="departureAirport" className="font-semibold">
                        Departure Airport *
                      </Label>
                      <SimpleSelect
                        name="departureAirport"
                        placeholder="Select departure airport"
                        options={nigerianAirports}
                        value={formData.departureAirport}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="arrivalAirport" className="font-semibold">
                        Arrival Airport *
                      </Label>
                      <SimpleSelect
                        name="arrivalAirport"
                        placeholder="Select arrival airport"
                        options={internationalAirports}
                        value={formData.arrivalAirport}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelers" className="font-semibold">
                        Number of Travelers *
                      </Label>
                      <SimpleSelect
                        name="travelers"
                        placeholder="Select travelers"
                        options={[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map(String)}
                        value={formData.travelers}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelClass" className="font-semibold">
                        Travel Class
                      </Label>
                      <SimpleSelect
                        name="travelClass"
                        placeholder="Select class"
                        options={["Economy", "Premium Economy", "Business", "First Class"]}
                        value={formData.travelClass}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="departureDate" className="font-semibold">
                        Departure Date *
                      </Label>
                      <Input
                        name="departureDate"
                        type="date"
                        value={formData.departureDate}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="returnDate" className="font-semibold">
                        Return Date (Optional)
                      </Label>
                      <Input
                        name="returnDate"
                        type="date"
                        value={formData.returnDate}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Information Section */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <User className="w-5 h-5 text-[rgb(253,124,71)] mr-2" />
                    Personal Information
                  </h3>

                  <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "md:grid-cols-3 gap-6"}`}>
                    <div className="space-y-2">
                      <Label htmlFor="title" className="font-semibold">
                        Title
                      </Label>
                      <SimpleSelect
                        name="title"
                        placeholder="Select title"
                        options={["Mr.", "Mrs.", "Ms.", "Dr.", "Prof."]}
                        value={formData.title}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-semibold">
                        First Name *
                      </Label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-semibold">
                        Last Name *
                      </Label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold">
                        Email Address *
                      </Label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-semibold">
                        Phone Number *
                      </Label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+234 or +44 format"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="font-semibold">
                        Date of Birth *
                      </Label>
                      <Input
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nationality" className="font-semibold">
                        Nationality *
                      </Label>
                      <Input
                        name="nationality"
                        placeholder="e.g., Nigerian"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="passportNumber" className="font-semibold">
                        Passport Number
                      </Label>
                      <Input
                        name="passportNumber"
                        value={formData.passportNumber}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="passportExpiry" className="font-semibold">
                        Passport Expiry Date
                      </Label>
                      <Input
                        name="passportExpiry"
                        type="date"
                        value={formData.passportExpiry}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                      />
                    </div>
                  </div>
                </div>

                {/* Accommodation Preferences */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <Building className="w-5 h-5 text-[rgb(253,124,71)] mr-2" />
                    Accommodation Preferences
                  </h3>

                  <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "md:grid-cols-2 gap-6"}`}>
                    <div className="space-y-2">
                      <Label htmlFor="accommodationType" className="font-semibold">
                        Accommodation Type
                      </Label>
                      <SimpleSelect
                        name="accommodationType"
                        placeholder="Select accommodation"
                        options={["Hotel", "Resort", "Apartment", "Hostel", "Bed & Breakfast", "Villa", "Guesthouse"]}
                        value={formData.accommodationType}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="roomType" className="font-semibold">
                        Room Type
                      </Label>
                      <SimpleSelect
                        name="roomType"
                        placeholder="Select room type"
                        options={[
                          "Single Room",
                          "Double Room",
                          "Twin Room",
                          "Triple Room",
                          "Family Room",
                          "Suite",
                          "Connecting Rooms",
                        ]}
                        value={formData.roomType}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="specialRequests" className="font-semibold">
                        Special Accommodation Requests
                      </Label>
                      <Textarea
                        name="specialRequests"
                        rows={3}
                        placeholder="e.g., Ocean view, ground floor, near elevator, wheelchair accessible..."
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <CreditCard className="w-5 h-5 text-[rgb(253,124,71)] mr-2" />
                    Additional Services
                  </h3>

                  <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "md:grid-cols-3 gap-6"}`}>
                    <div className="space-y-2">
                      <Label htmlFor="travelInsurance" className="font-semibold">
                        Travel Insurance
                      </Label>
                      <SimpleSelect
                        name="travelInsurance"
                        placeholder="Select option"
                        options={["Yes, please include", "No, I have my own", "No, not needed"]}
                        value={formData.travelInsurance}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="airportTransfer" className="font-semibold">
                        Airport Transfer
                      </Label>
                      <SimpleSelect
                        name="airportTransfer"
                        placeholder="Select option"
                        options={["Yes, both ways", "Arrival only", "Departure only", "No, not needed"]}
                        value={formData.airportTransfer}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="visaAssistance" className="font-semibold">
                        Visa Assistance
                      </Label>
                      <SimpleSelect
                        name="visaAssistance"
                        placeholder="Select option"
                        options={["Yes, full assistance", "Consultation only", "Document review", "No, not needed"]}
                        value={formData.visaAssistance}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Emergency Contact Information
                  </h3>

                  <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "md:grid-cols-3 gap-6"}`}>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyName" className="font-semibold">
                        Emergency Contact Name *
                      </Label>
                      <Input
                        name="emergencyName"
                        value={formData.emergencyName}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="emergencyPhone" className="font-semibold">
                        Emergency Contact Phone *
                      </Label>
                      <Input
                        name="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="emergencyRelation" className="font-semibold">
                        Relationship *
                      </Label>
                      <SimpleSelect
                        name="emergencyRelation"
                        placeholder="Select relationship"
                        options={["Spouse", "Parent", "Child", "Sibling", "Friend", "Other"]}
                        value={formData.emergencyRelation}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Additional Information</h3>

                  <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "md:grid-cols-2 gap-6"}`}>
                    <div className="space-y-2">
                      <Label htmlFor="dietaryRequirements" className="font-semibold">
                        Dietary Requirements
                      </Label>
                      <Input
                        name="dietaryRequirements"
                        placeholder="e.g., Vegetarian, Halal, Allergies..."
                        value={formData.dietaryRequirements}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="medicalConditions" className="font-semibold">
                        Medical Conditions
                      </Label>
                      <Input
                        name="medicalConditions"
                        placeholder="Any medical conditions we should know about"
                        value={formData.medicalConditions}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="previousTravelExperience" className="font-semibold">
                        Previous Travel Experience
                      </Label>
                      <SimpleSelect
                        name="previousTravelExperience"
                        placeholder="Select experience level"
                        options={[
                          "First time traveler",
                          "Occasional traveler",
                          "Frequent traveler",
                          "Experienced traveler",
                        ]}
                        value={formData.previousTravelExperience}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budgetRange" className="font-semibold">
                        Budget Range (USD)
                      </Label>
                      <SimpleSelect
                        name="budgetRange"
                        placeholder="Select budget range"
                        options={[
                          "Under $1,000",
                          "$1,000 - $2,500",
                          "$2,500 - $5,000",
                          "$5,000 - $10,000",
                          "Over $10,000",
                          "Flexible",
                        ]}
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hearAboutUs" className="font-semibold">
                        How did you hear about us?
                      </Label>
                      <SimpleSelect
                        name="hearAboutUs"
                        placeholder="Select option"
                        options={[
                          "Google Search",
                          "Social Media",
                          "Friend/Family Referral",
                          "Previous Customer",
                          "Travel Agent",
                          "Advertisement",
                          "Other",
                        ]}
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="additionalComments" className="font-semibold">
                        Additional Comments
                      </Label>
                      <Textarea
                        name="additionalComments"
                        rows={4}
                        placeholder="Any additional information, special requests, or questions you have..."
                        value={formData.additionalComments}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[rgb(253,124,71)] transition-colors touch-target"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className={`w-full btn-primary ${isMobile ? "py-4 text-lg" : "py-4 text-lg"} font-semibold touch-target`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing Your Detailed Request...
                    </>
                  ) : (
                    <>
                      {submissionMethod === "whatsapp" && <MessageCircle className="w-5 h-5 mr-2" />}
                      {submissionMethod === "email" && <Mail className="w-5 h-5 mr-2" />}
                      {submissionMethod === "both" && <Send className="w-5 h-5 mr-2" />}
                      Send via{" "}
                      {submissionMethod === "whatsapp"
                        ? "WhatsApp"
                        : submissionMethod === "email"
                          ? "Email"
                          : "WhatsApp & Email"}
                    </>
                  )}
                </Button>

                <div className="text-center text-sm text-gray-600 dark:text-gray-300">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                      <span>WhatsApp: 2 hours response</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>Email: 4 hours response</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-[rgb(253,124,71)] font-medium">Mon-Sat: 8AM-6PM (WAT)</span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs">* Required fields</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
