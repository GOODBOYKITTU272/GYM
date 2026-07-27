-- 013: Consent, privacy requests, audit log (docs/05-Backend-Schema.md §13-14)
-- Hard rule from §13.1: allow_partner_sharing defaults to false. No insurance or
-- wellness partner sharing without explicit opt-in.
-- store_raw_audio defaults to false to match the delete-audio-after-transcription rule.

create table consent_settings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,

  store_transcripts boolean not null default true,
  store_raw_audio boolean not null default false,
  store_photos boolean not null default false,

  allow_product_personalization boolean not null default true,
  allow_behavior_insights boolean not null default true,
  allow_aggregated_analytics boolean not null default false,
  allow_research boolean not null default false,
  allow_partner_sharing boolean not null default false,

  consent_version text not null default 'v1',

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique(user_id)
);

create table privacy_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,

  request_type text not null,
  status text not null default 'pending',

  requested_at timestamptz not null default now(),
  completed_at timestamptz,
  requested_from event_source not null default 'telegram_text',

  admin_notes text,
  handled_by uuid references users(id) on delete set null
);

create table audit_logs (
  id uuid primary key default gen_random_uuid(),

  actor_user_id uuid references users(id) on delete set null,
  actor_role user_role,

  action text not null,
  entity_type text not null,
  entity_id uuid,

  before_data jsonb,
  after_data jsonb,

  ip_address text,
  user_agent text,

  created_at timestamptz not null default now()
);
