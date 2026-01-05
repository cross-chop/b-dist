import { c as createComponent, d as createAstro, b as renderScript, m as maybeRenderHead, e as addAttribute, f as renderSlot, a as renderTemplate, u as unescapeHTML } from './astro/server.js';
import 'kleur/colors';
import 'clsx';
/* empty css                   */

const $$Astro = createAstro();
const $$FormrunSender = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormrunSender;
  const { submitUrl, type, thanksMessage = "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\u3002", note = "" } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/FormrunSender.astro?astro&type=script&index=0&lang.ts")}

${maybeRenderHead()}<div class="FormrunSender"${addAttribute(submitUrl, "data-submit-url")}${addAttribute(type, "data-type")} data-astro-cid-4wwjtlne>
  <div class="content" data-astro-cid-4wwjtlne>
    ${renderSlot($$result, $$slots["header"])}
  </div>

  <div class="form" data-astro-cid-4wwjtlne>
    <form action="#" method="post" novalidate data-astro-cid-4wwjtlne>
      <!-- 入力画面 -->
      <div class="form-input" id="form-input" data-astro-cid-4wwjtlne>
        <div class="fields" data-astro-cid-4wwjtlne>
          ${renderSlot($$result, $$slots["fields"])}
        </div>
        <div class="btns" data-astro-cid-4wwjtlne>
          ${renderSlot($$result, $$slots["input-actions"], renderTemplate`
            <button type="button" class="Btn" id="confirm-btn" data-astro-cid-4wwjtlne>確認する</button>
          `)}
        </div>
        ${note && renderTemplate`<div class="note" data-astro-cid-4wwjtlne>${unescapeHTML(note)}</div>`}
      </div>

      <!-- 確認画面 -->
      <div class="form-confirm" id="form-confirm" style="display: none;" data-astro-cid-4wwjtlne>
        <div class="fields confirm-fields" data-astro-cid-4wwjtlne>
          <!-- JavaScriptで動的に生成 -->
        </div>
        <div class="btns" data-astro-cid-4wwjtlne>
          ${renderSlot($$result, $$slots["confirm-actions"], renderTemplate`
            <button type="button" class="Btn" id="back-btn" data-astro-cid-4wwjtlne>戻る</button>
            <button type="button" class="Btn" id="submit-btn" data-astro-cid-4wwjtlne>送信する</button>
          `)}
        </div>
        ${note && renderTemplate`<div class="note" data-astro-cid-4wwjtlne>${unescapeHTML(note)}</div>`}
      </div>

      <!-- 完了画面 -->
      <div class="form-thanks" id="form-thanks" style="display: none;" data-astro-cid-4wwjtlne>
        <p class="thanks-text" data-astro-cid-4wwjtlne>${thanksMessage}</p>
        <div class="btns" data-astro-cid-4wwjtlne>
          ${renderSlot($$result, $$slots["thanks-actions"], renderTemplate`
            <button type="button" class="Btn" id="home-btn" data-astro-cid-4wwjtlne>トップへ戻る</button>
          `)}
        </div>
      </div>
    </form>
  </div>
</div>`;
}, "/Users/bofft/Works/bebo/src/components/FormrunSender.astro", void 0);

export { $$FormrunSender as $ };
