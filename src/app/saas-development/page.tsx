import { Metadata } from 'next';
import { SaaSDevContent } from '@/components/services/saas-dev-content';

export const metadata: Metadata = {
    title: "SaaS Development Company India | Custom SaaS MVP Agency",
    description: "SYB is a top SaaS development agency in India. We build scalable SaaS platforms, custom software products, and complex MVPs for startups.",
    keywords: "SaaS development company India, SaaS MVP development agency, custom SaaS product development, startup SaaS platform development, SYB tech agency",
};

export default function SaaSDevelopmentPage() {
    return <SaaSDevContent />
}
