import { c as createComponent, d as createAstro, m as maybeRenderHead, f as renderSlot, a as renderTemplate, u as unescapeHTML } from './astro/server.js';
import 'kleur/colors';
import 'clsx';
/* empty css             */

const $$Astro = createAstro();
const $$Column = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Column;
  const { title } = Astro2.props;
  const hasLeft = Astro2.slots.has("left");
  const hasRight = Astro2.slots.has("right");
  return renderTemplate`${maybeRenderHead()}<div class="Column" data-astro-cid-pq3ktr2b>
  <div class="Column_inner" data-astro-cid-pq3ktr2b>
    ${hasLeft && renderTemplate`<div class="Column_side left" data-astro-cid-pq3ktr2b>
          ${renderSlot($$result, $$slots["left"])}
        </div>`}

    <div class="Column_mainContainer" data-astro-cid-pq3ktr2b>
      ${title && renderTemplate`<h1 class="Column_title" data-astro-cid-pq3ktr2b>${unescapeHTML(title)}</h1>`}
      <div class="Column_main" data-astro-cid-pq3ktr2b>
        ${renderSlot($$result, $$slots["main"])}
      </div>
    </div>

    ${hasRight && renderTemplate`<div class="Column_side right" data-astro-cid-pq3ktr2b>
          ${renderSlot($$result, $$slots["right"])}
        </div>`}
  </div>
</div>`;
}, "/Users/bofft/Works/bebo/src/components/Column.astro", void 0);

export { $$Column as $ };
