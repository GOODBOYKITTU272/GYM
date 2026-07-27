-- 016: Row Level Security (docs/05-Backend-Schema.md §18)
--
-- SCOPE DEVIATION FROM §18, DELIBERATE:
-- §18 lists 12 tables. This migration enables RLS on all 21. In Supabase,
-- PostgREST exposes every table in `public` to the anon key, and the anon key
-- is public by design (it ships to browsers). A table without RLS is therefore
-- world-readable. Leaving audit_logs, grocery_receipts, restaurant_logs,
-- water_logs, product_corrections, admin_reviews or voice_provider_metrics
-- without RLS would publish them. RLS is enabled everywhere instead.
--
-- ACCESS MODEL:
-- Telegram end users have no Supabase Auth session. The bot and workers act
-- through the service_role key, which bypasses RLS entirely (§18.7). These
-- policies therefore govern the admin dashboard and any future authenticated
-- web session. A table with RLS on and no matching policy denies everything to
-- anon/authenticated, which is the intended default for audit_logs.

alter table users enable row level security;
alter table user_profiles enable row level security;
alter table user_events enable row level security;
alter table voice_events enable row level security;
alter table voice_provider_metrics enable row level security;
alter table food_logs enable row level security;
alter table water_logs enable row level security;
alter table products enable row level security;
alter table product_variants enable row level security;
alter table product_logs enable row level security;
alter table product_corrections enable row level security;
alter table restaurant_logs enable row level security;
alter table grocery_receipts enable row level security;
alter table reminders enable row level security;
alter table reminder_events enable row level security;
alter table behavior_patterns enable row level security;
alter table weekly_reports enable row level security;
alter table admin_reviews enable row level security;
alter table consent_settings enable row level security;
alter table privacy_requests enable row level security;
alter table audit_logs enable row level security;

-- ---------------------------------------------------------------- identity

create policy "Users read own row" on users
  for select using (id = current_app_user_id());
create policy "Users update own row" on users
  for update using (id = current_app_user_id())
  with check (id = current_app_user_id());
create policy "Admins read all users" on users
  for select using (is_admin());
-- Role changes and user deletion are super_admin only (§17.3).
create policy "Super admins manage users" on users
  for all using (has_role(array['super_admin']::user_role[]))
  with check (has_role(array['super_admin']::user_role[]));

create policy "Users manage own profile" on user_profiles
  for all using (user_id = current_app_user_id())
  with check (user_id = current_app_user_id());
create policy "Admins read profiles" on user_profiles
  for select using (is_admin());

-- ------------------------------------------------------------ user-owned
-- Same shape for every table keyed by user_id: the owner has full access,
-- admins may read for support and review.

create policy "Users manage own events" on user_events
  for all using (user_id = current_app_user_id())
  with check (user_id = current_app_user_id());
create policy "Admins read events" on user_events
  for select using (is_admin());

create policy "Users manage own voice events" on voice_events
  for all using (user_id = current_app_user_id())
  with check (user_id = current_app_user_id());
create policy "Admins read voice events" on voice_events
  for select using (is_admin());

create policy "Users manage own food logs" on food_logs
  for all using (user_id = current_app_user_id())
  with check (user_id = current_app_user_id());
create policy "Admins read food logs" on food_logs
  for select using (is_admin());

create policy "Users manage own water logs" on water_logs
  for all using (user_id = current_app_user_id())
  with check (user_id = current_app_user_id());
create policy "Admins read water logs" on water_logs
  for select using (is_admin());

create policy "Users manage own product logs" on product_logs
  for all using (user_id = current_app_user_id())
  with check (user_id = current_app_user_id());
create policy "Admins read product logs" on product_logs
  for select using (is_admin());

create policy "Users manage own restaurant logs" on restaurant_logs
  for all using (user_id = current_app_user_id())
  with check (user_id = current_app_user_id());
create policy "Admins read restaurant logs" on restaurant_logs
  for select using (is_admin());

create policy "Users manage own grocery receipts" on grocery_receipts
  for all using (user_id = current_app_user_id())
  with check (user_id = current_app_user_id());
create policy "Admins read grocery receipts" on grocery_receipts
  for select using (is_admin());

create policy "Users manage own reminders" on reminders
  for all using (user_id = current_app_user_id())
  with check (user_id = current_app_user_id());
create policy "Admins read reminders" on reminders
  for select using (is_admin());

create policy "Users manage own reminder events" on reminder_events
  for all using (user_id = current_app_user_id())
  with check (user_id = current_app_user_id());
create policy "Admins read reminder events" on reminder_events
  for select using (is_admin());

create policy "Users read own behavior patterns" on behavior_patterns
  for select using (user_id = current_app_user_id());
create policy "Admins read behavior patterns" on behavior_patterns
  for select using (is_admin());

create policy "Users read own weekly reports" on weekly_reports
  for select using (user_id = current_app_user_id());
create policy "Admins read weekly reports" on weekly_reports
  for select using (is_admin());

create policy "Users manage own consent" on consent_settings
  for all using (user_id = current_app_user_id())
  with check (user_id = current_app_user_id());
create policy "Admins read consent" on consent_settings
  for select using (is_admin());

create policy "Users manage own privacy requests" on privacy_requests
  for all using (user_id = current_app_user_id())
  with check (user_id = current_app_user_id());
create policy "Admins read privacy requests" on privacy_requests
  for select using (is_admin());

-- ---------------------------------------------------------------- products
-- Shared reference data: readable by any admin role, writable by product admins.

create policy "Admins read products" on products
  for select using (is_admin());
create policy "Product admins manage products" on products
  for all using (has_role(array['super_admin','admin','product_admin']::user_role[]))
  with check (has_role(array['super_admin','admin','product_admin']::user_role[]));

create policy "Admins read product variants" on product_variants
  for select using (is_admin());
create policy "Product admins manage product variants" on product_variants
  for all using (has_role(array['super_admin','admin','product_admin']::user_role[]))
  with check (has_role(array['super_admin','admin','product_admin']::user_role[]));

create policy "Users read own corrections" on product_corrections
  for select using (user_id = current_app_user_id());
create policy "Admins read corrections" on product_corrections
  for select using (is_admin());
create policy "Reviewers manage corrections" on product_corrections
  for all using (has_role(array['super_admin','admin','reviewer','product_admin']::user_role[]))
  with check (has_role(array['super_admin','admin','reviewer','product_admin']::user_role[]));

-- ------------------------------------------------------------------- admin

create policy "Admins read review queue" on admin_reviews
  for select using (is_admin());
create policy "Reviewers manage review queue" on admin_reviews
  for all using (has_role(array['super_admin','admin','reviewer']::user_role[]))
  with check (has_role(array['super_admin','admin','reviewer']::user_role[]));

create policy "Admins read provider metrics" on voice_provider_metrics
  for select using (is_admin());

-- audit_logs: read-only to senior admins, and no INSERT/UPDATE/DELETE policy at
-- all. Writes come from the server via service_role. An append-only log that
-- clients can edit is not an audit log.
create policy "Senior admins read audit logs" on audit_logs
  for select using (has_role(array['super_admin','admin']::user_role[]));
