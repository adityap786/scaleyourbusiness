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
import { AestheticTestimonials } from "@/components/ui/aesthetic-testimonials"
import { createClient } from "@/utils/supabase/server"

export const revalidate = 60 // Revalidate every 60s

export default async function Home() {
    const supabase = await createClient()
    const { data: projects } = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('is_featured_on_home', true)
        .order('order_index', { ascending: true })

    const formattedProjects = (projects || []).map((p) => ({
        id: p.id,
        title: p.title,
        subtitle: p.subtitle,
        category: p.category,
        brandColor: p.brand_color,
        brandBg: p.brand_bg,
        image: p.cover_image_url,
        href: `/work/${p.slug}`
    }))

    return (
        <main className="overflow-x-hidden bg-[var(--color-bg)]">
            <Hero />
            <PortfolioCarousel initialProjects={formattedProjects} />
            <TrustBuilder />
            <ServiceScrollStack />
            <ProcessTimeline />
            <StatsCounter />
            <VSLSection />
            <FeaturedCaseStudies />
            <AestheticTestimonials />
            <TextMarquee />
            <CTASection />
        </main>
    )
}
