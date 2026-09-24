-- Run this once in the Supabase project's SQL editor (Database → SQL Editor)
-- to create the table /api/notify writes every submission to — the lead
-- modal ("Cuéntanos un poco sobre ti") and the diagnóstico quiz.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  -- 'contacto' = LeadModalProvider, 'diagnostico' = DiagnosticoQuiz
  tipo text not null check (tipo in ('contacto', 'diagnostico')),
  nombre text,        -- person's name (contacto) or business name (diagnostico)
  celular text,       -- phone/WhatsApp, or whichever contact the diagnóstico left
  correo text,        -- email, when the lead modal collected one
  mensaje text,       -- free-text message, when the lead modal collected one
  seccion_origen text,
  respuestas jsonb    -- [{ pregunta, respuesta }, ...] from the diagnóstico quiz
);

-- Locked down by default: RLS is on and no policy grants anon/authenticated
-- access, so only the service-role key (used server-side in /api/notify)
-- can read or write this table — it bypasses RLS entirely.
alter table public.leads enable row level security;
