import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const CyberShieldLogic = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Shield scale up
  const scale = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  // Rotate constantly
  const rotate = interpolate(frame, [0, 300], [0, 360]);

  // Pulse effect
  const pulse = Math.abs(Math.sin(frame / 20)) * 0.1 + 0.95;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050510",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 200,
          height: 240,
          border: "4px solid #38BDF8",
          borderRadius: "10px 10px 100px 100px",
          transform: `scale(${scale * pulse})`,
          boxShadow: `0 0 ${20 * pulse}px #38BDF8`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "140%",
            height: "140%",
            border: "2px dashed #38BDF8",
            borderRadius: "50%",
            opacity: 0.3,
            transform: `rotate(${rotate}deg)`,
          }}
        />
        <div style={{ fontSize: 80 }}>🛡️</div>
      </div>
      
      {/* Scan line effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "10px",
          background: "linear-gradient(90deg, transparent, #38BDF8, transparent)",
          opacity: 0.5,
          transform: `translateY(${interpolate(frame % 100, [0, 100], [0, 420])}px)`,
        }}
      />
    </AbsoluteFill>
  );
};
