import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Service, getCategoryLabel } from '@/lib/content/placeholder-services'

interface ServiceCardProps {
  service: Service
}

const categoryGradients: Record<string, string> = {
  'medical-aesthetic': 'linear-gradient(135deg, #D4AF8B 0%, #E8D5B8 35%, #F0DDB8 70%, #F7E7CE 100%)',
  'wellness': 'linear-gradient(135deg, #C49B6E 0%, #DDC4A0 35%, #ECD8B5 70%, #FDF6E8 100%)',
  'skin-scalp-care': 'linear-gradient(135deg, #D4AF8B 0%, #E0C9A5 35%, #EFD9BB 70%, #FDF2E5 100%)',
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const gradient = categoryGradients[service.category] || 'linear-gradient(135deg, #F7E7CE 0%, #D4AF37 100%)'

  return (
    <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1 border border-[#F0E8DF] hover:border-[#D4AF37]/30">
      {/* Image Placeholder */}
      <div
        className="h-44 w-full relative overflow-hidden"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 flex items-end p-4">
          <span
            className="text-[#3D2B1F]/75 text-xs font-medium tracking-wider uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {getCategoryLabel(service.category)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <Link href={`/services/${service.slug}`}>
          <h3
            className="text-xl font-light text-[#2C2C2C] mb-2 group-hover:text-[#D4AF37] transition-colors"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {service.name}
          </h3>
        </Link>

        <p className="text-xs text-[#8B7355] leading-relaxed mb-4"
          style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {service.short_description}
        </p>

        {service.price && (
          <p className="text-xs font-medium text-[#D4AF37] mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {service.price}
          </p>
        )}

        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2C2C2C] hover:text-[#D4AF37] transition-colors group/link"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Learn More
          <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
