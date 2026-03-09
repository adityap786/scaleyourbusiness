"use client"

import { useEffect, useState, useCallback, useRef } from "react"

// ─── Configuration ───
const MIN_DISPLAY_MS = 2200     // Minimum loader visibility (ms)
const RING_BUILD_MS = 1400      // Time for ring to draw around logo
const FADE_OUT_MS = 800         // Fade-out duration
const HERO_FRAME_COUNT = 10     // Preload first N hero frames for instant first paint

export function Preloader({ onComplete }: { onComplete: () => void }) {
    const [phase, setPhase] = useState<"logo" | "ring" | "spin" | "pulse" | "exit">("logo")
    const [progress, setProgress] = useState(0)
    const startTime = useRef(Date.now())
    const hasCompleted = useRef(false)

    // ── Asset loading tracker ──
    const checkAssets = useCallback((): Promise<void> => {
        return new Promise((resolve) => {
            let loaded = 0
            const criticalImages: string[] = []

            // Preload first N hero frames
            for (let i = 1; i <= HERO_FRAME_COUNT; i++) {
                criticalImages.push(`/hero-frames/ezgif-frame-${String(i).padStart(3, "0")}.png`)
            }

            // Add logo
            criticalImages.push("/SYB-logo-png.png")

            const total = criticalImages.length
            let resolved = false

            const tick = () => {
                if (resolved) return
                loaded++
                setProgress(Math.min(0.95, loaded / total))
                if (loaded >= total) {
                    resolved = true
                    resolve()
                }
            }

            criticalImages.forEach((src) => {
                const img = new Image()
                img.onload = tick
                img.onerror = tick // Don't block on errors
                img.src = src
            })

            // Safety timeout — never block forever
            setTimeout(() => {
                if (!resolved) {
                    resolved = true
                    setProgress(1)
                    resolve()
                }
            }, 8000)
        })
    }, [])

    useEffect(() => {
        // Lock scroll during loading
        document.body.style.overflow = "hidden"

        // Phase 1: Logo appears (instant → 400ms)
        const logoTimer = setTimeout(() => setPhase("ring"), 400)

        // Phase 2-3: Ring builds while assets load
        const loadPromise = checkAssets()
        const minTimePromise = new Promise<void>((r) => setTimeout(r, MIN_DISPLAY_MS))

        Promise.all([loadPromise, minTimePromise]).then(() => {
            if (hasCompleted.current) return
            setProgress(1)

            // Phase 3→4: Complete ring, then pulse
            setTimeout(() => setPhase("pulse"), 200)

            // Phase 5: Exit
            setTimeout(() => {
                setPhase("exit")
                // Unlock scroll
                document.body.style.overflow = ""

                // Notify parent after fade-out animation completes
                setTimeout(() => {
                    hasCompleted.current = true
                    onComplete()
                }, FADE_OUT_MS)
            }, 900)
        })

        return () => {
            clearTimeout(logoTimer)
            document.body.style.overflow = ""
        }
    }, [checkAssets, onComplete])

    // ── Compute ring circumference for stroke-dasharray animation ──
    const RING_RADIUS = 52
    const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS
    const strokeOffset = RING_CIRCUMFERENCE * (1 - progress)

    return (
        <div
            className={`
                fixed inset-0 z-[9999] flex items-center justify-center
                bg-white transition-opacity
                ${phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
            style={{
                transitionDuration: `${FADE_OUT_MS}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
            }}
        >
            {/* Extremely subtle radial gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02),transparent_70%)]" />

            {/* Center stack: ring + logo */}
            <div className="relative flex items-center justify-center">

                {/* SVG Progress Ring */}
                <svg
                    className={`
                        absolute w-[120px] h-[120px] -rotate-90
                        transition-all duration-700 ease-out
                        ${phase === "logo" ? "opacity-0 scale-90" : ""}
                        ${phase === "ring" ? "opacity-100 scale-100" : ""}
                        ${phase === "spin" ? "opacity-100 scale-100" : ""}
                        ${phase === "pulse" ? "opacity-0 scale-110" : ""}
                        ${phase === "exit" ? "opacity-0 scale-110" : ""}
                    `}
                    viewBox="0 0 120 120"
                >
                    {/* Background track */}
                    <circle
                        cx="60"
                        cy="60"
                        r={RING_RADIUS}
                        fill="none"
                        stroke="rgba(0,0,0,0.06)"
                        strokeWidth="1.5"
                    />
                    {/* Active progress arc */}
                    <circle
                        cx="60"
                        cy="60"
                        r={RING_RADIUS}
                        fill="none"
                        stroke="url(#ring-gradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={RING_CIRCUMFERENCE}
                        strokeDashoffset={strokeOffset}
                        className="transition-[stroke-dashoffset] ease-out"
                        style={{
                            transitionDuration: `${RING_BUILD_MS}ms`
                        }}
                    />
                    <defs>
                        <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Subtle rotating glow (phase 3: spin) */}
                <div
                    className={`
                        absolute w-[130px] h-[130px] rounded-full
                        transition-opacity duration-700
                        ${phase === "spin" ? "opacity-100 animate-[spin_6s_linear_infinite]" : "opacity-0"}
                    `}
                    style={{
                        background: "conic-gradient(from 0deg, transparent, rgba(59,130,246,0.08), transparent 60%)"
                    }}
                />

                {/* Completion pulse (phase 4) */}
                <div
                    className={`
                        absolute w-[100px] h-[100px] rounded-full
                        transition-all duration-700 ease-out
                        ${phase === "pulse"
                            ? "opacity-100 scale-150 bg-[rgba(59,130,246,0.06)]"
                            : "opacity-0 scale-100 bg-transparent"
                        }
                    `}
                />

                {/* Logo */}
                <img
                    src="/SYB-logo-png.png"
                    alt="Scale Your Business"
                    className={`
                        relative z-10 w-16 h-16 object-contain
                        transition-all duration-500 ease-out
                        ${phase === "logo" ? "opacity-0 scale-90" : ""}
                        ${phase === "ring" || phase === "spin" ? "opacity-100 scale-100" : ""}
                        ${phase === "pulse" ? "opacity-100 scale-110" : ""}
                        ${phase === "exit" ? "opacity-100 scale-105" : ""}
                    `}
                    style={{
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        filter: phase === "pulse"
                            ? "drop-shadow(0 0 20px rgba(59,130,246,0.3))"
                            : "none"
                    }}
                />
            </div>

            {/* Brand name — appears subtly below */}
            <div
                className={`
                    absolute bottom-[30%] transition-all duration-700 ease-out
                    ${phase === "logo" ? "opacity-0 translate-y-2" : ""}
                    ${phase === "ring" || phase === "spin" ? "opacity-100 translate-y-0" : ""}
                    ${phase === "pulse" || phase === "exit" ? "opacity-0 -translate-y-2" : ""}
                `}
            >
                <p className="text-[11px] font-bold tracking-[0.35em] uppercase text-black/30">
                    Scale Your Business
                </p>
            </div>
        </div>
    )
}
