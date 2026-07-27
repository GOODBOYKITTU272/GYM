-- 008: Product lookups and corrections (docs/05-Backend-Schema.md §8.3-8.4)
-- Confidence is split: matched_confidence (did we identify the product?) is
-- distinct from recommendation_confidence (is the advice sound?).

create table product_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  event_id uuid not null references user_events(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  product_variant_id uuid references product_variants(id) on delete set null,

  query_text text not null,
  source event_source not null,

  decision product_decision not null default 'unknown',
  reason text,
  portion_guidance text,
  suggested_alternative text,

  matched_confidence numeric(4,3),
  recommendation_confidence numeric(4,3),

  occurred_at timestamptz not null,
  created_at timestamptz not null default now()
);

create table product_corrections (
  id uuid primary key default gen_random_uuid(),
  product_log_id uuid references product_logs(id) on delete cascade,
  user_id uuid references users(id) on delete set null,

  correction_source text not null,

  original_product_id uuid references products(id) on delete set null,
  corrected_product_id uuid references products(id) on delete set null,

  original_text text,
  corrected_text text,
  correction_notes text,

  status review_status not null default 'pending',
  reviewed_by uuid references users(id) on delete set null,
  reviewed_at timestamptz,

  created_at timestamptz not null default now()
);
