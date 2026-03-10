"use client"

import { useState, useCallback, ReactNode } from "react"
import { Preloader } from "@/components/ui/preloader"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function PreloaderProvider({ children }: { children: ReactNode }) {
    const [loaded, setLoaded] = useState(false)

    const handleComplete = useCallback(() => {
        setLoaded(true)

        // Wait for the DOM to settle after the scroll lock is removed,
        // then force GSAP to recalculate all scroll positions.
        // This is critical for mobile where the initial height was calculated
        // while the page was locked (height: 100vh).
        setTimeout(() => {
            ScrollTrigger.refresh()
        }, 100)
    }, [])

    return (
        <>
            <div id="preloader-mount" className="relative z-[9999]">
                {!loaded && <Preloader onComplete={handleComplete} />}
            </div>
            {children}
        </>
    )
}
