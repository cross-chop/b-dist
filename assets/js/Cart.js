import { c as createComponent, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as createAstro, F as Fragment } from './astro/server.js';
import 'kleur/colors';
/* empty css           */
import { $ as $$Column } from './Column.js';
import { a as $$Btn } from './Layout.js';

const $$InputNumber = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/InputNumber.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "input-number", "input-number", { "data-astro-cid-4jsxt6hl": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<button type="button" class="CartItem_nums_minus" data-astro-cid-4jsxt6hl></button>
  <input type="number" class="CartItem_nums_current" value="1" min="1" data-astro-cid-4jsxt6hl>
  <button type="button" class="CartItem_nums_plus" data-astro-cid-4jsxt6hl></button>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/InputNumber.astro", void 0);

const $$Astro$1 = createAstro();
const $$CartItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CartItems;
  const { length = 1 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="Cart_items" data-astro-cid-2ba5mcll>
  <!--! 商品がない時 -->
  ${length === 0 && renderTemplate`<div class="Cart_empty" data-astro-cid-2ba5mcll>
        <p data-astro-cid-2ba5mcll>現在カートに商品は入っていません</p>
      </div>`}
  <!--! /商品がない時 -->

  <!--! 商品ループ start -->
  ${Array.from({ length }).map((_, i) => renderTemplate`<div class="CartItem" data-astro-cid-2ba5mcll>
        <div class="CartItem_thumb" data-astro-cid-2ba5mcll>
          <div class="CartItem_img" data-astro-cid-2ba5mcll>
            <img src="/assets/img/_dummy/product.png" alt="" data-astro-cid-2ba5mcll>
          </div>
          ${renderComponent($$result, "InputNumber", $$InputNumber, { "data-astro-cid-2ba5mcll": true })}
        </div>
        <div class="CartItem_body" data-astro-cid-2ba5mcll>
          <div class="CartItem_name" data-astro-cid-2ba5mcll>
            <p data-astro-cid-2ba5mcll>Bebo 酸化マグネシウム剤 90錠</p>
          </div>
          <div class="CartItem_price" data-astro-cid-2ba5mcll>
            <p data-astro-cid-2ba5mcll>1000円</p>
          </div>
          <button type="button" class="CartItem_delete" data-astro-cid-2ba5mcll>
            <span data-astro-cid-2ba5mcll>削除</span>
          </button>
        </div>
      </div>`)}
  <!--! /商品ループ end -->
</div>`;
}, "/Users/bofft/Works/bebo/src/components/CartItems.astro", void 0);

const $$Astro = createAstro();
const $$Cart = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cart;
  const { length = 1, signIn = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="Cart" data-astro-cid-atha5qgx>
  ${renderComponent($$result, "Column", $$Column, { "title": "\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u30AB\u30FC\u30C8", "data-astro-cid-atha5qgx": true }, { "main": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "main" }, { "default": ($$result3) => renderTemplate`
      ${renderComponent($$result3, "CartItems", $$CartItems, { "length": length, "data-astro-cid-atha5qgx": true })}
      ${length > 0 && renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "data-astro-cid-atha5qgx": true }, { "default": ($$result4) => renderTemplate`
            <div class="summary" data-astro-cid-atha5qgx>
              <div class="row" data-astro-cid-atha5qgx>
                <div class="label" data-astro-cid-atha5qgx>小計</div>
                <div class="price" data-astro-cid-atha5qgx>￥3,520</div>
              </div>
              <div class="row" data-astro-cid-atha5qgx>
                <div class="label" data-astro-cid-atha5qgx>送料</div>
                <div class="price" data-astro-cid-atha5qgx>￥500</div>
              </div>
              <div class="row" data-astro-cid-atha5qgx>
                <div class="label" data-astro-cid-atha5qgx>支払い手数料</div>
                <div class="price" data-astro-cid-atha5qgx>-</div>
              </div>
              <div class="total" data-astro-cid-atha5qgx>
                <div class="label" data-astro-cid-atha5qgx>
                  ${renderComponent($$result4, "Fragment", Fragment, { "data-astro-cid-atha5qgx": true }, { "default": ($$result5) => renderTemplate`
                    <span class="text" data-astro-cid-atha5qgx>お支払い合計</span>
                    <span class="unit" data-astro-cid-atha5qgx>(税込)</span>
                  ` })}
                </div>
                <div class="price" data-astro-cid-atha5qgx>￥3,520</div>
              </div>
            </div>

            <div class="payment" data-astro-cid-atha5qgx>
              <div class="section" data-astro-cid-atha5qgx>
                <h3 class="title" data-astro-cid-atha5qgx>Amazonアカウントでお支払い</h3>
                <div class="amazon" data-astro-cid-atha5qgx>
                  <a href="#" class="btn" data-astro-cid-atha5qgx>
                    <img src="/assets/img/cart/btn_amazonpay.webp" alt="Amazon Pay" data-astro-cid-atha5qgx>
                  </a>
                </div>
              </div>

              <div class="section" data-astro-cid-atha5qgx>
                <h3 class="title" data-astro-cid-atha5qgx>
                  クレジットカード・代引きを
                  <br class="sp" data-astro-cid-atha5qgx>
                  ご利用の方はこちら
                </h3>
                <div class="cards" data-astro-cid-atha5qgx>
                  <img src="/assets/img/cart/icn_creditcards.webp" alt="jcs visa mastercard amex" data-astro-cid-atha5qgx>
                </div>
                ${signIn && renderTemplate`<div class="btns" data-astro-cid-atha5qgx>
                    ${renderComponent($$result4, "Btn", $$Btn, { "tag": "a", "href": "/checkout/address_payment_registerd/", "text": "\u8CFC\u5165\u3078\u9032\u3080", "size": "M_S", "type": "solid", "color": "#000000", "data-astro-cid-atha5qgx": true })}
                  </div>`}
                ${!signIn && renderTemplate`<div class="btns" data-astro-cid-atha5qgx>
                    ${renderComponent($$result4, "Btn", $$Btn, { "tag": "a", "href": "/checkout/no-login-payment/", "text": "\u30ED\u30B0\u30A4\u30F3\u305B\u305A\u8CFC\u5165", "size": "M_S", "type": "outline", "color": "#000000", "data-astro-cid-atha5qgx": true })}
                    ${renderComponent($$result4, "Btn", $$Btn, { "tag": "a", "href": "/checkout/sign-in/", "text": "\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u8CFC\u5165", "size": "M_S", "type": "solid", "color": "#000000", "data-astro-cid-atha5qgx": true })}
                  </div>`}
              </div>
            </div>
          ` })}`}<div class="continue" data-astro-cid-atha5qgx>
        ${renderComponent($$result3, "Btn", $$Btn, { "tag": "a", "href": "/", "text": "\u304A\u8CB7\u3044\u7269\u3092\u7D9A\u3051\u308B", "size": "M_S", "type": "transparent", "color": "#000000", "data-astro-cid-atha5qgx": true })}
      </div>
    ` })}` })}
</div>`;
}, "/Users/bofft/Works/bebo/src/components/Cart.astro", void 0);

export { $$Cart as $ };
