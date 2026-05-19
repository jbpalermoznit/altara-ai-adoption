# Altara — Roadmap de implementação

**Última atualização:** 2026-05-19
**Status:** v1 — plano pronto pra criar issues no GitHub
**Documentos relacionados:** [PRD.md](PRD.md) · [SPEC.md](SPEC.md) · [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)

---

## Visão geral

Time de **2 devs fullstack** entregando v1 piloto em **12 semanas**, organizados via GitHub Issues + Milestones (sem ferramenta extra de project management no v1 — overhead baixo).

**Princípios de gestão:**

1. **Trunk-based development.** Main protegida, branches curtas (1-3 dias máx), PR review obrigatório mesmo entre 2 devs.
2. **Cada issue cabe num dia ou três** (P/M/G). Issues maiores viram epics com children.
3. **Ref cruzada com PRD/SPEC obrigatória** em toda issue. Sem contexto perdido.
4. **Marco da semana 6** é o mais importante: v1 interno usável (time Altara testa como cliente piloto interno antes do externo).

---

## Milestones

| # | Milestone | Semanas | Output principal | Definição de "pronto" |
|---|---|---|---|---|
| M0 | **Setup** | 0 | Dev ambiente reproduzível + observabilidade | `pnpm dev` roda local; deploy Vercel funciona; Sentry e PostHog capturam evento de teste |
| M1 | **Foundation** | 1-2 | Auth + onboarding + Coach Home estática | Funcionário consegue logar via magic link, completar onboarding em 7 telas, ver Coach Home com dados mockados |
| M2 | **Engine + Trilhas** | 3-4 | Primeira trilha gerada + lição interativa | Funcionário recebe trilha gerada por contexto, completa lição de múltipla escolha, ganha pontos |
| M3 | **Workflow + Challenge** | 5-6 | **v1 interno usável** com HQ Home + KPIs reais | Funcionário desbloqueia workflow, reporta aplicação real; CEO vê KPIs reais no HQ Home; Challenge ativo com leaderboard |
| M4 | **Apply (Use Case Builder)** | 7-8 | Coach chat conversational ponta a ponta | Funcionário descreve problema, Coach refina em chat, gera Action Plan + Customized Prompt + Guides |
| M5 | **HQ profundidade + E-mails** | 9-10 | Champion/CEO operam programa via produto | HQ Adoção&ROI, Challenges expandido, Time, Workflows; e-mails transacionais ativos; cron jobs rodando |
| M6 | **Polish + Piloto** | 11-12 | **Cliente piloto 1 onboarded** | Certificação compartilhável, Floating Assistant, casos-âncora manual, performance/a11y pass, E2E tests, cliente piloto rodando |

---

## Labels

### Por área (qual parte do produto)

`area/hq` · `area/coach` · `area/apply` · `area/engine` · `area/infra` · `area/auth` · `area/llm` · `area/email` · `area/db` · `area/design-system` · `area/telemetria`

### Por tipo

`type/feature` · `type/chore` · `type/bug` · `type/spike` (investigação/research) · `type/docs`

### Por prioridade

`priority/p0` (bloqueador — para tudo até resolver) · `priority/p1` (alta — entra no sprint atual) · `priority/p2` (média — backlog, pega quando der)

---

## Issue template

Crie em `.github/ISSUE_TEMPLATE/feature.md`:

```markdown
---
name: Feature
about: Nova funcionalidade ou melhoria
labels: type/feature
---

## Contexto
Ref: PRD §X.Y / SPEC §X / mockup [nome].html

Por que essa feature existe e qual problema resolve.

## O que entregar
- [ ] critério de aceitação 1
- [ ] critério de aceitação 2
- [ ] critério de aceitação 3

## Dependências
- #N (depende de…)
- bloqueia: #M

## Estimativa
P (≤1 dia) · M (1-3 dias) · G (3-5 dias)

## Telemetria
Eventos a emitir (PRD §7.4):
- `licao.completada`
- `workflow.usado`

## Notas técnicas (opcional)
Decisões arquiteturais relevantes, refs ao SPEC.
```

---

## PR template

Crie em `.github/PULL_REQUEST_TEMPLATE.md`:

```markdown
Closes #N

## O que mudou
Resumo curto.

## Screenshots (se UI)
<!-- antes / depois -->

## Checklist
- [ ] typecheck passa (`pnpm typecheck`)
- [ ] lint passa (`pnpm lint`)
- [ ] testes verdes (`pnpm test`)
- [ ] RLS testada (se nova tabela/query)
- [ ] eventos de telemetria emitidos
- [ ] usa tokens do DS (sem cores/spacing hardcoded)
- [ ] mobile responsivo (testado em <768px)
- [ ] acessibilidade básica (focus visível, contraste)

## Notas de deploy
<!-- se precisa env var nova, migration, etc. -->
```

---

## Workflow de desenvolvimento

### Branches

- `main` — protegida, sempre deployável
- `feat/<área>-<descrição-curta>` — features (ex: `feat/coach-licao-multipla-escolha`)
- `fix/<descrição>` — bugfixes
- `chore/<descrição>` — manutenção, refactors

Branch curta (≤3 dias). Se passar disso, quebrar em sub-issues.

### Commits

Conventional Commits:

```
feat(coach): add lesson multiple choice exercise
fix(hq): correct ROI calculation for departments
chore(infra): bump Next.js to 15.2
docs(spec): add section about Anthropic prompt caching
```

### Pull Requests

- 1 PR resolve 1 issue (regra geral)
- PR aprovado por outro dev + CI verde antes de merge
- Squash merge (mantém main linear)
- Deletar branch após merge

### Deploy

- Merge em `main` → deploy automático em produção (Vercel)
- Cada PR ganha **preview deploy** (URL própria)
- Migrations rodam contra staging primeiro, depois prod (manualmente via `supabase db push`)

---

## Issues iniciais por milestone

Total: ~70 issues. Cada milestone abre com **1 epic** (issue guarda-chuva) que linka children. Estimativa em parênteses (P/M/G).

### M0 · Setup (9 issues)

| # | Título | Labels | Est. |
|---|---|---|---|
| 1 | Epic: Setup do projeto e ambiente | `area/infra` `type/feature` `priority/p0` | — |
| 2 | Inicializar Next.js 15 + TypeScript strict + Tailwind + shadcn/ui | `area/infra` `type/chore` `priority/p0` | M |
| 3 | Criar Supabase project (SP region) + variáveis de ambiente | `area/infra` `area/auth` `priority/p0` | P |
| 4 | Conectar Vercel project ao repo + envs (staging + prod) | `area/infra` `priority/p0` | P |
| 5 | Configurar Sentry (errors) + PostHog (analytics) | `area/infra` `area/telemetria` `priority/p1` | P |
| 6 | Migrations iniciais: empresas, departamentos, funcionarios, events | `area/db` `priority/p0` | M |
| 7 | Aplicar Design System no tailwind.config (cores Altara + Satoshi via Fontshare) | `area/design-system` `priority/p0` | P |
| 8 | Magic link login + callback funcionando ponta a ponta | `area/auth` `priority/p0` | M |
| 9 | GitHub Actions CI: typecheck + lint + test em todo PR | `area/infra` `priority/p1` | P |
| 10 | README local: setup em 1 comando (`pnpm install && pnpm db:reset && pnpm dev`) | `area/infra` `type/docs` `priority/p1` | P |

### M1 · Foundation (11 issues)

| # | Título | Labels | Est. |
|---|---|---|---|
| 11 | Epic: Foundation (auth + onboarding + Coach Home estática) | `area/coach` `type/feature` `priority/p0` | — |
| 12 | Schema completo do banco + RLS em todas as tabelas | `area/db` `area/auth` `priority/p0` | G |
| 13 | Helpers de auth: `requireFuncionario`, `requireChampion`, `requireCEO` | `area/auth` `priority/p0` | P |
| 14 | Componentes UI base: Button, Card, Input, Tag, Badge, Avatar | `area/design-system` `priority/p0` | M |
| 15 | Layout macro: Sidebar + Topbar reutilizáveis | `area/design-system` `priority/p0` | M |
| 16 | Middleware de proteção de rota + redirect por papel | `area/auth` `priority/p0` | M |
| 17 | Onboarding pessoal: 7 telas (PRD §5.3) | `area/coach` `priority/p0` | M |
| 18 | Coach Persona Intro "Olá!" (PRD §5.4) | `area/coach` `priority/p1` | P |
| 19 | Coach Home estática com mock data (PRD §5.5) | `area/coach` `priority/p1` | M |
| 20 | Helper `emitEvent` + tipos canônicos de eventos (PRD §7.4) | `area/telemetria` `priority/p0` | P |
| 21 | Onboarding empresa via SQL seed (admin Altara faz manual no v1) | `area/db` `area/infra` `type/docs` `priority/p1` | P |
| 22 | E2E test (Playwright): login → onboarding → Coach Home | `area/infra` `type/feature` `priority/p1` | M |

### M2 · Engine + Trilhas (10 issues)

| # | Título | Labels | Est. |
|---|---|---|---|
| 23 | Epic: Engine de geração + primeira trilha completa | `area/engine` `type/feature` `priority/p0` | — |
| 24 | Estrutura `/packages/templates/trilhas/` + schema TypeScript pra template | `area/engine` `priority/p0` | M |
| 25 | Template curado: Fundamentos de IA pro Comercial | `area/engine` `type/docs` `priority/p0` | M |
| 26 | Template curado: Especialização Comercial (Copilot) | `area/engine` `type/docs` `priority/p1` | M |
| 27 | Endpoint `/api/trilhas/gerar` com Anthropic + Vercel AI SDK | `area/llm` `area/engine` `priority/p0` | G |
| 28 | Cache de trilhas geradas por perfil (PRD §3.12) | `area/engine` `area/db` `priority/p1` | M |
| 29 | Validação de output da trilha gerada (PRD §3.9) | `area/engine` `priority/p1` | M |
| 30 | Trilha page (PRD §5.6) com timeline horizontal e cards de lições | `area/coach` `priority/p0` | M |
| 31 | Lição page — padrão múltipla escolha (PRD §5.7.1) | `area/coach` `priority/p0` | M |
| 32 | Sistema de pontos + streak básico (PRD §5.10) | `area/coach` `priority/p1` | M |
| 33 | Eventos telemetria: trilha.iniciada, trilha.completada, licao.completada | `area/telemetria` `priority/p1` | P |

### M3 · Workflow + Challenge (11 issues) ← v1 interno usável

| # | Título | Labels | Est. |
|---|---|---|---|
| 34 | Epic: Workflow handoff + Challenge + HQ Home com KPIs reais | `area/coach` `area/hq` `type/feature` `priority/p0` | — |
| 35 | Workflow handoff page (PRD §5.10) | `area/coach` `priority/p0` | M |
| 36 | UI de preenchimento de placeholders no prompt (PRD §6.2) | `area/coach` `priority/p0` | M |
| 37 | Reportar aplicação real: form + upload print no Supabase Storage | `area/coach` `priority/p0` | M |
| 38 | Padrão exercício: highlight/marker em texto (PRD §5.7.1) | `area/coach` `priority/p1` | M |
| 39 | Celebrações intermediárias 25/50/75% (PRD §5.7.2) | `area/coach` `priority/p2` | P |
| 40 | Mecânica de Challenge: criação, regras de pontuação, snapshot final | `area/engine` `area/db` `priority/p0` | G |
| 41 | Leaderboard ao vivo (individual + por departamento) | `area/hq` `area/coach` `priority/p0` | M |
| 42 | Encerramento de Challenge + badge especial pros top 3 | `area/engine` `priority/p1` | M |
| 43 | HQ Home com 4 KPIs reais calculados do banco | `area/hq` `priority/p0` | G |
| 44 | Próxima ação recomendada na HQ Home (heurística inicial) | `area/hq` `priority/p2` | M |
| 45 | E2E test: completar trilha → desbloquear workflow → reportar aplicação | `area/infra` `priority/p1` | M |

### M4 · Apply / Use Case Builder (10 issues)

| # | Título | Labels | Est. |
|---|---|---|---|
| 46 | Epic: Apply funcional ponta a ponta | `area/apply` `area/llm` `type/feature` `priority/p0` | — |
| 47 | Estrutura `/packages/templates/use-cases/` + 5-8 use cases curados | `area/apply` `type/docs` `priority/p0` | G |
| 48 | Apply Catálogo: search + filtros + grid de use cases (PRD §5.9.1) | `area/apply` `priority/p0` | M |
| 49 | Apply Chat: streaming endpoint (Anthropic Claude Sonnet) | `area/apply` `area/llm` `priority/p0` | G |
| 50 | Apply Chat UI com sidebar de plano dinâmico (PRD §5.9.2) | `area/apply` `priority/p0` | G |
| 51 | System prompt do Apply Coach iterado (versionar em `/lib/llm/prompts/`) | `area/llm` `type/spike` `priority/p0` | M |
| 52 | Tool `gerarOutput`: structured generation pra Action Plan + Prompt | `area/apply` `area/llm` `priority/p0` | M |
| 53 | Apply Output page (PRD §5.9.3): Action Plan + Customized Prompt + 4 Guides | `area/apply` `priority/p0` | M |
| 54 | Modal "Seu prompt customizado" (PRD §5.9.4) | `area/apply` `priority/p1` | P |
| 55 | 4 Guides em MDX em `/packages/templates/guides/` | `area/apply` `type/docs` `priority/p1` | M |
| 56 | "Salvar como workflow da empresa" (cria draft pra champion aprovar) | `area/apply` `area/hq` `priority/p1` | M |

### M5 · HQ profundidade + E-mails (9 issues)

| # | Título | Labels | Est. |
|---|---|---|---|
| 57 | Epic: HQ profundidade + e-mails transacionais | `area/hq` `area/email` `type/feature` `priority/p0` | — |
| 58 | HQ Adoção & ROI completa: gráfico DAU/WAU, top funcionários, ROI breakdown | `area/hq` `priority/p0` | G |
| 59 | HQ Challenges expandido: toggle individual/dept, histórico de encerrados | `area/hq` `priority/p1` | M |
| 60 | HQ Time + drill-down por funcionário | `area/hq` `priority/p1` | M |
| 61 | HQ Workflows + ações do champion (editar, arquivar, destaque, obrigatório) | `area/hq` `priority/p1` | G |
| 62 | Setup Resend + React Email + helper `sendEmail()` | `area/email` `area/infra` `priority/p0` | M |
| 63 | Templates de e-mail (6+): welcome, certificação, feedback trimestral, alerta adoção, call-out CEO, convite review | `area/email` `priority/p0` | M |
| 64 | Vercel Cron jobs: lembrete diário, feedback trimestral, anonimização 24m | `area/infra` `area/email` `priority/p1` | M |
| 65 | Export CSV de métricas pra BI externa (PRD §7.13) | `area/hq` `priority/p2` | M |

### M6 · Polish + Piloto (10 issues)

| # | Título | Labels | Est. |
|---|---|---|---|
| 66 | Epic: Certificação + Floating Assistant + cliente piloto 1 | `area/coach` `area/hq` `type/feature` `priority/p0` | — |
| 67 | Certificação compartilhável: PNG via @vercel/og + URL pública de validação | `area/coach` `priority/p0` | M |
| 68 | Floating Assistant: chat bubble persistente + escalar pro Apply (PRD §5.14) | `area/coach` `area/apply` `priority/p1` | G |
| 69 | Casos-âncora: seleção manual pelo champion (PRD §7.9) | `area/hq` `priority/p1` | M |
| 70 | HQ Configurações: granularidade ranking, opt-in compartilhamento, salário por dept | `area/hq` `priority/p1` | M |
| 71 | Onboarding empresa via UI (substitui processo manual do M0) | `area/hq` `priority/p1` | M |
| 72 | Performance pass: lighthouse, queries lentas, imagens otimizadas | `area/infra` `type/chore` `priority/p1` | M |
| 73 | Accessibility pass: axe-core, focus visível, contraste AA | `area/infra` `area/design-system` `priority/p1` | M |
| 74 | E2E tests dos 5 fluxos críticos (Playwright) | `area/infra` `priority/p1` | G |
| 75 | Runbook de onboarding de cliente piloto (`docs/onboarding-piloto.md`) | `type/docs` `priority/p0` | M |
| 76 | **Cliente piloto 1: onboarding + workshop kickoff (Semana 1)** | `priority/p0` | G |

---

## Como executar (gh CLI)

Quando for criar tudo no GitHub, comandos sugeridos (rodar do root do repo).

### 1. Criar labels

```bash
# Áreas
gh label create "area/hq" --color "5B47E8"
gh label create "area/coach" --color "7B6BE8"
gh label create "area/apply" --color "A855F7"
gh label create "area/engine" --color "4B38C7"
gh label create "area/infra" --color "78766F"
gh label create "area/auth" --color "DC2626"
gh label create "area/llm" --color "EAB308"
gh label create "area/email" --color "16A34A"
gh label create "area/db" --color "0284C7"
gh label create "area/design-system" --color "EC4899"
gh label create "area/telemetria" --color "B45309"

# Tipos
gh label create "type/feature" --color "0E8A6F"
gh label create "type/chore" --color "586069"
gh label create "type/bug" --color "B91C1C"
gh label create "type/spike" --color "8B5CF6"
gh label create "type/docs" --color "1F8FFF"

# Prioridades
gh label create "priority/p0" --color "DC2626"
gh label create "priority/p1" --color "D97706"
gh label create "priority/p2" --color "78766F"
```

### 2. Criar milestones

```bash
gh api repos/:owner/:repo/milestones -f title="M0 · Setup" -f description="Dev ambiente reproduzível"
gh api repos/:owner/:repo/milestones -f title="M1 · Foundation" -f description="Auth + onboarding + Coach Home"
gh api repos/:owner/:repo/milestones -f title="M2 · Engine + Trilhas" -f description="Primeira trilha gerada + lição"
gh api repos/:owner/:repo/milestones -f title="M3 · Workflow + Challenge" -f description="v1 interno usável"
gh api repos/:owner/:repo/milestones -f title="M4 · Apply" -f description="Coach chat conversational"
gh api repos/:owner/:repo/milestones -f title="M5 · HQ + E-mails" -f description="Champion/CEO operam programa"
gh api repos/:owner/:repo/milestones -f title="M6 · Polish + Piloto" -f description="Cliente piloto 1 onboarded"
```

### 3. Criar issues (exemplo)

```bash
gh issue create \
  --title "Inicializar Next.js 15 + TypeScript strict + Tailwind + shadcn/ui" \
  --body "$(cat <<'EOF'
## Contexto
Ref: SPEC §4 (estrutura do repositório)

Bootstrap do projeto seguindo a stack definida no SPEC.

## O que entregar
- [ ] `apps/web/` com Next.js 15 App Router
- [ ] TypeScript strict habilitado
- [ ] Tailwind CSS configurado
- [ ] shadcn/ui instalado (Button, Card iniciais)
- [ ] ESLint + Prettier configurados
- [ ] `pnpm dev` roda local

## Estimativa
M
EOF
)" \
  --label "area/infra,type/chore,priority/p0" \
  --milestone "M0 · Setup"
```

Ou via script `scripts/seed-issues.sh` que processa toda a lista de uma vez. Templates de bodies podem ficar em `scripts/issues/*.md` referenciados pelo script.

### 4. Setup branch protection na main

Via GitHub UI (Settings → Branches → Add rule):
- Require pull request before merging (1 approval)
- Require status checks: `ci` (do GitHub Actions)
- Require linear history (força squash)

---

## Tracking semanal

Sugestão de cadência (não obrigatório):

- **Segunda 9h:** triage rápida — repriorizar P1/P2, mover issues entre milestones se necessário
- **Sexta 17h:** demo interna do que foi entregue na semana + retro curta de 15min
- **Fim do milestone:** demo completa + checkpoint contra critérios de "pronto" da milestone

Sem stand-ups diários — overhead alto pra time de 2 que trabalha junto.

---

## Quando expandir gestão

GitHub Issues serve bem até **~10 devs ativos ou >200 issues abertas simultâneas**. Sinais pra migrar (ou complementar):

- Issues órfãs sem assignee/milestone constantes → criar GitHub Project board (kanban)
- Dependências complexas entre features → Linear ou Jira
- Roadmap público pros clientes → adicionar GitHub Discussions ou ferramenta separada (Productboard)

V1 não precisa de nada disso.

---

## Changelog

- **2026-05-19 (v1):** Plano inicial de implementação. 7 milestones (M0-M6) cobrindo 12 semanas, ~70 issues mapeadas com label/milestone/estimativa. Templates de issue e PR documentados. Comandos `gh` pra setup automatizado. Workflow trunk-based com PR review obrigatório.
