import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, u as unescapeHTML, r as renderComponent, a as renderTemplate } from './astro/server.js';
import 'kleur/colors';
import { a as $$Btn } from './Layout.js';
import { p as productsData } from './ProductItem.js';
/* empty css                                */

const $$Astro = createAstro();
const $$ResultDailyCare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResultDailyCare;
  const { ids } = Astro2.props;
  const formatCapacity = (capacity) => Array.isArray(capacity) ? capacity[0] : capacity;
  const formatPrice = (price) => Array.isArray(price) ? price[0] : price;
  const items = (ids ?? []).map((id) => {
    const product = productsData.find((p) => p.id === id) ?? productsData[0];
    return {
      badge: product.badgeText ?? "\u65E5\u9803\u306E\u8178\u6D3B\u306B\u304A\u3059\u3059\u3081",
      title: product.title,
      priceText: product.baseText ? product.baseText : `(${formatCapacity(product.capacity)})${formatPrice(product.price)}`,
      href: `/product/${product.id}/`,
      // product.capacityが配列だったら
      image: Array.isArray(product.capacity) ? `/assets/img/products/${product.id}_1.webp` : `/assets/img/products/${product.id}.webp`,
      accentColor: product.btnColor ?? "#0065D9",
      accentGradient: product.btnGradient ?? "linear-gradient(90deg, #07F 0%, #0045DA 50%, #07F 100%)",
      textColor: product.textColor ?? "#000"
    };
  });
  return renderTemplate`${maybeRenderHead()}<section class="ResultDailyCare" data-astro-cid-77tibwep>
  <h2 class="title" data-astro-cid-77tibwep>一緒に取り入れたい<br class="sp" data-astro-cid-77tibwep>ケア</h2>
  <div class="list" data-astro-cid-77tibwep>
    ${items.map((item) => renderTemplate`<div class="card"${addAttribute(`--accent: ${item.accentColor}; --textColor: ${item.textColor};`, "style")} data-astro-cid-77tibwep>
          <div class="info" data-astro-cid-77tibwep>
            <div class="thumb" data-astro-cid-77tibwep>
              <img${addAttribute(item.image, "src")} alt="" data-astro-cid-77tibwep>
            </div>
            <div class="text" data-astro-cid-77tibwep>
              <div class="badge" data-astro-cid-77tibwep>
                <span data-astro-cid-77tibwep>${unescapeHTML(item.badge)}</span>
              </div>
              <h3 class="name" data-astro-cid-77tibwep>${item.title}</h3>
              <span class="price" data-astro-cid-77tibwep>${item.priceText}</span>
            </div>
          </div>
          <div class="btn" data-astro-cid-77tibwep>
            ${renderComponent($$result, "Btn", $$Btn, { "text": "\u3082\u3063\u3068\u8A73\u3057\u304F\u898B\u308B", "size": "L", "href": item.href, "type": "solid", "color": item.accentColor, "gradient": item.accentGradient, "data-astro-cid-77tibwep": true })}
          </div>
        </div>`)}
  </div>
</section>`;
}, "/Users/bofft/Works/bebo/src/components/ResultDailyCare.astro", void 0);

export { $$ResultDailyCare as $ };
