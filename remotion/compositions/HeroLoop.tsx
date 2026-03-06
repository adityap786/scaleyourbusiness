import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const HeroLoop = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const reveal = spring({
    frame,
    fps,
    config: {
      damping: 200,
      stiffness: 120,
      mass: 0.8,
    },
  });

  const titleY = interpolate(reveal, [0, 1], [40, 0]);
  const titleOpacity = interpolate(reveal, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pulse = interpolate(frame % 120, [0, 60, 120], [0.5, 1, 0.5], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const accentX = interpolate(frame, [0, 300], [-120, 120]);

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(1200px 600px at 50% 0%, rgba(37,99,235,0.28), rgba(10,10,15,1))",
        color: "#F8FAFC",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 120px",
        }}
      >
        <div
          style={{
            transform: `translateY(${titleY}px)`,
            opacity: titleOpacity,
            maxWidth: 1280,
          }}
        >
          <div
            style={{
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              opacity: 0.8,
              marginBottom: 24,
            }}
          >
            Scale Your Business
          </div>
          <h1
            style={{
              fontSize: 108,
              lineHeight: 1.05,
              margin: 0,
              fontWeight: 800,
            }}
          >
            Engineer Growth Infrastructure.
          </h1>
          <p
            style={{
              marginTop: 28,
              fontSize: 34,
              lineHeight: 1.35,
              opacity: 0.88,
            }}
          >
            AI automation, SaaS, and product systems designed to scale revenue.
          </p>
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          pointerEvents: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 760,
            height: 760,
            borderRadius: 999,
            border: "1px solid rgba(96,165,250,0.35)",
            boxShadow: "0 0 160px rgba(59,130,246,0.35)",
            transform: `scale(${pulse}) translateX(${accentX}px)`,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
