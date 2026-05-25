import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl space-y-8">
        <div className="space-y-3">
          <span className="text-micro text-altara-700">M0 · SETUP</span>
          <h1 className="text-h1">altara</h1>
          <p className="text-body-lg text-neutral-700">
            Plataforma de adoção de IA mensurável em 60 dias.
          </p>
        </div>

        <div className="rounded-md border border-neutral-200 bg-neutral-0 p-6 space-y-3">
          <p className="text-caption uppercase text-neutral-500">Próximos marcos</p>
          <ul className="space-y-2 text-body">
            <li>
              <span className="font-medium">M1 — Foundation:</span> auth + onboarding + Coach Home
            </li>
            <li>
              <span className="font-medium">M2 — Engine + Trilhas:</span> primeira trilha gerada
            </li>
            <li>
              <span className="font-medium">M3 — Workflow:</span> handoff + aplicação reportada
            </li>
            <li>
              <span className="font-medium">M4 — Apply:</span> Coach chat conversational
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/coach"
            className="inline-flex items-center rounded-full bg-ink px-5 py-3 text-body font-semibold text-white hover:bg-ink-soft transition-colors"
          >
            Ir pro Coach
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-body font-semibold text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            Login (magic link)
          </Link>
        </div>
      </div>
    </main>
  );
}
