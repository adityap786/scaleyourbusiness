"use client"

import React, { useMemo } from "react"
import { motion } from "motion/react"

/* ═══════════════════════════════════════════════════════════
   PREMIUM 2D VECTOR VIZ: Neural Knowledge Absorption
   Built with Framer Motion & SVG for absolute crispness 
   and buttery smooth timeline choreography.
   DARK THEME.
   ═══════════════════════════════════════════════════════════ */

function generateNetwork() {
    const nodes: any[] = []
    const lines: any[] = []

    const cx = 400
    const cy = 300

    // Core node
    nodes.push({ id: 0, x: cx, y: cy + 10, r: 8, delay: 0, isCore: true })

    const rings = [
        { count: 14, radiusX: 50, radiusY: 60 },
        { count: 24, radiusX: 110, radiusY: 130 },
        { count: 34, radiusX: 180, radiusY: 210 },
        { count: 46, radiusX: 250, radiusY: 270 },
    ]

    let idCounter = 1
    rings.forEach((ring, rIdx) => {
        for (let i = 0; i < ring.count; i++) {
            const theta = (i / ring.count) * Math.PI * 2

            // Brain silhouette heuristics
            const isTop = Math.abs(Math.sin(theta)) > 0.85 && Math.sin(theta) < 0
            const isBottom = Math.abs(Math.sin(theta)) > 0.85 && Math.sin(theta) > 0

            let shapeMod = 1.0

            // Longitudinal Fissure (Indent at top)
            if (isTop) {
                shapeMod -= 0.3 * Math.pow(Math.abs(Math.sin(theta)), 6)
            }
            // Cerebellum base taper (Indent at bottom)
            if (isBottom) {
                shapeMod -= 0.15 * Math.pow(Math.abs(Math.sin(theta)), 4)
            }

            // Frontal lobe puff (right side -> 0)
            if (Math.cos(theta) > 0) {
                shapeMod += 0.05 * Math.cos(theta)
            }

            const finalRx = ring.radiusX * shapeMod
            const finalRy = ring.radiusY * shapeMod

            // Structural noise
            const nx = finalRx * Math.cos(theta) * (0.95 + Math.random() * 0.1)
            const ny = finalRy * Math.sin(theta) * (0.95 + Math.random() * 0.1)

            nodes.push({
                id: idCounter++,
                x: cx + nx,
                y: cy + ny,
                r: Math.random() > 0.8 ? 3.5 : 2,
                delay: 0.1 + (rIdx * 0.25) + (Math.random() * 0.2), // Outward radial delay
                ring: rIdx
            })
        }
    })

    // Connections
    nodes.filter(n => n.ring === 0).forEach(n => {
        lines.push({ id: `l0-${n.id}`, x1: cx, y1: cy + 10, x2: n.x, y2: n.y, delay: n.delay })
    })

    for (let r = 1; r < rings.length; r++) {
        const currentRing = nodes.filter(n => n.ring === r)
        const prevRing = nodes.filter(n => n.ring === r - 1)

        currentRing.forEach(curr => {
            const sortedPrev = [...prevRing].sort((a, b) => {
                return (Math.hypot(a.x - curr.x, a.y - curr.y) - Math.hypot(b.x - curr.x, b.y - curr.y))
            })

            // Nearest inwardly
            lines.push({ id: `l${sortedPrev[0].id}-${curr.id}`, x1: sortedPrev[0].x, y1: sortedPrev[0].y, x2: curr.x, y2: curr.y, delay: curr.delay })

            // 30% chance for second inward connection
            if (Math.random() > 0.7 && sortedPrev[1]) {
                lines.push({ id: `l${sortedPrev[1].id}-${curr.id}`, x1: sortedPrev[1].x, y1: sortedPrev[1].y, x2: curr.x, y2: curr.y, delay: curr.delay + 0.1 })
            }

            // Lateral connections (same ring)
            const sortedSame = [...currentRing].filter(n => n.id !== curr.id).sort((a, b) => {
                return (Math.hypot(a.x - curr.x, a.y - curr.y) - Math.hypot(b.x - curr.x, b.y - curr.y))
            })
            if (Math.random() > 0.5 && sortedSame[0]) {
                lines.push({ id: `llat${curr.id}-${sortedSame[0].id}`, x1: curr.x, y1: curr.y, x2: sortedSame[0].x, y2: sortedSame[0].y, delay: curr.delay + 0.1 })
            }
        })
    }

    return { nodes, lines }
}

export function KnowledgeAbsorptionScene() {
    const { nodes, lines } = useMemo(() => generateNetwork(), [])

    // Elegant curving paths for incoming knowledge "streams"
    const streams = useMemo(() => [
        { d: "M 100 -100 Q 250 100 400 310", delay: 0.0 },
        { d: "M 700 -100 Q 550 100 400 310", delay: 0.15 },
        { d: "M -100 300 Q 150 200 400 310", delay: 0.3 },
        { d: "M 900 300 Q 650 200 400 310", delay: 0.45 },
        { d: "M 100 700 Q 250 500 400 310", delay: 0.1 },
        { d: "M 700 700 Q 550 500 400 310", delay: 0.25 },
        { d: "M 400 800 Q 300 500 400 310", delay: 0.4 }, // Up the "spine"
        { d: "M 400 -200 Q 500 100 400 310", delay: 0.55 },
    ], [])

    // Motion timeline orchestrator
    const STREAM_DUR = 1.0
    const BURST_WAIT = 0.8 // Wait for streams to hit

    return (
        <div className="w-full h-full bg-[#020617] flex items-center justify-center overflow-hidden">
            <motion.svg
                viewBox="0 0 800 600"
                className="w-full h-[150%] sm:h-[120%] md:h-full lg:h-full object-contain"
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-100px" }}
            >
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
                    </linearGradient>
                </defs>

                {/* --- 1. Lines (Synapses) --- */}
                {lines.map((line) => (
                    <motion.line
                        key={line.id}
                        x1={line.x1} y1={line.y1}
                        x2={line.x2} y2={line.y2}
                        stroke="#38bdf8"
                        strokeWidth="1"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: Math.random() > 0.8 ? 0.35 : 0.15, // Some lines are slightly brighter
                                transition: {
                                    delay: BURST_WAIT + line.delay,
                                    duration: 1.0,
                                    ease: "easeOut",
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 2.0
                                }
                            }
                        }}
                    />
                ))}

                {/* --- 2. Nodes (Neurons) --- */}
                {nodes.map((node) => (
                    <motion.circle
                        key={`n${node.id}`}
                        cx={node.x} cy={node.y}
                        r={node.r}
                        fill={node.isCore ? "#fff" : (Math.random() > 0.8 ? "#e0f2fe" : "#7dd3fc")}
                        filter={node.isCore ? "url(#glow)" : "none"}
                        variants={{
                            hidden: { scale: 0, opacity: 0 },
                            visible: {
                                scale: node.isCore ? [0, 1.8, 1.2] : [0, 1.3, 1],
                                opacity: node.isCore ? [0, 1, 1] : [0, 1, 0.7],
                                transition: {
                                    delay: BURST_WAIT + node.delay,
                                    duration: 0.8,
                                    ease: "easeOut",
                                    repeat: Infinity,
                                    repeatDelay: 2.0
                                }
                            }
                        }}
                    />
                ))}

                {/* --- 3. Knowledge Streams (Incoming Data) --- */}
                {streams.map((stream, i) => (
                    <motion.path
                        key={`s${i}`}
                        d={stream.d}
                        fill="none"
                        stroke="url(#streamGrad)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter="url(#glow)"
                        variants={{
                            hidden: { pathLength: 0, opacity: 0 },
                            visible: {
                                pathLength: [0, 1],
                                opacity: [0, 1, 0], // Fades out as it reaches the center
                                transition: {
                                    delay: stream.delay,
                                    duration: STREAM_DUR,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 2.0 + BURST_WAIT
                                }
                            }
                        }}
                    />
                ))}

                {/* --- 4. Central Core Pulse Rings --- */}
                {[0, 1, 2].map((ring) => (
                    <motion.circle
                        key={`p${ring}`}
                        cx={400} cy={310}
                        r={20}
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        variants={{
                            hidden: { scale: 0, opacity: 0 },
                            visible: {
                                scale: [0, 3 + ring * 2],
                                opacity: [0, 0.8, 0],
                                transition: {
                                    delay: BURST_WAIT + (ring * 0.2),
                                    duration: 1.5,
                                    ease: "easeOut",
                                    repeat: Infinity,
                                    repeatDelay: 1.3
                                }
                            }
                        }}
                    />
                ))}
            </motion.svg>
        </div>
    )
}
