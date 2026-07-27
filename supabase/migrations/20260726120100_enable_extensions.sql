-- 001: Extensions (docs/05-Backend-Schema.md §2)
-- Installed into the `extensions` schema per Supabase convention. Operator
-- classes are therefore referenced schema-qualified (extensions.gin_trgm_ops).

create schema if not exists extensions;

create extension if not exists "pgcrypto" with schema extensions;
create extension if not exists "uuid-ossp" with schema extensions;
create extension if not exists "pg_trgm" with schema extensions;

-- Enabled per §2. No column uses it yet; reserved for product/memory embeddings.
create extension if not exists "vector" with schema extensions;
