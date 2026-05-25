-- =====================================================================
-- Altara — Migration 0001: Schema inicial
-- Ref: SPEC §5
--
-- Tabelas: empresas, departamentos, funcionarios, events
-- Inclui RLS em todas as tabelas com empresa_id.
-- =====================================================================

-- =====================
-- ENUMS
-- =====================

create type modelo_negocio as enum ('b2b_servicos','b2b_produto','b2c_servicos','b2c_produto','hibrido');
create type status_programa as enum ('setup','ativo','concluido','churned');
create type granularidade_ranking as enum ('nominal','apelido','departamental');
create type senioridade as enum ('junior','pleno','senior','diretor');
create type experiencia_ia as enum ('iniciante','intermediario','avancado');
create type papel as enum ('funcionario','champion','ceo');

-- =====================
-- EMPRESAS
-- =====================

create table empresas (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  industria text not null,
  sub_setor text,
  modelo_negocio modelo_negocio,
  headcount int,
  contexto_livre text,
  ferramentas_ia_ativas text[] not null default '{}',
  status_programa status_programa not null default 'setup',
  semana_atual int default 0,
  permite_compartilhamento_externo boolean default false,
  granularidade_ranking granularidade_ranking default 'apelido',
  created_at timestamptz not null default now()
);

-- =====================
-- DEPARTAMENTOS
-- =====================

create table departamentos (
  id uuid primary key default gen_random_uuid(),
  empresa_id uuid not null references empresas(id) on delete cascade,
  nome text not null,
  headcount int,
  salario_medio_anual numeric(12,2),
  unique (empresa_id, nome)
);

-- =====================
-- FUNCIONARIOS
-- =====================

create table funcionarios (
  id uuid primary key default gen_random_uuid(),
  empresa_id uuid not null references empresas(id) on delete cascade,
  departamento_id uuid references departamentos(id),
  auth_user_id uuid unique,
  email text not null,
  nome text not null,
  apelido text,
  cargo text,
  senioridade senioridade,
  ferramenta_ia_preferida text,
  tarefas_tipo text[] default '{}',
  experiencia_ia experiencia_ia,
  papel papel not null default 'funcionario',
  contexto_personalizado jsonb,
  opt_out_ranking boolean default false,
  opt_in_caso_ancora boolean default false,
  pontos_total int not null default 0,
  streak_atual int not null default 0,
  streak_recorde int not null default 0,
  ultimo_login_em timestamptz,
  anonimizado_em timestamptz,
  created_at timestamptz not null default now()
);

create index funcionarios_empresa_idx on funcionarios (empresa_id);
create index funcionarios_departamento_idx on funcionarios (departamento_id);

-- =====================
-- EVENTS (telemetria)
-- =====================

create table events (
  id bigint generated always as identity primary key,
  empresa_id uuid not null,
  funcionario_id uuid,
  tipo text not null,
  payload jsonb not null default '{}',
  ts timestamptz not null default now()
);

create index events_empresa_ts_idx on events (empresa_id, ts desc);
create index events_funcionario_ts_idx on events (funcionario_id, ts desc);
create index events_tipo_ts_idx on events (tipo, ts desc);

-- =====================
-- HELPER: empresa_id do usuário autenticado
-- =====================

-- Cache em SECURITY DEFINER pra evitar lookup recursivo nas policies
create or replace function auth.current_empresa_id()
returns uuid
language sql
stable
security definer
set search_path = public
as $$
  select empresa_id from public.funcionarios where auth_user_id = auth.uid() limit 1;
$$;

create or replace function auth.current_papel()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select papel::text from public.funcionarios where auth_user_id = auth.uid() limit 1;
$$;

-- =====================
-- RLS
-- =====================

alter table empresas enable row level security;
alter table departamentos enable row level security;
alter table funcionarios enable row level security;
alter table events enable row level security;

-- empresas: usuário só vê a própria empresa
create policy "empresas: select da própria empresa"
  on empresas for select
  using (id = auth.current_empresa_id());

create policy "empresas: ceo/champion atualiza"
  on empresas for update
  using (id = auth.current_empresa_id() and auth.current_papel() in ('ceo','champion'));

-- departamentos: usuário só vê os da própria empresa
create policy "departamentos: select da própria empresa"
  on departamentos for select
  using (empresa_id = auth.current_empresa_id());

create policy "departamentos: ceo/champion gerencia"
  on departamentos for all
  using (empresa_id = auth.current_empresa_id() and auth.current_papel() in ('ceo','champion'))
  with check (empresa_id = auth.current_empresa_id() and auth.current_papel() in ('ceo','champion'));

-- funcionarios: usuário vê todos da própria empresa
create policy "funcionarios: select da própria empresa"
  on funcionarios for select
  using (empresa_id = auth.current_empresa_id());

-- funcionarios: usuário atualiza próprio perfil; champion/ceo atualizam qualquer um da empresa
create policy "funcionarios: update próprio ou pela liderança"
  on funcionarios for update
  using (
    auth_user_id = auth.uid()
    or (empresa_id = auth.current_empresa_id() and auth.current_papel() in ('ceo','champion'))
  );

-- funcionarios: champion/ceo cria
create policy "funcionarios: insert pela liderança"
  on funcionarios for insert
  with check (
    empresa_id = auth.current_empresa_id()
    and auth.current_papel() in ('ceo','champion')
  );

-- events: usuário vê próprios eventos; champion/ceo vê todos da empresa
create policy "events: select próprios ou pela liderança"
  on events for select
  using (
    empresa_id = auth.current_empresa_id()
    and (
      auth.current_papel() in ('ceo','champion')
      or funcionario_id = (select id from funcionarios where auth_user_id = auth.uid())
    )
  );

-- events: inserts só via service role (helper emitEvent no servidor).
-- Não criamos policy de insert pra cliente direto — bypass via service role.

-- =====================
-- COMENTARIOS
-- =====================

comment on table empresas is 'Tenants: cada empresa cliente da Altara';
comment on table departamentos is 'Departamentos pertencentes a uma empresa';
comment on table funcionarios is 'Usuários do produto, vinculados a auth.users via auth_user_id';
comment on table events is 'Telemetria append-only — ref PRD §7.4';
comment on column funcionarios.papel is 'funcionario | champion | ceo';
