"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { TrendingUp, ArrowUpRight, ArrowDownLeft, ArrowRightLeft, CheckCircle2, Rocket, BarChart3, Zap, Layers } from "lucide-react";

interface PhoneMockupProps {
    className?: string;
    children?: React.ReactNode;
    color?: "dark" | "light";
    tilt?: boolean;
}

export function PhoneMockup({ className, children, color = "dark", tilt = false }: PhoneMockupProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [rotX, setRotX] = useState(0);
    const [rotY, setRotY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setRotY(x * 12);
        setRotX(-y * 12);
    };

    const handleMouseLeave = () => {
        setRotX(0);
        setRotY(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn("relative mx-auto", className)}
        >
            <motion.div
                style={{ rotateX: rotX, rotateY: rotY }}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
                className="relative border-gray-900 bg-gray-900 border-[10px] rounded-[2.8rem] h-[640px] w-[310px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden"
            >
                {/* Physical side buttons */}
                <div className="h-[28px] w-[3px] bg-gray-800 absolute -left-[12px] top-[72px] rounded-l-lg" />
                <div className="h-[42px] w-[3px] bg-gray-800 absolute -left-[12px] top-[120px] rounded-l-lg" />
                <div className="h-[42px] w-[3px] bg-gray-800 absolute -left-[12px] top-[174px] rounded-l-lg" />
                <div className="h-[60px] w-[3px] bg-gray-800 absolute -right-[12px] top-[140px] rounded-r-lg" />

                <div className="rounded-[2.4rem] overflow-hidden w-full h-full bg-white relative">
                    {/* Dynamic Island */}
                    <div className="absolute top-0 inset-x-0 h-8 bg-transparent z-20 flex justify-center pt-2">
                        <div className="h-6 w-24 bg-black rounded-full flex items-center justify-center gap-2 px-2">
                            <div className="w-1 h-1 rounded-full bg-gray-800/50" />
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-900/30" />
                        </div>
                    </div>
                    <div className="w-full h-full overflow-hidden">
                        {children}
                    </div>
                </div>

                {/* Glass sheen overlay on hover */}
                <motion.div
                    style={{ opacity: (Math.abs(rotX) + Math.abs(rotY)) / 24 * 0.2 }}
                    className="absolute inset-0 rounded-[2.4rem] pointer-events-none bg-gradient-to-br from-white/30 to-transparent z-30"
                />
            </motion.div>
        </motion.div>
    );
}

// ── Philosophy Screen — Matches Screenshot 258 ─────────────────────────────
export function MockupPhilosophyUI() {
    return (
        <div className="flex flex-col h-full font-sans bg-[var(--color-bg)] text-[var(--color-text)] p-6 justify-center">
            <div className="space-y-1 mb-8">
                <p className="text-[20px] font-medium leading-tight">We don't make</p>
                <p className="text-[20px] font-medium leading-tight">apps.</p>
                <p className="text-[20px] font-medium leading-tight">We build category</p>
                <p className="text-[20px] font-serif italic leading-tight">winners.</p>
            </div>

            {/* Waveform visual placeholder */}
            <div className="h-24 w-full flex items-end gap-[2px] mb-8 overflow-hidden opacity-80">
                {Array.from({ length: 40 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-[var(--color-text)]/10 rounded-full w-[3px]"
                        style={{ height: `${(20 + Math.sin(i * 0.5) * 60 + ((Math.sin(i * 4.3) + 1) * 10)).toFixed(2)}%` }}
                    />
                ))}
            </div>

            <div className="flex gap-3 mb-12">
                <button className="flex-1 bg-[var(--color-text)] text-[var(--color-bg)] text-[13px] font-bold py-3.5 rounded-full">
                    Get Started
                </button>
                <button className="flex-1 border border-[var(--color-border)] text-[var(--color-text)] text-[13px] font-bold py-3.5 rounded-full">
                    Learn More
                </button>
            </div>

            <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-text)]/20" />
                <span className="text-[11px] font-medium tracking-widest uppercase opacity-40">Amsterdam</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-text)]/20" />
            </div>
        </div>
    );
}

// ── Idea & Scale Split Screen ──────────────────────────
export function MockupFinanceSplitUI() {
    return (
        <div className="flex flex-col h-full font-sans bg-white text-gray-900">
            {/* Top Half — visible in light section */}
            <div className="pt-12 px-5">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <p className="text-[11px] text-gray-400 font-medium leading-none mb-1">Project Workspace</p>
                        <p className="text-[16px] font-black tracking-tight text-gray-900">Vision OS</p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-blue-50 flex items-center justify-center overflow-hidden border border-blue-100">
                        <Rocket className="w-5 h-5 text-blue-600" />
                    </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                    <div className="px-3 py-1 rounded-lg bg-blue-600 text-white text-[10px] font-bold">Scaling</div>
                    <div className="px-3 py-1 rounded-lg bg-gray-100 text-gray-400 text-[10px] font-bold">In-Dev</div>
                    <button className="ml-auto text-blue-600 text-[10px] font-bold flex items-center gap-1">
                        <span className="text-[14px] leading-none">＋</span> New Idea
                    </button>
                </div>

                <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-black rounded-2xl p-5 text-white shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 noise-overlay opacity-20" />
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-6 w-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <Zap className="w-3 h-3 text-yellow-400" />
                            </div>
                            <span className="text-[11px] font-bold tracking-tight opacity-90">Active Growth</span>
                            <div className="ml-auto flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-[28px] font-black tracking-tighter">142,890 <span className="text-[14px] opacity-70 font-semibold">users</span></p>
                        </div>

                        <div className="flex justify-between items-center opacity-80">
                            <p className="text-[11px] font-mono tracking-wide">+12.4% this week</p>
                            <ArrowUpRight className="w-4 h-4 text-green-400" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Growth Activity */}
            <div className="px-5 py-8">
                <div className="flex justify-between items-center mb-5">
                    <p className="text-[13px] font-black text-gray-900">Traction Metrics</p>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 border border-gray-100">
                        <span className="text-[9px] font-bold text-gray-400">Monthly</span>
                    </div>
                </div>
                <div className="h-28 bg-gray-50/50 rounded-2xl p-4 flex items-end gap-2.5">
                    {[35, 45, 40, 60, 55, 80, 95].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-100/30 rounded-t-sm relative h-full overflow-hidden">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions / Modules */}
            <div className="px-5 space-y-4">
                <div className="flex justify-between items-center">
                    <p className="text-[13px] font-black text-gray-900">Product Modules</p>
                </div>
                <div className="grid grid-cols-2 gap-3 pb-8">
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                        <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center mb-2">
                            <Layers className="h-5 w-5 text-purple-600" />
                        </div>
                        <p className="text-[11px] font-bold text-gray-900">Features</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                        <div className="h-10 w-10 rounded-xl bg-green-50 flex items-center justify-center mb-2">
                            <BarChart3 className="h-5 w-5 text-green-600" />
                        </div>
                        <p className="text-[11px] font-bold text-gray-900">Analytics</p>
                    </div>
                </div>
            </div>

            {/* Bottom Tab Bar */}
            <div className="mt-auto border-t border-gray-50 bg-white/80 backdrop-blur-md px-6 py-4 flex justify-between items-center relative z-10">
                <div className="w-5 h-5 rounded bg-blue-600" />
                <div className="w-5 h-5 rounded bg-gray-200" />
                <div className="w-5 h-5 rounded bg-gray-200" />
                <div className="w-5 h-5 rounded bg-gray-200" />
            </div>
        </div>
    );
}

// ── Finance App UI (Standard) ──────────────────────────────────────────────
export function MockupFinanceUI() {
    return (
        <div className="flex flex-col h-full font-sans bg-white">
            <div className="pt-10" />
            <div className="flex items-center justify-between px-5 pb-3">
                <div>
                    <p className="text-[10px] text-gray-400 font-medium leading-none mb-1">Good morning,</p>
                    <p className="text-[14px] font-black tracking-tight text-gray-900">James Lee</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 overflow-hidden border-2 border-white shadow-md">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=James" alt="James" />
                </div>
            </div>

            <div className="flex items-center gap-2 px-5 mb-4">
                <div className="px-3 py-1 rounded-lg bg-blue-600 text-white text-[9px] font-bold">USD</div>
                <div className="px-3 py-1 rounded-lg bg-gray-100 text-gray-400 text-[9px] font-bold">IDR</div>
                <button className="ml-auto text-blue-600 text-[9px] font-bold flex items-center gap-1">
                    <span className="text-[12px] leading-none">＋</span> Add Currency
                </button>
            </div>

            <div className="mx-4 rounded-2xl overflow-hidden relative mb-5 shadow-xl">
                <div className="bg-gradient-to-br from-[#1e40af] via-[#3b82f6] to-[#60a5fa] p-5 text-white relative overflow-hidden group">
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-1.5 mb-3">
                            <div className="h-5 w-5 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>
                            <span className="text-[10px] font-bold tracking-tight opacity-90">Figen Card</span>
                        </div>
                        <div className="text-2xl font-black tracking-tighter mb-1">$2,736.15 <span className="text-[14px] opacity-70">✦</span></div>
                        <div className="text-[10px] text-blue-100/70 tracking-[0.2em] font-mono">•••• 5318</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-around px-5 mb-6">
                {[
                    { icon: ArrowUpRight, label: "Top-up", color: "text-blue-600 bg-blue-50" },
                    { icon: ArrowDownLeft, label: "Withdraw", color: "text-green-600 bg-green-50" },
                    { icon: ArrowRightLeft, label: "Transfer", color: "text-purple-600 bg-purple-50" },
                ].map(({ icon: Icon, label, color }) => (
                    <div key={label} className="flex flex-col items-center gap-1.5">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${color} shadow-sm border border-black/5`}>
                            <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{label}</span>
                    </div>
                ))}
            </div>

            <div className="flex-1 bg-gray-50/50 rounded-t-[2rem] px-5 pt-5 pb-2 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[12px] font-black text-gray-900">Transactions</span>
                    <span className="text-[10px] text-blue-600 font-bold">See all</span>
                </div>
                <div className="space-y-2.5">
                    {[
                        { name: "Apple Store", sub: "iPhone 12 Case", amount: "-$120.90", icon: "🍎", color: "bg-gray-100", time: "09:22 AM" },
                        { name: "Ilya Vasi", sub: "Dinner", amount: "+$50.00", icon: "👨‍💻", color: "bg-blue-50", time: "Yesterday" },
                    ].map((tx) => (
                        <div key={tx.name} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-50">
                            <div className={`h-9 w-9 rounded-xl ${tx.color} flex items-center justify-center text-base`}>{tx.icon}</div>
                            <div className="flex-1 min-w-0">
                                <div className="text-[11px] font-black text-gray-900">{tx.name}</div>
                                <div className="text-[9px] text-gray-400 font-medium">{tx.sub}</div>
                            </div>
                            <div className="text-right">
                                <div className={`text-[11px] font-black ${tx.amount.startsWith("+") ? "text-green-600" : "text-gray-900"}`}>{tx.amount}</div>
                                <div className="text-[8px] text-gray-400 font-medium">{tx.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="border-t border-gray-100 bg-white px-6 py-3 flex justify-between items-center">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-5 h-5 rounded ${i === 1 ? 'bg-blue-600' : 'bg-gray-100'}`} />
                ))}
            </div>
        </div>
    );
}

export function MockupActivityUI() { return <MockupFinanceUI />; }
export function MockupCRMUI() { return <MockupFinanceUI />; }
export function MockupAppUI() { return <MockupActivityUI />; }

// ── Chat App UI — Matches New Mockup ─────────────────────────────────────────
const SybAvatar = () => (
    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-100 overflow-hidden relative shadow-sm">
        <span className="text-[9px] font-black tracking-tighter text-black z-10 relative mt-0.5">
            <span className="text-blue-600">S</span>YB
        </span>
    </div>
);

const UserAvatar = () => (
    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200 overflow-hidden shadow-sm">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Milana" alt="User" className="w-full h-full object-cover" />
    </div>
);

export function MockupChatUI() {
    return (
        <div className="flex flex-col h-full font-sans bg-white text-gray-900 relative">
            {/* Status Bar */}
            <div className="h-14 w-full pt-4 px-7 flex justify-between items-center z-10">
                <span className="text-[12px] font-semibold tracking-wide text-gray-900">9:41</span>
                <div className="flex gap-1.5 items-center opacity-90 text-gray-900">
                    <div className="flex items-end gap-[1.5px] h-2.5">
                        <div className="w-[2.5px] h-1 bg-gray-900 rounded-sm" />
                        <div className="w-[2.5px] h-1.5 bg-gray-900 rounded-sm" />
                        <div className="w-[2.5px] h-2 bg-gray-900 rounded-sm" />
                        <div className="w-[2.5px] h-2.5 bg-gray-900 rounded-sm" />
                    </div>
                    <div className="w-4 h-2.5 rounded-sm border border-gray-900/80 p-[1px] relative flex items-center">
                        <div className="w-[2px] h-[3px] bg-gray-900 absolute -right-[3px] rounded-r-sm" />
                        <div className="w-full h-full bg-gray-900 rounded-[1px]" />
                    </div>
                </div>
            </div>

            <div className="flex-1 px-4 flex flex-col gap-3.5 mt-2 text-[12.5px] overflow-hidden pb-8 tracking-wide">
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex gap-2 items-end">
                    <SybAvatar />
                    <div className="bg-[#8B5CF6] text-white px-4 py-2.5 rounded-[1.2rem] rounded-bl-sm max-w-[80%] shadow-md">
                        <p className="font-semibold mb-1 opacity-90 text-[10px] uppercase tracking-wider">Yo, Matvii</p>
                        <p className="leading-snug">Have you heard of SYB?</p>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex gap-2 items-end justify-end mt-1">
                    <div className="bg-[#E5E7EB] text-[#111] px-4 py-2.5 rounded-[1.2rem] rounded-br-sm max-w-[80%] text-right shadow-md">
                        <p className="font-semibold mb-1 opacity-70 text-[10px] uppercase tracking-wider">Hi, Milana</p>
                        <p className="leading-snug font-medium">No, I haven't. What is it?</p>
                    </div>
                    <UserAvatar />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} className="flex gap-2 items-end mt-1">
                    <SybAvatar />
                    <div className="bg-[#8B5CF6] text-white px-4 py-2.5 rounded-[1.2rem] rounded-bl-sm max-w-[80%] shadow-md">
                        <p className="leading-snug">It's an app for managing your business growth.</p>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.0 }} className="flex gap-2 items-end">
                    <SybAvatar />
                    <div className="bg-[#8B5CF6] text-white p-3 rounded-[1.2rem] rounded-bl-sm max-w-[80%] w-full shadow-lg">
                        <div className="bg-white rounded-[1rem] p-3 mb-2.5 flex items-center justify-center relative h-28 overflow-hidden shadow-inner">
                            <div className="absolute top-2.5 right-2.5 w-6 h-6 bg-[#8B5CF6]/15 rounded-full flex items-center justify-center">
                                <span className="text-[#8B5CF6] text-[10px] font-black">🔗</span>
                            </div>
                            <div className="w-12 h-12 flex items-center justify-center drop-shadow-md">
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#8B5CF6" />
                                            <stop offset="100%" stopColor="#D9FA50" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M5 3L19 12L5 21V3Z" stroke="url(#grad1)" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
                                </svg>
                            </div>
                        </div>
                        <p className="px-1 text-[12px] font-medium tracking-wide">Check it out 😍</p>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.6 }} className="flex gap-2 items-end justify-end mt-1">
                    <div className="bg-[#E5E7EB] text-[#111] px-4 py-2.5 rounded-[1.2rem] rounded-br-sm max-w-[80%] text-right shadow-md">
                        <p className="font-semibold mb-1 opacity-70 text-[10px] uppercase tracking-wider">Wow 😲😲😲</p>
                        <p className="leading-snug font-medium">It looks very convenient and modern. I want to try it.</p>
                    </div>
                    <UserAvatar />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.2 }} className="flex gap-2 items-end mt-1">
                    <SybAvatar />
                    <div className="bg-[#8B5CF6] text-white px-4 py-2.5 rounded-[1.2rem] rounded-bl-sm max-w-[80%] shadow-md">
                        <p className="leading-snug">Really cool App 😎</p>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/10 rounded-full" />
        </div>
    )
}
