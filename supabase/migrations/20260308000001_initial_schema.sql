-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PORTFOLIO PROJECTS TABLE
create table if not exists public.portfolio_projects (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    title text not null,
    subtitle text,
    category text not null,
    role text not null,
    timeline text not null,
    stack jsonb default '[]'::jsonb,
    metrics jsonb default '[]'::jsonb,
    brand_color text not null,
    brand_bg text not null,
    cover_image_url text not null,
    reference_image_url text,
    project_url text,
    content_markdown text not null,
    is_featured_on_home boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. BLOGS TABLE
create table if not exists public.blogs (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    title text not null,
    description text not null,
    author text not null,
    cover_image_url text not null,
    tags jsonb default '[]'::jsonb,
    content_markdown text not null,
    is_published boolean default true,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. CONTACT LEADS TABLE
create table if not exists public.contact_leads (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    email text not null,
    phone text,
    website text,
    project_details text not null,
    budget text,
    area_of_interest text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. SEO METADATA TABLE
create table if not exists public.seo_metadata (
    id uuid primary key default gen_random_uuid(),
    path text unique not null,
    title text not null,
    description text not null,
    og_image_url text,
    keywords text,
    aeo_schema jsonb,
    geo_prompt_optimization text,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. USER SESSIONS TABLE
create table if not exists public.user_sessions (
    id uuid primary key default gen_random_uuid(),
    session_cookie_id text not null,
    path text not null,
    user_agent text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security (RLS) Configuration
-- For MVP speed: Admin panel operates entirely via Service Role Key (bypassing RLS) on the server,
-- or we use Authenticated Users (Super Admins). For now, we'll allow public reads on content tables,
-- and public inserts on contact_leads/user_sessions. Updates/Deletes are restricted.

-- Enable RLS
alter table public.portfolio_projects enable row level security;
alter table public.blogs enable row level security;
alter table public.contact_leads enable row level security;
alter table public.seo_metadata enable row level security;
alter table public.user_sessions enable row level security;

-- Public Select Policies
create policy "Allow public read-only access to portfolio_projects" on public.portfolio_projects for select using (true);
create policy "Allow public read-only access to blogs" on public.blogs for select using (is_published = true);
create policy "Allow public read-only access to seo_metadata" on public.seo_metadata for select using (true);

-- Public Insert Policies
create policy "Allow public insertion to contact_leads" on public.contact_leads for insert with check (true);
create policy "Allow public insertion to user_sessions" on public.user_sessions for insert with check (true);

-- Authenticated (Admin) Policies
create policy "Allow authenticated all access to portfolio_projects" on public.portfolio_projects for all to authenticated using (true) with check (true);
create policy "Allow authenticated all access to blogs" on public.blogs for all to authenticated using (true) with check (true);
create policy "Allow authenticated all access to contact_leads" on public.contact_leads for all to authenticated using (true) with check (true);
create policy "Allow authenticated all access to seo_metadata" on public.seo_metadata for all to authenticated using (true) with check (true);
create policy "Allow authenticated all access to user_sessions" on public.user_sessions for all to authenticated using (true) with check (true);
