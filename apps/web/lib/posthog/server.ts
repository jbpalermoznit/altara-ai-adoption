import 'server-only';
import { PostHog } from 'posthog-node';

let _client: PostHog | null = null;

export function getPostHogServer(): PostHog | null {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return null;
  if (_client) return _client;
  _client = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 20,
    flushInterval: 10000,
  });
  return _client;
}
