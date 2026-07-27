-- 004: Universal event timeline (docs/05-Backend-Schema.md §5)
-- occurred_at is the real-world event time; created_at is the insert time.

create table user_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,

  event_type event_type not null default 'unknown',
  source event_source not null,
  status event_status not null default 'received',

  raw_input text,
  ai_interpretation jsonb not null default '{}'::jsonb,

  occurred_at timestamptz not null default now(),
  timezone text not null default 'Asia/Kolkata',

  inferred_meal_type text,
  location_label text,
  location_data jsonb not null default '{}'::jsonb,

  confidence_score numeric(4,3),
  error_message text,

  parent_event_id uuid references user_events(id) on delete set null,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
