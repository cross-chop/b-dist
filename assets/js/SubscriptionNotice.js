import { c as createComponent, d as createAstro, m as maybeRenderHead, a as renderTemplate } from './astro/server.js';
import 'kleur/colors';
import 'clsx';
/* empty css             */

const $$Astro = createAstro();
const $$SubscriptionNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SubscriptionNotice;
  const { note = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="SubscriptionNotice" data-astro-cid-lcetyspa>
  ${note && renderTemplate`<p class="note" data-astro-cid-lcetyspa>※定期購入の場合は、会員登録またはログインが必要です。</p>`}
  <div class="section" data-astro-cid-lcetyspa>
    <p data-astro-cid-lcetyspa>
      【定期購入に関するご確認事項】
      <br data-astro-cid-lcetyspa>
      ビーボ酸化マグネシウム錠 360錠 ご購入者の方
      <br data-astro-cid-lcetyspa>
      ※ご注文後、2ヶ月に1袋（360錠）お届けいたします。
      <br data-astro-cid-lcetyspa>
      ※2回目以降は、商品代を2,500円のお支払いです。送料はかかりません（当社負担）。
      <br data-astro-cid-lcetyspa>
      ※初回はご注文後すぐに決済され、2回目は初回決済日の約2ヶ月後に決済されます。
      <br data-astro-cid-lcetyspa>
      <br data-astro-cid-lcetyspa>
      共通する事項
      <br data-astro-cid-lcetyspa>
      ※ご注文決済完了後、5日以内に発送いたします。代金引換の場合は、当社が定める方法によるご注文後、5日以内に発送いたします。
      <br data-astro-cid-lcetyspa>
      ※ご解約は2回目の商品受け取り後にいつでもご解約可能です（それまでは解約不可）。決済予定日前日までにご解約ください。
      <br data-astro-cid-lcetyspa>
      キャンセル・取引条件は<a href="/refund/" data-astro-cid-lcetyspa>こちら</a>をご確認ください。
    </p>
  </div>
</div>`;
}, "/Users/bofft/Works/bebo/src/components/SubscriptionNotice.astro", void 0);

export { $$SubscriptionNotice as $ };
