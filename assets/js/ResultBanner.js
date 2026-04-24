import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server.js';
import 'kleur/colors';
/* empty css                             */

const $$Astro = createAstro();
const $$ResultBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResultBanner;
  const { character } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/ResultBanner.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "result-banner", "result-banner", { "data-astro-cid-4ilgabae": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<a href="/consultation/"${addAttribute(`ResultBanner ${character}`, "class")}${addAttribute(character, "data-character")} data-astro-cid-4ilgabae>
    <div class="balloon" data-astro-cid-4ilgabae>
      ${character !== "pharmacist" ? renderTemplate`<img src="/assets/img/type-check/result/banner_balloon.svg" alt="" data-astro-cid-4ilgabae>` : renderTemplate`<img src="/assets/img/type-check/result/banner_balloon_pharmacist.svg" alt="" data-astro-cid-4ilgabae>`}
    </div>
    <div class="character" data-astro-cid-4ilgabae>
      <img${addAttribute(`/assets/img/type-check/result/banner_bebo_${character}.svg`, "src")} alt="" data-astro-cid-4ilgabae>
      <div class="eye eye1" data-astro-cid-4ilgabae></div>
      <div class="eye eye2" data-astro-cid-4ilgabae></div>
    </div>
  </a>
  <div class="close" data-astro-cid-4ilgabae>
    <img src="/assets/img/type-check/result/banner_close.svg" alt="" data-astro-cid-4ilgabae>
  </div>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/ResultBanner.astro", void 0);

export { $$ResultBanner as $ };
