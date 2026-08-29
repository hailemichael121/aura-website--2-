"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean | "indeterminate"
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      className,
      checked: checkedProp,
      defaultChecked = false,
      onCheckedChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState<boolean>(
      Boolean(defaultChecked)
    )
    const checked = checkedProp !== undefined ? Boolean(checkedProp) : isChecked

    const toggle = () => {
      if (disabled) return
      const next = !checked
      if (checkedProp === undefined) {
        setIsChecked(next)
      }
      onCheckedChange?.(next)
    }

    return (
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        ref={ref}
        onClick={toggle}
        className={cn(
          "peer flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          checked
            ? "bg-primary text-primary-foreground"
            : "bg-background text-transparent",
          className
        )}
        {...props}
      >
        {checked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
      </button>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
