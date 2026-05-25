import 'server-only';
import { createAdminClient } from '@/lib/supabase/admin';
import { getCurrentFuncionario } from '@/lib/auth/session';
import type { AltaraEvent } from './types';

/**
 * Emite um evento de telemetria.
 * Faz INSERT no banco via service role (events RLS bloqueia inserts diretos do cliente)
 * + espelha pro PostHog (no-op se chave não configurada).
 *
 * Não bloqueia o caller em caso de erro — telemetria nunca quebra fluxo.
 */
export async function emitEvent<T extends AltaraEvent>(
  tipo: T['tipo'],
  payload: T['payload'],
): Promise<void> {
  try {
    const funcionario = await getCurrentFuncionario();
    if (!funcionario) {
      console.warn(`[telemetry] evento ${tipo} sem funcionário autenticado — ignorando`);
      return;
    }

    const admin = createAdminClient();
    await admin.from('events').insert({
      tipo,
      payload,
      empresa_id: funcionario.empresaId,
      funcionario_id: funcionario.id,
    });

    // PostHog mirror (server-side). Importa dinâmico pra evitar bundle quando flag desativada.
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      const { PostHog } = await import('posthog-node');
      const client = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        flushAt: 1,
        flushInterval: 0,
      });
      client.capture({
        distinctId: funcionario.id,
        event: tipo,
        properties: { ...payload, empresa_id: funcionario.empresaId },
      });
      await client.shutdown();
    }
  } catch (error) {
    console.error('[telemetry] falha ao emitir evento', tipo, error);
  }
}
