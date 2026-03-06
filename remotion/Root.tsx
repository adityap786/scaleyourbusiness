import { Composition } from "remotion";
import { HeroLoop } from "./compositions/HeroLoop";
import { AICollaboration } from "./compositions/AICollaboration";
import { SeamlessIntegrations } from "./compositions/SeamlessIntegrations";
import { InsightReporting } from "./compositions/InsightReporting";
import { SmartAutomation } from "./compositions/SmartAutomation";
import { AIStrategy } from "./compositions/AIStrategy";
import { LLMFineTuning } from "./compositions/LLMFineTuning";
import { AutomationIntegration } from "./compositions/AutomationIntegration";
import { CustomAISolutions } from "./compositions/CustomAISolutions";
import { CyberShieldLogic } from "./compositions/CyberShieldLogic";
import { NetworkScanNode } from "./compositions/NetworkScanNode";
// import { LockFlowSecure } from "./compositions/LockFlowSecure"; // Skipping placeholder for now if file not fully valid
import { PhishingSimulation } from "./compositions/PhishingSimulation";
import { SaasDashboardPreview } from "./compositions/SaasDashboardPreview";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="HeroLoop"
        component={HeroLoop}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="SaasDashboardPreview"
        component={SaasDashboardPreview}
        durationInFrames={180}
        fps={30}
        width={800}
        height={600}
      />
      {/* Existing AI Compositions */}
      <Composition
        id="AICollaboration"
        component={AICollaboration}
        durationInFrames={180}
        fps={30}
        width={480}
        height={420}
      />
      <Composition
        id="SeamlessIntegrations"
        component={SeamlessIntegrations}
        durationInFrames={180}
        fps={30}
        width={480}
        height={420}
      />
      <Composition
        id="InsightReporting"
        component={InsightReporting}
        durationInFrames={180}
        fps={30}
        width={480}
        height={420}
      />
      <Composition
        id="SmartAutomation"
        component={SmartAutomation}
        durationInFrames={180}
        fps={30}
        width={480}
        height={420}
      />
      <Composition
        id="AIStrategy"
        component={AIStrategy}
        durationInFrames={180}
        fps={30}
        width={480}
        height={420}
      />
      <Composition
        id="LLMFineTuning"
        component={LLMFineTuning}
        durationInFrames={180}
        fps={30}
        width={480}
        height={420}
      />
      <Composition
        id="AutomationIntegration"
        component={AutomationIntegration}
        durationInFrames={180}
        fps={30}
        width={480}
        height={420}
      />
      <Composition
        id="CustomAISolutions"
        component={CustomAISolutions}
        durationInFrames={180}
        fps={30}
        width={480}
        height={420}
      />

      {/* Cybersecurity Compositions */}
      <Composition
        id="CyberShieldLogic"
        component={CyberShieldLogic}
        durationInFrames={180}
        fps={30}
        width={480}
        height={420}
      />
      <Composition
        id="NetworkScanNode"
        component={NetworkScanNode}
        durationInFrames={180}
        fps={30}
        width={480}
        height={420}
      />
      <Composition
        id="PhishingSimulation"
        component={PhishingSimulation}
        durationInFrames={180}
        fps={30}
        width={480}
        height={420}
      />
    </>
  );
};
