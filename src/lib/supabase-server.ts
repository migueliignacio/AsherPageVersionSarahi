import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client for /api/notify (see supabase/schema.sql for
 * the table it writes to). Lazy singleton so a missing env var never crashes
 * `next build` — the route just skips the DB write, the same way it already
 * skips the email when RESEND_API_KEY is absent.
 *
 * Uses the service role key (never sent to the browser) so this trusted,
 * server-side insert works regardless of the table's row-level-security
 * policy — the leads table has none, it's locked to service-role writes only.
 */
let client: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
  if (client !== undefined) return client;

  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  client = url && key ? createClient(url, key, { auth: { persistSession: false } }) : null;
  return client;
}
