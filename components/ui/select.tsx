"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectContextValue {
  value: string
  onValueChange: (value: string) => void
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedLabel: React.ReactNode
  setSelectedLabel: React.Dispatch<React.SetStateAction<React.ReactNode>>
}

const SelectContext = React.createContext<SelectContextValue | null>(null)

export interface SelectProps {
  children: React.ReactNode
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Select: React.FC<SelectProps> = ({
  children,
  value: valueProp,
  defaultValue,
  onValueChange,
  open: openProp,
  onOpenChange,
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "")
  const [internalOpen, setInternalOpen] = React.useState(false)
  const [selectedLabel, setSelectedLabel] = React.useState<React.ReactNode>(null)

  const value = valueProp !== undefined ? valueProp : internalValue
  const open = openProp !== undefined ? Boolean(openProp) : internalOpen

  const setOpen = React.useCallback<React.Dispatch<React.SetStateAction<boolean>>>(
    (val) => {
      const next = typeof val === "function" ? val(open) : val
      if (openProp === undefined) {
        setInternalOpen(next)
      }
      onOpenChange?.(next)
    },
    [openProp, open, onOpenChange]
  )

  const handleValueChange = React.useCallback(
    (newVal: string) => {
      if (valueProp === undefined) {
        setInternalValue(newVal)
      }
      onValueChange?.(newVal)
      setOpen(false)
    },
    [valueProp, onValueChange, setOpen]
  )

  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!open) return

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("touchstart", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("touchstart", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, setOpen])

  return (
    <SelectContext.Provider
      value={{
        value,
        onValueChange: handleValueChange,
        open,
        setOpen,
        selectedLabel,
        setSelectedLabel,
      }}
    >
      <div ref={containerRef} className="relative inline-block w-full">
        {children}
      </div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const ctx = React.useContext(SelectContext)

  return (
    <button
      ref={ref}
      type="button"
      role="combobox"
      aria-expanded={ctx?.open}
      onClick={() => ctx?.setOpen((prev) => !prev)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50 transition-transform duration-200" />
    </button>
  )
})
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { placeholder?: string }
>(({ placeholder, className, children, ...props }, ref) => {
  const ctx = React.useContext(SelectContext)
  const display = ctx?.selectedLabel || children || ctx?.value || placeholder

  return (
    <span
      ref={ref}
      className={cn("block truncate text-left", !ctx?.value && "text-muted-foreground", className)}
      {...props}
    >
      {display}
    </span>
  )
})
SelectValue.displayName = "SelectValue"

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const ctx = React.useContext(SelectContext)

  if (!ctx?.open) return null

  return (
    <div
      ref={ref}
      className={cn(
        "absolute left-0 top-full z-50 mt-1 max-h-96 min-w-[8rem] w-full overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
SelectContent.displayName = "SelectContent"

export interface SelectItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const ctx = React.useContext(SelectContext)
    const isSelected = ctx?.value === value

    React.useEffect(() => {
      if (isSelected) {
        ctx?.setSelectedLabel(children)
      }
    }, [isSelected, children, ctx])

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={isSelected}
        onClick={() => {
          ctx?.setSelectedLabel(children)
          ctx?.onValueChange(value)
        }}
        className={cn(
          "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          isSelected && "font-medium",
          className
        )}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          {isSelected && <Check className="h-4 w-4" />}
        </span>
        <span className="truncate">{children}</span>
      </div>
    )
  }
)
SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
