import { c as createComponent, m as maybeRenderHead, r as renderComponent, f as renderSlot, a as renderTemplate } from './astro/server.js';
import 'kleur/colors';
import { $ as $$SecondPageTitle } from './SecondPageTitle.js';
/* empty css                       */

const $$ProductDetail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="ProductDetail" data-astro-cid-7xojfyaf>
  ${renderComponent($$result, "SecondPageTitle", $$SecondPageTitle, { "title": "\u5546\u54C1\u8A73\u7D30", "data-astro-cid-7xojfyaf": true })}
  ${renderSlot($$result, $$slots["default"])}
</section>`;
}, "/Users/bofft/Works/bebo/src/components/ProductDetail.astro", void 0);

export { $$ProductDetail as $ };
