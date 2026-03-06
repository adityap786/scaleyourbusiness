"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, Minus } from "lucide-react"

interface FAQItemProps {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
    return (
        <div className="border-b border-[var(--color-border)] last:border-0">
            <button
                onClick={onClick}
                className="flex items-center justify-between w-full py-6 text-left group"
            >
                <span className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-brand)] transition-colors pr-8">
                    {question}
                </span>
                <span className="shrink-0 text-[var(--color-brand)]">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-[var(--color-text-secondary)] leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface FAQAccordionProps {
    items: { question: string; answer: string }[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <div className="w-full max-w-3xl mx-auto bg-[var(--color-bg-card)] rounded-3xl border border-[var(--color-border)] p-8 shadow-sm backdrop-blur-md">
            {items.map((item, index) => (
                <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    )
}
