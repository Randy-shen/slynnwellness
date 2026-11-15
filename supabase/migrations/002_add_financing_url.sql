-- 002: Cherry patient-financing link.
-- Set in Admin → Settings → Financing. While empty, the "Payment Plans" nav tab,
-- footer link, sitemap entry, and the /payment-plans page (returns 404) are all hidden.
-- Run this BEFORE deploying the admin form change, otherwise saving settings fails
-- with "column financing_url does not exist".
alter table site_settings
  add column if not exists financing_url text default '';
