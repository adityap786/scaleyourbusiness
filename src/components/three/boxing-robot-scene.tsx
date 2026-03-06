"use client"

import { Suspense, useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing"
import * as THREE from "three"

/* ─────────────── GLB Model path ─────────────── */
const MODEL_PATH = "/models/Meshy_AI_biped/Meshy_AI_Animation_Boxing_Practice_withSkin.glb"

/* ─────────────── Loading Fallback ─────────────── */
function LoadingFallback() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="w-8 h-8 rounded-full border-2 border-violet-500/20 border-b-violet-500 animate-spin"
                        style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
                    />
                </div>
            </div>
        </div>
    )
}

/* ─────────────── Robot Model (Smooth Animation) ─────────────── */
function RobotModel({ isMobile }: { isMobile: boolean }) {
    const group = useRef<THREE.Group>(null!)
    const { scene, animations } = useGLTF(MODEL_PATH) as any
    const { actions, mixer } = useAnimations(animations, group)

    // Play all clips on mount with proper timeScale for smoothness
    useEffect(() => {
        if (!actions || !mixer) return
        const clipNames = Object.keys(actions)
        if (clipNames.length === 0) return

        clipNames.forEach((name) => {
            const action = actions[name]
            if (action) {
                action.reset()
                action.setLoop(THREE.LoopRepeat, Infinity)
                action.clampWhenFinished = false
                action.timeScale = 0.6
                action.fadeIn(0.3)
                action.play()
            }
        })

        return () => {
            clipNames.forEach((name) => {
                const action = actions[name]
                if (action) action.fadeOut(0.2)
            })
        }
    }, [actions, mixer])

    // Drive the mixer manually inside useFrame for perfectly smooth playback
    // This is critical — lets Three.js update with precise deltaTime each frame
    useFrame((_, delta) => {
        if (mixer) mixer.update(delta)
    })

    // Enhance materials once on load
    useEffect(() => {
        scene.traverse((child: any) => {
            if (child.isMesh && child.material) {
                const mat = child.material
                mat.envMapIntensity = isMobile ? 1.0 : 1.5
                mat.roughness = Math.max((mat.roughness ?? 0.5) * 0.7, 0.15)
                mat.metalness = Math.min((mat.metalness ?? 0.5) + 0.2, 1.0)
                // Disable shadow casting on mobile for GPU savings
                child.castShadow = !isMobile
                child.receiveShadow = false
                mat.needsUpdate = true
            }
        })
    }, [scene, isMobile])

    return (
        <group ref={group} dispose={null}>
            <primitive
                object={scene}
                scale={isMobile ? 1.4 : 1.55}
                position={isMobile ? [0, -0.9, 0] : [0, -1.75, 0]}
                rotation={[0, Math.PI * 0.15, 0]}
            />
        </group>
    )
}

/* ─────────────── Desktop Lighting (Cinematic 3-point) ─────────────── */
function DesktopLighting() {
    return (
        <>
            <directionalLight position={[5, 8, 3]} intensity={2.5} color="#4F8EFF" />
            <directionalLight position={[-4, 3, 2]} intensity={1.2} color="#FFB366" />
            <directionalLight position={[0, 4, -5]} intensity={2.0} color="#6366F1" />
            <pointLight position={[0, -1, 2]} intensity={0.6} color="#94A3B8" distance={8} />
            <ambientLight intensity={0.35} color="#1a1a2e" />
        </>
    )
}

/* ─────────────── Mobile Lighting (Single key + ambient — cheap) ─────────────── */
function MobileLighting() {
    return (
        <>
            <directionalLight position={[3, 6, 4]} intensity={2.8} color="#4F8EFF" />
            <directionalLight position={[0, 3, -4]} intensity={1.5} color="#6366F1" />
            <ambientLight intensity={0.5} color="#1a1a2e" />
        </>
    )
}

/* ─────────────── Post-processing (Desktop only) ─────────────── */
function PostEffects() {
    return (
        <EffectComposer>
            <Bloom luminanceThreshold={0.6} luminanceSmoothing={0.9} intensity={0.7} mipmapBlur />
            <Vignette eskil={false} offset={0.3} darkness={0.55} />
        </EffectComposer>
    )
}

/* ─────────────── Main Exported Scene ─────────────── */
export function BoxingRobotScene({
    className = "",
    isMobile = false,
}: {
    className?: string
    isMobile?: boolean
}) {
    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            <Suspense fallback={<LoadingFallback />}>
                <Canvas
                    camera={{
                        position: [0, 0.4, isMobile ? 6 : 7.2],
                        fov: isMobile ? 54 : 44,
                        near: 0.1,
                        far: 80,
                    }}
                    // Adaptive DPR: mobile capped at 1, desktop up to 1.5
                    dpr={isMobile ? [1, 1] : [1, 1.5]}
                    gl={{
                        antialias: !isMobile,
                        toneMapping: THREE.ACESFilmicToneMapping,
                        toneMappingExposure: 1.15,
                        powerPreference: isMobile ? "low-power" : "high-performance",
                    }}
                    // frameloop demand = only render when something changes, but
                    // animation needs 'always' to stay smooth
                    frameloop="always"
                    style={{ background: "transparent" }}
                >
                    {/* Adaptive lighting */}
                    {isMobile ? <MobileLighting /> : <DesktopLighting />}

                    {/* Environment reflections — skip on mobile */}
                    {!isMobile && <Environment preset="city" environmentIntensity={0.35} />}

                    {/* Robot — no Bounds wrapper (was causing jitter) */}
                    <RobotModel isMobile={isMobile} />

                    {/* Contact shadow — lighter on mobile */}
                    <ContactShadows
                        position={[0, isMobile ? -0.9 : -1.75, 0]}
                        opacity={isMobile ? 0.3 : 0.5}
                        scale={isMobile ? 6 : 10}
                        blur={isMobile ? 1.5 : 2.5}
                        far={3}
                        color="#4F46E5"
                    />

                    {/* Orbit controls — disable on mobile for perf & UX */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.5}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 2.1}
                        target={[0, 0, 0]}
                        enableDamping
                        dampingFactor={0.05}
                    />

                    {/* Post-processing — desktop only */}
                    {!isMobile && <PostEffects />}
                </Canvas>
            </Suspense>

            {/* Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--color-bg)] to-transparent pointer-events-none" />
        </div>
    )
}

// Preload model
useGLTF.preload(MODEL_PATH)
