import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

/**
 * Seamless Integrations — connected nodes with animated lines
 * 180 frames @ 30fps = 6s loop
 */

const BRAND = "#4F46E5";
const ACCENT = "#10B981";
const BG = "#0A0A0F";

const nodes = [
  { label: "CRM", x: 240, y: 160, color: BRAND },
  { label: "Slack", x: 440, y: 100, color: "#E11D48" },
  { label: "Pay", x: 400, y: 300, color: ACCENT },
  { label: "DB", x: 200, y: 320, color: "#F59E0B" },
  { label: "API", x: 320, y: 200, color: "#8B5CF6" },
];

const connections: [number, number][] = [
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
  [0, 3],
  [1, 2],
];

export const SeamlessIntegrations: React.FC = () => {
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
      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(rgba(79,70,229,0.12) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Label */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: 40,
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
        Seamless Integrations
      </div>

      {/* Connection lines */}
      <svg
        style={{ position: "absolute", inset: 0 }}
        width="100%"
        height="100%"
      >
        {connections.map(([a, b], i) => {
          const progress = interpolate(
            frame,
            [15 + i * 8, 50 + i * 8],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );
          const pulse =
            0.15 + 0.1 * Math.sin(frame * 0.05 + i * 1.2);
          return (
            <line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={
                nodes[a].x +
                (nodes[b].x - nodes[a].x) * progress
              }
              y2={
                nodes[a].y +
                (nodes[b].y - nodes[a].y) * progress
              }
              stroke={BRAND}
              strokeWidth={1.5}
              opacity={pulse + progress * 0.4}
              strokeDasharray="6 4"
              strokeDashoffset={-frame * 0.5}
            />
          );
        })}

        {/* Traveling dots */}
        {connections.map(([a, b], i) => {
          const t = ((frame * 0.008 + i * 0.18) % 1);
          const dotX = nodes[a].x + (nodes[b].x - nodes[a].x) * t;
          const dotY = nodes[a].y + (nodes[b].y - nodes[a].y) * t;
          const dotOpacity = interpolate(frame, [30 + i * 8, 55 + i * 8], [0, 0.9], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <circle
              key={`dot-${i}`}
              cx={dotX}
              cy={dotY}
              r={3}
              fill={ACCENT}
              opacity={dotOpacity}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const s = spring({
          frame: frame - 8 * i,
          fps,
          config: { damping: 120, stiffness: 100 },
        });
        const scale = interpolate(s, [0, 1], [0.3, 1], {
          extrapolateRight: "clamp",
        });
        const opacity = interpolate(s, [0, 1], [0, 1], {
          extrapolateRight: "clamp",
        });
        const glow = 8 + Math.sin(frame * 0.06 + i) * 6;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: node.x - 28,
              top: node.y - 28,
              width: 56,
              height: 56,
              borderRadius: 14,
              background: `rgba(${node.color === BRAND ? "79,70,229" : node.color === ACCENT ? "16,185,129" : node.color === "#E11D48" ? "225,29,72" : node.color === "#F59E0B" ? "245,158,11" : "139,92,246"},0.14)`,
              border: `1px solid ${node.color}44`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: node.color,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              transform: `scale(${scale})`,
              opacity,
              boxShadow: `0 0 ${glow}px ${node.color}33`,
            }}
          >
            {node.label}
          </div>
        );
      })}

      {/* Counter */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          right: 40,
          fontSize: 11,
          color: "rgba(245,245,247,0.5)",
          fontWeight: 500,
        }}
      >
        {Math.min(
          6,
          Math.floor(
            interpolate(frame, [20, 100], [0, 6], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          )
        )}{" "}
        / 6 connected
      </div>
    </AbsoluteFill>
  );
};
