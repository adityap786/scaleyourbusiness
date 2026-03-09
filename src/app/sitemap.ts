import { MetadataRoute } from 'next';
import { createClient } from '@/utils/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://scaleyourbusiness.online';
    const supabase = await createClient();

    // Core static routes
    const routes = [
        '',
        '/about',
        '/pricing',
        '/contact',
        '/work',
        '/careers',
        '/privacy-policy',
        '/terms-of-service',
        '/website-development',
        '/app-development',
        '/saas-development',
        '/ai-automation',
        '/cybersecurity',
        '/marketing-services',
        '/founder/atharv-tripathi',
        '/founder/aditya-pandit',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic blog routes
    const { data: blogs } = await supabase
        .from('blogs')
        .select('slug, created_at')
        .eq('is_published', true);

    const blogRoutes = (blogs || []).map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.created_at),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Dynamic portfolio routes (optional, but good for SEO)
    const { data: projects } = await supabase
        .from('portfolio_projects')
        .select('slug, created_at');

    const projectRoutes = (projects || []).map((project) => ({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: new Date(project.created_at),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes, ...projectRoutes];
}
