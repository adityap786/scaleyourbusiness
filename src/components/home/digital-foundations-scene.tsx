"use client"

import React, { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from "three"

// ── Block Configuration ──
// Slightly rearranged for better composition in close-up
const FOUNDATION_BLOCKS = [
    { x: -0.8, z: -0.4, w: 0.35, h: 0.3, d: 0.35 },
    { x: -0.3, z: 0.2, w: 0.4, h: 0.25, d: 0.3 },
    { x: 0.3, z: -0.2, w: 0.3, h: 0.35, d: 0.4 },
    { x: 0.7, z: 0.3, w: 0.35, h: 0.28, d: 0.35 },
    { x: 0.0, z: -0.5, w: 0.45, h: 0.22, d: 0.3 },
    { x: -0.5, z: 0.5, w: 0.3, h: 0.3, d: 0.35 },
]

const EMPIRE_BLOCKS = [
    { x: -0.7, z: -0.3, w: 0.22, h: 1.2, d: 0.22 },
    { x: -0.2, z: 0.1, w: 0.28, h: 1.7, d: 0.28 },
    { x: 0.35, z: -0.15, w: 0.2, h: 1.4, d: 0.2 },
    { x: 0.7, z: 0.25, w: 0.25, h: 0.9, d: 0.25 },
    { x: 0.1, z: -0.45, w: 0.18, h: 1.1, d: 0.18 },
    { x: -0.4, z: 0.45, w: 0.22, h: 0.8, d: 0.22 },
    { x: 0.5, z: 0.5, w: 0.16, h: 0.6, d: 0.16 },
]

// ── Easing ──
function easeOutBack(t: number): number {
    const c1 = 1.70158
    const c3 = c1 + 1
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
}

function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3)
}

// ── Grid Component (Dark Theme) ──
function GridPlane({ progress }: { progress: number }) {
    const opacity = Math.min(1, progress * 3) * 0.4
    return (
        <group position={[0, -0.01, 0]}>
            <gridHelper
                args={[4, 16, "#3b82f6", "#1e293b"]}
                rotation={[0, 0, 0]}
                ref={(grid: THREE.GridHelper | null) => {
                    if (grid) {
                        const mat = grid.material as THREE.Material
                        mat.opacity = opacity
                        mat.transparent = true
                    }
                }}
            />
        </group>
    )
}

// ── Glow Edge Lines ──
function BlockEdges({
    position, size, delay, progress, color, maxOpacity
}: {
    position: [number, number, number]
    size: [number, number, number]
    delay: number
    progress: number
    color: string
    maxOpacity: number
}) {
    const ref = useRef<THREE.LineSegments>(null)
    const targetY = position[1]

    useFrame(() => {
        if (!ref.current) return
        const localProgress = Math.max(0, Math.min(1, (progress - delay) / 0.15))
        const eased = easeOutBack(localProgress)

        const currentY = -1 + (targetY + 1) * eased
        ref.current.position.y = currentY
        ref.current.scale.y = eased < 0.01 ? 0.01 : eased

        const mat = ref.current.material as THREE.LineBasicMaterial
        mat.opacity = Math.min(maxOpacity, localProgress * maxOpacity)
    })

    return (
        <lineSegments ref={ref} position={[position[0], -1, position[2]]}>
            <edgesGeometry args={[new THREE.BoxGeometry(...size)]} />
            <lineBasicMaterial color={color} transparent opacity={0} linewidth={1} />
        </lineSegments>
    )
}

// ── Rising Block (Dark Theme with Bloom) ──
function RisingBlock({
    position, size, color, emissive, delay, progress, type
}: {
    position: [number, number, number]
    size: [number, number, number]
    color: string
    emissive: string
    delay: number
    progress: number
    type: "foundation" | "empire"
}) {
    const meshRef = useRef<THREE.Mesh>(null)
    const targetY = position[1]

    useFrame(() => {
        if (!meshRef.current) return
        const localProgress = Math.max(0, Math.min(1, (progress - delay) / 0.15))
        const eased = type === "empire" ? easeOutBack(localProgress) : easeOutCubic(localProgress)

        const currentY = -1 + (targetY + 1) * eased
        meshRef.current.position.y = currentY
        meshRef.current.scale.y = eased < 0.01 ? 0.01 : eased

        // Opacity
        const mat = meshRef.current.material as THREE.MeshStandardMaterial
        mat.opacity = Math.min(1, localProgress * 2)
    })

    return (
        <mesh ref={meshRef} position={[position[0], -1, position[2]]} castShadow receiveShadow>
            <boxGeometry args={size} />
            <meshStandardMaterial
                color={color}
                emissive={emissive}
                emissiveIntensity={type === "foundation" ? 1.5 : 0.4}
                transparent
                opacity={0}
                roughness={0.2}
                metalness={type === "empire" ? 0.8 : 0.2}
            />
        </mesh>
    )
}

// ── Scene (Dark Theme & Looping) ──
function Scene({ isInView }: { isInView: boolean }) {
    const progressRef = useRef(0)
    const [progress, setProgress] = useState(0)
    const dirRef = useRef<"build" | "hold" | "dissolve">("build")
    const holdTimer = useRef(0)
    const { camera } = useThree()

    const BUILD = 0.3      // progress/sec
    const DISSOLVE = 0.5    // progress/sec
    const HOLD = 3.5        // seconds

    // Camera setup
    useEffect(() => {
        camera.position.set(1.8, 2.0, 2.5) // Moved slightly closer
        camera.lookAt(0, 0.5, 0)
    }, [camera])

    useFrame((_, delta) => {
        if (!isInView) return

        const dir = dirRef.current
        if (dir === "build") {
            progressRef.current = Math.min(1, progressRef.current + delta * BUILD)
            if (progressRef.current >= 1) { dirRef.current = "hold"; holdTimer.current = 0 }
        } else if (dir === "hold") {
            holdTimer.current += delta
            if (holdTimer.current >= HOLD) dirRef.current = "dissolve"
        } else {
            progressRef.current = Math.max(0, progressRef.current - delta * DISSOLVE)
            if (progressRef.current <= 0) dirRef.current = "build"
        }

        const currentP = progressRef.current
        setProgress(currentP)

        // Subtle camera orbit and push
        const t = performance.now() * 0.0002

        // Push forward at the end of build
        const push = currentP > 0.7 ? easeOutCubic((currentP - 0.7) / 0.3) * 0.4 : 0

        camera.position.x = 1.8 - push + Math.sin(t) * 0.15
        camera.position.z = 2.5 - push + Math.cos(t) * 0.1
        camera.lookAt(0, 0.5, 0)
    })

    // Phase timing
    const gridProgress = progress / 0.2
    const foundationStart = 0.15
    const empireStart = 0.45

    return (
        <>
            {/* Dark Theme Lighting */}
            <ambientLight intensity={0.2} color="#0f172a" />
            <directionalLight position={[4, 8, 4]} intensity={0.7} color="#e2e8f0" castShadow />
            <spotLight position={[-4, 2, 4]} intensity={2.0} color="#3b82f6" distance={10} penumbra={1} />
            <spotLight position={[4, 2, -4]} intensity={1.5} color="#8b5cf6" distance={10} penumbra={1} />

            {/* Grid */}
            <GridPlane progress={gridProgress} />

            {/* Shadow receiver plane */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[6, 6]} />
                <shadowMaterial opacity={0.4} />
            </mesh>

            {/* Foundation Blocks (Glowing Violet/Blue) */}
            {FOUNDATION_BLOCKS.map((block, i) => {
                const p: [number, number, number] = [block.x, block.h / 2, block.z]
                const s: [number, number, number] = [block.w, block.h, block.d]
                const delay = foundationStart + i * 0.06
                return (
                    <React.Fragment key={`f-${i}`}>
                        <RisingBlock
                            position={p}
                            size={s}
                            color="#8b5cf6"
                            emissive="#6d28d9"
                            delay={delay}
                            progress={progress}
                            type="foundation"
                        />
                        <BlockEdges position={p} size={s} delay={delay} progress={progress} color="#c4b5fd" maxOpacity={0.8} />
                    </React.Fragment>
                )
            })}

            {/* Empire Structures (Sleek Dark Metallic with Blue Edges) */}
            {EMPIRE_BLOCKS.map((block, i) => {
                const p: [number, number, number] = [block.x, block.h / 2 + 0.3, block.z]
                const s: [number, number, number] = [block.w, block.h, block.d]
                const delay = empireStart + i * 0.05
                return (
                    <React.Fragment key={`e-${i}`}>
                        <RisingBlock
                            position={p}
                            size={s}
                            color="#0f172a"
                            emissive="#1e293b"
                            delay={delay}
                            progress={progress}
                            type="empire"
                        />
                        <BlockEdges position={p} size={s} delay={delay} progress={progress} color="#3b82f6" maxOpacity={0.5} />
                    </React.Fragment>
                )
            })}

            {/* Post Processing for Glow */}
            <EffectComposer enableNormalPass={false}>
                <Bloom
                    luminanceThreshold={0.2}
                    mipmapBlur
                    intensity={1.2}
                    radius={0.8}
                />
            </EffectComposer>
        </>
    )
}

// ── Exported Component ──
export function DigitalFoundationsScene() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.3 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={containerRef} className="w-full h-full bg-[#020617]"> {/* Dark background to match */}
            <Canvas
                shadows
                dpr={[1, 1.5]}
                gl={{ antialias: false }}
            >
                <Scene isInView={isInView} />
            </Canvas>
        </div>
    )
}
