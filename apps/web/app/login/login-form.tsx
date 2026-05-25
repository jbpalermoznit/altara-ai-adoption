'use client';

import { use, useState, useTransition } from 'react';
import { signInWithMagicLink } from './actions';

export function LoginForm({
  searchParamsPromise,
}: {
  searchParamsPromise: Promise<{ next?: string; error?: string }>;
}) {
  const searchParams = use(searchParamsPromise);
  const [email, setEmail] = useState('');
  const [pending, startTransition] = useTransition();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(searchParams.error ?? null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await signInWithMagicLink({ email, next: searchParams.next });
      if (result.error) setError(result.error);
      else setSent(true);
    });
  };

  if (sent) {
    return (
      <div className="rounded-md border border-neutral-200 bg-neutral-0 p-6 text-center space-y-2">
        <p className="text-body font-semibold text-neutral-900">Link enviado ✓</p>
        <p className="text-body-sm text-neutral-500">
          Cheque seu e-mail <span className="font-medium text-neutral-700">{email}</span>. O link
          expira em 1 hora.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-body-sm font-semibold text-neutral-700 block">
          E-mail corporativo
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="voce@empresa.com.br"
          className="w-full rounded-[8px] border border-neutral-300 bg-neutral-0 px-4 py-3 text-body text-neutral-900 placeholder:text-neutral-500 focus:border-altara-600 focus:outline-none focus:ring-[3px] focus:ring-altara-100"
          disabled={pending}
        />
      </div>

      {error && <p className="text-body-sm text-danger">{error}</p>}

      <button
        type="submit"
        disabled={pending || !email}
        className="w-full rounded-full bg-ink px-5 py-3 text-body font-semibold text-white hover:bg-ink-soft disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {pending ? 'Enviando...' : 'Enviar link de acesso'}
      </button>
    </form>
  );
}
