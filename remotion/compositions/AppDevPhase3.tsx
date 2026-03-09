import { AbsoluteFill, useCurrentFrame, interpolate, useVideoConfig } from "remotion";

export const AppDevPhase3 = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const rotationBase = interpolate(frame, [0, 180], [0, 360]);

    // Radar sweep
    const radarAngle = interpolate(frame % 90, [0, 90], [0, 360]);

    // Error catching ping
    const pingScale = ((frame % 60) / 60);
    const pingOpacity = 1 - pingScale;

    return (
        <AbsoluteFill
            style={{
                backgroundColor: "#050505",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
            }}
        >
            {/* Outer radar grid boundaries */}
            <div
                style={{
                    position: "absolute",
                    width: 380,
                    height: 380,
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "50%",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    width: 280,
                    height: 280,
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "50%",
                }}
            />

            {/* Scanning Radar Sector */}
            <div
                style={{
                    position: "absolute",
                    width: 380,
                    height: 380,
                    borderRadius: "50%",
                    background: `conic-gradient(from ${radarAngle}deg, transparent 0deg, rgba(59, 130, 246, 0.1) 60deg, rgba(59, 130, 246, 0.8) 90deg, transparent 90deg)`,
                }}
            />

            {/* QA Validation Nodes (Testing dots on the perimeter) */}
            <div
                style={{
                    position: "absolute",
                    width: 380,
                    height: 380,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: `rotate(${-rotationBase * 0.3}deg)`,
                }}
            >
                {[0, 120, 240].map((deg) => (
                    <div
                        key={deg}
                        style={{
                            position: "absolute",
                            width: 16,
                            height: 16,
                            backgroundColor: "#10b981", // Emerald green for success
                            borderRadius: "50%",
                            transform: `rotate(${deg}deg) translateY(-190px)`,
                            boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)",
                        }}
                    >
                        {/* Radar Ping effect on node */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                borderRadius: "50%",
                                border: "2px solid #10b981",
                                transform: `scale(${1 + pingScale * 2})`,
                                opacity: pingOpacity,
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Inner Shield / Security Core */}
            <div
                style={{
                    position: "absolute",
                    width: 150,
                    height: 150,
                    background: "rgba(16, 185, 129, 0.05)", // QA Green tint
                    border: "2px solid rgba(16, 185, 129, 0.3)",
                    borderRadius: "50%",
                    boxShadow: "0 0 50px rgba(16, 185, 129, 0.15)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* Checkmark icon metaphor */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" strokeDasharray="30" strokeDashoffset={interpolate(frame % 120, [0, 60, 120], [30, 0, 30])} />
                </svg>
            </div>
        </AbsoluteFill>
    );
};
