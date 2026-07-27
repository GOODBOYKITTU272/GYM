-- 017: Storage buckets (docs/05-Backend-Schema.md §15)
-- Every bucket is private. §15.3: public access disabled by default.
-- product-images is listed as "No or controlled" in the doc; private is chosen,
-- since a signed URL can always be issued but a leaked public bucket cannot be
-- un-leaked.

insert into storage.buckets (id, name, public)
values
  ('voice-temp',     'voice-temp',     false),
  ('food-photos',    'food-photos',    false),
  ('receipt-images', 'receipt-images', false),
  ('menu-images',    'menu-images',    false),
  ('product-images', 'product-images', false),
  ('exports',        'exports',        false)
on conflict (id) do nothing;

-- No storage RLS policies are created here. With none, only service_role can
-- read or write these objects, which matches the MVP: the bot and workers
-- handle all media server-side. Per-user browser access would need policies
-- keyed on the {user_id}/... path convention from §15.2.
