import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

/**
 * Automation & AI Integration — process flow with animated nodes
 * 180 frames @ 30fps = 6s loop
 */

const BRAND = "#4F46E5";
const ACCENT = "#10B981";
const BG = "#0A0A0F";

const steps = [
  { icon: "⟨/⟩", label: "Code", color: BRAND },
  { icon: "📁", label: "Data", color: "#F59E0B" },
  { icon: "🔑", label: "Auth", color: "#E11D48" },
  { icon: "⚙️", label: "Process", color: "#8B5CF6" },
  { icon: "🔗", label: "Deploy", color: ACCENT },
];

export const AutomationIntegration: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: BG,
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Label */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: 36,
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: ACCENT,
          opacity: interpolate(
            spring({ frame, fps, config: { damping: 200 } }),
            [0, 1],
            [0, 1]
          ),
        }}
      >
        Automation & AI Integration
      </div>

      <div
        style={{
          position: "absolute",
          top: 52,
          left: 36,
          fontSize: 11,
          color: "rgba(245,245,247,0.4)",
          maxWidth: 320,
          lineHeight: 1.5,
        }}
      >
        Reducing redundancy with robust automated processes.
      </div>

      {/* Process flow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 36,
          right: 36,
          transform: "translateY(-10%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {steps.map((step, i) => {
          const delay = 20 + i * 16;
          const s = spring({
            frame: frame - delay,
            fps,
            config: { damping: 100, stiffness: 90, mass: 0.5 },
          });
          const scale = interpolate(s, [0, 1], [0.4, 1], {
            extrapolateRight: "clamp",
          });
          const opacity = interpolate(s, [0, 1], [0, 1], {
            extrapolateRight: "clamp",
          });

          const isActive =
            Math.floor((frame * 0.02) % steps.length) === i;
          const glowSize = isActive ? 14 : 6;

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                transform: `scale(${scale})`,
                opacity,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `${step.color}18`,
                  border: `1px solid ${step.color}${isActive ? "66" : "33"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  boxShadow: isActive
                    ? `0 0 ${glowSize}px ${step.color}44`
                    : "none",
                  transform: isActive ? "scale(1.08)" : "scale(1)",
                }}
              >
                {step.icon}
              </div>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "rgba(245,245,247,0.45)",
                  letterSpacing: 0.5,
                }}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Connection arrows between steps */}
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: 36,
          right: 36,
          transform: "translateY(-10%)",
          pointerEvents: "none",
        }}
        width="calc(100% - 72px)"
        height="60"
        viewBox="0 0 400 60"
        preserveAspectRatio="none"
      >
        {steps.slice(0, -1).map((_, i) => {
          const progress = interpolate(
            frame,
            [30 + i * 16, 60 + i * 16],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const x1 = (i + 0.6) * (400 / steps.length);
          const x2 = (i + 1.4) * (400 / steps.length);
          const midX = x1 + (x2 - x1) * progress;

          return (
            <line
              key={i}
              x1={x1}
              y1={30}
              x2={midX}
              y2={30}
              stroke={BRAND}
              strokeWidth={1.5}
              strokeDasharray="4 3"
              opacity={0.4 + progress * 0.3}
            />
          );
        })}

        {/* Traveling pulse */}
        {(() => {
          const pulseX = interpolate(
            (frame * 1.2) % 180,
            [0, 180],
            [30, 370]
          );
          return (
            <circle
              cx={pulseX}
              cy={30}
              r={4}
              fill={ACCENT}
              opacity={0.7}
            />
          );
        })()}
      </svg>

      {/* Start Process button */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {(() => {
          const s = spring({
            frame: frame - 90,
            fps,
            config: { damping: 120 },
          });
          const opacity = interpolate(s, [0, 1], [0, 1], {
            extrapolateRight: "clamp",
          });
          const y = interpolate(s, [0, 1], [12, 0], {
            extrapolateRight: "clamp",
          });
          const pulse = 1 + Math.sin(frame * 0.08) * 0.02;
          return (
            <div
              style={{
                padding: "8px 24px",
                borderRadius: 8,
                background: `linear-gradient(135deg, ${BRAND}, ${ACCENT})`,
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.5,
                opacity,
                transform: `translateY(${y}px) scale(${pulse})`,
                boxShadow: `0 0 20px ${BRAND}44`,
              }}
            >
              Start Process
            </div>
          );
        })()}
      </div>
    </AbsoluteFill>
  );
};
