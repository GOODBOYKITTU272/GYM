-- 006: Food and hydration logs (docs/05-Backend-Schema.md §7)
-- Calories are deliberately optional: the product is pattern and next action,
-- not calorie counting.

create table food_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  event_id uuid not null references user_events(id) on delete cascade,

  meal_type text,
  foods jsonb not null default '[]'::jsonb,

  contains_sweet boolean not null default false,
  contains_fried boolean not null default false,
  contains_high_sodium boolean not null default false,
  contains_sugary_drink boolean not null default false,

  protein_quality text,
  vegetable_presence boolean,
  fiber_quality text,

  estimated_portion_text text,
  calorie_estimate numeric,
  macro_estimate jsonb not null default '{}'::jsonb,

  ai_summary text,
  ai_recommendation text,

  confidence_score numeric(4,3),

  occurred_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table water_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  event_id uuid references user_events(id) on delete cascade,

  amount_ml int,
  amount_text text,

  occurred_at timestamptz not null,
  created_at timestamptz not null default now()
);
