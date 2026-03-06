"use client"

import React, { useRef, useState, useEffect, useCallback } from "react"
import { motion, useMotionValue, useSpring, animate } from "motion/react"
import { Container } from "@/components/ui/container"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// ─── Real client projects ────────────────────────────────────────────────────
const baseProjects = [
    {
        title: "Peak Nutrition",
        category: "Health & Fitness",
        brandColor: "#D9FA50",
        brandBg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop",
        href: "/work/peak-nutrition",
    },
    {
        title: "Doner & Gyros",
        category: "F&B Brand",
        brandColor: "#FF6B35",
        brandBg: "linear-gradient(135deg, #1a0a00 0%, #2d1810 100%)",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=800&auto=format&fit=crop",
        href: "/work/doner-gyros-india",
    },
    {
        title: "Just Smile",
        subtitle: "Catering & Hospitality",
        category: "Hospitality",
        brandColor: "#F5C518",
        brandBg: "linear-gradient(135deg, #1a1500 0%, #2d2200 100%)",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
        href: "/work/just-smile-catering",
    },
    {
        title: "Eggeto",
        subtitle: "India's 1st Instant Omelette",
        category: "E-Commerce",
        brandColor: "#FBBF24",
        brandBg: "linear-gradient(135deg, #1c1607 0%, #292011 100%)",
        image: "https://images.unsplash.com/photo-1498837167922-41c53b4f0f67?q=80&w=800&auto=format&fit=crop",
        href: "/work/eggeto",
    },
    {
        title: "BH Hotels",
        category: "Hotel & Stays",
        brandColor: "#C9A96E",
        brandBg: "linear-gradient(135deg, #0a0a0a 0%, #1a1510 100%)",
        image: "https://images.unsplash.com/photo-1542314831-c6a420325142?q=80&w=800&auto=format&fit=crop",
        href: "/work/bh-hotels",
    },
    {
        title: "Amrapali AI",
        category: "AI Lead Gen",
        brandColor: "#818CF8",
        brandBg: "linear-gradient(135deg, #0f0a1e 0%, #1a1030 100%)",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        href: "/work/amrapali-ai-leads",
    },
]

// Duplicate to fill the cylinder
const projects = [...baseProjects, ...baseProjects].map((p, i) => ({ ...p, id: i }))
const NUM_CARDS = projects.length
const ANGLE_INCREMENT = 360 / NUM_CARDS

export function PortfolioCarousel() {
    const containerRef = useRef<HTMLDivElement>(null)
    const viewportRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    // Responsive vh-based card sizes
    const [dims, setDims] = useState({ w: 420, h: 520, radius: 900 })

    useEffect(() => {
        const calc = () => {
            const vw = window.innerWidth
            const vh = window.innerHeight
            const mobile = vw < 768

            // Cards sized in viewport units for immersive feel
            const w = mobile ? Math.min(vw * 0.72, 340) : Math.min(vw * 0.28, 460)
            const h = mobile ? vh * 0.52 : vh * 0.62
            const gap = mobile ? 16 : 28
            const radius = Math.round(((w + gap) / 2) / Math.tan(Math.PI / NUM_CARDS))
            setDims({ w, h, radius })
        }
        calc()
        window.addEventListener("resize", calc)
        return () => window.removeEventListener("resize", calc)
    }, [])

    const rotation = useMotionValue(0)
    const springRotation = useSpring(rotation, {
        stiffness: 120,
        damping: 35,
        mass: 1,
        restDelta: 0.001,
    })

    // ─── Pointer-based drag on the viewport (no blocking overlay!) ───────────
    const dragging = useRef(false)
    const lastX = useRef(0)

    const onPointerDown = useCallback((e: React.PointerEvent) => {
        // Only start drag on the viewport background, not on links
        if ((e.target as HTMLElement).closest("a")) return
        dragging.current = true
        lastX.current = e.clientX
        setIsDragging(true)
        ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    }, [])

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        if (!dragging.current) return
        const dx = e.clientX - lastX.current
        lastX.current = e.clientX
        rotation.set(rotation.get() + dx * 0.35)
    }, [rotation])

    const onPointerUp = useCallback(() => {
        dragging.current = false
        setIsDragging(false)
    }, [])

    // Auto-rotation
    useEffect(() => {
        let controls: ReturnType<typeof animate> | undefined
        if (!isDragging && !isHovered) {
            controls = animate(rotation, rotation.get() - 360, {
                duration: 55,
                ease: "linear",
                repeat: Infinity,
            })
        }
        return () => controls?.stop()
    }, [isDragging, isHovered, rotation])

    return (
        <section className="py-24 md:py-36 bg-[var(--color-bg)] relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-brand)]/5 via-[var(--color-bg)] to-[var(--color-bg)] pointer-events-none" />

            {/* Header */}
            <Container className="text-center mb-16 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--color-brand)] bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 mb-6">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-[var(--color-text)] mb-4 leading-tight">
                        Immersive <br className="hidden lg:block" />
                        <span className="gradient-text">Experiences.</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto mt-6 font-medium">
                        Swipe to explore the digital products, saas platforms, and brands we&apos;ve engineered.
                    </p>
                </motion.div>
            </Container>

            {/* 3D Carousel — drag is on the viewport itself, no z-50 overlay */}
            <div
                ref={viewportRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => { setIsHovered(false); onPointerUp() }}
                className="relative w-full overflow-hidden flex justify-center items-center cursor-grab active:cursor-grabbing select-none touch-pan-y"
                style={{ perspective: "1800px", height: dims.h + 80 }}
            >
                {/* Rotating Cylinder */}
                <motion.div
                    ref={containerRef}
                    className="relative flex items-center justify-center transform-gpu"
                    style={{
                        width: dims.w,
                        height: dims.h,
                        rotateY: springRotation,
                        z: -dims.radius,
                        transformStyle: "preserve-3d",
                    }}
                >
                    {projects.map((project, index) => {
                        const angle = index * ANGLE_INCREMENT
                        return (
                            <div
                                key={project.id}
                                className="absolute top-0 left-0 w-full h-full transform-gpu"
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${dims.radius}px)`,
                                    backfaceVisibility: "hidden",
                                }}
                            >
                                {/* Card */}
                                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] group">
                                    {/* Background Image — dimmed & desaturated */}
                                    <div className="absolute inset-0 z-0">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-40 saturate-[0.3] group-hover:opacity-50 group-hover:saturate-[0.5] transition-all duration-700 scale-105 group-hover:scale-100"
                                            draggable={false}
                                        />
                                        {/* Dark tinted overlay */}
                                        <div className="absolute inset-0" style={{ background: project.brandBg, opacity: 0.7 }} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
                                    </div>

                                    {/* Centered Brand Logo / Name */}
                                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
                                        {/* Brand Name as stylized text logo */}
                                        <span
                                            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                                            style={{ color: project.brandColor }}
                                        >
                                            {project.title}
                                        </span>
                                        {"subtitle" in project && project.subtitle && (
                                            <span className="mt-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-white/50">
                                                {project.subtitle}
                                            </span>
                                        )}
                                    </div>

                                    {/* Bottom info bar */}
                                    <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-16 z-20 bg-gradient-to-t from-black/95 to-transparent flex items-end justify-between">
                                        <div>
                                            <span
                                                className="block text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase mb-1"
                                                style={{ color: project.brandColor }}
                                            >
                                                {project.category}
                                            </span>
                                            <span className="text-sm font-bold text-white/70">
                                                View Case Study
                                            </span>
                                        </div>
                                        <Link
                                            href={project.href}
                                            className="relative z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
                                            style={{
                                                borderColor: `${project.brandColor}40`,
                                                background: `${project.brandColor}15`,
                                            }}
                                            onMouseDown={(e) => e.stopPropagation()}
                                        >
                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: project.brandColor }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>

            {/* Drag hint */}
            <div className="mt-8 flex gap-2 items-center text-[var(--color-text-muted)] text-sm font-medium z-10">
                <span className="hidden md:inline">← Drag freely to explore →</span>
                <span className="md:hidden">← Swipe to explore →</span>
            </div>
        </section>
    )
}
