-- 010: Reminders and reminder occurrences (docs/05-Backend-Schema.md §10)

create table reminders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,

  habit_name text not null,
  reminder_type text not null,
  frequency text not null,
  schedule_json jsonb not null default '{}'::jsonb,
  reminder_time time,
  timezone text not null default 'Asia/Kolkata',

  active boolean not null default true,

  created_from event_source not null,
  source_event_id uuid references user_events(id) on delete set null,

  last_sent_at timestamptz,
  next_run_at timestamptz,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table reminder_events (
  id uuid primary key default gen_random_uuid(),
  reminder_id uuid not null references reminders(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,

  scheduled_at timestamptz not null,
  sent_at timestamptz,

  user_action reminder_action not null default 'no_response',
  action_at timestamptz,
  snooze_until timestamptz,

  telegram_message_id text,

  created_at timestamptz not null default now()
);
