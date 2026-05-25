import 'server-only';
import { cache } from 'react';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { funcionarios } from '@/lib/db/schema';
import { createClient } from '@/lib/supabase/server';
import { ForbiddenError, UnauthorizedError } from '@/lib/errors';
import type { Funcionario, Papel } from '@/lib/db/schema';

/**
 * Cache da session por request (RSC + Server Action).
 * `cache()` do React deduplica chamadas no mesmo render.
 */
export const getCurrentUser = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});

export const getCurrentFuncionario = cache(async (): Promise<Funcionario | null> => {
  const user = await getCurrentUser();
  if (!user) return null;
  const [funcionario] = await db
    .select()
    .from(funcionarios)
    .where(eq(funcionarios.authUserId, user.id))
    .limit(1);
  return funcionario ?? null;
});

export async function requireFuncionario(): Promise<Funcionario> {
  const funcionario = await getCurrentFuncionario();
  if (!funcionario) throw new UnauthorizedError();
  return funcionario;
}

export async function requireChampion(): Promise<Funcionario> {
  const funcionario = await requireFuncionario();
  if (funcionario.papel !== 'champion' && funcionario.papel !== 'ceo') {
    throw new ForbiddenError('Apenas champion ou CEO');
  }
  return funcionario;
}

export async function requireCEO(): Promise<Funcionario> {
  const funcionario = await requireFuncionario();
  if (funcionario.papel !== 'ceo') throw new ForbiddenError('Apenas CEO');
  return funcionario;
}

/**
 * Verifica se um papel tem uma permissão específica.
 * Ref SPEC §6.3.
 */
const PERMISSIONS: Record<string, Papel[]> = {
  viewAllEmployees: ['champion', 'ceo'],
  designateTrails: ['champion', 'ceo'],
  editWorkflows: ['champion', 'ceo'],
  archiveWorkflows: ['champion', 'ceo'],
  editIntegrations: ['ceo'],
  approveExternalSharing: ['ceo'],
  editBilling: ['ceo'],
};

export function can(permission: keyof typeof PERMISSIONS, papel: Papel): boolean {
  return PERMISSIONS[permission]?.includes(papel) ?? false;
}
