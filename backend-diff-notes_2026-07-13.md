# bebo dist 差分説明（バックエンド向け）

対象コミット: `ae33868`（2026-07-13 push 済み） / 前回 `1a3d021`（2026-06-03）からの差分
概要: 商品ページの追加・改訂、問診（type-check）ページの改訂、診断結果画面の拡充。
※ 本リポジトリ（b-dist）はビルド済み dist の差分管理用です。ロジックはビルド後の JS に含まれます。

---

## 0. バックエンド観点のTL;DR

1. **問診結果スラッグが「便秘タイプ_薬タイプ」の複合形式に変わりました。** 保存・表示するスラッグ文字列の想定を更新してください（例: `atonic-constipation` → `atonic-constipation_mg`）。連携の仕組み（postMessage で結果スラッグを渡す）は前回から変更なく、値のバリエーションが増えただけです。
2. 新しい結果ページURLが多数追加（計20種）。DBに保存され得るスラッグの許容値を拡張してください。
3. 新商品ページ2件追加（`borraginol-a`, `daichi-no-kampo`）。商品マスタ／SKU紐付けの追加が必要な可能性があります。

---

## 1. 問診結果（type-check）スラッグの変更【最重要】

※ フロント→ホストへの連携の仕組み（postMessage `type_check_result` で結果スラッグを渡す、既存 bebo-102 の保存フロー）は前回から変更ありません。ここでは今回の差分＝**渡ってくるスラッグの値が変わった点**のみ記載します。

### 1-1. 変更点：スラッグが複合形式になった

前回まで保存していた単純タイプ（`atonic-constipation` 等）から、**便秘タイプと推奨薬タイプを組み合わせた複合スラッグ**に変わりました。

- DBに保存する値、マイページ（`/account/type-check/`）の「問診詳細」リンク先も複合スラッグに更新済み。
  例: マイページの弛緩性便秘の詳細リンクは `/type-check/result/atonic-constipation/` → `/type-check/result/atonic-constipation_mg/` に変更。
- **過去に旧スラッグで保存されたレコードの取り扱い**（マイグレーション or リダイレクト）を検討してください。旧URL `atonic-constipation` 等の単純スラッグページも一部は残っていますが、新規保存は複合形式になります。

### 1-2. 有効な結果スラッグ 全20種

`/type-check/result/{slug}/` として存在。DB保存値の許容リストとして利用してください。

| 便秘タイプ | スラッグ |
|---|---|
| 弛緩性 | `atonic-constipation`, `atonic-constipation_mg`, `atonic-constipation_bisa`, `atonic-constipation_kampo`, `atonic-constipation_mg_bisa`, `atonic-constipation_mg_kampo`, `atonic-constipation_mg_ointment` |
| 直腸性 | `rectal-constipation`, `rectal-constipation_mg`, `rectal-constipation_bisa`, `rectal-constipation_kampo`, `rectal-constipation_mg_bisa`, `rectal-constipation_mg_kampo`, `rectal-constipation_mg_ointment` |
| 痙攣性 | `spastic-constipation` |
| 便秘なし | `no-constipation`, `no-constipation_mg` |
| 痔 | `hemorrhoids` |
| 注意喚起 | `warning-symptoms`, `warning-medication` |

- 命名規則: `{便秘タイプ}_{薬タイプ}`。薬タイプは `mg`（酸化マグネシウム系）/ `bisa`（ビサコジル）/ `kampo`（漢方）/ `ointment`（軟膏）/ `probiotics`（整腸）。複数推奨時は `_` で連結（例: `_mg_bisa`）。
- スラッグの決定（スコアリング）は**すべてフロント側**で行われます。バックエンドは文字列をそのまま扱ってください。

---

## 2. 新規・改訂された商品ページ

### 2-1. 新規追加（2件）
| URL | 商品名 | product-id |
|---|---|---|
| `/product/borraginol-a/` | ボラギノールA軟膏 | `borraginol-a` |
| `/product/daichi-no-kampo/` | 大地の漢方便秘薬 | `daichi-no-kampo` |

### 2-2. 改訂（既存4件・レイアウト刷新）
`/product/bio-three-hi/`, `/product/colac-ii/`, `/product/mgo/`, `/product/new-withone/`

### 2-3. カート連携
- 商品は各ページの `data-product-id`（上表の値）で識別されます。
- 購入導線は `/cart/` への遷移。**商品マスタ／SKUと `product-id` の対応付け**に新商品2件の追加が必要かご確認ください。
- 結果ページ（診断結果）からは薬タイプに応じた商品が推奨表示され、`/cart/` へ誘導されます。

---

## 3. 画面のみの変更（バックエンド影響なし）

- 診断結果フィードバックUIの全面刷新（キャラクター表示・吹き出し・アドバイス画像）。表示テキスト/画像はフロント内蔵で、APIからは取得しません。
- 多数の静的ページ（privacy, terms, sign-in など）の2行差分は、外部リンクアイコンのCSSクラス追加（`<svg class="blank">`）のみ。ロジック・エンドポイント変更なし。
- 追加コンポーネント（AccordionItem, ResultDailyCare, ResultMedicalConsultation, ResultOnlineConsultation 等）はフロント表示用。

---

## 4. バックエンドで対応が必要な項目（チェックリスト）

- [ ] 問診結果保存の許容スラッグを **§1-2 の20種**に更新
- [ ] 保存値が**複合スラッグ**（例 `atonic-constipation_mg`）になる前提でカラム長・バリデーションを確認
- [ ] 旧スラッグ保存レコードの移行 or リダイレクト方針を決定
- [ ] 新商品 `borraginol-a` / `daichi-no-kampo` の商品マスタ・SKU・在庫・価格の登録
- [ ] postMessage `type_check_result` 受信処理が新スラッグでも問題なく保存できるか確認（形式は従来通り、値のバリエーションのみ拡大）
