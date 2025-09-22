import { ServiceCard } from "./service-card"

interface Service {
  id: number
  title: string
  category: string
  price: number
  description: string
  image: string
}

interface ServiceGridProps {
  services: Service[]
  onBookService: (serviceId: number) => void
}

export function ServiceGrid({ services, onBookService }: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} onBook={() => onBookService(service.id)} />
      ))}
    </div>
  )
}
