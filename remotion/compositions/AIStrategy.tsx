import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

/**
 * AI Strategy — radial strategy wheel + percentage ring
 * 180 frames @ 30fps = 6s loop
 */

const BRAND = "#4F46E5";
const ACCENT = "#10B981";
const BG = "#0A0A0F";

const strategies = ["Design", "Business Plan", "AI Strategy", "CRM"];

export const AIStrategy: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const percent = Math.floor(
    interpolate(frame, [30, 120], [0, 80], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })
  );

  const ringProgress = interpolate(frame, [30, 120], [0, 0.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const circumference = 2 * Math.PI * 60;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(400px 300px at 50% 40%, rgba(79,70,229,0.1), ${BG})`,
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
          color: BRAND,
          opacity: interpolate(
            spring({ frame, fps, config: { damping: 200 } }),
            [0, 1],
            [0, 1]
          ),
        }}
      >
        AI Strategy
      </div>

      <div
        style={{
          position: "absolute",
          top: 56,
          left: 40,
          right: 40,
          fontSize: 12,
          lineHeight: 1.6,
          color: "rgba(245,245,247,0.45)",
        }}
      >
        Developing one of the best AI strategy for your business —{" "}
        <span style={{ color: ACCENT, fontWeight: 700 }}>{percent}%</span> of
        tasks can be done with AI.
      </div>

      {/* Ring chart */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -30%)",
        }}
      >
        <svg width={160} height={160} viewBox="0 0 160 160">
          {/* Background ring */}
          <circle
            cx={80}
            cy={80}
            r={60}
            fill="none"
            stroke="rgba(79,70,229,0.1)"
            strokeWidth={8}
          />
          {/* Progress ring */}
          <circle
            cx={80}
            cy={80}
            r={60}
            fill="none"
            stroke={BRAND}
            strokeWidth={8}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - ringProgress)}
            transform="rotate(-90 80 80)"
            style={{
              filter: `drop-shadow(0 0 8px ${BRAND}66)`,
            }}
          />
          {/* Center text */}
          <text
            x={80}
            y={76}
            textAnchor="middle"
            fill="#F5F5F7"
            fontSize={32}
            fontWeight={800}
            fontFamily="Inter, system-ui, sans-serif"
          >
            {percent}%
          </text>
          <text
            x={80}
            y={96}
            textAnchor="middle"
            fill="rgba(245,245,247,0.4)"
            fontSize={10}
            fontWeight={500}
            fontFamily="Inter, system-ui, sans-serif"
          >
            AI-READY
          </text>
        </svg>
      </div>

      {/* Strategy pills */}
      <div
        style={{
          position: "absolute",
          bottom: 44,
          left: 40,
          right: 40,
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {strategies.map((strat, i) => {
          const s = spring({
            frame: frame - 50 - i * 10,
            fps,
            config: { damping: 120 },
          });
          const opacity = interpolate(s, [0, 1], [0, 1], {
            extrapolateRight: "clamp",
          });
          const y = interpolate(s, [0, 1], [12, 0], {
            extrapolateRight: "clamp",
          });
          const isActive = strat === "AI Strategy";
          return (
            <div
              key={i}
              style={{
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 600,
                background: isActive
                  ? `${BRAND}28`
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${
                  isActive ? `${BRAND}55` : "rgba(255,255,255,0.08)"
                }`,
                color: isActive ? BRAND : "rgba(245,245,247,0.5)",
                opacity,
                transform: `translateY(${y}px)`,
              }}
            >
              {strat}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
