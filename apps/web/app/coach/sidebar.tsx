'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Sparkles, Trophy, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV = [
  { href: '/coach', label: 'Home', icon: Home },
  { href: '/coach/trilhas', label: 'Trilhas', icon: BookOpen },
  { href: '/coach/apply', label: 'Apply', icon: Sparkles },
  { href: '/coach/challenges', label: 'Challenges', icon: Trophy },
  { href: '/coach/perfil', label: 'Perfil', icon: User },
] as const;

export function CoachSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[220px] shrink-0 bg-neutral-50 border-r border-neutral-200 min-h-[calc(100vh-64px)] p-4">
      <nav className="space-y-1">
        {NAV.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === '/coach' ? pathname === '/coach' : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2.5 text-body-sm font-medium transition-colors',
                active
                  ? 'bg-neutral-0 border border-neutral-200 text-neutral-900'
                  : 'text-neutral-700 hover:bg-neutral-100',
              )}
            >
              <Icon size={18} strokeWidth={1.75} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
