# React Table Demo

React と TypeScript を使用したテーブル表示デモアプリケーションです。

## 概要

このプロジェクトは、React の基本的な使い方とテーブル形式でのデータ表示方法を学習するためのデモアプリケーションです。従業員データのサンプルを使用して、テーブル表示の実装例を提供しています。

## 技術スタック

- **React 18.0.0** - ユーザーインターフェースライブラリ
- **TypeScript 4.4.2** - 静的型付けによる開発支援
- **React Scripts 4.0.3** - Create React App のビルドツール
- **Material-UI 5.11.0** - UIコンポーネントライブラリ（将来の拡張用）
- **Material Table Core 0.2.62** - テーブルコンポーネント（将来の拡張用）

## プロジェクト構造

```
src/
├── App.tsx          # メインアプリケーションコンポーネント
├── index.tsx        # React アプリケーションのエントリーポイント
└── styles.css       # アプリケーション全体のスタイル

public/
├── index.html       # HTML テンプレート
└── ...

package.json         # プロジェクト設定と依存関係
tsconfig.json        # TypeScript 設定
```

## 主要ファイルの説明

### `src/App.tsx`

メインのアプリケーションコンポーネントです。以下の機能を含みます：

- **サンプルデータの定義**: 従業員情報を格納した `DEMO_DATA` 配列
- **テーブル表示**: HTML テーブルを使用した従業員データの表示
- **UI コンポーネント**: タイトル、説明文、ボタンの表示

```typescript
// サンプルデータの構造
const DEMO_DATA = [
  { id: 1, name: "田中太郎", age: 25, department: "営業部" },
  // ... 他のデータ
];
```

### `src/index.tsx`

React アプリケーションのエントリーポイントです：

- `createRoot` を使用した React 18 の新しいレンダリング方式
- `StrictMode` によるコンポーネントの厳密チェック
- DOM 要素 `#root` へのアプリケーションマウント

### `src/styles.css`

アプリケーション全体のスタイル定義：

- **レスポンシブデザイン**: 最大幅の設定と中央配置
- **テーブルスタイル**: ホバー効果、境界線、影の設定
- **ボタンスタイル**: Material Design 風のスタイリング

## インストールと実行

### 前提条件

- Node.js (バージョン 16 以上推奨)
- npm または yarn

### セットアップ手順

1. リポジトリのクローン:
```bash
git clone https://github.com/ougotti/react-table-demo.git
cd react-table-demo
```

2. 依存関係のインストール:
```bash
npm install
```

3. 開発サーバーの起動:
```bash
# Node.js v18+ の場合、以下のコマンドを使用
export NODE_OPTIONS="--openssl-legacy-provider"
npm start
```

4. ブラウザで http://localhost:3000 を開く

### ビルド

本番用ビルドの作成:
```bash
export NODE_OPTIONS="--openssl-legacy-provider"
npm run build
```

ビルドされたファイルは `build/` ディレクトリに出力されます。

## 機能説明

### 現在の機能

1. **タイトルと説明の表示**
   - React アプリケーションのタイトル
   - アプリケーションの概要説明

2. **インタラクティブボタン**
   - ホバー効果付きのサンプルボタン
   - Material Design 風のスタイリング

3. **データテーブル表示**
   - 従業員データの一覧表示
   - ID、名前、年齢、部署の情報
   - ホバー効果による行の強調

### データ構造

従業員データは以下の TypeScript インターフェースに基づいています：

```typescript
interface Employee {
  id: number;        // 従業員ID
  name: string;      // 氏名
  age: number;       // 年齢
  department: string; // 所属部署
}
```

## カスタマイズ方法

### データの変更

`src/App.tsx` の `DEMO_DATA` 配列を編集することで、表示するデータを変更できます：

```typescript
const DEMO_DATA = [
  { id: 1, name: "新しい名前", age: 30, department: "新しい部署" },
  // 新しいデータを追加
];
```

### スタイルの変更

`src/styles.css` を編集することで、アプリケーションの外観をカスタマイズできます：

- 色の変更: `color` プロパティを編集
- レイアウトの調整: `padding`, `margin` の値を変更
- テーブルのスタイル: `.demo-table` クラスを編集

### 機能の拡張

将来的に以下の機能を追加できます：

1. **Material Table の実装**
   - ソート機能
   - 検索・フィルタリング
   - ページネーション
   - エクスポート機能

2. **データの CRUD 操作**
   - データの追加、編集、削除
   - フォームの実装

3. **状態管理**
   - React Context または Redux の導入

## トラブルシューティング

### Node.js v18+ での実行エラー

Node.js v18以上で実行時にエラーが発生する場合は、以下の環境変数を設定してください：

```bash
export NODE_OPTIONS="--openssl-legacy-provider"
```

### 依存関係のエラー

パッケージのインストールでエラーが発生する場合：

```bash
# node_modules とロックファイルを削除
rm -rf node_modules package-lock.json

# 再インストール
npm install
```

## ライセンス

このプロジェクトは学習目的で作成されています。

## 貢献

プルリクエストやイシューの報告を歓迎します。

---

**注意**: このアプリケーションは学習とデモンストレーション目的で作成されており、本番環境での使用は想定していません。
