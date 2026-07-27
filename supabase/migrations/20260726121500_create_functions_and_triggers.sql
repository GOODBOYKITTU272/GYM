-- 015: Helper functions and triggers (docs/05-Backend-Schema.md §18.1-18.3, §20.1)
--
-- Ordering deviation from §22: the doc lists functions (017) after RLS (015).
-- RLS policies call these functions, so they must exist first.
--
-- SECURITY DEFINER is required, not optional. Each helper reads from `users`,
-- and `users` itself has RLS policies that call these helpers. Without
-- SECURITY DEFINER, Postgres raises "infinite recursion detected in policy".
-- search_path is pinned to defeat search_path hijacking, which SECURITY DEFINER
-- would otherwise expose.

create or replace function current_app_user_id()
returns uuid
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select id from users where email = auth.jwt() ->> 'email' limit 1;
$$;

create or replace function is_admin()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from users
    where email = auth.jwt() ->> 'email'
      and role in ('super_admin', 'admin', 'reviewer', 'product_admin', 'support', 'read_only')
  );
$$;

create or replace function has_role(required_roles user_role[])
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1
    from users
    where email = auth.jwt() ->> 'email'
      and role = any(required_roles)
  );
$$;

-- These run as the definer, so revoke from anon: only signed-in sessions
-- should be probing role membership.
revoke execute on function current_app_user_id() from anon;
revoke execute on function is_admin() from anon;
revoke execute on function has_role(user_role[]) from anon;

-- updated_at maintenance (§20.1)
create or replace function set_updated_at()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_users_updated_at before update on users
  for each row execute function set_updated_at();
create trigger set_user_profiles_updated_at before update on user_profiles
  for each row execute function set_updated_at();
create trigger set_user_events_updated_at before update on user_events
  for each row execute function set_updated_at();
create trigger set_voice_events_updated_at before update on voice_events
  for each row execute function set_updated_at();
create trigger set_food_logs_updated_at before update on food_logs
  for each row execute function set_updated_at();
create trigger set_products_updated_at before update on products
  for each row execute function set_updated_at();
create trigger set_product_variants_updated_at before update on product_variants
  for each row execute function set_updated_at();
create trigger set_reminders_updated_at before update on reminders
  for each row execute function set_updated_at();
create trigger set_weekly_reports_updated_at before update on weekly_reports
  for each row execute function set_updated_at();
create trigger set_admin_reviews_updated_at before update on admin_reviews
  for each row execute function set_updated_at();
create trigger set_consent_settings_updated_at before update on consent_settings
  for each row execute function set_updated_at();
