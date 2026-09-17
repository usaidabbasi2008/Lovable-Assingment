import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLogin = false;
  if (isLogin && request.nextUrl.pathname !== '/pages/pg') {
    // Redirect to login page
    return NextResponse.redirect(new URL('/pages/pg', request.url));
  }
}
