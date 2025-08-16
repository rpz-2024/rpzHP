# RPZ – 飲食店サイト (Next.js + TypeScript + Tailwind)

単一ページでスクリーンショットの雰囲気を再現した飲食店サイトです。Next.js(App Router, TypeScript) + Tailwind CSS v4 を使用しています。

## 🚀 起動手順

1. 依存関係のインストール: `pnpm i`
2. 開発サーバー起動: `pnpm dev`
3. ブラウザで http://localhost:3000 を開く

## 🏗️ アーキテクチャ

### ディレクトリ構成

```
src/
├── app/                         # ルーティング (kebab-case)
│   ├── (site)/
│   │   ├── layout.tsx           # サイトレイアウト
│   │   ├── page.tsx             # メインページ
│   │   ├── omoi/page.tsx        # RPZの思い
│   │   ├── company/page.tsx     # 会社概要
│   │   ├── brands/page.tsx      # ブランド一覧
│   │   ├── news/page.tsx        # ニュース
│   │   ├── careers/page.tsx     # 採用情報
│   │   └── contact/page.tsx     # お問い合わせ
│   ├── layout.tsx               # ルートレイアウト
│   ├── sitemap.ts               # SEO
│   └── robots.ts                # SEO
├── components/
│   ├── common/                  # 汎用コンポーネント
│   ├── layout/                  # レイアウトコンポーネント
│   ├── sections/                # セクションコンポーネント
│   ├── ui/                      # 低レベルUIコンポーネント
│   └── index.ts                 # barrel export
├── constants/                   # 定数
├── data/                        # 静的データ
├── lib/                         # ユーティリティ
├── styles/                      # スタイル
└── types/                       # 型定義
```

## 🎨 主要実装

### デザインシステム

- **レイアウト/配色/角丸/陰影をテーマ化** (`src/styles/globals.css` の `@theme`)
- **フォント**: `Noto Sans JP` (本文) / `Noto Serif JP` (見出し)
- **カラーパレット**: 生成り背景 `#FBF5EF`、メイン赤 `#D30000`、枠 `#E9E3DB`
- **角丸**: 大要素 24px、小要素 14px、ボタンは pill

### ナビゲーション

- **左サイドの赤いピルナビ** (PC 固定) - `SidePillNav`
- **SP ドロワー** - `SidePillNavMobile`
- **セクション縦書き見出し** - `SectionRailTitle`
- **スクロールスパイ**: `IntersectionObserver` で現在地ハイライト

### コンポーネント

- **画像**: `next/image`、角丸 24px + ソフトシャドウ
- **スライダー**: 横スクロール + snap、下部ドット同期 (`FoodDrink`)
- **上部へ戻る**: `requestAnimationFrame` の EaseOutBack でオーバーシュート (`FloatingTopButton`)

### アクセシビリティ

- **alt・ランドマーク・フォーカスリング対応**
- **`prefers-reduced-motion` を尊重**
- **キーボードナビゲーション対応**

### SEO

- **`metadata`**、**`/sitemap.ts`**、**`/robots.ts`**

## 🛠️ 開発コマンド

```bash
# 開発サーバー起動
pnpm dev

# ビルド
pnpm build

# 型チェック
pnpm typecheck

# リント・フォーマット
pnpm lint
pnpm format

# 全体的なチェック
pnpm check

# コミット
pnpm commit
```

## 🔄 カスタマイズ

必要に応じて以下が容易に変更可能です：

- 画像差し替え
- 文言更新
- セクション追加
- カラーテーマ変更
- レイアウト調整

## 📱 対応デバイス

- **デスクトップ**: 左サイドバー + メインコンテンツ
- **タブレット**: レスポンシブレイアウト
- **モバイル**: ドロワーナビゲーション + 縦スクロール
