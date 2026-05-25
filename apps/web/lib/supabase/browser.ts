'use client';

import { createBrowserClient } from '@supabase/ssr';

/**
 * Cliente Supabase pro browser. Usa anon key + session cookie.
 * NUNCA usar service role aqui.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
