import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate, b as renderScript, r as renderComponent } from './astro/server.js';
import 'kleur/colors';
import 'clsx';
/* empty css        */
import { $ as $$SecondPageTitle } from './SecondPageTitle.js';
import { $ as $$ProductItem } from './ProductItem.js';
import { a as $$Btn } from './Layout.js';

const $$Astro$1 = createAstro();
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const { title, subText, color = "#000" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`SectionHeader ${color}`, "class")} data-astro-cid-wk2votdk>
  <h2 class="title" data-astro-cid-wk2votdk>
    <span data-astro-cid-wk2votdk>${title}</span>
  </h2>
  <div class="subText" data-astro-cid-wk2votdk>
    <span data-astro-cid-wk2votdk>${subText}</span>
  </div>
</div>`;
}, "/Users/bofft/Works/bebo/src/components/SectionHeader.astro", void 0);

const $$Astro = createAstro();
const $$Lineup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Lineup;
  const { exclude = [] } = Astro2.props;
  const lineupData = ["shin-biofermin-s", "bio-three-hi", "new-withone", "colac-ii", "new-lecicarbon"].filter(
    (id) => !exclude.includes(id)
  );
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/Lineup.astro?astro&type=script&index=0&lang.ts")}
${renderComponent($$result, "lineup-component", "lineup-component", { "data-astro-cid-cniar3gg": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<div class="Lineup" data-scrollTo="lineup" data-astro-cid-cniar3gg>
    ${exclude.length > 0 && renderTemplate`${renderComponent($$result, "SecondPageTitle", $$SecondPageTitle, { "title": "\u4ED6\u306E\u5546\u54C1\u3092\u898B\u308B", "data-astro-cid-cniar3gg": true })}` || renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": "Lineup", "subText": "\u53D6\u308A\u6271\u3044\u5546\u54C1", "data-astro-cid-cniar3gg": true })}`}
    ${!exclude.includes("mgo") && renderTemplate`<div class="inHouseProduct" data-astro-cid-cniar3gg>
          ${renderComponent($$result, "ProductItem", $$ProductItem, { "id": "mgo", "data-astro-cid-cniar3gg": true })}
        </div>`}
    <section class="splide" data-astro-cid-cniar3gg>
      <div class="splide__track" data-astro-cid-cniar3gg>
        <ul class="splide__list" data-astro-cid-cniar3gg>
          ${lineupData.map((id) => renderTemplate`<div class="splide__slide" data-astro-cid-cniar3gg>
                ${renderComponent($$result, "ProductItem", $$ProductItem, { "id": id, "data-astro-cid-cniar3gg": true })}
              </div>`)}
        </ul>
      </div>
    </section>
    <div class="btn" data-astro-cid-cniar3gg>
      ${renderComponent($$result, "Btn", $$Btn, { "text": "\u85AC\u5264\u5E2B\u306B\u76F8\u8AC7\u3059\u308B", "href": "/consultation/", "size": "M", "type": "outline", "color": "#000", "isWide": true, "data-astro-cid-cniar3gg": true })}
      <p class="btnNote" data-astro-cid-cniar3gg>不安や疑問は、購入前に気軽にご相談ください。</p>
    </div>
  </div>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/Lineup.astro", void 0);

export { $$Lineup as $, $$SectionHeader as a };
