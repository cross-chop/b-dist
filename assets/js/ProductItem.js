import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute, F as Fragment, u as unescapeHTML } from './astro/server.js';
import 'kleur/colors';
/* empty css                                  */
import { a as $$Btn } from './Layout.js';
/* empty css        */

const $$Astro$1 = createAstro();
const $$WaveSeparator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WaveSeparator;
  const { colorTop = "#f8f5f0", colorBottom = "#fff" } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/WaveSeparator.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "wave-separator", "wave-separator", { "data-color-top": colorTop, "data-color-bottom": colorBottom, "data-astro-cid-g2x64x6i": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<canvas data-astro-cid-g2x64x6i></canvas>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/WaveSeparator.astro", void 0);

const productsData = [
  {
    id: "mgo",
    title: "ビーボ酸化マグネシウム錠",
    type: "第3類医薬品",
    company: "エムボックス",
    capacity: ["360錠", "90錠", "42錠", "360錠"],
    days: ["60日分", "15日分", "7日分", "60日分"],
    price: ["¥2,500", "¥1,500", "¥980", "¥2,500"],
    description: "酸化マグネシウムは、腸内水分を調整し、便をやわらかくし、自然なお通じを促すため、おなかが痛くなりにくいのが特徴です。十分な水分とともに服用することで確実な作用が期待できます。",
    baseText: "42錠(7日分)¥980〜",
    badgeText: '痔の原因を<br class="sp" />対策するなら！',
    btnColor: "#88C8F0",
    textColor: "#499DE2",
    btnGradient: "linear-gradient(90deg, #88C8F0 0%, #07F 50%, #88C8F0 100%)"
  },
  {
    id: "bio-three-hi",
    title: "ビオスリーHi錠",
    type: "指定医薬部外品",
    company: "アリナミン製薬",
    capacity: "270錠",
    price: "¥2,900",
    description: "3種の善玉菌が腸に届き、バランスを整える整腸剤。便秘や軟便など腸の不調を改善し、穏やかに働きます。",
    badgeText: '日頃の腸活に<br class="sp" />おすすめ',
    btnColor: "#0065D9",
    textColor: "#0065D9",
    btnGradient: "linear-gradient(90deg, #07F 0%, #0045DA 50%, #07F 100%)"
  },
  {
    id: "new-withone",
    title: "新ウィズワン",
    type: "第②類医薬品",
    company: "ゼリア新薬",
    capacity: "48包",
    price: "¥3,200",
    description: "植物由来成分が便に水分を含ませて柔らかくし、自然なお通じをサポート。生薬成分がスムーズな排便へ導きます。",
    badgeText: 'スペシャルな日の<br class="sp" />ケア専用！',
    btnColor: "#9FCF2D",
    textColor: "#63A808",
    btnGradient: "linear-gradient(90deg, #9FCF2D 0%, #339200 50%, #9FCF2D 100%)"
  },
  {
    id: "colac-ii",
    title: "コーラックⅡ",
    type: "第2類医薬品",
    company: "大正製薬",
    capacity: "40錠",
    price: "¥729",
    description: "腸を刺激して排便を促すタイプの便秘薬。即効性があり、寝る前に飲むと翌朝スッキリしやすいです。頑固な便秘のときにおすすめ。",
    badgeText: 'スペシャルな日の<br class="sp" />ケア専用！',
    btnColor: "#FF50B6",
    textColor: "#FF50B6",
    btnGradient: "linear-gradient(90deg, #FF89C8 0%, #FF0095 50%, #FF89C8 100%  )"
  },
  {
    id: "borraginol-a",
    title: "ボラギノールA軟膏",
    type: "第②類医薬品",
    company: "天藤製薬",
    capacity: "20g/6g×2本",
    price: "¥1,379",
    description: "4つの有効成分を配合し、痔による痛み・痒み・腫れを鎮めます。患部に直接作用してつらい症状を和らげます。",
    badgeText: '痔によるお尻の悩みに<br class="sp" />おすすめ',
    btnColor: "#FF9E0B",
    textColor: "#FFA809",
    btnGradient: "linear-gradient(90deg, #FFCF31 0%, #FF8000 50%, #FFCF31 100%)"
  },
  {
    id: "daichi-no-kampo",
    title: "大地の漢方便秘薬",
    type: "第2類医薬品",
    company: "アリナミン製薬",
    capacity: "65錠",
    price: "¥1,613",
    description: "生薬の「大黄」と「甘草」を配合した「大黄甘草湯」が大腸をしっかり動かし、便をスムーズに運び出します。",
    badgeText: 'スペシャルな日の<br class="sp" />ケア専用！',
    btnColor: "#54B37B",
    textColor: "#54B37B",
    btnGradient: "linear-gradient(90deg, #00E077 0%, #54B37B 50%, #00E077 100%)"
  }
];

const $$Astro = createAstro();
const $$ProductItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductItem;
  const { id, isNoBtn = false, order = false, isBigCartBtn = false } = Astro2.props;
  const data = productsData.find((product) => product.id === id);
  const hasVariations = Array.isArray(data?.capacity) && data?.capacity.length > 1;
  const variations = hasVariations && Array.isArray(data?.capacity) && Array.isArray(data?.days) && Array.isArray(data?.price) ? data.capacity.map((capacity, index) => ({
    capacity,
    days: data.days[index],
    price: data.price[index],
    imageIndex: index + 1
  })) : [];
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/ProductItem.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "product-item-component", "product-item-component", { "class": `ProductItem ${isNoBtn ? "isNoBtn" : ""} ${isBigCartBtn ? "isBigCartBtn" : ""} ${order ? "isOrder" : ""}`, "data-product-id": id, "data-has-variations": hasVariations, "data-astro-cid-nwhxhul2": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<div class="thumb" data-astro-cid-nwhxhul2>
    <a${addAttribute(`/product/${data.id}/`, "href")} data-astro-cid-nwhxhul2>
      ${hasVariations ? variations.map((variation, index) => renderTemplate`<img${addAttribute(`/assets/img/products/${data.id}_${variation.imageIndex}.webp`, "src")} alt="" class="variation-image"${addAttribute(index, "data-variation-index")}${addAttribute(index === 0 ? "opacity: 1;" : "opacity: 0;", "style")} data-astro-cid-nwhxhul2>`) : renderTemplate`<img${addAttribute(`/assets/img/products/${data.id}.webp`, "src")} alt="" data-astro-cid-nwhxhul2>`}
    </a>
  </div>
  <div class="body" data-astro-cid-nwhxhul2>
    <div class="header" data-astro-cid-nwhxhul2>
      <h3 class="title" data-astro-cid-nwhxhul2>${data.title}</h3>
      <div class="info" data-astro-cid-nwhxhul2>
        <div class="typeAndCompany" data-astro-cid-nwhxhul2>
          <div class="type" data-astro-cid-nwhxhul2>
            <span data-astro-cid-nwhxhul2>${data.type}</span>
          </div>
          <div class="company" data-astro-cid-nwhxhul2>（${data.company}）</div>
        </div>
        <div class="capacityAndPrice" data-astro-cid-nwhxhul2>
          ${hasVariations ? renderTemplate`<div class="capacityAndPriceVariation" data-astro-cid-nwhxhul2>
                ${variations.length > 0 && renderTemplate`<div class="variation-text variation-text-placeholder" aria-hidden="true" data-astro-cid-nwhxhul2>
                    <div class="capacity" data-astro-cid-nwhxhul2>(${variations[0].capacity})</div>
                    <div class="price" data-astro-cid-nwhxhul2>${variations[0].price}</div>
                  </div>`}
                ${variations.map((variation, index) => renderTemplate`<div class="variation-text"${addAttribute(index, "data-variation-index")}${addAttribute(index === 0 ? "opacity: 1;" : "opacity: 0;", "style")} data-astro-cid-nwhxhul2>
                    <div class="capacity" data-astro-cid-nwhxhul2>(${variation.capacity})</div>
                    <div class="price" data-astro-cid-nwhxhul2>${variation.price}</div>
                  </div>`)}
              </div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-nwhxhul2": true }, { "default": ($$result2) => renderTemplate`
                <div class="capacity" data-astro-cid-nwhxhul2>(${data.capacity})</div>
                <div class="price" data-astro-cid-nwhxhul2>${data.price}</div>
              ` })}`}
        </div>
      </div>
    </div>
    ${data.description && !order && renderTemplate`<p class="description" data-astro-cid-nwhxhul2>${unescapeHTML(data.description)}</p>`}
    ${hasVariations && renderTemplate`<div class="variations" data-astro-cid-nwhxhul2>
          ${variations.map((variation, index) => renderTemplate`<button type="button" class="variation-btn"${addAttribute(index, "data-variation-index")}${addAttribute(index === 0, "data-active")} data-astro-cid-nwhxhul2>
              <div class="variation-btn-content" data-astro-cid-nwhxhul2>
                <div class="variation-btn-capacity" data-astro-cid-nwhxhul2>
                  <span data-astro-cid-nwhxhul2>
                    ${index === 3 && renderTemplate`<span class="subscription" data-astro-cid-nwhxhul2>定期購入</span>`}
                    <span class="capacity" data-astro-cid-nwhxhul2>${variation.capacity}</span>
                  </span>
                  <span class="days" data-astro-cid-nwhxhul2>（${variation.days}）</span>
                </div>
                ${index === 3 && renderTemplate`<div class="variation-btn-price" data-astro-cid-nwhxhul2>初回 ¥2,250〜</div>`}
                ${!(index === 3) && renderTemplate`<div class="variation-btn-price" data-astro-cid-nwhxhul2>${variation.price}</div>`}
              </div>
            </button>`)}
        </div>`}
    <div class="btns" data-astro-cid-nwhxhul2>
      ${renderComponent($$result, "Btn", $$Btn, { "text": "\u30AB\u30FC\u30C8\u306B\u5165\u308C\u308B", "size": "M_L", "href": "/cart/", "type": "solid", "color": "#000", "gradient": data.btnGradient, "data-astro-cid-nwhxhul2": true }, { "default": ($$result2) => renderTemplate`
        <img class="icnCart" src="/assets/img/common/icn_cart.svg" alt="カート" data-astro-cid-nwhxhul2>
      ` })}
      ${data.description && order && renderTemplate`<p class="description" data-astro-cid-nwhxhul2>${unescapeHTML(data.description)}</p>`}
      ${!isNoBtn && renderTemplate`${renderComponent($$result, "Btn", $$Btn, { "text": "\u3082\u3063\u3068\u8A73\u3057\u304F\u898B\u308B", "size": "M", "href": `/product/${data.id}/`, "type": "outline", "color": data.btnColor || "#637390", "data-astro-cid-nwhxhul2": true })}`}
    </div>
  </div>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/ProductItem.astro", void 0);

export { $$ProductItem as $, $$WaveSeparator as a, productsData as p };
