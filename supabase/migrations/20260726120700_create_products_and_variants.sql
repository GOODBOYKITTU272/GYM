-- 007: Product database (docs/05-Backend-Schema.md §8.1-8.2)

create table products (
  id uuid primary key default gen_random_uuid(),

  brand text,
  product_name text not null,
  normalized_name text not null,

  category text,
  subcategory text,

  barcode text,
  package_size text,

  ingredients text,
  nutrition jsonb not null default '{}'::jsonb,
  allergens jsonb not null default '[]'::jsonb,

  processing_level text,
  default_decision product_decision default 'unknown',

  source text not null default 'manual',
  verification_status text not null default 'unverified',

  image_url text,
  notes text,

  created_by uuid references users(id) on delete set null,
  verified_by uuid references users(id) on delete set null,
  verified_at timestamptz,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,

  variant_name text not null,
  normalized_variant_name text not null,

  barcode text,
  package_size text,

  ingredients text,
  nutrition jsonb not null default '{}'::jsonb,
  allergens jsonb not null default '[]'::jsonb,

  is_default boolean not null default false,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
