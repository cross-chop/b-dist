import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute, F as Fragment } from './astro/server.js';
import 'kleur/colors';
import { a as $$Btn } from './Layout.js';
/* empty css        */

const $$Astro = createAstro();
const $$ProductItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductItem;
  const { id, isNoBtn = false } = Astro2.props;
  const productsData = [
    {
      id: "mgo",
      title: "\u30D3\u30FC\u30DC\u9178\u5316\u30DE\u30B0\u30CD\u30B7\u30A6\u30E0\u9320",
      type: "\u7B2C3\u985E\u533B\u85AC\u54C1",
      company: "\u30A8\u30E0\u30DC\u30C3\u30AF\u30B9",
      capacity: ["360\u9320", "90\u9320", "42\u9320"],
      days: ["60\u65E5\u5206", "15\u65E5\u5206", "7\u65E5\u5206"],
      price: ["\xA52,500", "\xA51,500", "\xA5980"],
      btnColor: "#88C8F0",
      description: "\u9178\u5316\u30DE\u30B0\u30CD\u30B7\u30A6\u30E0\u306F\u3001\u8178\u5185\u6C34\u5206\u3092\u8ABF\u6574\u3057\u3001\u4FBF\u3092\u3084\u308F\u3089\u304B\u304F\u3057\u3001\u81EA\u7136\u306A\u304A\u901A\u3058\u3092\u4FC3\u3059\u305F\u3081\u3001\u304A\u306A\u304B\u304C\u75DB\u304F\u306A\u308A\u306B\u304F\u3044\u306E\u304C\u7279\u5FB4\u3067\u3059\u3002\u5341\u5206\u306A\u6C34\u5206\u3068\u3068\u3082\u306B\u670D\u7528\u3059\u308B\u3053\u3068\u3067\u78BA\u5B9F\u306A\u4F5C\u7528\u304C\u671F\u5F85\u3067\u304D\u307E\u3059\u3002"
    },
    {
      id: "shin-biofermin-s",
      title: "\u65B0\u30D3\u30AA\u30D5\u30A7\u30EB\u30DF\u30F3S\u9320",
      type: "\u6307\u5B9A\u533B\u85AC\u90E8\u5916\u54C1",
      company: "\u5927\u6B63\u88FD\u85AC",
      capacity: "540\u9320",
      price: "\xA53,300",
      description: "\u30D3\u30D5\u30A3\u30BA\u30B9\u83CC\u30682\u7A2E\u985E\u306E\u4E73\u9178\u83CC\u304C\u8178\u5185\u74B0\u5883\u3092\u6574\u3048\u308B\u6574\u8178\u5264\u3002\u4FBF\u79D8\u3084\u4E0B\u75E2\u306E\u3069\u3061\u3089\u306B\u3082\u4F7F\u3048\u3001\u6BCE\u65E5\u306E\u8178\u6D3B\u30B5\u30DD\u30FC\u30C8\u306B\u3082\u5F79\u7ACB\u3061\u307E\u3059\u3002"
    },
    {
      id: "bio-three-hi",
      title: "\u30D3\u30AA\u30B9\u30EA\u30FC\u9320",
      type: "\u6307\u5B9A\u533B\u85AC\u90E8\u5916\u54C1",
      company: "\u30A2\u30EA\u30CA\u30DF\u30F3\u88FD\u85AC",
      capacity: "270\u9320",
      price: "\xA52,900",
      description: "3\u7A2E\u306E\u5584\u7389\u83CC\u304C\u8178\u306B\u5C4A\u304D\u3001\u30D0\u30E9\u30F3\u30B9\u3092\u6574\u3048\u308B\u6574\u8178\u5264\u3002\u4FBF\u79D8\u3084\u8EDF\u4FBF\u306A\u3069\u8178\u306E\u4E0D\u8ABF\u3092\u6539\u5584\u3057\u3001\u7A4F\u3084\u304B\u306B\u50CD\u304D\u307E\u3059\u3002"
    },
    {
      id: "new-withone",
      title: "\u65B0\u30A6\u30A3\u30BA\u30EF\u30F3",
      type: "\u7B2C\u2461\u985E\u533B\u85AC\u54C1",
      company: "\u30BC\u30EA\u30A2\u65B0\u85AC",
      capacity: "48\u5305",
      price: "\xA53,200",
      description: "\u690D\u7269\u7531\u6765\u6210\u5206\u304C\u8178\u3092\u3084\u3055\u3057\u304F\u523A\u6FC0\u3057\u3001\u81EA\u7136\u306A\u304A\u901A\u3058\u3092\u52A9\u3051\u308B\u4FBF\u79D8\u85AC\u3002\u304A\u8179\u304C\u75DB\u304F\u306A\u308A\u306B\u304F\u304F\u5B89\u5FC3\u3067\u3059\u3002"
    },
    {
      id: "colac-ii",
      title: "\u30B3\u30FC\u30E9\u30C3\u30AF\u2161",
      type: "\u7B2C2\u985E\u533B\u85AC\u54C1",
      company: "\u5927\u6B63\u88FD\u85AC",
      capacity: "40\u9320",
      price: "\xA5729",
      description: "\u8178\u3092\u523A\u6FC0\u3057\u3066\u6392\u4FBF\u3092\u4FC3\u3059\u30BF\u30A4\u30D7\u306E\u4FBF\u79D8\u85AC\u3002\u5373\u52B9\u6027\u304C\u3042\u308A\u3001\u5BDD\u308B\u524D\u306B\u98F2\u3080\u3068\u7FCC\u671D\u30B9\u30C3\u30AD\u30EA\u3057\u3084\u3059\u3044\u3067\u3059\u3002\u9811\u56FA\u306A\u4FBF\u79D8\u306E\u3068\u304D\u306B\u304A\u3059\u3059\u3081\u3002"
    },
    {
      id: "new-lecicarbon",
      title: "\u65B0\u30EC\u30B7\u30AB\u30EB\u30DC\u30F3\u5750\u5264S",
      type: "\u7B2C3\u985E\u533B\u85AC\u54C1",
      company: "\u30BC\u30EA\u30A2\u65B0\u85AC",
      capacity: "10\u500B",
      price: "\xA5638",
      description: "\u809B\u9580\u304B\u3089\u4F7F\u3046\u5750\u5264\u30BF\u30A4\u30D7\u306E\u4FBF\u79D8\u85AC\u3002\u30AC\u30B9\u306E\u529B\u3067\u8178\u3092\u523A\u6FC0\u3057\u3001\u5373\u52B9\u3067\u6392\u4FBF\u3092\u4FC3\u3057\u307E\u3059\u3002\u98F2\u307F\u85AC\u304C\u82E6\u624B\u306A\u65B9\u306B\u3082\u3002"
    },
    {
      id: "oxide_magnesium_e",
      title: "\u9178\u5316\u30DE\u30B0\u30CD\u30B7\u30A6\u30E0E\u4FBF\u79D8\u85AC",
      type: "\u7B2C3\u985E\u533B\u85AC\u54C1",
      company: "\u5065\u6804\u88FD\u85AC",
      capacity: "",
      price: "",
      description: ""
    }
  ];
  const data = productsData.find((product) => product.id === id);
  const hasVariations = Array.isArray(data?.capacity) && data?.capacity.length > 1;
  const variations = hasVariations && Array.isArray(data?.capacity) && Array.isArray(data?.days) && Array.isArray(data?.price) ? data.capacity.map((capacity, index) => ({
    capacity,
    days: data.days[index],
    price: data.price[index],
    imageIndex: index + 1
  })) : [];
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/ProductItem.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "product-item-component", "product-item-component", { "class": `ProductItem ${isNoBtn ? "isNoBtn" : ""}`, "data-product-id": id, "data-has-variations": hasVariations, "data-astro-cid-nwhxhul2": true }, { "default": () => renderTemplate`
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
    <p class="description" data-astro-cid-nwhxhul2>${data.description}</p>
    ${hasVariations && renderTemplate`<div class="variations" data-astro-cid-nwhxhul2>
          ${variations.map((variation, index) => renderTemplate`<button type="button" class="variation-btn"${addAttribute(index, "data-variation-index")}${addAttribute(index === 0, "data-active")} data-astro-cid-nwhxhul2>
              <div class="variation-btn-content" data-astro-cid-nwhxhul2>
                <div class="variation-btn-capacity" data-astro-cid-nwhxhul2>
                  <span class="capacity" data-astro-cid-nwhxhul2>${variation.capacity}</span>
                  <span class="days" data-astro-cid-nwhxhul2>（${variation.days}）</span>
                </div>
                <div class="variation-btn-price" data-astro-cid-nwhxhul2>${variation.price}</div>
              </div>
            </button>`)}
        </div>`}
    <div class="btns" data-astro-cid-nwhxhul2>
      ${!isNoBtn && renderTemplate`${renderComponent($$result, "Btn", $$Btn, { "text": "\u3082\u3063\u3068\u8A73\u3057\u304F\u898B\u308B", "size": "M", "href": `/product/${data.id}/`, "type": "solid", "color": data.btnColor || "#828195", "data-astro-cid-nwhxhul2": true })}`}
      ${renderComponent($$result, "Btn", $$Btn, { "text": "\u30AB\u30FC\u30C8\u306B\u5165\u308C\u308B", "size": "M_L", "href": "/cart/", "type": "solid", "color": "#000", "data-astro-cid-nwhxhul2": true }, { "default": ($$result2) => renderTemplate`
        <img class="icnCart" src="/assets/img/common/icn_cart.svg" alt="カート" data-astro-cid-nwhxhul2>
      ` })}
    </div>
  </div>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/ProductItem.astro", void 0);

export { $$ProductItem as $ };
