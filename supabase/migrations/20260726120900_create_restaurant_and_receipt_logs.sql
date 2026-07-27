-- 009: Restaurant and grocery schema (docs/05-Backend-Schema.md §9)
-- These features are V1.1, not initial MVP. The tables are created now so the
-- schema is complete and migration order stays stable; nothing writes to them yet.

create table restaurant_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  event_id uuid not null references user_events(id) on delete cascade,

  restaurant_name text,
  menu_source text,
  menu_url text,
  menu_image_path text,

  extracted_items jsonb not null default '[]'::jsonb,
  recommended_items jsonb not null default '[]'::jsonb,
  avoid_items jsonb not null default '[]'::jsonb,

  ai_summary text,
  confidence_score numeric(4,3),

  occurred_at timestamptz not null,
  created_at timestamptz not null default now()
);

create table grocery_receipts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  event_id uuid not null references user_events(id) on delete cascade,

  receipt_image_path text,
  store_name text,
  raw_ocr_text text,

  extracted_items jsonb not null default '[]'::jsonb,
  basket_summary text,
  missing_categories jsonb not null default '[]'::jsonb,
  recommendations jsonb not null default '[]'::jsonb,

  confidence_score numeric(4,3),

  occurred_at timestamptz not null,
  created_at timestamptz not null default now()
);
