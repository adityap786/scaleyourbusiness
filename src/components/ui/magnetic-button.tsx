"use client"

import { useRef, useState, ReactNode } from "react"
import { motion } from "motion/react"

interface MagneticButtonProps {
    children: ReactNode
    className?: string
    strength?: number
    onClick?: () => void
}

export function MagneticButton({
    children,
    className = "",
    strength = 20,
    onClick,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const { clientX, clientY } = e
        const { left, top, width, height } = ref.current.getBoundingClientRect()
        const centerX = left + width / 2
        const centerY = top + height / 2
        const x = ((clientX - centerX) / width) * strength
        const y = ((clientY - centerY) / height) * strength
        setPosition({ x, y })
    }

    const reset = () => setPosition({ x: 0, y: 0 })

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onClick={onClick}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
            className={className}
            style={{ display: "inline-block" }}
        >
            {children}
        </motion.div>
    )
}
