# Altara

**Plataforma de Adoção de IA para empresas mid-market que já pagam Copilot/Claude/GPT mas não veem o time usando.**

Sua transformação digital agora inclui adoção de IA. Altara é a peça mensurável em semanas: trilhas personalizadas pro seu setor, procedimentos prontos e governança pro time usar a IA que vocês já têm.

---

## O que tem nesse repo

Esse repo contém a fundação completa do produto Altara — do posicionamento estratégico ao SPEC técnico — pronto pra time de 2 devs executar.

| Arquivo | O que é | Pra quem |
|---|---|---|
| [BRAND_BRIEF.md](BRAND_BRIEF.md) | Posicionamento, ICP validado, diferenciação vs. Section, decisões em aberto | Founder, CEO/clientes, equipe de marketing |
| [PRD.md](PRD.md) | Product Requirements — 8 seções cobrindo programa 60 dias, arquitetura, engine de trilhas, HQ, Coach (com Apply), workflows, métricas e consolidação | Founder, dev, design |
| [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) | Princípios, paleta, tipografia (Satoshi), componentes, padrões UX específicos | Dev, design |
| [SPEC.md](SPEC.md) | Stack técnica opinada, schema do banco, padrões de API, roadmap 12 semanas | Dev |
| [mockups/](mockups/) | 16 telas HTML navegáveis (HQ, Coach, Apply, Onboarding) com CSS compartilhado | Founder (pitch), dev (brief visual) |
| [design-system-preview.html](design-system-preview.html) | Preview standalone do DS (paleta, tipografia, componentes) | Design, founder |

---

## A tese, em uma página

**O cliente:** CEO de empresa mid-market BR (~100 funcionários) que já paga Microsoft Copilot ou ChatGPT Enterprise. O investimento está subutilizado — time não tem jornada clara de IA, ferramentas ociosas, ROI invisível.

**A frase do cliente que originou o produto:** *"acho que o caminho que eu gostaria de ver é o que podemos implementar em treinamento, procedimentos e enterprise de forma rápida, com bom custo-benefício e quais recursos precisamos."*

**Como Altara responde:**

- **Programa de 60 dias** com começo-meio-fim (não SaaS frio): diagnóstico → workshop → 2 Challenges → review com ROI mensurado
- **Trilhas geradas por contexto** (não catálogo fixo como Section) — cada lição fala do *seu* negócio, não de SaaS americano fictício
- **Coach pessoal conversational** (Apply) — funcionário descreve problema, Coach refina e gera plano + prompt customizado
- **Workflows como entregável** — passo a passo + prompts otimizados aproveitando recursos nativos de Copilot/Claude/GPT (sem código custom)
- **HQ pro CEO** com ROI visível, baseline+delta em toda métrica, casos-âncora narrativos
- **Distribuição via colaboradores** — certificações compartilháveis no LinkedIn como canal de marketing orgânico

**O que Altara não é:** não compete com Copilot (vive em cima), não é Section traduzido (engine vs. catálogo), não é consultoria de TD (vende programa mensurável em 60 dias).

---

## Como navegar os docs

Dependendo de quem você é:

**Founder / CEO / cliente potencial:**
1. [BRAND_BRIEF.md](BRAND_BRIEF.md) (5 min) — entender o que Altara é e por que importa
2. [mockups/index.html](mockups/index.html) (15 min navegando) — ver o produto em telas
3. [PRD.md §1 (Programa 60 dias)](PRD.md) (10 min) — entender a jornada do cliente

**Design / produto:**
1. [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) — princípios, paleta, tipografia, componentes
2. [design-system-preview.html](design-system-preview.html) — preview interativo
3. [mockups/](mockups/) — todas as telas navegáveis
4. [PRD.md §4-6 (HQ, Coach)](PRD.md) — comportamento detalhado

**Dev (vai construir o produto):**
1. [SPEC.md](SPEC.md) — stack, schema, roadmap 12 semanas
2. [PRD.md](PRD.md) inteiro — o que cada feature faz e por que
3. [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) — pra implementar UI com os tokens corretos
4. [mockups/](mockups/) — referência visual de cada tela

---

## Ver mockups navegáveis

Os mockups são HTML standalone — abrem direto no navegador:

```bash
open mockups/index.html
```

A página inicial é um hub navegável com cards pra cada tela, organizado em:

- **HQ (líder/CEO)** — 5 telas (Home, Adoção & ROI, Challenges, Time, Workflows)
- **Coach (funcionário)** — 10 telas (Home, Trilha, Lição, Celebração, Workflow handoff, Certificação, Apply Catálogo, Apply Chat, Apply Output, Persona Intro)
- **Onboarding + Floating Assistant**

CSS compartilhado em [mockups/styles.css](mockups/styles.css) aplica o Design System (Satoshi, paleta purple/violet, pills, off-white quente).

---

## Stack técnica (do SPEC)

Resumo opinado pra time de 2 devs entregar em 12 semanas:

| Camada | Tecnologia |
|---|---|
| Frontend + Backend | Next.js 15 (App Router) + TypeScript |
| UI | Tailwind CSS + shadcn/ui (Radix) |
| Banco + Auth + Storage | Supabase (Postgres + RLS + magic link) |
| ORM | Drizzle |
| LLM | Anthropic Claude (Sonnet) + OpenAI (multi-LLM) via Vercel AI SDK |
| E-mail | Resend + React Email |
| Hosting | Vercel (São Paulo region pro DB) |
| Observabilidade | Sentry + PostHog |

**Custo operacional estimado:** ~$130-180/mês durante piloto.

Detalhes completos em [SPEC.md](SPEC.md).

---

## Status do projeto

| Artefato | Status |
|---|---|
| Brand brief | v1 fechado |
| PRD | v1.15 — 8 seções completas, ~1500 linhas |
| Design System | v2 — tipografia e paleta aprovadas |
| Mockups | 16 telas em 3 rounds completos |
| SPEC técnico | v1 — pronto pra dev começar |
| Código | **M0 scaffolded** (2026-05-25) — Next.js 15 + Supabase + Drizzle + DS aplicado |
| Cliente piloto | não iniciado |

**Próximo marco:** M1 — Foundation (auth + onboarding + Coach Home com dados reais). Ver [ROADMAP.md](ROADMAP.md).

**Foco estratégico (2026-05-25):** começar pelo AI Coach. HQ é analisado manualmente no início — produto-HQ entra depois que Coach gerar dados de engajamento.

## Setup rápido

```bash
pnpm install
cp .env.example apps/web/.env.local   # preencha as chaves
pnpm dev                              # http://localhost:3000
```

Guia completo (contas Supabase/Vercel/Sentry/PostHog/Anthropic): **[docs/SETUP.md](docs/SETUP.md)**

---

## Estrutura do repo

```
altara-ai-adoption/
├── README.md                       (esse arquivo)
├── BRAND_BRIEF.md                  posicionamento + ICP
├── PRD.md                          requirements completos (8 seções)
├── DESIGN_SYSTEM.md                tokens, componentes, padrões UX
├── SPEC.md                         stack + schema + roadmap dev
├── ROADMAP.md                      milestones M0-M6 + ~70 issues
├── design-system-preview.html      preview do DS
├── mockups/                        16 telas HTML navegáveis
├── apps/
│   └── web/                        Next.js 15 — código da aplicação
│       ├── app/                    App Router (coach/, login/, auth/callback)
│       ├── components/             UI (shadcn/ui + customizados)
│       ├── lib/                    db/, auth/, supabase/, llm/, events/, email/, posthog/
│       └── middleware.ts           proteção de rota
├── packages/
│   └── templates/                  trilhas/, use-cases/, guides/ (curados)
├── supabase/
│   ├── config.toml                 config local
│   ├── migrations/                 SQL migrations versionadas
│   └── seed.sql                    seed pra dev
├── docs/
│   └── SETUP.md                    guia de setup local
└── .github/
    ├── workflows/ci.yml            typecheck + lint + test
    └── ISSUE_TEMPLATE/, PULL_REQUEST_TEMPLATE.md
```

---

## Documentos versionados

Todo arquivo `.md` tem:
- **Header** com última atualização + status + referências cruzadas
- **Changelog** no final com histórico de mudanças (formato: `data (vN.M): mudança`)

Princípio: PRD/DS/SPEC evoluem ao longo da vida do produto. Não há "PRD v2 do zero" — há `PRD v1.N` com decisões atualizadas e seções refinadas.

---

## Próximas iterações fora desse repo

- **Pricing + GTM** — modelo de cobrança (GymPass-like? per-tenant? tier?), wedge de entrada da semana 0
- **Plano operacional Altara** — equipe interna pros primeiros 12 meses (curadoria humana de templates, vendas, cliente piloto)
- **Plano jurídico/LGPD** — termos, política, contrato cliente, DPA
- **Identidade visual** — logo, wordmark final, ilustrações pra empty states
- **Setup do dev environment** — repo de código separado seguindo a estrutura do SPEC

---

## Contato

João Bruno Palermo · `jbpalermo@znit.ai`
