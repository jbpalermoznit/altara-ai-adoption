import Link from 'next/link';
import { requireFuncionario } from '@/lib/auth/session';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { CoachSidebar } from './sidebar';

export default async function CoachLayout({ children }: { children: React.ReactNode }) {
  const funcionario = await requireFuncionario();

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="h-16 bg-neutral-0 border-b border-neutral-200 flex items-center justify-between px-6">
        <Link href="/coach" className="text-h3 text-neutral-900 font-medium">
          altara
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-body-sm text-neutral-500">{funcionario.nome}</span>
          <Avatar>
            <AvatarFallback>
              {funcionario.nome
                .split(' ')
                .map((n) => n[0])
                .slice(0, 2)
                .join('')
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="flex">
        <CoachSidebar />
        <main className="flex-1 px-10 py-8 max-w-[1280px] mx-auto">{children}</main>
      </div>
    </div>
  );
}
