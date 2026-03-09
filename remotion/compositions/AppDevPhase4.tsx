import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const AppDevPhase4 = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Constant smooth rotation
    const rotationBase = interpolate(frame, [0, 180], [0, 360]);

    // Shockwave expansion logic for viral scale
    const waveProgress1 = ((frame % 60) / 60);
    const waveProgress2 = (((frame + 30) % 60) / 60);

    // Dynamic Ignition Pulse
    const pulse = Math.abs(Math.sin(frame / 10)) * 0.4 + 0.6;
    const coreScale = Math.abs(Math.sin(frame / 20)) * 0.1 + 1;

    return (
        <AbsoluteFill
            style={{
                backgroundColor: "#050505",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
            }}
        >
            {/* Speed line ambient background indicating velocity */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, transparent 60%)",
                    opacity: pulse * 0.5,
                }}
            />

            {/* Outward Shockwaves representing massive scale / viral user growth */}
            {[waveProgress1, waveProgress2].map((progress, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        width: 140,
                        height: 140,
                        borderRadius: "50%",
                        border: "4px solid rgba(217, 70, 239, 0.8)", // Fuchsia/Pink expansion rings
                        transform: `scale(${1 + progress * 3.5})`,
                        opacity: (1 - Math.pow(progress, 1.2)) * 0.6,
                        boxShadow: "0 0 40px rgba(217, 70, 239, 0.6), inset 0 0 20px rgba(217, 70, 239, 0.3)",
                    }}
                />
            ))}

            {/* Hyper-speed Orbital Debris / Particles */}
            <div
                style={{
                    position: "absolute",
                    width: 380,
                    height: 380,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: `rotate(${rotationBase * 3}deg)`, // Extremely fast orbit
                }}
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            width: i % 2 === 0 ? 16 : 8,
                            height: 4,
                            backgroundColor: i % 2 === 0 ? "#d946ef" : "#f472b6",
                            borderRadius: 2,
                            transform: `rotate(${(360 / 12) * i}deg) translateX(${160 + Math.sin((frame + i * 20) / 10) * 20}px)`,
                            boxShadow: "0 0 20px #d946ef",
                            opacity: pulse,
                        }}
                    />
                ))}
            </div>

            {/* Inner Ignition / Fusion Reactor Core */}
            <div
                style={{
                    position: "absolute",
                    width: 200,
                    height: 200,
                    background: "radial-gradient(circle, rgba(217, 70, 239, 0.4) 0%, rgba(192, 38, 211, 0.1) 70%)",
                    border: "2px solid rgba(217, 70, 239, 0.6)",
                    borderRadius: "50%",
                    boxShadow: `0 0 ${80 * pulse}px rgba(217, 70, 239, 0.4), inset 0 0 ${40 * pulse}px rgba(217, 70, 239, 0.2)`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: `rotate(${-rotationBase * 0.5}deg) scale(${coreScale})`,
                }}
            >
                {/* Concentric high-speed rings tightening inwards */}
                <div
                    style={{
                        position: "absolute",
                        width: 160,
                        height: 160,
                        border: "4px dashed rgba(244, 114, 182, 0.6)",
                        borderRadius: "50%",
                        animation: "spin 1.5s linear infinite",
                        transform: `rotate(${rotationBase * 4}deg)`,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        width: 120,
                        height: 120,
                        border: "6px dotted rgba(255, 255, 255, 0.8)",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite reverse",
                        transform: `rotate(${-rotationBase * 6}deg)`,
                    }}
                />

                {/* Central Launch / Upward Velocity Arrow Node */}
                <div style={{
                    position: "absolute",
                    width: 60,
                    height: 60,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 0 30px white",
                    transform: `rotate(${rotationBase * 0.5}deg)` // Counter-rotate to stay upright
                }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d946ef" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transform: `translateY(${interpolate(Math.cos(frame / 5), [-1, 1], [-4, 4])}px)` }} // Rapid vibration
                    >
                        <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                </div>
            </div>
        </AbsoluteFill>
    );
};
