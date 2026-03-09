"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

// ── Text narrative stages (identical to desktop) ──────────────────────────────
const TEXT_STAGES = [
    {
        id: "stage-0",
        start: 0,
        end: 0.20,
        headline: "Most businesses don't fail\nbecause of bad ideas.",
        subtext: "They fail because their systems don't scale.",
        position: "center" as const,
    },
    {
        id: "stage-1",
        start: 0.22,
        end: 0.42,
        headline: "Websites. Apps. Automations.",
        subtext: "Most are built separately.\nBut growth requires one system.",
        position: "center" as const,
    },
    {
        id: "stage-2",
        start: 0.44,
        end: 0.64,
        headline: "Scaling a business\nisn't about tools.",
        subtext: "It's about engineering infrastructure.",
        position: "center" as const,
    },
    {
        id: "stage-3",
        start: 0.66,
        end: 0.82,
        headline: "Build systems that\ngrow with you.",
        subtext: "Not tools that slow you down.",
        position: "center" as const,
    },
    {
        id: "stage-4",
        start: 0.85,
        end: 1.0,
        headline: "SCALE YOUR\nBUSINESS",
        subtext: "AI Automations • Custom Software • Growth Infrastructure",
        position: "center" as const,
        cta: true,
    },
]

export function MobileHero() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const pinRef = useRef<HTMLDivElement>(null)
    const stageRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        if (typeof window === "undefined") return

        const section = sectionRef.current
        const pin = pinRef.current
        if (!section || !pin) return

        // ── GSAP Context (scoped to this section only) ──
        const gsapCtx = gsap.context(() => {
            // Initially hide all text stages
            stageRefs.current.forEach(el => {
                if (el) gsap.set(el, { opacity: 0, y: 30, scale: 0.97, filter: "blur(6px)" })
            })

            const masterTL = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => "+=" + window.innerHeight * 4, // 4 screens of scrolling
                    pin: pin,
                    pinSpacing: true,
                    scrub: 1,
                    anticipatePin: 1,
                    refreshPriority: 2, // Process first
                    invalidateOnRefresh: true,
                },
            })

            // ── Build text stage animations ──
            TEXT_STAGES.forEach((stage, i) => {
                const el = stageRefs.current[i]
                if (!el) return

                const fadeInStart = stage.start
                const fadeInEnd = stage.start + 0.04
                const fadeOutStart = stage.end - 0.04
                const fadeOutEnd = stage.end

                const totalDur = 4 // Matches the 4 screen-height duration

                // Fade in
                masterTL.fromTo(el,
                    { opacity: 0, y: 30, scale: 0.97, filter: "blur(6px)" },
                    {
                        opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
                        duration: (fadeInEnd - fadeInStart) * totalDur,
                        ease: "power2.out"
                    },
                    fadeInStart * totalDur
                )

                // Fade out (except the final stage which stays)
                if (i < TEXT_STAGES.length - 1) {
                    masterTL.to(el,
                        {
                            opacity: 0, y: -20, scale: 0.97, filter: "blur(4px)",
                            duration: (fadeOutEnd - fadeOutStart) * totalDur,
                            ease: "power2.in"
                        },
                        fadeOutStart * totalDur
                    )
                }
            })

        }, section) // ← scoped to this section only

        return () => {
            gsapCtx.revert() // Clean up GSAP instances
        }
    }, [])

    return (
        <section ref={sectionRef} className="relative bg-black w-full">
            <div ref={pinRef} className="h-[100svh] w-full overflow-hidden relative">

                {/* React Bits Premium Gradient Background pinned in the background */}
                <div className="absolute inset-0 z-0 opacity-90">
                    <AnimatedGradientBackground
                        Breathing={true}
                        animationSpeed={0.03}
                        startingGap={100}
                        breathingRange={20}
                        topOffset={20}
                        // Array must be exactly length 7 since gradientStops default is length 7
                        gradientColors={["#000000", "#1e1e1e", "#3b82f6", "#8b5cf6", "#1e1e1e", "#050714", "#000000"]}
                        containerClassName=""
                    />
                </div>

                {/* Dark overlay to ensure text contrast */}
                <div className="absolute inset-0 bg-black/50 z-[1] pointer-events-none" />

                {/* ── Text Overlay Stages ── */}
                {TEXT_STAGES.map((stage, i) => (
                    <div
                        key={stage.id}
                        ref={el => { stageRefs.current[i] = el }}
                        className={`absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6`}
                    >
                        {/* Headline */}
                        <h1
                            className={`text-center font-black tracking-tight leading-[1.05] whitespace-pre-line ${stage.id === "stage-4"
                                ? "text-[clamp(3rem,10vw,4.5rem)] text-white drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                                : "text-[clamp(2.5rem,8vw,4rem)] text-white/95 drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
                                }`}
                        >
                            {stage.headline}
                        </h1>

                        {/* Subtext */}
                        <p
                            className={`mt-4 md:mt-6 text-center whitespace-pre-line max-w-sm ${stage.id === "stage-4"
                                ? "text-sm text-blue-300 font-bold tracking-widest uppercase leading-relaxed"
                                : "text-lg text-white/70 font-medium leading-relaxed"
                                }`}
                        >
                            {stage.subtext}
                        </p>

                        {/* CTA button — only on the final stage */}
                        {stage.cta && (
                            <Link
                                href="#services"
                                className="pointer-events-auto mt-10 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-sm rounded-full shadow-[0_0_40px_rgba(59,130,246,0.5)] active:scale-95 transition-all duration-300"
                            >
                                Start Building
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        )}

                        {/* Glow effect behind the final text */}
                        {stage.id === "stage-4" && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                                <div className="w-[80vw] h-[80vw] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_70%)] blur-3xl rounded-full" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
