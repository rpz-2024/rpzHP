# Contact機能 - 設定とリファクタリング

このプロジェクトのContact機能の設定方法とリファクタリング内容について説明します。

## 環境変数の設定

お問い合わせフォームからメールを送信するために、以下の環境変数を `.env.local` ファイルに設定してください。

### 必須の環境変数

```bash
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
CONTACT_TO=info@example.com
CONTACT_FROM="RPZ お問い合わせ <no-reply@example.com>"
```

### Resend APIキーの取得方法

1. [Resend](https://resend.com/) にアカウント登録
2. ダッシュボードで新しいAPIキーを作成
3. `RESEND_API_KEY` に設定

### メール設定

- `CONTACT_TO`: 問い合わせメールを受信するメールアドレス
- `CONTACT_FROM`: 送信者表示名とメールアドレス

## 機能

- ✅ フォーム入力値のバリデーション（フロント・サーバー両方）
- ✅ Honeypotによるスパム対策
- ✅ IPベースの簡易レート制限（60秒/1回）
- ✅ HTML・テキスト両方のメール本文
- ✅ 送信時刻・IP・UAの記録
- ✅ エラーハンドリング

## お問い合わせ種別

- 会社について
- 求人について
- 物件について
- 各店舗について
- その他

---

## リファクタリング内容

このContact機能をリファクタリングして、より保守しやすく型安全なコードに改善しました。

### 1. 型定義の整理

- `src/types/`ディレクトリ内に型定義を統合
- APIレスポンス、メール、レート制限関連の型を分離
- 型安全性の向上

### 2. 機能の分離

- **レート制限**: `src/lib/rateLimit/`
- **セキュリティ**: `src/lib/security/`
- **メール生成**: `src/lib/email/`

### 3. APIルートの最適化

- 関数の分割でコードの可読性向上
- エラーハンドリングの改善
- 型安全性の確保

## ファイル構造

```
src/
├── types/
│   ├── api.ts          # API関連の型定義
│   ├── contact.ts      # Contact機能の型定義
│   ├── email.ts        # メール関連の型定義
│   └── index.ts        # 統合エクスポート
├── lib/
│   ├── rateLimit/
│   │   └── index.ts    # レート制限機能
│   ├── security/
│   │   └── index.ts    # セキュリティ機能
│   ├── email/
│   │   └── index.ts    # メール生成機能
│   └── validations/
│       └── index.ts    # バリデーションスキーマ
├── hooks/
│   └── useContactForm.ts # Contact用フック
├── data/
│   └── contact.ts      # Contact関連データ
└── app/api/contact/
    └── route.ts        # APIルート
```

## 使用方法

### 型のインポート

```typescript
import type { ContactFormData, ApiResponse } from "@/types";
```

### 機能のインポート

```typescript
import {
  checkRateLimit,
  validateEnvVars,
  generateEmailTemplate,
} from "@/types";
```

### フックの使用

```typescript
import { useContactForm } from "@/hooks/useContactForm";
```

## 主な変更点

1. **型定義の中央集権化**: 全ての型定義を`src/types/`に移動
2. **機能分離**: レート制限、セキュリティ、メール生成を個別のモジュールに分離
3. **型安全性の向上**: strictな型チェック、nullish coalescing演算子の使用
4. **エラーハンドリングの改善**: 詳細なエラーログとセキュアなエラーメッセージ
5. **可読性の向上**: 関数の分割と明確な命名

## 今後の拡張性

- レート制限の設定を外部化
- メールテンプレートのカスタマイズ
- バリデーションルールの柔軟な設定
- テストの追加

---

## 代替SMTP設定（Resendの代わり）

Resendの代わりにSMTPサーバーを使用する場合は、APIコードを以下のような形に変更してください：

```typescript
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

await transporter.sendMail({
  from: process.env.CONTACT_FROM!,
  to: process.env.CONTACT_TO!,
  subject,
  html,
  text,
});
```
