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
        class: "h-auto px-8 py-3 text-sm",
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
