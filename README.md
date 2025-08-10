五十棲 – 飲食店サイト (Next.js + Tailwind)

単一ページでスクリーンショットの雰囲気を再現した飲食店サイトです。Next.js(App Router, TypeScript) + Tailwind CSS v4 を使用しています。

## 起動手順

1) 依存が未インストールの場合は `pnpm i`
2) 開発サーバ: `pnpm dev`

ブラウザで http://localhost:3000 を開きます。

## 主要実装

- レイアウト/配色/角丸/陰影をテーマ化（`src/styles/globals.css` の `@theme`）
- フォント: `Noto Sans JP` (本文) / `Noto Serif JP` (見出し)
- 左サイドの赤いピルナビ（PC固定）と SP ドロワー（`SidePillNav`, `SidePillNavMobile`）
- セクション縦書き見出し（`SectionTitleVertical`）
- 画像は `next/image`、角丸24px + ソフトシャドウ
- スライダー: 横スクロール + snap、下部ドット同期（`FoodDrink`）
- スクロールスパイ: `IntersectionObserver` で現在地ハイライト（`SidePillNav`）
- 上部へ戻る: `requestAnimationFrame` の EaseOutBack でオーバーシュート（`src/lib/scroll.ts` / `FloatingTopButton`）
- SEO: `metadata`、`/sitemap.ts`、`/robots.ts`

## ディレクトリ]

```
src/
  app/(site)/page.tsx          ページ本体
  app/(site)/layout.tsx        フォント等の適用
  app/sitemap.ts, robots.ts    SEO
  components/ui/*              UIパーツ
  components/sections/*        各セクション
  data/*                       メニュー/コースのダミー
  lib/scroll.ts                スムーススクロール
  styles/globals.css           Tailwind v4 + テーマ
public/images/*                ダミー画像
```

## メモ

- 生成り背景: `#FBF5EF`、メイン赤: `#D30000`、枠: `#E9E3DB`
- 角丸: 大要素 24px、小要素 14px、ボタンは pill
- a11y: alt・ランドマーク・フォーカスリング対応、`prefers-reduced-motion` を尊重

必要に応じて画像差し替え、文言更新、セクション追加も容易です。