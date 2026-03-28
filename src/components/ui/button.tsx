/* eslint-disable react-refresh/only-export-components */
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Shared class string for all evil variants — colors come from CSS variables in index.css
const EVIL_BASE = "relative border font-mono font-bold tracking-[0.2em] uppercase"

const EVIL_VARIANT_MAP = {
  "evil-cyan":    "cyan",
  "evil-bio":     "bio",
  "evil-warning": "warning",
  "evil-ghost":   "ghost",
} as const
const variantConfig = {
  // Standard Sci-Fi Variants
  default: {
    base: "text-[#8cd1fa]",
    glow: "shadow-[#33a3be]",
    line: "bg-[#8cd1fa]",
    innerBg: "bg-[#142c2b]",
    outerBg: "from-[#214d58] to-[#0a1f24]",
    dot: "bg-[#244e4d]",
    dotHover: "bg-[#5edaff]",
    textGlow: "group-hover/button:text-shadow-blue"
  },
  secondary: {
    base: "text-[#a3ffcc]",
    glow: "shadow-[#22c55e]",
    line: "bg-[#a3ffcc]",
    innerBg: "bg-[#062e1c]",
    outerBg: "from-[#064e3b] to-[#022c22]",
    dot: "bg-[#065f46]",
    dotHover: "bg-[#34d399]",
    textGlow: "group-hover/button:text-shadow-green"
  },
  destructive: {
    base: "text-[#ff8c8c]",
    glow: "shadow-[#ef4444]",
    line: "bg-[#ff8c8c]",
    innerBg: "bg-[#2e1414]",
    outerBg: "from-[#451a1a] to-[#1a0a0a]",
    dot: "bg-[#4e2424]",
    dotHover: "bg-[#ff5e5e]",
    textGlow: "group-hover/button:text-shadow-red"
  },
  outline: {
    base: "text-slate-400",
    glow: "shadow-slate-500",
    line: "bg-slate-400",
    innerBg: "bg-slate-900/50",
    outerBg: "from-slate-800 to-black",
    dot: "bg-slate-700",
    dotHover: "bg-slate-200",
    textGlow: "group-hover/button:text-shadow-white"
  },
  // Evil Variants (Modified behavior)
  "evil-cyan": {
    base: "text-[#8cd1fa] font-mono tracking-[0.2em]",
    glow: "shadow-[#33a3be]",
    line: "bg-[#8cd1fa]",
    innerBg: "bg-black/40",
    outerBg: "from-[#0a1f24] to-black",
    textGlow: "group-hover/button:text-shadow-blue"
  },
  "evil-bio": {
    base: "text-[#a3ffcc] font-mono tracking-[0.2em]",
    glow: "shadow-[#22c55e]",
    line: "bg-[#a3ffcc]",
    innerBg: "bg-black/40",
    outerBg: "from-[#022c22] to-black",
    textGlow: "group-hover/button:text-shadow-green"
  },
  "evil-warning": {
    base: "text-[#ff8c8c] font-mono tracking-[0.2em]",
    glow: "shadow-[#ef4444]",
    line: "bg-[#ff8c8c]",
    innerBg: "bg-black/40",
    outerBg: "from-[#1a0a0a] to-black",
    textGlow: "group-hover/button:text-shadow-red"
  },
  "evil-ghost": {
    base: "text-slate-400 font-mono tracking-[0.2em]",
    glow: "shadow-slate-500",
    line: "bg-slate-400",
    innerBg: "bg-black/20",
    outerBg: "from-slate-900 to-black",
    textGlow: "group-hover/button:text-shadow-white"
  }
}
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-input/30",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
        // Evil variants — colors are fully driven by [data-evil] CSS variables in index.css
        "evil-cyan":    EVIL_BASE,
        "evil-bio":     EVIL_BASE,
        "evil-warning": EVIL_BASE,
        "evil-ghost":   EVIL_BASE,
      },
      size: {
        default:
          "h-7 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        xs: "h-5 gap-1 rounded-sm px-2 text-[0.625rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-2.5",
        sm: "h-6 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        lg: "h-8 gap-1 px-2.5 text-xs/relaxed has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4",
        icon: "size-7 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-xs": "size-5 rounded-sm [&_svg:not([class*='size-'])]:size-2.5",
        "icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-lg": "size-8 [&_svg:not([class*='size-'])]:size-4",
      },
    },
    // Override size-variant spacing for evil variants so they keep their own fixed sizing
    compoundVariants: [
      {
        variant: ["evil-cyan", "evil-bio", "evil-warning", "evil-ghost"],
        class: "h-auto w-full px-8 py-3 text-sm",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  const evilVariant =
    variant != null && variant in EVIL_VARIANT_MAP
      ? EVIL_VARIANT_MAP[variant as keyof typeof EVIL_VARIANT_MAP]
      : undefined

  return (
    <ButtonPrimitive
      data-slot="button"
      data-evil={evilVariant}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {evilVariant ? (
        <>
          <div className={cn("absolute top-0 left-0 h-px w-0 transition-all duration-500 group-hover/button:w-full rounded-full opacity-70", `evil-line-${evilVariant}`, `evil-glow-${evilVariant}`)} />
          <div className={cn("absolute bottom-0 right-0 h-px w-0 transition-all duration-500 group-hover/button:w-full rounded-full opacity-70", `evil-line-${evilVariant}`, `evil-glow-${evilVariant}`)} />
          <div className={cn("absolute top-[12px] right-0 w-px h-0 transition-all duration-500 group-hover/button:h-[calc(100%-24px)] rounded-full opacity-70", `evil-line-${evilVariant}`, `evil-glow-${evilVariant}`)} />
          <div className={cn("absolute bottom-[12px] left-0 w-px h-0 transition-all duration-500 group-hover/button:h-[calc(100%-24px)] rounded-full opacity-70", `evil-line-${evilVariant}`, `evil-glow-${evilVariant}`)} />
          {/* Corner brackets */}
          <span className="absolute -top-[2px] -left-[2px] h-3 w-3 border-t-2 border-l-2 border-current" />
          <span className="absolute -top-[2px] -right-[2px] h-3 w-3 border-t-2 border-r-2 border-current" />
          <span className="absolute -bottom-[2px] -left-[2px] h-3 w-3 border-b-2 border-l-2 border-current" />
          <span className="absolute -bottom-[2px] -right-[2px] h-3 w-3 border-b-2 border-r-2 border-current" />
          {/* Side pipe markers + label */}
          <span className="mr-4 select-none font-light opacity-60">|</span>
          {children}
          <span className="ml-4 select-none font-light opacity-60">|</span>
        </>
      ) : (
        children
      )}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
