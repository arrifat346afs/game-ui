import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all duration-200 outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--neu-bg)] text-primary shadow-[6px_6px_12px_color-mix(in_oklch,var(--neu-bg)_40%,black),-6px_-6px_12px_color-mix(in_oklch,var(--neu-bg)_40%,white)] hover:shadow-[8px_8px_16px_color-mix(in_oklch,var(--neu-bg)_40%,black),-8px_-8px_16px_color-mix(in_oklch,var(--neu-bg)_40%,white)] focus-visible:ring-2 focus-visible:ring-ring/50 active:translate-y-0 active:shadow-[inset_4px_4px_8px_color-mix(in_oklch,var(--neu-bg)_40%,black),inset_-4px_-4px_8px_color-mix(in_oklch,var(--neu-bg)_40%,white)]",
        outline:
          "border border-[color-mix(in_oklch,var(--foreground)_15%,transparent)] bg-[var(--neu-bg)] text-[var(--foreground)] shadow-[6px_6px_12px_color-mix(in_oklch,var(--neu-bg)_40%,black),-6px_-6px_12px_color-mix(in_oklch,var(--neu-bg)_40%,white)] hover:shadow-[8px_8px_16px_color-mix(in_oklch,var(--neu-bg)_40%,black),-8px_-8px_16px_color-mix(in_oklch,var(--neu-bg)_40%,white)] focus-visible:ring-2 focus-visible:ring-ring/50 active:translate-y-0 active:shadow-[inset_4px_4px_8px_color-mix(in_oklch,var(--neu-bg)_40%,black),inset_-4px_-4px_8px_color-mix(in_oklch,var(--neu-bg)_40%,white)]",
        secondary:
          "bg-[var(--neu-bg)] text-secondary shadow-[6px_6px_12px_color-mix(in_oklch,var(--neu-bg)_40%,black),-6px_-6px_12px_color-mix(in_oklch,var(--neu-bg)_40%,white)] hover:shadow-[8px_8px_16px_color-mix(in_oklch,var(--neu-bg)_40%,black),-8px_-8px_16px_color-mix(in_oklch,var(--neu-bg)_40%,white)] focus-visible:ring-2 focus-visible:ring-ring/50 active:translate-y-0 active:shadow-[inset_4px_4px_8px_color-mix(in_oklch,var(--neu-bg)_40%,black),inset_-4px_-4px_8px_color-mix(in_oklch,var(--neu-bg)_40%,white)]",
        ghost:
          "bg-transparent text-[var(--foreground)] shadow-none hover:bg-[color-mix(in_oklch,var(--neu-bg)_95%,white)] hover:shadow-[4px_4px_8px_color-mix(in_oklch,var(--neu-bg)_30%,black),-4px_-4px_8px_color-mix(in_oklch,var(--neu-bg)_30%,white)] focus-visible:ring-2 focus-visible:ring-ring/50 active:translate-y-0 active:shadow-[inset_2px_2px_4px_color-mix(in_oklch,var(--neu-bg)_30%,black),inset_-2px_-2px_4px_color-mix(in_oklch,var(--neu-bg)_30%,white)]",
        destructive:
          "bg-[var(--neu-bg)] text-destructive shadow-[6px_6px_12px_color-mix(in_oklch,var(--neu-bg)_40%,black),-6px_-6px_12px_color-mix(in_oklch,var(--neu-bg)_40%,white)] hover:shadow-[8px_8px_16px_color-mix(in_oklch,var(--neu-bg)_40%,black),-8px_-8px_16px_color-mix(in_oklch,var(--neu-bg)_40%,white)] focus-visible:ring-2 focus-visible:ring-destructive/50 active:translate-y-0 active:shadow-[inset_4px_4px_8px_color-mix(in_oklch,var(--neu-bg)_40%,black),inset_-4px_-4px_8px_color-mix(in_oklch,var(--neu-bg)_40%,white)]",
        link: "bg-transparent text-primary underline-offset-4 shadow-none hover:underline",
        neu: "bg-[var(--neu-bg)] text-[var(--foreground)] shadow-[6px_6px_12px_color-mix(in_oklch,var(--neu-bg)_40%,black),-6px_-6px_12px_color-mix(in_oklch,var(--neu-bg)_40%,white)] hover:shadow-[8px_8px_16px_color-mix(in_oklch,var(--neu-bg)_40%,black),-8px_-8px_16px_color-mix(in_oklch,var(--neu-bg)_40%,white)] focus-visible:ring-2 focus-visible:ring-ring/50 active:translate-y-0 active:shadow-[inset_4px_4px_8px_color-mix(in_oklch,var(--neu-bg)_40%,black),inset_-4px_-4px_8px_color-mix(in_oklch,var(--neu-bg)_40%,white)] [&_svg]:text-[var(--foreground)]",
        "neu-pressed":
          "bg-[var(--neu-bg)] text-[var(--foreground)] shadow-[inset_4px_4px_8px_color-mix(in_oklch,var(--neu-bg)_40%,black),inset_-4px_-4px_8px_color-mix(in_oklch,var(--neu-bg)_40%,white)] hover:shadow-[inset_5px_5px_10px_color-mix(in_oklch,var(--neu-bg)_40%,black),inset_-5px_-5px_10px_color-mix(in_oklch,var(--neu-bg)_40%,white)] focus-visible:ring-2 focus-visible:ring-ring/50 [&_svg]:text-[var(--foreground)]",
        "neu-filled":
          "shadow-[6px_6px_12px_color-mix(in_oklch,oklch(1 0 0)_40%,black),-6px_-6px_12px_color-mix(in_oklch,oklch(1 0 0)_40%,white)] hover:shadow-[8px_8px_16px_color-mix(in_oklch,oklch(1 0 0)_40%,black),-8px_-8px_16px_color-mix(in_oklch,oklch(1 0 0)_40%,white)] active:shadow-[inset_4px_4px_8px_color-mix(in_oklch,oklch(1 0 0)_40%,black),inset_-4px_-4px_8px_color-mix(in_oklch,oklch(1 0 0)_40%,white)] bg-primary text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring/50 active:translate-y-0 [&_svg]:text-primary-foreground",
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
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
