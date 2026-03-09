import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const AppDevPhase1 = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Constant smooth rotation
    const rotationBase = interpolate(frame, [0, 180], [0, 360]);

    // Constructing Blueprint Effect
    const buildProgress = spring({
        frame,
        fps,
        config: { damping: 200 },
    });

    const pulse = Math.abs(Math.sin(frame / 30)) * 0.3 + 0.7;

    return (
        <AbsoluteFill
            style={{
                backgroundColor: "#050505",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
            }}
        >
            {/* Ambient Background Grid */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundSize: "40px 40px",
                    backgroundImage: "linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)",
                    opacity: 0.5,
                    transform: `scale(${1 + interpolate(Math.sin(frame / 50), [-1, 1], [0, 0.1])})`,
                }}
            />

            {/* Vast Outer Network Ring */}
            <div
                style={{
                    position: "absolute",
                    width: 440,
                    height: 440,
                    border: "1px solid rgba(99, 102, 241, 0.1)",
                    borderRadius: "50%",
                    transform: `rotate(${rotationBase * 0.3}deg)`,
                }}
            >
                {/* Orbiting data points */}
                {[0, 120, 240].map((deg, i) => (
                    <div
                        key={deg}
                        style={{
                            position: "absolute",
                            width: 4,
                            height: 12,
                            backgroundColor: "rgba(99, 102, 241, 0.4)",
                            top: -6,
                            left: "50%",
                            transformOrigin: "0 226px", // Center of the 440 ring
                            transform: `rotate(${deg + (frame % 360) * (i + 1) * 0.5}deg)`,
                            boxShadow: "0 0 10px rgba(99, 102, 241, 0.5)"
                        }}
                    />
                ))}
            </div>

            {/* Blueprint Measurement Node Ring */}
            <div
                style={{
                    position: "absolute",
                    width: 320,
                    height: 320,
                    border: "2px dotted rgba(59, 130, 246, 0.3)",
                    borderRadius: "50%",
                    transform: `rotate(${-rotationBase * 0.5}deg) scale(${buildProgress})`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* Node connection lines (Architectural metaphor) */}
                <svg width="320" height="320" viewBox="0 0 320 320" style={{ position: "absolute", opacity: 0.4 }}>
                    <line x1="160" y1="0" x2="160" y2="320" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="160" x2="320" y2="160" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Node markers on the outer ring */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                    <div
                        key={deg}
                        style={{
                            position: "absolute",
                            width: deg % 90 === 0 ? 8 : 4,
                            height: deg % 90 === 0 ? 8 : 4,
                            backgroundColor: deg % 90 === 0 ? "#60a5fa" : "#3b82f6",
                            borderRadius: "50%",
                            transform: `rotate(${deg}deg) translateY(-160px)`,
                            boxShadow: `0 0 15px ${deg % 90 === 0 ? "#60a5fa" : "#3b82f6"}`,
                            opacity: pulse
                        }}
                    />
                ))}
            </div>

            {/* Strategic Inner Scope Ring */}
            <div
                style={{
                    position: "absolute",
                    width: 220,
                    height: 220,
                    border: "2px solid rgba(59, 130, 246, 0.1)",
                    borderTopColor: "rgba(59, 130, 246, 0.6)",
                    borderRightColor: "rgba(99, 102, 241, 0.6)",
                    borderRadius: "50%",
                    transform: `rotate(${rotationBase * 1.2}deg) scale(${buildProgress})`,
                }}
            />

            {/* Strategy / Core Brain Center */}
            <div
                style={{
                    position: "absolute",
                    width: 120,
                    height: 120,
                    background: "rgba(5,5,5,0.8)",
                    border: "1px solid rgba(59,130,246,0.8)",
                    borderRadius: "50%",
                    boxShadow: `0 0 ${40 * pulse}px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(99, 102, 241, 0.2)`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backdropFilter: "blur(4px)",
                }}
            >
                {/* Neural Map / Hierarchy Structure inside */}
                <svg width="60" height="60" viewBox="0 0 100 100" style={{ transform: `scale(${pulse * 1.1})` }}>
                    {/* Central strategy node */}
                    <circle cx="50" cy="25" r="8" fill="#60a5fa" fillOpacity="0.8" />

                    {/* Branching paths to sub-objectives */}
                    <path d="M 50 33 L 50 45 L 25 45 L 25 60" fill="none" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.8" />
                    <path d="M 50 33 L 50 45 L 75 45 L 75 60" fill="none" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.8" />
                    <path d="M 50 33 L 50 60" fill="none" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.8" />

                    {/* Result nodes */}
                    <rect x="15" y="60" width="20" height="20" rx="4" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 2" />
                    <rect x="40" y="60" width="20" height="20" rx="4" fill="none" stroke="#60a5fa" strokeWidth="2" />
                    <rect x="65" y="60" width="20" height="20" rx="4" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 2" />
                </svg>
            </div>
        </AbsoluteFill>
    );
};
