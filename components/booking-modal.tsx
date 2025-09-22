"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { X, Calendar, Clock, MapPin, CreditCard } from "lucide-react"

interface Service {
  id: number | string
  title: string
  category: string
  price: number
  description: string
  image: string
}

interface BookingModalProps {
  service: Service
  onClose: () => void
  onConfirm?: (bookingData: any) => void
}

const BookingModal = ({ service, onClose, onConfirm }: BookingModalProps) => {
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    address: "",
    phone: "",
    notes: "",
    paymentMethod: "cash", // Added payment method field
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onConfirm) {
      onConfirm({ service, ...bookingData })
    }
    alert("Booking confirmed! We'll contact you shortly.")
    onClose()
  }

  const handleInputChange = (field: string, value: string) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-lg bg-white max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">Book Service</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          {/* Service Summary */}
          <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.category}</p>
              <p className="text-lg font-bold text-blue-600">₹{service.price}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date" className="text-gray-700 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="time" className="text-gray-700 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Time
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={bookingData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address" className="text-gray-700 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Service Address
              </Label>
              <Input
                id="address"
                value={bookingData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Enter your full address"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={bookingData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+91 9876543210"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label className="text-gray-700 flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Payment Method
              </Label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={bookingData.paymentMethod === "cash"}
                    onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
                    className="text-blue-600"
                  />
                  <span className="text-sm">Cash on Service</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={bookingData.paymentMethod === "card"}
                    onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
                    className="text-blue-600"
                  />
                  <span className="text-sm">Credit/Debit Card</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={bookingData.paymentMethod === "upi"}
                    onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
                    className="text-blue-600"
                  />
                  <span className="text-sm">UPI Payment</span>
                </label>
              </div>
            </div>

            <div>
              <Label htmlFor="notes" className="text-gray-700">
                Special Instructions (Optional)
              </Label>
              <textarea
                id="notes"
                value={bookingData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder="Any special requirements or notes..."
                className="mt-1 w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="border-t pt-4 mt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total Amount:</span>
                <span className="text-2xl font-bold text-blue-600">₹{service.price}</span>
              </div>

              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3">
                Confirm Booking
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}

export { BookingModal }
export default BookingModal
