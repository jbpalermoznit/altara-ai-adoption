/**
 * LLM wrappers — Vercel AI SDK + Anthropic principal, OpenAI fallback.
 * Ref SPEC §8.
 */
import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';

/**
 * Modelos canônicos. Atualize aqui quando trocar de modelo —
 * todos os call sites importam destes símbolos, não strings cruas.
 */
export const models = {
  // Anthropic — principal pra conversação (Apply, Floating Assistant, geração de trilha)
  claudeSonnet: anthropic('claude-sonnet-4-6'),
  claudeHaiku: anthropic('claude-haiku-4-5-20251001'),
  // OpenAI — fallback + outputs estruturados específicos
  gpt4o: openai('gpt-4o'),
  gpt4oMini: openai('gpt-4o-mini'),
} as const;

/**
 * Default pra cada caso de uso. Indireção centraliza decisão de modelo.
 */
export const defaultModels = {
  applyChat: models.claudeSonnet,
  trilhaGen: models.claudeSonnet,
  classificacao: models.claudeHaiku,
  floatingAssistant: models.claudeSonnet,
} as const;
