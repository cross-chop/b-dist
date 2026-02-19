import { c as createComponent, d as createAstro, m as maybeRenderHead, a as renderTemplate } from './astro/server.js';
import 'kleur/colors';
import 'clsx';
/* empty css                                     */

const $$Astro = createAstro();
const $$OrderSummary = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OrderSummary;
  const { showNote = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="OrderSummary" data-astro-cid-gwfbxxwf>
  <h3 class="Order_title" data-astro-cid-gwfbxxwf>ご注文内容</h3>
  <a href="/cart/" class="Order_edit" data-astro-cid-gwfbxxwf>
    <span data-astro-cid-gwfbxxwf>編集</span>
  </a>
  <div class="Order_items" data-astro-cid-gwfbxxwf>
    <!--! 商品ループ start -->
    <div class="Order_item" data-astro-cid-gwfbxxwf>
      <div class="Order_thumb" data-astro-cid-gwfbxxwf>
        <div class="Order_img" data-astro-cid-gwfbxxwf>
          <img src="/assets/img/_dummy/product.png" alt="" data-astro-cid-gwfbxxwf>
        </div>
      </div>
      <div class="Order_body" data-astro-cid-gwfbxxwf>
        <div class="Order_name" data-astro-cid-gwfbxxwf>
          <p data-astro-cid-gwfbxxwf>ビーボ 酸化マグネシウム錠 360錠 定期購入</p>
        </div>
        <div class="Order_amount" data-astro-cid-gwfbxxwf>
          <p data-astro-cid-gwfbxxwf>数量：1</p>
        </div>
        <div class="Order_price" data-astro-cid-gwfbxxwf>
          <p data-astro-cid-gwfbxxwf>￥2,250</p>
        </div>
      </div>
    </div>
    <!--! /商品ループ end -->
  </div>
  <div class="summary" data-astro-cid-gwfbxxwf>
    <div class="row" data-astro-cid-gwfbxxwf>
      <div class="label" data-astro-cid-gwfbxxwf>小計</div>
      <div class="price" data-astro-cid-gwfbxxwf>￥2,250</div>
    </div>
    <div class="row" data-astro-cid-gwfbxxwf>
      <div class="label" data-astro-cid-gwfbxxwf>送料</div>
      <div class="price" data-astro-cid-gwfbxxwf>￥500</div>
    </div>
    <div class="row" data-astro-cid-gwfbxxwf>
      <div class="label" data-astro-cid-gwfbxxwf>支払い手数料</div>
      <div class="price" data-astro-cid-gwfbxxwf>-</div>
    </div>
    <div class="total" data-astro-cid-gwfbxxwf>
      <div class="label" data-astro-cid-gwfbxxwf><span class="text" data-astro-cid-gwfbxxwf>お支払い合計</span><span class="unit" data-astro-cid-gwfbxxwf>(税込)</span></div>
      <div class="price" data-astro-cid-gwfbxxwf>￥2,750</div>
    </div>
  </div>
</div>
<p class="Order_note" data-astro-cid-gwfbxxwf>
  ※ご注文確認後5日以内に発送します。キャンセルは
  <a href="/refund/" class="link" data-astro-cid-gwfbxxwf> こちら </a>
  をご覧ください。
</p>

${showNote && renderTemplate`<p class="Order_note" data-astro-cid-gwfbxxwf>
      ※長期不在や受取辞退などで商品が返送された場合、往復送料や手数料をご負担いただく場合がございます。恐れ入りますが、お受け取りが難しい場合は事前にお客様窓口までご連絡をお願いいたします。
    </p>`}`;
}, "/Users/bofft/Works/bebo/src/components/OrderSummary.astro", void 0);

export { $$OrderSummary as $ };
