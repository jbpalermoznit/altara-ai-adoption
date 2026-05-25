import type { Metadata } from 'next';
import { LoginForm } from './login-form';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-neutral-50">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-3 text-center">
          <h1 className="text-h2">altara</h1>
          <p className="text-body text-neutral-500">
            Digite seu e-mail corporativo. Você recebe um link de acesso por e-mail (sem senha).
          </p>
        </div>
        <LoginForm searchParamsPromise={searchParams} />
      </div>
    </main>
  );
}
