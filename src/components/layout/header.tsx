"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { ArrowRight, X, Menu, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

const services = [
    {
        title: "Website Development",
        href: "/website-development",
        description: "Custom websites built with modern frameworks",
    },
    {
        title: "App Development",
        href: "/app-development",
        description: "iOS & Android native and cross-platform apps",
    },
    {
        title: "SaaS Development",
        href: "/saas-development",
        description: "Scalable SaaS products from MVP to enterprise",
    },
    {
        title: "AI Automation",
        href: "/ai-automation",
        description: "Intelligent automation and AI-powered solutions",
    },
    {
        title: "Cybersecurity",
        href: "/cybersecurity",
        description: "Pentesting & AI-driven threat defense",
    },
    {
        title: "Marketing Services",
        href: "/marketing-services",
        description: "AI Visuals, Content & Influencer Campaigns",
    },
]

const workItems = [
    {
        title: "Portfolio",
        href: "/work",
        description: "View our latest projects and case studies",
    },
]

export function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null)
    const pathname = usePathname()

    // Toggle logic for mobile accordions
    const toggleMobileCategory = (category: string) => {
        setExpandedMobileCategory(prev => prev === category ? null : category)
    }

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [mobileOpen])

    if (pathname?.startsWith('/admin') || pathname?.startsWith('/login')) {
        return null;
    }

    return (
        <>
            {/* Desktop / Core Floating Header */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed z-50 transition-all duration-700 ease-out",
                    scrolled
                        ? "top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] rounded-full bg-[var(--color-bg)]/60 backdrop-blur-2xl border border-[var(--color-border)]/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.05)]"
                        : "top-0 left-0 right-0 w-full bg-transparent border-b border-transparent"
                )}
            >
                <div className={cn(
                    "mx-auto flex items-center justify-between",
                    scrolled ? "h-[64px] px-6 md:px-8" : "h-[88px] px-6 max-w-7xl"
                )}>
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0 relative z-10">
                        <div className="relative w-10 h-10 flex flex-shrink-0 items-center justify-center">
                            <img
                                src="/SYB-logo-png.png"
                                alt="SYB Logo"
                                className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-5deg]"
                            />
                        </div>
                        <span className="hidden sm:block text-lg font-black tracking-tighter uppercase text-[var(--color-text)] whitespace-nowrap">
                            SYB
                        </span>
                    </Link>

                    {/* Central Desktop Navigation */}
                    <NavigationMenu className="hidden lg:flex lg:flex-1 lg:justify-center px-4">
                        <NavigationMenuList className="gap-1 lg:gap-2">
                            {/* Services Mega Menu */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-[var(--color-text)]/5 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] font-semibold text-[12px] xl:text-[13px] uppercase tracking-widest rounded-full transition-colors h-10 px-3 xl:px-5">
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-5 md:w-[500px] md:grid-cols-2 lg:w-[600px] rounded-3xl bg-[var(--color-bg)]/95 backdrop-blur-xl border border-[var(--color-border)]/50 shadow-2xl">
                                        {services.map((service) => (
                                            <ListItem key={service.title} title={service.title} href={service.href}>
                                                {service.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Work/Portfolio Mega Menu */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-[var(--color-text)]/5 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] font-semibold text-[12px] xl:text-[13px] uppercase tracking-widest rounded-full transition-colors h-10 px-3 xl:px-5">
                                    Work
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-5 rounded-3xl bg-[var(--color-bg)]/95 backdrop-blur-xl border border-[var(--color-border)]/50 shadow-2xl">
                                        {workItems.map((item) => (
                                            <ListItem key={item.title} title={item.title} href={item.href}>
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Direct Links */}
                            {[{ title: "Blog", href: "/blog" }, { title: "Pricing", href: "/pricing" }, { title: "About", href: "/about" }, { title: "Contact", href: "/contact" }].map(link => (
                                <NavigationMenuItem key={link.title}>
                                    <NavigationMenuLink asChild>
                                        <Link href={link.href} className="flex h-10 items-center justify-center rounded-full bg-transparent px-3 xl:px-5 text-[12px] xl:text-[13px] font-semibold uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-text)]/5 hover:text-[var(--color-text)]">
                                            {link.title}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4 shrink-0 relative z-10">
                        <Link href="/contact" className="hidden lg:block">
                            <MagneticButton>
                                <Button className="h-10 rounded-full px-6 bg-[var(--color-text)] text-[var(--color-bg)] hover:bg-[var(--color-text)]/90 font-bold uppercase tracking-wider text-[11px] shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
                                    Get Started
                                </Button>
                            </MagneticButton>
                        </Link>

                        {/* Mobile Toggle Button (Morphing) */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-full bg-[var(--color-text)]/5 hover:bg-[var(--color-text)]/10 transition-colors border border-[var(--color-border)]/50"
                        >
                            <motion.span
                                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="w-5 h-[1.5px] bg-[var(--color-text)] rounded-full origin-center"
                            />
                            <motion.span
                                animate={{ opacity: mobileOpen ? 0 : 1, width: mobileOpen ? 0 : 20 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="h-[1.5px] bg-[var(--color-text)] rounded-full"
                            />
                            <motion.span
                                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="w-5 h-[1.5px] bg-[var(--color-text)] rounded-full origin-center"
                            />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Premium Mobile Overlay Drawer */}
            <AnimatePresence mode="wait">
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-[var(--color-bg)] lg:hidden flex flex-col justify-start px-8 pt-32 pb-12 overflow-y-auto"
                    >
                        {/* Ambient Glow */}
                        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[var(--color-brand)]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                        <nav className="relative z-10 flex flex-col w-full max-w-sm mx-auto h-full mt-4">

                            {/* Main Navigation Links */}
                            <div className="flex flex-col gap-6">
                                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)] mb-2">Platform</span>

                                <MobileMenuLink title="About Us" href="/about" delay={0.1} onClick={() => setMobileOpen(false)} />
                                <MobileMenuLink title="Pricing Plans" href="/pricing" delay={0.15} onClick={() => setMobileOpen(false)} />
                                <MobileMenuLink title="Portfolio" href="/work" delay={0.2} onClick={() => setMobileOpen(false)} />
                                <MobileMenuLink title="Insights & Blog" href="/blog" delay={0.25} onClick={() => setMobileOpen(false)} />
                            </div>

                            <div className="h-px w-full bg-[var(--color-border)]/50 my-10" />

                            {/* Services List (Flat for elegance) */}
                            <div className="flex flex-col gap-5">
                                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)] mb-2">Our Capabilities</span>

                                {services.map((service, idx) => (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + (idx * 0.05), duration: 0.4 }}
                                    >
                                        <Link
                                            href={service.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="text-lg font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-brand)] transition-colors inline-block"
                                        >
                                            {service.title}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="mt-auto pt-16 pb-4"
                            >
                                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                                    <Button className="w-full h-14 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] font-bold uppercase tracking-widest text-[11px] shadow-[0_10px_30px_rgba(255,255,255,0.05)] hover:bg-[var(--color-text)]/90 transition-all group">
                                        Start Your Project
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

function MobileMenuLink({ title, href, delay, onClick }: { title: string, href: string, delay: number, onClick: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <Link
                href={href}
                onClick={onClick}
                className="group flex items-center justify-between"
            >
                <span className="text-3xl font-black tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-brand)] transition-colors">
                    {title}
                </span>
                <ArrowRight className="w-6 h-6 text-[var(--color-text-muted)] group-hover:text-[var(--color-brand)] group-hover:translate-x-1 transition-all" />
            </Link>
        </motion.div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-[var(--color-bg-soft)] hover:shadow-sm group",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-semibold leading-none text-[var(--color-text)] group-hover:text-[var(--color-brand)] transition-colors">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-[var(--color-text-secondary)]">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
