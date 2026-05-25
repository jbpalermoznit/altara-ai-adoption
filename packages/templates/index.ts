/**
 * @altara/templates — entry point.
 *
 * Templates ficam fora do banco (versionados aqui via JSON/MDX).
 * Engine carrega via slug + version no boot/cache.
 *
 * Ref SPEC §4 + §8.1.
 */

export type Industria = '*' | string;
export type Funcao = '*' | 'comercial' | 'marketing' | 'operacoes' | 'rh' | 'financeiro' | 'lideranca';

/**
 * Schema de um template de trilha (esqueleto).
 * Slots `slots_a_hidratar` são preenchidos pelo LLM no momento da geração.
 */
export interface TrilhaTemplate {
  slug: string;
  version: string;
  nome: string;
  categoria: 'fundamentos' | 'especializacao';
  industrias: Industria[];
  funcoes: Funcao[];
  duracao_estimada_min: number;
  objetivo: string;
  esqueleto_licoes: Array<{
    ordem: number;
    tipo: 'teoria' | 'exercicio' | 'aplicacao';
    objetivo: string;
    padrao_exercicio?: 'highlight' | 'multipla_escolha' | 'role_play' | 'refinamento_prompt';
    slots_a_hidratar: string[];
  }>;
  workflow_output_template?: {
    nome: string;
    descricao: string;
    ferramenta_alvo: 'copilot' | 'gpt' | 'claude' | 'outro';
    estrutura_passos: string;
  };
}

/**
 * Use Case (Apply / Use Case Builder).
 */
export interface UseCaseTemplate {
  slug: string;
  version: string;
  nome: string;
  descricao: string;
  ferramenta_alvo: 'copilot' | 'gpt' | 'claude' | 'outro';
  industrias: Industria[];
  funcoes: Funcao[];
  estrutura_conversa: Array<{
    nome: string;
    objetivo: string;
  }>;
}
