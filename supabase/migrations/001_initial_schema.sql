-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Services table
create table if not exists services (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  category text not null check (category in ('medical-aesthetic', 'wellness', 'skin-scalp-care')),
  short_description text not null,
  full_description text not null,
  benefits text[] not null default '{}',
  price text,
  image_url text,
  display_order integer not null default 1,
  is_visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Price list table (can be separate from services for more granular pricing)
create table if not exists price_list (
  id uuid primary key default uuid_generate_v4(),
  service_id uuid references services(id) on delete cascade,
  service_name text not null,
  category text not null,
  price text not null,
  description text,
  display_order integer not null default 1,
  is_visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Testimonials table
create table if not exists testimonials (
  id uuid primary key default uuid_generate_v4(),
  client_name text not null,
  rating integer not null check (rating between 1 and 5),
  content text not null,
  service text,
  is_visible boolean not null default true,
  created_at timestamptz not null default now()
);

-- Contact submissions table
create table if not exists contact_submissions (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  service_interest text,
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

-- Memberships table (for tracking signups)
create table if not exists membership_signups (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  tier text not null check (tier in ('silver', 'gold', 'platinum')),
  status text not null default 'pending' check (status in ('pending', 'active', 'cancelled')),
  created_at timestamptz not null default now()
);

-- Updated at trigger
create or replace function handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger services_updated_at
  before update on services
  for each row execute function handle_updated_at();

create trigger price_list_updated_at
  before update on price_list
  for each row execute function handle_updated_at();

-- Row Level Security
alter table services enable row level security;
alter table price_list enable row level security;
alter table testimonials enable row level security;
alter table contact_submissions enable row level security;

-- Public read access for services, price_list, testimonials
create policy "Services are publicly readable" on services
  for select using (is_visible = true);

create policy "Price list is publicly readable" on price_list
  for select using (is_visible = true);

create policy "Testimonials are publicly readable" on testimonials
  for select using (is_visible = true);

-- Anyone can submit contact forms
create policy "Anyone can submit contact forms" on contact_submissions
  for insert with check (true);

-- Authenticated users (admins) have full access
create policy "Admins have full access to services" on services
  for all using (auth.role() = 'authenticated');

create policy "Admins have full access to price_list" on price_list
  for all using (auth.role() = 'authenticated');

create policy "Admins have full access to testimonials" on testimonials
  for all using (auth.role() = 'authenticated');

create policy "Admins can read contact submissions" on contact_submissions
  for select using (auth.role() = 'authenticated');
