import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

/**
 * Smart Automation — calendar grid + task cards appearing
 * 180 frames @ 30fps = 6s loop
 */

const BRAND = "#4F46E5";
const ACCENT = "#10B981";
const BG = "#0A0A0F";

const days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
const hours = ["12:00 AM", "3:00 AM", "6:00 AM", "9:00 AM"];

const tasks = [
  { x: 0, y: 0, w: 2, h: 1, label: "Bento grid", color: BRAND },
  { x: 2, y: 1, w: 2, h: 1, label: "Landing Page", color: ACCENT },
  { x: 1, y: 2, w: 1, h: 1, label: "Add Task", color: "#8B5CF6" },
  { x: 3, y: 2, w: 1, h: 1, label: "Deploy", color: "#F59E0B" },
];

export const SmartAutomation: React.FC = () => {
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
      {/* Subtle grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 48px",
        }}
      />

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
        Smart Automation
      </div>

      <div
        style={{
          position: "absolute",
          top: 52,
          left: 36,
          fontSize: 12,
          color: "rgba(245,245,247,0.4)",
          maxWidth: 300,
          lineHeight: 1.5,
        }}
      >
        Set it, forget it. Your AI Agent tackles repetitive tasks.
      </div>

      {/* Calendar header */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 36,
          right: 36,
          display: "flex",
          gap: 4,
        }}
      >
        {days.map((d, i) => {
          const s = spring({
            frame: frame - 10 - i * 5,
            fps,
            config: { damping: 150 },
          });
          return (
            <div
              key={d}
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(245,245,247,0.5)",
                letterSpacing: 1,
                opacity: interpolate(s, [0, 1], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              {d}
            </div>
          );
        })}
      </div>

      {/* Hour labels */}
      {hours.map((h, i) => (
        <div
          key={h}
          style={{
            position: "absolute",
            left: 36,
            top: 124 + i * 48,
            fontSize: 9,
            color: "rgba(245,245,247,0.25)",
            fontWeight: 500,
          }}
        >
          {h}
        </div>
      ))}

      {/* Grid lines */}
      {hours.map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: 90,
            right: 36,
            top: 130 + i * 48,
            height: 1,
            background: "rgba(79,70,229,0.08)",
          }}
        />
      ))}

      {/* Task blocks */}
      {tasks.map((task, i) => {
        const delay = 30 + i * 18;
        const s = spring({
          frame: frame - delay,
          fps,
          config: { damping: 100, stiffness: 90, mass: 0.5 },
        });
        const cellW = (480 - 90 - 36 - days.length * 4) / days.length;
        const left = 90 + task.x * (cellW + 4);
        const top = 124 + task.y * 48 + 4;
        const width = task.w * cellW + (task.w - 1) * 4;
        const height = task.h * 44;

        const scale = interpolate(s, [0, 1], [0.6, 1], {
          extrapolateRight: "clamp",
        });
        const opacity = interpolate(s, [0, 1], [0, 1], {
          extrapolateRight: "clamp",
        });

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left,
              top,
              width,
              height,
              borderRadius: 8,
              background: `${task.color}22`,
              border: `1px solid ${task.color}44`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 600,
              color: task.color,
              transform: `scale(${scale})`,
              opacity,
              boxShadow: `0 0 ${8 + Math.sin(frame * 0.06 + i) * 4}px ${task.color}22`,
            }}
          >
            {task.label}
          </div>
        );
      })}

      {/* Progress indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: 36,
          right: 36,
          height: 3,
          background: "rgba(79,70,229,0.1)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${interpolate(frame, [0, 160], [0, 100], {
              extrapolateRight: "clamp",
            })}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${BRAND}, ${ACCENT})`,
            borderRadius: 2,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
