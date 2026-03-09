import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const AppDevPhase2 = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const rotationBase = interpolate(frame, [0, 180], [0, 360]);

    // Spring animations for UI layering / construction effect
    const layer1Y = spring({ frame, fps, config: { damping: 12 }, delay: 0 });
    const layer2Y = spring({ frame, fps, config: { damping: 12 }, delay: 15 });
    const layer3Y = spring({ frame, fps, config: { damping: 12 }, delay: 30 });

    const pulse = Math.abs(Math.sin(frame / 20)) * 0.2 + 0.8;

    return (
        <AbsoluteFill
            style={{
                backgroundColor: "#050505",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
            }}
        >
            {/* Ambient Purple/Indigo Figma-esque background glow */}
            <div
                style={{
                    position: "absolute",
                    inset: "20%",
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
                    borderRadius: "50%",
                    transform: `scale(${pulse})`,
                }}
            />

            {/* Orbiting Component Rings (Wireframes rotating into place) */}
            <div
                style={{
                    position: "absolute",
                    width: 420,
                    height: 420,
                    border: "1px dashed rgba(167, 139, 250, 0.2)",
                    borderRadius: "50%",
                    transform: `rotate(${rotationBase * 0.5}deg)`,
                }}
            />

            {/* Middle component track */}
            <div
                style={{
                    position: "absolute",
                    width: 320,
                    height: 320,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: `rotate(${-rotationBase * 0.8}deg)`,
                }}
            >
                {/* Floating UI Elements on the track */}
                {[0, 120, 240].map((deg, i) => (
                    <div
                        key={deg}
                        style={{
                            position: "absolute",
                            width: 30,
                            height: 20,
                            border: "1px solid rgba(167, 139, 250, 0.5)",
                            backgroundColor: "rgba(139, 92, 246, 0.1)",
                            borderRadius: 4,
                            transform: `rotate(${deg}deg) translateY(-160px)`,
                            backdropFilter: "blur(4px)",
                        }}
                    >
                        {/* Tiny mock-UI lines inside */}
                        <div style={{ width: "60%", height: 2, background: "rgba(167, 139, 250, 0.6)", margin: "4px 4px" }} />
                        <div style={{ width: "40%", height: 2, background: "rgba(167, 139, 250, 0.4)", margin: "2px 4px" }} />
                    </div>
                ))}
            </div>

            {/* Isometric UI Layer Construction Center */}
            <div
                style={{
                    position: "absolute",
                    width: 180,
                    height: 180,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "rotateX(60deg) rotateZ(45deg)", // Isometric perspective
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Base Layer: Wireframe */}
                <div
                    style={{
                        position: "absolute",
                        width: 140,
                        height: 140,
                        border: "2px solid rgba(139, 92, 246, 0.3)",
                        backgroundColor: "rgba(139, 92, 246, 0.05)",
                        borderRadius: 16,
                        boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)",
                        transform: `translateZ(${interpolate(layer1Y, [0, 1], [-50, 0])}px)`,
                        opacity: layer1Y,
                    }}
                >
                    <div style={{ position: "absolute", top: 10, left: 10, width: 30, height: 30, border: "1px dashed #8b5cf6", borderRadius: "50%" }} />
                    <div style={{ position: "absolute", top: 15, left: 50, right: 10, height: 8, background: "rgba(139,92,246,0.2)", borderRadius: 4 }} />
                    <div style={{ position: "absolute", top: 30, left: 50, width: "40%", height: 6, background: "rgba(139,92,246,0.1)", borderRadius: 4 }} />
                </div>

                {/* Middle Layer: Visual Design Drop */}
                <div
                    style={{
                        position: "absolute",
                        width: 120,
                        height: 120,
                        border: "1px solid rgba(167, 139, 250, 0.8)",
                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(196, 181, 253, 0.1))",
                        backdropFilter: "blur(8px)",
                        borderRadius: 12,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                        transform: `translateZ(${interpolate(layer2Y, [0, 1], [150, 40]) + interpolate(Math.sin(frame / 30), [-1, 1], [-5, 5])}px)`,
                        opacity: layer2Y,
                    }}
                >
                    {/* Fleshed out UI graphics */}
                    <div style={{ position: "absolute", top: 10, left: 10, width: 20, height: 20, background: "#a78bfa", borderRadius: "50%" }} />
                    <div style={{ position: "absolute", top: 15, left: 40, right: 10, height: 8, background: "#c4b5fd", borderRadius: 4 }} />
                    <div style={{ position: "absolute", top: 40, left: 10, right: 10, bottom: 10, background: "rgba(167,139,250,0.15)", borderRadius: 8, border: "1px solid rgba(167,139,250,0.3)" }} />
                </div>

                {/* Top Layer: Interaction / Prototype Cursor */}
                <div
                    style={{
                        position: "absolute",
                        width: 100,
                        height: 100,
                        transform: `translateZ(${interpolate(layer3Y, [0, 1], [300, 80]) + interpolate(Math.cos(frame / 20), [-1, 1], [-10, 10])}px)`,
                        opacity: layer3Y,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f3f4f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transform: "rotateX(-60deg) rotateZ(-45deg)", filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.5))" }}>
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="rgba(255,255,255,0.2)" />
                        <path d="M13 13l6 6" />
                    </svg>
                    {/* Click ripple ring */}
                    <div
                        style={{
                            position: "absolute",
                            width: 30,
                            height: 30,
                            border: "2px solid white",
                            borderRadius: "50%",
                            opacity: interpolate(frame % 60, [0, 30, 60], [0, 0.8, 0]),
                            transform: `scale(${interpolate(frame % 60, [0, 60], [0.5, 2])}) rotateX(-60deg) rotateZ(-45deg)`,
                        }}
                    />
                </div>
            </div>

        </AbsoluteFill>
    );
};
