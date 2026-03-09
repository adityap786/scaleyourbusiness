const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// We'll give dummy images to those that don't have one
const DUMMY_IMAGE = "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop";
const DUMMY_COLOR = "#3b82f6";
const DUMMY_BG = "linear-gradient(135deg, #0a0a0a 0%, #1a1510 100%)";

async function extractAndSeed() {
    const workDir = path.join(__dirname, '../src/app/work');
    const dirs = fs.readdirSync(workDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    for (const slug of dirs) {
        const pagePath = path.join(workDir, slug, 'page.tsx');
        if (!fs.existsSync(pagePath)) continue;

        let content = fs.readFileSync(pagePath, 'utf8');

        // Extract props from <CaseStudyLayout ...>
        const getProp = (propName, isArray = false) => {
            if (isArray) {
                const arrMatch = content.match(new RegExp(`${propName}=\\{(\\[[\\s\\S]*?\\])\\}`));
                if (arrMatch) {
                    try {
                        // Very hacky JSON-like string eval
                        return eval(arrMatch[1]);
                    } catch (e) {
                        return [];
                    }
                }
                return [];
            } else {
                const strMatch = content.match(new RegExp(`${propName}=["']([^"']+)["']`));
                return strMatch ? strMatch[1] : '';
            }
        };

        const title = getProp('title') || slug.replace(/-/g, ' ');
        const subtitle = getProp('subtitle') || null;
        const role = getProp('role') || 'Development';
        const timeline = getProp('timeline') || 'Unknown';
        const stack = getProp('stack', true);
        const metrics = getProp('metrics', true);

        // Extract children JSX and convert to basic markdown
        let bodyMatch = content.match(/<CaseStudyLayout[^>]*>([\s\S]*?)<\/CaseStudyLayout>/);
        let markdown = '';
        if (bodyMatch) {
            let body = bodyMatch[1];
            body = body.replace(/<p>/g, '').replace(/<\/p>/g, '\n\n');
            body = body.replace(/<h2>/g, '## ').replace(/<\/h2>/g, '\n\n');
            body = body.replace(/<h3>/g, '### ').replace(/<\/h3>/g, '\n\n');
            body = body.replace(/<ul>/g, '').replace(/<\/ul>/g, '\n');
            body = body.replace(/<li>/g, '- ').replace(/<\/li>/g, '\n');
            body = body.replace(/<strong>/g, '**').replace(/<\/strong>/g, '**');
            body = body.replace(/<em>/g, '*').replace(/<\/em>/g, '*');
            body = body.replace(/&apos;/g, "'").replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"');
            body = body.replace(/<Image[\s\S]*?\/>/g, '[Image placeholder]');
            body = body.replace(/<div[^>]*>([\s\S]*?)<\/div>/g, '$1');
            // Cleanup extra spaces
            markdown = body.split('\n').map(line => line.trim()).filter(line => line.length > 0).join('\n\n');
        } else {
            markdown = `## ${title}\n\nCase study content.`;
        }

        console.log(`Processing: ${slug} (${title})`);

        // Check if project exists in db
        const { data: existing } = await supabase.from('portfolio_projects').select('*').eq('slug', slug).single();

        const payload = {
            slug,
            title,
            subtitle,
            category: 'Web Development', // Default
            role,
            timeline,
            stack,
            metrics,
            content_markdown: markdown,
            brand_color: DUMMY_COLOR,
            brand_bg: DUMMY_BG,
            cover_image_url: DUMMY_IMAGE,
            is_featured_on_home: false
        };

        if (existing) {
            console.log(`Updating existing: ${slug}`);
            await supabase.from('portfolio_projects').update({
                subtitle: payload.subtitle || existing.subtitle,
                role: payload.role || existing.role,
                timeline: payload.timeline || existing.timeline,
                stack: stack.length ? stack : existing.stack,
                metrics: metrics.length ? metrics : existing.metrics,
                content_markdown: markdown || existing.content_markdown
            }).eq('slug', slug);
        } else {
            console.log(`Inserting new: ${slug}`);
            const { error } = await supabase.from('portfolio_projects').insert([payload]);
            if (error) {
                console.error(`Failed to insert ${slug}:`, error.message);
            }
        }
    }
    console.log("Migration complete!");
}

extractAndSeed();
