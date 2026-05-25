-- =====================================================================
-- Seed pra dev local.
-- Cria 1 empresa Altara (dogfood), departamentos básicos.
-- Funcionários são adicionados via magic link no fluxo de auth.
-- =====================================================================

insert into empresas (id, nome, industria, modelo_negocio, headcount, ferramentas_ia_ativas, status_programa, semana_atual)
values (
  '00000000-0000-0000-0000-000000000001',
  'Altara (dogfood)',
  'software',
  'b2b_servicos',
  10,
  ARRAY['claude', 'gpt']::text[],
  'ativo',
  1
)
on conflict (id) do nothing;

insert into departamentos (empresa_id, nome, headcount, salario_medio_anual) values
  ('00000000-0000-0000-0000-000000000001', 'Engenharia', 4, 180000),
  ('00000000-0000-0000-0000-000000000001', 'Comercial', 2, 150000),
  ('00000000-0000-0000-0000-000000000001', 'Operações', 2, 120000),
  ('00000000-0000-0000-0000-000000000001', 'Liderança', 2, 300000)
on conflict (empresa_id, nome) do nothing;
