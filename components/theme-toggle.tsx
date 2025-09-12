"use client"

import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="shrink-0 bg-transparent"
    >
      {isDark ? "☀️" : "🌙"}
    </Button>
  )
}

export { ThemeToggle }
