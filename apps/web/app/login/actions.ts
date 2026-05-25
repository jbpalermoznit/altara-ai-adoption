'use server';

import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';

const schema = z.object({
  email: z.string().email('E-mail inválido'),
  next: z.string().optional(),
});

export async function signInWithMagicLink(input: unknown): Promise<{ error?: string }> {
  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.errors[0]?.message ?? 'Dados inválidos' };
  }

  const supabase = await createClient();
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
  const redirectTo = new URL('/auth/callback', appUrl);
  if (parsed.data.next) redirectTo.searchParams.set('next', parsed.data.next);

  const { error } = await supabase.auth.signInWithOtp({
    email: parsed.data.email,
    options: {
      emailRedirectTo: redirectTo.toString(),
      shouldCreateUser: false, // funcionários são pré-cadastrados pelo champion (PRD §5.13)
    },
  });

  if (error) {
    return { error: 'Não conseguimos enviar o link. Confirma se o e-mail está cadastrado.' };
  }

  return {};
}
