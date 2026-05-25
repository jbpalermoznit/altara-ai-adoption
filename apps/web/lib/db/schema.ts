import { sql } from 'drizzle-orm';
import {
  pgTable,
  uuid,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
  numeric,
  bigint,
  pgEnum,
  index,
  unique,
} from 'drizzle-orm/pg-core';

/**
 * Schema Drizzle — espelha supabase/migrations/0001_init.sql.
 * Fonte de verdade do schema é o SQL (RLS é declarada lá).
 * Drizzle é só pra type-safe queries do app.
 *
 * Ref: SPEC §5
 */

// =====================
// ENUMS
// =====================

export const modeloNegocioEnum = pgEnum('modelo_negocio', [
  'b2b_servicos',
  'b2b_produto',
  'b2c_servicos',
  'b2c_produto',
  'hibrido',
]);

export const statusProgramaEnum = pgEnum('status_programa', [
  'setup',
  'ativo',
  'concluido',
  'churned',
]);

export const granularidadeRankingEnum = pgEnum('granularidade_ranking', [
  'nominal',
  'apelido',
  'departamental',
]);

export const senioridadeEnum = pgEnum('senioridade', ['junior', 'pleno', 'senior', 'diretor']);

export const experienciaIaEnum = pgEnum('experiencia_ia', [
  'iniciante',
  'intermediario',
  'avancado',
]);

export const papelEnum = pgEnum('papel', ['funcionario', 'champion', 'ceo']);

// =====================
// EMPRESAS
// =====================

export const empresas = pgTable('empresas', {
  id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
  nome: text('nome').notNull(),
  industria: text('industria').notNull(),
  subSetor: text('sub_setor'),
  modeloNegocio: modeloNegocioEnum('modelo_negocio'),
  headcount: integer('headcount'),
  contextoLivre: text('contexto_livre'),
  ferramentasIaAtivas: text('ferramentas_ia_ativas')
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  statusPrograma: statusProgramaEnum('status_programa').notNull().default('setup'),
  semanaAtual: integer('semana_atual').default(0),
  permiteCompartilhamentoExterno: boolean('permite_compartilhamento_externo').default(false),
  granularidadeRanking: granularidadeRankingEnum('granularidade_ranking').default('apelido'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .default(sql`now()`),
});

// =====================
// DEPARTAMENTOS
// =====================

export const departamentos = pgTable(
  'departamentos',
  {
    id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
    empresaId: uuid('empresa_id')
      .notNull()
      .references(() => empresas.id, { onDelete: 'cascade' }),
    nome: text('nome').notNull(),
    headcount: integer('headcount'),
    salarioMedioAnual: numeric('salario_medio_anual', { precision: 12, scale: 2 }),
  },
  (table) => ({
    nomeUnq: unique('departamentos_empresa_nome_unq').on(table.empresaId, table.nome),
  }),
);

// =====================
// FUNCIONARIOS
// =====================

export const funcionarios = pgTable(
  'funcionarios',
  {
    id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
    empresaId: uuid('empresa_id')
      .notNull()
      .references(() => empresas.id, { onDelete: 'cascade' }),
    departamentoId: uuid('departamento_id').references(() => departamentos.id),
    authUserId: uuid('auth_user_id').unique(),
    email: text('email').notNull(),
    nome: text('nome').notNull(),
    apelido: text('apelido'),
    cargo: text('cargo'),
    senioridade: senioridadeEnum('senioridade'),
    ferramentaIaPreferida: text('ferramenta_ia_preferida'),
    tarefasTipo: text('tarefas_tipo')
      .array()
      .default(sql`'{}'::text[]`),
    experienciaIa: experienciaIaEnum('experiencia_ia'),
    papel: papelEnum('papel').notNull().default('funcionario'),
    contextoPersonalizado: jsonb('contexto_personalizado'),
    optOutRanking: boolean('opt_out_ranking').default(false),
    optInCasoAncora: boolean('opt_in_caso_ancora').default(false),
    pontosTotal: integer('pontos_total').notNull().default(0),
    streakAtual: integer('streak_atual').notNull().default(0),
    streakRecorde: integer('streak_recorde').notNull().default(0),
    ultimoLoginEm: timestamp('ultimo_login_em', { withTimezone: true }),
    anonimizadoEm: timestamp('anonimizado_em', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true })
      .notNull()
      .default(sql`now()`),
  },
  (table) => ({
    empresaIdx: index('funcionarios_empresa_idx').on(table.empresaId),
    departamentoIdx: index('funcionarios_departamento_idx').on(table.departamentoId),
  }),
);

// =====================
// EVENTS (telemetria append-only)
// =====================

export const events = pgTable(
  'events',
  {
    id: bigint('id', { mode: 'bigint' }).primaryKey().generatedAlwaysAsIdentity(),
    empresaId: uuid('empresa_id').notNull(),
    funcionarioId: uuid('funcionario_id'),
    tipo: text('tipo').notNull(),
    payload: jsonb('payload')
      .notNull()
      .default(sql`'{}'::jsonb`),
    ts: timestamp('ts', { withTimezone: true })
      .notNull()
      .default(sql`now()`),
  },
  (table) => ({
    empresaTsIdx: index('events_empresa_ts_idx').on(table.empresaId, table.ts.desc()),
    funcionarioTsIdx: index('events_funcionario_ts_idx').on(table.funcionarioId, table.ts.desc()),
    tipoTsIdx: index('events_tipo_ts_idx').on(table.tipo, table.ts.desc()),
  }),
);

// =====================
// Types exportados pro app
// =====================

export type Empresa = typeof empresas.$inferSelect;
export type NovaEmpresa = typeof empresas.$inferInsert;
export type Departamento = typeof departamentos.$inferSelect;
export type Funcionario = typeof funcionarios.$inferSelect;
export type NovoFuncionario = typeof funcionarios.$inferInsert;
export type Event = typeof events.$inferSelect;
export type Papel = (typeof papelEnum.enumValues)[number];
