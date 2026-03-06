import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { TrustBuilder } from "@/components/home/trust-builder"
import { ServiceScrollStack } from "@/components/home/service-scroll-stack"
import { ProcessTimeline } from "@/components/home/process-timeline"
import { StatsCounter } from "@/components/home/stats-counter"
import { VSLSection } from "@/components/home/vsl-section"
import { PortfolioCarousel } from "@/components/home/portfolio-carousel"
import { FeaturedCaseStudies } from "@/components/home/featured-case-studies"
import { TextMarquee } from "@/components/home/text-marquee"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
    return (
        <main className="overflow-x-hidden bg-[var(--color-bg)]">
            <Header />
            <Hero />
            <TrustBuilder />
            <ServiceScrollStack />
            <ProcessTimeline />
            <StatsCounter />
            <VSLSection />
            <PortfolioCarousel />
            <FeaturedCaseStudies />
            <TextMarquee />
            <CTASection />
            <Footer />
        </main>
    )
}
