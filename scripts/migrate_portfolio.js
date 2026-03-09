const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // using anon for brevity if RLS is true for insert, but wait, server role is better.
// Actually, since RLS is enabled for authenticated, we might need the service role key, but let's try anon if we have public insert (we don't for portfolio_projects).
// Wait, the schema has: 
// create policy "Allow authenticated all access to portfolio_projects" on public.portfolio_projects for all to authenticated using (true) with check (true);
// So anon key won't work for inserts unless we disable RLS or use Service Role Key.
// Let's print out instructions to run this via NextJS since it has access to the server client if we hit an API route.

const baseProjects = [
    {
        title: "Peak Nutrition",
        category: "Health & Fitness",
        brandColor: "#D9FA50",
        brandBg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop",
        slug: "peak-nutrition",
    },
    {
        title: "Doner & Gyros",
        category: "F&B Brand",
        brandColor: "#FF6B35",
        brandBg: "linear-gradient(135deg, #1a0a00 0%, #2d1810 100%)",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=800&auto=format&fit=crop",
        slug: "doner-gyros-india",
    },
    {
        title: "Just Smile",
        subtitle: "Catering & Hospitality",
        category: "Hospitality",
        brandColor: "#F5C518",
        brandBg: "linear-gradient(135deg, #1a1500 0%, #2d2200 100%)",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
        slug: "just-smile-catering",
    },
    {
        title: "Eggeto",
        subtitle: "India's 1st Instant Omelette",
        category: "E-Commerce",
        brandColor: "#FBBF24",
        brandBg: "linear-gradient(135deg, #1c1607 0%, #292011 100%)",
        image: "https://images.unsplash.com/photo-1498837167922-41c53b4f0f67?q=80&w=800&auto=format&fit=crop",
        slug: "eggeto",
    },
    {
        title: "BH Hotels",
        category: "Hotel & Stays",
        brandColor: "#C9A96E",
        brandBg: "linear-gradient(135deg, #0a0a0a 0%, #1a1510 100%)",
        image: "https://images.unsplash.com/photo-1542314831-c6a420325142?q=80&w=800&auto=format&fit=crop",
        slug: "bh-hotels",
    },
    {
        title: "Amrapali AI",
        category: "AI Lead Gen",
        brandColor: "#818CF8",
        brandBg: "linear-gradient(135deg, #0f0a1e 0%, #1a1030 100%)",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        slug: "amrapali-ai-leads",
    },
]

async function seed() {
    const supabase = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    // We will bypass RLS by temporarily executing via SQL or service role.
    // Actually, I'll write an API route to handle this securely using the server client which can bypass or we just create a temp SQL file.
}
