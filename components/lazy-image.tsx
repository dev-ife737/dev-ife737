"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  onLoad?: () => void
  onError?: () => void
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  sizes,
  quality = 85,
  onLoad,
  onError,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
    onError?.()
  }

  // Fallback image URL
  const fallbackSrc = "/placeholder.svg?height=400&width=600&text=Image+Not+Available"
  const imageSrc = hasError ? fallbackSrc : src || fallbackSrc

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {(isInView || priority) && (
        <>
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            fill={fill}
            sizes={sizes}
            quality={quality}
            className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
            onLoad={handleLoad}
            onError={handleError}
            priority={priority}
          />
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-[rgb(253,124,71)] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </>
      )}
      {!isInView && !priority && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />}
    </div>
  )
}
