# Altara — Design System

**Última atualização:** 2026-05-18
**Status:** v2 — direção tipográfica e paleta aprovadas após revisão direta das screenshots Section. Pronto pra base dos mockups.
**Briefs de referência:** [BRAND_BRIEF.md](BRAND_BRIEF.md) | [PRD.md](PRD.md)
**Preview navegável:** [design-system-preview.html](design-system-preview.html)

---

## 1. Princípios de design

Cinco princípios filtram toda decisão de UI:

1. **Clean acima de bonito.** Branco generoso, sem decoração que não serve. Se um pixel não ajuda funcionário/champion/CEO a tomar decisão, sai.
2. **Conteúdo > cromo.** Bordas finas em vez de sombras pesadas. Cor sólida em vez de gradiente. Tipografia carrega a hierarquia, não ornamento.
3. **Legibilidade em laptop comum.** Funcionário mid-market BR usa máquina de 5 anos atrás, monitor pequeno, navegador desatualizado. Contraste alto, fonte 15-16px no corpo, hierarquia clara mesmo em 1366×768.
4. **Familiaridade Section.** Layout, paleta e tipografia espelham Section (sidebar fixa esquerda, header limpo, KPIs em topo, paleta warm/purple, sans-serif humanist). Decisão em PRD 4.3.
5. **Identidade Altara, não cópia.** Wordmark próprio, escolhas de detalhe (padrão de avatares, casos-âncora, ROI explícito) que diferenciam. Mesma base estética, output próprio.

---

## 2. Referências visuais

| Produto | O que pegar | O que não pegar |
|---|---|---|
| **Section.ai** *(referência primária — vide `/reference`)* | Sidebar fixa, KPI cards com números grandes, timeline horizontal, tags pastéis quentes, CTA preto sólido, tipografia sans-serif humanist, off-white quente | Tags com fonte handwritten (Section usa em Accelerator/Superpower/Workshop — Altara pode evitar) |
| **Linear** | Densidade de informação, transições suaves, atalhos de teclado | Tom dark-first |
| **Notion** | Tipografia limpa, hierarquia clara em conteúdo longo | Estrutura de blocos editáveis (não é nosso caso) |
| **Duolingo** | Gamificação leve, badges, streak visualizations, celebração de conclusão | Personagens caricatos, mascote |
| **Stripe Dashboard** | Tabelas densas e legíveis, filtros, exports limpos | Densidade financeira (somos mais leves) |

---

## 3. Paleta de cores

### 3.1 Primária — Altara (purple/violet, Section-leaning)

Mais quente e saturada que indigo. Usada como **accent secundário** (links, progress, badges altara, focus rings, leaderboard "você"). **CTAs primários usam preto sólido**, não roxo — Section pattern.

| Token | Hex | Uso |
|---|---|---|
| `altara-50` | `#F4F1FE` | Background sutil de área "você" no leaderboard, hover de item |
| `altara-100` | `#E8E3FD` | Backgrounds leves, focus rings |
| `altara-200` | `#D2C9FB` | Bordas de cards de destaque, certificados |
| `altara-500` | `#7B6BE8` | Ícones secundários, variações |
| `altara-600` | `#5B47E8` | **★ Accent principal** — links, progress, "compartilhar LinkedIn" |
| `altara-700` | `#4B38C7` | Hover/active do accent |

### 3.2 Preto + Neutros (off-white quente, Section-style)

Toda escala neutra puxada pra warm gray. Background de página é off-white (`neutral-50`), não cinza neutro frio.

| Token | Hex | Uso |
|---|---|---|
| `black` | `#0A0A0A` | **★ CTA primário** (botões principais, ações decisivas) |
| `black-soft` | `#2A2A2A` | Hover do CTA primário |
| `neutral-0` | `#FFFFFF` | Background de cards, modals, áreas de conteúdo |
| `neutral-50` | `#FAFAF7` | **★ Background principal da página, sidebar** |
| `neutral-100` | `#F5F4F0` | Hover sutil, separadores grandes |
| `neutral-200` | `#EAE8E2` | Bordas padrão, divisores |
| `neutral-300` | `#D8D5CD` | Bordas mais fortes, inputs em foco |
| `neutral-500` | `#78766F` | Texto secundário, labels |
| `neutral-700` | `#3F3D38` | Texto padrão |
| `neutral-900` | `#18181B` | Texto principal, headers |

### 3.3 Tags pastéis quentes (Section-style)

Categorias e destaques. Square-ish (border-radius 6px), texto uppercase, peso 600, fontes pastéis quentes.

| Token | Hex bg | Hex texto | Uso típico |
|---|---|---|---|
| `tag-pink` | `#FCD3D6` | `#8B2B3A` | "Recomendado", trilhas comerciais |
| `tag-peach` | `#FBE0CC` | `#8C4E1F` | Accelerator, trilhas marketing |
| `tag-mint` | `#D9E8DC` | `#2D5C3A` | Workshop, especialização, status "ativo" |
| `tag-lavender` | `#E5DDF5` | `#51388A` | Superpower, Fundamentos |
| `tag-butter` | `#FBF1CB` | `#7A5A12` | Em destaque, operações |
| `tag-neutral` | `neutral-100` | `neutral-700` | Categorias sem cor associada |

### 3.4 Semânticas funcionais

Usar com parcimônia — só pra estados que exigem atenção imediata (erros, alertas críticos). Categorias usam tags pastéis (acima).

| Token | Hex | Uso |
|---|---|---|
| `success` | `#16A34A` | Delta positivo de KPI, badge "ativo" em status |
| `warning` | `#D97706` | Workflow ocioso, alerta de departamento atrasado |
| `danger` | `#DC2626` | Delta negativo, erros de validação, ações destrutivas |
| `info` | `#0284C7` | Tooltips informativos, badges "em revisão" |

### 3.5 Acentos de gamificação

Top 3 do leaderboard. Cores aplicadas em círculos numerados (sem emojis), não em badges genéricos.

| Token | Hex | Uso |
|---|---|---|
| `medal-1` | `#C9A227` | Top 1 (gold deep) |
| `medal-2` | `#8A8A8A` | Top 2 (silver matte) |
| `medal-3` | `#A06030` | Top 3 (bronze warm) |

---

## 4. Tipografia

### 4.1 Sistema 100% sans-serif (igual Section)

Hierarquia entre display e body é **peso + size + tracking**, não troca de família.

- **Principal:** `Satoshi` (Indian Type Foundry, free via Fontshare) — vibe Söhne/GT America, warmth humanist
- **Mono (prompts/code):** `JetBrains Mono`
- **Fallback:** `Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

Carregamento:

```html
<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### 4.2 Escala tipográfica

Sistema baseado em múltiplos de 4. Display usa **peso 500** com tracking apertado (Section pattern — pesos mais leves em sizes grandes).

| Token | Size | Line-height | Peso | Tracking | Uso |
|---|---|---|---|---|---|
| `display-lg` | 48px | 56px | 500 | -0.03em | Celebração de certificação, hero de welcome |
| `h1` | 40px | 48px | 500 | -0.025em | Saudação principal ("Olá, Brittany"), título de página chave |
| `h2` | 32px | 40px | 500 | -0.02em | Título de seção, "Challenge 1: Fundamentos" |
| `h3` | 24px | 32px | 600 | -0.01em | Subtítulos, títulos de card |
| `body-lg` | 18px | 28px | 400 | 0 | Parágrafos importantes, descrições principais |
| `body` | 15px | 24px | 400 | 0 | **Texto padrão** — conteúdo de lição, descrições |
| `body-sm` | 14px | 20px | 400 | 0 | Texto secundário, captions de gráfico |
| `caption` | 12px | 16px | 600 | +0.06em | Labels uppercase, metadata |
| `micro` | 11px | 14px | 700 | +0.12em | Badges menores, certificado label (raro) |

**Para KPI values**: usar `display-lg` ou tamanho ainda maior (até 64px) com peso 500 — Section pattern de números grandes em peso médio.

### 4.3 Pesos disponíveis (Satoshi)

- `400` Regular — body
- `500` Medium — **display/títulos** (não 600/700)
- `600` Semibold — captions ucase, badges, h3
- `700` Bold — ênfase forte (uso raro)

### 4.4 Regras de uso

- **Nunca mais que 3 níveis hierárquicos** numa tela
- **Body 15px** é o padrão (era 16px na v1 — Section usa 15px no corpo)
- **Display em peso 500**, não 600/700 — vibe Section
- **Tracking apertado em sizes grandes** (-0.025em a -0.03em pra >32px)
- **Não centralize** textos longos — sempre alinhado à esquerda
- **Caption sempre uppercase** com tracking leve (+0.06em)

---

## 5. Sistema de espaçamento

Escala baseada em múltiplos de 4 (Tailwind-compatible).

| Token | px | Uso típico |
|---|---|---|
| `space-1` | 4 | Mini-gaps (entre ícone e texto) |
| `space-2` | 8 | Padding interno de tags/badges |
| `space-3` | 12 | Padding de inputs pequenos, gap entre items relacionados |
| `space-4` | 16 | Padding padrão de cards, gap entre items |
| `space-5` | 20 | Padding maior de cards |
| `space-6` | 24 | Gap entre cards, padding de seção |
| `space-8` | 32 | Padding de seção grande, gap vertical entre blocos |
| `space-10` | 40 | Margem de página, separação de áreas |
| `space-12` | 48 | Separação grande entre seções |
| `space-16` | 64 | Hero spacing, header de página |

**Regra:** dentro de um componente, use ≤2 valores de spacing diferentes. Telas inteiras seguem ritmo de 16/24/32.

---

## 6. Layout

### 6.1 Estrutura macro

```
┌─────────────────────────────────────────────────────────┐
│ Header (64px, neutral-0, border-bottom neutral-200)    │
├──────────┬──────────────────────────────────────────────┤
│          │                                              │
│ Sidebar  │ Conteúdo principal                           │
│ (220px)  │ (max-width: 1280px, padding 32px 40px)       │
│ fixa     │                                              │
│ warm bg  │                                              │
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```

- **Sidebar:** fixa à esquerda, **220px** (não 240px — Section é mais compacto). Background `neutral-50`. Items com SVG icon + label.
- **Item ativo da sidebar:** **card branco com border 1px neutral-200** sobre fundo warm (Section pattern), não fundo colorido.
- **Header:** 64px de altura. Background `neutral-0`. Border-bottom `1px neutral-200`. Logo à esquerda, avatar do usuário à direita.
- **Conteúdo:** padding 32px horizontal, 32px vertical. Max-width 1280px.

### 6.2 Grid

- 12 colunas, gap 24px
- Em viewports <1024px, sidebar colapsa pra menu hamburguer (Coach é web responsivo, vide PRD 5.13)
- Conteúdo principal vira 1 coluna abaixo de 768px

### 6.3 Border radius

| Token | px | Uso |
|---|---|---|
| `rounded-sm` | 6 | Tags pastéis, code blocks pequenos |
| `rounded` | 8 | Inputs, prompt blocks |
| `rounded-md` | 12 | Cards padrão (KPI, action) |
| `rounded-lg` | 16 | Cards de hero, KPI cards no HQ |
| `rounded-xl` | 20 | Workflow card, certificate card |
| `rounded-full` | 9999 | **Botões (pills)**, avatares circulares, badges, progress bars |

**Botões agora são pills** (`rounded-full`) — Section pattern. Não usar `rounded` (8px) em botões.

### 6.4 Shadows

Uso esparso — preferimos border 1px em vez de shadow pesado pra clean.

| Token | Valor | Uso |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.04)` | Cards em hover (alternativa a border) |
| `shadow` | `0 4px 8px rgba(0,0,0,0.06)` | Dropdowns, popovers |
| `shadow-lg` | `0 16px 48px rgba(91, 71, 232, 0.12)` | Certificate card, modals (usa tint Altara) |

**Padrão:** card usa `border: 1px solid neutral-200` por padrão; `shadow-sm` é alternativa em situações específicas (não acumular border + shadow).

---

## 7. Componentes-chave

### 7.1 Botões (pills, preto como primário)

**Variantes:**

- **Primary** — `bg-black` (`#0A0A0A`), texto branco, `rounded-full`, padding `12px 20px`, peso 600, size 15px. Hover: `bg-black-soft`. **CTA principal Section-style** — qualquer ação decisiva ("Iniciar lição", "Disparar lembrete", "Compartilhar no LinkedIn").
- **Accent** — `bg-altara-600`, texto branco, mesmo shape. Hover: `bg-altara-700`. Usado pra ações roxas de marca (alguns "compartilhar", links destacados). Menos frequente que Primary.
- **Secondary** — `bg-neutral-0`, border `1px neutral-300`, texto `neutral-900`, `rounded-full`. Hover: `bg-neutral-50` + border `neutral-500`.
- **Ghost** — sem background nem border, texto `neutral-900`, `rounded-full`. Hover: `bg-neutral-100`. Pra ações de menos peso ("Pular", "Compartilhar depois").
- **Danger** — `bg-neutral-0`, border + texto `danger`. Hover: bg leve danger-100.

**Tamanhos:**
- `sm` — padding `8px 14px`, font 13px
- `md` (padrão) — padding `12px 20px`, font 15px
- `lg` — padding `16px 28px`, font 17px

**Estados:** default, hover, active (escurecido +5%), focus (ring `altara-600` 3px com offset 2px), disabled (`bg-neutral-200`, cursor `not-allowed`), loading (spinner pequeno).

### 7.2 Cards

**Padrão:**
- Background `neutral-0`
- Border `1px solid neutral-200`
- Border-radius `rounded-md` (12px) ou `rounded-lg` (16px) pra KPI
- Padding `space-5` ou `space-6` (20-24px)
- Sem shadow por padrão

**KPI Card (HQ Home):**

```
┌──────────────────────────┐
│ Label uppercase   ?      │  ← caption-style, neutral-500
│                          │
│ 65%                      │  ← display-lg em Satoshi 500
│                          │
│ ↑ +57pp                  │  ← success-600 ou danger-600
│ vs. baseline (era 8%)    │  ← caption neutral-500
└──────────────────────────┘
```

- Border-radius 16px
- Padding 24px
- Number em **Satoshi 500, 40px, tracking -0.03em** (não bold, não serif)
- Delta com seta SVG + cor semântica
- Tooltip "?" SVG (icon-help) explica cálculo — princípio "ROI transparente" (PRD 7.7)

**Card de ação (próxima ação recomendada):**
- `bg-neutral-0` + `border-left 3px altara-600`
- Conteúdo + botão à direita
- Title em caption uppercase color `altara-700`
- Description em body color `neutral-900`

### 7.3 Inputs

- Background `neutral-0`, border `1px neutral-300`, `rounded` (10px), padding `12px 16px`, body 15px
- Label em body-sm `neutral-700` semibold acima
- Focus: border `altara-600`, ring 3px `altara-100`
- Helper text em body-sm `neutral-500` abaixo
- Erro: border `danger`, helper em `danger`

**Tipos:** text, textarea (resize vertical), select (chevron SVG à direita), checkbox (rounded 4px), radio (circular)

### 7.4 Tabelas

- Header `neutral-50` background, caption uppercase peso 600 `neutral-500`
- Row height ~56px, border-bottom `neutral-100`
- Hover row: `neutral-50`
- Ordenação: clique no header → seta SVG + estado
- Coluna primária à esquerda, ações à direita

**Aplicações:** tabela de funcionários (PRD 4.7), tabela de workflows (4.8), leaderboard expandido.

### 7.5 Tags (Section-style pastéis quentes)

Pra categoria, destaque, status.

- Padding `4px 10px`, `rounded-sm` (6px), font 11px, peso 600, letter-spacing +0.04em, **texto uppercase**
- Variantes: `tag-pink`, `tag-peach`, `tag-mint`, `tag-lavender`, `tag-butter`, `tag-neutral` (vide 3.3)
- Não confundir com **badges** (pills funcionais)

### 7.6 Badges (pills funcionais)

Pra status que muda comportamento. Mais pill, mais pílula com cor semântica.

- Padding `4px 10px`, `rounded-full`, font 13px, peso 500
- Variantes:
  - **Status ativo** — `bg-#DCFCE7` + `text-#14532D`
  - **Status ocioso** — `bg-#FEF3C7` + `text-#78350F`
  - **Status atrasado** — `bg-#FEE2E2` + `text-#7F1D1D`

### 7.7 Progress

**Linear:**
- Trilho `bg-neutral-200`, fill `bg-altara-600`, `rounded-full`, altura 8px
- Texto de label em body-sm `neutral-500` abaixo

**Timeline horizontal (Coach — espelha Section):**

```
●━━━●━━━○━━━○━━━○
1   2   3   4   5
```
- Círculos `14px` fill `altara-600` pra completed
- Círculo atual: `16px` border `2.5px altara-600` + dot interno `6px altara-600`
- Círculos pending: `14px` `bg-neutral-0` + border `2px neutral-300`
- Linha conectora 2px: `altara-600` percorrida / `neutral-200` pendente

### 7.8 Avatares

- Circular, 32-36px (padrão), 40px (perfil grande), 24px (lista densa)
- **Padrão:** foto OU iniciais em background `altara-100` com texto `altara-700` peso 600
- Em leaderboard, top 3 substituem avatar por **círculo colorido com número** (medal-1/2/3, sem emoji)

### 7.9 Modal

- Background overlay `neutral-900` 60% opacity
- Container `bg-neutral-0`, `rounded-lg` (16px), `shadow-lg`, max-width 560px
- Header com título h3 + botão fechar (X em SVG)
- Conteúdo padding `space-6`
- Footer com botões alinhados à direita

### 7.10 Toast / Notificação

- `bg-neutral-900`, texto branco, `rounded-md`, padding `12px 16px`, body-sm
- Auto-dismiss 4s; manual close X em SVG
- Posição: bottom-right (desktop), top (mobile)
- Variantes com SVG icon + tinta de cor semântica

### 7.11 Leaderboard row

- Posição em **número simples** (`1`, `2`, ...) à esquerda em Satoshi 500, 20px, tracking apertado
- Top 3: **medal circular** colorida (medal-1/2/3) com número branco (não emoji)
- Rank #4+: **avatar de iniciais** padrão
- Nome + departamento em coluna
- Pontos à direita em Satoshi 500, 20px
- Row do usuário atual: `bg-altara-50` + `border-left 3px altara-600`

### 7.12 Streak indicator (sem emoji)

```
[dot] 5 dias seguidos
```

- Pill `bg-neutral-0` + border `neutral-200`
- Dot 8px circular `bg-altara-600` (ou `bg-warning-600` se preferir energia)
- Número em Satoshi 500, 16px
- Label "dias seguidos" em body-sm

---

## 8. Estados de interação

| Estado | Padrão |
|---|---|
| **Hover** | Background escurecido (−5%), cursor pointer |
| **Active/Pressed** | Background mais escuro (−10%), shadow inset leve |
| **Focus (teclado)** | Ring 3px `altara-100` com border `altara-600` — sempre visível pra acessibilidade |
| **Disabled** | Opacity 50% OU `bg-neutral-200` + `text-neutral-500` + cursor `not-allowed` |
| **Loading** | Spinner `altara-600` 16px (SVG) + texto "Carregando..." OU skeleton shimmer |
| **Empty state** | Ilustração leve (SVG simples) + texto explicativo + CTA |
| **Error state** | SVG icon `danger` + título + descrição + botão "tentar de novo" |

---

## 9. Iconografia

- **Lib:** [Lucide](https://lucide.dev) (open source, design consistente, ampla cobertura)
- **Tamanho padrão:** 20px no UI; 16px inline com texto body-sm; 24px em destaque
- **Stroke:** 1.75px (`stroke-width: 1.75`) — fininho, Section-style
- **Cor:** herda do contexto (`currentColor`), padrão `neutral-700`; `altara-600` quando interativo; `neutral-500` em ícones secundários
- **Inline SVG ou sprite** — não usar font icon

**Ícones-chave inicialmente usados:** home, chart, trophy, users, zap, calendar, settings, clock, sparkles, arrow-up, copy, help, share, download, link, flame.

---

## 10. Padrões de UX específicos do Altara

### 10.1 KPI com baseline + delta (PRD 7.6)

Toda métrica relevante mostra **valor atual + delta + baseline**. Padrão visual já em 7.2.

### 10.2 Workflow handoff (PRD 5.8)

- Hero card grande com gradient leve (`altara-50` → `altara-100`) no header
- Título em Satoshi 500, 28px, tracking apertado
- Tag de categoria (pastel) + meta items com SVG icons (clock, sparkles)
- Code block (prompts): `bg-neutral-900`, texto `#E4E4E7`, `rounded` (12px), `JetBrains Mono` 13px, line-height 1.7
- Botão "Copiar" canto superior direito do code block, semi-transparente
- Placeholders `{nome_cliente}` destacados com `bg-tag-peach-bg` e texto `tag-peach-text` — vira UI de preenchimento (PRD 6.2)
- 3 CTAs: **"Usar agora"** (primary preto), **"Reportar aplicação real"** (secondary), **"Salvar pra depois"** (ghost)

### 10.3 Certificação compartilhável (PRD 5.9)

- Container `rounded-xl` (20px), border `2px altara-200`, gradient sutil `white → altara-50`
- `shadow-lg` com tint Altara (`rgba(91, 71, 232, 0.12)`)
- Label uppercase em `altara-700`, micro (11px), tracking +0.18em
- Title em Satoshi 500, 32px, tracking apertado
- Stats horizontais (lições, pontos, horas economizadas) — number em Satoshi 500, 22px
- Stamp inferior: wordmark "altara" + data + URL de validação em JetBrains Mono
- CTAs abaixo: "Compartilhar no LinkedIn" (primary preto + SVG share), "Baixar imagem" (secondary + SVG download), "Copiar link" (ghost + SVG link), "Compartilhar depois" (ghost text), "Pular" (ghost text)

### 10.4 Timeline horizontal de trilha (PRD 5.5)

Espelha Section Coach. Visível no topo da tela de trilha. Vide 7.7.

### 10.5 Streak indicator

Sem emoji. Dot colorido + número em Satoshi 500. Vide 7.12.

### 10.6 Leaderboard com 3 modos de identificação (PRD 5.7, 4.10)

Mesma estrutura visual, swap do campo "nome":
- **Nominal:** "João Silva — Comercial"
- **Apelido:** "JS_42 — Comercial"
- **Só departamental:** agrega; nomes individuais ocultos; mostra só departamento + pontos somados

Cliente escolhe no setup da empresa (PRD 4.10).

### 10.7 Empty states informativos

Cada lista vazia mostra: ilustração leve (SVG simples) + título + 1 frase + CTA.

Exemplos:
- **Biblioteca de workflows vazia:** "Você ainda não desbloqueou workflows. Complete a primeira trilha pra ter seu primeiro." + botão "Ver trilhas"
- **Sem aplicações reportadas:** "Quando você usar um workflow no trabalho, reporte aqui pra contar pro ROI da empresa." + botão "Como reportar?"

---

## 11. Acessibilidade

Obrigatório pra v1, não opcional:

- **Contraste mínimo:** AA WCAG (4.5:1 pra texto normal, 3:1 pra display ≥18px). Combinações já validadas: `neutral-900` em `neutral-0` (15:1), `neutral-700` em `neutral-50` (10:1), `altara-700` em `altara-100` (7.3:1).
- **Focus visível** em todo elemento interativo (ring 3px `altara-100` + border `altara-600`)
- **Navegação por teclado:** tab order lógico, atalhos documentados, esc fecha modais
- **Screen readers:** labels apropriados (`aria-label`), live regions pra updates dinâmicos (countdown, pontuação)
- **Cor não é único significante:** delta usa cor + seta SVG + texto, não só cor
- **Tamanho mínimo de toque:** 44×44px em mobile pra alvos interativos
- **Animações respeitam `prefers-reduced-motion`** — confetti e transições desabilitam se OS pediu

---

## 12. Decisões resolvidas (v2)

- ✓ **Cor primária Altara:** `#5B47E8` (purple/violet, Section-leaning)
- ✓ **CTA principal:** preto sólido (`#0A0A0A`), não roxo — Section pattern
- ✓ **Background:** off-white quente (`#FAFAF7`), não cinza neutro frio
- ✓ **Tipografia:** Satoshi como única fonte sans-serif (display + body), JetBrains Mono pra prompts. Sem serif no produto (só wordmark Section usa serif — Altara não precisa)
- ✓ **Pesos de título:** 500 nos sizes grandes (≥32px) — Section vibe, não 600/700
- ✓ **Botões:** pills (`rounded-full`), não rounded 8px
- ✓ **Tags:** pastéis quentes (pink/peach/mint/lavender/butter) com texto uppercase peso 600
- ✓ **Top 3 leaderboard:** círculos coloridos numerados (medal-1/2/3), sem emojis
- ✓ **Streak:** dot colorido + número em Satoshi, sem emojis
- ✓ **Item ativo da sidebar:** card branco com border, sobre fundo warm (Section pattern)

## 13. Decisões em aberto

- **Logo + wordmark final:** "altara" lowercase em Satoshi é wordmark provisório do preview — versão final precisa de tratamento próprio (talvez tracking ajustado, talvez weight 600).
- **Modo escuro:** **fora do v1.** Pode entrar no roadmap se demanda surgir.
- **Internacionalização visual:** v1 é PT-BR. Quando EN-US entrar (roadmap), revisar tamanhos (inglês ocupa ~15% menos espaço que português, alguns títulos podem ficar pequenos).
- **Sistema de ilustrações:** v1 usa Lucide pra ícones; ilustrações maiores (empty states, hero de certificação) precisam de definição. Pode ser geração via IA + curadoria, lib gratuita (unDraw), ou contratação de ilustrador.
- **Animação de confetti** (certificação): qual lib usar (canvas-confetti? Lottie?) — decisão de SPEC.
- **Variable font** (Satoshi tem versão variable) vs. estática: variable economiza requests mas pode quebrar em alguns navegadores antigos. Provável: estática no v1.

---

## Changelog

- **2026-05-18 (v2):** Direção tipográfica e paleta consolidadas após revisão direta das screenshots Section.
  - **Tipografia:** trocada de "Fraunces serif + Inter sans" pra **Satoshi única sans-serif** (igual Section — que é 100% sans-serif). Pesos display passam de 600/700 pra **500** com tracking apertado.
  - **Cor primária Altara:** de `#4F46E5` (indigo frio) pra `#5B47E8` (purple/violet quente, Section-leaning).
  - **CTA principal:** preto sólido (`#0A0A0A`), não roxo — Section pattern.
  - **Background:** off-white quente (`#FAFAF7`), neutros warm.
  - **Tags:** adicionadas pastéis quentes (pink/peach/mint/lavender/butter) — Section pattern.
  - **Botões:** pills (`rounded-full`), não rounded 8px.
  - **Sem emojis:** SVGs inline (Lucide) substituem todos. Streak vira dot+número; top 3 do leaderboard vira círculos coloridos numerados.
  - **Pesos:** títulos display em peso 500 (não 600/700). Body 15px (não 16px).
- **2026-05-18 (v1):** Versão inicial proposta. 12 seções, baseada em princípios "clean + Section-like + legibilidade BR". Cor primária indigo `#4F46E5`, tipografia Inter, border preferido a shadow.
