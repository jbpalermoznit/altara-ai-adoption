/**
 * Tipos canônicos de eventos de telemetria.
 * Ref PRD §7.4.
 *
 * Convenção: `{area}.{ação}` em snake_case ASCII.
 * Payload TS-checked — adicione novos no union abaixo, não emita strings cruas.
 */

export type AltaraEvent =
  // Auth
  | { tipo: 'auth.login'; payload: Record<string, never> }
  | { tipo: 'auth.logout'; payload: Record<string, never> }

  // Onboarding
  | { tipo: 'onboarding.iniciado'; payload: Record<string, never> }
  | { tipo: 'onboarding.completed'; payload: { duracao_segundos: number } }

  // Trilhas
  | { tipo: 'trilha.gerada'; payload: { trilha_id: string; template_slug: string } }
  | { tipo: 'trilha.iniciada'; payload: { trilha_id: string } }
  | { tipo: 'trilha.completada'; payload: { trilha_id: string; duracao_dias: number } }
  | { tipo: 'trilha.resetada'; payload: { trilha_id: string; motivo: string } }

  // Lições
  | {
      tipo: 'licao.iniciada';
      payload: { licao_id: string; trilha_id: string };
    }
  | {
      tipo: 'licao.completada';
      payload: {
        licao_id: string;
        trilha_id: string;
        tempo_segundos: number;
        feedback?: 'util' | 'confuso' | 'generico' | 'ja_sabia';
      };
    }

  // Workflows
  | { tipo: 'workflow.desbloqueado'; payload: { workflow_id: string } }
  | { tipo: 'workflow.usado'; payload: { workflow_id: string } }
  | {
      tipo: 'workflow.aplicacao_reportada';
      payload: { workflow_id: string; horas_economizadas: number; rating?: number };
    }

  // Apply (Use Case Builder)
  | { tipo: 'apply.chat_iniciado'; payload: { use_case_slug: string | null } }
  | { tipo: 'apply.output_gerado'; payload: { apply_session_id: string } }
  | { tipo: 'apply.salvo_como_workflow'; payload: { apply_session_id: string; workflow_id: string } }

  // Challenges
  | { tipo: 'challenge.entrou'; payload: { challenge_id: string } }
  | { tipo: 'challenge.encerrado'; payload: { challenge_id: string } }

  // Certificação
  | { tipo: 'certificado.gerado'; payload: { trilha_id: string; certificado_id: string } }
  | {
      tipo: 'certificado.compartilhado';
      payload: { certificado_id: string; canal: 'linkedin' | 'download' | 'link' };
    };

export type EventTipo = AltaraEvent['tipo'];
