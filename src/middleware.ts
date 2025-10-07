// src/middleware.ts
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/aboutus', '/aboutus/'], // ← /aboutus だけに限定
};

export default function middleware(_req: NextRequest) {
  return new Response('aboutus middleware bypass OK', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}