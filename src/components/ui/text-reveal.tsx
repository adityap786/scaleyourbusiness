"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

interface TextRevealProps {
    text: string
    className?: string
    as?: "h1" | "h2" | "h3" | "p" | "span"
}

export function TextReveal({ text, className = "", as: Tag = "h2" }: TextRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.3"],
    })

    const words = text.split(" ")

    return (
        <div ref={containerRef}>
            <Tag className={className}>
                {words.map((word, i) => {
                    const start = i / words.length
                    const end = start + 1 / words.length
                    return (
                        <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
                            {word}
                        </Word>
                    )
                })}
            </Tag>
        </div>
    )
}

function Word({
    children,
    progress,
    range,
}: {
    children: string
    progress: ReturnType<typeof useScroll>["scrollYProgress"]
    range: [number, number]
}) {
    const opacity = useTransform(progress, range, [0.15, 1])
    const y = useTransform(progress, range, [8, 0])

    return (
        <motion.span
            style={{ opacity, y }}
            className="inline-block mr-[0.25em] will-change-transform"
        >
            {children}
        </motion.span>
    )
}
