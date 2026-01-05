import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server.js';
import 'kleur/colors';
/* empty css                     */

const $$Astro = createAstro();
const $$NotificationBanners = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NotificationBanners;
  const { list } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/NotificationBanners.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "notification-banners", "notification-banners", { "data-astro-cid-ml7ye4mw": true }, { "default": () => renderTemplate`
  ${list.map((item) => renderTemplate`${maybeRenderHead()}<div class="notification-banner" data-astro-cid-ml7ye4mw>
        <p${addAttribute(`color: ${item.color};`, "style")} data-astro-cid-ml7ye4mw>${item.text}</p>
        <div class="close" data-astro-cid-ml7ye4mw>
          <svg viewBox="0 0 16 16" fill="none" data-astro-cid-ml7ye4mw>
            <path d="M1.29297 13.293L13.293 1.29297L14.7072 2.70718L2.70718 14.7072L1.29297 13.293Z" data-astro-cid-ml7ye4mw></path>
            <path d="M2.70718 1.29297L14.7072 13.293L13.293 14.7072L1.29297 2.70718L2.70718 1.29297Z" data-astro-cid-ml7ye4mw></path>
          </svg>
        </div>
      </div>`)}
` })}`;
}, "/Users/bofft/Works/bebo/src/components/NotificationBanners.astro", void 0);

export { $$NotificationBanners as $ };
