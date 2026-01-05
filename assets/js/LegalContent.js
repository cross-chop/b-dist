import { c as createComponent, m as maybeRenderHead, f as renderSlot, a as renderTemplate } from './astro/server.js';
import 'kleur/colors';
import 'clsx';
/* empty css                     */

const $$LegalContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="LegalContent">
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/bofft/Works/bebo/src/components/LegalContent.astro", void 0);

export { $$LegalContent as $ };
