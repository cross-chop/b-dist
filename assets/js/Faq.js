import { c as createComponent, d as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server.js';
import 'kleur/colors';
import { $ as $$Accordion, c as $$SectionHeader, a as $$AccordionItem } from './AccordionItem.js';
/* empty css        */

const $$Astro = createAstro();
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="Faq" data-scrollTo="faq" data-astro-cid-z6gx6xcw>
  ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": "FAQ", "subText": "\u3088\u304F\u3042\u308B\u8CEA\u554F", "data-astro-cid-z6gx6xcw": true })}
  <div class="inner" data-astro-cid-z6gx6xcw>
    ${renderComponent($$result, "Accordion", $$Accordion, { "data-astro-cid-z6gx6xcw": true }, { "default": ($$result2) => renderTemplate`${data.map((item) => renderTemplate`${renderComponent($$result2, "AccordionItem", $$AccordionItem, { "question": item.question, "data-astro-cid-z6gx6xcw": true }, { "default": ($$result3) => renderTemplate`
            <p data-astro-cid-z6gx6xcw>${item.answer}</p>
          ` })}`)}` })}
  </div>
</div>`;
}, "/Users/bofft/Works/bebo/src/components/Faq.astro", void 0);

export { $$Faq as $ };
