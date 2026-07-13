import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server.js';
import 'kleur/colors';
import { a as $$Btn } from './Layout.js';
/* empty css                          */

const $$ResultMedicalConsultation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="ResultMedicalConsultation" data-astro-cid-d5rm7c4t>
  <div class="inner" data-astro-cid-d5rm7c4t>
    <h2 class="title" data-astro-cid-d5rm7c4t>
      <span class="text" data-astro-cid-d5rm7c4t>
        <span class="line" data-astro-cid-d5rm7c4t>
          医療機関での<br class="sp" data-astro-cid-d5rm7c4t>相談もご検討ください
        </span>
      </span>
    </h2>
    <div class="body" data-astro-cid-d5rm7c4t>
      <p data-astro-cid-d5rm7c4t>
        市販薬を試しても改善がみられない場合や、6か月以上続く慢性的な便秘でお悩みの方は、医療機関での相談をおすすめします。便秘の背景に、専門的な評価が必要な場合もあります。
        <br data-astro-cid-d5rm7c4t>
        本サイトでは、オンライン診療のご案内も行っています。「病院に行く時間がない」「まずは相談してみたい」という方は、ぜひご活用ください。
      </p>
    </div>
    <p class="hours" data-astro-cid-d5rm7c4t>オンライン診療の受付時間につきましては予約ページをご確認ください。</p>
    <div class="action" data-astro-cid-d5rm7c4t>
      ${renderComponent($$result, "Btn", $$Btn, { "text": "\u5185\u79D1\u30AA\u30F3\u30E9\u30A4\u30F3\u8A3A\u7642\u3092\u4E88\u7D04\u3059\u308B", "size": "M_L", "href": "#", "type": "solid", "isWide": true, "data-astro-cid-d5rm7c4t": true })}
    </div>
    <nav class="links" aria-label="関連リンク" data-astro-cid-d5rm7c4t>
      <a href="#" data-astro-cid-d5rm7c4t>提携医療機関について</a>
      <a href="/#faq" data-astro-cid-d5rm7c4t>よくある質問</a>
    </nav>
  </div>
</div>`;
}, "/Users/bofft/Works/bebo/src/components/ResultMedicalConsultation.astro", void 0);

export { $$ResultMedicalConsultation as $ };
