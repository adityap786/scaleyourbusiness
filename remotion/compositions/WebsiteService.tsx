import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, Easing } from "remotion";
import React from "react";

export const WebsiteServiceComposition: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Entire composition global fade pulse at end (290-300)
    const globalPulse = interpolate(frame, [290, 300], [1, 0.85], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

    // Act 5: MacBook Zoom Out
    const zoomOutScale = spring({ frame: frame - 240, fps, config: { damping: 14, stiffness: 60 } });
    const browserScaleScale = interpolate(zoomOutScale, [0, 1], [1, 0.85]);
    const browserYOffset = interpolate(zoomOutScale, [0, 1], [0, -20]);

    // Act 1: Browser Chrome Entrance
    const browserEntranceOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
    const browserEntranceScale = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
    const browserScale = interpolate(browserEntranceScale, [0, 1], [0.92, 1]);

    return (
        <AbsoluteFill style={{ backgroundColor: "#ffffff", opacity: globalPulse, overflow: "hidden" }}>

            {/* Act 5: Radial Glow behind MacBook */}
            {frame >= 240 && (
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(ellipse at 50% 60%, rgba(37,99,235,0.08) 0%, transparent 70%)",
                    opacity: interpolate(frame, [240, 260], [0, 1], { extrapolateRight: "clamp" })
                }} />
            )}

            {/* ACT 5: MacBook Frame (fades in behind the browser as it scales down) */}
            {frame >= 240 && (
                <div style={{
                    position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
                    width: 960 * 0.85, height: 600 * 0.85, opacity: interpolate(frame, [240, 260], [0, 1], { extrapolateRight: "clamp" }),
                    marginTop: -20
                }}>
                    {/* Base of MacBook - Light Grey for Silver finish */}
                    <div style={{ position: "absolute", bottom: -24, left: "-3%", right: "-3%", height: 24, background: "#e5e7eb", borderBottomLeftRadius: 16, borderBottomRightRadius: 16, border: "1px solid rgba(0,0,0,0.1)" }} />
                    {/* Hinge cutout */}
                    <div style={{ position: "absolute", bottom: 0, left: "40%", width: "20%", height: 8, background: "#d1d5db", borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                </div>
            )}

            {/* Browser Frame - White */}
            <div style={{
                position: "absolute", left: "50%", top: "50%",
                width: 960, height: 600,
                transform: `translate(-50%, calc(-50% + ${browserYOffset}px)) scale(${browserScale * browserScaleScale})`,
                opacity: browserEntranceOpacity,
                backgroundColor: "#ffffff",
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.1)",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)"
            }}>
                {/* Faint Graph Paper Grid */}
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                }} />

                {/* Browser Chrome (Top bar) - Light */}
                <div style={{ height: 40, backgroundColor: "#f3f4f6", borderBottom: "1px solid rgba(0,0,0,0.1)", display: "flex", alignItems: "center", padding: "0 16px", gap: 8, zIndex: 50, position: "relative" }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(0,0,0,0.1)" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(0,0,0,0.1)" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(0,0,0,0.1)" }} />
                </div>

                {/* Viewport content containing all website elements */}
                {/* Act 4: Scroll simulation translateY */}
                <div style={{
                    position: "absolute", top: 40, left: 0, right: 0, bottom: 0,
                    transform: `translateY(${interpolate(frame, [220, 240], [0, -40], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.bezier(0.25, 0.46, 0.45, 0.94) })}px)`
                }}>

                    {/* Cursor Blinking (Act 1 only, disappears at 40) */}
                    {frame < 40 && (
                        <div style={{
                            position: "absolute", left: "50%", top: "40%", transform: "translate(-50%, -50%)",
                            width: 1, height: 24, backgroundColor: "white",
                            opacity: Math.floor(frame / 30) % 2 === 0 ? 1 : 0
                        }} />
                    )}

                    {/* Act 2: Wireframes Assembling & Act 3 Fill In */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 40px", width: "100%", boxSizing: "border-box" }}>

                        {/* 1. Navbar */}
                        {frame >= 40 && (
                            <div style={{
                                width: "100%", height: 48, marginTop: 16,
                                transform: `translateY(${interpolate(spring({ frame: frame - 40, fps, config: { damping: 14, stiffness: 60 } }), [0, 1], [20, 0])}px)`,
                                opacity: interpolate(frame - 40, [0, 8], [0, 1], { extrapolateRight: "clamp" }),
                                background: "rgba(255,255,255,0.04)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px"
                            }}>
                                <div style={{
                                    width: 120, height: 24, borderRadius: 4,
                                    backgroundColor: interpolate(frame, [100, 120], [0, 1]) > 0.5 ? "#6366F1" : "rgba(255,255,255,0.1)",
                                    display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, fontWeight: "bold", fontFamily: "system-ui, sans-serif"
                                }}>
                                    {interpolate(frame, [100, 120], [0, 1]) > 0.5 ? "BRAND." : ""}
                                </div>
                                <div style={{ display: "flex", gap: 16 }}>
                                    {[0, 1, 2].map(i => (
                                        <div key={i} style={{
                                            width: 48, height: 12, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center",
                                            backgroundColor: interpolate(frame, [100 + i * 5, 120 + i * 5], [0, 1]) > 0.5 ? "transparent" : "rgba(255,255,255,0.1)",
                                            color: "white", fontSize: 12, fontFamily: "monospace"
                                        }}>
                                            {interpolate(frame, [100 + i * 5, 120 + i * 5], [0, 1]) > 0.5 ? ["Home", "About", "Services"][i] : ""}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 2. Hero Block */}
                        {frame >= 48 && (() => {
                            const heroSpring = spring({ frame: frame - 48, fps, config: { damping: 14, stiffness: 60 } });
                            const fillOpacity = interpolate(frame, [100, 140], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
                            const text1 = "Your Brand.";
                            const text2 = "Built for Growth.";

                            return (
                                <div style={{
                                    position: "relative",
                                    width: 560, height: 180, marginTop: 32, borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                                    transform: `translateY(${interpolate(heroSpring, [0, 1], [20, 0])}px)`,
                                    opacity: interpolate(frame - 48, [0, 8], [0, 1], { extrapolateRight: "clamp" }),
                                    border: fillOpacity > 0 ? "1px solid rgba(255,255,255,0.1)" : `1px dashed rgba(99,102,241,${0.3 + 0.2 * Math.sin(frame * 0.1)})`,
                                    overflow: "hidden"
                                }}>
                                    {/* Paint In gradient */}
                                    <div style={{
                                        position: "absolute", inset: 0,
                                        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                                        opacity: fillOpacity
                                    }} />

                                    {/* Typed Text */}
                                    <div style={{ position: "relative", zIndex: 1, fontFamily: "system-ui, sans-serif", fontWeight: "bold", fontSize: 40, textAlign: "center", lineHeight: 1.2 }}>
                                        <div>
                                            {text1.split("").map((char, i) => (
                                                <span key={i} style={{ color: "white", opacity: interpolate(frame, [i * 2 + 100, i * 2 + 115], [0, 1], { extrapolateRight: "clamp" }) }}>
                                                    {char}
                                                </span>
                                            ))}
                                        </div>
                                        <div>
                                            {text2.split("").map((char, i) => (
                                                <span key={i} style={{ color: "#6366F1", opacity: interpolate(frame, [(text1.length + i) * 2 + 100, (text1.length + i) * 2 + 115], [0, 1], { extrapolateRight: "clamp" }) }}>
                                                    {char}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}

                        {/* 3. Subtext Lines */}
                        {frame >= 56 && (
                            <div style={{
                                marginTop: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                                transform: `translateY(${interpolate(spring({ frame: frame - 56, fps, config: { damping: 14, stiffness: 60 } }), [0, 1], [20, 0])}px)`,
                                opacity: interpolate(frame, [100, 110], [interpolate(frame - 56, [0, 8], [0, 1], { extrapolateRight: "clamp" }), 0.5])
                            }}>
                                {[320, 260, 200].map((w, i) => (
                                    <div key={i} style={{ width: w, height: 6, backgroundColor: "rgba(255,255,255,0.08)", borderRadius: 3 }} />
                                ))}
                            </div>
                        )}

                        {/* 4. CTA Button */}
                        {frame >= 64 && (() => {
                            const ctaSpring = spring({ frame: frame - 64, fps, config: { damping: 14, stiffness: 60 } });
                            const filledOpacity = interpolate(frame, [140, 150], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
                            const hoverScale = interpolate(spring({ frame: Math.max(0, frame - 210), fps, config: { damping: 14, stiffness: 60 } }), [0, 1], [1, 1.04]);

                            // Frame 160-180 shimmer sweep
                            const shimmerTranslate = interpolate(frame, [160, 180], [-200, 200], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

                            return (
                                <div style={{
                                    position: "relative",
                                    width: 160, height: 44, marginTop: 32, borderRadius: 999, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
                                    transform: `translateY(${interpolate(ctaSpring, [0, 1], [20, 0])}px) scale(${frame >= 210 ? hoverScale : 1})`,
                                    opacity: interpolate(frame - 64, [0, 8], [0, 1], { extrapolateRight: "clamp" }),
                                    backgroundColor: filledOpacity > 0 ? "#4F46E5" : "rgba(99,102,241,0.2)",
                                    border: filledOpacity > 0 ? "none" : "1px solid rgba(99,102,241,0.5)",
                                    boxShadow: frame >= 210 ? "0 0 30px rgba(99,102,241,0.6)" : "none",
                                    transition: "box-shadow 0.3s"
                                }}>
                                    <div style={{ color: "white", fontFamily: "system-ui, sans-serif", fontWeight: "bold", fontSize: 14, opacity: filledOpacity }}>
                                        Get Started
                                    </div>
                                    {/* Shimmer */}
                                    {frame >= 160 && (
                                        <div style={{
                                            position: "absolute", inset: 0,
                                            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                                            transform: `translateX(${shimmerTranslate}px)`,
                                            pointerEvents: "none"
                                        }} />
                                    )}
                                </div>
                            );
                        })()}

                        {/* 5. 3-Column Card Row */}
                        {frame >= 72 && (
                            <div style={{
                                display: "flex", gap: 16, marginTop: 40,
                                transform: `translateY(${interpolate(spring({ frame: frame - 72, fps, config: { damping: 14, stiffness: 60 } }), [0, 1], [20, 0])}px)`,
                                opacity: interpolate(frame - 72, [0, 8], [0, 1], { extrapolateRight: "clamp" })
                            }}>
                                {["#6366F1", "#10B981", "#F59E0B"].map((accent, i) => {
                                    const fillProgress = interpolate(frame, [120 + i * 10, 140 + i * 10], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
                                    const isHovered = i === 1 && frame >= 220;
                                    const hoverSpring = spring({ frame: Math.max(0, frame - 220), fps, config: { damping: 14, stiffness: 60 } });

                                    return (
                                        <div key={i} style={{
                                            width: 180, height: 120, borderRadius: 12, padding: 16, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 12,
                                            background: isHovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
                                            border: `1px solid ${isHovered ? `rgba(99,102,241,${interpolate(hoverSpring, [0, 1], [0.1, 0.4])})` : "rgba(255,255,255,0.05)"}`,
                                            transform: isHovered ? `translateY(${interpolate(hoverSpring, [0, 1], [0, -4])}px)` : "none"
                                        }}>
                                            <div style={{ width: 32, height: 32, borderRadius: "50%", background: fillProgress > 0 ? `${accent}40` : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <div style={{ width: 16, height: 16, borderRadius: "50%", background: fillProgress > 0 ? accent : "transparent" }} />
                                            </div>
                                            <div style={{ width: "80%", height: 8, borderRadius: 4, background: fillProgress > 0 ? "white" : "rgba(255,255,255,0.1)" }} />
                                            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                                <div style={{ width: "100%", height: 4, borderRadius: 2, background: fillProgress > 0 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.08)" }} />
                                                <div style={{ width: "60%", height: 4, borderRadius: 2, background: fillProgress > 0 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.08)" }} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                {/* Navbar stays fixed during scroll, so it replicates outside */}
                {frame >= 220 && (
                    <div style={{
                        position: "absolute", top: 40, left: 40, right: 40, zIndex: 40,
                        width: "calc(100% - 80px)", height: 48, marginTop: 16,
                        background: "rgba(26,26,46,0.8)", backdropFilter: "blur(12px)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px",
                        border: "1px solid rgba(255,255,255,0.1)", boxSizing: "border-box"
                    }}>
                        <div style={{ color: "white", fontSize: 12, fontWeight: "bold", fontFamily: "system-ui, sans-serif", width: 120, height: 24, borderRadius: 4, backgroundColor: "#6366F1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            BRAND.
                        </div>
                        <div style={{ display: "flex", gap: 16 }}>
                            {["Home", "About", "Services"].map((label, i) => (
                                <div key={i} style={{ color: "white", fontSize: 12, fontFamily: "monospace", display: "flex", alignItems: "center", justifyContent: "center", width: 48 }}>{label}</div>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            {/* Act 4: Hover Cursor */}
            {frame >= 180 && frame <= 245 && (() => {
                const pathProgress = interpolate(frame, [180, 210], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.bezier(0.25, 0.46, 0.45, 0.94) });
                // Start from offscreen right (+400, +200) to CTA center (appx 0, +15 relative to center)
                const cursorX = interpolate(pathProgress, [0, 1], [400, 0]);
                // After 220, the scroll happens, so the cursor should track up with the page!
                const scrollOffset = frame >= 220 ? interpolate(frame, [220, 240], [0, -40], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.bezier(0.25, 0.46, 0.45, 0.94) }) : 0;
                const cursorY = interpolate(pathProgress, [0, 1], [200, 15]) + scrollOffset;

                return (
                    <div style={{
                        position: "absolute", left: "50%", top: "50%",
                        transform: `translate(${cursorX}px, ${cursorY}px)`,
                        zIndex: 100
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* White arrow with dark stroke for visibility */}
                            <path d="M4.5 3L18.5 10L11.5 12L9.5 19L4.5 3Z" fill="white" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                    </div>
                );
            })()}

            {/* Act 4: Performance Badge */}
            {frame >= 225 && (() => {
                const badgeSpring = spring({ frame: frame - 225, fps, config: { damping: 14, stiffness: 60 } });
                return (
                    <div style={{
                        position: "absolute", right: "15%", bottom: "10%", zIndex: 60,
                        transform: `translateY(${interpolate(badgeSpring, [0, 1], [40, 0])}px) scale(${interpolate(browserScaleScale, [0.85, 1], [1.1, 1])})`,
                        padding: "8px 16px", borderRadius: 999, background: "rgba(10,10,18,0.9)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)",
                        display: "flex", alignItems: "center", gap: 8, color: "white", fontFamily: "monospace", fontSize: 13, fontWeight: "bold",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                    }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10B981", boxShadow: "0 0 10px #10B981" }} />
                        ⚡ 98 Lighthouse
                    </div>
                );
            })()}

            {/* Act 5: Stat Chips Out (Floating outside laptop frame) */}
            {frame >= 250 && (() => {
                const chips = [
                    { text: "🚀 Fast — sub-second loads", x: "12%", y: "45%" },
                    { text: "📈 SEO Ready — rank on Google", x: "65%", y: "25%" },
                    { text: "💼 Conversion Focused — built to sell", x: "68%", y: "75%" },
                ];
                return chips.map((chip, i) => {
                    const chipSpring = spring({ frame: frame - (250 + i * 8), fps, config: { damping: 14, stiffness: 60 } });
                    return (
                        <div key={i} style={{
                            position: "absolute", left: chip.x, top: chip.y, zIndex: 10,
                            transform: `translateY(${interpolate(chipSpring, [0, 1], [40, 0])}px)`,
                            opacity: interpolate(frame - (250 + i * 8), [0, 10], [0, 1], { extrapolateRight: "clamp" }),
                            padding: "12px 20px", borderRadius: 10, background: "rgba(15,15,26,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(99,102,241,0.3)",
                            color: "white", fontFamily: "system-ui, sans-serif", fontSize: 14, fontWeight: "bold", boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
                        }}>
                            {chip.text}
                        </div>
                    );
                });
            })()}

        </AbsoluteFill>
    );
};
