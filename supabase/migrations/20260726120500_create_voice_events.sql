-- 005: Voice schema (docs/05-Backend-Schema.md §6)
-- Privacy rule: raw audio is deleted after transcription by default;
-- raw_audio_deleted_at must be populated by the cleanup step.

create table voice_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  event_id uuid references user_events(id) on delete cascade,

  telegram_message_id text,
  telegram_file_id text,

  audio_temp_path text,
  audio_mime_type text,
  audio_duration_seconds int,
  audio_size_bytes int,

  provider_used text,
  provider_model text,

  raw_transcript text,
  cleaned_transcript text,
  detected_language text,

  confidence_score numeric(4,3),
  processing_time_ms int,

  status event_status not null default 'received',
  error_message text,

  raw_audio_deleted_at timestamptz,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table voice_provider_metrics (
  id uuid primary key default gen_random_uuid(),

  provider_name text not null,
  provider_model text,

  total_requests int not null default 0,
  success_count int not null default 0,
  failure_count int not null default 0,

  avg_latency_ms numeric,
  avg_confidence numeric(4,3),
  avg_cost numeric(10,6),

  period_start timestamptz not null,
  period_end timestamptz not null,

  created_at timestamptz not null default now()
);
