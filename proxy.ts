// proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Ignore static assets, internal files, API routes, or paths containing a dot (.)
  if (
    path.startsWith('/_next') || 
    path.startsWith('/api') || 
    path.includes('.') || 
    path === '/'
  ) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: '/:path*',
};