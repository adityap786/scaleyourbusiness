-- Add SEO expansion fields to seo_metadata
alter table public.seo_metadata
add column if not exists canonical_url text,
add column if not exists open_graph_image text,
add column if not exists geo_prompt_optimization text;

-- Add comprehensive SEO fields to blogs
alter table public.blogs
add column if not exists seo_title text,
add column if not exists seo_description text,
add column if not exists seo_keywords text,
add column if not exists canonical_url text,
add column if not exists og_image_url text,
add column if not exists aeo_schema jsonb,
add column if not exists geo_prompt_optimization text;
