"use client"

import React, { useRef, useEffect, useState, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from "three"

/* ═══════════════════════════════════════════════════════════
   Show-Stopper Friction Elimination (Premium AI/Data Viz)
   Creative Agencies (Network) <──> Elite Clients (Monolith Tower)
   DARK THEME
   ═══════════════════════════════════════════════════════════ */

const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

/* ────────────────────────────────────────────────
   Imperative Line helper
   ──────────────────────────────────────────────── */
function LineSegment({ from, to, color, opacity, thickness = 1 }: {
    from: [number, number, number]
    to: [number, number, number]
    color: string
    opacity: number
    thickness?: number
}) {
    const ref = useRef<THREE.LineSegments>(null)
    const geo = useMemo(() => {
        const g = new THREE.BufferGeometry()
        g.setAttribute("position", new THREE.Float32BufferAttribute([...from, ...to], 3))
        return g
    }, [from, to])

    useFrame(() => {
        if (!ref.current) return
        const m = ref.current.material as THREE.LineBasicMaterial
        m.opacity = opacity
    })

    return (
        <lineSegments ref={ref} geometry={geo}>
            <lineBasicMaterial color={color} transparent opacity={opacity} linewidth={thickness} />
        </lineSegments>
    )
}

/* ────────────────────────────────────────────────
   Left Side: The Creative Agency (Dynamic Brain/Network)
   ──────────────────────────────────────────────── */
function AgencyNetwork({ progress, isConnected }: { progress: number, isConnected: boolean }) {
    const groupRef = useRef<THREE.Group>(null)

    // A spherical network to represent ideas/creativity/brain
    const { nodes, connections } = useMemo(() => {
        const pts: [number, number, number][] = []
        const count = 35
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(1 - 2 * (i + 0.5) / count)
            const theta = Math.PI * (1 + Math.sqrt(5)) * i

            // Outer shell points + inner core points
            const r = i < 10 ? 0.2 + Math.random() * 0.1 : 0.45 + Math.random() * 0.1

            pts.push([
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.cos(phi),
                r * Math.sin(phi) * Math.sin(theta)
            ])
        }

        const conns: [number, number][] = []
        for (let i = 0; i < pts.length; i++) {
            for (let j = i + 1; j < pts.length; j++) {
                const dist = Math.sqrt(
                    (pts[i][0] - pts[j][0]) ** 2 +
                    (pts[i][1] - pts[j][1]) ** 2 +
                    (pts[i][2] - pts[j][2]) ** 2
                )
                if (dist < 0.45) conns.push([i, j])
            }
        }
        return { nodes: pts, connections: conns }
    }, [])

    useFrame(({ clock }) => {
        if (!groupRef.current) return
        const t = clock.elapsedTime
        // Active, breathing, rotating motion
        groupRef.current.position.y = Math.sin(t * 1.5) * 0.05
        groupRef.current.rotation.x = t * 0.2
        groupRef.current.rotation.y = t * 0.4
        const scale = 1.0 + Math.sin(t * 3) * 0.05
        groupRef.current.scale.setScalar(scale)
    })

    const pulseIntensity = isConnected ? 2.5 : 0.8

    return (
        <group ref={groupRef} position={[-1.2, 0, 0]}>
            {/* Network Nodes */}
            {nodes.map((pos, i) => (
                <mesh key={`an${i}`} position={pos}>
                    <icosahedronGeometry args={[i < 10 ? 0.04 : 0.02, 0]} />
                    <meshStandardMaterial
                        color="#d8b4fe"
                        emissive="#a855f7"
                        emissiveIntensity={pulseIntensity * (0.5 + Math.sin(i * 10) * 0.5)}
                        roughness={0.2}
                    />
                </mesh>
            ))}
            {/* Connections */}
            {connections.map(([a, b], i) => (
                <LineSegment
                    key={`ac${i}`}
                    from={nodes[a]}
                    to={nodes[b]}
                    color="#c4b5fd"
                    opacity={0.3}
                />
            ))}
            {/* Core glow */}
            <mesh>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshBasicMaterial color="#a855f7" transparent opacity={0.15} />
            </mesh>
        </group>
    )
}

/* ────────────────────────────────────────────────
   Right Side: Elite Client (The Monolithic Tower/Enterprise)
   ──────────────────────────────────────────────── */
function ClientMonolith({ progress, isConnected }: { progress: number, isConnected: boolean }) {
    const groupRef = useRef<THREE.Group>(null)

    // Architectural soaring monolithic structures
    const pillars = useMemo(() => {
        return [
            { x: 0, z: 0, w: 0.3, h: 1.4, d: 0.3 }, // Main core
            { x: -0.2, z: 0.2, w: 0.15, h: 1.0, d: 0.15 }, // Front left
            { x: 0.2, z: -0.15, w: 0.12, h: 1.2, d: 0.12 }, // Back right
            { x: 0.25, z: 0.25, w: 0.18, h: 0.8, d: 0.18 }, // Front right
            { x: -0.15, z: -0.25, w: 0.14, h: 0.9, d: 0.14 }, // Back left
        ]
    }, [])

    useFrame(({ clock }) => {
        if (!groupRef.current) return
        const t = clock.elapsedTime
        // Stable, majestic, slow continuous rotation
        groupRef.current.rotation.y = t * 0.1 + (Math.PI / 4)
        groupRef.current.position.y = -0.5 + Math.sin(t * 0.5) * 0.02
    })

    // When connected, the monolithic structure glows with the creative energy
    const targetColor = isConnected ? new THREE.Color("#c4b5fd") : new THREE.Color("#1e293b")
    const targetEmissive = isConnected ? new THREE.Color("#6d28d9") : new THREE.Color("#020617")
    const emissiveIntensity = isConnected ? 1.5 : 0.1

    return (
        <group ref={groupRef} position={[1.2, 0, 0]}>
            {pillars.map((p, i) => (
                <group key={`cm${i}`} position={[p.x, p.h / 2, p.z]}>
                    <mesh castShadow receiveShadow>
                        <boxGeometry args={[p.w, p.h, p.d]} />
                        <meshStandardMaterial
                            color={targetColor}
                            emissive={targetEmissive}
                            emissiveIntensity={emissiveIntensity}
                            roughness={0.1}
                            metalness={0.9} // Highly metallic/glassy
                        />
                    </mesh>
                    {/* Architectural wireframe edges */}
                    <lineSegments>
                        <edgesGeometry args={[new THREE.BoxGeometry(p.w, p.h, p.d)]} />
                        <lineBasicMaterial color={isConnected ? "#d8b4fe" : "#475569"} transparent opacity={isConnected ? 0.6 : 0.3} />
                    </lineSegments>
                </group>
            ))}
            {/* Hexagonal Base */}
            <mesh position={[0, -0.05, 0]} receiveShadow>
                <cylinderGeometry args={[0.5, 0.5, 0.1, 6]} />
                <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.5} />
                <lineSegments>
                    <edgesGeometry args={[new THREE.CylinderGeometry(0.5, 0.5, 0.1, 6)]} />
                    <lineBasicMaterial color="#334155" transparent opacity={0.5} />
                </lineSegments>
            </mesh>
        </group>
    )
}

/* ────────────────────────────────────────────────
   Center: Chaos bridging to Order (The "Friction" & "Elimination")
   ──────────────────────────────────────────────── */
function EnergyBridge({ progress }: { progress: number }) {
    const particlesRef = useRef<THREE.InstancedMesh>(null)
    const linesRef = useRef<THREE.Group>(null)

    const particleCount = 100
    const dummy = useMemo(() => new THREE.Object3D(), [])

    // Bridge splines that appear when friction is eliminated
    const bridgeSplines = useMemo(() => {
        const curves: THREE.CatmullRomCurve3[] = []
        for (let i = 0; i < 8; i++) {
            const yOffset = (Math.random() - 0.5) * 0.6
            const zOffset = (Math.random() - 0.5) * 0.6
            const pts = [
                new THREE.Vector3(-1.0, (Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5),
                new THREE.Vector3(-0.4, yOffset * 1.5, zOffset * 1.5),
                new THREE.Vector3(0.4, yOffset * -0.5, zOffset * -0.5),
                new THREE.Vector3(1.0, (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.3),
            ]
            curves.push(new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.5))
        }
        return curves
    }, [])

    useFrame(({ clock }) => {
        const t = clock.elapsedTime

        // Progress < 0.5: Friction (Chaotic scatter in the middle)
        // Progress > 0.5: Connection (Particles align along the bridges)
        const isFriction = progress < 0.5
        const alignProgress = isFriction ? 0 : easeOutExpo((progress - 0.5) * 2)

        if (particlesRef.current) {
            for (let i = 0; i < particleCount; i++) {
                const phase = (i / particleCount)
                const speed = 0.5 + (i % 5) * 0.2
                const cycle = (t * speed + phase) % 1.0

                if (isFriction) {
                    // Chaotic cluster in the center gap (-0.5 to 0.5)
                    const x = (Math.random() - 0.5) * 1.0
                    const y = Math.sin(t * 3 + i) * 0.4
                    const z = Math.cos(t * 2.5 + i * 2) * 0.4
                    const scale = (0.5 + Math.sin(t * 10 + i) * 0.5) * 0.015

                    dummy.position.set(x, y, z)
                    dummy.scale.setScalar(scale)
                } else {
                    // Aligned to bridges
                    const bridgeIndex = i % bridgeSplines.length
                    const curve = bridgeSplines[bridgeIndex]

                    // Particles travel along the curve
                    const curvePos = curve.getPoint(cycle)

                    // Add slight noise that reduces as alignment increases
                    const noise = (1 - alignProgress) * 0.3
                    dummy.position.set(
                        curvePos.x + (Math.random() - 0.5) * noise,
                        curvePos.y + (Math.random() - 0.5) * noise,
                        curvePos.z + (Math.random() - 0.5) * noise
                    )

                    // Scale pulses as it travels
                    const scale = 0.015 * (Math.sin(cycle * Math.PI) * alignProgress * 2)
                    dummy.scale.setScalar(scale)
                }

                dummy.updateMatrix()
                particlesRef.current.setMatrixAt(i, dummy.matrix)
            }
            particlesRef.current.instanceMatrix.needsUpdate = true
        }

        // Bridge lines fade in during connection phase
        if (linesRef.current) {
            linesRef.current.children.forEach((mesh: any, i) => {
                const m = mesh.material as THREE.MeshStandardMaterial
                const p = Math.max(0, Math.min(1, (progress - 0.5) * 2))
                const ease = easeInOutCubic(p)
                mesh.scale.x = ease
                m.opacity = ease * 0.8
                m.emissiveIntensity = ease * 2.0
            })
        }
    })

    return (
        <group>
            {/* Energy Particles */}
            <instancedMesh ref={particlesRef} args={[undefined, undefined, particleCount]}>
                <sphereGeometry args={[1, 8, 8]} />
                <meshStandardMaterial
                    color="#f8fafc"
                    emissive="#60a5fa"
                    emissiveIntensity={3}
                    transparent
                    opacity={0.8}
                />
            </instancedMesh>

            {/* Seamless Connection Bridges (tubes) */}
            <group ref={linesRef}>
                {bridgeSplines.map((curve, i) => (
                    <mesh key={`br${i}`} scale={[0, 1, 1]}>
                        <tubeGeometry args={[curve, 64, 0.004, 8, false]} />
                        <meshStandardMaterial
                            color="#c4b5fd"
                            emissive="#8b5cf6"
                            emissiveIntensity={0}
                            transparent
                            opacity={0}
                        />
                    </mesh>
                ))}
            </group>
        </group>
    )
}

/* ════════════════════════════════════════════════
   Main Scene — Cinematic Camera & Progression
   ════════════════════════════════════════════════ */
function Scene({ isInView }: { isInView: boolean }) {
    const progressRef = useRef(0)
    const [progress, setProgress] = useState(0)
    const dirRef = useRef<"forward" | "loopback">("forward")
    const { camera } = useThree()

    // Timeline:
    // 0.0 - 0.4: Friction (Chaotic particles, independent masses)
    // 0.4 - 0.7: Elimination (Particles form bridges)
    // 0.7 - 1.0: Fusion (Light pulse, right structure transforms)

    useEffect(() => {
        camera.position.set(0, 0, 3.5)
        camera.lookAt(0, 0, 0)
    }, [camera])

    useFrame((_, delta) => {
        if (!isInView) return

        if (dirRef.current === "forward") {
            progressRef.current += delta * 0.15 // ~6.6s cycle
            if (progressRef.current >= 1.3) { // Hold at fusion
                dirRef.current = "loopback"
            }
        } else {
            progressRef.current -= delta * 0.8 // Quick snap back
            if (progressRef.current <= 0) {
                progressRef.current = 0
                dirRef.current = "forward"
            }
        }

        const safeProgress = Math.min(1, Math.max(0, progressRef.current))
        setProgress(safeProgress)

        // Cinematic Camera
        // Parallax + slow push in during fusion
        const t = performance.now() * 0.0001

        const push = safeProgress > 0.6 ? easeInOutCubic((safeProgress - 0.6) / 0.4) * 0.8 : 0

        // Gentle rotation around the scene
        camera.position.x = Math.sin(t * 0.5) * 0.3
        camera.position.y = Math.cos(t * 0.3) * 0.2
        camera.position.z = 3.5 - push + Math.cos(t * 0.2) * 0.1
        camera.lookAt(0, 0, 0)
    })

    const isConnected = progress > 0.6

    return (
        <>
            {/* Dark Theme Lighting */}
            <ambientLight intensity={0.1} color="#0f172a" />
            <directionalLight position={[0, 4, 2]} intensity={0.8} color="#94a3b8" />
            {/* Deep colorful rim lights */}
            <spotLight position={[-4, 0, 2]} intensity={2.5} color="#c084fc" distance={8} penumbra={1} />
            <spotLight position={[4, 0, 2]} intensity={2.0} color="#3b82f6" distance={8} penumbra={1} />

            <AgencyNetwork progress={progress} isConnected={isConnected} />
            <ClientMonolith progress={progress} isConnected={isConnected} />
            <EnergyBridge progress={progress} />

            {/* Post Processing for Awwwards-style Bloom */}
            <EffectComposer enableNormalPass={false}>
                <Bloom
                    luminanceThreshold={0.2}
                    mipmapBlur
                    intensity={1.5}
                    radius={0.8}
                />
            </EffectComposer>
        </>
    )
}

/* ── Exported Component ── */
export function FrictionEliminationScene() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const el = containerRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.2 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={containerRef} className="w-full h-full bg-[#020617]">
            <Canvas
                shadows
                dpr={[1, 1.5]}    // Cap DPR for heavy post-processing
                gl={{ antialias: false }} // Post-processing AA is better handled by composer if needed, disable core AA for perf
            >
                <Scene isInView={isInView} />
            </Canvas>
        </div>
    )
}
