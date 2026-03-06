"use client"

import { motion } from "motion/react"

interface GradientBlobProps {
    className?: string
    colors?: [string, string, string]
    size?: string
}

export function GradientBlob({
    className = "",
    colors = ["rgba(79,70,229,0.15)", "rgba(99,102,241,0.1)", "rgba(16,185,129,0.08)"],
    size = "600px",
}: GradientBlobProps) {
    return (
        <div className={`absolute pointer-events-none ${className}`}>
            {/* Primary blob */}
            <motion.div
                className="absolute rounded-full blur-3xl"
                style={{
                    width: size,
                    height: size,
                    background: `radial-gradient(circle, ${colors[0]}, ${colors[1]}, transparent 70%)`,
                }}
                animate={{
                    borderRadius: [
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "30% 60% 70% 40% / 50% 60% 30% 60%",
                        "50% 60% 30% 60% / 30% 60% 70% 40%",
                        "60% 40% 60% 30% / 60% 40% 30% 70%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                    ],
                    x: [0, 30, -20, 10, 0],
                    y: [0, -20, 15, -10, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Secondary blob */}
            <motion.div
                className="absolute rounded-full blur-3xl"
                style={{
                    width: `calc(${size} * 0.7)`,
                    height: `calc(${size} * 0.7)`,
                    background: `radial-gradient(circle, ${colors[2]}, transparent 70%)`,
                    top: "20%",
                    left: "30%",
                }}
                animate={{
                    borderRadius: [
                        "50% 60% 30% 60% / 30% 60% 70% 40%",
                        "60% 40% 60% 30% / 60% 40% 30% 70%",
                        "30% 60% 70% 40% / 50% 60% 30% 60%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "50% 60% 30% 60% / 30% 60% 70% 40%",
                    ],
                    x: [0, -25, 20, -15, 0],
                    y: [0, 15, -25, 10, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    )
}
