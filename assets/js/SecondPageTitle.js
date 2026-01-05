import { c as createComponent, d as createAstro, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server.js';
import 'kleur/colors';
import 'clsx';
/* empty css        */

const $$Astro = createAstro();
const $$SecondPageTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SecondPageTitle;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="SecondPageTitle" data-astro-cid-6dffnzmc>
  <span data-astro-cid-6dffnzmc>${unescapeHTML(title)}</span>
</h1>`;
}, "/Users/bofft/Works/bebo/src/components/SecondPageTitle.astro", void 0);

export { $$SecondPageTitle as $ };
