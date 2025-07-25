# User Database Viewer

シンプルで美しいデータベース管理ツール

## 概要

User Database Viewer は、Python で実装された SQLite データベース操作を Web ブラウザ上で視覚的に体験できるデモンストレーション用の Web アプリケーションです。本来の Python コードの動作をブラウザ上で再現し、ユーザーデータの表示・管理機能を提供します。

## 特徴

- 🎨 **モダンな UI/UX**: グラデーションとアニメーションを使用した現代的なデザイン
- 📱 **レスポンシブデザイン**: デスクトップ・タブレット・スマートフォンに対応
- 🗃️ **データ管理機能**: ユーザーデータの表示、追加、削除
- 💻 **コード参照**: 元となる Python コードも併せて表示
- 🌏 **日本語対応**: 完全に日本語化されたインターフェース

## ファイル構成

```
CSS_Database/
├── index.html      # メインのHTMLファイル
├── script.js       # JavaScript機能とデータ管理
└── styles.css      # スタイリングとレスポンシブデザイン
```

## 機能詳細

### 主要機能

1. **全ユーザーデータを取得** 👥

   - 現在メモリに保存されているすべてのユーザー情報を表形式で表示
   - データがない場合は適切なメッセージを表示

2. **サンプルデータを追加** 📊

   - 5 人分のサンプルユーザーデータを自動で追加
   - 田中太郎、佐藤花子、鈴木一郎、高橋美咲、伊藤健太

3. **データをクリア** 🗑️
   - すべてのユーザーデータを削除
   - クリーンな状態に戻す

### 元の Python コード

アプリケーション内で、以下の Python 実装コードも参照できます：

```python
import sqlite3

def select_all_users():
    conn = None
    try:
        conn = sqlite3.connect('my_database.db')
        cursor = conn.cursor()

        cursor.execute("SELECT id, name, email FROM users")
        rows = cursor.fetchall()

        if rows:
            print("--- 全ユーザーデータ ---")
            for row in rows:
                print(f"ID: {row[0]}, 名前: {row[1]}, メール: {row[2]}")
        else:
            print("ユーザーデータがありません。")

    except sqlite3.Error as e:
        print(f"エラーが発生しました: {e}")
    finally:
        if conn:
            conn.close()
```

## 使用方法

### 1. セットアップ

ローカル環境で実行する場合：

```bash
# ファイルをダウンロード
git clone [repository-url]
cd user-database-viewer

# HTTPサーバーを起動（Python 3の場合）
python -m http.server 8000

# または Node.js の場合
npx serve .
```

### 2. ブラウザでアクセス

```
http://localhost:8000
```

### 3. 操作手順

1. **初期状態**: ページ読み込み時はデータが空の状態
2. **サンプル追加**: 「サンプルデータを追加」ボタンでテストデータを追加
3. **データ表示**: 「全ユーザーデータを取得」ボタンでデータを表形式で表示
4. **データクリア**: 「データをクリア」ボタンですべてのデータを削除

## 技術仕様

### 使用言語・技術

- **HTML5**: セマンティックなマークアップ
- **CSS3**:
  - CSS Grid/Flexbox レイアウト
  - CSS 変数とカスタムプロパティ
  - グラデーション・アニメーション
  - レスポンシブデザイン
- **JavaScript (ES6+)**:
  - Intersection Observer API
  - モダンな DOM 操作
  - 非同期処理対応

### 外部依存関係

- **Google Fonts**: Inter フォントファミリー
- **ブラウザ要件**: モダンブラウザ（Chrome 70+, Firefox 65+, Safari 12+）

## データ構造

ユーザーデータは以下の構造で管理されます：

```javascript
{
  id: Number,      // ユーザーID
  name: String,    // ユーザー名
  email: String    // メールアドレス
}
```

## 注意事項

- **データ永続化**: このアプリはデモンストレーション用のため、ページをリロードするとデータは消失します
- **SQLite 非対応**: ブラウザ環境のため、実際の SQLite データベースではなくメモリ内配列でデータを管理
- **セキュリティ**: プロダクション使用を想定していません

## ブラウザサポート

| ブラウザ | バージョン |
| -------- | ---------- |
| Chrome   | 70+        |
| Firefox  | 65+        |
| Safari   | 12+        |
| Edge     | 79+        |

## カスタマイズ

### カラーテーマの変更

`styles.css`の以下の部分を編集してください：

```css
/* プライマリカラー */
.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* ヒーローセクション */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### データフィールドの追加

新しいフィールドを追加する場合は、`script.js`の以下の部分を修正：

```javascript
// サンプルデータにフィールド追加
{ id: 1, name: "田中太郎", email: "tanaka@example.com", age: 30 }

// テーブル表示部分にも対応するヘッダーとセルを追加
```

## ライセンス

このプロジェクトはデモンストレーション目的で作成されています。

---
