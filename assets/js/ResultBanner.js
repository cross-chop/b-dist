import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server.js';
import 'kleur/colors';
import { $ as $$SecondPageTitle } from './SecondPageTitle.js';
/* empty css                           */

const $$Astro$1 = createAstro();
const $$ResultAdvise = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResultAdvise;
  const { adviceData } = Astro2.props;
  const baseData = [
    {
      id: "01",
      person: {
        job: "\u7BA1\u7406\u6804\u990A\u58EB",
        name: "\u672C\u7530\u7965\u5B50"
      }
    },
    {
      id: "02",
      person: {
        job: "\u85AC\u5264\u5E2B",
        name: "\u8358\u53F8\u548C\u5B50"
      }
    },
    {
      id: "03",
      person: {
        job: "\u770B\u8B77\u5E2B",
        name: "\u6C5F\u53E3\u5B9F\u5948\u7F8E"
      }
    }
  ];
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/ResultAdvise.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "result-advise", "result-advise", { "data-astro-cid-ywgv65fy": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<div class="ResultAdvice" data-astro-cid-ywgv65fy>
    ${renderComponent($$result, "SecondPageTitle", $$SecondPageTitle, { "title": "\u5C02\u9580\u5BB6\u306E\u30A2\u30C9\u30D0\u30A4\u30B9", "data-astro-cid-ywgv65fy": true })}
    <p class="lead" data-astro-cid-ywgv65fy>
      検査結果に応じて、薬・食事・生活習慣の3つの視点から、専門家があなたに合ったケアのヒントをお届けします。
    </p>
    <section class="splide" data-astro-cid-ywgv65fy>
      <div class="splide__track" data-astro-cid-ywgv65fy>
        <ul class="splide__list" data-astro-cid-ywgv65fy>
          ${adviceData.map((advice, i) => renderTemplate`<div class="splide__slide" data-astro-cid-ywgv65fy>
                <div class="card" data-astro-cid-ywgv65fy>
                  <div class="header" data-astro-cid-ywgv65fy>
                    <div class="number" data-astro-cid-ywgv65fy>Advice ${baseData[i].id}</div>
                  </div>
                  <div class="content" data-astro-cid-ywgv65fy>
                    <div class="body" data-astro-cid-ywgv65fy>
                      <h3 class="title" data-astro-cid-ywgv65fy>${advice.title}</h3>
                      <div class="divider" data-astro-cid-ywgv65fy></div>
                      <p class="description" data-astro-cid-ywgv65fy>${advice.description}</p>
                    </div>
                    <div class="person" data-astro-cid-ywgv65fy>
                      <div class="avatar" data-astro-cid-ywgv65fy>
                        <img${addAttribute(`/assets/img/type-check/result/specialist_${baseData[i].id}.webp`, "src")} alt="" data-astro-cid-ywgv65fy>
                      </div>
                      <div class="info" data-astro-cid-ywgv65fy>
                        <div class="job" data-astro-cid-ywgv65fy>${baseData[i].person.job}</div>
                        <div class="name" data-astro-cid-ywgv65fy>${baseData[i].person.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`)}
        </ul>
      </div>
    </section>
  </div>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/ResultAdvise.astro", void 0);

const $$Astro = createAstro();
const $$ResultBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResultBanner;
  const { character } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/ResultBanner.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "result-banner", "result-banner", { "data-astro-cid-4ilgabae": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<a href="/consultation/"${addAttribute(`ResultBanner ${character}`, "class")} data-astro-cid-4ilgabae>
    <div class="balloon" data-astro-cid-4ilgabae>
      <img src="/assets/img/type-check/result/banner_balloon.svg" alt="" data-astro-cid-4ilgabae>
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

export { $$ResultAdvise as $, $$ResultBanner as a };
