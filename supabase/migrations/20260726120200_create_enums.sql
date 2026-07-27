-- 002: Enums (docs/05-Backend-Schema.md §3)

create type user_role as enum (
  'telegram_user',
  'super_admin',
  'admin',
  'reviewer',
  'product_admin',
  'support',
  'read_only'
);

create type event_type as enum (
  'food_log',
  'product_lookup',
  'voice_note',
  'photo_upload',
  'receipt_scan',
  'restaurant_menu',
  'reminder_created',
  'reminder_checkin',
  'water_log',
  'daily_reflection',
  'weekly_report',
  'correction',
  'privacy_request',
  'unknown'
);

create type event_source as enum (
  'telegram_text',
  'telegram_voice',
  'telegram_photo',
  'telegram_document',
  'admin',
  'system',
  'api'
);

create type event_status as enum (
  'received',
  'processing',
  'processed',
  'needs_review',
  'failed',
  'deleted'
);

create type reminder_action as enum (
  'taken',
  'later',
  'skip',
  'no_response',
  'cancelled'
);

create type product_decision as enum (
  'can_have',
  'occasionally',
  'avoid_today',
  'ask_clarification',
  'unknown'
);

create type review_status as enum (
  'pending',
  'approved',
  'corrected',
  'rejected',
  'ignored'
);
