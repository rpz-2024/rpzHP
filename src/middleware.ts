// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = { matcher: ['/aboutus', '/aboutus/'] };

export default function middleware(_req: NextRequest) {
  return NextResponse.next(); // 何もしない（ページ処理に通す）
}