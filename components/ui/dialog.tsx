"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface DialogContextValue {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogContext = React.createContext<DialogContextValue | null>(null)

export interface DialogProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Dialog: React.FC<DialogProps> = ({
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
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

export interface DialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const ctx = React.useContext(DialogContext)

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
DialogTrigger.displayName = "DialogTrigger"

export interface DialogContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, children, ...props }, ref) => {
    const ctx = React.useContext(DialogContext)
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
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          onClick={() => ctx?.setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in-0"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <div
          ref={ref}
          className={cn(
            "relative z-50 w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 fade-in-0 duration-200",
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
DialogContent.displayName = "DialogContent"

const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, ...props }, ref) => {
  const ctx = React.useContext(DialogContext)

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
DialogClose.displayName = "DialogClose"

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
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
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight text-foreground", className)}
    {...props}
  />
))
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = "DialogDescription"

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
