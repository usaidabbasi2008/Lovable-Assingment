import { NextResponse } from 'next/server';
import React from 'react'

export  function middleware() {

const isLogin = false;
if (isLogin && request.nexturl.pathname !== '/pages/pg') {
  // Redirect to login page

  return NextResponse.redirect(new URL('/pages/pg', request.url));
}

}
