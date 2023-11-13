import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { parseCookies } from 'nookies'
import { AUTH_TOKEN_NAME } from './constants/auth.constants'


export function middleware(request: NextRequest) {
  const { [AUTH_TOKEN_NAME]: token } = parseCookies({ req: request })
  const isAuthenticated = !!token

  if (!isAuthenticated) return NextResponse.redirect(new URL('/auth/signin', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}