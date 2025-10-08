// src/middleware.ts
import { NextResponse } from 'next/server';

export const config = { matcher: ['/aboutus', '/aboutus/'] };

export default function middleware() {
  return NextResponse.next(); // そのままページへ通す
}