// src/middleware.ts
import type { NextRequest } from 'next/server'

export const config = {
  matcher: ['/aboutus', '/aboutus/'], // /aboutus のみ対象
}

export default function middleware(req: NextRequest) {
  // req を使用して ESLint の警告を回避
  void req

  return new Response('aboutus middleware bypass OK', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  })
}