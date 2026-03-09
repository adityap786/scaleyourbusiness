const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function migrateBlogs() {
    const blogDir = path.join(__dirname, '../src/content/blog');
    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

    for (const file of files) {
        const filePath = path.join(blogDir, file);
        const content = fs.readFileSync(filePath, 'utf8');

        // Extreme basic frontmatter parser
        const match = content.match(/^---\n([\s\S]+?)\n---\n([\s\S]+)$/);
        if (!match) continue;

        const frontmatterStr = match[1];
        const bodyStr = match[2];

        const extract = (key) => {
            const regex = new RegExp(`^${key}:\\s*(?:"([^"]+)"|'([^']+)'|(.+))$`, 'm');
            const m = frontmatterStr.match(regex);
            if (m) return m[1] || m[2] || m[3];
            return '';
        };

        const title = extract('title');
        const description = extract('description');
        const author = extract('author') || 'Engineering Team';
        const image = extract('image') || '/fallback-blog-image.jpg';

        // Extract tags array manually
        const tagsMatch = frontmatterStr.match(/tags:\n((?:\s+-\s+.*\n?)+)/);
        const tags = tagsMatch
            ? tagsMatch[1].split('\n').map(t => t.replace(/^\s+-\s+/, '').trim()).filter(Boolean)
            : [];

        const slug = file.replace('.mdx', '');

        const payload = {
            slug,
            title,
            description,
            author,
            cover_image_url: image,
            tags,
            content_markdown: bodyStr.trim(),
            is_published: true
        };

        console.log(`Inserting blog: ${slug}`);

        const { error } = await supabase.from('blogs').upsert([payload], { onConflict: 'slug' });
        if (error) {
            console.error(`Error inserting ${slug}:`, error.message);
        }
    }
    console.log("Blog migration complete!");
}

migrateBlogs();
