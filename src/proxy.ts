import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import { paths } from 'src/routes/paths';

import { decrypt, SESSION_COOKIE } from 'src/lib/session';

// ----------------------------------------------------------------------

const protectedRoutes = [paths.dashboard];
const authRoutes = [paths.login, paths.register];

// ----------------------------------------------------------------------

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const sessionToken = request.cookies.get(SESSION_COOKIE)?.value;
  const payload = await decrypt(sessionToken);
  const isAuth = !!payload?.userId;

  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  const isAuthRoute = authRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isProtectedRoute && !isAuth) {
    const loginUrl = new URL(paths.login, request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && isAuth) {
    return NextResponse.redirect(new URL(paths.dashboard, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
