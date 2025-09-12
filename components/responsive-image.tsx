"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { useDevice } from "@/hooks/use-device"

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  width?: number
  height?: number
  onLoad?: () => void
  onError?: () => void
}

export default function ResponsiveImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
  fill = false,
  width,
  height,
  onLoad,
  onError,
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)
  const { isMobile, isTablet } = useDevice()

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

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    setHasError(false)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setHasError(true)
    setIsLoaded(true)
    onError?.()
  }, [onError])

  // Responsive sizes based on device
  const responsiveSizes =
    sizes ||
    (isMobile
      ? "100vw"
      : isTablet
        ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw")

  // Use the provided src or fallback to placeholder
  const imageSrc = src || "/placeholder.svg?height=400&width=600&text=Image+Not+Available"

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
            sizes={responsiveSizes}
            className={`transition-all duration-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } ${className}`}
            onLoad={handleLoad}
            onError={handleError}
            priority={priority}
            quality={isMobile ? 75 : 85}
          />
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-[rgb(253,124,71)] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </>
      )}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <div className="w-12 h-12 mx-auto mb-2 opacity-50">📷</div>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  )
}
