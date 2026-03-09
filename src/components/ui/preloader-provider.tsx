"use client"

import { useState, useCallback, ReactNode } from "react"
import { Preloader } from "@/components/ui/preloader"

export function PreloaderProvider({ children }: { children: ReactNode }) {
    const [loaded, setLoaded] = useState(false)

    const handleComplete = useCallback(() => {
        setLoaded(true)
    }, [])

    return (
        <>
            {!loaded && <Preloader onComplete={handleComplete} />}
            {children}
        </>
    )
}
