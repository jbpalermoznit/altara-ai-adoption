import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

type CookieToSet = { name: string; value: string; options?: CookieOptions };

/**
 * Middleware helper: refresca a session a cada request + injeta cookies de volta na response.
 * Chamado por apps/web/middleware.ts.
 */
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: CookieToSet[]) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Atualiza a sessão (rotação de refresh token)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirects de proteção de rota
  const path = request.nextUrl.pathname;
  const isAuthPath = path.startsWith('/login') || path.startsWith('/auth');
  const isPublicPath = path === '/' || isAuthPath || path.startsWith('/_next') || path.startsWith('/api/health');

  if (!user && !isPublicPath) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('next', path);
    return NextResponse.redirect(url);
  }

  if (user && path === '/login') {
    const url = request.nextUrl.clone();
    url.pathname = '/coach';
    return NextResponse.redirect(url);
  }

  return response;
}
