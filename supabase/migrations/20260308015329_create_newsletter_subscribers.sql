create table if not exists public.newsletter_subscribers (
    id uuid default gen_random_uuid() primary key,
    email text not null unique,
    status text default 'active'::text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.newsletter_subscribers enable row level security;

-- Policies
create policy "Allow authenticated users to read subscribers"
    on public.newsletter_subscribers
    for select
    to authenticated
    using (true);

create policy "Allow public to insert subscribers"
    on public.newsletter_subscribers
    for insert
    to public
    with check (true);
