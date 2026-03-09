const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

async function seed() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // Should ideally be service role key for insert bypassing RLS, but let's try

    // We are going to just output the raw JSON to copy-paste into Supabase dashboard if the script fails.
    const baseProjects = [
        {
            title: "Peak Nutrition",
            category: "Health & Fitness",
            brand_color: "#D9FA50",
            brand_bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            cover_image_url: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop",
            slug: "peak-nutrition",
            role: "Development", timeline: "2 Months", content_markdown: "## Peak Nutrition",
            is_featured_on_home: true
        },
        {
            title: "Doner & Gyros",
            category: "F&B Brand",
            brand_color: "#FF6B35",
            brand_bg: "linear-gradient(135deg, #1a0a00 0%, #2d1810 100%)",
            cover_image_url: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=800&auto=format&fit=crop",
            slug: "doner-gyros-india",
            role: "Design", timeline: "1 Month", content_markdown: "## Doner & Gyros",
            is_featured_on_home: true
        },
        {
            title: "Just Smile",
            subtitle: "Catering & Hospitality",
            category: "Hospitality",
            brand_color: "#F5C518",
            brand_bg: "linear-gradient(135deg, #1a1500 0%, #2d2200 100%)",
            cover_image_url: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
            slug: "just-smile-catering",
            role: "Full Stack", timeline: "3 Months", content_markdown: "## Just Smile",
            is_featured_on_home: true
        },
        {
            title: "Eggeto",
            subtitle: "India's 1st Instant Omelette",
            category: "E-Commerce",
            brand_color: "#FBBF24",
            brand_bg: "linear-gradient(135deg, #1c1607 0%, #292011 100%)",
            cover_image_url: "https://images.unsplash.com/photo-1498837167922-41c53b4f0f67?q=80&w=800&auto=format&fit=crop",
            slug: "eggeto",
            role: "E-Commerce", timeline: "4 Months", content_markdown: "## Eggeto",
            is_featured_on_home: true
        },
        {
            title: "BH Hotels",
            category: "Hotel & Stays",
            brand_color: "#C9A96E",
            brand_bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1510 100%)",
            cover_image_url: "https://images.unsplash.com/photo-1542314831-c6a420325142?q=80&w=800&auto=format&fit=crop",
            slug: "bh-hotels",
            role: "Web App", timeline: "2 Months", content_markdown: "## BH Hotels",
            is_featured_on_home: true
        },
        {
            title: "Amrapali AI",
            category: "AI Lead Gen",
            brand_color: "#818CF8",
            brand_bg: "linear-gradient(135deg, #0f0a1e 0%, #1a1030 100%)",
            cover_image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            slug: "amrapali-ai-leads",
            role: "AI Automation", timeline: "3 Months", content_markdown: "## Amrapali AI",
            is_featured_on_home: true
        },
    ]

    const supabase = createClient(supabaseUrl, supabaseKey)

    console.log("Attempting to insert projects using generic client...")
    const { data, error } = await supabase.from('portfolio_projects').insert(baseProjects).select()

    if (error) {
        console.error("Failed to insert via API (likely RLS error since we don't have the service key).")
        console.error(error.message)
        console.log("\nIf this fails, manually add a project via http://localhost:3000/admin/portfolio/new to test the UI.")
    } else {
        console.log("Successfully seeded database!")
    }
}

seed()
