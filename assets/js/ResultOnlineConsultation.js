import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server.js';
import 'kleur/colors';
import { a as $$Btn } from './Layout.js';
/* empty css                                  */

const $$ResultOnlineConsultation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="ResultOnlineConsultation" data-astro-cid-spzrwoy6>
  <div class="inner" data-astro-cid-spzrwoy6>
    <h2 class="title" data-astro-cid-spzrwoy6>
      <span class="text" data-astro-cid-spzrwoy6>
        <span class="line" data-astro-cid-spzrwoy6>オンラインで<br class="sp" data-astro-cid-spzrwoy6>医師に相談できます</span>
      </span>
    </h2>
    <div class="body" data-astro-cid-spzrwoy6>
      <p data-astro-cid-spzrwoy6>
        初診から全国どこでも受診できる、保険対応のオンライン診療です。<br class="pc" data-astro-cid-spzrwoy6>
        アプリのダウンロードは不要で、ビデオ通話にてご利用いただけます。<br class="pc" data-astro-cid-spzrwoy6>
        システム利用料もかかりません。
      </p>
    </div>
    <p class="hours" data-astro-cid-spzrwoy6>オンライン診療の受付時間につきましては予約ページをご確認ください。</p>
    <div class="action" data-astro-cid-spzrwoy6>
      ${renderComponent($$result, "Btn", $$Btn, { "text": "\u5185\u79D1\u30AA\u30F3\u30E9\u30A4\u30F3\u8A3A\u7642\u3092\u4E88\u7D04\u3059\u308B", "size": "M_L", "href": "#", "type": "solid", "isWide": true, "data-astro-cid-spzrwoy6": true })}
    </div>
    <nav class="links" aria-label="関連リンク" data-astro-cid-spzrwoy6>
      <a href="#" data-astro-cid-spzrwoy6>提携医療機関について</a>
      <a href="/#faq" data-astro-cid-spzrwoy6>よくある質問</a>
    </nav>
  </div>
</div>`;
}, "/Users/bofft/Works/bebo/src/components/ResultOnlineConsultation.astro", void 0);

export { $$ResultOnlineConsultation as $ };
