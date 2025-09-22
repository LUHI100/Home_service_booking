"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

interface Service {
  id: number
  slug?: string
  title: string
  category: string
  price: number
  description: string
  image: string
}

interface ServiceCardProps {
  service: Service
  onBook: () => void
}

export function ServiceCard({ service, onBook }: ServiceCardProps) {
  const router = useRouter()

  const handleViewService = () => {
    const slug =
      service.slug ||
      service.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
    router.push(`/services/${slug}`)
  }

  return (
    <Card
      className="overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleViewService}
    >
      <div className="relative">
        <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          ₹{service.price}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{service.category}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
        <Button
          onClick={(e) => {
            e.stopPropagation()
            handleViewService()
          }}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          Book Service
        </Button>
      </div>
    </Card>
  )
}
