import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

/**
 * Custom AI Solutions — code terminal with live typing + process init
 * 180 frames @ 30fps = 6s loop
 */

const BRAND = "#4F46E5";
const ACCENT = "#10B981";
const BG = "#0A0A0F";

const codeLines = [
  { text: "automateProcess.init()", color: ACCENT },
  { text: '  .set("customer")', color: "#F5F5F7" },
  { text: "  .add(0.001)", color: "#F5F5F7" },
  { text: "// 12.55.00.02", color: "rgba(245,245,247,0.35)" },
  { text: "→ Pipeline OK ✓", color: ACCENT },
];

export const CustomAISolutions: React.FC = () => {
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
          color: BRAND,
          opacity: interpolate(
            spring({ frame, fps, config: { damping: 200 } }),
            [0, 1],
            [0, 1]
          ),
        }}
      >
        Custom AI Solutions
      </div>

      <div
        style={{
          position: "absolute",
          top: 52,
          left: 36,
          right: 36,
          fontSize: 11,
          color: "rgba(245,245,247,0.4)",
          lineHeight: 1.5,
        }}
      >
        End-to-end custom solutions built for your business.
      </div>

      {/* Terminal window */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 28,
          right: 28,
          bottom: 48,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        {/* Terminal header */}
        <div
          style={{
            height: 28,
            background: "rgba(255,255,255,0.03)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            gap: 6,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              background: "#E11D48",
              opacity: 0.7,
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              background: "#F59E0B",
              opacity: 0.7,
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              background: ACCENT,
              opacity: 0.7,
            }}
          />
          <span
            style={{
              marginLeft: 12,
              fontSize: 10,
              color: "rgba(245,245,247,0.3)",
              fontWeight: 500,
            }}
          >
            ai-pipeline.ts
          </span>
        </div>

        {/* Code content */}
        <div
          style={{
            padding: "16px 16px",
            fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
          }}
        >
          {codeLines.map((line, i) => {
            const delay = 25 + i * 20;
            const charProgress = interpolate(
              frame,
              [delay, delay + 18],
              [0, line.text.length],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );
            const displayText = line.text.slice(
              0,
              Math.floor(charProgress)
            );
            const lineOpacity = interpolate(
              frame,
              [delay - 2, delay + 2],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );

            return (
              <div
                key={i}
                style={{
                  fontSize: 13,
                  lineHeight: 2,
                  color: line.color,
                  opacity: lineOpacity,
                  whiteSpace: "pre",
                }}
              >
                <span style={{ color: "rgba(245,245,247,0.15)", marginRight: 12 }}>
                  {String(i + 1).padStart(2, " ")}
                </span>
                {displayText}
                {/* Cursor on current typing line */}
                {charProgress < line.text.length &&
                  charProgress > 0 && (
                    <span
                      style={{
                        display: "inline-block",
                        width: 7,
                        height: 15,
                        background: ACCENT,
                        marginLeft: 1,
                        opacity:
                          Math.sin(frame * 0.2) > 0 ? 0.9 : 0.3,
                        verticalAlign: "middle",
                      }}
                    />
                  )}
              </div>
            );
          })}

          {/* Blinking cursor at end */}
          {frame > 130 && (
            <div
              style={{
                fontSize: 13,
                lineHeight: 2,
                opacity: Math.sin(frame * 0.12) > 0 ? 0.7 : 0.2,
              }}
            >
              <span style={{ color: "rgba(245,245,247,0.15)", marginRight: 12 }}>
                {" 6"}
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 15,
                  background: BRAND,
                  verticalAlign: "middle",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Status bar */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 36,
          right: 36,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: 3,
              background: frame > 120 ? ACCENT : "#F59E0B",
              boxShadow: `0 0 6px ${frame > 120 ? ACCENT : "#F59E0B"}66`,
            }}
          />
          <span
            style={{
              fontSize: 10,
              color: "rgba(245,245,247,0.35)",
              fontWeight: 500,
            }}
          >
            {frame > 120 ? "Pipeline ready" : "Initializing..."}
          </span>
        </div>
        <span
          style={{
            fontSize: 10,
            color: "rgba(245,245,247,0.2)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {Math.floor(frame / 30)}:{String(Math.floor((frame % 30) * (60 / 30))).padStart(2, "0")}
        </span>
      </div>
    </AbsoluteFill>
  );
};
