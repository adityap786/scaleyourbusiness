import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

/**
 * LLM Fine-Tuning — vertical model layers + data flow
 * 180 frames @ 30fps = 6s loop
 */

const BRAND = "#4F46E5";
const ACCENT = "#10B981";
const BG = "#0A0A0F";

const layers = [
  { label: "Input Layer", nodes: 4 },
  { label: "Embed", nodes: 6 },
  { label: "Attention", nodes: 8 },
  { label: "FFN", nodes: 6 },
  { label: "Output", nodes: 3 },
];

export const LLMFineTuning: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const centerX = 240;
  const startY = 70;
  const layerSpacing = 60;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(500px 400px at 50% 50%, rgba(139,92,246,0.08), ${BG})`,
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
          color: "#8B5CF6",
          opacity: interpolate(
            spring({ frame, fps, config: { damping: 200 } }),
            [0, 1],
            [0, 1]
          ),
        }}
      >
        LLM Fine-Tuning
      </div>

      <div
        style={{
          position: "absolute",
          top: 50,
          left: 36,
          fontSize: 11,
          color: "rgba(245,245,247,0.4)",
          maxWidth: 260,
          lineHeight: 1.5,
        }}
      >
        Vertical LLM trained on your domain data
      </div>

      {/* Neural network visualization */}
      <svg
        style={{ position: "absolute", top: 0, left: 0 }}
        width="100%"
        height="100%"
      >
        {/* Connection lines between layers */}
        {layers.map((layer, li) => {
          if (li === layers.length - 1) return null;
          const nextLayer = layers[li + 1];
          const y1 = startY + li * layerSpacing + 14;
          const y2 = startY + (li + 1) * layerSpacing - 4;

          return layer.nodes > 0 && nextLayer.nodes > 0
            ? Array.from({ length: Math.min(layer.nodes, 4) }, (_, ni) => {
                const x1 =
                  centerX -
                  ((Math.min(layer.nodes, 4) - 1) * 28) / 2 +
                  ni * 28;
                return Array.from(
                  { length: Math.min(nextLayer.nodes, 4) },
                  (_, nj) => {
                    const x2 =
                      centerX -
                      ((Math.min(nextLayer.nodes, 4) - 1) * 28) / 2 +
                      nj * 28;
                    const dataFlow = ((frame * 0.02 + li * 0.3 + ni * 0.1) % 1);
                    const opacity = 0.06 + dataFlow * 0.08;
                    return (
                      <line
                        key={`${li}-${ni}-${nj}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={BRAND}
                        strokeWidth={0.8}
                        opacity={opacity}
                      />
                    );
                  }
                );
              })
            : null;
        })}

        {/* Data flow pulse traveling down */}
        {(() => {
          const pulseY = interpolate(
            (frame * 1.5) % 300,
            [0, 300],
            [startY - 10, startY + layers.length * layerSpacing + 20]
          );
          return (
            <circle
              cx={centerX}
              cy={pulseY}
              r={6}
              fill={ACCENT}
              opacity={0.5}
              style={{ filter: `blur(3px)` }}
            />
          );
        })()}
      </svg>

      {/* Layer nodes */}
      {layers.map((layer, li) => {
        const s = spring({
          frame: frame - 15 - li * 12,
          fps,
          config: { damping: 120 },
        });
        const opacity = interpolate(s, [0, 1], [0, 1], {
          extrapolateRight: "clamp",
        });
        const scale = interpolate(s, [0, 1], [0.5, 1], {
          extrapolateRight: "clamp",
        });
        const y = startY + li * layerSpacing;
        const displayNodes = Math.min(layer.nodes, 6);

        return (
          <div key={li}>
            {/* Layer label */}
            <div
              style={{
                position: "absolute",
                right: 36,
                top: y - 2,
                fontSize: 9,
                fontWeight: 600,
                color: "rgba(245,245,247,0.3)",
                letterSpacing: 1,
                textTransform: "uppercase",
                opacity,
              }}
            >
              {layer.label}
            </div>

            {/* Nodes */}
            <div
              style={{
                position: "absolute",
                left: centerX - (displayNodes * 28) / 2,
                top: y,
                display: "flex",
                gap: 8,
                opacity,
                transform: `scale(${scale})`,
              }}
            >
              {Array.from({ length: displayNodes }, (_, ni) => {
                const active =
                  Math.floor(
                    (frame * 0.03 + li * 2 + ni) % displayNodes
                  ) === ni;
                return (
                  <div
                    key={ni}
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 4,
                      background: active
                        ? `${ACCENT}44`
                        : `${BRAND}22`,
                      border: `1px solid ${
                        active ? `${ACCENT}66` : `${BRAND}33`
                      }`,
                      boxShadow: active
                        ? `0 0 8px ${ACCENT}33`
                        : "none",
                      transition: "all 0.1s",
                    }}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Training stats */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: 36,
          display: "flex",
          gap: 24,
        }}
      >
        {[
          {
            label: "Loss",
            value: interpolate(frame, [40, 160], [2.4, 0.12], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.exp),
            }).toFixed(2),
          },
          {
            label: "Acc",
            value:
              Math.floor(
                interpolate(frame, [40, 160], [45, 97], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.out(Easing.exp),
                })
              ) + "%",
          },
          {
            label: "Epoch",
            value: Math.floor(
              interpolate(frame, [0, 180], [0, 50], {
                extrapolateRight: "clamp",
              })
            ),
          },
        ].map((stat, i) => (
          <div key={i}>
            <div
              style={{
                fontSize: 9,
                color: "rgba(245,245,247,0.35)",
                fontWeight: 600,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#F5F5F7",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
