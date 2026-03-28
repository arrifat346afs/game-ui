import { type ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type EvilVariant = "cyan" | "bio" | "warning" | "ghost"

interface EvilButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: EvilVariant
}

export function EvilButton({
  variant = "cyan",
  className,
  children,
  ...props
}: EvilButtonProps) {
  return (
    <button
      data-evil={variant}
      className={cn(
        "relative inline-flex w-full cursor-pointer items-center justify-center",
        "border px-8 py-3 font-mono text-sm font-bold tracking-[0.2em] uppercase",
        "outline-none focus-visible:ring-2 focus-visible:ring-current/50",
        "disabled:pointer-events-none disabled:opacity-40",
        className,
      )}
      {...props}
    >
      {/* Corner brackets — inherit currentColor from the button */}
      <span className="absolute -top-[2px] -left-[2px] h-3 w-3 border-t-2 border-l-2 border-current" />
      <span className="absolute -top-[2px] -right-[2px] h-3 w-3 border-t-2 border-r-2 border-current" />
      <span className="absolute -bottom-[2px] -left-[2px] h-3 w-3 border-b-2 border-l-2 border-current" />
      <span className="absolute -bottom-[2px] -right-[2px] h-3 w-3 border-b-2 border-r-2 border-current" />

      {/* Side pipe markers + label */}
      <span className="mr-4 select-none font-light opacity-60">|</span>
      {children}
      <span className="ml-4 select-none font-light opacity-60">|</span>
    </button>
  )
}

