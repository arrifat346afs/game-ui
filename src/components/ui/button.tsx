/* eslint-disable react-refresh/only-export-components */
import { Button as ButtonPrimitive, type ButtonProps } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import React from "react"


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
    dot: "bg-[#244e4d]",
    dotHover: "bg-[#5edaff]",
    textGlow: "group-hover/button:text-shadow-blue"
  },
  "evil-bio": {
    base: "text-[#a3ffcc] font-mono tracking-[0.2em]",
    glow: "shadow-[#22c55e]",
    line: "bg-[#a3ffcc]",
    innerBg: "bg-black/40",
    outerBg: "from-[#022c22] to-black",
    dot: "bg-[#065f46]",
    dotHover: "bg-[#34d399]",
    textGlow: "group-hover/button:text-shadow-green"
  },
  "evil-warning": {
    base: "text-[#ff8c8c] font-mono tracking-[0.2em]",
    glow: "shadow-[#ef4444]",
    line: "bg-[#ff8c8c]",
    innerBg: "bg-black/40",
    outerBg: "from-[#1a0a0a] to-black",
    dot: "bg-[#4e2424]",
    dotHover: "bg-[#ff5e5e]",
    textGlow: "group-hover/button:text-shadow-red"
  },
  "evil-ghost": {
    base: "text-slate-400 font-mono tracking-[0.2em]",
    glow: "shadow-slate-500",
    line: "bg-slate-400",
    innerBg: "bg-black/20",
    outerBg: "from-slate-900 to-black",
    dot: "bg-slate-700",
    dotHover: "bg-slate-200",
    textGlow: "group-hover/button:text-shadow-white"
  }
}
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border-none bg-clip-padding transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-blue-500/30 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 relative isolate overflow-visible cursor-pointer uppercase",
  {
    variants: {
      variant: {
        default: "text-[#8cd1fa]",
        secondary: "text-[#a3ffcc]",
        destructive: "text-[#ff8c8c]",
        outline: "text-slate-400 hover:text-white",
        "evil-cyan": "text-[#8cd1fa]",
        "evil-bio": "text-[#a3ffcc]",
        "evil-warning": "text-[#ff8c8c]",
        "evil-ghost": "text-slate-400",
      },
      size: {
        default: "h-auto p-2 px-3 text-xs/relaxed font-medium tracking-[2px]",
        sm: "h-auto p-1.5 px-2 text-[10px] tracking-[1px]",
        lg: "h-auto p-3 px-5 text-sm tracking-[3px]",
        // Evil variants forced sizing
        evil: "h-auto w-[200px] px-4 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type CustomButtonProps = ButtonProps & VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, CustomButtonProps>(({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}, ref) => {
  const isEvil = variant?.toString().startsWith('evil-');
  const v = variantConfig[variant as keyof typeof variantConfig] || variantConfig.default;
  const currentSize = isEvil ? "evil" : size;

  return (
    <ButtonPrimitive
      ref={ref}
      className={cn(buttonVariants({ variant, size: currentSize, className }), v.base)}
      style={{
        background: `radial-gradient(circle 120px at 50% 50%, ${v.outerBg.split(' ')[0].replace('from-', '')}, ${v.outerBg.split(' ')[1].replace('to-', '')})`,
      }}
      {...props}
    >
      {/* Animated Glowing Lines */}
      <div className={cn("absolute top-0 left-0 h-px w-0 transition-all duration-700 group-hover/button:w-full rounded-full opacity-60", v.line, v.glow)} />
      <div className={cn("absolute bottom-0 right-0 h-px w-0 transition-all duration-700 group-hover/button:w-full rounded-full opacity-60", v.line, v.glow)} />
      <div className={cn("absolute top-[12px] right-0 w-px h-0 transition-all duration-700 group-hover/button:h-[calc(100%-24px)] rounded-full opacity-60", v.line, v.glow)} />
      <div className={cn("absolute bottom-[12px] left-0 w-px h-0 transition-all duration-700 group-hover/button:h-[calc(100%-24px)] rounded-full opacity-60", v.line, v.glow)} />

      {/* Main Content Area */}
      <div className={cn(
        "relative w-full h-full flex items-center justify-center transition-all duration-400 border border-white/5",
        isEvil ? "px-2 py-1.5 bg-black/40" : "px-7 py-2 rounded-lg",
        v.innerBg,
        v.textGlow,
        isEvil ? "group-hover/button:bg-black/10" : "group-hover/button:shadow-[inset_0_0_8px_rgba(255,255,255,0.1)]"
      )}>
        {isEvil && <span className="mr-2 select-none font-light opacity-40">|</span>}
        {children}
        {isEvil && <span className="ml-2 select-none font-light opacity-40">|</span>}

        {/* Evil Brackets (Visible only for Evil variants) */}
        {isEvil && (
          <>
            <span className="absolute -top-[2px] -left-[2px] h-3 w-3 border-t-2 border-l-2 border-current opacity-80" />
            <span className="absolute -top-[2px] -right-[2px] h-3 w-3 border-t-2 border-r-2 border-current opacity-80" />
            <span className="absolute -bottom-[2px] -left-[2px] h-3 w-3 border-b-2 border-l-2 border-current opacity-80" />
            <span className="absolute -bottom-[2px] -right-[2px] h-3 w-3 border-b-2 border-r-2 border-current opacity-80" />
          </>
        )}

        {/* Standard Sci-Fi Notches (Visible only for non-Evil variants) */}
        {!isEvil && (
          <>
            <div className="absolute -top-px -left-px w-0 h-0 border-t-[9px] border-r-[9px] border-r-transparent border-t-black" />
            <div className="absolute -top-px -right-px w-0 h-0 border-t-[9px] border-l-[9px] border-l-transparent border-t-black" />
            <div className="absolute -bottom-px -left-px w-0 h-0 border-b-[9px] border-r-[9px] border-r-transparent border-b-black" />
            <div className="absolute -bottom-px -right-px w-0 h-0 border-b-[9px] border-l-[9px] border-l-transparent border-b-black" />
          </>
        )}
      </div>

      {/* Standard Sci-Fi Masking (Visible only for non-Evil variants) */}
      {!isEvil && (
        <>
          <div className="absolute -top-px -left-px w-0 h-0 border-t-13 border-t-black border-r-13 border-r-transparent pointer-events-none" />
          <div className="absolute -top-px -right-px w-0 h-0 border-t-13 border-t-black border-l-13 border-l-transparent pointer-events-none" />
          <div className="absolute -bottom-px -left-px w-0 h-0 border-b-13 border-b-black border-r-13 border-r-transparent pointer-events-none" />
          <div className="absolute -bottom-px -right-px w-0 h-0 border-b-13 border-b-black border-l-13 border-l-transparent pointer-events-none" />
        </>
      )}

      {/* Sensors (Visible for all variants) */}
      <div className={cn("absolute left-[6%] top-[43%] w-[2px] h-[10px] rounded-full shadow-[0_0_4px_black] transition-all duration-400 opacity-40 group-hover/button:opacity-100", v.dot || "bg-current", `group-hover/button:${v.glow}`)} />
      <div className={cn("absolute right-[6%] top-[43%] w-[2px] h-[10px] rounded-full shadow-[0_0_4px_black] transition-all duration-400 opacity-40 group-hover/button:opacity-100", v.dot || "bg-current", `group-hover/button:${v.glow}`)} />
      
      <style dangerouslySetInnerHTML={{ __html: `
        .text-shadow-blue { text-shadow: 0 0 6px rgba(79, 184, 255, 0.8); }
        .text-shadow-green { text-shadow: 0 0 6px rgba(74, 222, 128, 0.8); }
        .text-shadow-red { text-shadow: 0 0 6px rgba(248, 113, 113, 0.8); }
        .text-shadow-white { text-shadow: 0 0 6px rgba(255, 255, 255, 0.6); }
      `}} />
    </ButtonPrimitive>
  )
})

export { Button, buttonVariants }
