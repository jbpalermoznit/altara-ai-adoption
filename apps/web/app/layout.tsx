import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Altara — Adoção de IA mensurável',
    template: '%s · Altara',
  },
  description:
    'Plataforma de adoção de IA pra mid-market que já paga Copilot/Claude/GPT. Trilhas personalizadas, workflows, ROI visível em 60 dias.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
