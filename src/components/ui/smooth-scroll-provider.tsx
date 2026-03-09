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
            lerp: 0.08,
            smoothWheel: true,
            wheelMultiplier: 1,
        })

        lenisRef.current = lenis

        // Sync Lenis scroll with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update)

        // Add Lenis's requestAnimationFrame to GSAP's internal ticker
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        // Disable GSAP lag smoothing to prevent conflicts with Lenis's own smoothing
        gsap.ticker.lagSmoothing(0)

        return () => {
            // Clean up bindings
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000)
            })
            lenis.off('scroll', ScrollTrigger.update)
            lenis.destroy()
            lenisRef.current = null
        }
    }, [])

    return <>{children}</>
}
