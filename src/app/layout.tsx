import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scaleyourbusiness.online"),
  title: {
    default: "Scale Your Business — Website, App, AI & Brand Agency for Founders",
    template: "%s | Scale Your Business",
  },
  description: "We help startup founders and brand managers build websites, apps, AI automations, and brand strategy. Serving India, Dubai, and the US.",
  keywords: [
    "website development agency India",
    "app development company",
    "AI automation for business",
    "SaaS development agency",
    "SaaS development agency",
    "digital marketing agency Dubai",
    "best web development company",
    "startup website design",
    "business automation",
    "Scale Your Business",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://scaleyourbusiness.online",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scaleyourbusiness.online",
    siteName: "Scale Your Business",
    title: "Scale Your Business — Website, App, AI & Brand Agency for Founders",
    description: "We help startup founders and brand managers build websites, apps, AI automations, and brand strategy. Serving India, Dubai, and the US.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Scale Your Business — Agency for Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale Your Business — Website, App, AI & Brand Agency for Founders",
    description: "We help startup founders and brand managers build websites, apps, AI automations, and brand strategy.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Scale Your Business',
    'alternateName': 'SYB Agency',
    'url': 'https://scaleyourbusiness.online',
    'logo': 'https://scaleyourbusiness.online/logo.png',
    'description': 'We build websites, apps, AI automations, SaaS products, and brand strategy for startup founders in India, Dubai, and the US. Over 30 brands scaled.',
    'areaServed': ['IN', 'AE', 'US'],
    'sameAs': [
      'https://www.linkedin.com/company/scaleyourbusiness',
      'https://clutch.co/profile/scale-your-business',
      'https://www.goodfirms.co/company/scale-your-business'
    ],
    'contactPoint': [
      { '@type': 'ContactPoint', 'contactType': 'sales', 'areaServed': 'IN' },
      { '@type': 'ContactPoint', 'contactType': 'sales', 'areaServed': 'AE' },
      { '@type': 'ContactPoint', 'contactType': 'sales', 'areaServed': 'US' }
    ]
  };

  return (
    <html lang="en" className={cn(inter.variable, dmSans.variable, "antialiased")}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] font-body min-h-screen selection:bg-[var(--color-brand)] selection:text-white">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
