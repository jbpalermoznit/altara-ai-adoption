# Altara — Setup local

Guia pra rodar o projeto na sua máquina em ~30 minutos (assumindo contas já criadas).

## 1. Pré-requisitos

| Ferramenta | Versão | Como instalar |
|---|---|---|
| Node | ≥20 | https://nodejs.org ou via `nvm` |
| pnpm | ≥9 | `brew install pnpm` ou `npm i -g pnpm` |
| Supabase CLI | latest | `brew install supabase/tap/supabase` |
| Vercel CLI (opcional) | latest | `pnpm i -g vercel` |

## 2. Contas externas necessárias (M0)

Crie cada uma e guarde as chaves (vão pro `.env.local`):

1. **Supabase** ([supabase.com](https://supabase.com)) — New Project, região **São Paulo (sa-east-1)**
   - Pegue: `Project URL`, `anon key`, `service_role key`, `database connection string`
2. **Anthropic** ([console.anthropic.com](https://console.anthropic.com)) — API key
3. **Vercel** ([vercel.com](https://vercel.com)) — import this repo, configure env vars (depois)
4. **Sentry** ([sentry.io](https://sentry.io)) — novo projeto Next.js, pegue DSN
5. **PostHog** ([posthog.com](https://posthog.com)) — novo projeto, pegue Project API Key
6. **Resend** ([resend.com](https://resend.com)) — opcional no M0 (entra em M5)
7. **OpenAI** ([platform.openai.com](https://platform.openai.com)) — opcional (fallback)

## 3. Clone + instalar

```bash
git clone <este-repo>
cd altara-ai-adoption
pnpm install
```

## 4. Variáveis de ambiente

```bash
cp .env.example apps/web/.env.local
# preencha com as chaves dos serviços acima
```

## 5. Banco de dados

### Opção A — Supabase local (recomendado pra dev)

```bash
supabase start
supabase db reset  # aplica migrations + seed
```

A CLI imprime URLs/keys locais — use-as no `.env.local` durante dev.

### Opção B — Supabase cloud (compartilhado / staging)

```bash
supabase link --project-ref <seu-project-ref>
supabase db push
```

## 6. Rodar

```bash
pnpm dev
# abre http://localhost:3000
```

## 7. Verificar saúde

```bash
pnpm typecheck    # TypeScript sem erros
pnpm lint         # ESLint sem erros
pnpm test         # Vitest unit tests
pnpm db:studio    # Drizzle Studio (UI do banco)
```

## 8. Primeiro acesso

No M0 ainda não existe UI de onboarding de empresa. Cria seu funcionário manualmente:

```sql
-- conecta no banco via Supabase Studio (local: localhost:54323)

-- 1. Cria seu usuário de auth (Studio → Authentication → Add User → magic link)

-- 2. Vincula ao funcionário da empresa seed
insert into funcionarios (empresa_id, auth_user_id, email, nome, papel)
values (
  '00000000-0000-0000-0000-000000000001',
  '<auth_user_id-do-passo-1>',
  'voce@altara.com.br',
  'Seu Nome',
  'ceo'
);
```

Depois faça login em `/login` com o e-mail.

## 9. Comandos úteis

```bash
pnpm dev                  # Next dev server
pnpm build                # build de produção
pnpm db:generate          # gera migration Drizzle a partir do schema.ts
pnpm db:push              # aplica schema direto (dev only)
pnpm db:studio            # abre Drizzle Studio
pnpm format               # Prettier write
supabase status           # status do Supabase local
supabase db reset         # reset banco local + reaplica migrations
```

## 10. Problemas comuns

**"DATABASE_URL is required"** — copie `.env.example` pra `apps/web/.env.local` e preencha.

**Magic link não chega no e-mail (dev local)** — Supabase local intercepta e-mails no Inbucket: http://localhost:54324

**RLS bloqueia query** — confirma se o usuário está logado E tem registro em `funcionarios` com `auth_user_id` setado.
