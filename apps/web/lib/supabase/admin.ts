import 'server-only';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

/**
 * Cliente Supabase com service role — BYPASSA RLS.
 * Usar APENAS em Server Actions/Route Handlers/Cron onde precisamos privilégios elevados.
 * Nunca expor pro client. O import 'server-only' faz build falhar se vazar.
 */
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}
