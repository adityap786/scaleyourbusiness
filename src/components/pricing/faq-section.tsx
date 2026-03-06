"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";

// Placeholder data - to be replaced with content from strategy document
const faqs = [
    {
        question: "What is the typical timeline for a project?",
        answer: "Most projects are completed within 4-8 weeks, depending on complexity and scope. We provide a detailed timeline during the kickoff."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, we offer 30 days of complimentary support for all projects to ensure everything runs smoothly."
    },
    {
        question: "Can I upgrade my package later?",
        answer: "Absolutely. You can start with a smaller package and upgrade as your business needs grow."
    },
    {
        question: "What technology stack do you use?",
        answer: "We primarily use Next.js, React, Node.js, and Supabase for modern, scalable applications."
    },
    {
        question: "Do you provide hosting setup?",
        answer: "Yes, we handle the complete deployment and hosting setup on platforms like Vercel or AWS."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-white py-24">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-200 hover:border-gray-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="flex items-center justify-between w-full p-6 text-left"
                                >
                                    <span className="text-lg font-medium text-gray-900 pr-8">{faq.question}</span>
                                    <div className={`shrink-0 h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                                        <Plus className="h-4 w-4 text-gray-500" />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
