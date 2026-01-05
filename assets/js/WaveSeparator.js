import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server.js';
import 'kleur/colors';
/* empty css                             */

const $$Astro = createAstro();
const $$WaveSeparator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WaveSeparator;
  const { colorTop = "#f8f5f0", colorBottom = "#fff" } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/WaveSeparator.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "wave-separator", "wave-separator", { "data-color-top": colorTop, "data-color-bottom": colorBottom, "data-astro-cid-g2x64x6i": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<canvas data-astro-cid-g2x64x6i></canvas>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/WaveSeparator.astro", void 0);

export { $$WaveSeparator as $ };
