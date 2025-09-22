"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { ServiceGrid } from "@/components/service-grid"
import { AuthModal } from "@/components/auth-modal"
import BookingModal from "@/components/booking-modal"
import { SearchBar } from "@/components/search-bar"
import { ServiceFilter } from "@/components/service-filter"
import { services } from "@/lib/services"

export default function HomePage() {
  const [authModal, setAuthModal] = useState<"login" | "signup" | null>(null)
  const [bookingModal, setBookingModal] = useState<number | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = useMemo(() => {
    return Array.from(new Set(services.map((service) => service.category)))
  }, [])

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === null || service.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const handleBookService = (serviceId: number) => {
    if (isAuthenticated) {
      setBookingModal(serviceId)
    } else {
      setAuthModal("login")
    }
  }

  const handleBookingConfirm = (bookingData: any) => {
    console.log("Booking confirmed:", bookingData)
    // Here you would typically send the booking data to your backend
    alert(`Booking confirmed for ${bookingData.service.title}!`)
  }

  const handleAuthSuccess = () => {
    setIsAuthenticated(true)
    setAuthModal(null)
  }

  const selectedService = bookingModal ? services.find((s) => s.id === bookingModal) : null

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onLogin={() => setAuthModal("login")}
        onSignUp={() => setAuthModal("signup")}
        isAuthenticated={isAuthenticated}
        onLogout={() => setIsAuthenticated(false)}
      />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Find the Perfect Service</h2>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <ServiceFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {(searchTerm || selectedCategory) && (
          <div className="mb-4">
            <p className="text-gray-600">
              Showing {filteredServices.length} service{filteredServices.length !== 1 ? "s" : ""}
              {selectedCategory && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        )}

        <ServiceGrid services={filteredServices} onBookService={handleBookService} />

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filter options.</p>
          </div>
        )}
      </main>
      {authModal && (
        <AuthModal
          type={authModal}
          onClose={() => setAuthModal(null)}
          onSwitchMode={(mode) => setAuthModal(mode)}
          onSuccess={handleAuthSuccess}
        />
      )}
      {bookingModal && selectedService && (
        <BookingModal
          service={selectedService}
          onClose={() => setBookingModal(null)}
          onConfirm={handleBookingConfirm}
        />
      )}
    </div>
  )
}
