"use client"

import { Container } from "@/components/ui/container"
import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register at module level — exactly like service-scroll-stack.tsx
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const steps = [
    {
        id: "01",
        title: "Discovery",
        subtitle: "We analyze your business, audience, pain points, and target ROI. We craft the absolute trajectory of your success.",
    },
    {
        id: "02",
        title: "Design",
        subtitle: "High-fidelity mockups and unignorable brand archetypes. You see the exact psychological impact before we code.",
    },
    {
        id: "03",
        title: "Develop",
        subtitle: "Production-grade, blazing-fast logic built on modern tech stacks. We engineer without shortcuts or compromises.",
    },
    {
        id: "04",
        title: "Launch & Scale",
        subtitle: "The product deploys. We monitor, optimize, and flood your funnels. Your desired end-state becomes reality.",
    },
]

// ── 4 Stickman SVG Poses ──
// Each pose changes as the user scrolls through the 4 steps
const StickmanPose = ({ pose }: { pose: number }) => {
    // All poses share: head, body spine, hoverboard
    // Arms and legs change per pose to show progression emotions
    const arms: Record<number, React.ReactNode> = {
        // Pose 0: Thinking — hand on chin
        0: (
            <>
                <line x1="50" y1="35" x2="65" y2="48" />
                <line x1="65" y1="48" x2="58" y2="22" />
                <line x1="50" y1="35" x2="30" y2="50" />
                <line x1="30" y1="50" x2="25" y2="42" />
            </>
        ),
        // Pose 1: Drawing — arms angled like sketching
        1: (
            <>
                <line x1="50" y1="35" x2="72" y2="38" />
                <line x1="72" y1="38" x2="80" y2="50" />
                <line x1="50" y1="35" x2="28" y2="42" />
                <line x1="28" y1="42" x2="20" y2="35" />
            </>
        ),
        // Pose 2: Typing — arms forward
        2: (
            <>
                <line x1="50" y1="35" x2="70" y2="50" />
                <line x1="70" y1="50" x2="75" y2="45" />
                <line x1="50" y1="35" x2="30" y2="50" />
                <line x1="30" y1="50" x2="25" y2="45" />
            </>
        ),
        // Pose 3: Celebrating — arms up in victory
        3: (
            <>
                <line x1="50" y1="35" x2="68" y2="25" />
                <line x1="68" y1="25" x2="78" y2="15" />
                <line x1="50" y1="35" x2="32" y2="25" />
                <line x1="32" y1="25" x2="22" y2="15" />
            </>
        ),
    }

    const legs: Record<number, React.ReactNode> = {
        // Pose 0-2: Standing steady
        0: (
            <>
                <line x1="50" y1="58" x2="38" y2="82" />
                <line x1="50" y1="58" x2="62" y2="82" />
            </>
        ),
        1: (
            <>
                <line x1="50" y1="58" x2="36" y2="82" />
                <line x1="50" y1="58" x2="64" y2="82" />
            </>
        ),
        2: (
            <>
                <line x1="50" y1="58" x2="40" y2="82" />
                <line x1="50" y1="58" x2="60" y2="82" />
            </>
        ),
        // Pose 3: Jumping with joy — wide legs
        3: (
            <>
                <line x1="50" y1="58" x2="30" y2="80" />
                <line x1="50" y1="58" x2="70" y2="80" />
            </>
        ),
    }

    const safePose = Math.min(pose, 3)

    return (
        <svg viewBox="0 0 100 100" className="w-[70px] h-[70px] text-white">
            <g stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                {/* Pulsing glow behind head */}
                <circle cx="50" cy="18" r="14" stroke="none" fill="rgba(59,130,246,0.5)" filter="blur(6px)" />
                {/* Head */}
                <circle cx="50" cy="18" r="8" fill="currentColor" />
                {/* Body spine */}
                <line x1="50" y1="26" x2="50" y2="58" />
                {/* Dynamic arms */}
                {arms[safePose]}
                {/* Dynamic legs */}
                {legs[safePose]}
                {/* Hoverboard */}
                <line x1="15" y1="92" x2="85" y2="92" stroke="#8b5cf6" strokeWidth="8" className="drop-shadow-[0_15px_15px_rgba(139,92,246,1)]" />
            </g>
        </svg>
    )
}

export function ProcessTimeline() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const pinRef = useRef<HTMLDivElement>(null)
    const fillRef = useRef<HTMLDivElement>(null)
    const stickmanRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const stepsRef = useRef<(HTMLDivElement | null)[]>([])
    const nodesRef = useRef<(HTMLDivElement | null)[]>([])
    const poseRef = useRef(0)

    // ── Mobile Detection ──
    const [isMobile, setIsMobile] = useState<boolean | null>(null)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useEffect(() => {
        if (typeof window === "undefined") return

        // ── Remove isMobile short-circuit so both get GSAP ──
        const section = sectionRef.current
        const pin = pinRef.current
        const fill = fillRef.current
        const stickman = stickmanRef.current
        const title = titleRef.current

        if (!section || !pin || !fill || !stickman || !title) return

        // ── GSAP Context (scoped to this section only) ──
        const ctx = gsap.context(() => {

            // Initially hide all step text blocks
            stepsRef.current.forEach(el => {
                if (el) gsap.set(el, { opacity: 0, y: 40, scale: 0.95 })
            })

            // Initially hide all node glows
            nodesRef.current.forEach(el => {
                if (el) gsap.set(el, { opacity: 0, scale: 0 })
            })

            // Set the fill bar initial state
            gsap.set(fill, { height: "0%" })
            gsap.set(stickman, { top: "0%" })

            const numSteps = steps.length

            // ── Master ScrollTrigger Timeline ──
            // pin: true handles the sticky + spacer height automatically
            const masterTL = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${numSteps * (window.innerWidth < 768 ? 70 : 100)}vh`,
                    pin: pin,
                    pinSpacing: true,
                    scrub: 1,
                    anticipatePin: 1,
                    refreshPriority: -1, // Process last — lowest on page
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        // Update the stickman pose at each milestone boundary (25%, 50%, 75%, 100%)
                        const progress = self.progress
                        let newPose = 0
                        if (progress >= 0.75) newPose = 3      // Launch & Scale → celebrating
                        else if (progress >= 0.50) newPose = 2 // Develop → typing
                        else if (progress >= 0.25) newPose = 1 // Design → drawing
                        else newPose = 0                       // Discovery → thinking

                        if (newPose !== poseRef.current) {
                            poseRef.current = newPose
                            // Crossfade to the new pose
                            for (let p = 0; p < 4; p++) {
                                const poseEl = stickman.querySelector(`.stickman-pose-${p}`) as HTMLElement
                                if (poseEl) {
                                    gsap.to(poseEl, { opacity: p === newPose ? 1 : 0, duration: 0.3, ease: "power2.out" })
                                }
                            }
                            // Bounce effect on pose change
                            gsap.fromTo(stickman, { scale: 1.2 }, { scale: 1, duration: 0.4, ease: "back.out(3)" })
                        }
                    }
                }
            })

            // 1. Fade out the intro title quickly
            masterTL.to(title, {
                opacity: 0,
                y: -30,
                duration: 0.4,
                ease: "power2.inOut"
            }, 0)

            // 2. Fill the loading bar from 0% to 95% — capped to land exactly on the final node
            masterTL.to(fill, {
                height: "95%",
                duration: numSteps,
                ease: "none"
            }, 0)

            // 3. Move the stickman wrapper down to 95% — landing exactly on the Stage 4 node
            masterTL.to(stickman, {
                top: "95%",
                duration: numSteps,
                ease: "none"
            }, 0)

            // 4. Crossfade step text blocks one at a time
            steps.forEach((_, i) => {
                const el = stepsRef.current[i]
                const node = nodesRef.current[i]
                if (!el) return

                const segStart = i
                const segMid = i + 0.3
                const segEnd = i + 0.7

                // Fade in this step's text
                masterTL.to(el, {
                    opacity: 1, y: 0, scale: 1,
                    duration: 0.3, ease: "power2.out"
                }, segStart)

                // Fade out (except last step stays visible)
                if (i < numSteps - 1) {
                    masterTL.to(el, {
                        opacity: 0, y: -30, scale: 0.95,
                        duration: 0.3, ease: "power2.in"
                    }, segEnd)
                }

                // Pop the node glow when the fill reaches this step's position
                if (node) {
                    masterTL.to(node, {
                        opacity: 1, scale: 1,
                        duration: 0.2, ease: "back.out(2)"
                    }, segMid)
                }
            })

        }, section) // ← scoped to this section only

        // This is the LAST GSAP section on the page.
        // One deferred refresh ensures ALL pin spacers are calculated correctly.
        const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200)

        return () => {
            clearTimeout(refreshTimer)
            ctx.revert() // Clean up only this section's GSAP instances — prevents overlapping hooks
        }
    }, [])

    return (
        <section ref={sectionRef} className="relative bg-[#050505]">
            {/* This div gets pinned by GSAP — no manual sticky or h-[xxxvh] needed */}
            <div ref={pinRef} className="h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Immersive Background Ambience */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] pointer-events-none" />

                <Container className="relative z-10 w-full h-full flex flex-col md:flex-row items-center border-l border-r border-white/5 bg-black/20 backdrop-blur-sm">

                    {/* TEXT Stage */}
                    <div className="w-full h-1/2 md:w-[60%] md:h-full flex flex-col justify-end md:justify-center px-6 md:px-16 lg:px-24 pb-8 md:pb-0 relative z-20">

                        {/* Initial Header — GSAP fades this out */}
                        <div
                            ref={titleRef}
                            className="absolute left-6 right-6 md:inset-x-16 lg:inset-x-24 bottom-8 md:top-1/2 md:bottom-auto md:-translate-y-1/2 pointer-events-none"
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-[#3b82f6] bg-[#3b82f6]/10 border border-[#3b82f6]/20 mb-4 md:mb-6 shadow-sm">
                                The Master Plan
                            </span>
                            <h2 className="text-[clamp(1.5rem,5vw,5rem)] md:text-[clamp(2rem,6vw,5rem)] font-black tracking-tight text-white mb-4 md:mb-6 leading-[1.05]">
                                Simple. Transparent.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Effective.</span>
                            </h2>
                            <p className="text-sm md:text-xl text-white/60 font-medium max-w-lg leading-relaxed">
                                Scroll down to watch the exact trajectory of your operations from start to finish.
                            </p>
                        </div>

                        {/* Step text blocks — stacked absolutely, GSAP crossfades them */}
                        {steps.map((step, i) => (
                            <div
                                key={step.id}
                                ref={el => { stepsRef.current[i] = el }}
                                className="absolute left-6 right-6 md:inset-x-16 lg:inset-x-24 bottom-8 md:top-1/2 md:bottom-auto md:-translate-y-1/2 pointer-events-none"
                            >
                                <h3 className="text-5xl sm:text-8xl md:text-[160px] font-black text-white/[0.06] absolute -top-10 sm:-top-12 md:-top-24 -left-2 sm:-left-4 md:-left-8 -z-10 select-none pointer-events-none">
                                    {step.id}
                                </h3>
                                <h4 className="text-2xl sm:text-4xl md:text-[4.5rem] font-black text-white mb-3 sm:mb-6 md:mb-8 tracking-tighter leading-none pr-4">
                                    {step.title}
                                </h4>
                                <div className="h-1 sm:h-1.5 w-12 sm:w-24 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mb-3 sm:mb-6 md:mb-8 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                                <p className="text-sm sm:text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-xl pr-2">
                                    {step.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE: The 3D Progress Track & Stickman */}
                    <div className="flex w-full h-[40%] md:w-[40%] md:h-full items-center justify-center relative border-t md:border-t-0 md:border-l border-white/5 pb-20 md:pb-0">

                        {/* Sci-Fi HUD Track Measurements */}
                        <div className="absolute h-full md:h-[80vh] w-24 md:w-48 flex z-0 opacity-20 md:opacity-40 translate-x-[40%] md:translate-x-0">
                            <div className="absolute inset-y-0 left-0 w-4 md:w-8 border-r md:border-r-2 border-dashed border-[#3b82f6]/40 flex flex-col justify-between py-2">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className={`h-px bg-[#3b82f6] ${i % 5 === 0 ? "w-4 md:w-6 ml-auto shadow-[0_0_5px_#3b82f6]" : "w-2 md:w-3 ml-auto opacity-50"}`} />
                                ))}
                            </div>
                        </div>

                        {/* Outer Glow Core Container */}
                        <div className="relative w-8 md:w-12 h-full md:h-[80vh] flex justify-center z-10 transform scale-75 md:scale-100 origin-center py-4 md:py-0">

                            {/* The Physical 3D Glass Tube */}
                            <div className="absolute inset-y-4 md:inset-y-0 w-4 md:w-6 rounded-full bg-[#0a0a0a] border-[1px] md:border-[1.5px] border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] overflow-hidden flex justify-center z-10">
                                {/* The Internal Rising Fluid Gradient */}
                                <div
                                    ref={fillRef}
                                    className="absolute top-0 w-full bg-gradient-to-b from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] shadow-[0_0_50px_rgba(59,130,246,1)]"
                                    style={{ height: "0%" }}
                                >
                                    {/* Cap highlight for the fluid */}
                                    <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-white/80 to-transparent blur-[2px]" />
                                </div>

                                {/* 3D Glass Highlights on Tube */}
                                <div className="absolute inset-y-0 left-0.5 w-[1px] md:w-[2px] bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-full" />
                                <div className="absolute inset-y-0 right-0 w-[1px] md:w-1 bg-black/60 rounded-full" />
                            </div>

                            {/* Node Connectors lighting up as the liquid passes */}
                            <div className="absolute inset-y-4 md:inset-y-0 w-full z-0">
                                {steps.map((step, i) => {
                                    // Place nodes at 25%, 50%, 75%, 95% — last one slightly below top so stickman visually reaches it
                                    const nodePercent = i < steps.length - 1 ? ((i + 1) / steps.length) * 100 : 95
                                    return (
                                        <div
                                            key={step.id}
                                            ref={el => { nodesRef.current[i] = el }}
                                            className="absolute left-1/2 -translate-x-1/2 w-16 md:w-24 h-[1px] flex items-center justify-center pointer-events-none"
                                            style={{ top: `${nodePercent}%`, opacity: 0, transform: "translateX(-50%) scale(0)" }}
                                        >
                                            <div className="absolute w-12 md:w-16 h-12 md:h-16 rounded-full border border-[#8b5cf6] bg-[#8b5cf6]/5 shadow-[0_0_30px_rgba(139,92,246,0.6)]" />
                                            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent" />
                                        </div>
                                    )
                                })}
                            </div>

                            {/* THE CUSTOMER (Stickman with animated poses) */}
                            <div
                                ref={stickmanRef}
                                className="absolute w-16 md:w-24 pointer-events-none z-30"
                                style={{ top: "0%" }}
                                data-stickman-pose
                            >
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 pb-2 drop-shadow-[0_0_20px_rgba(59,130,246,1)] flex flex-col items-center">
                                    {/* All 4 poses rendered — visibility controlled via CSS classes toggled by GSAP onUpdate */}
                                    <div className="relative w-[50px] md:w-[70px] h-[50px] md:h-[70px]">
                                        {[0, 1, 2, 3].map(p => (
                                            <div key={p} className={`stickman-pose-${p} absolute inset-0 flex items-center justify-center transition-none`} style={{ opacity: p === 0 ? 1 : 0 }}>
                                                <StickmanPose pose={p} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </Container>

                {/* Foreground Ambient Glow */}
                <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-50" />
            </div>
        </section>
    )
}
