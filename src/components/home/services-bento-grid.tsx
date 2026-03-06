"use client";

import { Player } from "@remotion/player";
import { motion } from "framer-motion";
import { AICollaboration } from "../../../remotion/compositions/AICollaboration";
import { SeamlessIntegrations } from "../../../remotion/compositions/SeamlessIntegrations";
import { InsightReporting } from "../../../remotion/compositions/InsightReporting";
import { SmartAutomation } from "../../../remotion/compositions/SmartAutomation";
import { AIStrategy } from "../../../remotion/compositions/AIStrategy";
import { LLMFineTuning } from "../../../remotion/compositions/LLMFineTuning";
import { AutomationIntegration } from "../../../remotion/compositions/AutomationIntegration";
import { CustomAISolutions } from "../../../remotion/compositions/CustomAISolutions";

interface BentoCard {
  id: string;
  title: string;
  subtitle: string;
  component: React.FC;
  colSpan: number;
  rowSpan: number;
}

const cards: BentoCard[] = [
  {
    id: "ai-collab",
    title: "Real-time AI Collaboration",
    subtitle:
      "Experience real-time assistance. Ask your AI Agent to coordinate tasks, answer questions, and maintain team alignment.",
    component: AICollaboration,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "integrations",
    title: "Seamless Integrations",
    subtitle:
      "Unite your favorite tools for effortless connectivity. Boost productivity through interconnected workflows.",
    component: SeamlessIntegrations,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "insights",
    title: "Instant Insight Reporting",
    subtitle:
      "Transform raw data into clear insights in seconds. Empower smarter decisions with real-time intelligence.",
    component: InsightReporting,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "automation",
    title: "Smart Automation",
    subtitle:
      "Set it, forget it. Your AI Agent tackles repetitive tasks so you can focus on strategy, innovation, and growth.",
    component: SmartAutomation,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "ai-strategy",
    title: "AI Strategy",
    subtitle:
      "Developing the best AI strategy for your business — 80% of tasks can be done with AI.",
    component: AIStrategy,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "llm",
    title: "LLM Fine-Tuning",
    subtitle:
      "Everyone uses generic LLMs. We develop vertical LLMs trained on your business data.",
    component: LLMFineTuning,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "auto-integration",
    title: "Automation & AI Integration",
    subtitle:
      "Reducing redundancy and repetition so your business has more robust processes.",
    component: AutomationIntegration,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "custom-ai",
    title: "Custom AI Solutions",
    subtitle:
      "End-to-end custom solutions designed for your business — from architecture to deployment.",
    component: CustomAISolutions,
    colSpan: 2,
    rowSpan: 1,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ServicesBentoGrid() {
  return (
    <section className="relative py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(79,70,229,0.25), transparent 70%)",
          }}
        />
      </div>

      {/* Section header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-semibold tracking-[3px] uppercase text-[var(--color-accent)] mb-4"
        >
          What We Build
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text)]"
        >
          AI-Powered Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto"
        >
          Live motion graphics showcasing the systems we engineer for
          high-growth companies.
        </motion.p>
      </div>

      {/* Bento grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]"
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            className={`
              group relative rounded-2xl overflow-hidden
              border border-[var(--color-border)] hover:border-[var(--color-border-hover)]
              bg-[var(--color-bg-card)] backdrop-blur-sm
              transition-colors duration-300
              ${card.colSpan === 2 ? "md:col-span-2" : ""}
              ${card.rowSpan === 2 ? "md:row-span-2" : ""}
            `}
          >
            {/* Player */}
            <div className="absolute inset-0">
              <Player
                component={card.component}
                durationInFrames={180}
                compositionWidth={480}
                compositionHeight={420}
                fps={30}
                loop
                autoPlay
                style={{
                  width: "100%",
                  height: "100%",
                }}
                controls={false}
              />
            </div>

            {/* Hover overlay with title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
              <h3 className="text-base font-bold text-white tracking-tight">
                {card.title}
              </h3>
              <p className="mt-1.5 text-sm text-white/70 leading-relaxed line-clamp-2">
                {card.subtitle}
              </p>
            </div>

            {/* Subtle bottom label (always visible) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent h-16 opacity-70 group-hover:opacity-0 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-4 text-xs font-medium text-[var(--color-text-muted)] group-hover:opacity-0 transition-opacity duration-300 tracking-wide">
              {card.title}
            </div>

            {/* Glow on hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{
                boxShadow: "inset 0 0 60px rgba(79,70,229,0.08)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
