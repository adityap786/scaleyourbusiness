import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

/**
 * Real-time AI Collaboration — chat bubbles + floating icons
 * Loop-friendly: 180 frames @ 30fps = 6s
 */

const ICONS = ["🔗", "📊", "⚡", "🔒", "▲"];

const BRAND = "#4F46E5";
const ACCENT = "#10B981";
const BG = "#0A0A0F";

const chatMessages = [
  {
    text: "Based on your calendar patterns, I recommend Tuesday at 2 pm.",
    isAI: true,
  },
  { text: "Schedule it and notify the team.", isAI: false },
  { text: "Done — invites sent to 8 members.", isAI: true },
];

export const AICollaboration: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(600px 400px at 50% 80%, rgba(79,70,229,0.12), ${BG})`,
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Floating icons */}
      {ICONS.map((icon, i) => {
        const angle = (i / ICONS.length) * Math.PI * 2 + frame * 0.008;
        const radius = 160 + i * 18;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * (radius * 0.45);
        const iconOpacity = interpolate(
          spring({ frame: frame - 10 * i, fps, config: { damping: 200 } }),
          [0, 1],
          [0, 0.55]
        );
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px)`,
              top: `calc(28% + ${y}px)`,
              fontSize: 28,
              opacity: iconOpacity,
              transform: `scale(${0.8 + Math.sin(frame * 0.04 + i) * 0.15})`,
              filter: `drop-shadow(0 0 12px ${BRAND})`,
            }}
          >
            {icon}
          </div>
        );
      })}

      {/* Label */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 48,
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
        Real-time AI Collaboration
      </div>

      {/* Chat bubbles */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 48,
          right: 48,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {chatMessages.map((msg, i) => {
          const delay = 30 + i * 35;
          const s = spring({
            frame: frame - delay,
            fps,
            config: { damping: 120, stiffness: 100 },
          });
          const y = interpolate(s, [0, 1], [30, 0], {
            extrapolateRight: "clamp",
          });
          const opacity = interpolate(s, [0, 1], [0, 1], {
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={i}
              style={{
                alignSelf: msg.isAI ? "flex-start" : "flex-end",
                background: msg.isAI
                  ? "rgba(79,70,229,0.18)"
                  : "rgba(16,185,129,0.14)",
                border: `1px solid ${
                  msg.isAI
                    ? "rgba(79,70,229,0.3)"
                    : "rgba(16,185,129,0.25)"
                }`,
                borderRadius: 14,
                padding: "10px 18px",
                maxWidth: "78%",
                color: "#F5F5F7",
                fontSize: 14,
                lineHeight: 1.5,
                opacity,
                transform: `translateY(${y}px)`,
              }}
            >
              {msg.isAI && (
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: BRAND,
                    letterSpacing: 1,
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  AI AGENT
                </span>
              )}
              {msg.text}
              {/* Typing cursor on last AI message */}
              {msg.isAI && i === chatMessages.length - 1 && (
                <span
                  style={{
                    display: "inline-block",
                    width: 2,
                    height: 14,
                    background: BRAND,
                    marginLeft: 4,
                    opacity: Math.sin(frame * 0.15) > 0 ? 1 : 0,
                    verticalAlign: "middle",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Pulsing ring */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: `1px solid rgba(79,70,229,0.25)`,
          boxShadow: `0 0 ${60 + Math.sin(frame * 0.06) * 30}px rgba(79,70,229,0.2)`,
          opacity: 0.6,
        }}
      />
    </AbsoluteFill>
  );
};
