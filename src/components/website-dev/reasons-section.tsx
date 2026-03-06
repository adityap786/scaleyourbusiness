"use client";

import { Container } from "@/components/ui/container";
import { LayoutDashboard, Zap, BadgeDollarSign, Award, PenTool, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
    {
        icon: LayoutDashboard,
        title: "Design Board",
        description: "Request as many designs as you like on your own design board."
    },
    {
        icon: Zap,
        title: "Lightning Fast Delivery",
        description: "Receive your designs one at a time in just a few days."
    },
    {
        icon: BadgeDollarSign,
        title: "Fixed Project Rate",
        description: "No surprises. Pay the same fixed price for every milestone."
    },
    {
        icon: Award,
        title: "Award-Winning Designs",
        description: "Leave your customers in awe with award-winning designs."
    },
    {
        icon: PenTool,
        title: "Unlimited Revisions",
        description: "Revise your designs until you're 100% satisfied. No limits."
    },
    {
        icon: Fingerprint,
        title: "Unique & All Yours",
        description: "All your designs are crafted especially for you."
    }
];

export function ReasonsSection() {
    return (
        <section className="bg-white py-24 text-gray-900 overflow-hidden">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        Reasons you will <span className="font-serif italic font-light text-blue-600">love</span> us.
                    </h2>
                    <p className="text-lg text-gray-600">
                        Once you try Scale Your Business, you’ll never go anywhere else for design. Seriously.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center flex flex-col items-center group"
                        >
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-blue-100 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                                <reason.icon strokeWidth={1} className="h-16 w-16 text-gray-900 relative z-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
