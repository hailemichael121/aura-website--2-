"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SheetContextValue {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SheetContext = React.createContext<SheetContextValue | null>(null)

export interface SheetProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Sheet: React.FC<SheetProps> = ({
  children,
  open: openProp,
  onOpenChange,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const isControlled = openProp !== undefined
  const open = isControlled ? Boolean(openProp) : internalOpen

  const setOpen = React.useCallback<React.Dispatch<React.SetStateAction<boolean>>>(
    (val) => {
      const nextOpen = typeof val === "function" ? val(open) : val
      if (!isControlled) {
        setInternalOpen(nextOpen)
      }
      onOpenChange?.(nextOpen)
    },
    [isControlled, open, onOpenChange]
  )

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

export interface SheetTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const SheetTrigger = React.forwardRef<HTMLButtonElement, SheetTriggerProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const ctx = React.useContext(SheetContext)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      props.onClick?.(e)
      ctx?.setOpen(true)
    }

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        ref,
        onClick: handleClick,
        "aria-haspopup": "dialog",
        "aria-expanded": ctx?.open,
        className: cn(className, (children.props as any).className),
      })
    }

    return (
      <button
        ref={ref}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={ctx?.open}
        onClick={handleClick}
        className={className}
        {...props}
      >
        {children}
      </button>
    )
  }
)
SheetTrigger.displayName = "SheetTrigger"

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-xl transition-transform duration-300 ease-in-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=open]:translate-y-0 data-[state=closed]:-translate-y-full",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=open]:translate-y-0 data-[state=closed]:translate-y-full",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=open]:translate-x-0 data-[state=closed]:-translate-x-full sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

export interface SheetContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => {
    const ctx = React.useContext(SheetContext)
    const open = Boolean(ctx?.open)

    React.useEffect(() => {
      if (!open) return

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          ctx?.setOpen(false)
        }
      }

      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleKeyDown)

      return () => {
        document.body.style.overflow = ""
        document.removeEventListener("keydown", handleKeyDown)
      }
    }, [open, ctx])

    if (!open) return null

    return (
      <div className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true">
        {/* Backdrop overlay */}
        <div
          onClick={() => ctx?.setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in-0"
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          ref={ref}
          data-state={open ? "open" : "closed"}
          className={cn(
            sheetVariants({ side }),
            "animate-in",
            side === "right" && "slide-in-from-right",
            side === "left" && "slide-in-from-left",
            side === "top" && "slide-in-from-top",
            side === "bottom" && "slide-in-from-bottom",
            className
          )}
          {...props}
        >
          <button
            type="button"
            onClick={() => ctx?.setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          {children}
        </div>
      </div>
    )
  }
)
SheetContent.displayName = "SheetContent"

const SheetClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, ...props }, ref) => {
  const ctx = React.useContext(SheetContext)

  return (
    <button
      ref={ref}
      type="button"
      onClick={(e) => {
        onClick?.(e)
        ctx?.setOpen(false)
      }}
      className={className}
      {...props}
    />
  )
})
SheetClose.displayName = "SheetClose"

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = "SheetDescription"

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
