"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const TOTAL_FRAMES = 140

// Pad number to 3 digits: 1 → "001"
function frameSrc(index: number): string {
    const num = String(Math.min(TOTAL_FRAMES, Math.max(1, index))).padStart(3, "0")
    return `/hero-frames/ezgif-frame-${num}.png`
}

// ── Text narrative stages ──────────────────────────────────────────────────────
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
        headline: "SCALE YOUR BUSINESS",
        subtext: "AI Automations • Custom Software • Growth Infrastructure",
        position: "below" as const, // 30% below center to avoid logo
        cta: true,
    },
]

export function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const pinRef = useRef<HTMLDivElement>(null)
    const stageRefs = useRef<(HTMLDivElement | null)[]>([])
    const imagesRef = useRef<HTMLImageElement[]>([])
    const currentFrameRef = useRef(0)

    useEffect(() => {
        if (typeof window === "undefined") return

        const section = sectionRef.current
        const canvas = canvasRef.current
        const pin = pinRef.current
        if (!section || !canvas || !pin) return

        const ctx2d = canvas.getContext("2d")
        if (!ctx2d) return

        // ── Canvas sizing ──
        function resizeCanvas() {
            if (!canvas) return
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // ── Grab frames from browser cache ──
        // The global <Preloader> guarantees all 140 frames are fully loaded
        // before this component ever mounts. We just need to create the Image
        // objects to pass to the canvas.
        const images: HTMLImageElement[] = []

        function drawFrame(index: number) {
            if (!ctx2d || !canvas) return
            const img = images[index]
            if (!img || !img.complete) return

            ctx2d.clearRect(0, 0, canvas.width, canvas.height)

            // Cover-fit the image to the canvas
            const imgRatio = img.naturalWidth / img.naturalHeight
            const canvasRatio = canvas.width / canvas.height
            let drawW: number, drawH: number, drawX: number, drawY: number

            if (canvasRatio > imgRatio) {
                drawW = canvas.width
                drawH = canvas.width / imgRatio
                drawX = 0
                drawY = (canvas.height - drawH) / 2
            } else {
                drawH = canvas.height
                drawW = canvas.height * imgRatio
                drawX = (canvas.width - drawW) / 2
                drawY = 0
            }

            ctx2d.drawImage(img, drawX, drawY, drawW, drawH)
            currentFrameRef.current = index
        }

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image()
            img.src = frameSrc(i + 1)
            images[i] = img
        }

        // Draw first frame immediately
        if (images[0]) {
            // Slight delay to ensure canvas is ready
            setTimeout(() => drawFrame(0), 10)
        }


        imagesRef.current = images

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
                    end: () => "+=" + window.innerHeight * 5,
                    pin: pin,
                    pinSpacing: true,
                    scrub: 1,
                    anticipatePin: 1,
                    refreshPriority: 2, // Process first — highest on page
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        // Map scroll progress → frame index
                        const frameIndex = Math.min(
                            TOTAL_FRAMES - 1,
                            Math.floor(self.progress * TOTAL_FRAMES)
                        )
                        if (frameIndex !== currentFrameRef.current) {
                            drawFrame(frameIndex)
                        }
                    },
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

                // Duration is mapped to the total timeline duration (5 = 5 screen-heights)
                const totalDur = 5

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
            window.removeEventListener("resize", resizeCanvas)
            gsapCtx.revert() // Clean up only this section's GSAP instances
        }
    }, [])

    return (
        <section ref={sectionRef} className="relative bg-black">
            <div ref={pinRef} className="h-screen w-full overflow-hidden relative">
                {/* Canvas background — frame scrubbing */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ objectFit: "cover" }}
                />

                {/* Dark overlay that increases as laptop opens (frames darken naturally but we reinforce) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none z-[1]" />

                {/* ── Text Overlay Stages ── */}
                {TEXT_STAGES.map((stage, i) => (
                    <div
                        key={stage.id}
                        ref={el => { stageRefs.current[i] = el }}
                        className={`absolute inset-0 z-10 flex flex-col items-center ${stage.position === "below"
                            ? "justify-end pb-[15vh]"
                            : "justify-center"
                            } pointer-events-none px-6`}
                    >
                        {/* Headline */}
                        <h1
                            className={`text-center font-black tracking-tight leading-[1.1] whitespace-pre-line ${stage.id === "stage-4"
                                ? "text-[clamp(2.5rem,7vw,5.5rem)] text-white drop-shadow-[0_0_60px_rgba(59,130,246,0.6)]"
                                : "text-[clamp(2rem,5vw,4rem)] text-white/90 drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
                                }`}
                        >
                            {stage.headline}
                        </h1>

                        {/* Subtext */}
                        <p
                            className={`mt-4 md:mt-6 text-center font-medium whitespace-pre-line max-w-2xl ${stage.id === "stage-4"
                                ? "text-lg md:text-xl text-blue-300/90 tracking-widest uppercase"
                                : "text-lg md:text-xl text-white/60"
                                }`}
                        >
                            {stage.subtext}
                        </p>

                        {/* CTA button — only on the final stage */}
                        {stage.cta && (
                            <Link
                                href="#services"
                                className="pointer-events-auto mt-8 md:mt-10 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-white font-bold text-lg rounded-full shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300"
                            >
                                Start Building
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        )}

                        {/* Glow effect behind the final text */}
                        {stage.id === "stage-4" && (
                            <div className="absolute inset-0 flex items-end justify-center pb-[20vh] pointer-events-none -z-10">
                                <div className="w-[60vw] h-[40vh] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)] blur-3xl" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
