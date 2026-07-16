# bebo dist 差分説明（バックエンド向け）

対象範囲: `dc2df94`（前回ドキュメント時点） → `7a2f4bc`（最新・2026-07-16）
概要: 提携医療機関のオンライン診療リンクを実装、利用規約・プライバシーポリシーを更新、商品バナーボタンをPC/SPで統一、商品バリエーション用のDOM属性を追加。

※ 本リポジトリ（b-dist）はビルド済み dist の差分管理用です。
※ 本書は **HTMLをPHP開発環境へ移行する作業**を想定し、「どのファイルの、どのHTMLが、どう変わったか」を中心に記載しています。

---

## 0. TL;DR

- **今回はバックエンドの処理実装が必要な変更はありません。** HTML（マークアップ・リンク先・文言）の更新のみです。
- 変更ファイルは **HTML 28件 + CSS 1件 + JS 5件**。すべて既存ファイルの修正で、**新規ページ・削除ページはありません**。
- HTMLの変更は大きく **4パターン**（A〜D）に分類できます。パターンごとに機械的な置換で対応可能です。
- 注意が必要なのは2点: **①CSSクラス名の変更**（`bannerShoulderSP` → `bannerShoulder`。§B参照）、**②利用規約の条番号が第16条以降すべて+1ずれた**こと（§D参照）。

---

## 1. 変更ファイル一覧（移行対象）

### HTML（28件）

| ファイル | 変更パターン |
|---|---|
| `index.html` | C |
| `sign-out/index.html` | C |
| `terms/index.html` | D（条項追加・条番号変更） |
| `privacy/index.html` | D（条項追加） |
| `product/mgo/index.html` | C |
| `product/bio-three-hi/index.html` | C |
| `product/colac-ii/index.html` | C |
| `product/new-withone/index.html` | C |
| `product/borraginol-a/index.html` | C |
| `product/daichi-no-kampo/index.html` | C |
| `type-check/result/*/index.html`（**18件・全結果ページ**） | A + B + C |

結果ページ18件の内訳:
```
atonic-constipation_bisa        rectal-constipation_bisa        hemorrhoids
atonic-constipation_kampo       rectal-constipation_kampo       no-constipation
atonic-constipation_mg          rectal-constipation_mg          no-constipation_mg
atonic-constipation_mg_bisa     rectal-constipation_mg_bisa     spastic-constipation
atonic-constipation_mg_kampo    rectal-constipation_mg_kampo    warning-medication
atonic-constipation_mg_ointment rectal-constipation_mg_ointment warning-symptoms
```

### CSS / JS（6件）

| ファイル | 内容 |
|---|---|
| `assets/css/main.css` | クラス名変更に伴うスタイル更新（§B） |
| `assets/js/Layout.js` | ボタンコンポーネントのクラス名変更（§B） |
| `assets/js/ProductItem.js` | `data-has-variations` 属性の出力追加（§C） |
| `assets/js/ResultFeedback.js` | 商品バナーボタンの変更（§B） |
| `assets/js/ResultOnlineConsultation.js` | オンライン診療リンクの設定（§A） |
| `assets/js/ResultMedicalConsultation.js` | オンライン診療リンクの設定（§A） |

※ JSはビルド済み出力です。HTMLに描画済みの内容と対になっているため、**HTMLと合わせて更新してください**（JS側だけ古いと表示が食い違います）。

---

## 2. HTML変更パターン詳細

### A. オンライン診療リンクの設定（結果ページ18件）

これまで `href="#"`（未設定）だったリンクに、実際のリンク先が入りました。**すべて外部サイトへの別タブ遷移**です。

| 該当箇所 | 変更前 | 変更後 |
|---|---|---|
| 「内科オンライン診療を予約する」ボタン | `href="#" target="_self"` | `href="https://docs.google.com/forms/d/e/1FAIpQLSeJKtj48wUy3_-GS9BCuBP6KPR7z-rt3UscRXKidjETt4ub4Q/viewform"` `target="_blank"` |
| 「提携医療機関について」 | `href="#"` | `href="https://sugamo-sengoku-hifu.jp/online.html"` `target="_blank"` |
| 「よくある質問」 | `href="/#faq"` | `href="https://sugamo-sengoku-hifu.jp/online.html#:~:text=..."` `target="_blank"` |

**HTML上の見え方（例）:**
```html
<!-- 変更前 -->
<btn-component data-href="#" data-target="_self" ...>
  <a href="#" target="_self" class="Btn M_L solid isWide">
    <span class="text">内科オンライン診療を予約する</span>
  </a>
</btn-component>

<!-- 変更後：href/target が変わり、外部リンクアイコンのsvgが追加される -->
<btn-component data-href="https://docs.google.com/forms/d/e/1FAIpQLS.../viewform" data-target="_blank" ...>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLS.../viewform" target="_blank" class="Btn M_L solid isWide">
    <span class="text">内科オンライン診療を予約する</span>
    <svg class="blank" viewBox="0 0 12 12" fill="none">...</svg>  <!-- ★追加：外部リンクアイコン -->
  </a>
</btn-component>
```

- `target="_blank"` のボタンには **`<svg class="blank">`（外部リンクアイコン）が自動で付く**仕様です。
- **バックエンド処理は発生しません。** 予約はユーザーがGoogleフォームへ直接入力する形で、bebo側でフォーム送信を受けたり、医療機関へデータ送信したりはしません（この前提が規約・プライバシーポリシーに明記されています。§D参照）。
- 「よくある質問」のURLにはテキストフラグメント（`#:~:text=`）が含まれます。**URLエンコードされた日本語を含むため、PHPテンプレートへ移す際にエスケープ処理で壊さないようご注意ください。**

---

### B. 商品バナーボタンをPC/SPで統一（結果ページ18件）【クラス名変更あり】

結果ページのおすすめ商品バナーで、**PC版のボタンをSP版と同じ仕様に統一**しました（SP版は従来から同仕様のため、実質PC版のみの変更です）。

| | 変更前（PC） | 変更後（PC・SP共通） |
|---|---|---|
| 文言 | もっと詳しく見る | 今すぐ購入する |
| リンク先 | `/product/{商品ID}/`（商品詳細） | **`/cart/`** |
| 表示 | ボタンのみ | 肩テキスト「あなたに最もおすすめの薬を」＋カートアイコン |

**★重要：CSSクラス名が変わりました**（SP専用だったものが共通化されたため、`SP` サフィックスが削除されています）

| 変更前 | 変更後 |
|---|---|
| `class="... hasBannerShoulderSP ..."` | `class="... hasBannerShoulder ..."` |
| `<span class="bannerShoulderSP">` | `<span class="bannerShoulder">` |

**HTML上の見え方（例：`atonic-constipation_mg`）:**
```html
<!-- 変更前（PC）：商品詳細へのリンク -->
<btn-component data-href="/product/mgo/" data-target="_self" data-size="L" ...>
  <a href="/product/mgo/" target="_self" class="Btn L solid hasGradient">
    <span class="text">もっと詳しく見る</span>
  </a>
</btn-component>

<!-- 変更後（PC・SP共通）：カートへのリンク＋肩テキスト＋カートアイコン -->
<btn-component data-href="/cart/" data-target="_self" data-size="L" ...>
  <a href="/cart/" target="_self" class="Btn L solid hasBannerShoulder hasGradient">
    <span class="bannerShoulder">あなたに最もおすすめの薬を</span>
    <span class="text">今すぐ購入する</span>
    <svg class="cartIcon" viewBox="0 0 16 16">...</svg>
  </a>
</btn-component>
```

- **PHP移行時の注意**: `bannerShoulderSP` / `hasBannerShoulderSP` を検索して残っていないか確認してください。`main.css` と `Layout.js` も対応するクラス名に更新済みなので、**HTML・CSS・JSをセットで反映**する必要があります。
- **導線の変化**: PCユーザーが商品詳細ページを経由せず**結果ページから直接カートへ**遷移するようになります。処理変更は不要ですが、PCからの `/cart/` 流入増・商品詳細ページのPV減が見込まれます。
- このボタンのリンク先は**商品IDやパラメータを含まない素の `/cart/`** です（SP版の従来仕様を踏襲。カート側の商品特定の仕組みは従来から変更ありません）。

---

### C. `data-has-variations` 属性の追加（HTML 28件すべて）

商品コンポーネント `<product-item-component>` に属性が1つ増えました。**表示制御用のフックで、値の生成もフロント側で完結します。**

```html
<!-- 変更前 -->
<product-item-component class="ProductItem isNoBtn" data-product-id="mgo" data-astro-cid-nwhxhul2="true">

<!-- 変更後：data-has-variations が追加 -->
<product-item-component class="ProductItem isNoBtn" data-product-id="mgo" data-has-variations="true" data-astro-cid-nwhxhul2="true">
```

- 値は `true` / `false`。**容量バリエーションが2つ以上ある商品が `true`**。
- 現状 `true` は **`mgo`（ビーボ酸化マグネシウム錠）のみ**。他5商品（`bio-three-hi`, `colac-ii`, `new-withone`, `borraginol-a`, `daichi-no-kampo`）は単一容量のため `false`。
- 1ページ内に複数の `<product-item-component>` があるため（メイン商品＋おすすめ商品）、同一ページに `true` と `false` が混在します。
- 商品データ（容量・価格）はフロント内蔵の定義から描画しており、**API連携やデータ構造の変更はありません**。

---

### D. 利用規約・プライバシーポリシーの文言更新（HTML 2件）

#### D-1. `terms/index.html`：条項追加＋**第16条以降の条番号が全て+1**【要確認】

**第16条（外部サービスの利用）** が新設されました（内容：オンライン診療は当社提供ではなく利用者と医療機関の直接契約であり、当社は責任を負わない旨）。これに伴い**旧第16条以降が全て1つ後ろにずれています**。

| 変更前 | 変更後 |
|---|---|
| （新設） | **第16条（外部サービスの利用）** |
| 第16条（会員の禁止行為） | 第17条（会員の禁止行為） |
| 第17条（違反行為等への対応措置） | 第18条（違反行為等への対応措置） |
| 第18条（保証の否認・免責） | 第19条（保証の否認・免責） |
| 第19条（本サービスの停止・変更・終了） | 第20条（本サービスの停止・変更・終了） |
| 第20条（権利義務等の譲渡） | 第21条（権利義務等の譲渡） |
| 第21条（秘密保持） | 第22条（秘密保持） |
| 第22条（本規約の変更） | 第23条（本規約の変更） |
| 第23条（連絡・通知） | 第24条（連絡・通知） |

HTML構造は `<section><h2>第○条（…）</h2><ol><li>…</li></ol></section>` の繰り返しで、**新設セクションが1つ挿入され、以降の `<h2>` の条番号テキストが書き換わっている**形です。

→ **バックエンド側・管理画面・送信メール等で「規約第○条」を参照している箇所があれば修正が必要です。** 併せて、規約改定に伴う同意バージョン管理・改定通知の要否をご確認ください。

#### D-2. `privacy/index.html`：条項を1つ追記

オンライン診療リンクに関する `<li>` が1つ追加されました（3行の追加のみ、既存箇所の変更なし）。要点は次の通りで、**現行のバックエンド実装（データ連携なし）が前提**です。

> 利用者は当該医療機関の予約フォーム等において**直接情報を入力**するものとし、**当社は当該医療機関に対して利用者の個人情報を提供するものではありません**。

---

## 3. 変更なし・影響なし

- **問診結果（type-check）のスラッグ、postMessage 連携仕様、結果ページのURL構成に変更はありません。**
- 商品ID（`data-product-id`）、カート導線の仕組み、商品データの構造に変更はありません。
- 新規追加ページ・削除ページはありません（今回はすべて既存ファイルの修正）。

> **※ 前回ドキュメント（`backend-diff-notes_2026-07-13.md`）からの訂正**
> 結果ページを「全20種」と記載していましたが、旧スラッグの `type-check/result/atonic-constipation/` と `type-check/result/rectal-constipation/` は削除済みのため、**現在は18種**が正です（この2件は差分抽出時の `__TO_BE_REMOVED__.txt` に削除対象として記録済み）。

---

## 4. 対応が必要な項目（チェックリスト）

- [ ] HTML 28件・CSS 1件・JS 5件を **セットで反映**（JSだけ古いと表示が食い違います）
- [ ] `bannerShoulderSP` / `hasBannerShoulderSP` の**旧クラス名が残っていないか検索**（§B）
- [ ] 「よくある質問」URLのテキストフラグメント（`#:~:text=` 以降の日本語）が**エスケープで壊れていないか**確認（§A）
- [ ] 規約の**条番号参照箇所**（メール文面・管理画面・同意記録等）の洗い出しと修正（§D-1）
- [ ] 規約・プライバシーポリシー改定に伴う**同意バージョン管理／改定通知**の要否判断（§D）
- [ ] （実装不要の確認）オンライン診療フォームへの**ユーザー情報連携は行わない**方針の共有（§A・§D-2）
