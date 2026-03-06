import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-[var(--color-brand)] text-white shadow hover:bg-[var(--color-brand-dark)] hover:shadow-lg hover:shadow-blue-500/20",
                destructive:
                    "bg-red-500 text-white shadow-sm hover:bg-red-600",
                outline:
                    "border border-[var(--color-border)] bg-transparent shadow-sm hover:bg-[var(--color-bg-soft)] hover:text-[var(--color-text)]",
                secondary:
                    "bg-[var(--color-bg-soft)] text-[var(--color-text)] shadow-sm hover:bg-[var(--color-bg-dark)]",
                ghost: "hover:bg-[var(--color-bg-soft)] hover:text-[var(--color-text)]",
                link: "text-[var(--color-brand)] underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-12 rounded-md px-8 text-base",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
