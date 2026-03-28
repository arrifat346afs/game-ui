import { type ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type EvilVariant = "cyan" | "bio" | "warning" | "ghost"

interface EvilButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: EvilVariant
}

const variants: Record<
  EvilVariant,
  { base: string; corner: string; pipe: string; glow: string }
> = {
  cyan: {
    base: "bg-[#081e24] border border-[#00b4cc]/50 text-[#7ee8fa]",
    corner: "border-[#00d4f5]",
    pipe: "text-[#00d4f5]/70",
    glow: [
      "hover:border-[#00d4f5]",
      "hover:text-[#b8f7ff]",
      "hover:shadow-[0_0_18px_4px_rgba(0,212,245,0.55),0_0_40px_12px_rgba(0,212,245,0.2)]",
    ].join(" "),
  },
  bio: {
    base: "bg-[#061a0e] border border-[#1a7a44]/60 text-[#5eed8a]",
    corner: "border-[#22c55e]",
    pipe: "text-[#22c55e]/70",
    glow: [
      "hover:border-[#22c55e]",
      "hover:text-[#86efac]",
      "hover:shadow-[0_0_18px_4px_rgba(34,197,94,0.55),0_0_40px_12px_rgba(34,197,94,0.2)]",
    ].join(" "),
  },
  warning: {
    base: "bg-[#1e0808] border border-[#7f1d1d]/60 text-[#f87171]",
    corner: "border-[#ef4444]",
    pipe: "text-[#ef4444]/70",
    glow: [
      "hover:border-[#ef4444]",
      "hover:text-[#fca5a5]",
      "hover:shadow-[0_0_18px_4px_rgba(239,68,68,0.55),0_0_40px_12px_rgba(239,68,68,0.2)]",
    ].join(" "),
  },
  ghost: {
    base: "bg-[#0c1522] border border-[#334155]/60 text-[#94a3b8]",
    corner: "border-[#64748b]",
    pipe: "text-[#64748b]/70",
    glow: [
      "hover:border-[#64748b]",
      "hover:text-[#cbd5e1]",
      "hover:shadow-[0_0_18px_4px_rgba(100,116,139,0.4),0_0_40px_12px_rgba(100,116,139,0.15)]",
    ].join(" "),
  },
}

export function EvilButton({
  variant = "cyan",
  className,
  children,
  ...props
}: EvilButtonProps) {
  const v = variants[variant]

  return (
    <button
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center",
        "px-8 py-3 font-mono text-sm font-bold tracking-[0.2em] uppercase",
        "transition-all duration-300 ease-in-out",
        "outline-none focus-visible:ring-2 focus-visible:ring-current/50",
        "disabled:pointer-events-none disabled:opacity-40",
        v.base,
        v.glow,
        className,
      )}
      {...props}
    >
      {/* Corner brackets */}
      <span
        className={cn(
          "absolute -top-[2px] -left-[2px] h-3 w-3 border-t-2 border-l-2",
          v.corner,
        )}
      />
      <span
        className={cn(
          "absolute -top-[2px] -right-[2px] h-3 w-3 border-t-2 border-r-2",
          v.corner,
        )}
      />
      <span
        className={cn(
          "absolute -bottom-[2px] -left-[2px] h-3 w-3 border-b-2 border-l-2",
          v.corner,
        )}
      />
      <span
        className={cn(
          "absolute -bottom-[2px] -right-[2px] h-3 w-3 border-b-2 border-r-2",
          v.corner,
        )}
      />

      {/* Side pipe markers + label */}
      <span className={cn("mr-4 select-none font-light", v.pipe)}>|</span>
      {children}
      <span className={cn("ml-4 select-none font-light", v.pipe)}>|</span>
    </button>
  )
}

