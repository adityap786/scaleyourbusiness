"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Container } from "@/components/ui/container"

/* ─── tiny reusable bits ─── */
const Pill = ({ children, active }: { children: React.ReactNode; active?: boolean }) => (
  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium ${active ? "bg-[#1A56DB]/20 text-[#7DF9FF]" : "bg-white/5 text-gray-400"}`}>
    {children}
  </div>
)

const Avatar = ({ hue }: { hue: number }) => (
  <div className="w-6 h-6 rounded-full border border-white/10" style={{ background: `hsl(${hue},60%,45%)` }} />
)

const AvatarStack = ({ count }: { count: number }) => (
  <div className="flex -space-x-2">
    {Array.from({ length: count }).map((_, i) => (
      <Avatar key={i} hue={210 + i * 40} />
    ))}
  </div>
)

/* ─── Card wrapper ─── */
const BentoCard = ({
  children,
  className = "",
  delay = 0,
  glowPosition = "bottom-left",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  glowPosition?: "bottom-left" | "top-right" | "left" | "center" | "bottom-right"
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  const glowStyles: Record<string, string> = {
    "bottom-left": "bottom-0 left-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(26,86,219,0.25),transparent_70%)]",
    "top-right": "top-0 right-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,86,219,0.25),transparent_70%)]",
    "left": "top-0 left-0 bg-[radial-gradient(ellipse_at_left,rgba(26,86,219,0.2),transparent_60%)]",
    "center": "inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,86,219,0.3),transparent_65%)]",
    "bottom-right": "bottom-0 right-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(125,249,255,0.15),rgba(26,86,219,0.1)_50%,transparent_80%)]",
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] shadow-lg overflow-hidden group ${className}`}
    >
      {/* glow */}
      <div className={`absolute ${glowStyles[glowPosition]} w-full h-full pointer-events-none`} />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}

/* ─── Card 1: Task creation ─── */
const TaskCard = () => (
  <BentoCard delay={0} glowPosition="bottom-left" className="col-span-1 row-span-1">
    <div className="p-5 pb-0">
      <p className="text-sm text-[var(--color-text)]"><span className="font-bold">Create tasks.</span>{" "}<span className="text-[var(--color-text-muted)]">Schedule your sprints and backlogs.</span></p>
    </div>
    <div className="p-5 pt-4 space-y-2.5">
      <div className="flex items-center gap-3 bg-[#1A56DB]/10 border border-[#1A56DB]/20 rounded-lg px-3 py-2.5">
        <div className="w-4 h-4 rounded border-2 border-[#1A56DB] flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-[#1A56DB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        </div>
        <span className="text-sm text-[var(--color-text-secondary)]">Automated testing</span>
      </div>
      <div className="flex items-center gap-3 bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-lg px-3 py-2.5">
        <div className="w-4 h-4 rounded border border-[var(--color-border)]" />
        <span className="text-sm text-[var(--color-text-muted)]">Initial usability assessment</span>
      </div>
      <div className="flex items-center gap-3 bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-lg px-3 py-2.5">
        <div className="w-4 h-4 rounded border border-[var(--color-border)]" />
        <span className="text-sm text-[var(--color-text-muted)] truncate">Updating the documentation</span>
      </div>
    </div>
  </BentoCard>
)

/* ─── Card 2: Planner ─── */
const PlannerCard = () => (
  <BentoCard delay={0.08} glowPosition="center" className="col-span-1 row-span-1">
    <div className="p-5 pb-0">
      <p className="text-sm text-[var(--color-text)]"><span className="font-bold">Plan your work.</span>{" "}<span className="text-[var(--color-text-muted)]">Visualize your workday in your planner.</span></p>
    </div>
    <div className="p-5 pt-4">
      <div className="bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-xl p-4 space-y-3">
        <p className="text-sm text-[var(--color-text)]">Discuss detailed project plans outlining tasks</p>
        <p className="text-xs text-[var(--color-text-muted)]">01:00 &ndash; 01:30 pm</p>
        <div className="flex items-center justify-between pt-1">
          <AvatarStack count={3} />
          <span className="text-xs text-[var(--color-text-muted)]">+2</span>
        </div>
      </div>
    </div>
  </BentoCard>
)

/* ─── Card 3: Date badge ─── */
const DateCard = () => (
  <BentoCard delay={0.16} glowPosition="center" className="col-span-1 row-span-1 flex flex-col items-center justify-center min-h-[220px]">
    <div className="flex flex-col items-center">
      <span className="text-7xl font-bold text-[var(--color-text)] leading-none tracking-tight">08</span>
      <span className="text-lg text-[var(--color-text-secondary)] mt-1">March</span>
    </div>
    <div className="mt-4 w-10 h-10 rounded-full bg-[var(--color-bg-soft)] border border-[var(--color-border)] flex items-center justify-center">
      <svg className="w-5 h-5 text-[var(--color-text)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
    </div>
  </BentoCard>
)

/* ─── Card 4: Team chat ─── */
const ChatCard = () => (
  <BentoCard delay={0.24} glowPosition="top-right" className="col-span-1 row-span-1">
    <div className="p-5 pb-0">
      <p className="text-sm text-[var(--color-text)]"><span className="font-bold">Chat with team.</span>{" "}<span className="text-[var(--color-text-muted)]">Send DM and create group chats.</span></p>
    </div>
    <div className="p-5 pt-4 space-y-3">
      <div className="flex items-start gap-2">
        <div className="bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-xl px-3 py-2 max-w-[220px]">
          <p className="text-xs"><span className="text-[#1A56DB] font-semibold">@Mark</span>{" "}<span className="text-[var(--color-text-secondary)]">Their decision is very important</span></p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-xl px-3 py-2 max-w-[240px]">
          <p className="text-xs"><span className="text-[#1A56DB] font-semibold">@Joahn</span>{" "}<span className="text-[var(--color-text-secondary)]">Have they signed their contract yet?</span></p>
        </div>
        <Avatar hue={270} />
      </div>
      <div className="bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-xl px-3 py-2">
        <span className="text-xs text-[var(--color-text-muted)]">Type a message...</span>
      </div>
    </div>
  </BentoCard>
)

/* ─── Card 5: Notes ─── */
const NotesCard = () => (
  <BentoCard delay={0.05} glowPosition="left" className="col-span-1 row-span-1">
    <div className="p-5 pb-0">
      <p className="text-sm text-[var(--color-text)]"><span className="font-bold">Take notes.</span>{" "}<span className="text-[var(--color-text-muted)]">Create documents to keep track of team resources.</span></p>
    </div>
    <div className="p-5 pt-4 space-y-2">
      <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Basic blocks</p>
      <div className="flex items-center gap-3 bg-[var(--color-bg-soft)] rounded-lg px-3 py-2">
        <span className="w-6 h-6 rounded bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] flex items-center justify-center text-[10px] font-bold">Aa</span>
        <div><p className="text-sm text-[var(--color-text)]">Text</p><p className="text-[10px] text-[var(--color-text-muted)]">Embed a sub-page inside page.</p></div>
      </div>
      <div className="flex items-center gap-3 bg-[var(--color-bg-soft)] rounded-lg px-3 py-2">
        <span className="w-6 h-6 rounded bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] flex items-center justify-center text-[10px]">&#9776;</span>
        <div><p className="text-sm text-[var(--color-text)]">To-do list</p><p className="text-[10px] text-[var(--color-text-muted)]">Track tasks with a to-do list.</p></div>
      </div>
      <div className="flex items-center gap-3 bg-[var(--color-bg-soft)] rounded-lg px-3 py-2">
        <span className="w-6 h-6 rounded bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] flex items-center justify-center text-[10px]">&#128279;</span>
        <div><p className="text-sm text-[var(--color-text)]">Link to page</p></div>
      </div>
    </div>
  </BentoCard>
)

/* ─── Card 6: Sync ─── */
/* Pre-computed positions to avoid hydration mismatch from Math.sin/cos */
const ORBIT_AVATARS: { hue: number; top: string; left: string }[] = [
  { hue: 200, top: "50%",    left: "92%" },
  { hue: 230, top: "86.38%", left: "71%" },
  { hue: 260, top: "86.38%", left: "29%" },
  { hue: 290, top: "50%",    left: "8%" },
  { hue: 320, top: "13.62%", left: "29%" },
  { hue: 350, top: "13.62%", left: "71%" },
]

const SyncCard = () => (
  <BentoCard delay={0.12} glowPosition="center" className="col-span-1 lg:col-span-2 row-span-1">
    <div className="p-5 pb-0">
      <p className="text-sm text-[var(--color-text)]"><span className="font-bold">Sync in real time.</span>{" "}<span className="text-[var(--color-text-muted)]">Connect with your team instantly to monitor progress and track updates.</span></p>
    </div>
    <div className="p-5 pt-4 flex items-center justify-center min-h-[160px]">
      <div className="relative w-48 h-48">
        {/* Central icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-[var(--color-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>
          </div>
        </div>
        {/* Orbiting avatars */}
        {ORBIT_AVATARS.map((av, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 rounded-full border border-[var(--color-border)] shadow-lg"
            style={{
              background: `hsl(${av.hue},50%,40%)`,
              top: av.top,
              left: av.left,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>
  </BentoCard>
)

/* ─── Card 7: Projects ─── */
const ProjectsCard = () => (
  <BentoCard delay={0.2} glowPosition="bottom-right" className="col-span-1 row-span-1">
    <div className="p-5 pb-0">
      <p className="text-sm text-[var(--color-text)]"><span className="font-bold">Manage projects.</span>{" "}<span className="text-[var(--color-text-muted)]">Customize your workspace to fit the needs of your teams.</span></p>
    </div>
    <div className="p-5 pt-4">
      <div className="bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-xl p-4 text-[var(--color-text)] shadow-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-sm">Marketing</span>
          <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] mb-2">Strategic digital campaign</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-[var(--color-text-muted)]">6 members</span>
          <AvatarStack count={3} />
          <span className="text-[10px] text-[var(--color-text-muted)]">+2</span>
        </div>
        <div className="space-y-1.5 text-xs text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-2"><span className="text-[var(--color-text-muted)]">&#9776;</span> General information</div>
          <div className="flex items-center gap-2"><span className="text-[var(--color-text-muted)]">&#9679;</span> Communication</div>
          <div className="flex items-center gap-2"><span className="text-[var(--color-text-muted)]">&#9744;</span> Pages</div>
        </div>
      </div>
    </div>
  </BentoCard>
)

/* ─── Section 1 export ─── */
export function FeatureBentoGrid() {
  return (
    <section className="py-24 bg-[var(--color-bg)]">
      <Container>
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight mb-4">
            Built for founders who move fast
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Every tool your SaaS needs — task management, real-time collaboration, and project oversight — built into one cohesive platform from day one.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-auto">
          <div className="lg:col-span-1"><TaskCard /></div>
          <div className="lg:col-span-1"><PlannerCard /></div>
          <div className="lg:col-span-1"><DateCard /></div>
          <div className="lg:col-span-1"><ChatCard /></div>
          <div className="lg:col-span-1"><NotesCard /></div>
          <div className="lg:col-span-2"><SyncCard /></div>
          <div className="lg:col-span-1"><ProjectsCard /></div>
        </div>
      </Container>
    </section>
  )
}
