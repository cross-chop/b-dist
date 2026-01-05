import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server.js';
import 'kleur/colors';
/* empty css                      */

const $$Astro = createAstro();
const $$MypageMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MypageMenu;
  const { currentIndex = null } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/MypageMenu.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "mypage-menu", "mypage-menu", { "data-astro-cid-jtzeilfp": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<div class="MypageMenu" data-astro-cid-jtzeilfp>
    <div class="userInfo" data-astro-cid-jtzeilfp>
      <div class="thumb" data-astro-cid-jtzeilfp>
        <img src="/assets/img/common/icn_account.webp" alt="" data-astro-cid-jtzeilfp>
        <div class="eye eye1" data-astro-cid-jtzeilfp></div>
        <div class="eye eye2" data-astro-cid-jtzeilfp></div>
      </div>
      <div class="name" data-astro-cid-jtzeilfp>村石光貴 様</div>
    </div>
    <ul class="menu" data-astro-cid-jtzeilfp>
      <li${addAttribute(["item", { isActive: currentIndex === 0 }], "class:list")} data-astro-cid-jtzeilfp>
        <a href="/account/" data-astro-cid-jtzeilfp>
          <span data-astro-cid-jtzeilfp>マイページトップ</span>
        </a>
      </li>
      <li${addAttribute(["item", { isActive: currentIndex === 1 }], "class:list")} data-astro-cid-jtzeilfp>
        <a href="/account/edit/" data-astro-cid-jtzeilfp>
          <span data-astro-cid-jtzeilfp>会員情報を変更</span>
        </a>
      </li>
      <li${addAttribute(["item", { isActive: currentIndex === 2 }], "class:list")} data-astro-cid-jtzeilfp>
        <a href="/account/edit-email/" data-astro-cid-jtzeilfp>
          <span data-astro-cid-jtzeilfp>メールアドレスを変更</span>
        </a>
      </li>
      <li${addAttribute(["item", { isActive: currentIndex === 3 }], "class:list")} data-astro-cid-jtzeilfp>
        <a href="/account/edit-password/" data-astro-cid-jtzeilfp>
          <span data-astro-cid-jtzeilfp>パスワードを変更</span>
        </a>
      </li>
      <li${addAttribute(["item", { isActive: currentIndex === 4 }], "class:list")} data-astro-cid-jtzeilfp>
        <a href="/account/credit-card/" data-astro-cid-jtzeilfp>
          <span data-astro-cid-jtzeilfp>クレジットカード情報</span>
        </a>
      </li>
      <li${addAttribute(["item", { isActive: currentIndex === 5 }], "class:list")} data-astro-cid-jtzeilfp>
        <a href="/account/history/" data-astro-cid-jtzeilfp>
          <span data-astro-cid-jtzeilfp>購入履歴</span>
        </a>
      </li>
    </ul>
  </div>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/MypageMenu.astro", void 0);

export { $$MypageMenu as $ };
