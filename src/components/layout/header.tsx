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
import { ArrowRight, X, Menu } from "lucide-react"

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
    {
        title: "Healthcare & Telemedicine",
        href: "/work/healthcare-telemedicine",
        description: "Web App & Cybersecurity Case Study",
    },
]

export function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled
                        ? "bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
                        : "bg-transparent border-b border-transparent"
                )}
            >
                <Container>
                    <div className="flex items-center justify-between h-[72px]">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 group"
                        >
                            <img 
                                src="https://res.cloudinary.com/dl4mlw1dl/image/upload/v1772485246/design-a-minimal--geometric-monogram-logo-that-sub_sicz5o.png" 
                                alt="Scale Your Business Logo" 
                                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                            <span
                                className={cn(
                                    "text-xl font-black transition-colors duration-300 tracking-tighter uppercase",
                                    scrolled ? "text-[var(--color-text)]" : "text-[var(--color-text)]"
                                )}
                            >
                                Scale Your Business
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <NavigationMenu className="hidden lg:block">
                            <NavigationMenuList>
                                {/* Services Mega Menu */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] font-medium text-sm">
                                        Services
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {services.map((service) => (
                                                <ListItem
                                                    key={service.title}
                                                    title={service.title}
                                                    href={service.href}
                                                >
                                                    {service.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Work/Portfolio Mega Menu */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] font-medium text-sm">
                                        Work
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4">
                                            {workItems.map((item) => (
                                                <ListItem
                                                    key={item.title}
                                                    title={item.title}
                                                    href={item.href}
                                                >
                                                    {item.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Blog */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)] focus:text-[var(--color-text)] focus:outline-none">
                                            Blog
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                {/* Pricing */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/pricing" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)] focus:text-[var(--color-text)] focus:outline-none">
                                            Pricing
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                {/* About */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)] focus:text-[var(--color-text)] focus:outline-none">
                                            About
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* CTA + Mobile */}
                        <div className="flex items-center gap-3">
                            <Link href="/contact" className="hidden sm:block">
                                <MagneticButton>
                                    <Button className="relative overflow-hidden group bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white px-6 shadow-[0_2px_20px_var(--glow-brand)] hover:shadow-[0_4px_30px_var(--glow-brand-strong)] transition-all duration-500">
                                        <span className="relative z-10 flex items-center gap-2">
                                            Get Started
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    </Button>
                                </MagneticButton>
                            </Link>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="lg:hidden p-2 hover:bg-[var(--color-bg-soft)] rounded-xl transition-colors"
                            >
                                {mobileOpen ? (
                                    <X className="w-6 h-6 text-[var(--color-text)]" />
                                ) : (
                                    <Menu className="w-6 h-6 text-[var(--color-text)]" />
                                )}
                            </button>
                        </div>
                    </div>
                </Container>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-2xl pt-20 px-6 lg:hidden"
                    >
                        <nav className="space-y-1">
                            {services.map((s, i) => (
                                <motion.div
                                    key={s.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={s.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-3 text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-brand)] transition-colors border-b border-[var(--color-border)]"
                                    >
                                        {s.title}
                                    </Link>
                                </motion.div>
                            ))}
                            {[
                                { title: "Portfolio", href: "/work" },
                                { title: "Blog", href: "/blog" },
                                { title: "Pricing", href: "/pricing" },
                                { title: "About", href: "/about" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (services.length + i) * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-3 text-lg font-medium text-[var(--color-text)] hover:text-[var(--color-brand)] transition-colors border-b border-[var(--color-border)]"
                                    >
                                        {item.title}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-6"
                            >
                                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                                    <Button className="w-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white shadow-[0_2px_20px_var(--glow-brand)]" size="lg">
                                        Get Started
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
