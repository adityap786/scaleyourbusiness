import { Metadata } from 'next';
import { SaaSDevContent } from '@/components/services/saas-dev-content';

export const metadata: Metadata = {
    title: 'Custom SaaS Development | ScaleYourBusiness',
    description: 'We architect highly scalable custom platform software, influencer marketplaces, and internal business operations tools. Turn your industry insight into recurring revenue.',
};

export default function SaaSDevelopmentPage() {
    return <SaaSDevContent />
}
