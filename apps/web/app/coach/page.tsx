import { requireFuncionario } from '@/lib/auth/session';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tag } from '@/components/ui/tag';

/**
 * Coach Home — placeholder M0.
 * Mock data, sem queries reais ainda.
 * Em M1: dados reais (PRD §5.5).
 */
export default async function CoachHomePage() {
  const funcionario = await requireFuncionario();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <span className="text-caption uppercase text-altara-700">Coach</span>
        <h1 className="text-h1">Olá, {funcionario.nome.split(' ')[0]}</h1>
        <p className="text-body-lg text-neutral-700">
          Bem-vindo ao Altara. Sua trilha personalizada está sendo preparada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <span className="text-caption uppercase text-neutral-500">Pontos</span>
            <div className="text-[40px] font-medium tracking-tight">{funcionario.pontosTotal}</div>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <span className="text-caption uppercase text-neutral-500">Streak</span>
            <div className="text-[40px] font-medium tracking-tight">{funcionario.streakAtual}</div>
            <p className="text-body-sm text-neutral-500">dias seguidos</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <span className="text-caption uppercase text-neutral-500">Recorde</span>
            <div className="text-[40px] font-medium tracking-tight">
              {funcionario.streakRecorde}
            </div>
            <p className="text-body-sm text-neutral-500">dias</p>
          </CardHeader>
        </Card>
      </div>

      <Card className="space-y-4">
        <CardHeader>
          <Tag tone="lavender">Próxima ação</Tag>
          <CardTitle>Sua trilha vai aparecer aqui</CardTitle>
          <CardDescription>
            Em M2 o engine de geração entra em produção. Por enquanto, esta tela é um placeholder
            pra validar o fluxo de auth e layout.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
