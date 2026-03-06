import { AbsoluteFill, useCurrentFrame, interpolate, useVideoConfig } from "remotion";

const nodes = [
  { x: 100, y: 100 },
  { x: 300, y: 150 },
  { x: 150, y: 300 },
  { x: 350, y: 320 },
  { x: 220, y: 200 },
];

export const NetworkScanNode = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0c15", justifyContent: "center", alignItems: "center" }}>
      <svg width="480" height="420" viewBox="0 0 480 420">
        {/* Connections */}
        {nodes.map((node, i) => (
          nodes.map((other, j) => {
            if (i >= j) return null;
            const dist = Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2));
            if (dist > 200) return null;
            
            const active = (frame - i*10) % 60 < 30; // scanning active
            
            return (
              <line
                key={`${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={other.x}
                y2={other.y}
                stroke={active ? "#38BDF8" : "#1f2937"}
                strokeWidth={active ? 2 : 1}
                strokeOpacity={active ? 1 : 0.3}
              />
            );
          })
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const scale = interpolate(Math.sin((frame + i * 20) / 10), [-1, 1], [0.8, 1.2]);
          const isScanning = (frame % (nodes.length * 20)) > i * 20 && (frame % (nodes.length * 20)) < (i + 1) * 20;

          return (
            <g key={i} transform={`translate(${node.x}, ${node.y}) scale(${scale})`}>
              <circle r={8} fill="#38BDF8" />
              <circle r={15} fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.5" />
            </g>
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};
