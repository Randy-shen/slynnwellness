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

-- Newsletter signups table
create table if not exists newsletter_signups (
  id uuid primary key default uuid_generate_v4(),
  first_name text not null,
  last_name text not null,
  email text unique not null,
  created_at timestamptz not null default now()
);

alter table newsletter_signups enable row level security;

create policy "Anyone can sign up" on newsletter_signups
  for insert with check (true);

create policy "Admins can read signups" on newsletter_signups
  for select using (auth.role() = 'authenticated');

-- Site settings table (single row)
create table if not exists site_settings (
  id uuid primary key default uuid_generate_v4(),
  -- Business Info
  business_name text not null default 'Slynn Wellness',
  tagline text not null default 'Rejuvenate. Restore. Radiate.',
  address text not null default '123 S Lake Ave, Suite 200',
  city text not null default 'Pasadena',
  state text not null default 'CA',
  zip text not null default '91101',
  phone text not null default '(626) 555-0100',
  email text not null default 'info@slynnwellness.com',
  -- Hours
  hours_weekday text not null default 'Mon–Fri: 9am–6pm',
  hours_saturday text not null default 'Sat: 10am–5pm',
  hours_sunday text not null default 'Sun: Closed',
  -- Booking
  booking_url text not null default 'https://booking.aestheticrecord.com/slynn-wellness',
  -- Social
  instagram_url text default '',
  facebook_url text default '',
  tiktok_url text default '',
  yelp_url text default '',
  -- Hero
  hero_video_url text default '',
  hero_poster_url text default '',
  hero_tagline text not null default 'Rejuvenate. Restore. Radiate.',
  -- Google Maps
  google_maps_url text default '',
  google_business_url text default '',
  -- Newsletter Popup
  popup_enabled boolean not null default true,
  popup_headline text not null default 'Get in the Know',
  popup_description text not null default 'Get exclusive offers and up to date educational information when you sign up to receive our emails.',
  updated_at timestamptz not null default now()
);

alter table site_settings enable row level security;

create policy "Site settings are publicly readable" on site_settings
  for select using (true);

create policy "Admins can update site settings" on site_settings
  for all using (auth.role() = 'authenticated');

-- Insert default row
insert into site_settings (id) values (uuid_generate_v4()) on conflict do nothing;

-- IV Therapies table
create table if not exists iv_therapies (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  purpose text not null,
  ingredients text[] not null default '{}',
  infusion_time text not null default '45–60 min',
  is_special boolean not null default false,
  note text,
  display_order integer not null default 0,
  price text default 'Starting at $150/session',
  is_visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table iv_therapies enable row level security;

create policy "IV therapies are publicly readable" on iv_therapies
  for select using (is_visible = true);

create policy "Admins have full access to iv_therapies" on iv_therapies
  for all using (auth.role() = 'authenticated');

create trigger iv_therapies_updated_at
  before update on iv_therapies
  for each row execute function handle_updated_at();

-- Assets table
create table if not exists assets (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  file_path text not null,
  public_url text not null,
  file_type text not null check (file_type in ('image', 'video')),
  file_size integer not null,
  folder text not null check (folder in ('images', 'videos')),
  created_at timestamptz not null default now()
);

alter table assets enable row level security;

create policy "Admins have full access to assets" on assets
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Storage policies for media bucket
create policy "Admins can upload to media bucket"
  on storage.objects for insert
  with check (
    bucket_id = 'media'
    and auth.role() = 'authenticated'
  );

create policy "Admins can delete from media bucket"
  on storage.objects for delete
  using (
    bucket_id = 'media'
    and auth.role() = 'authenticated'
  );

create policy "Admins can update media bucket"
  on storage.objects for update
  using (
    bucket_id = 'media'
    and auth.role() = 'authenticated'
  );
