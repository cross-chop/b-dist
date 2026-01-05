import { c as createComponent, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderSlot } from './astro/server.js';
import 'kleur/colors';
/* empty css              */

const $$ResultAccordion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/ResultAccordion.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "result-accordion-component", "result-accordion-component", { "data-astro-cid-sltyajid": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<div class="result-accordion" data-astro-cid-sltyajid>
    <div class="header" data-astro-cid-sltyajid>
      <span data-astro-cid-sltyajid>詳細を見る</span>
      <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sltyajid>
        <path d="M12 1.24219L6.5 6.74219L1 1.24219" stroke="black" stroke-width="1.375" stroke-linecap="square" data-astro-cid-sltyajid></path>
      </svg>
    </div>
    <div class="crop" data-astro-cid-sltyajid>
      <div class="inner" data-astro-cid-sltyajid>
        ${renderSlot($$result, $$slots["default"])}
      </div>
    </div>
  </div>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/ResultAccordion.astro", void 0);

export { $$ResultAccordion as $ };
