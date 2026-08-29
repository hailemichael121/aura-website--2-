"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AvatarContextType {
  imageLoaded: boolean
  setImageLoaded: (loaded: boolean) => void
  hasError: boolean
  setHasError: (error: boolean) => void
}

const AvatarContext = React.createContext<AvatarContextType | null>(null)

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [imageLoaded, setImageLoaded] = React.useState(false)
  const [hasError, setHasError] = React.useState(false)

  return (
    <AvatarContext.Provider
      value={{ imageLoaded, setImageLoaded, hasError, setHasError }}
    >
      <div
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
          className
        )}
        {...props}
      />
    </AvatarContext.Provider>
  )
})
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, src, alt, ...props }, ref) => {
  const ctx = React.useContext(AvatarContext)

  if (!src || ctx?.hasError) {
    return null
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt || ""}
      onLoad={() => ctx?.setImageLoaded(true)}
      onError={() => ctx?.setHasError(true)}
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  )
})
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const ctx = React.useContext(AvatarContext)

  if (ctx?.imageLoaded && !ctx?.hasError) {
    return null
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }
