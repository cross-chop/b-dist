import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute, F as Fragment } from './astro/server.js';
import 'kleur/colors';
import { $ as $$FormField } from './FormField.js';
/* empty css                            */

const $$Astro = createAstro();
const $$PaymentOptions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PaymentOptions;
  const { isCreditCardRegistered = false } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/PaymentOptions.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "payment-options", "payment-options", { "class": "PaymentOptions", "data-astro-cid-uq72x72l": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<div class="formField" data-astro-cid-uq72x72l>
    <div class="options" data-astro-cid-uq72x72l>
      <div class="option" data-astro-cid-uq72x72l>
        <div class="accordion" data-astro-cid-uq72x72l>
          <input type="radio" name="payment" value="credit" id="payment-credit"${addAttribute(isCreditCardRegistered ? "true" : void 0, "checked")} data-astro-cid-uq72x72l>
          <label class="accordion_header" for="payment-credit" data-astro-cid-uq72x72l>
            <span class="text" data-astro-cid-uq72x72l>クレジットカード</span>
            <div class="check" data-astro-cid-uq72x72l>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-uq72x72l>
                <path class="check_stroke" d="M10 15.3333L14.6667 20L22.6667 12" stroke-width="2" data-astro-cid-uq72x72l></path>
              </svg>
            </div>
          </label>
          <div class="accordion_body" data-astro-cid-uq72x72l>
            <div class="accordion_bodyInner" data-astro-cid-uq72x72l>
              <div class="accordion_bodyContent" data-astro-cid-uq72x72l>
                <div class="fields" data-astro-cid-uq72x72l>
                  ${isCreditCardRegistered ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-uq72x72l": true }, { "default": ($$result2) => renderTemplate`
                        <div class="field" data-astro-cid-uq72x72l>
                          <div class="saved-card" data-astro-cid-uq72x72l>
                            <div class="saved-card_item" data-astro-cid-uq72x72l>
                              <div class="label" data-astro-cid-uq72x72l>カード番号</div>
                              <div class="value" data-astro-cid-uq72x72l>**** **** **** 0123</div>
                            </div>
                            <div class="saved-card_item" data-astro-cid-uq72x72l>
                              <div class="label" data-astro-cid-uq72x72l>有効期限</div>
                              <div class="value" data-astro-cid-uq72x72l>09/25</div>
                            </div>
                            <div class="saved-card_item" data-astro-cid-uq72x72l>
                              <div class="label" data-astro-cid-uq72x72l>カード名義</div>
                              <div class="value" data-astro-cid-uq72x72l>KOKI MURAISHI</div>
                            </div>
                          </div>
                        </div>
                        <div class="field" data-astro-cid-uq72x72l>
                          <div class="note" data-astro-cid-uq72x72l>
                            ※クレジットカード決済には<span data-astro-cid-uq72x72l>「3Dセキュア（本人認証）」</span>が必要です。
                            <br data-astro-cid-uq72x72l>
                            認証画面にて、
                            <span data-astro-cid-uq72x72l>クレジットカード会社で設定された「本人認証用パスワード」をご入力ください。</span>
                            よくあるご質問は<a href="//" data-astro-cid-uq72x72l>こちら</a>
                          </div>
                        </div>
                      ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-uq72x72l": true }, { "default": ($$result2) => renderTemplate`
                        <div class="field" data-astro-cid-uq72x72l>
                          ${renderComponent($$result2, "FormField", $$FormField, { "id": "card-number", "name": "card-number", "label": "\u30AB\u30FC\u30C9\u756A\u53F7", "type": "text", "placeholder": "1234567890123456", "required": true, "errorMessage": "\u30AB\u30FC\u30C9\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", "data-astro-cid-uq72x72l": true })}
                        </div>
                        <div class="field" data-astro-cid-uq72x72l>
                          ${renderComponent($$result2, "FormField", $$FormField, { "id": "expiry-date", "label": "\u6709\u52B9\u671F\u9650", "type": "multi", "required": true, "errorMessage": "\u6709\u52B9\u671F\u9650\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", "data-astro-cid-uq72x72l": true }, { "fields": ($$result3) => renderTemplate`<select id="expiry-month" name="expiry-month" required data-astro-cid-uq72x72l>
                              <option value="" data-astro-cid-uq72x72l>月</option>
                              <option value="01" data-astro-cid-uq72x72l>01</option>
                              <option value="02" data-astro-cid-uq72x72l>02</option>
                              <option value="03" data-astro-cid-uq72x72l>03</option>
                              <option value="04" data-astro-cid-uq72x72l>04</option>
                              <option value="05" data-astro-cid-uq72x72l>05</option>
                              <option value="06" data-astro-cid-uq72x72l>06</option>
                              <option value="07" data-astro-cid-uq72x72l>07</option>
                              <option value="08" data-astro-cid-uq72x72l>08</option>
                              <option value="09" data-astro-cid-uq72x72l>09</option>
                              <option value="10" data-astro-cid-uq72x72l>10</option>
                              <option value="11" data-astro-cid-uq72x72l>11</option>
                              <option value="12" data-astro-cid-uq72x72l>12</option>
                            </select><select id="expiry-year" name="expiry-year" required data-astro-cid-uq72x72l>
                              <option value="" data-astro-cid-uq72x72l>年</option>
                              <option value="2024" data-astro-cid-uq72x72l>2024</option>
                              <option value="2025" data-astro-cid-uq72x72l>2025</option>
                              <option value="2026" data-astro-cid-uq72x72l>2026</option>
                              <option value="2027" data-astro-cid-uq72x72l>2027</option>
                              <option value="2028" data-astro-cid-uq72x72l>2028</option>
                              <option value="2029" data-astro-cid-uq72x72l>2029</option>
                              <option value="2030" data-astro-cid-uq72x72l>2030</option>
                              <option value="2031" data-astro-cid-uq72x72l>2031</option>
                              <option value="2032" data-astro-cid-uq72x72l>2032</option>
                              <option value="2033" data-astro-cid-uq72x72l>2033</option>
                              <option value="2034" data-astro-cid-uq72x72l>2034</option>
                            </select>` })}
                        </div>
                        <div class="field" data-astro-cid-uq72x72l>
                          ${renderComponent($$result2, "FormField", $$FormField, { "id": "card-name", "name": "card-name", "label": "\u30AB\u30FC\u30C9\u540D\u7FA9", "type": "text", "placeholder": "HANAKO YAMADA", "required": true, "errorMessage": "\u30AB\u30FC\u30C9\u540D\u7FA9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", "data-astro-cid-uq72x72l": true })}
                        </div>
                        <div class="field" data-astro-cid-uq72x72l>
                          ${renderComponent($$result2, "FormField", $$FormField, { "id": "cvc", "name": "cvc", "label": "CVC\u756A\u53F7", "type": "text", "placeholder": "123", "required": true, "errorMessage": "CVC\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044", "data-astro-cid-uq72x72l": true })}
                        </div>
                        <div class="field" data-astro-cid-uq72x72l>
                          <div class="note" data-astro-cid-uq72x72l>
                            ※クレジットカード決済には<span data-astro-cid-uq72x72l>「3Dセキュア（本人認証）」</span>が必要です。
                            <br data-astro-cid-uq72x72l>
                            認証画面にて、
                            <span data-astro-cid-uq72x72l>クレジットカード会社で設定された「本人認証用パスワード」をご入力ください。</span>
                            よくあるご質問は<a href="//" data-astro-cid-uq72x72l>こちら</a>
                          </div>
                        </div>
                        <div class="field" data-astro-cid-uq72x72l>
                          ${renderComponent($$result2, "FormField", $$FormField, { "id": "save-card", "name": "save-card", "label": "\u5165\u529B\u3057\u305F\u30AB\u30FC\u30C9\u60C5\u5831\u3092\u4FDD\u5B58\u3059\u308B", "type": "checkbox", "value": "1", "data-astro-cid-uq72x72l": true })}
                        </div>
                      ` })}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="option" data-astro-cid-uq72x72l>
        <div class="accordion" data-astro-cid-uq72x72l>
          <input type="radio" name="payment" value="cod" id="payment-cod" data-astro-cid-uq72x72l>
          <label class="accordion_header" for="payment-cod" data-astro-cid-uq72x72l>
            <span class="text" data-astro-cid-uq72x72l>代金引換 <span class="note" data-astro-cid-uq72x72l>※手数料330円がかかります</span></span>
            <div class="check" data-astro-cid-uq72x72l>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-uq72x72l>
                <path class="check_stroke" d="M10 15.3333L14.6667 20L22.6667 12" stroke-width="2" data-astro-cid-uq72x72l></path>
              </svg>
            </div>
          </label>
          <div class="accordion_body" data-astro-cid-uq72x72l></div>
        </div>
      </div>
    </div>
    <p class="payment-error" style="display: none;" data-astro-cid-uq72x72l>お支払い方法を選択してください</p>
  </div>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/PaymentOptions.astro", void 0);

export { $$PaymentOptions as $ };
