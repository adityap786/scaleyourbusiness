"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Container } from "@/components/ui/container"

/* ─── Card wrapper ─── */
const ShowcaseCard = ({
  children,
  delay = 0,
  glowStyle,
}: {
  children: React.ReactNode
  delay?: number
  glowStyle?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden group hover:shadow-[0_8px_40px_rgba(26,86,219,0.15)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* glow */}
      {glowStyle && <div className={`absolute ${glowStyle} w-full h-full pointer-events-none`} />}
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  )
}

/* ─── Card 1: Keyboard Shortcuts ─── */
const KeyboardShortcutsCard = () => (
  <ShowcaseCard
    delay={0}
    glowStyle="bottom-0 left-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(26,86,219,0.2),rgba(125,249,255,0.05)_40%,transparent_70%)]"
  >
    <div className="flex-1 p-6 flex items-center justify-center">
      <div
        className="bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-xl p-4 w-full max-w-[280px] shadow-xl"
        style={{ transform: "perspective(600px) rotateY(4deg) rotateX(-2deg)" }}
      >
        <div className="flex items-center gap-2 mb-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-3 py-2">
          <svg className="w-4 h-4 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <span className="text-sm text-[var(--color-text-secondary)]">Run command...</span>
          <svg className="w-4 h-4 text-[var(--color-text-muted)] ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
        <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mb-2 px-1">Actions</p>
        {[
          { action: "Mark Task as Done", key: "V" },
          { action: "Open To Do List", key: "B" },
          { action: "Switch to Timeline View", key: "M" },
        ].map((item, i) => (
          <div key={i} className={`flex items-center justify-between px-3 py-2 rounded-lg ${i === 0 ? "bg-[var(--color-bg)] shadow-sm" : ""}`}>
            <span className="text-sm text-[var(--color-text)]">{item.action}</span>
            <span className="w-6 h-6 rounded bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[10px] text-[var(--color-text-secondary)] font-mono">{item.key}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="p-5 pt-3 border-t border-[var(--color-border)]">
      <p className="text-sm text-[var(--color-text)]"><span className="font-bold">Keyboard shortcuts.</span>{" "}<span className="text-[var(--color-text-secondary)]">Work efficiently with instant access to common actions.</span></p>
    </div>
  </ShowcaseCard>
)

/* ─── Card 2: Team Planner ─── */
const TeamPlannerCard = () => (
  <ShowcaseCard
    delay={0.1}
    glowStyle="top-0 right-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,86,219,0.2),transparent_65%)]"
  >
    <div className="flex-1 p-6 flex items-center justify-center">
      <div className="relative w-full max-w-[320px]">
        {/* Light task card floating */}
        <div
          className="bg-white rounded-xl p-4 shadow-2xl relative z-10"
          style={{ transform: "perspective(600px) rotateY(-3deg) rotateX(2deg)" }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-gray-900">Today</span>
            <div className="w-5 h-5 rounded-full bg-[#1A56DB] flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="bg-gray-50 rounded-lg p-2.5">
              <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-semibold bg-amber-100 text-amber-700 mb-1">Medium</span>
              <p className="text-xs font-medium text-gray-800">Documentation for software modules</p>
              <div className="flex items-center gap-2 mt-1.5 text-[10px] text-gray-500">
                <span>Apr 10</span>
                <span>5</span>
              </div>
            </div>
            <div className="bg-red-50 rounded-lg p-2.5">
              <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-semibold bg-red-100 text-red-700 mb-1">High</span>
              <p className="text-xs font-medium text-gray-800">Refactor legacy code to improve maintainability</p>
              <div className="flex items-center gap-2 mt-1.5 text-[10px] text-gray-500">
                <span>Apr 18</span>
                <span>2</span>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
        {/* Background card peeking */}
        <div className="absolute -right-4 top-4 w-32 h-40 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl opacity-40" />
      </div>
    </div>
    <div className="p-5 pt-3 border-t border-[var(--color-border)]">
      <p className="text-sm text-[var(--color-text)]"><span className="font-bold">Team Planner.</span>{" "}<span className="text-[var(--color-text-secondary)]">Keep track of the bigger picture by viewing all individual tasks in one centralized team calendar.</span></p>
    </div>
  </ShowcaseCard>
)

/* ─── Card 3: Time-blocking ─── */
const TimeBlockingCard = () => (
  <ShowcaseCard
    delay={0.15}
    glowStyle="inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,86,219,0.08),transparent_60%)]"
  >
    <div className="flex-1 p-6 flex items-center justify-center">
      <div className="flex gap-3 w-full max-w-[340px]">
        {/* Time ruler */}
        <div className="flex flex-col gap-6 text-[10px] text-gray-600 pt-2 shrink-0">
          <span>9 AM</span>
          <span>10 AM</span>
          <span>11 AM</span>
          <span>12 PM</span>
          <span>1 PM</span>
        </div>
        {/* Meeting card */}
        <div
          className="bg-white rounded-xl p-4 shadow-2xl flex-1"
          style={{ transform: "perspective(600px) rotateY(-2deg)" }}
        >
          <p className="font-bold text-sm text-gray-900">Design meeting</p>
          <p className="text-xs text-gray-500 mt-1">03:00 - 04:00 pm</p>
          <p className="text-xs text-gray-500">Weekly on Monday</p>
          <p className="text-xs text-gray-600 mt-2">Weekly review and refinement of project prototypes.</p>
          <button className="mt-3 px-3 py-1 rounded-md bg-[#1A56DB] text-white text-xs font-medium">+ Join Meeting</button>
          <div className="flex items-center gap-3 mt-3 text-[10px] text-gray-500">
            <span>10 minutes before</span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-500">
            <span>8 guests</span>
            <div className="flex -space-x-1.5">
              {[200, 30, 120, 280].map((h, i) => (
                <div key={i} className="w-4 h-4 rounded-full border border-white" style={{ background: `hsl(${h},50%,50%)` }} />
              ))}
            </div>
            <span>+5</span>
          </div>
          <div className="flex items-center gap-3 mt-3 text-[10px]">
            <span className="px-2 py-0.5 rounded border border-gray-200 text-gray-600">Yes</span>
            <span className="px-2 py-0.5 rounded border border-gray-200 text-gray-600">No</span>
            <span className="px-2 py-0.5 rounded border border-gray-200 text-gray-600">Maybe</span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-5 pt-3 border-t border-[var(--color-border)]">
      <p className="text-sm text-[var(--color-text)]"><span className="font-bold">Time-blocking.</span>{" "}<span className="text-[var(--color-text-secondary)]">Transform daily tasks into structured time blocks for focused productivity.</span></p>
    </div>
  </ShowcaseCard>
)

/* ─── Card 4: Notifications ─── */
const NotificationsCard = () => (
  <ShowcaseCard
    delay={0.2}
    glowStyle="inset-0 bg-[radial-gradient(circle_at_center,rgba(26,86,219,0.3),rgba(125,249,255,0.05)_40%,transparent_70%)]"
  >
    <div className="flex-1 p-6 flex items-center justify-center min-h-[260px]">
      <div className="relative w-40 h-40">
        {/* Concentric rings */}
        <div className="absolute inset-0 rounded-full border border-[#1A56DB]/10 animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute inset-3 rounded-full border border-[#1A56DB]/15" />
        <div className="absolute inset-6 rounded-full border border-[#1A56DB]/20" />
        <div className="absolute inset-9 rounded-full bg-[#1A56DB]/10 border border-[#1A56DB]/30" />
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1A56DB] to-[#7DF9FF] flex items-center justify-center shadow-[0_0_30px_rgba(26,86,219,0.5)]">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </div>
          {/* Badge */}
          <div className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#1A56DB] border-2 border-[var(--color-bg)] flex items-center justify-center text-[8px] text-white font-bold">28</div>
        </div>
      </div>
    </div>
    <div className="p-5 pt-3 border-t border-[var(--color-border)]">
      <p className="text-sm text-[var(--color-text)]"><span className="font-bold">Notifications.</span>{" "}<span className="text-[var(--color-text-secondary)]">Keep up to date with any changes by receiving instant notifications.</span></p>
    </div>
  </ShowcaseCard>
)

/* ─── Section 3 export ─── */
export function FeatureShowcaseGrid() {
  return (
    <section className="py-24 bg-[var(--color-bg)]">
      <Container>
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight mb-4">
            Unmatched productivity
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            A process, project, time, and knowledge management platform that provides amazing collaboration opportunities for developers and product teams alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <KeyboardShortcutsCard />
          <TeamPlannerCard />
          <TimeBlockingCard />
          <NotificationsCard />
        </div>
      </Container>
    </section>
  )
}
