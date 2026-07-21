# bebo dist 差分説明（バックエンド向け）

対象範囲: `9dc2a49`（前回ドキュメント時点） → `d44dc25`（最新・2026-07-21）
概要: 診断結果ページのスクリプト読み込み位置の修正、商品の表記修正（コーラックⅡの医薬品分類／大地の漢方の内容量・価格）。

※ 本リポジトリ（b-dist）はビルド済み dist の差分管理用です。
※ 本書は **HTMLをPHP開発環境へ移行する作業**を想定し、「どのファイルの、どのHTMLが、どう変わったか」を中心に記載しています。

---

## 0. TL;DR

- **今回はバックエンドの処理実装が必要な変更はありません。** すべてHTMLの軽微な修正（スクリプトタグの移動・表記修正）です。
- 変更は大きく **3件**（A〜C）。いずれも新規・削除ファイルはなく、既存ファイルの修正のみです。
- 移行時に特に注意すべきは **A（`type-check/index.html` のスクリプトタグ位置修正）** です。移行の際にタグ位置が元に戻らないようご注意ください。

---

## 1. 変更ファイル一覧（移行対象）

### HTML（10件）

| ファイル | 変更 |
|---|---|
| `type-check/index.html` | A（スクリプトタグの位置修正） |
| `product/colac-ii/index.html` | B（医薬品分類の表記修正） |
| `product/daichi-no-kampo/index.html` | C（内容量・価格の修正） |
| `type-check/result/atonic-constipation_kampo/index.html` | C（大地の漢方の価格反映） |
| `type-check/result/atonic-constipation_mg_kampo/index.html` | C（同上） |
| `type-check/result/rectal-constipation_kampo/index.html` | C（同上） |
| `type-check/result/rectal-constipation_mg_kampo/index.html` | C（同上） |
| `index.html` | C（`data-has-variations` 等・下記注記参照） |
| `sign-out/index.html` | C（同上） |
| `product/{bio-three-hi,borraginol-a,mgo,new-withone}/index.html` | 軽微（下記注記参照） |

> 注記: `index.html` / `sign-out/index.html` / 一部商品ページの差分は、`ProductItem.js` の商品データ更新（C）に連動して再生成された箇所です。表示上の実質的な変更は **C（大地の漢方の内容量・価格）** に集約されます。

### CSS / JS / 画像（3件）

| ファイル | 内容 |
|---|---|
| `assets/js/ProductItem.js` | 大地の漢方の `capacity` / `price` データ更新（C） |
| `assets/css/main.css` | ビルド生成物の再生成（表示への実質影響なし） |
| `assets/img/products/daichi-no-kampo.webp` | 商品画像の差し替え（内容量変更に伴う） |

※ JSはビルド済み出力です。HTMLに描画済みの内容と対になっているため、**HTMLと合わせて更新してください**。

---

## 2. 変更内容の詳細

### A. `type-check/index.html`：スクリプトタグの位置修正【移行時要注意】

診断結果ページ用スクリプトの読み込み位置を、**`<html>` タグの外（不正な位置）から `<body>` 内の適切な位置へ移動**しました。

```html
<!-- 変更前：<!DOCTYPE html> と <html> の間（HTMLとして不正な位置） -->
<!DOCTYPE html>
<script type="module" src="/assets/js/index.ts.js"></script>   ← 削除
<html lang="ja">
...

<!-- 変更後：<body>内、</type-check> の直後へ移動 -->
      </type-check>
      <script type="module" src="/assets/js/index.ts.js"></script>   ← ここへ移動
    </div>
```

- **PHP移行時の注意**: レイアウトテンプレート化やHTML整形ツールを通す際に、このスクリプトタグが元の位置（`<html>` の前）へ戻ったり重複したりしないようご注意ください。**`<body>` 内の `</type-check>` 直後**が正しい位置です。
- 対象は `type-check/index.html`（問診トップ）のみ。バックエンド処理への影響はありません。

---

### B. `product/colac-ii/index.html`：医薬品分類の表記修正

コーラックⅡの医薬品分類の表記を修正しました。

| 変更前 | 変更後 |
|---|---|
| `指定第2類医薬品` | `第2類医薬品` |

- 商品詳細ページ内の分類表示テキスト1箇所の修正です。
- おすすめ商品データ（`ProductItem.js`）側は元々 `第2類医薬品` だったため変更なし。今回は**商品ページ本文の表記のみ**の修正です。

---

### C. 大地の漢方便秘薬：内容量・価格の修正

大地の漢方便秘薬（`daichi-no-kampo`）の内容量・価格を修正しました。

| | 変更前 | 変更後 |
|---|---|---|
| 内容量 | 65錠 | **120錠** |
| 価格 | ¥1,613 | **¥2,617** |

**反映箇所（HTML表示上の表記）:**
```html
<!-- 商品ページ・おすすめバナー内の表記 -->
<div class="capacity">(65錠)</div>      →  <div class="capacity">(120錠)</div>
<div class="price">¥1,613</div>         →  <div class="price">¥2,617</div>
<!-- 結果ページのバナー（1行表記） -->
<span class="price">(65錠)¥1,613</span> →  <span class="price">(120錠)¥2,617</span>
```

- 反映先: `product/daichi-no-kampo/index.html` と、大地の漢方をおすすめ表示する**漢方系の結果ページ4件**（`atonic-constipation_kampo`, `atonic-constipation_mg_kampo`, `rectal-constipation_kampo`, `rectal-constipation_mg_kampo`）。
- データ元の `assets/js/ProductItem.js` および商品画像 `daichi-no-kampo.webp` も更新済み。
- **バックエンドで商品マスタ・SKU・価格を保持している場合は、大地の漢方を「120錠 / ¥2,617」へ更新してください。**

---

## 3. 変更なし・影響なし

- 問診結果（type-check）のスラッグ、postMessage 連携仕様、結果ページのURL構成に変更はありません。
- 商品ID（`data-product-id`）、カート導線の仕組みに変更はありません。
- 新規追加ページ・削除ページはありません（今回はすべて既存ファイルの修正）。

---

## 4. 対応が必要な項目（チェックリスト）

- [ ] HTML 10件・JS 1件・画像1件・CSS 1件を **セットで反映**
- [ ] `type-check/index.html` のスクリプトタグが **`</type-check>` 直後**にある状態を維持（移行・整形で位置が戻らないよう注意）（§A）
- [ ] （商品マスタを保持している場合）**大地の漢方を「120錠 / ¥2,617」に更新**（§C）
- [ ] （商品マスタを保持している場合）**コーラックⅡの分類を「第2類医薬品」に更新**（§B）
