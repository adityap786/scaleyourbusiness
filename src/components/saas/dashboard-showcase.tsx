"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

/* ─── Sidebar icons ─── */
const SidebarIcon = ({ active, children }: { active?: boolean; children: React.ReactNode }) => (
  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${active ? "bg-[#1A56DB]/20 text-[#7DF9FF]" : "text-[var(--color-text-muted)] hover:text-[var(--color-brand)]"}`}>
    {children}
  </div>
)

/* ─── Status pill ─── */
const StatusBadge = ({ label, color }: { label: string; color: string }) => (
  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${color}`}>{label}</span>
)

/* ─── Avatar ─── */
const Av = ({ hue }: { hue: number }) => (
  <div className="w-7 h-7 rounded-full border-2 border-[var(--color-bg-card)] shrink-0" style={{ background: `hsl(${hue},55%,50%)` }} />
)

/* ─── Row item ─── */
const TaskRow = ({
  id, title, progress, comments, badges, time, date, avatar,
}: {
  id: string; title: string; progress?: string; comments?: number; badges?: { label: string; color: string }[]; time?: string; date?: string; avatar: number
}) => (
  <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-[var(--color-bg-soft)] transition-colors group">
    {/* priority bars */}
    <div className="flex gap-0.5 opacity-40">
      <div className="w-0.5 h-3 bg-[var(--color-text-muted)] rounded-full" />
      <div className="w-0.5 h-3 bg-[var(--color-text-muted)] rounded-full" />
    </div>
    <span className="text-xs text-[var(--color-text-muted)] font-mono w-14 shrink-0">{id}</span>
    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#1A56DB] shrink-0" />
    <span className="text-sm text-[var(--color-text)] truncate flex-1">{title}</span>
    {progress && (
      <span className="text-[10px] text-[var(--color-text-muted)] flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
        {progress}
      </span>
    )}
    {comments !== undefined && (
      <span className="text-[10px] text-[var(--color-text-muted)] flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        {comments}
      </span>
    )}
    {badges?.map((b, i) => <StatusBadge key={i} label={b.label} color={b.color} />)}
    {time && <span className="text-[10px] text-[var(--color-text-muted)]">{time}</span>}
    {date && <span className="text-[10px] text-[var(--color-text-muted)]">{date}</span>}
    <Av hue={avatar} />
  </div>
)

export function DashboardShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardRef, { once: true, margin: "-80px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={sectionRef} className="relative py-28 bg-[var(--color-bg)] overflow-hidden">
      {/* Atmospheric glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[800px] bg-[radial-gradient(ellipse_at_left,rgba(26,86,219,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(26,86,219,0.1),rgba(125,249,255,0.05)_50%,transparent_80%)] pointer-events-none" />

      {/* Dashboard */}
      <motion.div
        ref={cardRef}
        style={{ y: parallaxY }}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative mx-auto w-[90%] max-w-6xl"
      >
        {/* 3D perspective wrapper */}
        <div
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[0_40px_80px_rgba(26,86,219,0.1)] overflow-hidden"
          style={{
            transform: "perspective(1200px) rotateY(-4deg) rotateX(2deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="flex">
            {/* Sidebar */}
            <div className="w-14 bg-[var(--color-bg-soft)] border-r border-[var(--color-border)] flex flex-col items-center py-4 gap-4 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-[#1A56DB] flex items-center justify-center mb-2">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-[var(--color-text)] font-bold">56%</div>
                <div className="w-6 h-8 bg-[#1A56DB]/20 rounded mt-1 mx-auto" />
                <div className="text-[8px] text-[var(--color-text-muted)] mt-1 font-bold uppercase">To Do</div>
              </div>
              <div className="flex-1" />
              <SidebarIcon active><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" /></svg></SidebarIcon>
              <SidebarIcon><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></SidebarIcon>
              <SidebarIcon><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg></SidebarIcon>
              <SidebarIcon><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></SidebarIcon>
              <SidebarIcon><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></SidebarIcon>
              <SidebarIcon><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></SidebarIcon>
            </div>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.04]">
                <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-1.5 w-64">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <span className="text-sm text-gray-500">Search...</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-gray-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    View
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-gray-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                    Show
                  </button>
                </div>
              </div>

              {/* IN PROGRESS */}
              <div className="px-4 py-2.5 text-xs text-gray-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                <span className="text-gray-500">&#9660;</span> In Progress <span className="text-gray-600 ml-1">6</span>
              </div>

              <TaskRow id="CRM-51" title="Store markup as ProseMirror JSON instead of HTML" progress="2/3" badges={[{ label: "MVP", color: "bg-[#1A56DB]/20 text-[#7DF9FF]" }]} time="24 hrs" date="12 Mar" avatar={30} />
              <TaskRow id="CRM-60" title="Feature Request: Document analysis" progress="1/3" comments={4} badges={[{ label: "PreMVP", color: "bg-emerald-900/40 text-emerald-300" }, { label: "5 Jun 2024", color: "bg-[#1A56DB]/20 text-blue-300" }]} time="14 hrs" date="12 Mar" avatar={200} />
              <TaskRow id="CRM-94" title="Improve inbox grouping" progress="1/3" time="12 hrs" date="13 Mar" avatar={45} />
              <TaskRow id="CRM-66" title="Storage adapter configuration" progress="2/3" comments={2} time="28 hrs" date="13 Mar" avatar={120} />
              <TaskRow id="CRM-58" title="Create workspace confusion" badges={[{ label: "Marketing", color: "bg-gray-700/50 text-gray-300" }]} time="28 hrs" date="15 Mar" avatar={280} />
              <TaskRow id="CRM-51" title="BUG > Copy URL link does not work in this button (copy)" progress="1/3" comments={6} badges={[{ label: "9 Jun 2024", color: "bg-[#1A56DB]/20 text-blue-300" }]} time="8 hrs" date="16 Mar" avatar={330} />

              {/* UNDER REVIEW */}
              <div className="px-4 py-2.5 mt-2 text-xs text-gray-400 font-semibold uppercase tracking-wider flex items-center gap-2 border-t border-white/[0.03]">
                <span className="text-gray-500">&#9660;</span> Under Review <span className="text-gray-600 ml-1">3</span>
              </div>

              <TaskRow id="CRM-67" title="Team > change icon" comments={12} badges={[{ label: "Marketing", color: "bg-gray-700/50 text-gray-300" }]} time="24 hrs" date="18 Mar" avatar={90} />
              <TaskRow id="CRM-45" title="Feature Request: Lock document content" comments={6} badges={[{ label: "PreMVP", color: "bg-emerald-900/40 text-emerald-300" }]} time="14 hrs" date="18 Mar" avatar={160} />
              <TaskRow id="CRM-44" title="Create the potential partners list" comments={1} time="28 hrs" date="21 Mar" avatar={240} />

              {/* TODO */}
              <div className="px-4 py-2.5 mt-2 text-xs text-gray-400 font-semibold uppercase tracking-wider flex items-center gap-2 border-t border-white/[0.03]">
                <span className="text-gray-500">&#9654;</span> Todo
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
