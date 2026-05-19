# Altara — SPEC técnico v1

**Última atualização:** 2026-05-19
**Status:** v1 — proposta opinada pra time de 2 devs fullstack entregando v1 piloto em 12 semanas
**Documentos de referência:** [BRAND_BRIEF.md](BRAND_BRIEF.md) | [PRD.md](PRD.md) | [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) | [mockups/](mockups/)

---

## 1. Princípios técnicos

Cinco princípios filtram toda decisão técnica:

1. **Time pequeno não constrói infraestrutura, constrói produto.** Toda decisão escolhe a opção que **reduz código + reduz manutenção**. Gerenciado > self-hosted. Convenção > configuração.
2. **Velocidade do primeiro cliente piloto > escala teórica.** Stack escolhida pra rodar v1 com 50 funcionários/empresa em 3 empresas piloto — não pra suportar 10k empresas no v1.
3. **Stack única do client ao server.** TypeScript ponta a ponta. Mesmo dev consegue mexer em UI e API sem trocar de contexto.
4. **Sem código custom por cliente** (princípio 2.2.3 do PRD). Tudo é configuração + templates + LLM com prompts engineered. Não há fork de código por cliente.
5. **Captura automatizada de telemetria desde dia 1.** Cada feature gera eventos. Sem instrumentação retroativa.

---

## 2. Stack escolhida (com justificativas)

| Camada | Tecnologia | Por quê |
|---|---|---|
| **Frontend + Backend** | Next.js 15 (App Router) | Fullstack num framework só. RSC default + Server Actions pra mutations. Vercel deploy automático. Time pequeno foca em produto, não em integrar serviços. |
| **Linguagem** | TypeScript strict | Mesma linguagem ponta a ponta. Tipos compartilhados entre client e server. IDE bom (Cursor/VSCode). |
| **UI components** | Tailwind CSS + shadcn/ui (Radix por baixo) | DS já em variáveis CSS — porta direto. Componentes copy-paste (não vira lock-in de lib). Acessibilidade out of the box. |
| **Tipografia** | Satoshi via Fontshare + JetBrains Mono via Google Fonts | Decisão DS v2. |
| **Charts** | Recharts | Suficiente pro v1; troca por Tremor depois se complexidade aumentar. |
| **Banco de dados** | PostgreSQL via Supabase (São Paulo region) | Multi-tenancy via RLS nativo. JSONB pra estrutura semi-flexível (workflows, conversas). |
| **ORM** | Drizzle | Lean, sem code-gen pesado, SQL-like, tipos sólidos, migrations explícitas. |
| **Auth** | Supabase Auth | Magic link nativo (decisão PRD 5.13). Zero código de autenticação custom. RLS integra com `auth.uid()`. |
| **Storage** | Supabase Storage | Avatares, prints de aplicação reportada, PNG de certificados. CDN incluso. |
| **LLM principal** | Anthropic Claude (Sonnet pra conversas, Haiku pra classificação) | Qualidade superior em raciocínio pra Coach chat. Prompt caching reduz custo. |
| **LLM secundário** | OpenAI GPT-4.1 (fallback + workflows que precisam GPT) | Multi-LLM por design (princípio 2.7 PRD). |
| **AI SDK** | Vercel AI SDK | Abstração unificada (Anthropic + OpenAI), streaming nativo, integração RSC. |
| **E-mail transacional** | Resend + React Email | Templates em JSX, free tier generoso, deliverability boa. |
| **Background jobs** | Vercel Cron + Server Actions diferidas (`waitUntil`) | Suficiente pro v1 (lembrete diário, e-mails periódicos). Inngest entra se complexidade crescer. |
| **Observabilidade** | Sentry (errors) + PostHog (product analytics) | Sentry pra crashes em prod. PostHog pra entender uso real do produto sem instrumentar dashboards próprios. |
| **Hosting** | Vercel (frontend + API) + Supabase (DB + Auth + Storage) | Deploy por git push. Preview deploys por PR. Sem servidor pra cuidar. |
| **DNS + domínio** | Cloudflare | Free tier, performance, proteção básica. |
| **CI/CD** | GitHub Actions + Vercel | Lint + typecheck + testes nos PRs. Vercel cuida do build/deploy. |
| **Testing** | Vitest (unit) + Playwright (e2e) | Suficiente pra time pequeno. Cobertura razoável, não obsessiva. |

**Custo mensal estimado v1 (3 empresas piloto, ~150 funcionários ativos):**

- Vercel Pro: $20
- Supabase Pro: $25
- Anthropic + OpenAI (LLM): ~$80-150 (depende de uso real)
- Resend: free tier (até 3k e-mails/mês)
- Sentry: free tier
- PostHog: free tier
- Domínio + Cloudflare: ~$15/ano
- **Total: ~$130-180/mês.** Cabe no bolso pra validar tese.

---

## 3. Arquitetura geral

```
┌──────────────────────────────────────────────────────────────────┐
│ Vercel — Next.js 15 fullstack                                    │
│                                                                  │
│  ┌────────────────────────┐    ┌─────────────────────────────┐  │
│  │ App Router (RSC)       │    │ API Routes + Server Actions │  │
│  │  ├── HQ (CEO/champion) │    │  ├── /api/trilhas/gerar     │  │
│  │  ├── Coach (funcion.)  │    │  ├── /api/apply/chat        │  │
│  │  ├── Onboarding        │    │  ├── /api/workflows/exec    │  │
│  │  └── Auth (callback)   │    │  ├── /api/events            │  │
│  └────────────────────────┘    │  └── /api/cron/*            │  │
│                                 └─────────────────────────────┘  │
│  Edge middleware (auth check, rate limit)                        │
└──────────────────────────────────────────────────────────────────┘
                            │
            ┌───────────────┼───────────────┬─────────────────┐
            ▼               ▼               ▼                 ▼
   ┌───────────────┐ ┌──────────────┐ ┌────────────┐ ┌──────────────┐
   │ Supabase      │ │ Anthropic    │ │ OpenAI     │ │ Resend       │
   │  ├── Postgres │ │  Claude API  │ │  GPT API   │ │  E-mail API  │
   │  ├── Auth     │ │              │ │            │ │              │
   │  ├── Storage  │ └──────────────┘ └────────────┘ └──────────────┘
   │  └── RLS      │
   └───────────────┘

                       ┌────────────────────┐
                       │ Observability      │
                       │  ├── Sentry        │
                       │  └── PostHog       │
                       └────────────────────┘
```

**Princípio chave:** todo I/O cruza a fronteira `Next.js ↔ Supabase` ou `Next.js ↔ LLM`. Sem microserviços, sem filas separadas, sem caches custom. Quando precisar, adicionar (não antecipa).

---

## 4. Estrutura do repositório

Monorepo simples num único Next.js app (sem turborepo/nx no v1). Pasta pública em `/apps` reservada pra futuras apps (extensão browser, mobile) sem refatorar.

```
altara/
├── apps/
│   └── web/                      # Next.js 15 app
│       ├── app/                  # App Router
│       │   ├── (auth)/           # Login, magic link callback
│       │   ├── (onboarding)/     # Onboarding empresa + funcionário
│       │   ├── hq/               # HQ — CEO/champion
│       │   │   ├── page.tsx      # Home
│       │   │   ├── adocao/page.tsx
│       │   │   ├── challenges/page.tsx
│       │   │   ├── time/page.tsx
│       │   │   ├── workflows/page.tsx
│       │   │   └── programa/page.tsx
│       │   ├── coach/            # Coach — funcionário
│       │   │   ├── page.tsx
│       │   │   ├── trilhas/[id]/page.tsx
│       │   │   ├── licoes/[id]/page.tsx
│       │   │   ├── apply/page.tsx
│       │   │   ├── apply/chat/[id]/page.tsx
│       │   │   ├── workflows/page.tsx
│       │   │   └── perfil/page.tsx
│       │   ├── api/              # API Routes (raros — preferir Server Actions)
│       │   │   ├── trilhas/gerar/route.ts
│       │   │   ├── apply/chat/stream/route.ts
│       │   │   ├── events/route.ts
│       │   │   └── cron/[task]/route.ts
│       │   └── layout.tsx
│       ├── components/           # Componentes UI (shadcn/ui customizados)
│       ├── lib/
│       │   ├── db/               # Drizzle schema + queries
│       │   ├── llm/              # Wrappers Anthropic + OpenAI + prompts
│       │   ├── auth/             # Helpers Supabase Auth
│       │   ├── email/            # Templates React Email
│       │   ├── events/           # Helpers de telemetria
│       │   └── utils/
│       ├── public/               # Estáticos
│       └── styles/               # globals.css + tailwind
├── packages/
│   └── templates/                # Templates de trilha + use cases (JSON/MDX curado)
│       ├── trilhas/
│       │   ├── fundamentos.json
│       │   ├── prompting-comercial.json
│       │   └── ...
│       ├── use-cases/
│       │   └── ...
│       └── guides/               # 4 guides em MDX
│           ├── por-que-usar-ia.mdx
│           ├── aproveitando-ferramentas.mdx
│           ├── verificando-output.mdx
│           └── iterando-com-ia.mdx
├── supabase/
│   ├── migrations/               # SQL migrations
│   ├── seed.sql                  # Seed pra dev local
│   └── functions/                # Edge functions Supabase (raro)
├── .github/
│   └── workflows/                # CI: lint + typecheck + test
├── docs/                         # Documentação técnica (ADRs, runbooks)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

**Convenções:**
- Server Components default (`page.tsx` é Server Component a menos que precise `'use client'`)
- Mutations via Server Actions (não criar API Route a menos que precise streaming/webhook)
- Forms via React 19 form actions + zod pra validação
- Cada feature tem seu próprio diretório em `/components/{feature}` se virar complexo

---

## 5. Modelo de dados (schema essencial)

Tudo escopado por `empresa_id` (tenant). RLS força isolamento. Schema usa **snake_case** (convenção Postgres).

### 5.1 Tabelas core

```sql
-- =====================
-- TENANCY & USUÁRIOS
-- =====================

create table empresas (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  industria text not null,
  sub_setor text,
  modelo_negocio text check (modelo_negocio in ('b2b_servicos','b2b_produto','b2c_servicos','b2c_produto','hibrido')),
  headcount int,
  contexto_livre text,
  ferramentas_ia_ativas text[] not null default '{}',  -- ['copilot','gpt','claude']
  status_programa text not null default 'setup',       -- setup, ativo, concluido, churned
  semana_atual int default 0,
  permite_compartilhamento_externo boolean default false,
  granularidade_ranking text default 'apelido' check (granularidade_ranking in ('nominal','apelido','departamental')),
  created_at timestamptz not null default now()
);

create table departamentos (
  id uuid primary key default gen_random_uuid(),
  empresa_id uuid not null references empresas(id) on delete cascade,
  nome text not null,
  headcount int,
  salario_medio_anual numeric(12,2),
  unique (empresa_id, nome)
);

create table funcionarios (
  id uuid primary key default gen_random_uuid(),
  empresa_id uuid not null references empresas(id) on delete cascade,
  departamento_id uuid references departamentos(id),
  auth_user_id uuid unique,                            -- ref ao auth.users do Supabase
  email text not null,
  nome text not null,
  apelido text,
  cargo text,
  senioridade text check (senioridade in ('junior','pleno','senior','diretor')),
  ferramenta_ia_preferida text,
  tarefas_tipo text[] default '{}',
  experiencia_ia text check (experiencia_ia in ('iniciante','intermediario','avancado')),
  papel text not null default 'funcionario' check (papel in ('funcionario','champion','ceo')),
  contexto_personalizado jsonb,
  opt_out_ranking boolean default false,
  opt_in_caso_ancora boolean default false,
  pontos_total int not null default 0,
  streak_atual int not null default 0,
  streak_recorde int not null default 0,
  ultimo_login_em timestamptz,
  created_at timestamptz not null default now()
);

create index on funcionarios (empresa_id);
create index on funcionarios (departamento_id);
```

```sql
-- =====================
-- TRILHAS (engine de geração)
-- =====================

-- Templates ficam fora do banco (em /packages/templates como JSON versionado)
-- Banco guarda referência ao slug do template + cache

create table trilhas (
  id uuid primary key default gen_random_uuid(),
  funcionario_id uuid not null references funcionarios(id) on delete cascade,
  empresa_id uuid not null references empresas(id) on delete cascade,
  template_slug text not null,                         -- ref ao template em /packages/templates
  template_version text not null,
  nome text not null,
  objetivo text,
  duracao_estimada_min int,
  conteudo_hidratado jsonb not null,                   -- estrutura completa (lições, exercícios, workflow output)
  status text not null default 'gerando' check (status in ('gerando','ativa','concluida','arquivada','regenerando')),
  progresso_pct int default 0,
  pontos_acumulados int default 0,
  iniciada_em timestamptz,
  concluida_em timestamptz,
  arquivada_em timestamptz,
  motivo_reset text,                                   -- preenchido se foi resetada (decisão 5.13)
  reset_count int default 0 check (reset_count <= 1),  -- limit 1x por trilha
  created_at timestamptz not null default now()
);

create index on trilhas (funcionario_id, status);
create index on trilhas (empresa_id, template_slug);

-- Cache de trilha gerada por perfil (decisão 3.12)
create table trilhas_cache (
  id uuid primary key default gen_random_uuid(),
  empresa_id uuid not null references empresas(id) on delete cascade,
  cache_key text not null,                             -- "{empresa_id}:{funcao}:{senioridade}:{ferramenta}"
  template_slug text not null,
  conteudo_hidratado jsonb not null,
  generated_at timestamptz not null default now(),
  invalidated_at timestamptz,
  unique (empresa_id, cache_key, template_slug)
);

create index on trilhas_cache (cache_key);
```

```sql
-- =====================
-- LIÇÕES (sub-estrutura de trilha)
-- =====================

create table licoes (
  id uuid primary key default gen_random_uuid(),
  trilha_id uuid not null references trilhas(id) on delete cascade,
  ordem int not null,
  tipo text not null check (tipo in ('teoria','exercicio','aplicacao')),
  padrao_exercicio text check (padrao_exercicio in ('highlight','multipla_escolha','role_play','refinamento_prompt')),
  conteudo jsonb not null,
  status text not null default 'pendente' check (status in ('pendente','em_progresso','concluida')),
  pontos_base int default 50,
  pontos_ganhos int default 0,
  feedback text check (feedback in ('util','confuso','generico','ja_sabia')),
  completed_at timestamptz,
  unique (trilha_id, ordem)
);
```

```sql
-- =====================
-- WORKFLOWS (entregável)
-- =====================

create table workflows (
  id uuid primary key default gen_random_uuid(),
  empresa_id uuid not null references empresas(id) on delete cascade,
  trilha_origem_id uuid references trilhas(id),
  apply_session_origem_id uuid,                        -- ref a apply_sessions se vem do Apply
  template_workflow_slug text,                         -- ref ao template no Catálogo global se aplicável
  nome text not null,
  descricao text,
  ferramenta_alvo text not null check (ferramenta_alvo in ('copilot','gpt','claude','outro')),
  passos jsonb not null,                               -- array de passos numerados
  prompt_principal text not null,
  placeholders jsonb default '[]',                     -- [{nome, descricao, exemplo}]
  plano_implementacao jsonb,
  output_esperado text,
  pre_requisitos jsonb default '[]',
  version text not null default '1.0.0',
  versao_origem_id uuid references workflows(id),      -- ref se é variante local
  status text not null default 'ativo' check (status in ('draft','ativo','destaque','ocioso','arquivado')),
  obrigatorio_para_dept_ids uuid[] default '{}',
  criado_por_funcionario_id uuid references funcionarios(id),
  created_at timestamptz not null default now(),
  arquivado_em timestamptz
);

create index on workflows (empresa_id, status);

-- Execuções e aplicações de workflow
create table workflow_execucoes (
  id uuid primary key default gen_random_uuid(),
  workflow_id uuid not null references workflows(id) on delete cascade,
  funcionario_id uuid not null references funcionarios(id) on delete cascade,
  empresa_id uuid not null,
  tipo text not null check (tipo in ('uso','aplicacao_reportada')),
  placeholders_preenchidos jsonb,
  texto_descricao text,                                -- se aplicacao_reportada
  print_url text,                                      -- se aplicacao_reportada com print
  horas_economizadas_reportadas numeric(5,2),         -- self-report
  rating int check (rating between 1 and 5),
  consentimento_caso_ancora boolean default false,
  created_at timestamptz not null default now()
);

create index on workflow_execucoes (workflow_id);
create index on workflow_execucoes (funcionario_id, tipo);
create index on workflow_execucoes (empresa_id, tipo, created_at);
```

```sql
-- =====================
-- CHALLENGES
-- =====================

create table challenges (
  id uuid primary key default gen_random_uuid(),
  empresa_id uuid not null references empresas(id) on delete cascade,
  numero int not null,                                 -- Challenge 1, 2, 3...
  nome text not null,
  trilha_template_alvo_slug text not null,
  janela_inicio timestamptz not null,
  janela_fim timestamptz not null,
  regras_pontuacao jsonb not null,                     -- {licao: 50, workflow: 100, aplicacao: 200, streak_mult: 1.2}
  status text not null default 'agendado' check (status in ('agendado','ativo','encerrado')),
  snapshot_final jsonb,                                -- ranking final, snapshots ao encerrar
  created_at timestamptz not null default now()
);

create table challenge_participacoes (
  id uuid primary key default gen_random_uuid(),
  challenge_id uuid not null references challenges(id) on delete cascade,
  funcionario_id uuid not null references funcionarios(id) on delete cascade,
  pontos_ganhos int default 0,
  posicao_final int,
  badge_especial text,
  unique (challenge_id, funcionario_id)
);
```

```sql
-- =====================
-- APPLY (use case builder)
-- =====================

-- Use cases ficam fora do banco (em /packages/templates/use-cases/*.json)
-- Banco guarda sessões de chat e outputs

create table apply_sessions (
  id uuid primary key default gen_random_uuid(),
  funcionario_id uuid not null references funcionarios(id) on delete cascade,
  empresa_id uuid not null,
  use_case_slug text,                                  -- pode ser null se "criar do zero"
  plano_conversa jsonb not null,                       -- {passos: [{nome, status}]}
  mensagens jsonb not null default '[]',               -- [{role, content, timestamp}]
  prompt_em_construcao text,
  status text not null default 'ativa' check (status in ('ativa','concluida','expirada')),
  created_at timestamptz not null default now(),
  ultima_atividade_em timestamptz not null default now(),
  expires_at timestamptz not null default now() + interval '7 days'
);

create index on apply_sessions (funcionario_id, status);
create index on apply_sessions (expires_at);          -- pra cleanup job

create table apply_outputs (
  id uuid primary key default gen_random_uuid(),
  apply_session_id uuid not null references apply_sessions(id) on delete cascade,
  funcionario_id uuid not null references funcionarios(id),
  empresa_id uuid not null,
  customized_prompt text not null,
  placeholders jsonb default '[]',
  action_plan jsonb not null,
  guides_relevantes text[] default '{}',
  salvo_como_workflow_id uuid references workflows(id),
  favoritado boolean default false,
  created_at timestamptz not null default now()
);
```

```sql
-- =====================
-- CERTIFICAÇÕES & CASOS-ÂNCORA
-- =====================

create table certificados (
  id uuid primary key default gen_random_uuid(),
  funcionario_id uuid not null references funcionarios(id) on delete cascade,
  trilha_id uuid not null references trilhas(id),
  empresa_id uuid not null,
  public_slug text unique not null,                    -- URL pública de validação
  png_url text,
  post_text_sugerido text,
  post_text_editado text,
  compartilhado_em timestamptz,
  canal_compartilhamento text,                          -- 'linkedin', 'download', null
  created_at timestamptz not null default now()
);

create table casos_ancora (
  id uuid primary key default gen_random_uuid(),
  empresa_id uuid not null references empresas(id) on delete cascade,
  workflow_execucao_id uuid not null references workflow_execucoes(id),
  funcionario_id uuid not null references funcionarios(id),
  workflow_id uuid not null references workflows(id),
  selecionado_em timestamptz not null default now(),
  selecionado_por_funcionario_id uuid not null,         -- champion ou CEO
  status text not null default 'interno' check (status in ('interno','aprovado_externo','compartilhado_externo')),
  aprovado_por_ceo_em timestamptz,
  compartilhado_em timestamptz,
  unique (workflow_execucao_id)
);
```

```sql
-- =====================
-- TELEMETRIA (append-only)
-- =====================

create table events (
  id bigint generated always as identity primary key,
  empresa_id uuid not null,
  funcionario_id uuid,
  tipo text not null,                                  -- 'licao.completada', 'workflow.usado', etc.
  payload jsonb not null default '{}',
  ts timestamptz not null default now()
);

create index on events (empresa_id, ts desc);
create index on events (funcionario_id, ts desc);
create index on events (tipo, ts desc);

-- Para queries agregadas (KPIs) preferir Materialized Views ou tabelas roll-up depois
```

```sql
-- =====================
-- FAB (Floating Assistant) chats
-- =====================

create table fab_chats (
  id uuid primary key default gen_random_uuid(),
  funcionario_id uuid not null references funcionarios(id) on delete cascade,
  empresa_id uuid not null,
  mensagens jsonb not null default '[]',
  created_at timestamptz not null default now(),
  ultima_atividade_em timestamptz not null default now(),
  expires_at timestamptz not null default now() + interval '7 days'
);
```

### 5.2 Modelo de dados — outras notas

- **Soft delete:** `arquivado_em` em vez de DELETE em entidades importantes (workflows, trilhas)
- **UUIDs:** pra ids primários — facilita merge entre ambientes, sem leak de tamanho
- **JSONB pra conteúdo flexível:** trilhas hidratadas, mensagens, planos. Schema enforced pelo TypeScript + zod, não pelo banco.
- **Materialized views pra KPIs do HQ:** refresh por cron quando volume crescer (v1 calcula on-demand está OK)

---

## 6. Multi-tenancy, Auth & Authz

### 6.1 Multi-tenancy

**Estratégia: shared database + RLS por `empresa_id`.** Simples, funciona pra v1, escala até centenas de empresas sem mudança.

```sql
-- Exemplo de RLS pra funcionarios
alter table funcionarios enable row level security;

create policy "funcionarios isolados por empresa"
  on funcionarios for select
  using (empresa_id = (select empresa_id from funcionarios where auth_user_id = auth.uid()));

create policy "funcionario só vê próprio perfil em alguns casos"
  on funcionarios for update
  using (auth_user_id = auth.uid() OR
         exists (select 1 from funcionarios f where f.auth_user_id = auth.uid() and f.papel in ('champion','ceo') and f.empresa_id = funcionarios.empresa_id));
```

RLS em todas as tabelas com `empresa_id`. Helpers em `lib/db/policies.sql`.

### 6.2 Autenticação

- **Supabase Auth com magic link por e-mail** (decisão PRD 5.13)
- Sem senhas
- Magic link expira em 1h
- Sessão dura 7 dias (refresh token rotativo)
- Funcionário se identifica pelo e-mail corporativo cadastrado pelo champion na semana 0

**Fluxo:**

1. Funcionário digita e-mail → `supabase.auth.signInWithOtp({ email })`
2. Recebe e-mail com link → clica → callback `/auth/callback`
3. Server cria/atualiza session cookie → redireciona pra `/coach` ou `/hq` baseado em `papel`

### 6.3 Authorização (papéis)

Apenas 3 papéis no v1 (PRD 4.2): `funcionario`, `champion`, `ceo`.

```typescript
// lib/auth/permissions.ts
export const PERMISSIONS = {
  // CEO + champion
  viewAllEmployees: ['champion', 'ceo'],
  designateTrails: ['champion', 'ceo'],
  // Champion only
  editWorkflows: ['champion'],
  archiveWorkflows: ['champion'],
  // CEO only
  editIntegrations: ['ceo'],
  approveExternalSharing: ['ceo'],
  editBilling: ['ceo'],
} as const;
```

Server Actions e Server Components fazem checks explícitos:

```typescript
async function deleteWorkflow(id: string) {
  const { funcionario } = await getCurrentFuncionario();
  if (!can('archiveWorkflows', funcionario.papel)) {
    throw new ForbiddenError();
  }
  // ...
}
```

---

## 7. Padrões de API

### 7.1 Server Actions (default pra mutations)

```typescript
// app/coach/trilhas/[id]/actions.ts
'use server';
import { z } from 'zod';

const completarLicaoSchema = z.object({
  licaoId: z.string().uuid(),
  feedback: z.enum(['util','confuso','generico','ja_sabia']).optional(),
});

export async function completarLicao(input: unknown) {
  const data = completarLicaoSchema.parse(input);
  const funcionario = await getCurrentFuncionario();
  // ... lógica
  // emite evento de telemetria
  await emitEvent('licao.completada', { licao_id: data.licaoId, funcionario_id: funcionario.id });
  revalidatePath(`/coach/trilhas/${trilhaId}`);
}
```

### 7.2 API Routes (apenas quando precisa streaming/webhook/cron)

Restrição: API Route só pra:
- **Streaming** (Apply chat, Floating Assistant)
- **Cron** (jobs agendados)
- **Webhooks** externos (futuro)

```typescript
// app/api/apply/chat/stream/route.ts
import { streamText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';

export async function POST(req: Request) {
  const { sessionId, message } = await req.json();
  // ... auth check
  // ... carregar session do DB
  const result = await streamText({
    model: anthropic('claude-sonnet-4-6'),
    system: buildSystemPrompt(funcionario, useCase, planoConversa),
    messages: [...mensagensAnteriores, { role: 'user', content: message }],
  });
  return result.toDataStreamResponse();
}
```

### 7.3 Convenções

- **Validação:** zod schemas pra inputs
- **Erros:** classes custom (`ForbiddenError`, `NotFoundError`, `ValidationError`); handler global serializa pro client
- **Logging:** todo erro vai pro Sentry com contexto (empresa, funcionário, ação)

---

## 8. LLM integration

### 8.1 Engine de geração de trilhas (PRD Seção 3)

**Approach: templates fortes + slots preenchidos por Claude** (decisão 3.5).

```typescript
// lib/llm/gerador-trilha.ts
import { generateObject } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { z } from 'zod';

const trilhaSchema = z.object({
  nome: z.string(),
  objetivo: z.string(),
  duracao_estimada_min: z.number(),
  licoes: z.array(z.object({
    ordem: z.number(),
    tipo: z.enum(['teoria','exercicio','aplicacao']),
    titulo: z.string(),
    hook: z.string(),
    conteudo: z.string(),
    exemplo_localizado: z.string(),
    checagem: z.union([z.object({...}), ...]),
  })),
  workflow_output: z.object({...}),
});

export async function gerarTrilha(
  empresa: Empresa,
  funcionario: Funcionario,
  templateSlug: string
) {
  // 1. Cache lookup
  const cacheKey = buildCacheKey(empresa, funcionario, templateSlug);
  const cached = await db.query.trilhasCache.findFirst({ where: eq(cacheKey) });
  if (cached && !isStale(cached)) return cached.conteudo_hidratado;

  // 2. Load template
  const template = await loadTemplate(templateSlug);  // de /packages/templates

  // 3. Hidratar com Claude
  const { object } = await generateObject({
    model: anthropic('claude-sonnet-4-6'),
    schema: trilhaSchema,
    system: TRILHA_SYSTEM_PROMPT,
    prompt: buildHidratacaoPrompt(template, empresa, funcionario),
    // Cache do prompt do template + system (custos baixos)
    providerOptions: { anthropic: { cacheControl: { type: 'ephemeral' } } },
  });

  // 4. Validate
  const validated = await validateTrilha(object);  // checks de 3.9 PRD

  // 5. Save cache
  await db.insert(trilhasCache).values({ ... });

  return validated;
}
```

**Templates ficam em `/packages/templates/trilhas/`** como JSON estruturado com slots. Ex:

```json
{
  "slug": "fundamentos-comercial",
  "categoria": "fundamentos",
  "industrias": ["*"],
  "funcoes": ["comercial"],
  "esqueleto_licoes": [
    {
      "ordem": 1,
      "tipo": "teoria",
      "objetivo": "anatomia de prompt",
      "slots_a_hidratar": ["exemplo_localizado_industria_funcao"]
    },
    ...
  ],
  "workflow_output_template": { ... }
}
```

### 8.2 Apply chat conversational (PRD 5.9)

**Approach: híbrido** (decisão 5.17) — system prompt com plano da conversa estruturado + Claude conduz turnos.

```typescript
// app/api/apply/chat/stream/route.ts
export async function POST(req: Request) {
  const { sessionId, message } = await req.json();
  const funcionario = await requireFuncionario();
  const session = await loadApplySession(sessionId);

  // Atualiza estado da conversa
  session.mensagens.push({ role: 'user', content: message });

  // Decide se avança o plano (heurística simples + LLM)
  const passoAtual = session.plano_conversa.passos.find(p => p.status === 'current');

  // Stream Claude response
  const result = await streamText({
    model: anthropic('claude-sonnet-4-6'),
    system: APPLY_COACH_SYSTEM + buildContextoFuncionario(funcionario) + buildPlanoAtual(session),
    messages: session.mensagens,
    tools: {
      avancarPasso: tool({ ... }),       // tool pra marcar passo concluído
      gerarOutput: tool({ ... }),         // tool pra produzir Action Plan final
    },
    onFinish: async ({ text, toolCalls }) => {
      // Persiste mensagem do assistant
      await persistAssistantMessage(sessionId, text);
      // Se tool gerarOutput foi chamada, salva apply_output
      if (toolCalls.some(c => c.toolName === 'gerarOutput')) {
        await persistApplyOutput(sessionId, toolCalls);
      }
    },
  });

  return result.toDataStreamResponse();
}
```

System prompt pro Apply Coach (Markdown templated, no `/lib/llm/prompts/apply-coach.md`):

```
You are Altara Coach, a personal AI tutor helping {{nome_funcionario}}, a {{cargo}} in the {{departamento}} department at {{empresa_nome}} ({{industria}}).

[...continua com regras de tom, padrões de pergunta, restrições]

You are currently helping them build a use case: "{{use_case_nome}}".

The conversation plan has these steps:
{{plano_conversa}}

Current step: {{passo_atual}}.

Respond in Brazilian Portuguese. Use friendly, direct tone. Ask one question at a time. Offer 3-4 suggested replies when possible.

When you have enough info to generate the action plan, call the tool `gerarOutput` with the customized prompt and action plan.
```

### 8.3 Floating Assistant (PRD 5.14)

Versão **simplificada** do Apply chat — sem plano lateral, system prompt mais curto, foco em respostas rápidas.

```typescript
// /api/fab/chat/stream
// Mesma estrutura mas com system prompt mais leve e tool "escalarParaApply" que sugere abrir Apply completo
```

### 8.4 Workflow generation (do Apply output)

Quando Coach decide gerar o output final, faz uma **single-shot structured generation** com schema rigoroso. Esse output vai pra `apply_outputs` e pode ser promovido a `workflows`.

### 8.5 Cost management

- **Prompt caching da Anthropic** em system prompts (system fica estável, só a mensagem muda)
- **Claude Haiku pra classificação** (ex: classificar feedback de lição, sugerir tags)
- **Claude Sonnet pra conversação** (Apply chat, Floating Assistant)
- **Streaming** pra reduzir TTFT percebido
- **Cache de trilhas geradas** evita regeração desnecessária

---

## 9. E-mail transacional

**Provider:** Resend + React Email.

Templates em `/lib/email/templates/` como componentes React:

- `welcome-funcionario.tsx` — convite com magic link
- `lembrete-call-out-ceo.tsx` — dia 7 do Challenge
- `convite-review.tsx` — 48h antes das reuniões CEO (semana 4 e 8)
- `certificacao-concluida.tsx` — funcionário completou trilha
- `feedback-trimestral.tsx` — pesquisa periódica automática
- `alerta-adocao-risco.tsx` — pro CEO/champion
- `solicitacao-respondida.tsx` — Altara respondeu solicitação de trilha

**Disparo:** Server Actions chamam `sendEmail({ template, data, to })`. Em Server Actions críticos, dispara via `waitUntil` pra não bloquear response.

**Cron jobs (Vercel Cron):**

```typescript
// app/api/cron/diario/route.ts
export async function GET() {
  // verificar inativos
  // verificar Challenges encerrando
  // verificar workflows ociosos
  // ...
}
```

```typescript
// app/api/cron/trimestral/route.ts
export async function GET() {
  // disparar pesquisa de feedback pra todos funcionários ativos
}
```

---

## 10. Telemetria & analytics

### 10.1 Eventos (server-side, append-only)

Helper `emitEvent(tipo, payload)` em todas Server Actions críticas.

```typescript
// lib/events/emit.ts
export async function emitEvent(tipo: string, payload: any) {
  const { funcionario, empresa } = await getCurrentContext();
  await db.insert(events).values({
    tipo,
    payload,
    funcionario_id: funcionario?.id,
    empresa_id: empresa.id,
  });
  // Espelhar pro PostHog
  posthog.capture({
    distinctId: funcionario?.id ?? 'anonymous',
    event: tipo,
    properties: { ...payload, empresa_id: empresa.id },
  });
}
```

### 10.2 Lista canônica de eventos (PRD 7.4)

Documentados em `/lib/events/types.ts` como union type. Garante consistência.

```typescript
export type AltaraEvent =
  | { tipo: 'auth.login'; payload: {} }
  | { tipo: 'onboarding.completed'; payload: { duracao_segundos: number } }
  | { tipo: 'trilha.iniciada'; payload: { trilha_id: string } }
  | { tipo: 'licao.completada'; payload: { licao_id: string, tempo_segundos: number, feedback?: string } }
  | { tipo: 'workflow.aplicacao_reportada'; payload: { workflow_id: string, horas_economizadas: number } }
  | { tipo: 'apply.chat_iniciado'; payload: { use_case_slug: string } }
  // ... ver PRD 7.4
  ;
```

### 10.3 KPIs do HQ (queries agregadas)

Calculadas on-demand no v1 (volume é baixo). Quando virar gargalo, materializa via MV.

```typescript
// lib/db/queries/kpis.ts
export async function getKPIs(empresaId: string, periodo: { from: Date; to: Date }) {
  return {
    percentTimeAtivoSemanal: await calcPercentAtivoSemanal(empresaId, periodo),
    workflowsAtivos: await countWorkflowsAtivos(empresaId, periodo),
    percentCertificado: await calcPercentCertificado(empresaId),
    horasEconomizadas: await calcHorasEconomizadas(empresaId, periodo),
  };
}
```

### 10.4 PostHog

- Dashboards pré-configurados (não precisa instrumentar UI): retention, funnel onboarding → primeira aplicação reportada, drop-off por lição
- Heatmaps em telas chave (Coach Home, Apply Chat)

---

## 11. Storage de assets

**Supabase Storage** com 4 buckets:

- `avatars` (público com URL signed; foto de perfil)
- `aplicacoes-prints` (privado; prints de aplicações reportadas)
- `certificados-png` (público com slug aleatório; PNG dos certificados pra LinkedIn)
- `empresa-uploads` (privado; logos de empresa, arquivos diversos)

PNG do certificado gerado server-side via **`@vercel/og`** (renderiza JSX → PNG) — sem fonte custom no v1, usa Inter (Google Fonts edge-compatible).

```typescript
// app/api/certificados/[slug]/png/route.tsx
import { ImageResponse } from 'next/og';

export async function GET(req: Request, { params }) {
  const cert = await loadCertificado(params.slug);
  return new ImageResponse(
    (
      <div style={{ /* design system tokens hardcoded */ }}>
        <h1>{cert.trilha_nome}</h1>
        <p>{cert.funcionario_nome} · {cert.empresa_nome}</p>
        ...
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
```

---

## 12. Segurança & LGPD

### 12.1 Bases legais (PRD 7.11)

- **Legítimo interesse:** dados agregados de uso pra operação do programa
- **Consentimento explícito:** caso-âncora compartilhado, LinkedIn externo, nome em ranking nominal
- **Cumprimento contratual:** dados nominais essenciais

### 12.2 Direitos

Implementar 3 endpoints/páginas:

- `GET /perfil/exportar-dados` — gera JSON com tudo do funcionário (assíncrono, e-mail com link)
- `POST /perfil/deletar-conta` — soft delete imediato + hard delete em 30 dias via cron
- `GET /empresa/exportar-tudo` — admin: export completo de tudo da empresa

### 12.3 Retenção

- Dados nominais: 24 meses (decisão 7.13)
- Anonimização automática via cron mensal pra registros >24m

```sql
-- exemplo: anonimizar funcionários inativos >24m
update funcionarios set
  nome = 'Anônimo ' || substring(id::text, 1, 8),
  apelido = null,
  email = id::text || '@anonimizado.altara',
  contexto_personalizado = null
where ultimo_login_em < now() - interval '24 months'
  and anonimizado_em is null;
```

### 12.4 Cross-tenant isolation

RLS é a primeira linha. Mas **NÃO confiar só em RLS** — testes E2E validam que tenant A nunca vê dados de tenant B.

### 12.5 Outras práticas

- Secrets em Vercel env vars (não no repo)
- Service role key (Supabase) só usada em Server Components/Actions (nunca no client)
- Rate limiting em /api routes via middleware (Vercel KV pra contadores)
- CSP headers no `next.config.ts`
- DPA (Data Processing Agreement) com Supabase, Anthropic, OpenAI (todos têm)

---

## 13. Deploy & CI/CD

### 13.1 Ambientes

- **production:** main branch → `altara.com.br`
- **staging:** staging branch → `staging.altara.com.br` (mesma Vercel project, env vars diferentes, banco diferente)
- **preview:** auto-gerado por PR (envs apontam pra staging DB)
- **local:** `pnpm dev` + Supabase CLI local

### 13.2 GitHub Actions (CI)

```yaml
# .github/workflows/ci.yml
on: [pull_request, push]
jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install
      - run: pnpm typecheck
      - run: pnpm lint
      - run: pnpm test
      # opcional: e2e Playwright nightly
```

Branch protection: PR aprovado por outro dev (mesmo entre 2, força revisão) + CI verde antes de merge.

### 13.3 Migrations

- Supabase CLI gera migrations versionadas em `/supabase/migrations/`
- CI roda `supabase db diff` pra detectar drift
- Migrations applicadas a staging primeiro, depois prod
- Sempre **forward-only** (não rollback automático — se quebrar, próxima migration corrige)

---

## 14. Convenções de código

### 14.1 TypeScript

- `strict: true`
- Sem `any` (usar `unknown` + narrowing)
- Tipos compartilhados entre client e server em `/lib/types/`

### 14.2 Estilo

- Prettier (config default + `singleQuote: true`)
- ESLint com `@typescript-eslint/recommended` + `next/core-web-vitals`
- Import order: external → internal → relative

### 14.3 Naming

- Componentes: PascalCase
- Hooks: `use*` camelCase
- Server Actions: verbos imperativos (`completarLicao`, `gerarTrilha`)
- DB tables/columns: snake_case
- TypeScript types: PascalCase

### 14.4 Commits & PRs

- Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`)
- PR template com: o que mudou, screenshots de UI, checklist (testou? typecheck? a11y? RLS?)

### 14.5 Testing

- **Unit (Vitest)** pra lógica pura (cálculo de KPIs, validators, parsers)
- **Integration (Vitest + Supabase test client)** pra Server Actions com DB
- **E2E (Playwright)** pra fluxos críticos: onboarding completo, completar lição, gerar trilha via engine, fechar Apply session
- Cobertura: **alvo de 60% no v1** (não obsessão; foco em paths críticos)

---

## 15. Roadmap de implementação (12 semanas)

Time: 2 devs fullstack pareando em features críticas. Primeira release "usável internamente" em 6 semanas; primeiro cliente piloto em 12.

### Semana 0 — Setup (1 semana)

**Output:** repo rodando, dev ambiente reproduzível.

- Setup repo Next.js 15 + TypeScript + Tailwind + shadcn
- Supabase project (SP region) + magic link auth funcionando
- DS aplicado nas variáveis Tailwind
- Vercel deploy do landing page placeholder
- Sentry + PostHog conectados
- Migrations iniciais (tabelas core)
- README com setup local funcionando em 1 comando

### Semanas 1-2 — Foundation (2 semanas)

**Output:** funcionário consegue logar e ver Home (estática).

- Schema completo + RLS em todas tabelas
- Auth completo (login + callback + middleware)
- Onboarding empresa (admin Altara faz manual no v1; UI vem na semana 11)
- Onboarding funcionário (PRD 5.3 — 7 telas)
- Coach Persona Intro (PRD 5.4)
- Coach Home **estática** com mock data
- Componentes UI essenciais (Button, Card, Input, Tag, Avatar, Badge)
- Layout macro (sidebar, topbar)

### Semanas 3-4 — Engine de geração + Trilhas (2 semanas)

**Output:** primeira trilha real gerada e consumível.

- Estrutura `/packages/templates/trilhas/`
- 2 templates curados: **Fundamentos** + **Especialização Comercial**
- Engine endpoint + cache de trilhas
- Validação de output (PRD 3.9)
- Trilha page (5.6) — visão funcionário
- Lição page (5.7) — 1 padrão de exercício (múltipla escolha)
- Sistema de pontos + streak básico

### Semanas 5-6 — Workflow handoff + Challenge (2 semanas)

**Output:** funcionário completa trilha, desbloqueia workflow, reporta aplicação.

- Workflow handoff page (PRD 5.10)
- UI de preenchimento de placeholders
- Reportar aplicação real (formulário + upload print)
- Mecânica de Challenge: countdown, pontuação, leaderboard
- Encerramento de Challenge (snapshot + badge)
- Padrão de exercício 2: highlight/marker
- **HQ Home** com KPIs reais calculados do banco

> **Marco:** v1 interno usável. Testar com time Altara como cliente piloto interno.

### Semanas 7-8 — Apply / Use Case Builder (2 semanas)

**Output:** Apply funcional ponta a ponta.

- Catálogo de use cases (5-8 use cases curados em `/packages/templates/use-cases/`)
- Apply chat com streaming
- System prompt do Coach (Apply) iterado
- Plano lateral atualizado dinamicamente via tool call
- Apply output: Action Plan + Customized Prompt gerados via structured generation
- 4 Guides em MDX renderizados
- "Salvar como workflow da empresa"

### Semanas 9-10 — HQ profundidade + e-mails (2 semanas)

**Output:** champion e CEO conseguem operar o programa via produto.

- HQ Adoção & ROI completa
- HQ Challenges expandido
- HQ Time + drill-down
- HQ Workflows + ações do champion (editar, arquivar, destaque, marcar obrigatório)
- Resend integration + templates React Email
- Cron jobs (lembrete diário, feedback trimestral)
- Export CSV

### Semanas 11-12 — Polish, certificação, piloto (2 semanas)

**Output:** primeiro cliente piloto onboarded e rodando.

- Certificação compartilhável (PNG via @vercel/og + URL pública)
- Floating Assistant funcional
- Casos-âncora seleção manual (champion)
- HQ Configurações (perfil empresa editável, granularidade ranking, opt-in compartilhamento)
- Onboarding empresa via UI (substitui processo manual)
- Performance pass (lighthouse, queries lentas)
- Accessibility pass (axe-core)
- E2E tests dos fluxos críticos
- **Cliente piloto 1: onboarding + workshop kickoff**

### Pós-v1 (versões futuras — referência)

Mapeado no PRD 8.2:
- v1.5: EN-US, SSO, Slack/Teams, sugestão algorítmica de casos-âncora, API REST export, líder de departamento
- v2: Microsoft Graph (Copilot Usage), app mobile, push notifications, Eventos ao vivo, deeplinks providers
- v3: Implantação semi-automática via APIs Copilot/OpenAI/Anthropic, Actions próprios, auditoria granular

---

## 16. O que NÃO entra no SPEC v1

Reforça o escopo enxuto consolidado no PRD 8.2:

- **App nativo iOS/Android** — web responsivo only
- **SSO corporativo** (M365, Google Workspace) — magic link only
- **Push notifications** — e-mail only
- **Deeplinks pros providers** — copiar-colar puro
- **Actions/webhooks da Altara** — sem runtime próprio
- **Microsoft Graph / OpenAI usage APIs** — captura 100% manual
- **API REST pública pra clientes** — CSV export
- **i18n** — só PT-BR
- **Modo escuro** — só light
- **Pagamento integrado** — billing manual no v1 (Stripe BR/Asaas no v1.5+)
- **Eventos ao vivo + On-Demand library** — fora do v1
- **Compartilhamento direto entre colegas** — via biblioteca compartilhada apenas
- **Pgvector / search semântico** — não precisa no v1
- **Edge computing complexo** — server functions normais
- **Painel admin Altara como produto** — ad-hoc (planilha + SQL)

---

## 17. Decisões em aberto

- **Workspaces (monorepo turborepo)?** v1 fica como single Next.js app; vira monorepo se app mobile entrar.
- **Inngest vs Vercel Cron** pra jobs complexos: Vercel Cron suficiente no v1; Inngest se cron + retries virarem dor.
- **Drizzle vs Prisma:** SPEC opta por Drizzle por leveza; troca se time tiver forte preferência por Prisma.
- **Tremor vs Recharts pra charts:** Recharts mais leve no v1; Tremor se HQ ficar muito dashboard-heavy.
- **Anthropic ou OpenAI como primário?** SPEC opta por Anthropic Claude pra Apply chat (qualidade superior em diálogo). Pode flippar baseado em uso real.
- **GitHub Issues vs Linear vs nada?** Time pequeno pode rodar com README + GitHub Issues; Linear entra quando >2 devs.
- **Storybook ou não?** Não no v1 (DS já documentado em `mockups/`); entra se time ficar >2 devs.
- **Branch model (trunk vs git flow)?** SPEC opta por **trunk-based** (main + branches curtas), simples pra time de 2.
- **Region do Supabase:** São Paulo (latência BR-friendly + LGPD). Se cliente exigir multi-region, fica pro v2.

---

## Changelog

- **2026-05-19 (v1):** Versão inicial do SPEC. Stack opinada pra time de 2 devs entregando piloto em 12 semanas. Decisões-chave: Next.js 15 fullstack + Supabase (Postgres+Auth+Storage+RLS) + Drizzle ORM + Anthropic Claude (principal) + OpenAI (secundário) + Resend + React Email + Vercel + Sentry + PostHog. Roadmap 12 semanas em 6 fases (Setup → Foundation → Engine → Workflow+Challenge → Apply → HQ+E-mails → Polish+Piloto). Custo operacional ~$130-180/mês.
