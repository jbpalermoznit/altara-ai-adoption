# Altara — PRD v1

**Última atualização:** 2026-05-18
**Status:** rascunho de trabalho — documento pra pensar produto, não pra vender nem pra executar ainda
**Brief de referência:** [BRAND_BRIEF.md](BRAND_BRIEF.md)

---

## Sumário (mapa do PRD completo)

1. **Programa 60 dias — jornada do cliente** — escrito (v1.1)
2. **Visão & arquitetura geral** — escrito (v1.3)
3. **Trilhas: engine de geração por contexto** — escrito (v1.5)
4. **HQ (visão líder/CEO)** — escrito (v1.7)
5. **Coach (visão funcionário)** — escrito (v1.15)
6. **Workflows como entregável** — escrito (v1.11)
7. **Métricas, ROI e telemetria** — escrito (v1.13)
8. **Consolidação: roadmap, princípios, riscos, próximos passos** — escrito nesta versão (v1.14)

> **PRD v1 completo.** Próxima evolução é fora do PRD: SPEC técnico, mockups, pricing, GTM.

---

## 1. Programa 60 dias — jornada do cliente

### 1.1 Por que começar pelo programa

O programa é a forma física do produto Altara. Não vendemos SaaS frio com login e tutorial — vendemos jornada de 60 dias com começo-meio-fim, output mensurável e renovação como contrato anual. Esta seção define o que o cliente experimenta semana a semana. Cada elemento desta jornada deriva uma exigência do produto (módulo, fluxo, integração) que as seções 2–7 vão detalhar.

### 1.2 Saídas concretas em 60 dias

Ao fim do programa, a empresa cliente tem:

- **N workflows ativos e documentados** (procedimentos salvos no Altara, em uso real pelo time)
- **M% do time certificado** em pelo menos 1 trilha
- **HQ funcional** com tracking de uso, % adoção, ROI mensurado
- **Champion interno treinado** (1 funcionário designado pelo CEO que conduz adoção continuada)
- **Plano de continuidade** ("recursos necessários" — o que escalar, o que parar, próximos 12 meses)
- **Renovação proposta** (contrato anual com modelo recorrente)

### 1.3 Semana 0 — Setup e coleta de contexto

**Objetivo:** Altara aprende a empresa antes do funcionário entrar no produto. Toda a personalização das trilhas depende do contexto coletado aqui.

**Quem participa:** CEO + 1 champion designado (RH, COO ou líder de TD)

**O que rola:**

- **Reunião de kickoff (60-90min):** Altara faz entrevista estruturada de contexto. Setor, indústria, modelo de negócio (B2B/B2C, serviços/produto), departamentos, headcount por área, ferramentas de IA pagas (Copilot, Claude, GPT Enterprise, outras), maturidade percebida.
- **Definição de departamentos prioritários:** CEO escolhe 1-2 áreas para foco inicial (ex: Comercial + Marketing).
- **Definição do workflow estratégico:** CEO articula 1-2 resultados específicos que quer ver acontecer no programa (ex: "que o time comercial entregue propostas comerciais 50% mais rápido", "que o marketing produza relatórios de mercado semanais").
- **Setup técnico:** lista de funcionários (nomes, cargos, departamentos), comunicação interna sobre o programa (template enviado pelo Altara), agenda do workshop.

**Output da semana 0:**
- Documento de contexto da empresa (alimenta engine de trilhas)
- Lista de funcionários cadastrados
- Workflow estratégico declarado (vira KPI do programa)
- Plano de comunicação interna enviado

**Decisão em aberto:** a entrevista da semana 0 é feita por humano (você, no início; equipe Altara depois) ou por agente Altara guiando o CEO? Provável: humano nos primeiros clientes pra calibrar engine; agente depois.

### 1.4 Semana 1 — Diagnóstico + Workshop kickoff

**Objetivo:** baseline mensurável + momento emocional que enche o programa.

**Diagnóstico de uso atual (paralelo, dias 1-5):**

- **v1 — captura manual (sem dependência de TI do cliente):**
  - Survey estruturado a todos funcionários: "Você usou IA no trabalho na última semana? Pra quê? Com qual ferramenta? O que te impede de usar mais?"
  - Questionário breve respondido pelo admin de TI sobre licenças ativas, configuração de Copilot/Studio/GPTs/Projects, políticas internas de uso de IA.
- **Roadmap automação (v2+):** integração com Microsoft 365 Admin Center / Microsoft Graph (Copilot Usage Report, Usage Analytics) e APIs equivalentes dos demais provedores conforme disponibilidade. Coleta sem fricção, dados reais de uso por funcionário.
- **Decisão de arquitetura desde já:** o modelo interno de dados em v1 é desenhado no formato que a integração v2 vai trazer — pra que automatizar depois seja troca de fonte, não migração de schema.
- Gera **Relatório Diagnóstico**: % do time que usou IA, frequência média, top casos de uso atuais, principais bloqueios percebidos.
- **Esse relatório é o baseline contra o qual o ROI do programa vai ser comparado em semana 8.**

**Workshop kickoff (dia 5-7):**

- Sessão online ou presencial (decidida com CEO na semana 0), 90-120min
- Audiência: toda empresa OU departamentos prioritários (decisão do CEO)
- Estrutura:
  - **Abertura pelo CEO** (15min): por que IA agora, por que Altara, expectativas
  - **Showcase ao vivo** (30min): Altara conduz 1-2 workflows aplicados ao contexto da empresa, em tempo real. Funcionários veem resultado concreto.
  - **Hands-on em duplas** (30min): cada funcionário roda 1 workflow simples já personalizado pra sua função. **Sai do workshop com primeiro entregável em mãos** (relatório, email, análise).
  - **Próximos passos** (15min): como acessar Coach, expectativa de tempo (15-20min/dia), o que acontece nas próximas 7 semanas.

**Output da semana 1:**
- Relatório Diagnóstico assinado pelo CEO (baseline ROI)
- 100% dos funcionários convidados entraram no Coach pelo menos 1x
- 1 entregável real por funcionário (criado no workshop)
- Engajamento emocional do time (não subestimar — esse momento define se o programa pega)

**Decisão em aberto:** workshop conduzido por você (humano, founder-led nos primeiros clientes) ou por equipe Altara treinada ou por Coach automatizado? Provável: humano nos primeiros 10 clientes; videoaula + facilitação leve depois.

### 1.5 Semanas 2-3 — Challenge 1: Fundamentos

**Por que Challenge, não "ciclo de trilhas solto":** trilha sem prazo e sem competição perde pra tudo na agenda do funcionário. Estruturamos o primeiro ciclo como **Challenge nomeado**, com janela definida, mecânica de pontos, leaderboard e fechamento público. Pega o que funciona em Duolingo (streak + ranking semanal) e adiciona o peso de evento corporativo (CEO endossa, time vê acontecer).

**Objetivo:** cada funcionário completa primeira trilha + desbloqueia primeiro workflow + aplica em trabalho real, dentro de 14 dias, com ranking visível.

**O que rola no Coach (funcionário):**

- Onboarding pessoal (5min): cargo, tarefas-tipo da semana, ferramenta de IA preferida → alimenta engine pra gerar trilha personalizada.
- **Trilha 1 — "Fundamentos de IA pro seu trabalho"** gerada por contexto (indústria + função). Estrutura típica: 4 lições de ~15min, streak diário, pontos por progresso.
- Última lição entrega **Workflow 1** pronto: passo a passo + prompts otimizados + plano de implementação no Copilot/Claude/GPT que o funcionário usa.
- Funcionário aplica workflow no trabalho real essa semana (não é exercício teórico) e marca a aplicação no Coach (gera pontos bônus).

**O que rola no HQ (líder/CEO):**

- Dashboard popula em tempo real: % time engajado, # lições completadas, # workflows desbloqueados, **leaderboard individual e por departamento**.
- Alerta automático se algum departamento ficar pra trás (>50% sem completar até dia 10 do Challenge).
- CEO recebe lembrete por e-mail pra fazer call-out público interno meio do Challenge (dia 7). Altara envia o texto pronto; canal de divulgação é escolha da empresa (e-mail interno, Slack/Teams, intranet, reunião).

**Output do Challenge 1:**

- ≥70% dos funcionários completaram Trilha 1.
- ≥70% têm pelo menos 1 workflow ativo e usado.
- Ranking final divulgado publicamente; top 3 individuais e top departamento reconhecidos.
- Primeiros dados reais de adoção no HQ.

**Decisão em aberto:** trilha 1 é igual pra todos por contexto + função, ou cada funcionário recebe versão única? Provável: template forte por (indústria × função), com slots adaptados pelo agente.

#### 1.5.1 Mecânica de Challenge (aplica também ao Challenge 2 em 1.7)

**Componentes:**

- **Janela definida com prazo visível:** data de início e fim explícitas, countdown no Coach e no HQ. Janelas típicas: 14 dias (Challenge 1), 21 dias (Challenge 2). Sem janela, funcionário adia e o produto morre.
- **Sistema de pontos:**
  - Lição completada → pontos base
  - Workflow desbloqueado → bônus
  - Aplicação real reportada (com print, exemplo, ou self-report estruturado) → bônus maior
  - Streak diário → multiplicador
  - Calibração fina de valores fica pra seção 5 (Coach).
- **Leaderboard:**
  - Coach (funcionário) vê: top N geral, sua posição, top do seu departamento.
  - HQ (CEO/champion) vê: ranking completo individual + agregado por departamento.
  - Identificação configurável no setup: nome real, apelido, ou só departamental. Algumas culturas BR resistem a leaderboard nominal — o cliente escolhe.
- **Fechamento público:**
  - Anúncio do top 3 individuais e top departamento. **No v1**, Altara envia o template pronto por e-mail pro CEO/champion, que dispara no canal preferido da empresa (e-mail interno, Slack/Teams, intranet). Integração direta com esses canais entra sob demanda em versões futuras.
  - Badge especial no perfil do Coach.
  - Certificado da trilha (PDF + link compartilhável no LinkedIn, opcional).
  - **Reconhecimento ao final:** badge digital sempre; prêmio físico/experiência opcional, custeado pelo cliente.

**Decisões em aberto sobre mecânica:**

- **Granularidade de ranking:** nominal vs apelido vs só departamental. Provável: oferecer as 3 no setup, CEO escolhe pela cultura da empresa.
- **Premiação física:** quem operacionaliza — Altara curadoria + cliente paga, ou cliente decide e executa sozinho? A definir.
- **Opt-out de ranking:** funcionário pode sair da visibilidade pública? Provável: sim (privacidade), mas continua pontuando pro agregado.

### 1.6 Semana 4 — Review com CEO (checkpoint)

**Objetivo:** validar momentum, ajustar rota, escolher próximas trilhas estratégicas.

**Reunião de checkpoint (45-60min):**

- **Métricas:** % time engajado, # trilhas completadas, # workflows ativos, top funcionários por uso
- **Casos concretos:** 2-3 entregas reais que o time fez com Altara nas últimas 2 semanas (Altara prepara, CEO valida)
- **Bloqueios identificados:** quem não engajou, por quê, plano pra recuperar
- **CEO escolhe próximas 1-2 trilhas estratégicas:** alavancas para departamentos ou casos específicos (ex: "Atendimento ao Cliente com IA", "Análise Financeira com Copilot")

**Output da semana 4:**
- Roadmap das semanas 5-8 ajustado
- Decisão de continuidade do programa (CEO compromete-se a continuar ou para — esse momento existe propositalmente)
- Champion interno começa a ser ativado (assume parte da gestão diária da adoção)

### 1.7 Semanas 5-7 — Challenge 2: Especialização

**Estruturado como Challenge** (mesma mecânica de 1.5.1, janela maior: 21 dias). Foco em profundidade, casos de uso recorrentes e ativação do champion.

**Objetivo:** trilhas avançadas por departamento, workflows complexos, biblioteca de SOPs da empresa, champion operacional.

**O que rola:**

- Trilhas avançadas geradas pra cada departamento prioritário (ex: "Atendimento ao Cliente com IA pra varejo", "Análise Financeira com Copilot pra controladoria").
- Workflows salvos como **SOPs versionados da empresa** (compartilháveis entre funcionários, editáveis pelo champion).
- Champion interno ganha acesso a ferramentas extra no HQ: editar workflows, designar trilhas obrigatórias por equipe, ver relatórios de departamento.
- Funcionários veteranos sugerem workflows novos (a partir do que tão usando) — feedback loop pro engine de geração.
- Leaderboard do Challenge 2 pondera profundidade (workflows complexos valem mais que lição simples).

**Output do Challenge 2:**

- Biblioteca de workflows da empresa (~10-20 SOPs ativos).
- Champion operacional (autônomo no HQ).
- Funcionários executando workflows sem precisar voltar à trilha.
- Ranking final divulgado; reconhecimento público dos top funcionários e do champion.

### 1.8 Semana 8 — Review final + renovação

**Objetivo:** consolidar ROI, fechar programa, propor continuidade.

**Reunião final (90min) com CEO + champion:**

- **Relatório ROI consolidado:**
  - Adoção: % time ativo semanal, antes vs. depois (vs. baseline da semana 1)
  - Capacitação: % time com pelo menos 1 certificação
  - Procedimentos: # workflows ativos, # execuções no período, departamentos cobertos
  - Estimativa de horas economizadas (self-report estruturado + dados de uso)
  - **Casos-âncora:** 3-5 histórias concretas (com nomes) de impacto real no negócio
- **"Recursos necessários" atualizado:** o que escalar (mais trilhas, mais departamentos), o que parar (workflows que ninguém usa), o que adicionar (ferramentas de IA que faz sentido contratar agora)
- **Proposta de continuidade:** contrato anual recorrente. Inclui:
  - Novas trilhas geradas conforme empresa evolui
  - Champion com suporte continuado
  - Review trimestral com CEO
  - Acesso a novos workflows e atualizações de produto

**Output da semana 8:**
- Relatório ROI assinado pelo CEO (vira material de case com permissão)
- Decisão de renovação (sim/não)
- Plano dos próximos 12 meses (se renovou)

### 1.9 Resumo da jornada

| Semana | Fase | Quem age | Output principal |
|---|---|---|---|
| 0 | Setup | CEO + champion + Altara | Contexto da empresa, workflow estratégico declarado |
| 1 | Diagnóstico + Kickoff | Empresa toda + Altara | Baseline ROI, primeiro entregável real por funcionário |
| 2-3 | Ciclo 1 | Funcionários no Coach | Trilha 1 + Workflow 1 ativos por funcionário |
| 4 | Checkpoint | CEO + Altara | Ajuste de rota, próximas trilhas escolhidas |
| 5-7 | Ciclo 2 | Funcionários + champion | Biblioteca de SOPs, champion operacional |
| 8 | Review final | CEO + champion + Altara | ROI consolidado, renovação |

### 1.10 O que esse programa exige do produto (deriva pras próximas seções)

Este programa só funciona se o produto Altara tiver:

- **Onboarding empresa estruturado** (semana 0) → seção 2 (arquitetura)
- **Engine de geração de trilhas por contexto** → seção 3
- **Coach com gamificação, streaks, certificação por trilha** → seção 5
- **Sistema de Challenge** (janelas com prazo, pontuação, leaderboard, fechamento público) → seção 5
- **Workflows como output da trilha, salvos como SOPs versionados** → seção 6
- **HQ com diagnóstico inicial, métricas em tempo real, ROI consolidado, alertas, leaderboard agregado** → seção 4
- **Champion role** com permissões específicas no HQ → seção 4
- **Coleta de uso v1 manual** (self-report estruturado) **com modelo de dado já desenhado pra integração v2** (Microsoft Graph / Copilot Usage APIs) → seção 7
- **Multi-LLM por design** (cliente pode ter só Copilot, ou Copilot+Claude, etc.) → seção 2

---

## 2. Visão & arquitetura geral

### 2.1 Visão de produto

Altara é um **sistema de adoção de IA empresarial entregue como programa**. Opera em três camadas:

1. **Capacitação adaptativa** — trilhas personalizadas por contexto, com prazo e ranking (Challenges), que ensinam o funcionário a usar IA dentro do trabalho dele.
2. **Procedimentos executáveis** — workflows como SOPs versionados que aproveitam recursos nativos de Copilot/Claude/GPT, sem código custom.
3. **Governança e ROI** — HQ que dá visibilidade ao CEO sobre adoção, uso, casos concretos e impacto mensurado vs. baseline.

Sistema funciona em **multi-tenant** (cada empresa cliente é um tenant isolado), **multi-LLM** (cliente declara quais ferramentas paga; Altara só habilita o que aplica) e **sem código custom por cliente** (o que escala é o engine, não engenharia bespoke).

### 2.2 Princípios de design

Decisões de produto devem passar por estes princípios. Se uma feature contradiz princípio, ou o princípio muda ou a feature cai.

1. **Aproveita o que o cliente já tem.** Não substitui Copilot/Claude/GPT — orquestra. Não substitui M365/Slack/Teams — integra. Nada do que o cliente já paga vira ocioso por causa do Altara.
2. **Personalização por contexto é first-class.** Tudo que o funcionário vê — trilha, exercício, workflow, prompt — é gerado considerando indústria + setor + função. Conteúdo genérico é exceção, não regra.
3. **Sem código custom por cliente.** Tudo é configuração, templates e workflows que aproveitam recursos nativos das IAs. Engenharia escala em produto, não em consultoria técnica.
4. **ROI é parte do produto, não relatório separado.** Cada tela do HQ e do Coach mostra impacto. Métricas não são dashboard opcional, são UI principal.
5. **Programa, não SaaS frio.** Produto tem começo-meio-fim (60 dias), com humanos da Altara no loop nos primeiros clientes. Automatiza progressivamente.
6. **Multi-LLM agnóstico por design.** Cliente escolhe ferramentas; Altara se molda. Sem exclusividade técnica com nenhum provedor.

### 2.3 Atores no sistema

| Ator | Onde opera | Função |
|---|---|---|
| **CEO/Líder** | HQ | Aprova programa, valida ROI, escolhe trilhas estratégicas, recebe reviews, dá call-outs públicos nos Challenges. |
| **Champion** | HQ (escopo limitado) + Coach | Funcionário designado pelo CEO. Conduz adoção dentro da empresa após semana 4. Edita workflows, atribui trilhas, monitora departamentos. |
| **Funcionário** | Coach | Faz trilhas, executa workflows, participa de Challenges, reporta aplicações reais. |
| **Admin Altara (interno)** | Painel interno | Gerencia tenants/clientes, monitora qualidade do engine, opera curadoria de templates, suporta clientes. |
| **Agentes Altara (LLM-powered)** | Engine de Geração | Geram trilhas personalizadas, geram workflows executáveis, analisam padrões de uso pra gerar insights pro HQ. |

### 2.4 Módulos lógicos do sistema

```
┌──────────────────────────────────────────────────────────────────┐
│                          TENANT (Empresa)                         │
│  Contexto: indústria, setor, departamentos, stack IA, funcionários│
└──────────────────────────────────────────────────────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
  ┌──────────┐           ┌──────────┐           ┌────────────────┐
  │    HQ    │           │  Coach   │           │ Engine Geração │
  │ (líder)  │           │ (func.)  │           │   (agentes)    │
  └──────────┘           └──────────┘           └────────────────┘
        │                       │                       │
        ▼                       ▼                       │
  ┌──────────┐           ┌────────────┐                 │
  │Telemetria│◄──────────┤ Workflows  │◄────────────────┘
  │& Métricas│           │(Biblioteca │
  │          │           │ da empresa)│
  └──────────┘           └────────────┘
        │
        ▼
  ┌────────────────────────────┐
  │ Integrações (v1)           │
  │  • Copilot/Claude/GPT      │
  │    (recursos nativos)      │
  │  • E-mail (lembretes,      │
  │    notificações)           │
  └────────────────────────────┘

           ┌─────────────────────────────────────┐
           │  Catálogo global (cross-tenant)     │
           │  Templates de trilhas, workflows    │
           │  populares (anonimizado)            │
           └─────────────────────────────────────┘
                          ▲
                          │ feedback agregado anônimo
                          │ (workflows populares viram templates)
```

**Descrição dos módulos:**

- **Tenant (Empresa)** — Modelo central. Carrega contexto empresarial, lista de funcionários, configurações de programa, licenças/billing, integrações ativas. Tudo no sistema é escopado a um tenant.
- **HQ (líder)** — Interface do CEO e do champion. Painel de adoção, ROI, leaderboards, alertas, gestão de programa, biblioteca da empresa, configurações.
- **Coach (funcionário)** — Interface do colaborador. Onboarding pessoal, trilhas personalizadas, Challenges, workflows executáveis, perfil/badges, leaderboard pessoal.
- **Engine de Geração** — Conjunto de agentes que recebem contexto (tenant + funcionário + objetivos) e produzem trilhas e workflows. Detalhado na Seção 3.
- **Catálogo / Biblioteca** — Dois níveis:
  - **Catálogo global** (cross-tenant): templates de trilhas e workflows populares, curados pelo time Altara. Alimenta o Engine.
  - **Biblioteca da empresa** (intra-tenant): workflows ativos da empresa, SOPs versionados, editáveis pelo champion.
- **Telemetria & Métricas** — Captura eventos (lições completadas, workflows usados, aplicações reportadas, dados de uso de Copilot/etc.), agrega em dashboards, calcula ROI vs. baseline. Detalhado na Seção 7.
- **Integrações (v1 enxuto):**
  - **IAs nativas (Copilot/Claude/GPT)** — pra dialeto de workflow e (quando viável, via APIs do provedor) telemetria de uso.
  - **E-mail** — único canal de comunicação na v1: lembretes diários, abertura/fechamento de Challenge, anúncios do CEO, certificados.
  - **Cortado do v1:** Slack/Teams/WhatsApp como canais de notificação, SSO corporativo, integrações com RH/CRM. Entram em versões futuras sob demanda real do cliente, não preemptivamente.
- **Painel Altara (interno)** — Não é módulo cliente. Operação interna: monitorar engine, curar templates, gerenciar tenants, suporte.

### 2.5 Fluxo macro: como um Challenge acontece end-to-end

1. **Setup (semana 0):** CEO + champion preenchem contexto da empresa no HQ → grava no Tenant.
2. **Onboarding funcionário (semana 1):** funcionário entra no Coach → preenche contexto pessoal (cargo, tarefas, ferramenta preferida).
3. **Geração da trilha:** Engine combina (contexto empresa + contexto funcionário + template do Catálogo global) → gera Trilha 1 personalizada → grava na conta do funcionário no Tenant.
4. **Challenge inicia:** janela de 14 dias abre. Coach mostra trilha + countdown + leaderboard.
5. **Funcionário consome lições:** cada evento (lição completada, exercício certo) vira ponto + entrada na Telemetria.
6. **Última lição entrega Workflow 1:** workflow gerado é salvo na Biblioteca da empresa + na conta do funcionário.
7. **Funcionário aplica no trabalho real:** reporta aplicação no Coach (texto, print, link) → evento bônus na Telemetria.
8. **HQ agrega em tempo real:** CEO/champion veem progresso, leaderboard individual e por departamento, alertas.
9. **Fechamento:** ao fim da janela, Coach calcula ranking final, HQ dispara template de anúncio pelo canal interno (Slack/Teams/etc.), badges digitais são entregues.
10. **Feedback loop:** workflows mais executados/avaliados entram no Catálogo global como templates candidatos (anonimizados), realimentando o Engine pros próximos clientes.

### 2.6 Multi-tenant + privacidade

- **Isolamento:** dados nominais de uma empresa nunca cruzam pra outra. Funcionário da empresa A não aparece em ranking ou catálogo da empresa B.
- **Cross-tenant aprendizado:** **só dados agregados anônimos** (workflows mais executados, trilhas mais aceitas, padrões de adoção) entram no Catálogo global pra melhorar o Engine. Nunca conteúdo específico do cliente sem permissão explícita.
- **Soberania de dados:** cliente pode exportar workflows da sua biblioteca a qualquer momento. Sem refém. Reforça o "não cria lock-in técnico" do brief.

### 2.7 Multi-LLM por design

- No setup, CEO/champion declara quais ferramentas a empresa paga: Copilot (Microsoft 365), Claude (Anthropic), ChatGPT Enterprise (OpenAI), outras.
- Engine filtra: só gera trilhas e workflows aplicáveis às ferramentas disponíveis. Funcionário não vê lição "use o Claude Projects" se a empresa não paga Claude.
- Workflows são escritos no "dialeto" de cada ferramenta:
  - **Copilot** → instruções pra Copilot Studio / agentes / declarações no M365 Copilot
  - **GPT** → instruções pra GPTs customizados / Projects no ChatGPT
  - **Claude** → Projects no Claude / Artifacts / contexto persistente
- Catálogo global tem **versões equivalentes** dos workflows pras diferentes ferramentas onde faz sentido.
- Quando empresa adiciona nova ferramenta, novas trilhas/workflows ficam disponíveis automaticamente.

### 2.8 Modelo de dados conceitual (alto nível)

Não é schema SQL — isso fica no SPEC. Aqui só as entidades que o produto trabalha:

- **Empresa (Tenant)** — id, nome, indústria, setor, modelo de negócio, headcount, contexto livre, ferramentas IA ativas, status programa, licenças.
- **Departamento** — empresa_id, nome, headcount, status de adoção.
- **Funcionário** — empresa_id, departamento_id, nome (ou apelido), cargo, contexto pessoal, ferramentas ativas, papel (funcionário/champion/líder), preferências de privacidade.
- **Trilha** — gerada a partir de Template + contexto. funcionário_id, status, progresso, pontuação.
- **Lição** — trilha_id, ordem, conteúdo, tipo (teoria/exercício/aplicação), pontos.
- **Workflow (SOP)** — empresa_id, trilha origem (opcional), nome, passo a passo, prompts, ferramenta alvo, status (ativo/draft), versão.
- **Challenge** — empresa_id, trilha alvo, janela início/fim, regras de pontuação, snapshot de leaderboard.
- **Evento de Telemetria** — funcionário_id, empresa_id, tipo (lição completada, workflow usado, aplicação reportada, etc.), timestamp, payload.
- **Template (Catálogo global)** — não atado a empresa; estrutura genérica que o Engine usa pra gerar trilha/workflow específicos.

### 2.9 O que esta seção NÃO decide

Marcado pra evitar confusão:

- **Stack técnica** (linguagem, framework, banco) → SPEC.
- **Topologia de cloud** (multi-region, single-region, latência) → SPEC.
- **Esquema de autenticação** (SSO, OIDC, password) → SPEC.
- **Padrões de API** (REST/GraphQL/RPC) → SPEC.
- **Política de retenção e LGPD** → revisão jurídica separada, embora princípios já estejam aqui.
- **Roadmap de release** (ordem de construção dos módulos) → outro doc, após PRD completo.

### 2.10 Decisões resolvidas da seção 2 (v1.3)

- **Catálogo global cross-tenant — promoção de workflow pra template:** **curadoria humana até ter volume; IA assume a curadoria depois.** Híbrido com evolução temporal. Volume mínimo pra transição a definir (depende de # de tenants ativos e variedade de workflows acumulados).
- **Painel Altara interno:** **monitoramento mais simples possível no início** — sem produto interno. Ad-hoc (planilha, dashboards montados, scripts) até a dor justificar virar tooling estruturado. Não consome capacidade de engenharia no v1.
- **Integrações v1:** **escopo enxuto.**
  - **IAs nativas (Copilot/Claude/GPT):** prioridade. Tanto pra dialeto de workflow quanto, quando viável, pra coleta automática de uso.
  - **E-mail:** único canal de comunicação no v1. Lembretes, notificações, abertura/fechamento de Challenge, anúncios.
  - **Cortado do v1:** Slack/Teams/WhatsApp como canais de notificação, SSO corporativo, integrações com RH/CRM. Voltam sob demanda real de cliente.

---

## 3. Trilhas: engine de geração por contexto

### 3.1 Por que engine de geração (e não catálogo fixo)

Section opera com catálogo: N trilhas curadas, todo cliente vê as mesmas. Funciona pra mercado homogêneo (corporações US grandes com problemas parecidos). **Não funciona pra mid-market BR**, onde:

- A variedade de setores é absurda (de contabilidade a varejo de cosméticos, de software jurídico a manufatura química), e cada um tem vocabulário, problemas e atalhos próprios.
- O catálogo necessário pra cobrir tudo com qualidade seria do tamanho de um currículo de MBA — inviável de manter.
- Funcionário desliga em 30 segundos se a primeira lição tá falando de "SaaS B2B" e ele trabalha numa imobiliária.

**Engine de geração inverte o problema.** Curamos templates (alguns) + slots de contexto (muitos), e cada trilha é hidratada no momento de gerar com o contexto do cliente e do funcionário. Resultado: mesma trilha "Fundamentos" vira coisas materialmente diferentes pra uma corretora de imóveis e pra uma escola de inglês — porque os exemplos, termos e exercícios são do mundo deles.

**Esse é o moat.** Quanto mais clientes em indústrias diferentes, mais sinal o engine acumula, melhor a geração fica, mais difícil de copiar. Catálogo não tem essa propriedade.

### 3.2 Anatomia de uma trilha

Uma trilha gerada tem:

| Componente | Descrição |
|---|---|
| **Metadata** | Nome, descrição, duração estimada, indústria/função alvo, ferramenta IA alvo, dificuldade |
| **Objetivo de aprendizado** | Uma frase: o que o funcionário sabe fazer ao terminar |
| **Sequência de lições** | 3-6 lições ordenadas, ~15min cada (90min total típico) |
| **Workflow output** | O entregável final: passo a passo + prompts + plano de implementação (Seção 6) |
| **Critérios de certificação** | O que define que o funcionário "passou" (conclusão + aplicação real reportada) |
| **Categoria** | Fundamentos, Especialização Departamental, Avançado, etc. |

Trilhas pertencem a uma das categorias (vide 3.8). Trilhas têm vida curta — cada funcionário recebe a sua versão gerada, não compartilha trilha com colega. Workflows que saem dela é que viram patrimônio compartilhado da empresa (Seção 6).

### 3.3 Anatomia de uma lição

Cada lição tem um dos três tipos:

- **Teoria curta (10min):** conceito + por que importa pro trabalho do funcionário. Vídeo curto ou texto + visual. Sempre com exemplo localizado pra função/indústria.
- **Exercício prático (15-20min):** interativo. Funcionário pratica num sandbox controlado (ex: refinar um prompt mal escrito; identificar Task/Contexto/Restrição num exemplo; escolher melhor abordagem entre opções).
- **Aplicação real (15min + uso fora):** funcionário recebe instrução pra aplicar no trabalho dele, com prompt/setup pronto. Reporta resultado de volta no Coach.

Componentes obrigatórios de toda lição:

- **Hook de abertura** (1-2 frases): por que essa lição importa pra você que é [função] em [indústria]
- **Conteúdo principal**: o que ensinar
- **Exemplo localizado**: ao menos 1 exemplo com termos/situação do contexto do funcionário
- **Checagem**: quiz, escolha múltipla, exercício curto, ou self-report estruturado
- **Pontuação**: pontos base + bônus por desempenho

### 3.4 Ontologia de contexto

Tudo que o engine usa pra gerar uma trilha. Três camadas:

**Contexto da empresa (Tenant):**

- Indústria (taxonomia controlada — ex: imobiliário, jurídico, contabilidade, varejo, manufatura, saúde, educação, tecnologia, serviços financeiros, ...)
- Sub-setor (taxonomia mais fina por indústria — ex: dentro de imobiliário: locação, venda, lançamentos, administração de condomínio)
- Modelo de negócio (B2B/B2C, serviços/produto/híbrido)
- Headcount + headcount por departamento
- Stack IA ativa (Copilot/Claude/GPT/outras)
- Workflow estratégico declarado pelo CEO (texto livre)
- Contexto livre da empresa (texto que CEO/champion escreve descrevendo o negócio em ~200 palavras)

**Contexto do funcionário:**

- Cargo (texto livre + categoria controlada)
- Departamento
- Senioridade (júnior/pleno/sênior/diretor)
- Ferramenta IA preferida/disponível (subset do stack da empresa)
- Tarefas-tipo recorrentes (lista curta livre, ex: "fazer pesquisa de mercado", "redigir contratos", "atender clientes no WhatsApp")
- Nível de experiência com IA (iniciante/intermediário/avançado)

**Contexto do objetivo:**

- Categoria da trilha alvo (Fundamentos, Especialização, Avançada)
- Workflow alvo (se já declarado pelo CEO/champion)
- Trilhas anteriores completadas pelo funcionário (pra não repetir conceito)
- Performance histórica (lições com baixo score, áreas de dificuldade)

### 3.5 Como o engine gera (abordagem: templates fortes + slots)

**Decisão central:** não é geração livre. Não dizemos a um agente "faça uma trilha sobre X pra essa empresa." Isso produz lixo, aluciona, e a qualidade é inconsistente.

**É template forte + slots contextuais.** Estrutura curada por humanos da Altara; agente preenche os slots usando contexto. Vantagens:

- Qualidade previsível (estrutura nunca quebra)
- Alucinação contida (agente preenche pequenos slots, não escreve do zero)
- Curadoria humana focada no template (1x), não em cada output (Nx)
- Aprendizado de muitos clientes consolida no template

**Fluxo de geração de uma trilha (passo a passo):**

1. **Engine recebe pedido:** `(funcionário_id, empresa_id, categoria/objetivo)`.
2. **Busca templates compatíveis** no Catálogo global, filtrando por (categoria × indústria × função × ferramenta IA).
3. **Seleciona o melhor match** (ou combina dois templates complementares quando função é multi-domínio).
4. **Hidrata o template** com contexto:
   - Substitui exemplos por exemplos da indústria/função do funcionário
   - Adapta vocabulário (ex: "lead" em comercial, "ticket" em suporte, "OS" em operações, "matrícula" em educação)
   - Ajusta workflow final à ferramenta IA do funcionário (Copilot vs. GPT vs. Claude)
   - Calibra dificuldade conforme senioridade e experiência prévia
5. **Valida output** contra critérios automáticos (vide 3.9).
6. **Persiste a trilha gerada** na conta do funcionário no Tenant.
7. **Disponibiliza pro funcionário** no Coach (ativa o Challenge se aplicável).

**Quanto tempo isso leva:** geração assíncrona, ~30s a alguns minutos. Funcionário não espera live — recebe a trilha quando entra no Coach pela primeira vez ou quando o Challenge abre.

### 3.6 Templates: estrutura

Um template é a "fôrma" curada da qual N trilhas são geradas. Tem:

| Componente | Conteúdo |
|---|---|
| **Metadata** | Categoria, indústrias aplicáveis (lista), funções aplicáveis (lista), ferramenta IA alvo, dificuldade base |
| **Esqueleto de lições** | Ordem das lições, tipo de cada uma (teoria/exercício/aplicação), objetivo por lição |
| **Slots contextuais** | Onde o agente preenche: exemplos, vocabulário, casos, workflow final |
| **Instruções de hidratação** | Prompt estruturado que o agente segue pra preencher cada slot |
| **Workflow template output** | Estrutura do entregável final (passo a passo, prompts, plano) |
| **Critérios de validação** | Regras automáticas que o output gerado precisa passar |

Templates ficam no Catálogo global. Cross-tenant. Curados pela Altara.

### 3.7 Curadoria humana → IA (transição)

Decidido em 2.10:

- **Fase 1 (v1, ~12 meses ou até volume relevante):** **curadoria 100% humana**. Time Altara cria, edita e revisa templates. Cada workflow popular candidato a virar template novo é avaliado por humano antes de subir ao Catálogo.
- **Fase 2 (volume relevante):** **IA assume curadoria** sobre estrutura curada pelos humanos da Fase 1. Promove workflows populares a templates automaticamente conforme critérios. Humanos no loop pra mudanças críticas.

Critérios pra transição (a refinar): # de tenants ativos, # de templates ativos, qualidade média avaliada por funcionários (rating médio > X), taxa de drop-off por trilha (< Y).

### 3.8 Trilhas core vs. trilhas especializadas

Híbrido decidido no brief. Dois tipos coexistem no Catálogo global:

**Trilhas core (poucas, muito sólidas):**

- Universais ou quase. Funcionam pra qualquer função/indústria com mínima personalização.
- Exemplos:
  - "Fundamentos de IA pro seu trabalho" (Challenge 1 de todo cliente)
  - "Como falar com IA: prompting básico aplicado"
  - "Uso responsável de IA: o que não fazer"
- Curadas 100% manualmente pela Altara. Variações leves por (indústria × função).
- **Estabilidade alta** — mudam pouco. São o "currículo base".

**Trilhas especializadas (muitas, profundamente personalizadas):**

- Dependem fortemente de contexto. Variam por (indústria × função × ferramenta IA × objetivo).
- Exemplos:
  - "Atendimento ao Cliente com IA pra varejo de moda"
  - "Análise Financeira com Copilot pra controladoria SaaS B2B"
  - "Prospecção comercial com GPT pra mercado imobiliário"
  - "Geração de conteúdo com Claude pra marketing educacional"
- Templates de especializadas têm slots **muito maiores** — agente preenche bloco grande, não apenas frase.
- **Estabilidade baixa** — evoluem com feedback de uso.

### 3.9 Qualidade e validação

Toda trilha gerada passa por checks automáticos antes de ser servida:

- **Formato:** estrutura correta (# de lições compatível, tipos válidos, sem placeholders não preenchidos `{slot}`).
- **Conteúdo:** sem termos de outras indústrias vazando (validação por blacklist contextual — ex: trilha pra contabilidade não pode mencionar "lead time de fábrica"), comprimento dentro do esperado.
- **Workflow final executável:** passo a passo com > 0 passos, prompts presentes e não-vazios, ferramenta especificada.
- **Localização linguística:** PT-BR por padrão (vide decisão em aberto 3.12 sobre multi-idioma).

Trilhas que falham nos checks vão pra fila de revisão humana antes de servir (na Fase 1). Na Fase 2, podem ser regeneradas automaticamente.

**Sinais de qualidade in-flight (durante uso):**

- Drop-off por lição (lição confusa)
- Rating explícito do funcionário ao terminar lição ("útil/confuso/genérico/já sabia")
- Workflow usado vs. apenas desbloqueado (workflow gerado mas nunca usado → mal calibrado)
- Aplicação real reportada (sinal positivo forte)
- Edição do workflow pelo champion na Biblioteca da empresa (sinal de ajuste necessário)

Esses sinais alimentam o loop de feedback (3.10).

### 3.10 Loop de feedback (como o engine melhora)

Dois fluxos:

**Fluxo intra-tenant (melhora pra essa empresa):**

- Funcionários da mesma empresa avaliam trilhas → engine aprende preferências da empresa
- Workflows editados pelo champion entram na Biblioteca da empresa como variantes locais
- Próximas trilhas geradas pra outros funcionários da mesma empresa usam esses sinais

**Fluxo cross-tenant (melhora o Catálogo global, anonimizado):**

- Workflows com alta taxa de uso e rating positivo → candidatos a virar template novo no Catálogo global
- Padrões agregados (ex: "exercício X tem drop-off de 40% em todas indústrias") → curadoria humana ajusta template
- Variantes locais que se repetem entre empresas → consolidam em template novo

**Solicitações explícitas (canal dinâmico):**

- Funcionário e champion podem pedir trilha nova ou sugerir mudança via campo "solicitar trilha" no Coach/HQ. Texto livre.
- Altara dispara e-mail periódico (trimestral ou ao fim de cada Challenge) pedindo feedback estruturado: o que faltou, o que confundiu, o que o time gostaria de aprender a seguir.
- Solicitações entram em fila de curadoria humana da Altara → vira input pra novos templates ou ajustes nos existentes.
- **Esse canal substitui, no v1, a alternativa de "deixar o cliente criar trilha livre"** — princípio "personalização first-class via engine" preservado.

**Importante:** nenhum dado nominal cruza tenants. Só estatística agregada e estrutura abstrata (não conteúdo específico).

### 3.11 O que esta seção NÃO decide

- **Qual LLM(s) por trás dos agentes do engine** (Claude, GPT, mix por tipo de tarefa) → SPEC.
- **Linguagem dos templates** (JSON, YAML, Markdown estruturado, DSL própria) → SPEC.
- **Orquestração dos agentes** (single-agent com tools, multi-agent, pipeline) → SPEC.
- **Caching e cost optimization** → SPEC.
- **Modelo de prompts dos slots** (engenharia de prompt específica) → trabalho operacional, vai pra repositório de templates.

### 3.12 Decisões resolvidas da seção 3 (v1.5)

- **Granularidade das taxonomias:** **custom inicial baseado no perfil dos primeiros 10 clientes, evoluindo conforme o ICP expande.** Não amarra em CNAE/GICS pra evitar padrão externo virar limitação. Curadoria de taxonomia faz parte do trabalho contínuo do time Altara.
- **Multi-idioma:** **PT-BR padrão no v1; EN-US no roadmap.** Empresas multinacionais ou que operam em mais de um idioma entram em versões posteriores. Linguagem e exemplos padronizados em PT-BR brasileiro (não europeu).
- **Cache de trilhas geradas:** **sim — cachear pra reduzir uso de recursos.** Granularidade: (empresa × função × senioridade × ferramenta IA). Regenera quando contexto da empresa muda materialmente (nova indústria, nova ferramenta) ou quando template é atualizado pelo time Altara. Reduz custo de geração e acelera onboarding do funcionário (trilha aparece pronta quando o N-ésimo funcionário do mesmo perfil entra).
- **Combinação de templates** (funcionário multi-domínio, ex: "vendas + marketing"): **uma trilha de Fundamentos multi-função; especializadas separadas.** Reforça princípio "templates como espinha pra clientes com menor maturidade de IA" — quanto mais previsível e curada a primeira trilha, melhor pra quem nunca usou IA estruturadamente.
- **Trilha "from scratch" pelo cliente:** **não no v1.** Trilhas são geradas pela Altara (engine + curadoria humana). Em vez disso, abrir **canal de solicitação e feedback dinâmico** no produto: funcionário/champion pode pedir trilha nova ou sugerir mudança via campo no Coach/HQ; Altara recebe como input pra evoluir o Catálogo global. Cadência periódica de feedback via e-mail (trimestral ou ao fim de cada Challenge) pra capturar o que o time gostaria de ver. Esse canal substitui — no v1 — a complexidade de dar permissão de "criar trilha livre" ao cliente.

---

## 4. HQ (visão líder/CEO)

### 4.1 Propósito do HQ

HQ é a interface dos compradores e operadores do programa: **CEO** (decide e valida) e **champion** (executa e acompanha). Não é dashboard "bonito" pra impressionar — é instrumento de decisão. Tudo que aparece no HQ deve responder uma de quatro perguntas:

1. *"O programa tá indo?"* (saúde de adoção)
2. *"Vale o investimento?"* (ROI)
3. *"O que eu preciso fazer agora?"* (próxima ação)
4. *"Como conto isso pro board/sócios?"* (narrativa exportável)

Tudo o mais — e qualquer feature futura — passa por esse filtro.

### 4.2 Personas e permissões

| Recurso | CEO/Líder principal | Champion |
|---|---|---|
| Ver Home/Dashboard | ✓ | ✓ |
| Ver Adoção & ROI agregado | ✓ | ✓ |
| Ver Challenges (rankings completos) | ✓ | ✓ |
| Ver lista de funcionários | ✓ | ✓ |
| Drill-down em funcionário | ✓ | ✓ |
| Designar trilhas obrigatórias | ✓ | ✓ |
| Editar workflows na biblioteca | — | ✓ |
| Arquivar workflows ociosos | — | ✓ |
| Aprovar compartilhamento externo (casos-âncora) | ✓ | — |
| Configurar perfil da empresa | ✓ | parcial |
| Configurar integrações (Copilot/e-mail) | ✓ | — |
| Ver/editar billing | ✓ | — |
| Receber lembrete de call-out público | ✓ | — |
| Aprovar/rejeitar premiação física | ✓ | — |

**Princípio:** CEO valida, champion opera. Atribuições de papel são configuráveis pelo CEO no setup.

### 4.3 Estrutura macro do HQ (navegação)

Menu lateral fixo com 7 áreas:

1. **Home** — visão geral, KPIs, próxima ação recomendada, alertas
2. **Adoção & ROI** — métricas detalhadas, casos-âncora, exportar relatórios
3. **Challenges** — atual em execução + histórico de Challenges encerrados
4. **Time** — funcionários, departamentos, drill-down individual
5. **Workflows** — biblioteca de SOPs da empresa
6. **Programa** — cronograma 60 dias, reviews automáticas, setup do programa
7. **Configurações** — perfil empresa, integrações, papéis, billing (CEO only)

> **Diretriz de design (HQ e Coach):** a UX espelha a referência visual da Section (vide `reference/HQ/` e `reference/COACH/`) — sidebar fixa à esquerda, header limpo, cards de KPI no topo, gráficos e listas abaixo. Mantém familiaridade pra clientes que já conhecem Section e acelera o reconhecimento mental ("é tipo Section, mas brasileiro e pra mid-market"). Adaptações pro contexto BR (idioma, vocabulário, exemplos, identidade visual Altara) são esperadas; o esqueleto de layout, não.

### 4.4 Home / Dashboard inicial

A primeira tela que CEO e champion veem ao entrar. Estrutura:

**Topo — 4 KPIs principais:**

- **% time ativo semanal** (vs. baseline da semana 1)
- **# workflows ativos** na biblioteca da empresa
- **% time certificado** em pelo menos 1 trilha
- **ROI estimado** (horas economizadas no período, valor monetário opcional)

Cada KPI mostra delta vs. baseline (seta verde/vermelha + número).

**Meio — Status do programa:**

- Semana atual (ex: "Semana 5 de 8 — Challenge 2 em execução")
- Próximo marco (ex: "Review com CEO em 12 dias")
- Saúde geral (verde/amarelo/vermelho com 1 linha de explicação)

**Próxima ação recomendada (gerada pelo sistema):**

- Ex: "32% do comercial ainda não completou Trilha 1 — disparar lembrete?"
- Ex: "Challenge 1 encerra em 3 dias — preparar texto de anúncio?"
- Ex: "Workflow 'Pesquisa de Mercado Copilot' não foi usado por ninguém em 14 dias — arquivar?"
- Botão de ação direto: dispara o e-mail / arquiva / agenda.

**Alertas ativos:** lista compacta (ver 4.11).

### 4.5 Adoção & ROI

Tela de profundidade. Onde CEO/champion vão pra entender o que tá acontecendo.

**Métricas de adoção:**

- **Adoção semanal e diária** (DAU/WAU) ao longo do tempo (gráfico de linha)
- **Adoção por departamento** (barras, % time ativo na semana por departamento)
- **Top funcionários por engajamento** (pontos acumulados, lições completadas)
- **Funcionários inativos** (sem login em >14 dias) — lista com botão "enviar lembrete"

**ROI:**

- **Horas economizadas** (somatório: self-report estruturado dos funcionários + estimativa por workflow executado × tempo médio do workflow)
- **Valor monetário** (opcional, configurado pelo CEO via salário médio do time)
- **Tendência** (gráfico de linha)
- **Como o número foi calculado** (tooltip transparente, sem caixa-preta — princípio do brief: "ROI parte do produto, não relatório separado")

**Workflows mais executados** (top 10): nome, departamento, # execuções, rating médio.

**Casos-âncora** (3-5 destacados por mês):

- Nome (ou apelido) + cargo + departamento
- Workflow usado + resultado descrito pelo próprio funcionário (texto livre + opcional print)
- Horas economizadas estimadas
- Botão **"Compartilhar internamente"** — gera texto pronto pra e-mail (template Altara, customizável)
- Botão **"Compartilhar externamente no LinkedIn"** — gera post institucional pro CEO. Fluxo: funcionário consente individualmente; CEO consolida e dispara como post da empresa.

**Exportar relatório (PDF):** snapshot completo da tela pra CEO levar pra board, sócios, conselho.

#### 4.5.1 Certificações como ativo de marketing (distribuição via colaboradores)

Cada trilha completada e cada Challenge encerrado gera **assets compartilháveis** no LinkedIn dos funcionários. Não é detalhe cosmético — **é canal de distribuição de Altara**: a marca circula nos perfis dos colaboradores, gera awareness com CEOs/RH que veem o post e perguntam *"o que é esse Altara que sua empresa usa?"*.

**Componentes do asset:**

- **Imagem de certificação** (PNG) personalizada: nome do funcionário, trilha completada, empresa, data, logo Altara discreto mas visível.
- **Texto de post pré-formatado** (editável pelo funcionário): "Acabei de me certificar em [trilha] no programa Altara da [empresa]. [Trecho do que aprendeu/aplicou]. #IA #adoção #carreira"
- **Link de validação** (URL pública leve): valida que o certificado existe; serve como prova social e ganha exposição pra Altara.

**Permissão (dupla):**

- **Funcionário** opta in pra gerar o asset (no Coach, após terminar a trilha).
- **CEO** aprova no setup do programa que a empresa permite o canal (caso contrário, certificados ficam internos por padrão).

**Cadência de geração:**

- Ao completar trilha → certificado individual gerado, funcionário decide se compartilha.
- Ao encerrar Challenge → top 3 individuais e top departamento recebem **badge especial** (visual diferenciado), gerado automaticamente.

**Tracking no HQ:** quantos certificados gerados, quantos compartilhados publicamente (# de cliques no botão "Compartilhar"). **No v1, só # de compartilhamentos** — alcance estimado (via integração LinkedIn API) fica pro v2. Decisão 7.13. Vira KPI "Distribuição via colaboradores" no Home — exibido apenas quando o compartilhamento externo está habilitado pelo CEO.

### 4.6 Challenges

**Challenge ativo:**

- Countdown visível (dias/horas restantes)
- Progresso médio (% trilha completada pelos participantes)
- **Leaderboard individual** (top N — configurável; CEO/champion sempre veem ranking completo)
- **Leaderboard por departamento** (agregado: pontos totais ou pontos/funcionário)
- Drop-offs identificados (quem largou e onde)
- Botão "preparar anúncio de fechamento" (template Altara, pra enviar quando o Challenge encerrar)

**Challenges encerrados:**

- Snapshot final (top 3 individuais + top departamento)
- % de conclusão por departamento
- Taxa de aplicação real (% de funcionários que reportaram uso real do workflow)
- Status do anúncio (enviado? por qual canal? — Altara só rastreia se cliente marcou como enviado)

### 4.7 Time (funcionários + departamentos)

**Visão lista de funcionários:**

- Colunas: nome (ou apelido), cargo, departamento, status no programa (ativo/inativo/atrasado), último login, pontos acumulados, # trilhas completadas, # workflows desbloqueados.
- Filtros: departamento, status, função, senioridade.
- Ordenação por qualquer coluna.

**Drill-down por funcionário:**

- Perfil completo (contexto pessoal coletado no Coach)
- Trilhas: completadas, em andamento, status de cada lição
- Workflows desbloqueados + # vezes usados + aplicações reportadas
- Pontos acumulados ao longo do tempo (gráfico)
- Botão "atribuir trilha" (champion designa trilha específica pra esse funcionário)

**Visão por departamento:**

- Adoção agregada do departamento (% ativo, # workflows, ROI parcial)
- Top performers e bottom performers
- Workflows mais usados nesse departamento
- Gaps identificados (ex: "ninguém do comercial usou workflow de prospecção em 21 dias")

### 4.8 Workflows (biblioteca da empresa)

A biblioteca acumula os workflows que os funcionários desbloquearam — vira o patrimônio de SOPs da empresa.

**Visão lista:**

- Colunas: nome, descrição curta, departamento alvo, ferramenta IA, # execuções totais, rating médio, última execução, status (ativo/draft/arquivado).
- Filtros: departamento, ferramenta IA, status, autor da variante (se editado pelo champion).

**Drill-down do workflow:**

- Passo a passo
- Prompts otimizados (com botão copiar)
- Plano de implementação
- # execuções por funcionário (lista)
- Aplicações reportadas (snippets de quem usou pra quê)
- Histórico de versões (se champion editou)

**Ações disponíveis pelo champion:**

- Editar workflow → cria variante local da empresa (versionado)
- Marcar como obrigatório (todo funcionário de um departamento deve concluir)
- Arquivar workflow ocioso
- Promover workflow popular pra "destaque" (aparece com banner no Coach)

### 4.9 Programa

**Cronograma das 8 semanas:**

- Linha do tempo visual com as fases (Setup → Diagnóstico+Kickoff → Challenge 1 → Checkpoint → Challenge 2 → Review Final)
- Marcadores das reuniões agendadas (semana 4 e 8)
- Status de cada fase (concluída / atual / futura)

**Reviews automáticas:**

- Antes das reuniões com CEO (semana 4 e 8), HQ gera **Relatório de Review** automático em PDF/HTML
- Conteúdo: métricas consolidadas, casos-âncora, alertas, decisões pendentes, próximas escolhas (ex: "quais trilhas escolher pro Challenge 2?")
- CEO recebe por e-mail 48h antes da reunião

**Configuração do programa:**

- Departamentos prioritários (editável durante o programa)
- Workflow estratégico declarado pelo CEO (texto livre — referência pra todas as decisões de trilhas)
- Champion designado (papel atribuído a um funcionário)
- Datas das reuniões agendadas

**Histórico:**

- Reuniões passadas (resumo, decisões tomadas)
- Decisões do CEO (ex: "Challenge 2 incluiu trilha X em vez de Y") — auditoria leve

### 4.10 Configurações

**Perfil da empresa:** indústria, sub-setor, modelo de negócio, headcount, contexto livre. Edição reabre cache de trilhas geradas (alerta antes de salvar — "isso vai regenerar trilhas em cache; continuar?").

**Integrações (v1 enxuto):**

- Copilot/Claude/GPT — status: conectado? Quais funcionários têm licença ativa? (em v1: self-report; v2: API)
- E-mail SMTP — configuração de e-mail de envio (domínio próprio da empresa opcional)

**Papéis & permissões:**

- Lista de funcionários com papel atual (funcionário/champion/líder de departamento/CEO)
- CEO pode promover/rebaixar papéis

**Privacidade dos Challenges:**

- Granularidade de ranking (nominal / apelido / só departamental) — **configurado 1x por empresa**, vale pra todos os Challenges. Mantém UX simples e cultura consistente.

**Compartilhamento externo (LinkedIn):**

- CEO opta in/out: permite que funcionários compartilhem certificados no LinkedIn? Padrão: opt-in (CEO precisa ativar).
- Casos-âncora institucionais: CEO aprova caso a caso. Sem aprovação, ficam internos.

**Billing (CEO only):**

- Plano contratado, próxima cobrança, histórico de faturas.

### 4.11 Alertas

Sistema de alertas automáticos. Entregues no Home do HQ + por e-mail (canal v1).

**Tipos de alerta (in-app + e-mail):**

- **Adoção em risco** — departamento >50% sem completar trilha até dia 10 do Challenge
- **Workflow ocioso** — não usado em 30 dias
- **Funcionário inativo** — sem login em 14 dias
- **Marco do programa** — lembrete de reunião agendada (48h antes)
- **Challenge encerrando** — 3 dias antes do fim
- **Solicitação de trilha** — funcionário/champion solicitou nova trilha (vai pra fila Altara, CEO/champion notificado quando a Altara responde)

Cada alerta tem botão de ação (disparar lembrete, agendar reunião, arquivar workflow).

**E-mails automáticos do sistema (cadência fixa, não dependem do champion lembrar):**

- **Pesquisa periódica de feedback** — trimestral ou ao fim de cada Challenge. Disparada automaticamente pelo sistema pra funcionários e champion. Garante engajamento. Resposta vai pra fila Altara.
- **Lembrete de call-out** — pro CEO, dia 7 de cada Challenge.
- **Confirmação de certificação + asset LinkedIn** — pro funcionário, ao completar trilha.
- **Convite pra review** — pro CEO + champion, 48h antes das semanas 4 e 8.

### 4.12 O que esta seção NÃO decide

- **Wireframes/layout visual** das telas → próxima etapa (mockups), não PRD.
- **Stack frontend** (React, Vue, etc.) → SPEC.
- **Componentes específicos** (qual lib de gráficos, qual tabela) → SPEC.
- **SLAs de atualização de métricas em tempo real vs. batch** → SPEC, depois da Seção 7 (Telemetria).

### 4.13 Decisões resolvidas da seção 4 (v1.7)

- **Papéis no v1:** **apenas CEO + Champion + Funcionário.** "Líder de departamento" fica pra v2+. Mantém produto enxuto e cobre a maioria dos clientes mid-market BR.
- **Compartilhamento externo de casos-âncora e certificações (LinkedIn):** **sim, no v1, com permissão dupla** — CEO aprova compartilhamento institucional (casos-âncora); funcionário aprova compartilhamento individual do próprio certificado. Canal estratégico de marketing de Altara via colaboradores — detalhado em 4.5.1.
- **Granularidade de ranking:** **1 configuração por empresa** (não por Challenge). Mantém UX simples e cultura consistente entre Challenges.
- **Edição de workflows pelo CEO:** **não.** Princípio "CEO valida, champion opera" preservado. CEO vê e aprova; champion edita.
- **E-mail periódico de feedback:** **automático pelo sistema** (trimestral ou ao fim de cada Challenge). Garante engajamento — não depende do champion lembrar.
- **Auditoria:** **log básico de acessos no v1.** Quem entrou, quando, o que mudou (alto nível). Auditoria granular pra compliance fica pra clientes que exigirem.

---

## 5. Coach (visão funcionário)

### 5.1 Propósito do Coach

Coach é onde o funcionário **aprende fazendo trabalho real com IA**. Não é "plataforma de cursos"; é **tutor pessoal + biblioteca executável**. Coexistem dois caminhos paralelos que se alimentam:

- **Trilhas (Practice)** — caminho **estruturado curado**: lições sequenciais que terminam entregando um workflow. Engine gera por contexto. Ótimo pra capacitação sistemática + Challenges.
- **Apply (Use Case Builder)** — caminho **conversational**: funcionário traz um problema vago, Coach conversa, refina, e gera plano de ação + prompt customizado. Ótimo pra resolver coisa específica que não tem trilha pronta.

Ambos os caminhos resultam em **workflows** que podem virar patrimônio da empresa.

Tudo no Coach deve responder uma de quatro perguntas:

1. *"O que eu faço agora?"* (próxima ação clara, micro-sessão de 15-20min)
2. *"Como uso isso no meu trabalho hoje?"* (workflow aplicável imediatamente)
3. *"Quanto eu tô progredindo?"* (pontos, streak, ranking, posição)
4. *"Como mostro que aprendi?"* (badges, certificados, asset pra LinkedIn)

Se uma feature do Coach não responde uma dessas, ou ela some ou as 4 perguntas mudam.

### 5.2 Estrutura macro do Coach (navegação)

Espelha a referência Section Coach (decisão 4.3): **sidebar fixa à esquerda + área principal**. **Apply é módulo first-class** (não submenu de outra coisa).

Áreas (sidebar):

1. **Home** — status do funcionário, trilha atual, starters do Apply, Challenge ativo
2. **Trilhas (Practice)** — catálogo pessoal de trilhas (caminho estruturado)
3. **Apply (Use Case Builder)** — coach conversational pra resolver problemas específicos
4. **Workflows** — biblioteca de SOPs (próprios + da empresa)
5. **Perfil** — pontos, badges, certificados, contexto, configurações de privacidade
6. **Solicitar trilha** — canal dinâmico (4.13 → 3.10/3.12)

**Floating Assistant button** (bottom-right, sempre visível): chat bubble persistente pra dúvidas rápidas em qualquer tela (vide 5.14).

**Eventos/On-Demand:** existem na referência Section mas **ficam fora do v1 Altara** (decisão 5.17).

### 5.3 Onboarding pessoal

Coletado na primeira entrada no Coach. Alimenta o engine de trilhas (Seção 3). Duração total: **~5 minutos**, em 7 telas curtas:

| Tela | Pergunta | Notas |
|---|---|---|
| 1 | Idioma | PT-BR padrão; EN-US no roadmap (escolhível só quando habilitado) |
| 2 | Confirmar nome | Pré-preenchido pela empresa; funcionário pode trocar pra apelido (link com privacidade de ranking) |
| 3 | Confirmar cargo + departamento | Pré-preenchido; funcionário ajusta descrição livre se cargo formal não bate com o que faz |
| 4 | Senioridade | Júnior / Pleno / Sênior / Diretor |
| 5 | Ferramenta IA preferida | Subset do stack da empresa (Copilot/Claude/GPT) |
| 6 | Tarefas-tipo recorrentes | Texto livre + sugestões clicáveis ("redigir e-mails", "fazer pesquisas", "preparar reuniões", etc.) |
| 7 | Nível de experiência com IA | Iniciante / Intermediário / Avançado |

**Tela final (não conta como pergunta):** hero "Boas-vindas, [nome]! Vamos conhecer seu Coach." + CTA **"Conhecer meu Coach"** → leva pra **Coach Persona Intro (5.4)**.

Princípio: onboarding **nunca** trava o funcionário. Se ele pular qualquer pergunta opcional, trilha é gerada com defaults sensatos e refinada conforme uso.

### 5.4 Coach Persona Intro ("Olá!")

Primeira entrada no Coach **após** o onboarding pessoal. Apresenta a persona do Coach e estabelece relacionamento humano-IA. Acontece **uma única vez** por funcionário (depois fica acessível via Perfil > "Conhecer Coach de novo").

Espelha exatamente o "Hello there!" do Section Coach (vide `/reference/COACH`).

**Estrutura da tela (modal/overlay grande, fundo blur leve):**

- **Avatar Coach** centralizado no topo — orb com gradient colorido (espelha o blob multicolor do Section)
- **Saudação** em h2: "Olá, [nome]!"
- **Subtítulo body-lg:** "Sou seu coach pessoal de IA — aqui pra te ajudar a embeddar IA no seu trabalho diário."
- **4 bullets** do que o Coach faz (cada um com checkmark roxo à esquerda):
  - "Identifico tarefas específicas onde IA pode ajudar"
  - "Mostro vantagens e limites da IA pra cada caso"
  - "Dou plano acionável e prompt pronto pra usar"
  - "Personalizo tudo pro seu cargo e ferramentas disponíveis"
- **Tag de destaque** (callout lateral): "Hyper-personalizado pro seu papel e suas ferramentas IA"
- **2 CTAs:**
  - **"Começar"** (primary preto) — leva pra Home
  - **"Rever meu perfil"** (secondary) — volta pro onboarding pra ajustar contexto

### 5.5 Home

A primeira tela do Coach. Estrutura espelha a referência Section Coach (hero card + grid de cards abaixo).

**Hero — status atual:**

- Saudação + nome
- Trilha atual + barra de progresso (% concluído)
- Botão grande: **"Continuar lição"** (próxima lição não-feita) ou **"Iniciar próxima trilha"**
- Streak: "Você tá há 5 dias seguidos. Não quebre o ritmo."

**Bloco Challenge ativo (se houver):**

- Nome do Challenge + countdown ("Termina em 6 dias")
- Sua posição no ranking ("Você tá em #3 no comercial")
- Pontos ganhos hoje
- Botão "Ver leaderboard completo"

**Bloco "Pra você fazer agora" (starters do Apply):**

3 sugestões clicáveis geradas pelo contexto do funcionário (cargo + indústria + ferramenta IA). Espelha as "Generated suggestions for you" do Section Coach.

Exemplo pra um analista comercial:
- "Construir guia de qualificação de leads"
- "Criar template de proposta comercial com Copilot"
- "Designar framework de follow-up pós-reunião"

Cada sugestão é um **shortcut pro Apply chat** já com contexto pré-preenchido. Funcionário clica → vai direto pro flow conversational (5.9.2). Reduz atrito pra "começar a usar IA sem precisar pensar o quê".

**Grid de cards:**

- **Próximo workflow disponível** (preview do que vai desbloquear ao terminar trilha atual)
- **Workflows recentes** (que ele já usa) com botão "Usar de novo"
- **Recomendações** (trilhas geradas pra ele, ainda não iniciadas)

**Footer leve:** "Já economizou 4h essa semana — continue assim!"

### 5.6 Anatomia de uma trilha (visão funcionário)

Quando funcionário entra numa trilha:

- **Hero da trilha:** nome, objetivo de aprendizado (1 frase), duração estimada total, badge associado (visual prévio)
- **Timeline horizontal de lições** (espelha o Section): pontos clicáveis que mostram progresso visual
- **Cards de lições** (3-6): cada um com tipo (teoria/exercício/aplicação), duração, status (não iniciada/em progresso/concluída)
- **Workflow final destacado:** card maior com "Ao terminar essa trilha, você terá: [workflow X]. Veja prévia →"
- Botão grande: **"Iniciar"** ou **"Continuar de onde parou"**
- **Opção secundária:** botão discreto **"Pedir nova trilha"** (limitado a 1x por trilha). Funcionário descreve o que não funcionou; engine regenera considerando o feedback. Trilha antiga é arquivada no perfil, não apagada.

### 5.7 Fluxo de uma lição

Padrão único pros 3 tipos (teoria/exercício/aplicação):

1. **Hook (1-2 frases):** por que essa lição importa pra você que é [função] em [indústria].
2. **Conteúdo principal:**
   - *Teoria:* texto + visual + opcional vídeo curto (~3min)
   - *Exercício:* interação (padrões detalhados em 5.7.1)
   - *Aplicação:* instruções + prompt pronto + sandbox/external link pra Copilot/Claude/GPT
3. **Checagem:** quiz ou self-report estruturado ("isso fez sentido? útil/confuso/genérico/já sabia")
4. **Encerramento:**
   - Pontos ganhos (animação)
   - Streak atualizado
   - Botão "Próxima lição" ou "Voltar pra trilha"

Sempre visível no header: trilha + posição na timeline + pontos do dia.

#### 5.7.1 Padrões de exercício no v1 (espelhando Section)

Quatro tipos de interação validados pela referência Section. Cada lição usa **1 padrão** (não combina).

1. **Highlight/marker em texto** — funcionário **arrasta sobre um trecho de texto** pra identificar um componente. Exemplo Section: prompt mostrado com instrução "encontre a Task" → funcionário pinta com cursor as palavras certas → validação visual (verde se acertou, dica se errou).
   - Use case: identificar Task vs. Context vs. Restrição num prompt, encontrar problema num prompt mal escrito.

2. **Múltipla escolha de cenário** — apresentação de **situação narrativa concreta** ("Você está preparando proposta pra cliente potencial da ZNIT. Qual ação melhoraria mais a qualidade do output de IA?") + 4 alternativas + escolha.
   - Use case: testar julgamento sobre quando/como aplicar IA.

3. **Role-play numerado (1/4, 2/4, 3/4, 4/4)** — sequência de **perguntas estruturadas** onde funcionário responde em texto livre, refinando um caso de uso passo a passo. Cada pergunta no contexto da anterior.
   - Use case: pratica formulação de objetivo, contexto, restrições — antes de gerar prompt final.

4. **Refinamento de prompt** — apresenta prompt fraco/genérico; funcionário edita inline; valida contra critérios objetivos (tem Task? tem Context? especifica formato?).
   - Use case: aprender a melhorar prompts iterativamente.

#### 5.7.2 Celebrações intermediárias (não só ao fim)

Espelha o "Good progress — keep going" do Section Coach. Aparece em momentos-chave **no meio do progresso**, não só no fim da trilha.

**Quando dispara:**

- Ao completar primeira lição de uma trilha
- Ao atingir 25%, 50%, 75% da trilha
- Ao desbloquear um workflow (já tratado em 5.10)
- Ao quebrar streak pessoal (recorde novo)

**Estrutura da tela:**

- Confetti leve (animação curta, 1.5s)
- Hero "Bom progresso — continue!"
- Status: "Você está agora 27% pelo caminho de [trilha]"
- Preview da próxima lição: "Próxima: [Escopo do Agente] · 10 minutos"
- CTA único: **"Próxima lição"** (primary preto)
- **Sem fricção:** sem botão "fechar"; auto-avança em 3s se funcionário não clicar. Princípio: reconhecimento que não atrapalha.

### 5.8 Mecânica de Challenge (lado funcionário)

Detalha como o Challenge aparece no Coach (complementa 1.5.1):

- **Countdown** visível no Home + topo da trilha
- **Pontos em tempo real:** ao completar lição/workflow/aplicação, animação de pontos somando ("+50 pts")
- **Streak diário:** dias consecutivos com pelo menos 1 lição. Quebra do streak gera notificação "Você quebrou seu streak — recomece amanhã"
- **Leaderboard (pop-up dedicado):** top N geral + sua posição + top do seu departamento. Identificação respeita configuração da empresa (nominal/apelido/só departamental — vide 4.10)
- **Notificação de fechamento próximo:** 3 dias antes do fim, e-mail + tela "Faltam 3 dias — você tá perto do top 5, dá pra subir!"
- **Encerramento:**
  - Tela de celebração (confetti, vide screenshot Section "Good progress — keep going")
  - Ranking final
  - Badge especial pros top 3 individuais + top departamento
  - Mensagem do CEO/champion se ele optou por personalizar (template Altara editável)

### 5.9 Apply / Use Case Builder

Módulo **conversational** — Coach atua como tutor pessoal. Complementa Trilhas (que é estruturado). Espelha a área "Apply" do Section Coach.

**Quando funcionário usa Apply:**

- Tem problema específico ("preciso responder e-mails de cliente puxando dados do PowerBI") que não tem trilha pronta
- Quer aprofundar uso de IA num caso real do dia-a-dia
- Recebeu sugestão da Home (starter) e quer explorar

#### 5.9.1 Catálogo de Use Cases (tela inicial do Apply)

Espelha a tela "Find your AI Use Case" do Section.

- **Search bar central, grande:** "O que você quer fazer com IA hoje?"
- **Filtros (tabs):** Recomendados pra você / Seus use cases / Todos
- **Botão "+ Criar use case próprio":** abre Coach chat em branco; funcionário descreve do zero
- **Grid de cards de use cases:**
  - Cada card: nome + descrição curta + tags de categoria + autoria ("Criado por Altara Coach" ou "Criado por [colega]")
  - Click no card abre Coach chat focado naquele use case (5.9.2)
- **Card especial "Crie seu próprio"** sempre visível na primeira posição da lista (ícone +, mesmo tamanho dos outros)

#### 5.9.2 Coach chat (interface conversational)

Espelha a tela "Section Coach · Hi João Bruno" com sidebar de plano da conversa.

**Layout em 2 colunas:**

**Sidebar esquerda (sticky, ~280px):**

- Botão "← Voltar pro Apply" no topo
- Nome do use case em destaque
- **Plano da conversa em andamento:** lista numerada dos passos (varia por use case, tipicamente 4-5 passos)
  - Ex: "1. Defina seu caso" → "2. Que tipo de output?" → "3. Contexto adicional" → "4. Restrições"
  - Passo atual: destacado em altara-600
  - Passos completos: checkmark verde
  - Passos futuros: cinza neutral-300
- **Bloco "Guides"** (4 cards pequenos — vide 5.15): leituras curtas de apoio sempre disponíveis
- **Bloco "Prompt"** (mini preview do prompt sendo construído, atualiza conforme conversa)

**Área principal (chat):**

- Header com avatar Coach + nome do use case
- Mensagens do Coach em bubbles claras
- **Suggested replies clicáveis** (3-4 botões com sugestões pré-geradas — funcionário pode clicar OU digitar resposta livre)
- Input de texto + botão enviar (estilo chat moderno)
- Indicador "Coach digitando..." durante processamento
- Cada turno avança o passo na sidebar

**Fluxo padrão (ajustável por categoria de use case):**

1. **Coach apresenta o use case** e faz primeira pergunta de escopo
2. **Funcionário responde** (texto livre ou clica em sugestão)
3. **Coach refina:** tipos, frequência, fontes de dados, output desejado, restrições
4. **Coach pode pedir:** texto curto, escolha múltipla (1/4, 2/4, ...), sim/não. Upload de arquivo fica pro roadmap.
5. **Tela de transição:** "Tenho todas as informações que preciso... montando seu use case" (loading state com avatar girando)

#### 5.9.3 Output do Apply: Action Plan + Customized Prompt

Após o chat, gera o entregável. Espelha a tela "Here's your customized prompt and action plan" do Section.

**Tela "Pronto pra usar":**

- Hero "Aqui está seu plano de ação e prompt customizado pra implementar esse use case"
- Bullet de contexto: "Criei um use case personalizado pra você com base nas informações que você forneceu e o que conheço do seu papel"

**4 Guides relacionados** (cards horizontais coloridos — vide 5.15):

- "1. Por que usar IA"
- "2. Aproveitando suas ferramentas"
- "3. Verificando o output"
- "4. Iterando com IA"

**Customized Prompt:**

- Card cinza com `<code>` icon + preview do prompt
- Botão "→" (expandir) abre modal lateral com prompt completo (5.9.4)
- Botão "♥ Salvar" salva no perfil do funcionário

**Action Plan numerado (texto rico, não apenas bullets curtos):**

- "1. **Escolha o modelo certo antes de começar:** Como esse prompt envolve reconhecimento de padrões em time-series, use um modelo avançado tipo Claude Sonnet ou GPT-4 com interpretação de código habilitada..."
- "2. **Prepare um dataset de exemplo pra testar primeiro:** Antes de rodar nos dados reais, alimente um dataset pequeno e representativo. Peça follow-ups como 'torne o sumário mais conciso'..."
- "3. **Valide as anomalias detectadas antes de agir:** Cruze os spikes detectados com seus dados crus..."

**CTAs ao final:**

- **"Usar agora"** (primary preto) — copia prompt + abre Copilot/Claude/GPT (no v1: copia + redireciona; deeplink fica pro roadmap)
- **"Reportar aplicação real"** (secondary) — gera pontos bônus + alimenta caso-âncora
- **"Salvar como workflow da empresa"** (ghost) — vira candidato a entrar na biblioteca da empresa (4.8); champion aprova
- **"Refinar com Coach"** (ghost) — volta pro chat pra ajustar

#### 5.9.4 Modal "Seu prompt customizado"

Click no prompt expande modal lateral mostrando prompt completo (alguns são longos):

- Header com X de fechar
- **Aviso amarelo no topo:** "Atenção pros [PLACEHOLDERS] no prompt — você precisa preencher essas partes."
- Prompt completo em mono dark, com placeholders destacados em peach
- Botões no rodapé:
  - **Copiar** (ícone)
  - **Editar** (ícone) — permite ajustar inline
  - **♥ Salvar** (ícone)

#### 5.9.5 Diferença Apply × Trilha

| Dimensão | Trilha (Practice) | Apply (Use Case Builder) |
|---|---|---|
| **Estrutura** | Curada, sequencial, gamificada | Conversational, ad-hoc |
| **Entrada** | Engine de geração por contexto | Funcionário descreve problema |
| **Interação** | Lições + exercícios + workflow final | Chat com perguntas estruturadas |
| **Duração** | ~90min em ~5 lições | ~10-15min de chat |
| **Output** | Workflow estruturado + certificação | Action Plan + Prompt Customizado + 4 Guides |
| **Quando usar** | Capacitação sistemática, Challenge | Resolver problema do dia-a-dia |
| **Reusabilidade** | Mesmo workflow pra função inteira | Pode virar workflow da empresa via "Salvar" |

Os dois caminhos **coexistem e se alimentam**: workflows gerados via Apply podem virar templates de trilhas futuras (via curadoria Altara); trilhas concluídas geram contexto que aparece no Apply (Coach "sabe" o que funcionário já aprendeu).

### 5.10 Workflow handoff (recebimento e uso do workflow)

Momento crítico: workflow é entregue. Esse é o "isso vale o que pago" pro funcionário.

**Dois caminhos de origem do workflow:**

- **Da Trilha:** workflow desbloqueado ao completar a trilha. Vem com badge da trilha de origem + estrutura padrão "passo a passo numerado + prompt + plano de implementação".
- **Do Apply:** workflow gerado via Coach chat. Vem como **Action Plan descritivo + Customized Prompt + 4 Guides**. Funcionário pode optar por **"Salvar como workflow da empresa"** pra promovê-lo à biblioteca compartilhada (4.8), sob aprovação do champion.

Estruturas levemente diferentes, mesma interface de uso (botões "Usar agora", "Reportar aplicação", etc.).

**Tela "Workflow desbloqueado" (origem: Trilha):**

- Animação de desbloqueio + nome do workflow
- Preview estruturado:
  - **Passo a passo** (lista numerada, copyable individualmente)
  - **Prompts otimizados** (code-block style com botão "Copiar")
  - **Plano de implementação** (checklist do que configurar no Copilot/Claude/GPT)
  - **Ferramenta alvo** etiquetada (badge: Copilot / GPT / Claude)
- Botões:
  - **"Usar agora"** — copia prompt + abre provider (v1 copiar-colar puro, decisão 6.12)
  - **"Reportar aplicação real"** — funcionário marca quando usou de fato (gera bônus de pontos + alimenta caso-âncora candidato pro HQ)
  - **"Salvar pra usar depois"** — vai pra biblioteca pessoal

**Biblioteca de workflows no Coach** (área "Workflows"):

Dois subgrupos visíveis pro funcionário:

- **Meus workflows** — os que ele desbloqueou pessoalmente via trilhas concluídas.
- **Disponíveis na minha empresa** — workflows que colegas desbloquearam e estão ativos na Biblioteca da empresa (4.8). Funcionário pode usar diretamente, sem precisar refazer a trilha — colaboração via biblioteca compartilhada (decisão 5.13).

Filtros: ferramenta IA, departamento (quando relevante), data, mais usados.

Cada workflow mostra: # vezes que ele usou, última execução, link pra detalhes, # de colegas que também usaram (sinal de validação social).

Workflows promovidos a "destaque" pelo champion (4.8) aparecem com banner visível no topo.

### 5.11 Certificação e compartilhamento (asset LinkedIn)

Momento que ativa o canal de marketing via colaboradores (4.5.1). Acontece **ao completar trilha** (não só Challenge).

**Tela de certificação:**

- Animação celebratória (confetti, hero card grande)
- Título: "Você se certificou em [trilha]"
- Stats consolidadas: duração total da trilha, pontos ganhos, workflow desbloqueado
- **Asset gerado automaticamente:** preview da imagem PNG personalizada (nome + trilha + empresa + data + logo Altara discreto)
- **Texto de post pré-formatado** (editável inline pelo funcionário): "Acabei de me certificar em [trilha] no programa Altara da [empresa]. [Trecho do que aprendeu/aplicou]. #IA #adoção #carreira"
- **Botões:**
  - **"Compartilhar no LinkedIn"** — deeplink LinkedIn share (texto + imagem)
  - **"Baixar imagem"** (PNG)
  - **"Copiar link de validação"** (URL pública leve)
  - **"Compartilhar depois"** — minimiza, asset fica salvo no perfil; pode compartilhar quando quiser
  - **"Pular"** — funcionário não quer compartilhar; badge interno permanece, asset externo fica desabilitado

**Quando compartilhamento externo está desabilitado pelo CEO da empresa** (4.10): a tela mostra só o badge interno + stats; sem opção de gerar asset externo. Mensagem: "Sua empresa optou por manter certificações internas."

### 5.12 Perfil e gamificação

**Página de perfil do funcionário:**

- Avatar + nome (ou apelido) + cargo + departamento
- **Pontos totais** + posição histórica em Challenges
- **Streak atual** + recorde pessoal
- **Galeria de badges** (visual gallery — espelha Section)
- **Certificados** (lista com links de validação públicos)
- **Histórico de trilhas e workflows** (resumo)
- **Contexto pessoal** editável (cargo, tarefas-tipo, ferramenta preferida, nível de experiência) — mudanças regeneram trilhas futuras
- **Configurações de privacidade:**
  - Identificação em ranking (nome / apelido / oculto) — respeita política da empresa
  - Opt-out de visibilidade pública (continua pontuando pro agregado)
  - Opt-in de compartilhamento de aplicações como caso-âncora candidato

### 5.13 Solicitação de trilha e feedback (canal dinâmico)

Implementa o mecanismo decidido em 3.12 / 4.13.

**"Solicitar trilha" (item da sidebar + acessível no Home):**

- Campo texto livre: "O que você gostaria de aprender que ainda não tem trilha?"
- Opcional: marcar departamento, ferramenta IA preferida, urgência ("essa semana / nas próximas / quando rolar")
- Botão "Enviar pedido"
- Confirmação: "Pedido recebido. Altara revisa e responde — você é notificado quando uma trilha relacionada estiver disponível."

**Feedback estruturado por lição** (já parte de 5.6):

- 4 opções rápidas: útil / confuso / genérico / já sabia
- Campo opcional de comentário

**E-mail trimestral automático** (vide 4.11):

- "Como tá sua jornada na Altara?"
- Perguntas curtas: o que faltou? o que confundiu? o que gostaria de aprender a seguir?
- Resposta vai pra fila Altara → curadoria humana

### 5.14 Coach Floating Assistant

Botão flutuante persistente no canto bottom-right de **toda tela do Coach**. Espelha o chat bubble flutuante do Section.

**Componentes:**

- Bolha circular `altara-600`, 56px diâmetro, com ícone de chat
- Ao clicar: expande pra **painel lateral** com mini-chat (chat menor que o Apply completo)
- Funcionário pode perguntar coisa rápida ("como faço pra reportar aplicação?", "explica de novo o que é Challenge", "o que é um placeholder?")
- Coach responde no painel sem sair da tela atual
- **Botão "Abrir no Apply completo"** dentro do painel pra escalar pro flow conversational com plano lateral (5.9.2) quando a conversa vira algo mais sério

**Quando usar (do funcionário):**

- Dúvida rápida sobre produto ou conceito de IA
- Esclarecer algo que apareceu numa lição (sem sair dela)
- Atalho pra começar use case sem ir pra área Apply

**Persistência:**

- Disponível em qualquer área (Home, Trilhas, Apply, Workflows, Perfil)
- Estado de chat **persistido entre sessões** (histórico até 7 dias)
- Conta como evento de telemetria pra entender o que funcionários perguntam mais (input pra curadoria de Guides e templates)

### 5.15 Guides (micro-content)

**Não são trilhas, são leituras curtas de apoio.** Espelham os 4 cards "Why use AI / Leveraging Your Tools / Verifying Your Output / Iterating with AI" do Section.

**Características:**

- ~2-3min de leitura cada
- Visual de cabeçalho colorido (gradient sutil — paleta varia por guide)
- Conteúdo formatado: texto + lista + opcional 1 imagem ilustrativa
- **Sem certificação, sem pontos** (são apoio, não progresso formal)
- Acessíveis a qualquer momento via **Perfil > Guides** ou **sidebar do Apply chat**

**4 guides core no v1:**

1. **Por que usar IA** — quando IA agrega valor vs. quando não vale o esforço; sinais de bom caso de uso
2. **Aproveitando suas ferramentas** — capacidades e limites de Copilot, Claude, GPT; quando usar qual
3. **Verificando o output** — como validar resposta de IA antes de usar (alucinação, viés, fontes)
4. **Iterando com IA** — como melhorar prompts com feedback iterativo

**Guides adicionais** entram conforme a Altara identifica patterns nas dúvidas (via canal de feedback, telemetria do Floating Assistant, e-mails trimestrais). Provavelmente 1-2 guides novos por trimestre nos primeiros 12 meses.

### 5.16 O que esta seção NÃO decide

- **Mockups/wireframes visuais** específicos → próxima etapa.
- **Stack frontend** (React Native? PWA? Native iOS/Android?) → SPEC.
- **LLM por trás do Coach conversational** (Claude? GPT? mix?) → SPEC. Provavelmente Claude pra qualidade de raciocínio + system prompt curado.
- **Animações/transições** específicas (confetti library, easing, etc.) → trabalho de design.
- **Sons / haptic feedback** → decisão posterior, depende de plataforma.
- **Modo offline** (lições disponíveis sem internet) → decisão de roadmap.

### 5.17 Decisões resolvidas + em aberto

**Resolvidas (v1.9 + v1.15):**

- ✓ **Eventos ao vivo e On-Demand library:** fora do v1.
- ✓ **Plataforma alvo:** web apenas no v1 (responsivo).
- ✓ **Notificações:** apenas e-mail no v1.
- ✓ **Login/autenticação:** magic link por e-mail no v1.
- ✓ **Reset/regenerar trilha em andamento:** 1x por trilha; histórico arquivado.
- ✓ **Compartilhamento de workflow entre colegas:** via biblioteca compartilhada.
- ✓ **Apply como módulo first-class (v1.15):** área separada no Coach, coach conversational com sidebar de plano, output = Action Plan + Customized Prompt + 4 Guides.
- ✓ **Coach Persona Intro (v1.15):** tela "Olá!" depois do onboarding pessoal, uma vez por funcionário.
- ✓ **Floating Assistant (v1.15):** chat bubble persistente bottom-right em qualquer tela.
- ✓ **Guides como micro-content (v1.15):** 4 cores no v1 (Por que IA / Aproveitando ferramentas / Verificando output / Iterando).
- ✓ **Padrões de exercício em lição (v1.15):** 4 patterns explícitos — highlight/marker, múltipla escolha, role-play numerado, refinamento de prompt.
- ✓ **Celebrações intermediárias (v1.15):** disparam a cada lição-chave + ao atingir 25/50/75% da trilha.

**Novas decisões em aberto (v1.15):**

- **Profundidade do Coach chat conversational:** roteirizado (templates por categoria de use case) vs. genuinamente LLM-driven (Coach improvisa)? Provável: **híbrido** — templates por categoria + LLM preenche slots dinamicamente. Roteirização garante qualidade previsível; LLM dá flexibilidade.
- **Apply chat persistente:** se funcionário fechar o chat no meio, retoma exatamente onde parou? Provável: **sim**, com timeout de 7 dias (depois reseta pra evitar conversas zumbi).
- **"Salvar como workflow da empresa" via Apply:** quem aprova promoção pra biblioteca? Provável: **champion** no v1 (alinhado com 4.13 "champion opera"); auto-promoção fica pro roadmap.
- **Floating Assistant — escopo de respostas:** pode responder qualquer coisa (incluindo perguntas técnicas sobre Copilot) ou só sobre o produto Altara + conceitos de IA? Provável: **priorizar produto + perguntas conceituais sobre IA**; "como fazer X no Copilot" redireciona pro Apply completo.
- **Starters na Home — geração:** engine (LLM gera dinâmico por contexto) ou pool curado humano (3 starters fixos por perfil)? Provável: **pool curado no v1** (3 starters por perfil função × indústria); LLM dinâmico no roadmap quando volume justificar.
- **Guides adicionais além dos 4 core:** quem decide quando adicionar? Provável: **Altara cura baseado em sinal de demanda** (canal de feedback + dúvidas no Floating Assistant + drop-offs em lições).
- **Card "Crie seu próprio use case":** sempre visível como primeiro card do catálogo ou item separado de menu? Provável: **primeiro card destacado** (ícone +, mesma altura dos demais — pattern Section).

---

## 6. Workflows como entregável

### 6.1 Propósito do workflow

Workflow é o **entregável real** do Altara. Trilhas são o veículo; workflows são o que fica. Definição precisa:

> **Workflow = procedimento curado, executável, usando IA nativa, que entrega um resultado concreto de trabalho.**

Três palavras que excluem coisas:

- **Procedimento** (não automação): funcionário executa, IA executa parte. Não é Zapier, não é runtime Altara, não é código custom. Princípio 2.2.3 preservado.
- **Curado** (não rascunho): passou por engine + revisão (na Fase 1, humana). Não é "qualquer prompt salvo".
- **Resultado concreto** (não exercício): saída é entregável real — relatório, e-mail, análise, lead list, contrato. Não é "lição aprendida".

Workflow é onde a curva de adoção do produto acontece: funcionário pode parar de fazer trilhas, mas se ele tá usando o workflow toda semana, o programa tá pegando.

### 6.2 Anatomia de um workflow

Estrutura completa:

| Componente | Conteúdo | Visibilidade |
|---|---|---|
| **Metadata** | nome, descrição curta, departamento alvo, função alvo, ferramenta IA alvo, categoria, dificuldade, tempo médio de execução | sempre visível |
| **Pré-requisitos** | o que o funcionário precisa ter antes (acesso, dados, licença) | visível antes de usar |
| **Passo a passo** | sequência numerada de ações que o funcionário executa (5-15 passos típicos) | foco central da tela |
| **Prompts otimizados** | um ou mais prompts prontos pra copiar/colar, em code-block com botão "copiar" | dentro dos passos relevantes |
| **Plano de implementação** | checklist do setup do workflow no provider (ex: "criar agente Copilot Studio chamado X, com prompt do passo 2, fonte de conhecimento Y") | seção dobrável "Configurar de fato" |
| **Output esperado** | descrição + exemplo do resultado final ("você terá um relatório Markdown de 1 página com 3 seções") | preview antes de iniciar |
| **Trilha origem** | link pra trilha que ensinou o workflow (se aplicável) | linha de "veio de" |
| **Versão** | identificador semântico | rodapé técnico |
| **Status** | draft / ativo / ocioso / arquivado | header |

**Placeholders dinâmicos nos prompts:**

Prompts podem conter placeholders como `{nome_cliente}`, `{produto}`, `{prazo}`. Quando o funcionário aciona "Usar agora" no Coach, o produto detecta placeholders e mostra **UI de preenchimento** (formulário leve com 1 campo por placeholder) antes de gerar o prompt final pronto pra cópia. Sem placeholders = botão "copiar" direto. Decisão 6.12.

### 6.3 De onde vêm os workflows

Quatro origens no v1:

1. **Trilha (output da última lição)** — caminho padrão. Cada trilha desbloqueia 1 workflow. Workflow nasce contextualizado pra função + indústria + ferramenta IA.
2. **Variante local pelo champion** — champion edita um workflow existente pra ajustar à realidade da empresa (vide 6.7). Cria nova versão, mantém o original.
3. **Catálogo global (promoção)** — workflow popular numa empresa, depois de curadoria humana (Fase 1) ou IA (Fase 2), vira template no Catálogo global e fica disponível pra outros clientes. Vide 3.10.
4. **Solicitação dinâmica** — funcionário/champion pede via canal de solicitação (5.11). Altara curador avalia, cria template novo se justifica, gera workflow.

**Workflow "from scratch" pelo cliente (champion ou funcionário criando do zero, fora do engine):** **não no v1.** Decisão 3.12. Mantém qualidade controlada e protege o moat do Engine.

### 6.4 Ciclo de vida e estados

| Estado | Quando | Quem age | Visibilidade |
|---|---|---|---|
| **Draft** | gerado pelo engine, ainda em validação (vide 3.9) | Engine + curadoria Altara (Fase 1) | só Altara interno |
| **Ativo** | publicado, disponível pra uso | Funcionário pode usar | Coach + biblioteca empresa |
| **Em destaque** | promovido pelo champion (4.8) | Champion | banner no topo no Coach |
| **Ocioso** | sem uso por >30 dias | sistema marca automaticamente | aparece em alerta no HQ (4.11) |
| **Arquivado** | manualmente arquivado pelo champion | Champion | some do Coach; mantém no histórico HQ |
| **Substituído** | nova variante local do champion virou a oficial | Champion | versão antiga vira histórico |

Transições são reversíveis (arquivado pode voltar a ativo). Workflows nunca são deletados — sempre arquivados, pra preservar histórico de uso e auditoria.

### 6.5 Versionamento

- **Workflow base no Catálogo global:** tem versão semântica (ex: v1.0, v1.1, v2.0). Mudanças menores são patch; mudanças de prompt ou estrutura são minor; mudanças de output são major.
- **Variante local da empresa:** quando champion edita, cria nova versão `{empresa}-vN` derivada da versão base. Histórico preservado.
- **Funcionário que estava usando v anterior continua tendo acesso à versão antiga** (não atualiza automaticamente — explicação simples: "Champion atualizou esse workflow. Ver mudanças? [Atualizar] [Continuar com versão atual]").
- **Auditoria leve:** quem editou, quando, o que mudou (diff textual) — visível só no HQ pra champion/CEO.

### 6.6 Integração nativa com Copilot/Claude/GPT

Workflows são escritos no **dialeto da ferramenta alvo**. Cada ferramenta tem recursos nativos diferentes — workflow tira proveito deles:

**Microsoft Copilot (M365):**

- Recursos nativos: Copilot em Word/Excel/Outlook/Teams, **Copilot Studio** (agentes customizados), **declarative agents** (em M365 Copilot), pinning de prompts.
- Workflow típico: passo a passo + prompt + instrução pra criar agente no Copilot Studio (ou usar Copilot direto no Word/Excel com prompt salvo).

**ChatGPT (OpenAI Enterprise):**

- Recursos nativos: **GPTs customizados** (instruções persistentes + knowledge base + Actions), **Projects** (contexto persistente + arquivos), chat direto.
- Workflow típico: passo a passo + prompt + instrução pra criar GPT customizado com conhecimento e instruções.

**Claude (Anthropic):**

- Recursos nativos: **Projects** (contexto persistente + arquivos + system prompt), **Artifacts** (geração estruturada), chat direto.
- Workflow típico: passo a passo + prompt + instrução pra criar Project com setup de contexto.

**Famílias de ferramenta no Catálogo global:**

Um mesmo workflow conceitual (ex: "Pesquisa de mercado") tem versões equivalentes pra Copilot, GPT e Claude — formam uma **família** no Catálogo. No Coach, funcionário vê só a versão da ferramenta que ele usa. Engine de geração escolhe automaticamente ao gerar workflow pra ele. Quando empresa adiciona ferramenta nova, famílias correspondentes ficam disponíveis sem precisar regenerar trilha. Decisão 6.12.

**No v1, execução é 100% copiar e colar.** O funcionário lê o passo a passo, copia o prompt (botão dedicado), abre o provider, executa. Plano de implementação é texto + checklist. **Sem deeplinks no v1** — evita variabilidade entre providers (URL schemes diferentes e instáveis) e mantém produto enxuto. Decisão 6.12.

**Workflows com Actions/webhooks:** plano de implementação **pode documentar** como configurar Action no provider (ex: "crie Action no GPT apontando pro webhook do seu CRM"), mas Altara **não fornece** Actions próprios nem hospeda webhooks no v1.

**Roadmap futuro** (não no v1):

- Deeplinks pros providers (quando estabilizarem APIs públicas e URL schemes).
- Implantação semi-automática via APIs (Copilot Studio API, OpenAI Assistants API, Claude API) — Altara configura o agente/GPT/Project no provider sob nome do cliente.
- Actions/webhooks próprios da Altara (precisa de runtime + segurança — complexo demais pro v1).

### 6.7 Edição pelo champion (variantes locais)

Champion (e só champion — decisão 4.13) pode editar workflows da biblioteca pra adaptar à realidade da empresa.

**O que champion pode editar:**

- Passo a passo (texto, ordem, adicionar/remover passos)
- Prompts (refinar pra termos da empresa)
- Plano de implementação (ajustar pra setup específico do cliente)
- Output esperado (atualizar exemplo)

**O que champion NÃO pode editar:**

- Ferramenta alvo (mudaria o tipo do workflow — força "novo workflow" via solicitação)
- Categoria, nome principal (vai como novo template via solicitação; preserva integridade do Catálogo)
- Trilha origem (referência histórica)

**Fluxo de edição:**

1. Champion abre workflow → botão "Editar"
2. Edição inline com preview lado a lado (original vs. variante)
3. Champion descreve mudança (texto curto, vira changelog do workflow)
4. Salva → cria nova versão `{empresa}-vN`
5. Versão fica ativa imediatamente; original arquivada (recuperável)

**Sinal pra Altara:** variantes locais que aparecem em múltiplas empresas viram candidatos a atualizar o workflow base no Catálogo (vide 3.10 fluxo cross-tenant).

### 6.8 Workflows obrigatórios

Champion (e CEO via aprovação) pode marcar workflow como **obrigatório** pra departamento ou função específica.

**Comportamento:**

- Funcionário do departamento marcado vê banner no Coach: "Workflow obrigatório — concluir até [data]"
- Aparece destacado na Home do funcionário
- Não impede acesso a outros workflows, mas é "task" que aparece em todas as listas até concluir
- HQ rastreia % de conclusão por departamento → entra em alertas (4.11)

**Decisão:** workflow obrigatório é "deve usar pelo menos 1x e reportar aplicação real". Conclusão simbólica não basta.

### 6.9 Métricas de saúde do workflow

Cada workflow tem dashboard de saúde (visível no HQ por champion/CEO; sumarizado no Coach por funcionário):

- **# execuções totais** (vezes que botão "Usar agora" foi clicado)
- **# funcionários distintos que usaram** (sinal de adoção horizontal)
- **# aplicações reportadas** (sinal forte — vide 5.8)
- **Rating médio** (1-5, dado pelo funcionário após uso)
- **Tempo desde última execução**
- **Taxa de uso / desbloqueio** (% de quem desbloqueou que de fato usou — sinal de qualidade do match função × workflow)
- **# variantes locais existentes** (sinal de que workflow base talvez precise atualizar)

Workflows com taxa de uso < 30% depois de 60 dias entram em **fila de revisão pela Altara** — pode ser que o workflow base não esteja bom, ou que a função alvo esteja mal calibrada.

### 6.10 Solicitação dinâmica de novo workflow

Mesma mecânica da solicitação de trilha (5.11), mas pra workflow:

- Botão "Solicitar workflow" no Coach (na biblioteca de workflows) e no HQ (na seção Workflows)
- Campo texto livre: "Que tarefa você queria que tivesse workflow pronto?"
- Opcional: ferramenta IA alvo, urgência, exemplo do output desejado
- Vai pra fila Altara → curadoria humana → vira novo template no Catálogo global se justifica

**Notificação:** quando Altara responde (workflow disponibilizado), funcionário + champion recebem e-mail.

### 6.11 O que esta seção NÃO decide

- **Implementação técnica** (storage, schema, APIs) → SPEC.
- **Formato dos prompts** (estrutura, padrões de engenharia) → trabalho operacional contínuo, vai pra repositório de templates.
- **Lib de renderização de markdown/code blocks** → SPEC.
- **Integrações via API** com Copilot Studio / OpenAI / Anthropic → roadmap, não v1.

### 6.12 Decisões resolvidas da seção 6 (v1.11)

- **Workflows multi-ferramenta:** **sim — famílias de ferramenta** no Catálogo global. Um mesmo workflow conceitual ("Pesquisa de mercado") tem versões equivalentes pra Copilot/GPT/Claude. No Coach, funcionário vê só a versão da ferramenta dele. Quando empresa adiciona ferramenta nova, famílias ficam disponíveis sem regenerar trilha.
- **Placeholders dinâmicos nos prompts:** **sim — UI de preenchimento no v1.** Quando prompt tem `{nome_cliente}`, `{produto}`, `{prazo}` etc., o Coach mostra formulário leve antes da cópia; gera prompt final preenchido. Sem placeholders = botão copia direto.
- **Deeplinks pros providers:** **não no v1.** Tudo é **copiar e colar puro**. Evita variabilidade entre providers (URL schemes diferentes e instáveis) e mantém produto enxuto. Deeplinks entram no roadmap quando providers estabilizarem APIs públicas.
- **Limite de variantes locais por workflow base:** **ilimitado no v1.** Observar uso real e adicionar limite só se virar problema.
- **Workflows com Actions/webhooks:** **documentar, não implementar no v1.** Plano de implementação do workflow pode descrever como configurar Action no provider (ex: "crie Action no GPT apontando pro webhook do seu CRM"), mas Altara não fornece Actions próprios nem hospeda webhooks. Construção de Actions Altara fica pro roadmap (exige runtime e segurança complexos demais pro v1).

---

## 7. Métricas, ROI e telemetria

### 7.1 Propósito

Métrica em Altara não é dashboard secundário — é **UI principal** (princípio 2.2.4). Toda métrica que captamos serve a uma de três funções:

1. **Mostrar valor ao funcionário** (impacto pessoal, progresso, ranking)
2. **Apoiar decisão do champion** (quem tá engajado, qual workflow não pega, onde intervir)
3. **Justificar renovação ao CEO** (ROI, adoção, casos-âncora, narrativa exportável)

**Regra de captura:** se uma métrica não muda comportamento de funcionário, champion ou CEO — não capturamos. Métrica vaidosa é overhead técnico sem retorno de produto.

### 7.2 Hierarquia de métricas (3 audiências, mesma fonte)

| Audiência | Granularidade | Pergunta que responde | Onde aparece |
|---|---|---|---|
| **Funcionário** | individual | "Como estou progredindo? Quanto economizei?" | Coach (Home, Perfil) |
| **Champion** | departamento + individual | "Quem precisa de empurrão? Que workflow falha? Onde intervir?" | HQ (Time, Workflows, Challenges) |
| **CEO** | empresa agregada | "Vale o investimento? Como contar pro board?" | HQ (Home, Adoção & ROI) |

Mesmos eventos, diferentes recortes. Nenhuma métrica é exclusiva de uma audiência (só agregação muda).

### 7.3 Os 4 KPIs estratégicos do programa

Definidos em 4.4. Aqui ganham definição precisa:

#### % time ativo semanal

- **Definição:** % de funcionários cadastrados que fizeram ≥1 ação no Coach nos últimos 7 dias.
- **Ação válida:** login + qualquer interação (iniciar lição, completar lição, abrir workflow, reportar aplicação, responder feedback).
- **Sem ação válida:** só login sem nenhuma interação.
- **Baseline:** medido na semana 1 (Diagnóstico, vide 1.4). Tipicamente 0% ou próximo.
- **Meta padrão:** ≥70% ao fim do programa (semana 8).

#### # workflows ativos

- **Definição:** workflows com ≥1 execução nos últimos 30 dias, pertencentes à biblioteca da empresa.
- **Status considerado:** "ativo" ou "destaque" (4.8, 6.4). Workflows arquivados ou ociosos não contam.
- **Sinal cruzado:** se # workflows ativos > # funcionários ativos, há colaboração horizontal (vide 5.8).

#### % time certificado

- **Definição:** % de funcionários que concluíram pelo menos 1 trilha (status: "Certificado").
- **Conclusão de trilha exige:** todas as lições completadas + workflow desbloqueado + (no caso de workflow obrigatório, vide 6.8) ≥1 aplicação real reportada.
- **Meta padrão:** ≥70% até semana 4 (Challenge 1).

#### ROI estimado em horas economizadas

- **Definição:** somatório das horas economizadas no período (vide cálculo em 7.7).
- **Apresentação:** número grande + tooltip com fórmula transparente.
- **Conversão monetária opcional:** horas × salário médio (configurável pelo CEO; decisão em 7.12).

### 7.4 Eventos de telemetria capturados

Lista canônica. Cada evento tem: `tipo`, `funcionário_id`, `empresa_id`, `timestamp`, `payload` (campos específicos).

**Coach (funcionário):**

- `auth.login`
- `onboarding.completed`
- `trilha.iniciada` / `trilha.completada` / `trilha.arquivada` / `trilha.reset_solicitado`
- `licao.iniciada` / `licao.completada` (com tempo gasto, # tentativas)
- `exercicio.respondido` (com resultado, tempo de resposta)
- `feedback.licao` (útil / confuso / genérico / já sabia)
- `workflow.desbloqueado`
- `workflow.aberto` (visualização do detalhe)
- `workflow.usado` (clique em "Usar agora" — gera prompt copiado)
- `workflow.aplicacao_reportada` (com texto descritivo, horas economizadas declaradas, opcional print)
- `workflow.rating` (1-5)
- `workflow.solicitacao` (canal dinâmico)
- `trilha.solicitacao` (canal dinâmico)
- `certificado.gerado`
- `certificado.compartilhado` (canal, com permissão)
- `streak.iniciado` / `streak.mantido` / `streak.quebrado`

**HQ (champion + CEO):**

- `auth.login`
- `workflow.editado` (variante local)
- `workflow.arquivado`
- `workflow.destaque_marcado`
- `workflow.obrigatorio_designado`
- `trilha.obrigatoria_designada`
- `programa.config_alterada`
- `caso_ancora.aprovado_compartilhar`
- `review.gerada` (relatórios automáticos antes das reuniões CEO)

**Sistema:**

- `email.enviado` / `email.aberto` / `email.clicado` (lembretes, feedbacks, certificações)
- `challenge.iniciado` / `challenge.encerrado` (com snapshot de ranking final)
- `alerta.disparado` (tipo, alvo)

**Privacidade:** todos os eventos respeitam configuração de opt-out de funcionário (5.10) — campo nominal é mascarado quando aplicável.

### 7.5 Captura de uso real de IA (v1 manual → v2 automático)

Decisão fechada em 1.4 e 2.10. Recapitulando:

**v1 — Captura 100% manual (sem dependência de TI do cliente):**

- **Survey diagnóstico inicial** (semana 1) — survey estruturado a todos funcionários + questionário ao admin sobre licenças e config
- **"Reportar aplicação real"** em cada workflow no Coach — funcionário declara: usou? quando? horas economizadas estimadas? texto descritivo? opcional print
- **Pesquisa periódica trimestral por e-mail** (vide 4.11) — feedback estruturado
- **Survey ao fim de Challenges** — recall de uso nos últimos 14/21 dias

**v2+ — Captura automática (roadmap):**

- Microsoft Graph (Copilot Usage Report, Usage Analytics)
- OpenAI usage APIs (quando disponíveis pra Enterprise admins)
- Anthropic admin APIs (idem)

**Princípio arquitetural:** o modelo de dados interno em v1 já é desenhado no formato que a integração v2 vai trazer. Quando automatizar, é troca de fonte, não migração de schema.

### 7.6 Baseline e medição de delta

Toda métrica relevante mostra **valor atual + valor baseline + delta + seta**. Não basta "65% ativo" — tem que ser "65% ativo (era 8% antes do programa — +57pp)".

**Onde o baseline mora:**

- Capturado no **Relatório Diagnóstico** (semana 1, 1.4)
- Congelado na entidade Tenant
- Não muda durante o programa (não é "valor da semana passada")

**Métricas com baseline congelado:**

- % time usando IA (antes do programa) → vs. atual
- # casos de uso ativos (antes) → vs. atual
- # workflows reutilizáveis documentados (antes: tipicamente 0) → vs. atual

**Métricas sem baseline (medidas só durante o programa):**

- ROI em horas economizadas (só faz sentido no período)
- # certificações (idem)
- Adoção por departamento

### 7.7 Atribuição de horas economizadas (cálculo)

Método **híbrido com transparência**:

**Fontes de input:**

1. **Self-report estruturado** (preferida quando existe): funcionário declara ao reportar aplicação real ("essa aplicação me economizou X horas"). Validação leve: ranges esperados (0.25h a 40h por aplicação); fora disso, pede confirmação.
2. **Estimativa por workflow**: cada workflow no Catálogo global tem campo `tempo_medio_economizado_estimado` (definido por humanos na Fase 1; calibrado por dados reais conforme captura). Multiplica por # execuções **com aplicação reportada**.
3. **Combinação por workflow**: para cada execução com aplicação, usa self-report quando existe; senão, usa estimativa do workflow.

**Por que exige aplicação reportada:** execução do botão "Usar agora" (clique simples) não conta. Funcionário pode clicar e nunca usar. Aplicação reportada é o sinal de uso real.

**Fórmula final:**

```
Horas economizadas no período =
  Σ (para cada aplicação reportada no período)
    self_report.horas se existe
    senão workflow.tempo_medio_economizado_estimado
```

**Transparência:** tooltip no HQ explica:
- "127h economizadas no mês, baseado em 89 aplicações reportadas. 62 com self-report do funcionário (média 1.4h cada); 27 com estimativa do workflow (média 1.7h cada)."

### 7.8 Conversão monetária (ROI em $)

- **Opcional.** CEO configura no setup do programa: **salário médio anual por departamento** + horas trabalhadas por ano (default: 2000h). Decisão 7.13.
- **Por que por departamento, não único global:** mid-market BR tem disparidade salarial alta entre áreas (operacional × diretoria pode ser 10×). Usar valor único subestima ou superestima radicalmente o ROI. Configuração por departamento alinha cálculo com realidade.
- **Cálculo:** para cada aplicação reportada, horas economizadas × (salário médio do departamento do funcionário / horas anuais). Agregação por departamento e total da empresa.
- **Apresentação:** se CEO configurou, aparece em R$ ao lado das horas (HQ Home + Adoção & ROI). Se não, só horas.
- **Decisão de privacidade:** valores de salário ficam no Tenant; nunca compartilhados cross-tenant; funcionário **não vê valor monetário** do próprio cálculo (vê só horas economizadas).

### 7.9 Casos-âncora como métrica narrativa

Não é só número — é história. Casos-âncora são parte da telemetria do produto (4.5).

**Seleção 100% manual pelo champion no v1** (decisão 7.13). Sem sugestão automática.

Champion abre a lista de aplicações reportadas no HQ e seleciona deliberadamente 3-5 casos pra destacar no mês. Filtros disponíveis pra ajudar a navegar a lista:

- Horas economizadas estimadas (ordenável)
- Tem texto descritivo do funcionário (✓ / ✗)
- Funcionário consentiu compartilhamento (5.10 opt-in)
- Rating do workflow associado (filtro por mínimo)
- Departamento

**Por que manual e não algoritmo:** caso-âncora bom não é o de maior número — é o que conta uma história específica que ressoa com time/CEO. Julgamento humano acerta isso; algoritmo erra. Custo de errar é caro (caso público fraco mina credibilidade do programa).

**Por que importa:** CEO se lembra da história, não do número. "Maria do financeiro economizou 6h fazendo relatório mensal com Copilot" vale mais que "ROI de 127h no mês" numa reunião.

**Roadmap:** sugestão algorítmica entra em versão futura — sempre como **sugestão pra revisão humana**, nunca publicação direta.

### 7.10 Métricas pessoais do funcionário (no Coach)

Visíveis no perfil + Home:

- **Pontos acumulados** (todos os Challenges)
- **Posição histórica** (média de ranking nos últimos N Challenges)
- **Streak atual + recorde pessoal**
- **# trilhas completadas**
- **# workflows desbloqueados**
- **# aplicações reportadas**
- **Horas economizadas pessoais** (somatório das aplicações reportadas com self-report)
- **Badges + certificados conquistados**

**Princípio:** funcionário vê seu próprio impacto em horas. Não vê dados de colegas individuais (só ranking, conforme política da empresa).

### 7.11 Privacidade, retenção e LGPD

**Bases legais (LGPD):**

- **Legítimo interesse:** dados agregados de uso pra operação do programa
- **Consentimento explícito:** compartilhamento de aplicação como caso-âncora; compartilhamento externo no LinkedIn; uso de nome em ranking
- **Cumprimento contratual:** dados nominais essenciais à entrega do serviço

**Direitos do funcionário:**

- **Acessar** seus dados (página de perfil)
- **Exportar** (botão "Baixar meus dados" — JSON)
- **Solicitar deleção** (botão "Apagar minha conta" — soft delete imediato, hard delete após 30 dias)

**Direitos da empresa cliente:**

- **Exportar dados completos do tenant** a qualquer momento (vide 2.6 — "soberania de dados")
- **Exportar métricas pra BI externa em CSV** (decisão 7.13) — tela "Exportar" no HQ permite baixar CSV consolidado (KPIs + eventos + aplicações reportadas) pra alimentar Looker/Power BI/Tableau. API REST equivalente entra no roadmap.
- **Pedir deleção total** ao encerrar contrato

**Retenção:**

- Dados de uso nominais: **24 meses** por padrão (configurável). Após, anonimização.
- Dados agregados anônimos: indefinido (alimentam Catálogo global).
- Self-reports textuais: 24 meses; anonimizados após.

### 7.12 O que esta seção NÃO decide

- **Stack técnica de telemetria** (Segment, Mixpanel, PostHog, próprio) → SPEC.
- **Schema dos eventos** (Avro, JSON-LD, próprio) → SPEC.
- **Pipeline de dados** (batch, streaming, warehouse) → SPEC.
- **Frequência de atualização** das métricas no HQ (tempo real vs. minutos vs. horas) → SPEC.
- **Cohort analysis, A/B testing**, segmentação avançada → roadmap pós-v1.
- **Política exata de anonimização** (k-anonymity? diferencial?) → revisão jurídica + SPEC.

### 7.13 Decisões resolvidas da seção 7 (v1.13)

- **Captura automática via Microsoft Graph no v1:** **não — captação 100% manual no v1.** Evita dependência de TI no momento da venda. Integração entra no v2 conforme demanda.
- **"Aplicação real reportada" obrigatória pra hora economizada contar:** **sim — gate explícito.** Workflow precisa ser **aplicado**, não só aberto. Clique em "Usar agora" gera evento `workflow.usado` mas **não vira hora economizada**. Só `workflow.aplicacao_reportada` entra no ROI.
- **Tempo de retenção de dados de uso:** **24 meses** default. Configurável por cliente via contrato.
- **Configuração de salário médio pra ROI:** **por departamento.** Mid-market BR tem disparidade salarial alta entre áreas — valor único global subestima ou superestima radicalmente. Detalhamento em 7.8.
- **Casos-âncora — fluxo de seleção:** **100% manual pelo champion no v1.** Sem sugestão automática; champion abre lista filtrada e seleciona deliberadamente. Detalhamento em 7.9. Sugestão algorítmica entra no roadmap como sugestão pra revisão humana, nunca publicação direta.
- **Export pra BI:** **CSV export no v1**; API no roadmap. Detalhamento em 7.11.
- **Métrica de alcance LinkedIn:** **# de compartilhamentos no v1.** Alcance estimado (via integração LinkedIn API) fica pro v2. Detalhamento em 4.5.1.

---

## 8. Consolidação: roadmap, princípios, riscos, próximos passos

### 8.1 Status do PRD

PRD v1 cobre 7 seções de produto + esta consolidação. Todas as decisões em aberto explicitamente listadas em 1.5.1, 2.10, 3.12, 4.13, 5.13, 6.12 e 7.13 foram resolvidas em iterações com o founder.

**Decisões implícitas que ficaram com "Provável: X" e ainda não foram explicitamente ratificadas:**

- **1.3 — Entrevista de setup (semana 0):** humano (founder/equipe Altara) nos primeiros clientes; agente Altara depois. Manter como rumo provável.
- **1.5 — Trilha 1 gerada igual por (contexto + função) vs. única por funcionário:** template forte por (indústria × função), slots adaptados pelo agente. Manter.
- **3.7 — Critérios numéricos pra transição curadoria humana → IA:** sem números definidos (a calibrar com primeiros clientes).

Nenhuma é bloqueio pra próxima fase. Podem ser ratificadas durante setup do primeiro cliente real.

### 8.2 O que ficou pro roadmap pós-v1

Lista consolidada do que foi explicitamente adiado em decisões anteriores. Agrupada por fase provável (ordem indicativa, não amarrada):

**Fase "v1.5" (curto prazo após validação dos primeiros clientes):**

- **EN-US** como segundo idioma (Seção 3.12)
- **SSO corporativo** (M365, Google Workspace) sob demanda real (Seção 2.10, 5.13)
- **Notificações em Slack/Teams/WhatsApp** sob demanda real (Seção 2.10)
- **CSV → API REST** pra export de métricas (Seção 7.13)
- **Sugestão algorítmica de casos-âncora** como sugestão pra revisão humana (Seção 7.9)
- **Líder de departamento** como papel adicional (Seção 4.13)

**Fase "v2" (médio prazo, com tração consolidada):**

- **Captura automática de uso de IA** via Microsoft Graph (Copilot Usage Report), OpenAI usage APIs, Anthropic admin APIs (Seção 7.5, 2.10)
- **Curadoria de templates por IA** (Fase 2 do Engine — Seção 3.7)
- **App mobile nativo (iOS + Android)** (Seção 5.13)
- **Push notifications** (Seção 5.13)
- **Eventos ao vivo + On-Demand library** no Coach (Seção 5.13)
- **Deeplinks pros providers** (ChatGPT, Copilot Studio) quando estabilizarem (Seção 6.12, 6.6)
- **Alcance LinkedIn via integração API** (Seção 7.13)
- **Compartilhamento direto entre colegas (DM) no Coach** (Seção 5.13 — só biblioteca compartilhada no v1)

**Fase "v3" (longo prazo, opcional):**

- **Implantação semi-automática** de workflows nos providers via APIs (Copilot Studio API, OpenAI Assistants API, Claude API) (Seção 6.6)
- **Actions/webhooks próprios da Altara** com runtime e segurança (Seção 6.6, 6.12)
- **Auditoria granular** pra compliance corporativa (Seção 4.13)
- **Cohort analysis + A/B testing** no engine (Seção 7.12)
- **Painel Altara interno como produto** estruturado (Seção 2.10)

### 8.3 Princípios consolidados (cruzam todas seções)

Princípios que emergiram do PRD e devem filtrar **toda** decisão futura:

1. **Aproveita o que o cliente já tem.** Nunca substitui Copilot/Claude/GPT — orquestra. (2.2.1)
2. **Personalização por contexto é first-class.** Conteúdo genérico é exceção. (2.2.2)
3. **Sem código custom por cliente.** Escala em produto, não em consultoria técnica. (2.2.3)
4. **ROI é parte do produto, não relatório separado.** Cada tela mostra impacto. (2.2.4)
5. **Programa, não SaaS frio.** Começo-meio-fim de 60 dias. (2.2.5)
6. **Multi-LLM agnóstico por design.** Cliente escolhe ferramentas; Altara se molda. (2.2.6)
7. **CEO valida, champion opera, funcionário aplica.** Papéis claros, sem sobreposição. (4.2)
8. **Engine de geração é o moat.** Templates fortes + slots contextuais; curadoria humana → IA. (3.5)
9. **Aplicação reportada é o gate único de ROI.** Clique não conta. Aplicação real conta. (7.7)
10. **Distribuição via colaboradores é canal estratégico.** Cada certificado é potencial post no LinkedIn. (4.5.1)
11. **Métrica só existe se muda comportamento.** Sem vaidade técnica. (7.1)
12. **Soberania de dados do cliente.** Exportar a qualquer momento, sem refém. (2.6, 7.11)

### 8.4 Riscos identificados

Pontos de atenção que não viraram features — exigem monitoramento ou plano de mitigação:

| Risco | Impacto | Mitigação inicial |
|---|---|---|
| **Engine gera trilhas de qualidade inconsistente nos primeiros clientes** | Adoção do funcionário cai; CEO não renova | Curadoria humana 100% (Fase 1); validação pré-serviço (3.9); calibrar templates com primeiros 10 clientes |
| **"Aplicação reportada" não vira hábito do funcionário** | ROI mensurado fica próximo a zero, narrativa de renovação fraca | UX agressiva pra reportar (botão grande, ponto bônus alto); cobrança trimestral via e-mail; champion entra como advogado interno |
| **Captura 100% manual cansa funcionário** | Drop-off de engajamento em surveys e self-reports | Survey de Challenge curto (3-5 perguntas); pesquisa trimestral espaçada; integração automática prioritária no roadmap |
| **CEO cliente pede integrações que adiamos (Slack, SSO)** | Pressão de vendas pra adicionar; v1 enxuto vira gargalo | Posicionamento explícito do v1; roadmap visível; "Slack/SSO em [trimestre]"; precificar como adicional |
| **Variantes locais de workflow viram dívida cultural** | Empresa cliente acumula dezenas de variantes, manutenção custosa | Champion vê dashboard de saúde dos workflows; sugestão de "consolidar" quando >3 variantes do mesmo base; revisão periódica |
| **Compartilhamento LinkedIn não pega** | Canal de distribuição vira ruído, não amplificação | Texto pré-formatado convincente; badge bonito; CEO endossa publicamente; medir taxa e iterar |
| **Concorrência:** Section traduz pro BR; Microsoft expande Copilot adoção nativa; nova entrante BR | Janela competitiva curta | Moat do Engine de geração precisa virar realidade nos primeiros 12 meses; velocidade de aprendizado é tudo |
| **Solicitações de trilha entram em escala maior que curadoria humana suporta** | Cliente espera muito tempo, esfria | Limite implícito por cliente; priorização clara; transição pra curadoria IA acelerada se acontecer |

### 8.5 Próximos artefatos (fora do PRD)

PRD v1 é base pra criar:

| Artefato | Propósito | Quando |
|---|---|---|
| **SPEC técnico** | Stack, schema, APIs, infra, segurança, deploy | Depois de mockups |
| **Mockups HTML navegáveis** | Telas-chave HQ + Coach espelhando Section como referência visual; usar pra venda + dev brief | Próximo passo natural |
| **Modelo de pricing** | GymPass-like (por funcionário ativado)? Per-tenant fixo? Tier por tamanho? Adicional por integração? | Em paralelo com mockups (input pra GTM) |
| **GTM operacional** | Wedge de entrada do programa 60 dias (semana 0 como produto de venda); roteiros de vendas; materiais | Em paralelo com pricing |
| **Plano operacional Altara (primeiros 12 meses)** | Equipe interna pra curadoria humana de templates (Fase 1), gestão dos primeiros clientes, workshops kickoff | Depois de pricing |
| **Plano jurídico/LGPD** | Termos de uso, política de privacidade, contrato cliente, DPA, consentimentos pra compartilhamento externo | Antes do primeiro cliente piloto |

### 8.6 Decisões fora do PRD que vão precisar acontecer

Listadas pra ficar no radar — não são decisões de produto, mas bloqueariam lançamento se ignoradas:

- **Nome final** do produto ("Altara" é working name?)
- **Identidade visual** (logo, paleta, tipografia — DESIGN.md candidato)
- **Domínio + branding** (altara.com.br disponível?)
- **Razão social / estrutura jurídica** da empresa
- **Time inicial** (founders, primeiras contratações pra curadoria + vendas + dev)
- **Plataforma de pagamento BR** (Stripe BR, Pagar.me, Asaas, outra)
- **Cloud provider** (AWS BR? GCP? Hospedagem nacional pra LGPD?)
- **Stack de e-mail transacional** (Resend, Postmark, SES, SendGrid)
- **Política de SLA com clientes pagantes**

### 8.7 Como evoluir esse PRD

Princípios pra próximas iterações deste documento:

- **Versione no Changelog**, sempre. Não há "PRD v2 do zero" — há PRD v1.N com decisões atualizadas e seções refinadas.
- **Decisões resolvidas ficam no texto da seção** (não em apêndice). Decisões em aberto ficam em sub-seção dedicada por seção.
- **Se uma decisão muda meses depois**, reescreve a seção afetada + entrada no Changelog explicando o motivo.
- **Conteúdo que vira SPEC sai do PRD**. PRD trata "o quê" e "por quê"; SPEC trata "como". Se você notar que está escrevendo "vamos usar React Server Components", você saiu do PRD.

---

## Changelog

- **2026-05-19 (v1.15):** Seção 5 (Coach) reestruturada após análise da jornada Section Coach via screenshots — gap identificado: cobríamos bem o lado estruturado (Trilhas) mas faltava o lado conversational (Apply).
  - **5.1 Propósito** reescrito pra cobrir dois caminhos paralelos: **Trilhas** (estruturado) + **Apply** (conversational). Ambos alimentam Workflows.
  - **5.2 Navegação macro** atualizada: Apply vira módulo first-class no sidebar (7 áreas: Home / Trilhas / Apply / Workflows / Perfil / Solicitar / Floating).
  - **Nova 5.4 — Coach Persona Intro ("Olá!")**: tela "Hello there!" do Section, persona + 4 bullets + 2 CTAs. Acontece uma vez após onboarding pessoal.
  - **5.5 Home** ganhou bloco "Pra você fazer agora" com 3 starters clicáveis (sugestões pré-geradas que abrem Apply chat direto).
  - **5.7 Lição** ganhou subseção 5.7.1 com **4 padrões de exercício explícitos** (highlight/marker, múltipla escolha, role-play numerado, refinamento de prompt) e 5.7.2 com **celebrações intermediárias** (25/50/75% da trilha, espelhando "Good progress — keep going" do Section).
  - **Nova 5.9 — Apply / Use Case Builder**: módulo inteiro novo (5.9.1 catálogo, 5.9.2 coach chat com sidebar de plano, 5.9.3 output Action Plan + Customized Prompt + 4 Guides, 5.9.4 modal do prompt completo, 5.9.5 tabela Apply × Trilha).
  - **5.10 Workflow handoff** atualizado: explicita 2 origens (Trilha vs. Apply) com estruturas levemente diferentes mas mesma interface.
  - **Nova 5.14 — Coach Floating Assistant**: chat bubble persistente bottom-right em qualquer tela.
  - **Nova 5.15 — Guides (micro-content)**: 4 leituras curtas de apoio (Por que IA / Aproveitando ferramentas / Verificando output / Iterando), não-trilhas.
  - **5.17** consolida decisões resolvidas + 7 novas decisões em aberto (profundidade do chat LLM-driven vs. roteirizado, persistência do Apply chat, aprovação de "salvar como workflow da empresa", escopo do Floating Assistant, geração dos starters, expansão de Guides, card "Crie seu próprio").
- **2026-05-18 (v1.14):** Seção 8 (Consolidação) escrita. PRD v1 completo.
  - 8.1 status do PRD; lista de decisões implícitas ("Provável: X") a ratificar com primeiro cliente real (entrevista de setup humano vs. agente, variação de trilha, critérios da transição curadoria humana → IA).
  - 8.2 roadmap pós-v1 organizado em 3 fases (v1.5, v2, v3) — agrupando tudo que foi adiado.
  - 8.3 doze princípios consolidados que cruzam todas seções e filtram decisões futuras.
  - 8.4 oito riscos identificados com mitigação inicial (qualidade do engine, aplicação reportada não virar hábito, fadiga de self-report, pressão de vendas por integrações adiadas, dívida cultural de variantes, LinkedIn que não pega, concorrência, escala de solicitações).
  - 8.5 próximos artefatos fora do PRD (SPEC, mockups, pricing, GTM, plano operacional, plano jurídico).
  - 8.6 decisões fora do PRD a ficar no radar (nome, identidade visual, domínio, jurídico, time, cloud, e-mail transacional, SLA).
  - 8.7 princípios de evolução do próprio PRD (versionar no Changelog, decisões resolvidas no texto, conteúdo de SPEC sai do PRD).
- **2026-05-18 (v1.13):** Decisões resolvidas da Seção 7 + ajustes correspondentes.
  - **Captura v1:** 100% manual (sem Microsoft Graph no v1).
  - **Gate de ROI:** aplicação reportada é o gate. Clique em "Usar agora" gera evento mas não conta como hora economizada.
  - **Retenção:** 24 meses default, configurável por contrato.
  - **Salário pra ROI:** por departamento (não único global). 7.8 reescrita com justificativa.
  - **Casos-âncora:** seleção 100% manual pelo champion no v1, sem sugestão automática. 7.9 reescrita.
  - **Export:** CSV no v1; API no roadmap. 7.11 atualizado.
  - **Métrica LinkedIn:** # de compartilhamentos no v1; alcance fica pro v2. 4.5.1 atualizado.
- **2026-05-18 (v1.12):** Seção 7 (Métricas, ROI e telemetria) escrita completa.
  - 7.1 propósito: métricas são UI principal (princípio 2.2.4); regra de captura "se não muda comportamento, não captura".
  - 7.2 hierarquia: 3 audiências (funcionário, champion, CEO) com mesmos eventos, recortes diferentes.
  - 7.3 definições precisas dos 4 KPIs estratégicos do programa (% time ativo, # workflows ativos, % certificado, ROI horas).
  - 7.4 lista canônica de eventos capturados (Coach, HQ, sistema).
  - 7.5 captura v1 100% manual (survey + reportar aplicação + e-mail trimestral + survey de Challenge); v2+ via APIs (Microsoft Graph, OpenAI, Anthropic).
  - 7.6 baseline + delta como UI obrigatória ("65% — era 8% antes").
  - 7.7 atribuição de horas economizadas: método híbrido (self-report preferido, estimativa do workflow como fallback), só conta com aplicação reportada. Tooltip transparente no HQ.
  - 7.8 conversão monetária opcional (CEO configura salário médio).
  - 7.9 casos-âncora como métrica narrativa: critério de seleção automático + curadoria champion/CEO.
  - 7.10 métricas pessoais do funcionário (pontos, streak, horas economizadas pessoais).
  - 7.11 LGPD: bases legais, direitos do funcionário e da empresa, retenção (24 meses default).
  - 7.13 decisões em aberto: Microsoft Graph no v1, gate de "aplicação reportada", retenção, salário único vs. por departamento, seleção de casos-âncora, export pra BI, alcance LinkedIn.
- **2026-05-18 (v1.11):** Decisões resolvidas da Seção 6 + ajustes correspondentes.
  - **Famílias de ferramenta:** sim — Catálogo global tem famílias (versões equivalentes do mesmo workflow pra Copilot/GPT/Claude). Coach mostra só a versão da ferramenta do funcionário. Bloco novo em 6.6.
  - **Placeholders dinâmicos:** sim — UI de preenchimento no v1. Nota nova em 6.2 detalhando comportamento.
  - **Deeplinks pros providers:** não no v1. Tudo copiar e colar puro. Texto explícito em 6.6 + roadmap.
  - **Limite de variantes locais:** ilimitado no v1.
  - **Workflows com Actions/webhooks:** documentar como configurar no provider, não implementar. Altara não fornece Actions próprios nem hospeda webhooks no v1. Nota em 6.6.
- **2026-05-18 (v1.10):** Seção 6 (Workflows como entregável) escrita completa.
  - 6.1 propósito: workflow é o entregável real (curva de adoção real acontece nele, não nas trilhas). Definição precisa: procedimento curado executável usando IA nativa.
  - 6.2 anatomia completa (metadata, pré-requisitos, passo a passo, prompts, plano de implementação, output esperado, versão, status).
  - 6.3 quatro origens: trilha, variante local pelo champion, promoção do Catálogo global, solicitação dinâmica. "From scratch" pelo cliente continua proibido no v1.
  - 6.4 ciclo de vida (draft → ativo → destaque/ocioso → arquivado/substituído). Nunca deletado.
  - 6.5 versionamento semântico do base + variante local `{empresa}-vN`; funcionário com versão antiga continua tendo acesso.
  - 6.6 integração nativa com Copilot/Claude/GPT, dialetos por ferramenta (Copilot Studio, GPTs, Claude Projects), execução manual no v1 + roadmap de deeplinks e implantação semi-automática.
  - 6.7 edição pelo champion (variantes locais): o que pode/não pode editar; fluxo de edição com changelog; sinal cross-tenant pro Catálogo.
  - 6.8 workflows obrigatórios (champion designa; conclusão = uso real + aplicação reportada).
  - 6.9 métricas de saúde (execuções, # funcionários distintos, aplicações reportadas, rating, taxa de uso/desbloqueio); fila de revisão se taxa < 30% em 60d.
  - 6.10 solicitação dinâmica de novo workflow (mesma mecânica da solicitação de trilha).
  - 6.12 decisões em aberto: workflows multi-ferramenta como famílias, UI de placeholders, deeplinks, limite de variantes locais, Actions/webhooks.
- **2026-05-18 (v1.9):** Decisões resolvidas da Seção 5 + ajustes correspondentes.
  - **Eventos ao vivo e On-Demand:** fora do v1.
  - **Plataforma:** web apenas no v1. Sem app nativo.
  - **Notificações:** apenas e-mail no v1.
  - **Login:** magic link por e-mail no v1; SSO sob demanda.
  - **Reset de trilha:** permitido 1x por trilha; histórico arquivado. Botão "Pedir nova trilha" adicionado a 5.5.
  - **Compartilhamento entre colegas:** via biblioteca compartilhada (sem DM direto). Seção 5.8 atualizada com 2 subgrupos visíveis no Coach: "Meus workflows" + "Disponíveis na minha empresa" (com # de colegas que usaram, sinal de validação social).
- **2026-05-18 (v1.8):** Seção 5 (Coach — visão funcionário) escrita completa.
  - 5.1 propósito: Coach responde 4 perguntas do funcionário (o que faço agora?, como uso hoje?, quanto progredi?, como mostro que aprendi?).
  - 5.2 navegação macro espelhando Section Coach: Home, Trilhas, Workflows, Perfil, Solicitar trilha. Eventos/On-Demand fora do v1.
  - 5.3 onboarding em 7 telas curtas (~5min): idioma, nome, cargo, senioridade, ferramenta IA preferida, tarefas-tipo, nível de experiência.
  - 5.4 Home com hero de status, Challenge ativo, streak, grid de cards (próximo workflow, recentes, recomendações).
  - 5.5 anatomia de uma trilha do ponto de vista do funcionário (hero + timeline + cards de lições + workflow final destacado).
  - 5.6 fluxo de uma lição (padrão único pros 3 tipos: hook, conteúdo, checagem, encerramento com pontos).
  - 5.7 mecânica de Challenge no lado funcionário: countdown, pontos em tempo real, streak, leaderboard, encerramento celebratório.
  - 5.8 workflow handoff: tela de desbloqueio, preview estruturado (passo a passo + prompts copyable + plano), botões "Usar agora" / "Reportar aplicação real" / "Salvar pra depois".
  - 5.9 certificação e compartilhamento LinkedIn: asset PNG + texto editável + link de validação + opt-in granular (compartilhar, baixar, copiar, depois, pular). Respeita opt-in da empresa (4.10).
  - 5.10 perfil + gamificação (pontos, streak, badges, certificados, contexto pessoal editável, configurações de privacidade).
  - 5.11 solicitação de trilha + feedback estruturado por lição + e-mail trimestral automático.
  - 5.13 decisões em aberto: Eventos/On-Demand, plataforma alvo (web responsivo vs. app nativo), notificações push, autenticação (magic link?), reset de trilha, compartilhamento direto entre colegas.
- **2026-05-18 (v1.7):** Decisões resolvidas da Seção 4 + adições estratégicas.
  - **Papéis no v1:** CEO + Champion + Funcionário apenas. Tabela 4.2 atualizada (coluna "Líder de departamento" removida; "Editar workflows" agora só champion).
  - **Compartilhamento externo (LinkedIn):** sim no v1, dupla permissão (CEO institucional, funcionário individual).
  - **Nova subseção 4.5.1 — Certificações como ativo de marketing**: assets de certificação (PNG + texto + link de validação), cadência de geração (por trilha + badge especial em Challenge), tracking de distribuição via colaboradores. Canal de marketing estratégico.
  - **Granularidade de ranking:** 1 configuração por empresa.
  - **Edição de workflows:** só champion. CEO não edita.
  - **E-mail trimestral de feedback:** automático pelo sistema. 4.11 atualizada com "E-mails automáticos do sistema" detalhando cadências.
  - **Auditoria:** log básico de acessos no v1.
  - **Diretriz de design** adicionada a 4.3: HQ/Coach espelham layout da Section como referência visual (sidebar, header, KPIs topo, gráficos/listas abaixo); adaptações pro BR são de vocabulário/idioma/identidade, não esqueleto.
  - 4.10 (Configurações) atualizada: granularidade fixa + bloco de compartilhamento externo opt-in.
- **2026-05-18 (v1.6):** Seção 4 (HQ — visão líder/CEO) escrita completa.
  - 4.1 propósito: HQ responde 4 perguntas (vai?, vale?, próxima ação?, narrativa?).
  - 4.2 personas e permissões (tabela CEO × champion × líder de departamento opcional).
  - 4.3 navegação macro (7 áreas: Home, Adoção & ROI, Challenges, Time, Workflows, Programa, Configurações).
  - 4.4 Home com 4 KPIs principais + status do programa + próxima ação recomendada + alertas.
  - 4.5 Adoção & ROI: adoção semanal/diária/departamental, ROI com tooltip transparente, casos-âncora, exportar PDF.
  - 4.6 Challenges (ativo + encerrados, leaderboard individual + departamental, snapshot final).
  - 4.7 Time (lista funcionários, drill-down individual, visão por departamento).
  - 4.8 Workflows (biblioteca da empresa, edição/arquivamento/destaque pelo champion).
  - 4.9 Programa (cronograma 8 semanas, reviews automáticas em PDF antes das reuniões com CEO, configuração).
  - 4.10 Configurações (perfil empresa, integrações enxutas, papéis, billing CEO-only).
  - 4.11 Alertas automáticos com botão de ação direto (e-mail como canal v1).
  - 4.13 decisões em aberto (líder de departamento, compartilhamento LinkedIn, granularidade ranking por Challenge, edição CEO, automação do e-mail de feedback, auditoria).
- **2026-05-18 (v1.5):** Decisões resolvidas da Seção 3 + canal dinâmico de solicitação/feedback.
  - **Taxonomias:** custom inicial baseado nos primeiros 10 clientes, evoluindo.
  - **Multi-idioma:** PT-BR no v1; EN-US no roadmap.
  - **Cache de trilhas geradas:** sim, granularidade (empresa × função × senioridade × ferramenta IA); regenera com mudança de contexto/template.
  - **Combinação de templates:** trilha de Fundamentos multi-função; especializadas separadas — reforça templates como espinha pra menor maturidade.
  - **Trilha from-scratch pelo cliente:** não no v1; substitui por canal de solicitação/feedback dinâmico (campo "solicitar trilha" no Coach/HQ + e-mail periódico trimestral).
  - **3.10 atualizada** com novo bloco "Solicitações explícitas" (canal dinâmico) entre os fluxos intra-tenant e cross-tenant.
- **2026-05-18 (v1.4):** Seção 3 (Trilhas: engine de geração por contexto) escrita completa.
  - 3.1 por que engine vs. catálogo (e por que isso é o moat vs. Section).
  - 3.2 anatomia de uma trilha (metadata, objetivo, lições, workflow output, certificação).
  - 3.3 anatomia de uma lição (3 tipos: teoria/exercício/aplicação; componentes obrigatórios).
  - 3.4 ontologia de contexto em 3 camadas (empresa, funcionário, objetivo).
  - 3.5 abordagem do engine: **templates fortes + slots** (não geração livre); fluxo passo a passo.
  - 3.6 estrutura de um template.
  - 3.7 curadoria humana → IA (Fase 1 vs. Fase 2 + critérios de transição).
  - 3.8 trilhas core vs. especializadas (híbrido).
  - 3.9 qualidade e validação (checks automáticos + sinais in-flight).
  - 3.10 loop de feedback (intra-tenant e cross-tenant anonimizado).
  - 3.11 o que vai pro SPEC.
  - 3.12 decisões em aberto da seção 3 (taxonomias, multi-idioma, cache de trilhas, combinação de templates, trilha from-scratch pelo champion).
- **2026-05-18 (v1.3):** Decisões resolvidas da Seção 2 + ajustes de escopo v1.
  - **Catálogo cross-tenant:** curadoria humana até ter volume; IA assume depois.
  - **Painel Altara interno:** monitoramento ad-hoc no v1, sem produto interno.
  - **Integrações v1 enxutas:** IAs nativas (Copilot/Claude/GPT) + e-mail apenas. Slack/Teams/WhatsApp, SSO, RH/CRM ficam pra versões posteriores sob demanda.
  - Ajustes correspondentes: diagrama de módulos (2.4) e descrição de Integrações; menções a canal interno em 1.5 e 1.5.1 agora deixam claro que v1 só envia template pronto por e-mail (cliente dispara no canal que tiver).
- **2026-05-18 (v1.2):** Seção 2 (Visão & arquitetura geral) escrita completa.
  - 2.1 visão de produto em três camadas (capacitação, procedimentos, governança).
  - 2.2 seis princípios de design pra filtrar decisões futuras.
  - 2.3 atores (CEO, champion, funcionário, admin Altara, agentes).
  - 2.4 módulos lógicos com diagrama ASCII (Tenant, HQ, Coach, Engine, Catálogo/Biblioteca, Telemetria, Integrações).
  - 2.5 fluxo macro end-to-end de um Challenge.
  - 2.6 multi-tenant + privacidade (isolamento + aprendizado agregado anônimo).
  - 2.7 multi-LLM por design (dialeto Copilot/GPT/Claude, versões equivalentes no catálogo).
  - 2.8 modelo de dados conceitual (entidades, sem schema SQL).
  - 2.9 explicita o que NÃO entra nessa seção (vai pro SPEC).
  - 2.10 decisões em aberto da seção 2.
- **2026-05-18 (v1.1):** Iteração na Seção 1 após feedback.
  - **1.4** explicita que diagnóstico de uso atual é **manual em v1** (survey + questionário ao admin) com **roadmap pra integração automática** (Microsoft Graph / Copilot Usage APIs); modelo de dado interno já desenhado pensando na automação, pra não retrabalhar.
  - **1.5 e 1.7** reformatados: ciclos viram **Challenges nomeados** com janela definida, mecânica de pontos, leaderboard e fechamento público.
  - **Nova subseção 1.5.1** detalha a mecânica de Challenge (aplicável aos dois ciclos): janela, pontuação, leaderboard, fechamento.
  - Novas decisões em aberto: granularidade de ranking (nominal/apelido/só departamental), modelo de premiação física, opt-out de visibilidade.
- **2026-05-18 (v1):** Estrutura inicial mapeada (8 seções). Seção 1 (Programa 60 dias) escrita completa, com decisões em aberto marcadas inline.
