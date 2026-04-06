import ServiceCard from './ServiceCard'
import { Service } from '@/lib/content/placeholder-services'

interface ServiceGridProps {
  services: Service[]
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  if (services.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-[#B8A99A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          No services available at this time.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}
