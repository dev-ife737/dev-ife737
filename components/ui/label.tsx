"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * A lightweight label component without external dependencies.
 * Automatically forwards refs and supports custom class names.
 */
const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  ),
)

Label.displayName = "Label"

export { Label }
