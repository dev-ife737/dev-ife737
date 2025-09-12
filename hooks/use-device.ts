"use client"

import { useState, useEffect } from "react"

interface DeviceInfo {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isTouchDevice: boolean
  screenSize: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  orientation: "portrait" | "landscape"
  isLoaded: boolean
}

export function useDevice(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isTouchDevice: false,
    screenSize: "lg",
    orientation: "landscape",
    isLoaded: false,
  })

  useEffect(() => {
    const updateDeviceInfo = () => {
      if (typeof window === "undefined") return

      const width = window.innerWidth
      const height = window.innerHeight
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

      // Screen size breakpoints
      let screenSize: DeviceInfo["screenSize"] = "lg"
      if (width < 640) screenSize = "xs"
      else if (width < 768) screenSize = "sm"
      else if (width < 1024) screenSize = "md"
      else if (width < 1280) screenSize = "lg"
      else if (width < 1536) screenSize = "xl"
      else screenSize = "2xl"

      // Device type detection
      const isMobile = width < 768
      const isTablet = width >= 768 && width < 1024
      const isDesktop = width >= 1024

      // Orientation
      const orientation = height > width ? "portrait" : "landscape"

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isTouchDevice,
        screenSize,
        orientation,
        isLoaded: true,
      })
    }

    // Initial call
    updateDeviceInfo()

    // Add event listeners
    window.addEventListener("resize", updateDeviceInfo)
    window.addEventListener("orientationchange", updateDeviceInfo)

    return () => {
      window.removeEventListener("resize", updateDeviceInfo)
      window.removeEventListener("orientationchange", updateDeviceInfo)
    }
  }, [])

  return deviceInfo
}
