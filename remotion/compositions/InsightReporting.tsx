import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

/**
 * Instant Insight Reporting — bar chart that animates up + counter
 * 180 frames @ 30fps = 6s loop
 */

const BRAND = "#4F46E5";
const ACCENT = "#10B981";
const BG = "#0A0A0F";

const barData = [
  { label: "Tue", value: 0.45, color: BRAND },
  { label: "Wed", value: 0.7, color: BRAND },
  { label: "Thu", value: 0.55, color: BRAND },
  { label: "Fri", value: 0.85, color: ACCENT },
  { label: "Sat", value: 0.35, color: BRAND },
];

export const InsightReporting: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const counter = Math.floor(
    interpolate(frame, [20, 100], [0, 2534], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })
  );

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(500px 350px at 70% 60%, rgba(16,185,129,0.08), ${BG})`,
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
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
        Instant Insight Reporting
      </div>

      {/* Counter */}
      <div
        style={{
          position: "absolute",
          top: 64,
          left: 40,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#F5F5F7",
            lineHeight: 1,
            opacity: interpolate(
              spring({ frame: frame - 10, fps, config: { damping: 160 } }),
              [0, 1],
              [0, 1]
            ),
          }}
        >
          {counter.toLocaleString()}
        </div>
        <div
          style={{
            fontSize: 13,
            color: "rgba(245,245,247,0.45)",
            marginTop: 6,
          }}
        >
          insights generated today
        </div>
      </div>

      {/* Bar chart */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          left: 40,
          right: 40,
          display: "flex",
          alignItems: "flex-end",
          gap: 16,
          height: 180,
        }}
      >
        {barData.map((bar, i) => {
          const delay = 25 + i * 12;
          const s = spring({
            frame: frame - delay,
            fps,
            config: { damping: 100, stiffness: 80, mass: 0.6 },
          });
          const height = interpolate(s, [0, 1], [0, bar.value * 160], {
            extrapolateRight: "clamp",
          });
          const glowIntensity = bar.color === ACCENT ? 16 : 8;
          const pulse =
            bar.color === ACCENT
              ? 1 + Math.sin(frame * 0.08) * 0.08
              : 1;

          return (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height,
                  borderRadius: 8,
                  background: `linear-gradient(180deg, ${bar.color}, ${bar.color}88)`,
                  boxShadow: `0 0 ${glowIntensity}px ${bar.color}44`,
                  transform: `scaleY(${pulse})`,
                  transformOrigin: "bottom",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  color: "rgba(245,245,247,0.45)",
                  fontWeight: 500,
                }}
              >
                {bar.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Sparkline accent */}
      <svg
        style={{ position: "absolute", top: 140, left: 40, opacity: 0.3 }}
        width="200"
        height="40"
      >
        {(() => {
          const points = Array.from({ length: 20 }, (_, i) => {
            const x = i * 10;
            const y =
              20 +
              Math.sin(i * 0.5 + frame * 0.04) * 12 +
              Math.cos(i * 0.8 + frame * 0.02) * 6;
            return `${x},${y}`;
          }).join(" ");
          return (
            <polyline
              points={points}
              fill="none"
              stroke={BRAND}
              strokeWidth={1.5}
              opacity={0.7}
            />
          );
        })()}
      </svg>
    </AbsoluteFill>
  );
};
