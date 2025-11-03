# Coffee Calculator

香り高いコーヒーを手早く淹れるためのレシピ計算機です。抽出量を指定すると、ホット／アイスに応じた豆量・湯量・氷量を算出し、ステップごとの注湯ガイドとドリップ用タイマーを提供します。SvelteKit 5（Runes API）と Tailwind CSS を用いたシングルページアプリケーションです。

## 主な機能

- コーヒー抽出量に応じた豆・お湯・氷の自動計算
- 季節に応じたデフォルト抽出モード（ホット／アイス）の切り替え
- 抽出ステップの注湯目安とタイマー（Wake Lock 対応）
- カードレイアウトによるモバイルフレンドリーな UI

## プロジェクト構成

```
src/
  routes/         UI のページコンポーネント（トップページは `+page.svelte`）
  lib/components/ Header・Timer など再利用コンポーネント
  app.css         Tailwind のエントリスタイル
static/           favicon や静的アセット
```

## セットアップ

依存パッケージは pnpm を想定しています。

```bash
pnpm install
pnpm dev          # 開発サーバー（http://localhost:5173）
```

## 開発フロー

- `pnpm dev`: ホットリロード付き開発サーバーを起動
- `pnpm build`: 本番用にバンドルを生成
- `pnpm preview`: build した成果物をローカルで確認
- `pnpm check`: SvelteKit 同期と型検査（`svelte-check`）
- `pnpm lint`: Prettier チェックと ESLint 実行
- `pnpm format`: Prettier による自動整形

## コーディングガイド

- 言語: Svelte + TypeScript、Svelte Runes（`$state` 等）を優先利用
- スタイル: Tailwind CSS（`tailwind.config.js`）でユーティリティクラスを適用
- 整形: Prettier（`.prettierrc` は package.json 依存）、ESLint で lint
- コンポーネントは `src/lib/components` に配置し、`src/lib/index.ts` 経由で再エクスポート

## テストと品質

現在自動テストは未整備です。ロジック追加時は以下を推奨します。

- 計算ロジックを純粋関数として切り出し、Vitest 等で単体テストを追加
- 状態管理（Runes）の副作用を最小化し、コンポーネントを小さく保つ

## デプロイ

Vite の静的ビルド（`pnpm build`）で生成した出力を任意のホスティングに配置できます。必要に応じて SvelteKit の adapter-static を使用し、GitHub Pages や Netlify へのデプロイを行ってください。
