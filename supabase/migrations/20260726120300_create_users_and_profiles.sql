-- 003: Identity tables (docs/05-Backend-Schema.md §4)

create table users (
  id uuid primary key default gen_random_uuid(),

  telegram_user_id text unique,
  telegram_chat_id text,
  telegram_username text,
  telegram_first_name text,
  telegram_last_name text,

  email text unique,
  full_name text,

  role user_role not null default 'telegram_user',

  timezone text not null default 'Asia/Kolkata',
  language_preference text not null default 'en',
  is_active boolean not null default true,

  last_seen_at timestamptz,
  onboarded_at timestamptz,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table user_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,

  primary_goal text,
  secondary_goals text[] default '{}',

  diet_type text,
  allergies jsonb not null default '[]'::jsonb,
  disliked_foods jsonb not null default '[]'::jsonb,
  preferred_foods jsonb not null default '[]'::jsonb,

  health_notes text,
  medical_disclaimer_acknowledged boolean not null default false,

  quiet_hours_start time,
  quiet_hours_end time,

  privacy_mode text not null default 'normal',

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique(user_id)
);
