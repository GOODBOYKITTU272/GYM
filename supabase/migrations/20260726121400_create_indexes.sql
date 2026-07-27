-- 014: Indexes (docs/05-Backend-Schema.md, per-table Indexes sections)
-- gin_trgm_ops is schema-qualified because pg_trgm lives in `extensions`.

-- users
create index idx_users_telegram_user_id on users (telegram_user_id);
create index idx_users_telegram_chat_id on users (telegram_chat_id);
create index idx_users_email on users (email);
create index idx_users_role on users (role);
create index idx_users_last_seen_at on users (last_seen_at desc);

-- user_profiles
create index idx_user_profiles_user_id on user_profiles (user_id);
create index idx_user_profiles_primary_goal on user_profiles (primary_goal);

-- user_events
create index idx_user_events_user_id on user_events (user_id);
create index idx_user_events_user_time on user_events (user_id, occurred_at desc);
create index idx_user_events_type on user_events (event_type);
create index idx_user_events_status on user_events (status);
create index idx_user_events_source on user_events (source);
create index idx_user_events_confidence on user_events (confidence_score);
create index idx_user_events_parent on user_events (parent_event_id);

-- voice_events
create index idx_voice_events_user_id on voice_events (user_id);
create index idx_voice_events_event_id on voice_events (event_id);
create index idx_voice_events_status on voice_events (status);
create index idx_voice_events_provider on voice_events (provider_used);
create index idx_voice_events_created_at on voice_events (created_at desc);
create index idx_voice_events_confidence on voice_events (confidence_score);

-- voice_provider_metrics
create index idx_voice_provider_metrics_provider on voice_provider_metrics (provider_name);
create index idx_voice_provider_metrics_period on voice_provider_metrics (period_start, period_end);

-- food_logs
create index idx_food_logs_user_id on food_logs (user_id);
create index idx_food_logs_event_id on food_logs (event_id);
create index idx_food_logs_user_time on food_logs (user_id, occurred_at desc);
create index idx_food_logs_meal_type on food_logs (meal_type);
create index idx_food_logs_contains_sweet on food_logs (contains_sweet);
create index idx_food_logs_contains_fried on food_logs (contains_fried);

-- water_logs
create index idx_water_logs_user_time on water_logs (user_id, occurred_at desc);

-- products
create index idx_products_normalized_name on products using gin (normalized_name extensions.gin_trgm_ops);
create index idx_products_brand on products (brand);
create index idx_products_barcode on products (barcode);
create index idx_products_category on products (category);
create index idx_products_verification_status on products (verification_status);

-- product_variants
create index idx_product_variants_product_id on product_variants (product_id);
create index idx_product_variants_name on product_variants using gin (normalized_variant_name extensions.gin_trgm_ops);
create index idx_product_variants_barcode on product_variants (barcode);

-- product_logs
create index idx_product_logs_user_time on product_logs (user_id, occurred_at desc);
create index idx_product_logs_product_id on product_logs (product_id);
create index idx_product_logs_decision on product_logs (decision);
create index idx_product_logs_confidence on product_logs (matched_confidence);

-- product_corrections
create index idx_product_corrections_status on product_corrections (status);
create index idx_product_corrections_product_log on product_corrections (product_log_id);

-- restaurant_logs
create index idx_restaurant_logs_user_time on restaurant_logs (user_id, occurred_at desc);
create index idx_restaurant_logs_restaurant_name on restaurant_logs (restaurant_name);

-- grocery_receipts
create index idx_grocery_receipts_user_time on grocery_receipts (user_id, occurred_at desc);
create index idx_grocery_receipts_store_name on grocery_receipts (store_name);

-- reminders
create index idx_reminders_user_id on reminders (user_id);
create index idx_reminders_active_next_run on reminders (active, next_run_at);
create index idx_reminders_type on reminders (reminder_type);

-- reminder_events
create index idx_reminder_events_user_time on reminder_events (user_id, scheduled_at desc);
create index idx_reminder_events_reminder_id on reminder_events (reminder_id);
create index idx_reminder_events_action on reminder_events (user_action);
create index idx_reminder_events_snooze_until on reminder_events (snooze_until);

-- behavior_patterns
create index idx_behavior_patterns_user_period on behavior_patterns (user_id, period_start desc, period_end desc);
create index idx_behavior_patterns_type on behavior_patterns (pattern_type);
create index idx_behavior_patterns_severity on behavior_patterns (severity);

-- weekly_reports
create index idx_weekly_reports_user_week on weekly_reports (user_id, week_start desc);
create index idx_weekly_reports_status on weekly_reports (status);

-- admin_reviews
create index idx_admin_reviews_status on admin_reviews (status);
create index idx_admin_reviews_type on admin_reviews (review_type);
create index idx_admin_reviews_confidence on admin_reviews (confidence_score);
create index idx_admin_reviews_created_at on admin_reviews (created_at desc);
create index idx_admin_reviews_assigned_to on admin_reviews (assigned_to);

-- privacy_requests
create index idx_privacy_requests_user_id on privacy_requests (user_id);
create index idx_privacy_requests_status on privacy_requests (status);
create index idx_privacy_requests_type on privacy_requests (request_type);

-- audit_logs
create index idx_audit_logs_actor on audit_logs (actor_user_id);
create index idx_audit_logs_entity on audit_logs (entity_type, entity_id);
create index idx_audit_logs_created_at on audit_logs (created_at desc);
