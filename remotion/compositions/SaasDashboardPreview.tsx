import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Sequence, Img } from "remotion";
import React from "react";

const GlowOrb = ({ color, size, x, y, delay = 0 }: { color: string, size: number, x: string, y: string, delay?: number }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const opacity = interpolate(
        frame - delay,
        [0, 30, 150, 180],
        [0, 0.4, 0.4, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    const scale = spring({
        fps,
        frame: frame - delay,
        config: { damping: 200 }
    });

    return (
        <div
            style={{
                position: "absolute",
                left: x,
                top: y,
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: color,
                filter: "blur(100px)",
                transform: `translate(-50%, -50%) scale(${scale})`,
                opacity,
            }}
        />
    );
};

const MetricRing = ({ percentage, color, delay }: { percentage: number, color: string, delay: number }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const progress = spring({
        fps,
        frame: frame - delay,
        config: { damping: 14 }
    });

    const dashoffset = 251 * (1 - (progress * percentage) / 100);

    return (
        <div style={{ position: "relative", width: 100, height: 100 }}>
            {/* Background ring */}
            <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
                {/* Foreground ring */}
                <circle
                    cx="50" cy="50" r="40"
                    stroke={color}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="251"
                    strokeDashoffset={dashoffset}
                    strokeLinecap="round"
                    style={{ filter: `drop-shadow(0 0 8px ${color})` }}
                />
            </svg>
            <div style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
                fontFamily: "system-ui, sans-serif"
            }}>
                {Math.round(progress * percentage)}%
            </div>
        </div>
    );
};


const AnimatedGraph = ({ delay }: { delay: number }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const progress = spring({
        fps,
        frame: frame - delay,
        config: { damping: 20 }
    });

    const pathLength = 500;
    const dashoffset = pathLength * (1 - progress);

    return (
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
            {/* Grid lines */}
            <path d="M0,50 L400,50 M0,100 L400,100 M0,150 L400,150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

            {/* Graph line */}
            <path
                d="M 0 180 C 50 180, 80 120, 150 140 C 220 160, 250 60, 320 80 C 370 100, 400 30, 400 30"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={pathLength}
                strokeDashoffset={dashoffset}
                style={{ filter: "drop-shadow(0 4px 12px rgba(79,70,229,0.5))" }}
            />
            {/* Area under curve */}
            <path
                d="M 0 180 C 50 180, 80 120, 150 140 C 220 160, 250 60, 320 80 C 370 100, 400 30, 400 30 L 400 200 L 0 200 Z"
                fill="url(#gradient)"
                opacity={progress * 0.3}
            />
            <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="rgba(79,70,229,0)" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const WindowFrame = ({ children, title, delay, yOffset = 50 }: { children: React.ReactNode, title: string, delay: number, yOffset?: number }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const enter = spring({ fps, frame: frame - delay, config: { damping: 15 } });

    return (
        <div style={{
            position: "relative",
            backgroundColor: "rgba(17, 17, 24, 0.7)",
            border: "1px solid rgba(79, 70, 229, 0.2)",
            borderRadius: 16,
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            transform: `translateY(${interpolate(enter, [0, 1], [yOffset, 0])}px) scale(${interpolate(enter, [0, 1], [0.95, 1])})`,
            opacity: enter,
        }}>
            {/* Header */}
            <div style={{
                height: 32,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                gap: 6
            }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#EF4444" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#10B981" }} />
                <div style={{ marginLeft: 10, fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>{title}</div>
            </div>
            {/* Body */}
            <div style={{ flex: 1, padding: 24 }}>
                {children}
            </div>
        </div>
    );
};


export const SaasDashboardPreview: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames, width, height } = useVideoConfig();

    // Gentle floating animation for the whole container
    const floatY = Math.sin((frame / durationInFrames) * Math.PI * 2) * 10;

    return (
        <AbsoluteFill style={{ backgroundColor: "#0d0d14", overflow: "hidden" }}>

            {/* Subtle Grid Background */}
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                opacity: 0.5
            }} />

            {/* Glow Orbs */}
            <GlowOrb color="#4F46E5" size={600} x="30%" y="40%" delay={0} />
            <GlowOrb color="#10B981" size={500} x="70%" y="60%" delay={10} />

            {/* Main Dashboard Layout */}
            <div style={{
                position: "absolute",
                inset: 40,
                display: "flex",
                flexDirection: "column",
                gap: 24,
                transform: `translateY(${floatY}px)`
            }}>

                {/* Top Row: Metrics */}
                <div style={{ display: "flex", gap: 24, height: 180 }}>

                    {/* Performance Ring */}
                    <div style={{ flex: 1 }}>
                        <WindowFrame title="sys/performance.tsx" delay={15} yOffset={40}>
                            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                                <MetricRing percentage={98} color="#10B981" delay={30} />
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    <div style={{ color: "white", fontSize: 18, fontWeight: 600, fontFamily: "system-ui" }}>System Health</div>
                                    <div style={{ color: "#10B981", fontSize: 14, fontFamily: "monospace" }}>OPTIMAL</div>
                                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: "system-ui" }}>Edge cache hit rate: 99.9%</div>
                                </div>
                            </div>
                        </WindowFrame>
                    </div>

                    {/* Code Block */}
                    <div style={{ flex: 1 }}>
                        <WindowFrame title="app/layout.tsx" delay={25} yOffset={40}>
                            <div style={{ fontFamily: "monospace", fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.7)" }}>
                                <div><span style={{ color: "#C678DD" }}>import</span> {'{'} <span style={{ color: "#E5C07B" }}>Inter</span> {'}'} <span style={{ color: "#C678DD" }}>from</span> <span style={{ color: "#98C379" }}>"next/font/google"</span>;</div>
                                <div style={{ marginTop: 8 }}><span style={{ color: "#C678DD" }}>export default function</span> <span style={{ color: "#61AFEF" }}>RootLayout</span>({'{'}</div>
                                <div style={{ paddingLeft: 16 }}>children,</div>
                                <div>{'})'} {'{'}</div>
                                <div style={{ paddingLeft: 16 }}><span style={{ color: "#C678DD" }}>return</span> (</div>
                                <div style={{ paddingLeft: 32 }}><span style={{ color: "#E06C75" }}>{'<html'}</span> <span style={{ color: "#D19A66" }}>lang</span>=<span style={{ color: "#98C379" }}>"en"</span><span style={{ color: "#E06C75" }}>{'>'}</span></div>
                                <div style={{ paddingLeft: 48 }}><span style={{ color: "#E06C75" }}>{'<body>'}</span>{'{'}children{'}'}<span style={{ color: "#E06C75" }}>{'</body>'}</span></div>
                                <div style={{ paddingLeft: 32 }}><span style={{ color: "#E06C75" }}>{'</html>'}</span></div>
                                <div style={{ paddingLeft: 16 }}>);</div>
                                <div>{'}'}</div>
                            </div>
                        </WindowFrame>
                    </div>
                </div>

                {/* Bottom Row: Graph */}
                <div style={{ flex: 1 }}>
                    <WindowFrame title="analytics/traffic.chart" delay={35} yOffset={40}>
                        <div style={{ position: "relative", width: "100%", height: "100%" }}>
                            <div style={{ position: "absolute", top: 0, left: 0, color: "white", fontSize: 16, fontWeight: 600, fontFamily: "system-ui" }}>
                                Global Traffic Routing
                                <div style={{ color: "#4F46E5", fontSize: 12, marginTop: 4 }}>+324% vs Last Month</div>
                            </div>
                            <div style={{ position: "absolute", inset: '40px 0 0 0' }}>
                                <AnimatedGraph delay={50} />
                            </div>
                        </div>
                    </WindowFrame>
                </div>

            </div>

        </AbsoluteFill>
    );
};
