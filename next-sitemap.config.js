/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://scaleyourbusiness.online',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/admin', '/admin/*', '/api/*'],
    robotsTxtOptions: {
        additionalSitemaps: [],
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: ['/admin', '/api'] },
        ],
    },
    additionalPaths: async (config) => [
        // Core
        { loc: '/', priority: 1.0, changefreq: 'weekly' },
        { loc: '/about', priority: 0.8, changefreq: 'monthly' },
        { loc: '/contact', priority: 0.9, changefreq: 'monthly' },
        { loc: '/pricing', priority: 1.0, changefreq: 'monthly' },
        { loc: '/careers', priority: 0.5, changefreq: 'monthly' },
        { loc: '/blog', priority: 0.9, changefreq: 'daily' },

        // Services
        { loc: '/ai-automation', priority: 0.9, changefreq: 'weekly' },
        { loc: '/saas-development', priority: 0.9, changefreq: 'weekly' },
        { loc: '/website-development', priority: 0.9, changefreq: 'weekly' },
        { loc: '/app-development', priority: 0.9, changefreq: 'weekly' },
        { loc: '/brand-strategy', priority: 0.9, changefreq: 'weekly' },
        { loc: '/content-writing', priority: 0.9, changefreq: 'weekly' },

        // AEO Answer Pages (high-value for search)
        { loc: '/ai-automation-cost', priority: 0.9, changefreq: 'monthly' },
        { loc: '/saas-development-cost', priority: 0.9, changefreq: 'monthly' },
        { loc: '/app-development-cost', priority: 0.9, changefreq: 'monthly' },
        { loc: '/branding-cost-india', priority: 0.9, changefreq: 'monthly' },
        { loc: '/seo-cost-india', priority: 0.9, changefreq: 'monthly' },
        { loc: '/website-design-cost-dubai', priority: 0.9, changefreq: 'monthly' },
        { loc: '/app-development-cost-dubai', priority: 0.9, changefreq: 'monthly' },
        { loc: '/how-to-start-startup-india', priority: 0.9, changefreq: 'monthly' },
        { loc: '/startup-registration-india', priority: 0.9, changefreq: 'monthly' },
        { loc: '/best-payment-gateway-india', priority: 0.9, changefreq: 'monthly' },
        { loc: '/best-crm-for-small-business', priority: 0.9, changefreq: 'monthly' },
        { loc: '/website-cost-guide', priority: 0.9, changefreq: 'monthly' },

        // Work / Case Studies
        { loc: '/work', priority: 0.8, changefreq: 'weekly' },
        { loc: '/work/doner-gyros-india', priority: 0.7, changefreq: 'monthly' },
        { loc: '/work/nxtwave', priority: 0.7, changefreq: 'monthly' },
        { loc: '/work/tribe-stay', priority: 0.7, changefreq: 'monthly' },
        { loc: '/work/soshals', priority: 0.7, changefreq: 'monthly' },
        { loc: '/work/raviraj-realty', priority: 0.7, changefreq: 'monthly' },
        { loc: '/work/dental-clinic-marketing', priority: 0.7, changefreq: 'monthly' },
        { loc: '/work/natura', priority: 0.7, changefreq: 'monthly' },
        { loc: '/work/krux', priority: 0.7, changefreq: 'monthly' },
        { loc: '/work/kreate', priority: 0.7, changefreq: 'monthly' },
        { loc: '/work/proton', priority: 0.7, changefreq: 'monthly' },
    ]
}
