import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, m as maybeRenderHead, e as addAttribute, f as renderSlot, a as renderTemplate, F as Fragment, g as defineStyleVars, h as renderHead } from './astro/server.js';
import 'kleur/colors';
/* empty css             */
/* empty css                   */

const $$Astro$2 = createAstro();
const $$Btn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Btn;
  const {
    text,
    href,
    target = "_self",
    size = "L",
    type = "solid",
    color = "#000000",
    tag = "a",
    isDisabled = false,
    isActive = false,
    shoulder = "",
    isWide = false,
    id = ""
  } = Astro2.props;
  const Tag = tag === "input" ? "div" : tag;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/Btn.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "btn-components", "btn-components", { "data-href": href, "data-target": target, "data-size": size, "data-type": type, "data-color": color, "data-tag": tag, "data-disabled": isDisabled, "data-isActive": isActive, "data-shoulder": shoulder, "data-isWide": isWide, "data-astro-cid-5dcumwjq": true }, { "default": () => renderTemplate`
  ${renderComponent($$result, "Tag", Tag, { "href": tag === "a" ? href : void 0, "target": tag === "a" ? target : void 0, "id": id !== "" ? tag !== "input" ? id : void 0 : void 0, "class:list": ["Btn", {
    L: size === "L",
    M: size === "M",
    M_S: size === "M_S",
    M_L: size === "M_L",
    S: size === "S",
    solid: type === "solid",
    outline: type === "outline",
    transparent: type === "transparent",
    disabled: isDisabled,
    isActive,
    hasShoulder: shoulder !== "",
    isWide
  }], "style": type === "solid" ? `color: #fff;` : `color: ${color};`, "data-astro-cid-5dcumwjq": true }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<span class="frame"${addAttribute(type === "solid" ? `background-color: ${color};` : type === "transparent" ? `background-color: transparent; border-color: ${color};` : type === "invert" ? `background-color: #fff; ` : `background-color: #fff; border-color: ${color};`, "style")} data-astro-cid-5dcumwjq></span>
    ${text && tag !== "input" && renderTemplate`<span class="text" data-astro-cid-5dcumwjq>${text}</span>`}${target === "_blank" && renderTemplate`<svg viewBox="0 0 12 12" fill="none" data-astro-cid-5dcumwjq>
          <path d="M5.49829 1.86133H2C1.44772 1.86133 1 2.30904 1 2.86133V9.85879C1 10.4111 1.44772 10.8588 2 10.8588H8.99659C9.54887 10.8588 9.99659 10.4111 9.99659 9.85879V6.36006" data-astro-cid-5dcumwjq></path>
          <path d="M11.0004 4.85825V0.859375M11.0004 0.859375H7.00195M11.0004 0.859375L7.00195 4.85825" data-astro-cid-5dcumwjq></path>
        </svg>`}${shoulder !== "" && renderTemplate`<span class="shoulder" data-astro-cid-5dcumwjq>${shoulder}</span>`}${renderSlot($$result2, $$slots["default"])}
    ${tag === "input" && renderTemplate`<input type="submit"${addAttribute(text, "value")}${addAttribute(id !== "" ? id : void 0, "id")}${addAttribute(type === "solid" ? `color: #fff;` : `color: ${color};`, "style")} data-astro-cid-5dcumwjq>`}` })}
` })}`;
}, "/Users/bofft/Works/bebo/src/components/Btn.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { showHeaderLogo = false, signOut = false, isCheckout = false, isHeaderInvert = false } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/Header.astro?astro&type=script&index=0&lang.ts")}
${renderComponent($$result, "header-component", "header-component", { "data-astro-cid-3ef6ksr2": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<header${addAttribute(`Header ${!signOut ? "isLogin" : ""} ${isHeaderInvert ? "isHeaderInvert" : ""}`, "class")} data-astro-cid-3ef6ksr2>
    <h1${addAttribute(`logo ${showHeaderLogo ? "show" : ""}`, "class")} data-astro-cid-3ef6ksr2>
      <a href="/" data-astro-cid-3ef6ksr2>
        <img src="/assets/img/common/logo_bebo.svg" alt="Bebo" data-astro-cid-3ef6ksr2>
      </a>
    </h1>
    ${!isCheckout && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`
          <div class="menu" data-astro-cid-3ef6ksr2>
            <ul data-astro-cid-3ef6ksr2>
              <li class="sp userName" data-astro-cid-3ef6ksr2>
                <span data-astro-cid-3ef6ksr2>村石光貴 様</span>
              </li>
              <li data-path="/" data-astro-cid-3ef6ksr2>
                <a href="/" data-astro-cid-3ef6ksr2>
                  <span data-astro-cid-3ef6ksr2>トップ</span>
                </a>
              </li>
              <li data-path="/type-check/" data-astro-cid-3ef6ksr2>
                <a href="/type-check/" data-astro-cid-3ef6ksr2>
                  <span data-astro-cid-3ef6ksr2>便秘タイプチェック</span>
                </a>
              </li>
              <li data-path="/#lineup" data-astro-cid-3ef6ksr2>
                <a href="/#lineup" data-astro-cid-3ef6ksr2>
                  <span data-astro-cid-3ef6ksr2>取り扱い商品</span>
                </a>
              </li>
              <li data-path="/consultation/" data-astro-cid-3ef6ksr2>
                <a href="/consultation/" data-astro-cid-3ef6ksr2>
                  <span data-astro-cid-3ef6ksr2>薬剤師に相談</span>
                </a>
              </li>
              <li class="sp mypage" data-path="/account/" data-astro-cid-3ef6ksr2>
                <a href="/account/" data-astro-cid-3ef6ksr2>
                  <span data-astro-cid-3ef6ksr2>マイページ</span>
                </a>
              </li>
            </ul>
            <div class="sp btns" data-astro-cid-3ef6ksr2>
              <div class="btn_login" data-astro-cid-3ef6ksr2>
                ${renderComponent($$result2, "Btn", $$Btn, { "class": "login", "text": "\u30ED\u30B0\u30A4\u30F3", "href": "/sign-in/", "size": "M", "type": "solid", "color": "#000", "data-astro-cid-3ef6ksr2": true })}
              </div>
              <div class="btn_cart" data-astro-cid-3ef6ksr2>
                ${renderComponent($$result2, "Btn", $$Btn, { "href": "/cart/", "size": "M", "type": "solid", "color": "#fff", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result3) => renderTemplate`
                  <img class="icnCart" src="/assets/img/common/icn_cart.svg" alt="カート" data-astro-cid-3ef6ksr2>
                ` })}
              </div>
              <div class="btn_logout" data-astro-cid-3ef6ksr2>
                ${renderComponent($$result2, "Btn", $$Btn, { "text": "\u30ED\u30B0\u30A2\u30A6\u30C8", "href": "/sign-in/", "size": "M", "type": "transparent", "color": "#000", "data-astro-cid-3ef6ksr2": true })}
              </div>
            </div>
            <div class="pc account" data-astro-cid-3ef6ksr2>
              ${signOut ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result3) => renderTemplate`
                  ${renderComponent($$result3, "Btn", $$Btn, { "class": "login", "text": "\u30ED\u30B0\u30A4\u30F3", "href": "/sign-in/", "size": "M", "type": "solid", "color": "#000", "data-astro-cid-3ef6ksr2": true })}
                ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result3) => renderTemplate`
                  <div class="pulldown" data-astro-cid-3ef6ksr2>
                    <a class="pulldown_head" href="/account/" data-astro-cid-3ef6ksr2>
                      <span data-astro-cid-3ef6ksr2>村石光貴 様</span>
                      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3ef6ksr2>
                        <path d="M12 3.25L6.5 8.75L1 3.25" stroke="black" stroke-width="1.375" stroke-linecap="square" data-astro-cid-3ef6ksr2></path>
                      </svg>
                    </a>
                    <div class="pulldown_body" data-astro-cid-3ef6ksr2>
                      <div class="select" data-astro-cid-3ef6ksr2>
                        <a class="option" href="/account/" data-astro-cid-3ef6ksr2>
                          <span data-astro-cid-3ef6ksr2>マイページ</span>
                        </a>
                        <a class="option" href="/sign-in/" data-astro-cid-3ef6ksr2>
                          <span data-astro-cid-3ef6ksr2>ログアウト</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ` })}`}

              <div class="btnCart" data-astro-cid-3ef6ksr2>
                ${renderComponent($$result2, "Btn", $$Btn, { "href": "/cart/", "size": "M", "type": "solid", "color": "#fff", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result3) => renderTemplate`
                  <img class="icnCart" src="/assets/img/common/icn_cart.svg" alt="カート" data-astro-cid-3ef6ksr2>
                ` })}
              </div>
            </div>
          </div>
          <div class="menuTrigger" data-astro-cid-3ef6ksr2>
            <span data-astro-cid-3ef6ksr2></span>
            <span data-astro-cid-3ef6ksr2></span>
            <span data-astro-cid-3ef6ksr2></span>
          </div>
        ` })}`}
    ${isCheckout && !signOut && renderTemplate`<div class="checkoutText" data-astro-cid-3ef6ksr2>ご購入手続き：村石光貴さん</div>`}
  </header>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="Footer" data-astro-cid-sz7xmlte>
  <div class="inner" data-astro-cid-sz7xmlte>
    <div class="logo" data-astro-cid-sz7xmlte>
      <img src="/assets/img/common/logo_bebo_white.svg" alt="Bebo" data-astro-cid-sz7xmlte>
    </div>
    <div class="sns" data-astro-cid-sz7xmlte>
      <ul data-astro-cid-sz7xmlte>
        <li data-astro-cid-sz7xmlte>
          <a href="https://www.instagram.com/bebo___mbox" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte><img src="/assets/img/common/sns_ig.svg" alt="Instagram" data-astro-cid-sz7xmlte></a>
        </li>
        <li data-astro-cid-sz7xmlte>
          <a href="https://x.com/Bebo__Mbox" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte><img src="/assets/img/common/sns_x.svg" alt="X" data-astro-cid-sz7xmlte></a>
        </li>
      </ul>
    </div>
    <div class="links" data-astro-cid-sz7xmlte>
      <div class="btns" data-astro-cid-sz7xmlte>
        ${renderComponent($$result, "Btn", $$Btn, { "text": "\u904B\u55B6\u4F1A\u793E", "href": "https://mbox-inc.jp/", "target": "_blank", "size": "S", "type": "transparent", "color": "#fff", "data-astro-cid-sz7xmlte": true })}
        ${renderComponent($$result, "Btn", $$Btn, { "text": "\u304A\u554F\u3044\u5408\u308F\u305B", "href": "/contact/", "size": "S", "type": "transparent", "color": "#fff", "data-astro-cid-sz7xmlte": true })}
        ${renderComponent($$result, "Btn", $$Btn, { "text": "\u5E97\u8217\u8CA9\u58F2\u696D\u306E\u7BA1\uF9E4\u53CA\u3073\u904B\u55B6\u306B\u95A2\u3059\u308B\u4E8B\u9805", "href": "/pharmacy-license/", "size": "S", "type": "transparent", "color": "#fff", "data-astro-cid-sz7xmlte": true })}
      </div>
      <ul class="legalLinks" data-astro-cid-sz7xmlte>
        <li data-astro-cid-sz7xmlte>
          <a href="/#faq" class="triggerTop" data-astro-cid-sz7xmlte><span data-astro-cid-sz7xmlte>FAQ</span></a>
        </li>
        <li data-astro-cid-sz7xmlte>
          <a href="/terms/" data-astro-cid-sz7xmlte><span data-astro-cid-sz7xmlte>利用規約</span></a>
        </li>
        <li data-astro-cid-sz7xmlte>
          <a href="/privacy/" data-astro-cid-sz7xmlte><span data-astro-cid-sz7xmlte>プライバシーポリシー</span></a>
        </li>
        <li data-astro-cid-sz7xmlte>
          <a href="/commercial-law/" data-astro-cid-sz7xmlte><span data-astro-cid-sz7xmlte>特定商取引法に基づく表記</span></a>
        </li>
      </ul>
    </div>
    <div class="copyright" data-astro-cid-sz7xmlte><small data-astro-cid-sz7xmlte>© 2025 M-box</small></div>
  </div>
</footer>`;
}, "/Users/bofft/Works/bebo/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const baseUrl = "https://www.bebo-bowel.com";
  const siteName = "Bebo\uFF08\u30D3\u30FC\u30DC\uFF09 | \u304A\u306A\u304B\u306E\u60A9\u307F\u306B\u3001\u7B54\u3048\u3092\u3002";
  const defaultDescription = "Bebo\u306F\u3001\u75C7\u72B6\u7B49\u306B\u5408\u308F\u305B\u305F\u30BB\u30EB\u30D5\u30C1\u30A7\u30C3\u30AF\u3067\u3001\u5E02\u8CA9\u85AC\u30FB\u98DF\u4E8B\u30FB\u751F\u6D3B\u7FD2\u6163\u3092\u63D0\u6848\u3057\u307E\u3059\u3002\u9178\u5316\u30DE\u30B0\u30CD\u30B7\u30A6\u30E0\u4FBF\u79D8\u85AC\u3084\u4E73\u9178\u83CC\u6574\u8178\u5264\u306A\u3069\u5E02\u8CA9\u85AC\u306E\u9078\u3073\u65B9\u3082\u30B5\u30DD\u30FC\u30C8\u3002";
  const defaultOgpImage = baseUrl + "/assets/img/common/ogp.webp";
  const defaultOgpUrl = baseUrl;
  const defaultKeywords = "\u4FBF\u79D8, \u8178\u30B1\u30A2, \u304A\u8179\u306E\u60A9\u307F, \u5E02\u8CA9\u85AC, \u5C02\u9580\u5BB6\u76E3\u4FEE";
  const {
    title = siteName,
    description = defaultDescription,
    keywords = defaultKeywords,
    ogpImage = defaultOgpImage,
    ogpUrl = defaultOgpUrl,
    hasFooter = true,
    showHeaderLogo = false,
    signOut = false,
    isCheckout = false,
    isHeaderInvert = false
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{}]);
  return renderTemplate(_a || (_a = __template(['<html lang="ja"', `>
  <head>
    <!-- Google Tag Manager -->
    <script>
      ;(function (w, d, s, l, i) {
        w[l] = w[l] || []
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : ''
        j.async = true
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
        f.parentNode.insertBefore(j, f)
      })(window, document, 'script', 'dataLayer', 'GTM-N5XXNR7W')
    <\/script>
    <!-- End Google Tag Manager -->
    <meta charset="UTF-8">
    <title>`, '</title>\n    <meta name="description"', '>\n    <meta property="og:title"', '>\n    <meta property="og:description"', '>\n    <meta property="og:site_name"', '>\n    <meta property="og:image"', '>\n    <meta property="og:url"', '>\n    <meta name="keywords"', '>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n    <link rel="icon" href="/assets/img/common/favicon.ico">\n    <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/common/apple-touch-icon.png">\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;700&display=swap" rel="stylesheet">\n    <link rel="stylesheet" href="https://use.typekit.net/qnm0nso.css">\n    <meta name="format-detection" content="telephone=no">\n    ', "\n  ", "</head>\n  <body", '>\n    <!-- Google Tag Manager (noscript) -->\n    <noscript>\n      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5XXNR7W" height="0" width="0"', '></iframe>\n    </noscript>\n    <!-- End Google Tag Manager (noscript) -->\n    <div id="wrapper"', ">\n      ", '\n      <div class="Container"', ">\n        ", "\n      </div>\n      ", '\n    </div>\n    <div id="cover"', "></div>\n  </body></html>"])), addAttribute($$definedVars, "style"), title, addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(siteName, "content"), addAttribute(ogpImage, "content"), addAttribute(ogpUrl, "content"), addAttribute(keywords, "content"), renderScript($$result, "/Users/bofft/Works/bebo/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), addAttribute($$definedVars, "style"), addAttribute(`${"display:none;visibility:hidden"}; ${$$definedVars}`, "style"), addAttribute($$definedVars, "style"), renderComponent($$result, "Header", $$Header, { "showHeaderLogo": showHeaderLogo, "signOut": signOut, "isCheckout": isCheckout, "isHeaderInvert": isHeaderInvert }), addAttribute($$definedVars, "style"), renderSlot($$result, $$slots["default"]), hasFooter && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`, addAttribute($$definedVars, "style"));
}, "/Users/bofft/Works/bebo/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Btn as a };
