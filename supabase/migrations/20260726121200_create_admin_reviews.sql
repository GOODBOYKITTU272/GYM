-- 012: Admin review queue (docs/05-Backend-Schema.md §12)
-- Populated by application logic when confidence falls below the configured
-- threshold (default 0.70, see AI_CONFIDENCE_THRESHOLD). Deliberately not a
-- database trigger: §20.2 warns against DB triggers for AI review logic in MVP.

create table admin_reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  event_id uuid references user_events(id) on delete cascade,

  review_type text not null,

  original_input text,
  ai_output jsonb not null default '{}'::jsonb,
  corrected_output jsonb,

  confidence_score numeric(4,3),
  status review_status not null default 'pending',

  assigned_to uuid references users(id) on delete set null,
  reviewed_by uuid references users(id) on delete set null,
  reviewed_at timestamptz,
  admin_notes text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
