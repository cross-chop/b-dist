import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server.js';
import 'kleur/colors';
import { a as $$SectionHeader } from './Lineup.js';
/* empty css        */

const $$Astro = createAstro();
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  const { data } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/Faq.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "faq-component", "faq-component", { "data-astro-cid-z6gx6xcw": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<div class="Faq" data-scrollTo="faq" data-astro-cid-z6gx6xcw>
    <!-- <div class="bebos"> -->
    <!-- <img src="/assets/img/top/bebos.svg" alt="" /> -->
    <!-- </div> -->
    ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": "FAQ", "subText": "\u3088\u304F\u3042\u308B\u8CEA\u554F", "data-astro-cid-z6gx6xcw": true })}
    <div class="inner" data-astro-cid-z6gx6xcw>
      <div class="faqList" data-astro-cid-z6gx6xcw>
        ${data.map((item, index) => renderTemplate`<div class="faqItem" data-astro-cid-z6gx6xcw>
              <h3 class="question" data-astro-cid-z6gx6xcw>
                <span data-astro-cid-z6gx6xcw>${item.question}</span>
                <div class="arrow" data-astro-cid-z6gx6xcw>
                  <svg viewBox="0 0 13 8" fill="none" data-astro-cid-z6gx6xcw>
                    <path d="M12 1.19897L6.5 6.69897L1 1.19897" stroke="black" stroke-width="1.375" stroke-linecap="square" data-astro-cid-z6gx6xcw></path>
                  </svg>
                </div>
              </h3>
              <div class="answer" data-astro-cid-z6gx6xcw>
                <div class="inner" data-astro-cid-z6gx6xcw>
                  <p data-astro-cid-z6gx6xcw>${item.answer}</p>
                </div>
              </div>
            </div>`)}
      </div>
    </div>
  </div>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/Faq.astro", void 0);

export { $$Faq as $ };
