import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const PhishingSimulation = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const openProgress = spring({
    frame: frame % 90,
    fps,
    config: { damping: 10 },
  });

  const isAlert = frame % 180 > 90;

  return (
    <AbsoluteFill style={{ backgroundColor: "#111", justifyContent: "center", alignItems: "center" }}>
      <div style={{ position: "relative" }}>
        {/* Envelope Body */}
        <div 
          style={{ 
            width: 160, 
            height: 100, 
            backgroundColor: isAlert ? "#38BDF8" : "#374151", 
            borderRadius: 8,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "background-color 0.3s"
          }} 
        >
            {isAlert && <span style={{ fontSize: 40 }}>⚠️</span>}
        </div>
        
        {/* Envelope Flap */}
        <div 
          style={{ 
            position: "absolute",
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            borderLeft: "80px solid transparent",
            borderRight: "80px solid transparent",
            borderTop: `60px solid ${isAlert ? "#38BDF8" : "#4b5563"}`,
            transformOrigin: "top",
            transform: `rotateX(${openProgress * 180}deg)`,
          }} 
        />
      </div>
      
      {/* Particles emitting if alert */}
      {isAlert && new Array(8).fill(0).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const dist = interpolate(frame % 90, [0, 90], [0, 100]);
          const x = Math.cos(angle) * dist;
          const y = Math.sin(angle) * dist;
          
          return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: 8,
                  height: 8,
                  backgroundColor: "#38BDF8",
                  borderRadius: "50%",
                  transform: `translate(${x}px, ${y}px)`,
                  opacity: 1 - (frame % 90) / 90
                }}
              />
          );
      })}


    </AbsoluteFill>
  );
};
