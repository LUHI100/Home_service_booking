"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import BookingModal from "@/components/booking-modal"
import { services } from "@/lib/services"

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [showBookingModal, setShowBookingModal] = useState(false)

  const service = services.find((s) => s.slug === params.id)

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
          <Button onClick={() => router.push("/")} className="bg-blue-600 hover:bg-blue-700">
            Back to Services
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">HomeService</h1>
          <div className="flex gap-3">
            <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Services
        </button>

        {/* Service Details */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h1>

          <p className="text-gray-600 text-lg mb-6">{service.description}</p>

          <div className="text-3xl font-bold text-blue-600 mb-8">₹{service.price}</div>

          <Button
            onClick={() => setShowBookingModal(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-lg"
          >
            Book This Service
          </Button>
        </div>
      </main>

      {/* Booking Modal */}
      {showBookingModal && <BookingModal service={service} onClose={() => setShowBookingModal(false)} />}
    </div>
  )
}
