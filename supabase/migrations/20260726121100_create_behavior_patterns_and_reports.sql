-- 011: Behavior intelligence (docs/05-Backend-Schema.md §11)

create table behavior_patterns (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,

  pattern_type text not null,
  period_start date not null,
  period_end date not null,

  evidence jsonb not null default '[]'::jsonb,
  insight text not null,

  severity text not null default 'low',
  confidence_score numeric(4,3),

  shown_to_user boolean not null default false,
  shown_at timestamptz,

  created_at timestamptz not null default now()
);

create table weekly_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,

  week_start date not null,
  week_end date not null,

  food_summary text,
  product_summary text,
  habit_summary text,
  pattern_summary text,
  best_improvement text,
  next_week_focus text,

  full_report_json jsonb not null default '{}'::jsonb,

  status text not null default 'draft',
  sent_at timestamptz,
  telegram_message_id text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique(user_id, week_start, week_end)
);
