"use client"

import React from "react"
import { motion } from "framer-motion"

const TECH_STACK = [
    { name: "Langchain", icon: "https://cdn.simpleicons.org/langchain/black" },
    { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/black" },
    { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/black" },
    { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic/black" },
    { name: "Groq", icon: null },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/black" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis/black" },
    { name: "Slack", icon: "https://cdn.simpleicons.org/slack/black" },
    { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/black" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/black" },
]

export function TechStackCarousel() {
    return (
        <div className="w-full py-16 bg-[var(--color-bg-soft)] overflow-hidden relative">
            <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
            
            <div className="text-center mb-12 relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 border border-[var(--color-border)] text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] bg-white/50 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand)] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand)]" />
                    </span>
                    POWERED BY MODERN AI INFRASTRUCTURE
                </div>
            </div>

            <div className="relative flex w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-r from-[var(--color-bg-soft)] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-l from-[var(--color-bg-soft)] to-transparent pointer-events-none" />
                
                {/* Framer Motion for smooth infinite marquee */}
                <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    className="flex w-max" 
                    style={{ gap: "16px", paddingLeft: "16px", paddingRight: "16px" }}
                >
                    {/* Render the array twice to ensure seamless looping at 50% */}
                    {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                        <div
                            key={`${tech.name}-${i}`}
                            className="flex items-center gap-4 px-8 py-5 bg-white border border-[var(--color-border)] min-w-[200px] justify-center hover:border-[var(--color-brand)]/40 hover:bg-[var(--color-brand)]/[0.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 group cursor-default"
                        >
                            {tech.icon ? (
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="h-6 w-6 object-contain opacity-30 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            ) : (
                                <span className="text-xl font-black text-[var(--color-text-muted)] group-hover:text-[var(--color-brand)] transition-colors duration-500">⚡</span>
                            )}
                            <span className="text-[13px] font-black tracking-[0.2em] uppercase text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors duration-500 mt-0.5">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
