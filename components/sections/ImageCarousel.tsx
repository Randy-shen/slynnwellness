'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: { src: string; alt: string }[]
  autoPlayInterval?: number
  fillHeight?: boolean
}

export default function ImageCarousel({ images, autoPlayInterval = 4000, fillHeight = false }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, autoPlayInterval)
    return () => clearInterval(timer)
  }, [paused, next, autoPlayInterval])

  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${fillHeight ? 'flex flex-col h-full' : ''}`}
      style={{
        background: 'rgba(255,250,245,0.85)',
        border: '1px solid rgba(233,221,209,0.9)',
        boxShadow: '0 20px 60px rgba(90,66,44,0.10)',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Images */}
      <div className="relative" style={fillHeight ? { flex: 1, minHeight: '280px' } : { aspectRatio: '16/7' }}>
        {images.map((image, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}

        {/* Gradient overlay on sides for arrows */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/20 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/20 to-transparent" />

        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(8px)', border: '1px solid rgba(233,221,209,0.8)' }}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5 text-[#2C2C2C]" />
        </button>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(8px)', border: '1px solid rgba(233,221,209,0.8)' }}
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5 text-[#2C2C2C]" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 py-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300"
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              borderRadius: '9999px',
              background: i === current ? '#D4AF37' : 'rgba(212,175,55,0.3)',
            }}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
