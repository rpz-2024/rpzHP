import type { NextRequest } from "next/server";
import type { RateLimitConfig } from "@/types/api";

// 簡易レート制限用のメモリストレージ
const rateLimitMap = new Map<string, number>();

// デフォルトの設定
const DEFAULT_CONFIG: RateLimitConfig = {
  windowMs: 60 * 1000, // 60秒
  maxRequests: 1, // 1分間に1回まで
};

/**
 * IP アドレスを取得する
 */
export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }

  if (realIP) {
    return realIP;
  }

  return "unknown";
}

/**
 * レート制限をチェックする
 */
export function checkRateLimit(
  ip: string,
  config: RateLimitConfig = DEFAULT_CONFIG
): boolean {
  const now = Date.now();
  const lastRequest = rateLimitMap.get(ip);

  if (lastRequest && now - lastRequest < config.windowMs) {
    return false; // レート制限に引っかかった
  }

  rateLimitMap.set(ip, now);

  // 古いエントリをクリーンアップ
  cleanupOldEntries(now, config.windowMs);

  return true;
}

/**
 * 古いレート制限エントリをクリーンアップする
 */
function cleanupOldEntries(currentTime: number, windowMs: number): void {
  for (const [key, timestamp] of rateLimitMap.entries()) {
    if (currentTime - timestamp > windowMs) {
      rateLimitMap.delete(key);
    }
  }
}

/**
 * レート制限の統計情報を取得する（デバッグ用）
 */
export function getRateLimitStats(): {
  totalEntries: number;
  oldestEntry: number | null;
} {
  let oldestEntry: number | null = null;

  for (const timestamp of rateLimitMap.values()) {
    if (oldestEntry === null || timestamp < oldestEntry) {
      oldestEntry = timestamp;
    }
  }

  return {
    totalEntries: rateLimitMap.size,
    oldestEntry,
  };
}

/**
 * レート制限マップをクリアする（テスト用）
 */
export function clearRateLimit(): void {
  rateLimitMap.clear();
}
