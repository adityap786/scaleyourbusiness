import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import { PreloaderProvider } from "@/components/ui/preloader-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
  icons: {
    icon: "/SYB-favicon.svg",
    shortcut: "/SYB-favicon.svg",
    apple: "/SYB-favicon.svg",
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
    '@type': ['Organization', 'ProfessionalService'],
    'name': 'Scale Your Business',
    'alternateName': 'SYB Agency',
    'url': 'https://scaleyourbusiness.online',
    'logo': 'https://scaleyourbusiness.online/SYB-logo-dark-theme-1.png',
    'image': 'https://scaleyourbusiness.online/og-image.jpg',
    'description': 'Scale Your Business is a leading digital infrastructure agency in India specializing in software, automation, and digital growth systems for startups and enterprises across Delhi, Mumbai, Bangalore, and Hyderabad.',
    'areaServed': ['IN', 'AE', 'US'],
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN'
    },
    'priceRange': '$$$',
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
    <html lang="en" suppressHydrationWarning className={cn(inter.variable, dmSans.variable, "antialiased")}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[var(--color-bg)] text-[var(--color-text)] font-body min-h-screen selection:bg-[var(--color-brand)] selection:text-white">
        <SmoothScrollProvider>
          <PreloaderProvider>
            <Header />
            {children}
            <Footer />
          </PreloaderProvider>
        </SmoothScrollProvider>
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
