import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const LockFlowSecure = () => {
  const frame = useCurrentFrame();
  
  const streamCount = 5;
  
  return (
    <AbsoluteFill style={{ backgroundColor: "#050505", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      {/* Background Streams */}
      {new Array(streamCount).fill(0).map((_, i) => {
        const xOffset = (i - 2) * 60;
        const yPos = (frame * (5 + i)) % 500 - 50;
        
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(50% + ${xOffset}px)`,
              top: yPos,
              width: 20,
              height: 60,
              background: "linear-gradient(to bottom, transparent, #38BDF8, transparent)",
              opacity: 0.3,
              borderRadius: 10,
            }}
          />
        );
      })}

      {/* Center Lock */}
      <div style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div 
          style={{ 
            width: 80, 
            height: 60, 
            border: "8px solid #38BDF8", 
            borderBottom: "none", 
            borderRadius: "40px 40px 0 0",
            transform: `translateY(${interpolate(frame % 60, [0, 30, 60], [0, -10, 0])}px)`
          }} 
        />
        <div 
          style={{ 
            width: 120, 
            height: 100, 
            backgroundColor: "rgba(56, 189, 248, 0.2)", 
            borderRadius: 10,
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            boxShadow: "0 0 30px rgba(56, 189, 248, 0.5)"
          }} 
        >
          <div style={{ width: 20, height: 30, backgroundColor: "#38BDF8", borderRadius: 4 }} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
