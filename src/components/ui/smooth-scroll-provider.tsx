"use client"

import { ReactNode, useEffect, useRef } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        // Register ScrollTrigger if not already registered (crucial for client-side)
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger)
        }

        const lenis = new Lenis({
            lerp: 0.1,           // Slightly snappier than 0.08 — premium feel
            duration: 1.2,        // Smooth deceleration curve
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5, // Better mobile touch momentum
            infinite: false,
            autoResize: true,
        })

        lenisRef.current = lenis

        // Sync Lenis scroll with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update)

        // Add Lenis's requestAnimationFrame to GSAP's internal ticker
        // Store the callback reference for proper cleanup
        const rafCallback = (time: number) => {
            lenis.raf(time * 1000)
        }
        gsap.ticker.add(rafCallback)

        // Disable GSAP lag smoothing to prevent conflicts with Lenis's own smoothing
        gsap.ticker.lagSmoothing(0)

        return () => {
            // Clean up bindings using the SAME callback reference
            gsap.ticker.remove(rafCallback)
            lenis.off('scroll', ScrollTrigger.update)
            lenis.destroy()
            lenisRef.current = null
        }
    }, [])

    return <>{children}</>
}
