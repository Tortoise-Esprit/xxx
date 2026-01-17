# Esprit

Jekyll と GitHub Pages を使った個人ブログ用サイトです。人文学・歴史・哲学・精神病理などを中心に、幅広い話題を掲載しています。
このブログは、即時的な情報提供や実用的な解説を目的としたものではありません。
特定の立場や制度を代表するものでもなく、個人の思考の軌跡として運営されています。

## 特徴

- Jekyll（`minima` テーマ）で構築
- ページネーション対応（`jekyll-paginate`）
- 固定ページ（About / Contact / Privacy Policy）を用意
- Google Analytics 設定済み

## ローカルでの起動方法

事前に Ruby と Bundler を用意してください。

```bash
bundle install
bundle exec jekyll serve
```

起動後は `http://localhost:4000` にアクセスしてください。

## ディレクトリ構成

- `_posts/`：記事
- `_layouts/`：レイアウト
- `_includes/`：共通パーツ
- `assets/`：画像やスタイルなど
- `about.md` / `contact.md` / `privacy.md`：固定ページ

## ライセンス

特に明記がない限り、コンテンツの著作権はリポジトリ所有者に帰属します。
