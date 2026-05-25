import 'server-only';
import { Resend } from 'resend';

/**
 * Cliente Resend (stub no M0 — templates entram em M5).
 * Ref SPEC §9.
 */
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendEmail(params: {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}) {
  if (!resend) {
    console.warn('[email] RESEND_API_KEY não configurada — skipping send', params.subject);
    return { id: 'dry-run' };
  }

  const from = params.from ?? process.env.RESEND_FROM_EMAIL ?? 'Altara <oi@altara.com.br>';

  const result = await resend.emails.send({
    from,
    to: params.to,
    subject: params.subject,
    html: params.html,
  });

  if (result.error) throw new Error(`Resend error: ${result.error.message}`);
  return { id: result.data?.id };
}
