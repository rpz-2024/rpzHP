module.exports = {
    disableEmoji: false,
    format: '{type}{scope}: {emoji}{subject}',
    list: ['feat','fix','test','deps','design','ci','cd','docs','perf','refactor','style','chore','release'],
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
    scopes: [],
    types: {
      feat: {
        description: '機能追加',
        emoji: '✨',
        value: 'feat'
      },
      fix: {
        description: 'バグ修正',
        emoji: '🐛',
        value: 'fix'
      },
      test: {
        description: 'テストに関する変更',
        emoji: '🔍',
        value: 'test'
      },
      deps: {
        description: '依存パッケージの変更',
        emoji: '📦',
        value: 'deps'
      },
      design: {
        description: 'CSSなど見た目のみの変更',
        emoji: '🎨',
        value: 'design'
      },
      ci: {
        description: 'CI関連の変更',
        emoji: '✅',
        value: 'ci'
      },
      cd: {
        description: 'CD関連の変更',
        emoji: '🚚',
        value: 'cd'
      },
      docs: {
        description: 'ドキュメント関連の変更',
        emoji: '📝',
        value: 'docs'
      },
      perf: {
        description: '機能やUIの変更などが伴わないパフォーマンス改善',
        emoji: '⚡️',
        value: 'perf'
      },
      refactor: {
        description: 'バグ修正や機能追加を行わないコードの変更',
        emoji: '🔄',
        value: 'refactor'
      },
      style: {
        description: 'スペースや改行、セミコロンなどのコードのスタイルの変更',
        emoji: '💄',
        value: 'style'
      },
      chore: {
        description: 'ビルドや補助ツール、ライブラリなどの設定変更',
        emoji: '🔧',
        value: 'chore'
      },
      release: {
        description: 'リリースコミット',
        emoji: '🚀',
        value: 'release'
      },
    },
    messages: {
      type: 'コミット内容の種別を選択:',
      customScope: 'スコープを選択:',
      subject: '変更についての短い説明 例. 〜の追加:',
      body: '詳しい説明 (任意):\n ',
      breaking: '破壊的変更の内容 (任意):',
      issues: 'このコミットに関連するIssue (任意) 例. #123:',
    },
  };