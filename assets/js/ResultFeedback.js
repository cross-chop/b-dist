import { c as createComponent, d as createAstro, m as maybeRenderHead, f as renderSlot, a as renderTemplate, r as renderComponent, b as renderScript, e as addAttribute, u as unescapeHTML } from './astro/server.js';
import 'kleur/colors';
import 'clsx';
/* empty css                                */
import { $ as $$SecondPageTitle } from './SecondPageTitle.js';
import { r as resultEyePosition, a as resultShapes, b as resultColors } from './resultCharacter.js';
import { a as $$Btn } from './Layout.js';
import { $ as $$ProductItem, p as productsData, a as $$WaveSeparator } from './ProductItem.js';

const $$Astro$6 = createAstro();
const $$ResultContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ResultContent;
  const hasBottom = Astro2.slots.has("bottom");
  return renderTemplate`${maybeRenderHead()}<div class="ResultContent" data-astro-cid-tju4poqs>
  <div class="content" data-astro-cid-tju4poqs>
    ${renderSlot($$result, $$slots["content"])}
  </div>
  ${hasBottom && renderTemplate`<div class="bottom" data-astro-cid-tju4poqs>
        ${renderSlot($$result, $$slots["bottom"])}
      </div>`}
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/bofft/Works/bebo/src/components/ResultContent.astro", void 0);

const $$Astro$5 = createAstro();
const $$ResultCharacter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ResultCharacter;
  const { character } = Astro2.props;
  const shapes = resultShapes[character];
  const color = resultColors[character];
  const eye = resultEyePosition[character];
  const eyeLeft = `${eye[0] / 200 * 100}%`;
  const eyeTop = `${eye[1] / 120 * 100}%`;
  return renderTemplate`${renderComponent($$result, "result-character", "result-character", { "class": "ResultCharacter", "data-character": character, "style": `--result-character-color:${color};--result-character-eye-left:${eyeLeft};--result-character-eye-top:${eyeTop};`, "data-astro-cid-amzcvyo4": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<svg class="shape" viewBox="0 0 200 120" fill="none" data-astro-cid-amzcvyo4>
    <path class="base"${addAttribute(shapes[0], "d")} data-astro-cid-amzcvyo4></path>
  </svg>
  <div class="eye" data-astro-cid-amzcvyo4>
    <div class="eye1" data-astro-cid-amzcvyo4></div>
    <div class="eye2" data-astro-cid-amzcvyo4></div>
    <div class="eye3" data-astro-cid-amzcvyo4></div>
    <div class="eye4" data-astro-cid-amzcvyo4></div>
    <div class="eye5" data-astro-cid-amzcvyo4></div>
  </div>
` })}

${renderScript($$result, "/Users/bofft/Works/bebo/src/components/ResultCharacter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/bofft/Works/bebo/src/components/ResultCharacter.astro", void 0);

const $$Astro$4 = createAstro();
const $$ResultDiagnosis = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ResultDiagnosis;
  const { constipationType, drugType } = Astro2.props;
  const summaryData = {
    "atonic-constipation": '\u3042\u306A\u305F\u306F<br class="sp" />\u300C<span class="type">\u5F1B\u7DE9\u6027\u4FBF\u79D8<span class="ruby">(\u3057\u304B\u3093\u305B\u3044\u3079\u3093\u3074)</span></span>\u300D<br />\u306E\u50BE\u5411\u304C\u3042\u308A\u307E\u3059\u3002',
    "rectal-constipation": '\u3042\u306A\u305F\u306F\u300C<span class="type">\u76F4\u8178\u6027\u4FBF\u79D8</span>\u300D\u306E<br class="sp" />\u50BE\u5411\u304C\u3042\u308A\u307E\u3059\u3002',
    "spastic-constipation": '\u3042\u306A\u305F\u306F<br class="sp" />\u300C<span class="type">\u3051\u3044\u308C\u3093\u6027\u4FBF\u79D8</span>\u300D\u306E<br class="sp" />\u50BE\u5411\u304C\u3042\u308A\u307E\u3059\u3002',
    hemorrhoids: '\u73FE\u5728\u3001\u3042\u306A\u305F\u306B\u306F<br class="sp" />\u4FBF\u79D8\u306E\u50BE\u5411\u306F<br />\u3042\u307E\u308A\u898B\u3089\u308C\u307E\u305B\u3093\u304C\u3001<br />\u300C<span class="type">\u75D4</span>\u300D\u3078\u306E\u6CE8\u610F\u304C\u5FC5\u8981\u3067\u3059\u3002',
    "no-constipation": '\u73FE\u5728\u3001\u3042\u306A\u305F\u306B\u306F<br /><span class="type">\u4FBF\u79D8\u306E\u50BE\u5411\u306F<br class="sp" />\u3042\u307E\u308A\u898B\u3089\u308C\u307E\u305B\u3093</span>\u3002',
    "warning-symptoms": '\u73FE\u5728\u3001\u3042\u306A\u305F\u306B\u306F<br /><span class="type">\u4FBF\u79D8\u306E\u50BE\u5411\u306F<br class="sp" />\u3042\u307E\u308A\u898B\u3089\u308C\u307E\u305B\u3093</span>\u3002',
    "warning-medication": '\u3042\u306A\u305F\u306E\u56DE\u7B54\u304B\u3089\u3001<br class="sp" /><span class="type">\u670D\u7528\u3057\u3066\u3044\u308B\u304A\u85AC\u304C\u539F\u56E0<br class="sp" />\u3067<br class="pc" />\u4FBF\u79D8\u3092\u5F15\u304D\u8D77\u3053\u3057\u3066\u3044\u308B<br class="sp" />\u53EF\u80FD\u6027</span>\u304C\u8003\u3048\u3089\u308C\u307E\u3059\u3002'
  };
  const standardNote = "\u203B\u672C\u30C1\u30A7\u30C3\u30AF\u306F\u533B\u7642\u8A3A\u65AD\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u75C7\u72B6\u304C\u9577\u5F15\u304F\u5834\u5408\u306F\u533B\u5E2B\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002<br />\u203B\u81EA\u5DF1\u5224\u65AD\u306B\u4E0D\u5B89\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u533B\u5E2B\u307E\u305F\u306F\u85AC\u5264\u5E2B\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002";
  const NoNeedMedicineNote = "\u203B\u672C\u30C1\u30A7\u30C3\u30AF\u306F\u533B\u7642\u8A3A\u65AD\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u4ECA\u306F\u5E02\u8CA9\u85AC\u306E\u4F7F\u7528\u306F\u5FC5\u8981\u306A\u3044\u3068\u8003\u3048\u3089\u308C\u307E\u3059\u304C\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u5C02\u9580\u5BB6\u3078\u306E\u76F8\u8AC7\u3082\u3054\u6D3B\u7528\u304F\u3060\u3055\u3044\u3002<br />\u203B\u81EA\u5DF1\u5224\u65AD\u306B\u4E0D\u5B89\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u533B\u5E2B\u307E\u305F\u306F\u85AC\u5264\u5E2B\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002";
  const balloon1Data = {
    "atonic-constipation": '<span>\u304A\u8179\u306E\u52D5\u304D\u304C</span><span class="hl">\u3086\u3063\u304F\u308A</span><span>\u3067\u3001</span><span class="hl">\u4FBF\u304C\u786C\u304F\u306A\u308A\u3084\u3059\u3044</span><span>\u30BF\u30A4\u30D7\u3060\u306D\uFF01</span>',
    "rectal-constipation": '<span class="hl">\u4FBF\u610F\u3092\u6211\u6162\u3059\u308B</span><span>\u3053\u3068\u304C\u591A\u304F\u3001</span><span class="hl">\u30C8\u30A4\u30EC\u306E\u30BF\u30A4\u30DF\u30F3\u30B0\u3092\u9003\u3057\u3084\u3059\u3044</span><span>\u30BF\u30A4\u30D7\u3060\u306D\uFF01</span>',
    "spastic-constipation": '<span class="hl">\u30B9\u30C8\u30EC\u30B9\u3084\u7DCA\u5F35</span><span>\u3067\u3001</span><span class="hl">\u304A\u8179\u304C\u654F\u611F</span><span>\u306B\u306A\u308A\u3084\u3059\u3044\u30BF\u30A4\u30D7\u3060\u306D\uFF01</span>',
    hemorrhoids: '<span>\u6392\u4FBF\u6642\u306E\u8CA0\u62C5\u3067\u3001</span><span class="hl">\u304A\u5C3B\u306B\u30C0\u30E1\u30FC\u30B8</span><span>\u304C\u304B\u304B\u3063\u3066\u3044\u308B\u304B\u3082\uFF01</span>',
    "no-constipation": '<span>\u8178\u306E\u8ABF\u5B50\u3092\u4FDD\u3066\u3066\u3044\u308B\u3001</span><span class="hl">\u3044\u3044\u72B6\u614B</span><span>\u307F\u305F\u3044\uFF01</span>',
    "warning-symptoms": '<span>\u4FBF\u306E\u72B6\u614B\u3084\u304A\u8179\u306E\u4E0D\u8ABF\u306B\u3001</span><span class="hl">\u6CE8\u610F\u304C\u5FC5\u8981\u304B\u3082</span><span>\u3057\u308C\u306A\u3044\u306D\u3002</span>',
    "warning-medication": '<span class="hl">\u98F2\u3093\u3067\u3044\u308B\u304A\u85AC\u306E\u5F71\u97FF</span><span>\u3067\u3001\u8178\u306E\u52D5\u304D\u304C\u3086\u3063\u304F\u308A\u306B\u306A\u3063\u3066\u3044\u308B\u304B\u3082\uFF01</span>'
  };
  const balloon2Data = {
    "atonic-constipation_mg": '<span class="hl">\u3084\u3055\u3057\u304F\u52B9\u3044\u3066</span><span>\u3001\u6BCE\u65E5</span><span class="hl">\u7D9A\u3051\u3084\u3059\u3044\u304A\u85AC</span><span>\u304C\u304A\u3059\u3059\u3081\u3060\u3088\u25CE</span>',
    "atonic-constipation_bisa": '<span class="hl">\u8178\u306E\u52D5\u304D\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u304A\u85AC</span><span>\u304C\u304A\u3059\u3059\u3081\u3060\u3088\u25CE</span>',
    "atonic-constipation_kampo": '<span>\u300C</span><span class="hl">\u81EA\u7136\u6D3E</span><span>\u300D\u306A\u3042\u306A\u305F\u306B\u304A\u3059\u3059\u3081\u3060\u3088\u25CE</span>',
    "rectal-constipation_mg": '<span>\u4FBF\u610F\u3092\u611F\u3058\u305F\u3089\u65E9\u3081\u306B\u30C8\u30A4\u30EC\u3078\uFF01</span><span class="hl">\u8178\u306E\u30EA\u30BA\u30E0\u3092\u6574\u3048\u308B\u30B1\u30A2</span><span>\u304C\u304A\u3059\u3059\u3081\u3060\u3088\u25CE</span>',
    "rectal-constipation_bisa": '<span class="hl">\u8178\u306E\u52D5\u304D\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u304A\u85AC</span><span>\u304C\u304A\u3059\u3059\u3081\u3060\u3088\u25CE</span>',
    "rectal-constipation_kampo": '<span>\u300C</span><span class="hl">\u81EA\u7136\u6D3E</span><span>\u300D\u306A\u3042\u306A\u305F\u306B\u304A\u3059\u3059\u3081\u3060\u3088\u25CE</span>',
    "spastic-constipation_mg": '<span>\u304A\u8179\u306B</span><span class="hl">\u3084\u3055\u3057\u3044\u30B1\u30A2</span><span>\u3067\u3001</span><span class="hl">\u8178\u306E\u30EA\u30BA\u30E0\u3092\u6574\u3048\u3066</span><span>\u3044\u304F\u306E\u304C\u304A\u3059\u3059\u3081\u25CE</span>',
    hemorrhoids_hemorrhoids: '<span class="hl">\u4FBF\u3092\u3084\u308F\u3089\u304B\u304F</span><span>\uFF06</span><span class="hl">\u304A\u5C3B\u3078\u306E\u8CA0\u62C5\u3092\u6E1B\u3089\u3059</span><span>\u30B1\u30A2\u304C\u304A\u3059\u3059\u3081\u3060\u3088\u25CE</span>',
    "no-constipation_probiotics": '<span>\u4ECA\u306E\u3046\u3061\u304B\u3089</span><span class="hl">\u6574\u3048\u308B\u7FD2\u6163\u3092\u7D9A\u3051\u3066</span><span>\u3001\u201C</span><span class="hl">\u4E71\u308C\u306B\u304F\u3044\u8178</span><span>\u201D\u3092\u76EE\u6307\u305D\u3046\u25CE</span>',
    "no-constipation_mg": '<span>\u4ECA\u306E\u3046\u3061\u304B\u3089</span><span class="hl">\u6574\u3048\u308B\u7FD2\u6163\u3092\u7D9A\u3051\u3066</span><span>\u3001\u201C</span><span class="hl">\u4E71\u308C\u306B\u304F\u3044\u8178</span><span>\u201D\u3092\u76EE\u6307\u305D\u3046\u25CE</span>',
    "warning-symptoms_probiotics": '<span>\u6C17\u306B\u306A\u308B\u75C7\u72B6\u304C\u7D9A\u304F\u5834\u5408\u306F\u3001</span><span class="hl">\u65E9\u3081\u306B\u533B\u7642\u6A5F\u95A2\u3078\u76F8\u8AC7</span><span>\u3059\u308B\u306E\u304C\u304A\u3059\u3059\u3081\u25CE</span>',
    "warning-medication_probiotics": '<span>\u81EA\u5DF1\u5224\u65AD\u3067\u3084\u3081\u305A\u306B\u3001</span><span class="hl">\u307E\u305A\u306F\u533B\u5E2B\u3084\u85AC\u5264\u5E2B\u3078\u76F8\u8AC7</span><span>\u3059\u308B\u306E\u304C\u304A\u3059\u3059\u3081\u25CE</span>'
  };
  const aboutData = {
    "atonic-constipation": {
      illust: "/assets/img/type-check/result/atonic-constipation.webp",
      title: "\u5F1B\u7DE9\u6027\u4FBF\u79D8\u3068\u306F\uFF1F",
      description: "\u5927\u8178\u306E\u7B4B\u8089\u306E\u7DCA\u5F35\u304C\u4F4E\u4E0B\u3057\u3066\u8178\u306E\u52D5\u304D\u304C\u5F31\u304F\u306A\u308B\u30BF\u30A4\u30D7\u3067\u3059\u3002\u7279\u306B\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u75C7\u72B6\u306B\u6CE8\u610F\u3067\u3059\u3002",
      checks: [
        "\u6570\u65E5\u304A\u304D\u306B\u3057\u304B\u4FBF\u610F\u304C\u306A\u3044",
        "\u4FBF\u304C\u786C\u304F\u30B3\u30ED\u30B3\u30ED\u3057\u3066\u3044\u308B",
        "\u304A\u8179\u304C\u5F35\u3063\u305F\u611F\u899A\u304C\u3042\u308B",
        "\u904B\u52D5\u4E0D\u8DB3\u30FB\u98DF\u4E8B\u91CF\u306E\u6E1B\u5C11\u306A\u3069"
      ]
    },
    "rectal-constipation": {
      illust: "/assets/img/type-check/result/rectal-constipation.webp",
      title: "\u76F4\u8178\u6027\u4FBF\u79D8\u3068\u306F\uFF1F",
      description: "\u4FBF\u610F\u3092\u6211\u6162\u3059\u308B\u3053\u3068\u304C\u7D9A\u304F\u3068\u3001\u4FBF\u610F\u3092\u611F\u3058\u306B\u304F\u304F\u306A\u308B\u30BF\u30A4\u30D7\u3067\u3059\u3002\u7279\u306B\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u75C7\u72B6\u306B\u6CE8\u610F\u3067\u3059\u3002",
      checks: [
        "\u51FA\u305D\u3046\u306A\u306E\u306B\u3046\u307E\u304F\u51FA\u306A\u3044",
        "\u4FBF\u610F\u3092\u6211\u6162\u3059\u308B\u3053\u3068\u304C\u591A\u3044",
        "\u6392\u4FBF\u5F8C\u3082\u30B9\u30C3\u30AD\u30EA\u3057\u306A\u3044",
        "\u30C8\u30A4\u30EC\u306B\u884C\u304F\u30BF\u30A4\u30DF\u30F3\u30B0\u304C\u3068\u308A\u306B\u304F\u3044"
      ]
    },
    "spastic-constipation": {
      illust: "/assets/img/type-check/result/spastic-constipation.webp",
      title: "\u3051\u3044\u308C\u3093\u6027\u4FBF\u79D8\u3068\u306F\uFF1F",
      description: "\u30B9\u30C8\u30EC\u30B9\u3084\u7DCA\u5F35\u306A\u3069\u3067\u8178\u304C\u904E\u5270\u306B\u53CD\u5FDC\u3057\u3001\u4FBF\u304C\u9032\u307F\u306B\u304F\u304F\u306A\u308B\u30BF\u30A4\u30D7\u3067\u3059\u3002\u7279\u306B\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u75C7\u72B6\u306B\u6CE8\u610F\u3067\u3059\u3002",
      checks: [
        "\u30B3\u30ED\u30B3\u30ED\u3057\u305F\u5C0F\u3055\u306A\u4FBF\u304C\u51FA\u3084\u3059\u3044",
        "\u304A\u8179\u304C\u5F35\u308A\u3084\u3059\u3044\u30FB\u30AC\u30B9\u304C\u305F\u307E\u308A\u3084\u3059\u3044",
        "\u6392\u4FBF\u5F8C\u3082\u30B9\u30C3\u30AD\u30EA\u3057\u306A\u3044",
        "\u30B9\u30C8\u30EC\u30B9\u3067\u304A\u8179\u306E\u8ABF\u5B50\u304C\u5909\u308F\u308A\u3084\u3059\u3044"
      ]
    },
    hemorrhoids: {
      illust: "/assets/img/type-check/result/hemorrhoids.webp",
      title: "\u75D4\u3068\u306F\uFF1F",
      description: "\u6392\u4FBF\u6642\u306E\u3044\u304D\u307F\u3084\u8CA0\u62C5\u306B\u3088\u3063\u3066\u3001\u809B\u9580\u307E\u308F\u308A\u306B\u708E\u75C7\u3084\u50B7\u304C\u8D77\u3053\u308B\u72B6\u614B\u3067\u3059\u3002\u7279\u306B\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u75C7\u72B6\u306B\u6CE8\u610F\u3067\u3059\u3002",
      checks: [
        "\u6392\u4FBF\u6642\u306B\u75DB\u307F\u3084\u9055\u548C\u611F\u304C\u3042\u308B",
        "\u51FA\u8840\u3084\u30D2\u30EA\u30D2\u30EA\u611F\u304C\u6C17\u306B\u306A\u308B",
        "\u4FBF\u304C\u786C\u304F\u3001\u3044\u304D\u3080\u3053\u3068\u304C\u591A\u3044",
        "\u9577\u6642\u9593\u5EA7\u308B\u3053\u3068\u304C\u591A\u3044\u30FB\u6392\u4FBF\u3092\u6211\u6162\u3057\u304C\u3061"
      ]
    },
    "no-constipation": {
      illust: "/assets/img/type-check/result/no-constipation.webp",
      title: "\u8178\u5185\u74B0\u5883\u306F\u65E5\u3005\u5909\u5316\u3057\u307E\u3059\u3002",
      description: "\u4ECA\u306F\u5927\u304D\u306A\u4FBF\u79D8\u50BE\u5411\u306F\u898B\u3089\u308C\u307E\u305B\u3093\u304C\u3001\u30B9\u30C8\u30EC\u30B9\u3084\u751F\u6D3B\u7FD2\u6163\u306E\u4E71\u308C\u3067\u3001\u8178\u306E\u8ABF\u5B50\u306F\u5909\u5316\u3057\u3084\u3059\u304F\u306A\u308A\u307E\u3059\u3002\u7279\u306B\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u5909\u5316\u306B\u306F\u6CE8\u610F\u3067\u3059\u3002",
      checks: [
        "\u30B9\u30C8\u30EC\u30B9\u3067\u304A\u8179\u306E\u8ABF\u5B50\u304C\u5909\u308F\u308A\u3084\u3059\u3044",
        "\u98DF\u751F\u6D3B\u304C\u4E71\u308C\u304C\u3061",
        "\u7761\u7720\u4E0D\u8DB3\u3084\u751F\u6D3B\u30EA\u30BA\u30E0\u306E\u4E71\u308C",
        "\u304A\u8179\u306E\u5F35\u308A\u3084\u4E0D\u5FEB\u611F\u3092\u611F\u3058\u308B\u3053\u3068\u304C\u3042\u308B"
      ]
    },
    "warning-symptoms": {
      illust: "/assets/img/type-check/result/warning.webp",
      title: "\u6C17\u306B\u306A\u308B\u75C7\u72B6\u306F\u3042\u308A\u307E\u305B\u3093\u304B\uFF1F",
      description: "\u4FBF\u79D8\u306B\u52A0\u3048\u3066\u3001\u5F37\u3044\u75DB\u307F\u3084\u51FA\u8840\u306A\u3069\u306E\u75C7\u72B6\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u8178\u306E\u75C5\u6C17\u304C\u96A0\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u3082\u3042\u308A\u307E\u3059\u3002\u7279\u306B\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u75C7\u72B6\u306B\u6CE8\u610F\u3067\u3059\u3002",
      checks: [
        "\u4FBF\u306B\u8840\u304C\u6DF7\u3058\u3063\u3066\u3044\u308B\uFF08\u9BAE\u3084\u304B\u306A\u8D64\u30FB\u9ED2\u3063\u307D\u3044\u8272\uFF09",
        "\u4FBF\u304C\u6975\u7AEF\u306B\u7D30\u3044\u30FB\u5F62\u304C\u3044\u3064\u3082\u3068\u9055\u3046",
        "\u4F55\u65E5\u3082\u4FBF\u304C\u51FA\u305A\u3001\u304A\u8179\u306E\u5F35\u308A\u3084\u75DB\u307F\u304C\u5F37\u3044",
        "\u6700\u8FD1\u3001\u610F\u56F3\u3057\u306A\u3044\u4F53\u91CD\u6E1B\u5C11\u304C\u3042\u308B"
      ]
    },
    "warning-medication": {
      illust: "/assets/img/type-check/result/warning.webp",
      title: "\u4FBF\u79D8\u3092\u5F15\u304D\u8D77\u3053\u3057\u3084\u3059\u3044\u85AC\u306B\u306F\u3053\u3093\u306A\u3082\u306E\u304C\u3042\u308A\u307E\u3059",
      description: "\u85AC\u306E\u7A2E\u985E\u306B\u3088\u3063\u3066\u306F\u3001\u526F\u4F5C\u7528\u3068\u3057\u3066\u4FBF\u304C\u51FA\u306B\u304F\u304F\u306A\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u7279\u306B\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u304A\u85AC\u306F\u6CE8\u610F\u3067\u3059\u3002",
      checks: ["\u93AE\u75DB\u85AC", "\u9244\u5264", "\u4E00\u90E8\u306E\u6297\u3046\u3064\u85AC\u30FB\u6297\u4E0D\u5B89\u85AC", "\u30A2\u30EC\u30EB\u30AE\u30FC\u85AC", "\u4E00\u90E8\u306E\u8840\u5727\u3092\u4E0B\u3052\u308B\u85AC"]
    }
  };
  const note = constipationType === "no-constipation" || constipationType === "warning-symptoms" || constipationType === "warning-medication" ? NoNeedMedicineNote : standardNote;
  const summary = summaryData[constipationType] ?? summaryData["atonic-constipation"];
  const about = aboutData[constipationType] ?? aboutData["atonic-constipation"];
  const balloon1 = balloon1Data[constipationType] ?? balloon1Data["atonic-constipation"];
  const balloon2 = balloon2Data[`${constipationType}_${drugType}`] ?? balloon2Data["atonic-constipation_mg"];
  const drugColors = {
    mg: "#4092DE",
    bisa: "#FF46AD",
    kampo: "#4AAA70",
    hemorrhoids: "#F19E13",
    probiotics: "#005AD4"
  };
  const color = drugColors[drugType] ?? drugColors["mg"];
  return renderTemplate`${maybeRenderHead()}<div class="ResultDiagnosis \${drugType}"${addAttribute(`--color: ${color}`, "style")} data-astro-cid-74l6gkf4>
  <div class="head" data-astro-cid-74l6gkf4>
    ${renderComponent($$result, "SecondPageTitle", $$SecondPageTitle, { "title": "\u3042\u306A\u305F\u306E\u4FBF\u79D8\u30BF\u30A4\u30D7", "data-astro-cid-74l6gkf4": true })}
    <h1 class="summary" data-astro-cid-74l6gkf4>${unescapeHTML(summary)}</h1>
  </div>

  <!-- キャラクター＋吹き出し -->
  <div class="character" data-astro-cid-74l6gkf4>
    <div class="balloon" data-astro-cid-74l6gkf4>
      <p data-astro-cid-74l6gkf4>${unescapeHTML(balloon1)}</p>
      <div class="line" data-astro-cid-74l6gkf4></div>
      <p data-astro-cid-74l6gkf4>${unescapeHTML(balloon2)}</p>
    </div>
    <div class="chara" data-astro-cid-74l6gkf4>
      ${renderComponent($$result, "ResultCharacter", $$ResultCharacter, { "character": drugType, "data-astro-cid-74l6gkf4": true })}
    </div>
  </div>

  <!-- 〜とは？カード -->
  <div class="aboutCard" data-astro-cid-74l6gkf4>
    <div class="inner" data-astro-cid-74l6gkf4>
      <div class="illust" data-astro-cid-74l6gkf4><img${addAttribute(about?.illust, "src")} alt="" data-astro-cid-74l6gkf4></div>
      <div class="body" data-astro-cid-74l6gkf4>
        <div class="text" data-astro-cid-74l6gkf4>
          <h2 data-astro-cid-74l6gkf4>${about?.title}</h2>
          <p data-astro-cid-74l6gkf4>${unescapeHTML(about.description)}</p>
        </div>
        <ul class="checkList" data-astro-cid-74l6gkf4>
          ${about?.checks.map((item) => renderTemplate`<li data-astro-cid-74l6gkf4>
                <span class="icn" data-astro-cid-74l6gkf4>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" data-astro-cid-74l6gkf4>
                    <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#60C76D" data-astro-cid-74l6gkf4></path>
                    <path d="M5 7.66667L7.33333 10L11.3333 6" fill="#60C76D" data-astro-cid-74l6gkf4></path>
                    <path d="M5 7.66667L7.33333 10L11.3333 6" stroke="white" stroke-width="2" data-astro-cid-74l6gkf4></path>
                  </svg>
                </span>
                <span class="txt" data-astro-cid-74l6gkf4>${item}</span>
              </li>`)}
        </ul>
      </div>
    </div>
    <p class="note" data-astro-cid-74l6gkf4>${unescapeHTML(note)}</p>
    ${constipationType === "warning-medication" && renderTemplate`${renderComponent($$result, "Btn", $$Btn, { "href": "/consultation/", "size": "M", "type": "outline", "text": "\u85AC\u5264\u5E2B\u306B\u76F8\u8AC7\u3059\u308B", "data-astro-cid-74l6gkf4": true })}`}
  </div>
</div>`;
}, "/Users/bofft/Works/bebo/src/components/ResultDiagnosis.astro", void 0);

const $$Astro$3 = createAstro();
const $$ResultRecommend = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ResultRecommend;
  const { productId, drugType, constipationType } = Astro2.props;
  const recommendData = {
    mg: {
      recommendTitle: '\u3042\u306A\u305F\u306E\u4FBF\u79D8\u30BF\u30A4\u30D7\u306B<br class="sp" />\u6700\u3082\u304A\u3059\u3059\u3081\uFF01<br />\u300C\u9178\u5316\u30DE\u30B0\u30CD\u30B7\u30A6\u30E0\u300D',
      whyIllust: "/assets/img/type-check/result/illust_mgo.webp",
      whyReasons: [
        "\u6C34\u5206\u3092\u96C6\u3081\u3066\u3001\u786C\u3044\u4FBF\u3092\u3084\u308F\u3089\u304B\u304F\u3057\u307E\u3059\u3002",
        "\u523A\u6FC0\u3092\u4E0E\u3048\u305A\u3001\u81EA\u7136\u306A\u304A\u901A\u3058\u3092\u30B5\u30DD\u30FC\u30C8\u3002",
        "\u6BCE\u65E5\u7D9A\u3051\u3084\u3059\u304F\u3001\u30AF\u30BB\u306B\u306A\u308A\u306B\u304F\u3044\u306E\u3082\u7279\u5FB4\u3067\u3059\u3002"
      ],
      whyAccordion: [
        {
          title: "\u25CF\u52B9\u679C",
          items: [
            "\u8178\u3092\u52D5\u304B\u3055\u305A\u3001\u6C34\u5206\u306E\u529B\u3067\u6392\u4FBF\u3092\u30B5\u30DD\u30FC\u30C8",
            "\u670D\u7528\u5F8C6\u301C12\u6642\u9593\u3067\u52B9\u679C\u3002\u671D\u306E\u304A\u901A\u3058\u306B\u3082\u25CE",
            "\u8179\u75DB\u3084\u30AF\u30BB\u304C\u8D77\u304D\u306B\u304F\u3044\u3084\u3055\u3057\u3044\u4F5C\u7528"
          ]
        },
        {
          title: "\u25CF\u3053\u3093\u306A\u65B9\u306B\u304A\u3059\u3059\u3081",
          items: [
            "\u4FBF\u304C\u786C\u304F\u3066\u51FA\u306B\u304F\u3044\u65B9",
            "\u8178\u306E\u52D5\u304D\u304C\u5F31\u304F\u306A\u3063\u3066\u304D\u305F\u9AD8\u9F62\u8005\u306E\u65B9",
            "\u523A\u6FC0\u6027\u306E\u4FBF\u79D8\u85AC\u3067\u304A\u8179\u304C\u75DB\u304F\u306A\u308B\u65B9",
            "\u9577\u304F\u4F7F\u3048\u308B\u5B89\u5FC3\u306A\u4FBF\u79D8\u85AC\u3092\u63A2\u3057\u3066\u3044\u308B\u65B9"
          ]
        },
        {
          title: "\u25CF\u6CE8\u610F\u4E8B\u9805",
          items: [
            "\u6C34\u3068\u4E00\u7DD2\u306B\u98F2\u3080\u3068\u52B9\u679C\u304C\u51FA\u3084\u3059\u304F\u306A\u308A\u307E\u3059",
            "\u814E\u81D3\u306B\u6301\u75C5\u304C\u3042\u308B\u65B9\u306F\u3001\u533B\u5E2B\u307E\u305F\u306F\u85AC\u5264\u5E2B\u306B\u76F8\u8AC7\u3057\u3066\u304B\u3089\u3054\u4F7F\u7528\u304F\u3060\u3055\u3044",
            "\u52B9\u679C\u304C\u306A\u3044\u5834\u5408\u306F\u3001\u7121\u7406\u306B\u91CF\u3092\u5897\u3084\u3055\u305A\u3001\u533B\u7642\u6A5F\u95A2\u306B\u76F8\u8AC7\u3057\u3066\u304F\u3060\u3055\u3044"
          ]
        }
      ]
    },
    bisa: {
      recommendTitle: '\u3042\u306A\u305F\u306E\u4FBF\u79D8\u30BF\u30A4\u30D7\u306B<br class="sp" />\u6700\u3082\u304A\u3059\u3059\u3081\uFF01<br />\u300C\u30D3\u30B5\u30B3\u30B8\u30EB\u300D',
      whyIllust: "/assets/img/type-check/result/illust_bisa.webp",
      whyReasons: [
        "\u30D3\u30B5\u30B3\u30B8\u30EB\u304C\u8178\u3092\u523A\u6FC0\u3057\u3066\u3001\u6392\u4FBF\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002",
        "\u300C\u4ECA\u3059\u3050\u306A\u3093\u3068\u304B\u3057\u305F\u3044\u300D\u3068\u304D\u306E\u6392\u4FBF\u30B5\u30DD\u30FC\u30C8\u306B\u25CE",
        "\u5FC5\u8981\u306A\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u4F7F\u3044\u3084\u3059\u3044\u3001\u30D4\u30F3\u30AF\u306E\u5C0F\u7C92\u306E\u304A\u85AC\u3067\u3059\u3002"
      ],
      whyAccordion: [
        {
          title: "\u25CF\u52B9\u679C",
          items: [
            "\u8178\u3092\u523A\u6FC0\u3057\u3066\u305C\u3093\u52D5\u904B\u52D5\u3092\u4FC3\u3059",
            "\u6392\u4FBF\u529B\u304C\u5F31\u3044\u3068\u304D\u306B\u78BA\u304B\u306A\u52B9\u679C\u304C\u671F\u5F85\u3067\u304D\u308B",
            "\u30DE\u30A4\u30EB\u30C9\u306A\u4FBF\u79D8\u85AC\u3067\u52B9\u304B\u306A\u3044\u3068\u304D\u306E\u6B21\u306E\u9078\u629E\u80A2"
          ]
        },
        {
          title: "\u25CF\u3053\u3093\u306A\u65B9\u306B\u304A\u3059\u3059\u3081",
          items: [
            "\u98DF\u4E8B\u3084\u751F\u6D3B\u7FD2\u6163\u306E\u898B\u76F4\u3057\u3060\u3051\u3067\u306F\u6539\u5584\u3057\u306A\u3044\u3001\u9811\u56FA\u306A\u4FBF\u79D8\u306B\u304A\u60A9\u307F\u306E\u65B9\xA0",
            "\u3057\u3063\u304B\u308A\u3068\u3057\u305F\u6392\u4FBF\u52B9\u679C\u3092\u6C42\u3081\u308B\u65B9\xA0"
          ],
          note: "\u203B\u6BCE\u65E5\u306E\u4F7F\u7528\u3092\u76EE\u7684\u3068\u3057\u305F\u85AC\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"
        },
        {
          title: "\u25CF\u6CE8\u610F\u4E8B\u9805",
          items: [
            "\u9023\u7528\u306F\u907F\u3051\u307E\u3057\u3087\u3046\u3002\u30AF\u30BB\u306B\u306A\u308B\u304A\u305D\u308C\u304C\u3042\u308A\u307E\u3059",
            "\u8179\u75DB\u30FB\u4E0B\u75E2\u306E\u526F\u4F5C\u7528\u304C\u51FA\u308B\u3053\u3068\u3082",
            "\u75D9\u6523\u6027\u4FBF\u79D8\u306B\u306F\u9006\u52B9\u679C\u3068\u306A\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059"
          ]
        }
      ]
    },
    kampo: {
      recommendTitle: '\u3042\u306A\u305F\u306E\u4FBF\u79D8\u30BF\u30A4\u30D7\u306B<br class="sp" />\u6700\u3082\u304A\u3059\u3059\u3081\uFF01<br />\u300C\u6F22\u65B9\u4FBF\u79D8\u85AC\u300D',
      whyIllust: "/assets/img/type-check/result/illust_kampo.webp",
      whyReasons: constipationType === "rectal-constipation" ? [
        "\u751F\u85AC\u306E\u529B\u3067\u8178\u306E\u52D5\u304D\u3092\u9AD8\u3081\u3001\u6392\u4FBF\u3092\u4FC3\u3057\u307E\u3059\u3002",
        "\u81EA\u7136\u306B\u8FD1\u3044\u304A\u901A\u3058\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002",
        "\u4FBF\u610F\u3092\u611F\u3058\u306B\u304F\u304F\u3001\u51FA\u53E3\u3067\u4FBF\u304C\u6E9C\u307E\u308A\u304C\u3061\u306A\u65B9\u306B\u304A\u3059\u3059\u3081\u3067\u3059\u3002"
      ] : (
        //弛緩性便秘
        [
          "\u751F\u85AC\u306E\u529B\u3067\u8178\u306E\u52D5\u304D\u3092\u9AD8\u3081\u3001\u6392\u4FBF\u3092\u4FC3\u3057\u307E\u3059\u3002",
          "\u81EA\u7136\u306B\u8FD1\u3044\u304A\u901A\u3058\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002",
          "\u4FBF\u79D8\u306B\u4F34\u3046\u304A\u8179\u306E\u5F35\u308A\u306E\u6539\u5584\u304C\u671F\u5F85\u3067\u304D\u307E\u3059\u3002"
        ]
      ),
      whyAccordion: [
        {
          title: "\u25CF\u52B9\u679C",
          items: [
            "\u81EA\u7136\u7531\u6765\u306E\u6210\u5206\u3067\u4FBF\u79D8\u3092\u6539\u5584\u3057\u305F\u3044\u65B9",
            "\u304A\u8179\u306E\u5F35\u308A\u3084\u4E0D\u5FEB\u611F\u304C\u7D9A\u3044\u3066\u3044\u308B\u65B9\xA0",
            "\u6162\u6027\u7684\u306A\u4FBF\u79D8\u306B\u60A9\u3093\u3067\u3044\u308B\u65B9"
          ]
        },
        {
          title: "\u25CF\u3053\u3093\u306A\u65B9\u306B\u304A\u3059\u3059\u3081",
          items: [
            "\u751F\u85AC\u306E\u529B\u3067\u8178\u306E\u52D5\u304D\u3092\u9AD8\u3081\u3001\u6392\u4FBF\u3092\u4FC3\u3059",
            "\u81EA\u7136\u306B\u8FD1\u3044\u304A\u901A\u3058\u3092\u30B5\u30DD\u30FC\u30C8",
            "\u4FBF\u79D8\u306B\u4F34\u3046\u808C\u8352\u308C\u3084\u8179\u90E8\u306E\u4E0D\u5FEB\u611F\u306B\u3082"
          ]
        },
        {
          title: "\u25CF\u6CE8\u610F\u4E8B\u9805",
          items: [
            "\u4F53\u8CEA\u306B\u3088\u308A\u304A\u8179\u304C\u3086\u308B\u304F\u306A\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059",
            "\u521D\u3081\u3066\u306E\u65B9\u306F\u5C11\u91CF\u304B\u3089\u3054\u4F7F\u7528\u304F\u3060\u3055\u3044",
            "\u598A\u5A20\u4E2D\u30FB\u6388\u4E73\u4E2D\u306E\u65B9\u306F\u670D\u7528\u3092\u63A7\u3048\u3066\u304F\u3060\u3055\u3044"
          ]
        }
      ]
    },
    hemorrhoids: {
      recommendTitle: '\u3042\u306A\u305F\u306E\u4FBF\u79D8\u30BF\u30A4\u30D7\u306B<br class="sp" />\u6700\u3082\u304A\u3059\u3059\u3081\uFF01<br />\u300C\u75D4\u7528\u8EDF\u818F\u300D',
      whyIllust: "/assets/img/type-check/result/illust_hemorrhoids.webp",
      whyReasons: [
        "\u60A3\u90E8\u306E\u708E\u75C7\u30FB\u306F\u308C\u30FB\u304B\u3086\u307F\u3092\u3084\u308F\u3089\u3052\u307E\u3059\u3002",
        "\u6392\u4FBF\u6642\u306E\u75DB\u307F\u3084\u9055\u548C\u611F\u3092\u30B1\u30A2\u25CE",
        "\u5207\u308C\u75D4\u30FB\u3044\u307C\u75D4\u306E\u75C7\u72B6\u6539\u5584\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002"
      ],
      whyAccordion: [
        {
          title: "\u25CF\u52B9\u679C",
          items: ["\u60A3\u90E8\u306E\u708E\u75C7\u30FB\u306F\u308C\u30FB\u304B\u3086\u307F\u3092\u6291\u3048\u308B", "\u6392\u4FBF\u6642\u306E\u75DB\u307F\u3084\u8CA0\u62C5\u3092\u3084\u308F\u3089\u3052\u308B", "\u5207\u308C\u75D4\u30FB\u3044\u307C\u75D4\u306E\u75C7\u72B6\u3092\u6539\u5584"]
        },
        {
          title: "\u25CF\u3053\u3093\u306A\u65B9\u306B\u304A\u3059\u3059\u3081",
          items: ["\u6392\u4FBF\u6642\u306B\u30D2\u30EA\u30D2\u30EA\u30FB\u75DB\u307F\u304C\u3042\u308B\u65B9", "\u51FA\u8840\u3084\u9055\u548C\u611F\u304C\u6C17\u306B\u306A\u308B\u65B9", "\u809B\u9580\u307E\u308F\u308A\u3092\u3084\u3055\u3057\u304F\u30B1\u30A2\u3057\u305F\u3044\u65B9"]
        },
        {
          title: "\u25CF\u6CE8\u610F\u4E8B\u9805",
          items: [
            "\u4F7F\u7528\u524D\u306F\u60A3\u90E8\u3092\u6E05\u6F54\u306B\u3057\u3066\u304F\u3060\u3055\u3044",
            "\u672C\u88FD\u54C1\u306F\u30B9\u30C6\u30ED\u30A4\u30C9\u6210\u5206\u3092\u914D\u5408\u3057\u3066\u3044\u307E\u3059",
            "\u598A\u5A20\u4E2D\u30FB\u6388\u4E73\u4E2D\u306E\u65B9\u306F\u4F7F\u7528\u524D\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044"
          ]
        }
      ]
    },
    probiotics: {
      recommendTitle: '\u4FBF\u79D8\u306B\u306A\u308B\u524D\u306B\u3001<br class="sp" />\u65E5\u9803\u304B\u3089\u3067\u304D\u308B\u30B1\u30A2\u3092<br />\u300C\u6574\u8178\u5264\u300D',
      whyIllust: "/assets/img/type-check/result/illust_probiotics.webp",
      whyReasons: [
        "\u5584\u7389\u83CC\u3092\u5897\u3084\u3057\u3066\u3001\u8178\u5185\u30D0\u30E9\u30F3\u30B9\u3092\u6574\u3048\u307E\u3059\u3002",
        "\u304A\u8179\u306E\u5F35\u308A\u3084\u3001\u4FBF\u901A\u306E\u4E71\u308C\u3092\u3084\u3055\u3057\u304F\u30B1\u30A2\u25CE",
        "\u6BCE\u65E5\u7D9A\u3051\u3084\u3059\u304F\u3001\u81EA\u7136\u306A\u304A\u901A\u3058\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002"
      ],
      whyAccordion: [
        {
          title: "\u25CF\u52B9\u679C",
          items: [
            "\u5584\u7389\u83CC\u3092\u5897\u3084\u3057\u8178\u5185\u30D0\u30E9\u30F3\u30B9\u3092\u6574\u3048\u308B\u3053\u3068\u3067\u3001\u30AC\u30B9\u3084\u304A\u8179\u306E\u5F35\u308A\u306E\u8EFD\u6E1B\u306B\u3082",
            "\u7D9A\u3051\u3066\u98F2\u3080\u3053\u3068\u3067\u6392\u4FBF\u306E\u30EA\u30BA\u30E0\u304C\u5B89\u5B9A",
            "\u3086\u308B\u3084\u304B\u306B\u8178\u5185\u74B0\u5883\u3092\u6539\u5584"
          ]
        },
        {
          title: "\u25CF\u3053\u3093\u306A\u65B9\u306B\u304A\u3059\u3059\u3081",
          items: [
            "\u6BCE\u65E5\u81EA\u7136\u306A\u304A\u901A\u3058\u3092\u76EE\u6307\u3057\u305F\u3044\u65B9",
            "\u30B9\u30C8\u30EC\u30B9\u3084\u98DF\u751F\u6D3B\u306E\u4E71\u308C\u3067\u304A\u8179\u306E\u8ABF\u5B50\u304C\u4E0D\u5B89\u5B9A\u306A\u65B9",
            "\u4FBF\u79D8\u3068\u4E0B\u75E2\u3092\u7E70\u308A\u8FD4\u3059\u30BF\u30A4\u30D7\u306E\u65B9",
            "\u523A\u6FC0\u306E\u5F37\u3044\u4FBF\u79D8\u85AC\u304C\u5408\u308F\u306A\u3044\u65B9\u3001\u304A\u8179\u304C\u5F31\u3044\u65B9\xA0",
            "\u598A\u5A20\u4E2D\u30FB\u9AD8\u9F62\u8005\u30FB\u304A\u5B50\u3055\u307E\u306A\u3069\u3001\u3084\u3055\u3057\u3044\u4F5C\u7528\u306E\u304A\u85AC\u3092\u6C42\u3081\u308B\u65B9\xA0"
          ]
        },
        {
          title: "\u25CF\u6CE8\u610F\u4E8B\u9805",
          items: [
            "\u5373\u52B9\u6027\u306F\u306A\u304F\u3001\u6570\u65E5\u301C1\u9031\u9593\u306E\u7D99\u7D9A\u304C\u5FC5\u8981\u3067\u3059",
            "\u6574\u8178\u5264\u306F\u30B5\u30D7\u30EA\u30E1\u30F3\u30C8\u3067\u306F\u306A\u304F\u3001\u56FD\u304C\u52B9\u80FD\u30FB\u52B9\u679C\u3092\u8A8D\u3081\u305F\u533B\u85AC\u54C1\u3067\u3059"
          ]
        }
      ]
    }
  };
  const drugColors = {
    mg: "#88C8F0",
    bisa: "#FF50B6",
    kampo: "#54B37B",
    hemorrhoids: "#FFCF31",
    probiotics: "#0065D9"
  };
  const drugTextColors = {
    mg: "#88C8F0",
    bisa: "#FF50B6",
    kampo: "#54B37B",
    hemorrhoids: "#FF9E0B",
    probiotics: "#0065D9"
  };
  const data = recommendData[drugType] ?? recommendData.mg;
  const { recommendTitle, whyIllust, whyReasons, whyAccordion } = data;
  const color = drugColors[drugType] ?? drugColors["mg"];
  const textColor = drugTextColors[drugType] ?? drugTextColors["mg"];
  return renderTemplate`${maybeRenderHead()}<div class="ResultRecommend"${addAttribute(`--color: ${color}; --text-color: ${textColor}`, "style")} data-astro-cid-gmbn233k>
  <!-- おすすめ市販薬（青枠） -->
  <div class="recommend" data-astro-cid-gmbn233k>
    <div class="rHead" data-astro-cid-gmbn233k>
      <span class="badge" data-astro-cid-gmbn233k>まずは<br data-astro-cid-gmbn233k>これ！</span>
      <p class="rTitle" data-astro-cid-gmbn233k>${unescapeHTML(recommendTitle)}</p>
    </div>
    <div class="rBody" data-astro-cid-gmbn233k>
      ${renderComponent($$result, "ProductItem", $$ProductItem, { "id": productId, "order": true, "isBigCartBtn": true, "data-astro-cid-gmbn233k": true })}
    </div>
  </div>

  <!-- なぜこのお薬がおすすめなの？ -->
  <div class="why" data-astro-cid-gmbn233k>
    <div class="inner" data-astro-cid-gmbn233k>
      <div class="illust" data-astro-cid-gmbn233k><img${addAttribute(whyIllust, "src")} alt="" data-astro-cid-gmbn233k></div>
      <div class="body" data-astro-cid-gmbn233k>
        <h2 data-astro-cid-gmbn233k>なぜこのお薬がおすすめなの？</h2>
        <ul class="checkList" data-astro-cid-gmbn233k>
          ${whyReasons.map((item) => renderTemplate`<li data-astro-cid-gmbn233k>
                <span class="icn" data-astro-cid-gmbn233k>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" data-astro-cid-gmbn233k>
                    <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#60C76D" data-astro-cid-gmbn233k></path>
                    <path d="M5 7.66667L7.33333 10L11.3333 6" fill="#60C76D" data-astro-cid-gmbn233k></path>
                    <path d="M5 7.66667L7.33333 10L11.3333 6" stroke="white" stroke-width="2" data-astro-cid-gmbn233k></path>
                  </svg>
                </span>
                <span class="txt" data-astro-cid-gmbn233k>${item}</span>
              </li>`)}
        </ul>
      </div>
    </div>
    <div class="detail" data-astro-cid-gmbn233k>
      <span class="line" data-astro-cid-gmbn233k></span>
      <div class="accordion" data-astro-cid-gmbn233k>
        <button type="button" class="toggle" aria-expanded="false" data-astro-cid-gmbn233k>
          <span class="label" data-astro-cid-gmbn233k>詳細を見る</span>
          <svg class="chev" viewBox="0 0 11 6" fill="none" data-astro-cid-gmbn233k><path d="M1 1l4.5 4L10 1"${addAttribute(color, "stroke")} stroke-width="1.4" stroke-linecap="round" data-astro-cid-gmbn233k></path></svg>
        </button>
        <div class="crop" data-astro-cid-gmbn233k>
          <div class="accordionBody" data-astro-cid-gmbn233k>
            ${whyAccordion.map((sec) => renderTemplate`<section data-astro-cid-gmbn233k>
                  <h4 data-astro-cid-gmbn233k>${sec.title}</h4>
                  <ul data-astro-cid-gmbn233k>
                    ${sec.items.map((item) => renderTemplate`<li data-astro-cid-gmbn233k>
                        <span data-astro-cid-gmbn233k>${item}</span>
                      </li>`)}
                  </ul>
                  ${sec.note && renderTemplate`<p class="note" data-astro-cid-gmbn233k>${sec.note}</p>`}
                </section>`)}
          </div>
        </div>
      </div>
      <span class="line" data-astro-cid-gmbn233k></span>
    </div>
  </div>
</div>

${renderScript($$result, "/Users/bofft/Works/bebo/src/components/ResultRecommend.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/bofft/Works/bebo/src/components/ResultRecommend.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProductBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductBanner;
  const { id, badge } = Astro2.props;
  const formatCapacity = (capacity) => Array.isArray(capacity) ? capacity[0] : capacity;
  const formatPrice = (price) => Array.isArray(price) ? price[0] : price;
  const product = productsData.find((p) => p.id === id) ?? productsData[0];
  const item = {
    badge: badge ?? product.badgeText ?? "\u65E5\u9803\u306E\u8178\u6D3B\u306B\u304A\u3059\u3059\u3081",
    title: product.title,
    priceText: product.baseText ? product.baseText : `(${formatCapacity(product.capacity)})${formatPrice(product.price)}`,
    href: `/product/${product.id}/`,
    // product.capacityが配列だったら
    image: Array.isArray(product.capacity) ? `/assets/img/products/${product.id}_1.webp` : `/assets/img/products/${product.id}.webp`,
    accentColor: product.btnColor ?? "#0065D9",
    accentGradient: product.btnGradient ?? "linear-gradient(90deg, #07F 0%, #0045DA 50%, #07F 100%)",
    textColor: product.textColor ?? "#000"
  };
  return renderTemplate`${maybeRenderHead()}<div class="ProductBanner" data-astro-cid-edntlcwp>
  <div class="inner" data-astro-cid-edntlcwp>
    <div class="card"${addAttribute(`--accent: ${item.accentColor}; --textColor: ${item.textColor};`, "style")} data-astro-cid-edntlcwp>
      <div class="info" data-astro-cid-edntlcwp>
        <div class="thumb" data-astro-cid-edntlcwp>
          <img${addAttribute(item.image, "src")} alt="" data-astro-cid-edntlcwp>
        </div>
        <div class="text" data-astro-cid-edntlcwp>
          <div class="badge" data-astro-cid-edntlcwp>
            <span data-astro-cid-edntlcwp>${unescapeHTML(item.badge)}</span>
          </div>
          <h3 class="name" data-astro-cid-edntlcwp>${item.title}</h3>
          <span class="price" data-astro-cid-edntlcwp>${item.priceText}</span>
        </div>
      </div>
      <div class="btn" data-astro-cid-edntlcwp>
        ${renderComponent($$result, "Btn", $$Btn, { "text": "\u4ECA\u3059\u3050\u8CFC\u5165\u3059\u308B", "size": "L", "href": "/cart/", "type": "solid", "bannerShoulderText": "\u3042\u306A\u305F\u306B\u6700\u3082\u304A\u3059\u3059\u3081\u306E\u85AC\u3092", "color": item.accentColor, "gradient": item.accentGradient, "data-astro-cid-edntlcwp": true }, { "default": ($$result2) => renderTemplate`
          <svg class="cartIcon" viewBox="0 0 16 16" fill="none" data-astro-cid-edntlcwp>
            <path d="M4.81201 16C4.40671 16 4.0612 15.8584 3.77549 15.5753C3.48977 15.2921 3.34692 14.9517 3.34692 14.554C3.34692 14.1563 3.4912 13.8173 3.77977 13.5369C4.06834 13.2566 4.41528 13.1164 4.82058 13.1164C5.22588 13.1164 5.57139 13.258 5.85711 13.5411C6.14282 13.8243 6.28567 14.1647 6.28567 14.5624C6.28567 14.9601 6.14139 15.2991 5.85282 15.5795C5.56425 15.8598 5.21731 16 4.81201 16ZM12.9752 16C12.5699 16 12.2244 15.8584 11.9387 15.5753C11.653 15.2921 11.5101 14.9517 11.5101 14.554C11.5101 14.1563 11.6544 13.8173 11.943 13.5369C12.2316 13.2566 12.5785 13.1164 12.9838 13.1164C13.3891 13.1164 13.7346 13.258 14.0203 13.5411C14.306 13.8243 14.4489 14.1647 14.4489 14.5624C14.4489 14.9601 14.3046 15.2991 14.016 15.5795C13.7275 15.8598 13.3805 16 12.9752 16ZM3.75508 2.78348L5.99996 7.34919H11.8775L14.4285 2.78348H3.75508ZM3.14284 1.58198H15.1646C15.4771 1.58198 15.7149 1.72215 15.8779 2.0025C16.0408 2.28285 16.0407 2.5632 15.8774 2.84355L13.1224 7.70964C12.9727 7.96329 12.7784 8.16688 12.5395 8.3204C12.3006 8.47393 12.0391 8.55069 11.755 8.55069H5.57139L4.42854 10.6333H14.4489V11.8348H4.61222C4.04079 11.8348 3.62923 11.6479 3.37753 11.2741C3.12583 10.9003 3.12923 10.4798 3.38773 10.0125L4.69385 7.64956L1.59183 1.2015H0V0H2.38774L3.14284 1.58198Z" fill="currentColor" data-astro-cid-edntlcwp></path>
          </svg>
        ` })}
      </div>
    </div>
    
    <div class="bar" data-astro-cid-edntlcwp>
      <div class="thumb" data-astro-cid-edntlcwp>
        <img${addAttribute(item.image, "src")} alt="" data-astro-cid-edntlcwp>
      </div>
      <div class="btn" data-astro-cid-edntlcwp>
        ${renderComponent($$result, "Btn", $$Btn, { "text": "\u4ECA\u3059\u3050\u8CFC\u5165\u3059\u308B", "size": "L", "href": "/cart/", "type": "solid", "color": item.accentColor, "gradient": item.accentGradient, "bannerShoulderText": "\u3042\u306A\u305F\u306B\u6700\u3082\u304A\u3059\u3059\u3081\u306E\u85AC\u3092", "data-astro-cid-edntlcwp": true }, { "default": ($$result2) => renderTemplate`
          <svg class="cartIcon" viewBox="0 0 16 16" fill="none" data-astro-cid-edntlcwp>
            <path d="M4.81201 16C4.40671 16 4.0612 15.8584 3.77549 15.5753C3.48977 15.2921 3.34692 14.9517 3.34692 14.554C3.34692 14.1563 3.4912 13.8173 3.77977 13.5369C4.06834 13.2566 4.41528 13.1164 4.82058 13.1164C5.22588 13.1164 5.57139 13.258 5.85711 13.5411C6.14282 13.8243 6.28567 14.1647 6.28567 14.5624C6.28567 14.9601 6.14139 15.2991 5.85282 15.5795C5.56425 15.8598 5.21731 16 4.81201 16ZM12.9752 16C12.5699 16 12.2244 15.8584 11.9387 15.5753C11.653 15.2921 11.5101 14.9517 11.5101 14.554C11.5101 14.1563 11.6544 13.8173 11.943 13.5369C12.2316 13.2566 12.5785 13.1164 12.9838 13.1164C13.3891 13.1164 13.7346 13.258 14.0203 13.5411C14.306 13.8243 14.4489 14.1647 14.4489 14.5624C14.4489 14.9601 14.3046 15.2991 14.016 15.5795C13.7275 15.8598 13.3805 16 12.9752 16ZM3.75508 2.78348L5.99996 7.34919H11.8775L14.4285 2.78348H3.75508ZM3.14284 1.58198H15.1646C15.4771 1.58198 15.7149 1.72215 15.8779 2.0025C16.0408 2.28285 16.0407 2.5632 15.8774 2.84355L13.1224 7.70964C12.9727 7.96329 12.7784 8.16688 12.5395 8.3204C12.3006 8.47393 12.0391 8.55069 11.755 8.55069H5.57139L4.42854 10.6333H14.4489V11.8348H4.61222C4.04079 11.8348 3.62923 11.6479 3.37753 11.2741C3.12583 10.9003 3.12923 10.4798 3.38773 10.0125L4.69385 7.64956L1.59183 1.2015H0V0H2.38774L3.14284 1.58198Z" fill="currentColor" data-astro-cid-edntlcwp></path>
          </svg>
        ` })}
      </div>
    </div>
    <div class="close" data-astro-cid-edntlcwp>
      <img src="/assets/img/type-check/result/banner_close.svg" alt="" data-astro-cid-edntlcwp>
    </div>
  </div>
</div>`;
}, "/Users/bofft/Works/bebo/src/components/ProductBanner.astro", void 0);

const $$PharmacistBanner = createComponent(($$result, $$props, $$slots) => {
  const lead = "\u4E0D\u5B89\u3084\u7591\u554F\u306F\u3001\u8CFC\u5165\u524D\u306B\u6C17\u8EFD\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002";
  const cta = "\u85AC\u5264\u5E2B\u3078\u306E\u3054\u76F8\u8AC7\u306F\u3053\u3061\u3089";
  const href = "/consultation/";
  return renderTemplate`${maybeRenderHead()}<div class="PharmacistBanner" data-astro-cid-vjrzxk7r>
  <div class="body" data-astro-cid-vjrzxk7r>
    <a${addAttribute(href, "href")} class="inner" data-astro-cid-vjrzxk7r>
      
      <div class="card" data-astro-cid-vjrzxk7r>
        <p class="lead" data-astro-cid-vjrzxk7r>
          <span class="slash slash-left" data-astro-cid-vjrzxk7r></span>
          ${lead}
          <span class="slash slash-right" data-astro-cid-vjrzxk7r></span>
        </p>
        <p class="cta" data-astro-cid-vjrzxk7r>
          <span data-astro-cid-vjrzxk7r>${cta}</span>
        </p>
      </div>
      
      <div class="bar" data-astro-cid-vjrzxk7r>
        <p class="lead" data-astro-cid-vjrzxk7r>${lead}</p>
        <p class="cta" data-astro-cid-vjrzxk7r>
          <span data-astro-cid-vjrzxk7r>${cta}</span>
        </p>
      </div>
      <img class="char" src="/assets/img/type-check/result/banner_pharmacist_char.png" alt="" data-astro-cid-vjrzxk7r>
    </a>
    <div class="close" data-astro-cid-vjrzxk7r>
      <img src="/assets/img/type-check/result/banner_close.svg" alt="" data-astro-cid-vjrzxk7r>
    </div>
  </div>
</div>`;
}, "/Users/bofft/Works/bebo/src/components/PharmacistBanner.astro", void 0);

const $$Astro$1 = createAstro();
const $$BottomBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BottomBanner;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="BottomBanner" data-astro-cid-blkumcyv>
  <div class="banner banner-product" data-astro-cid-blkumcyv>
    ${renderComponent($$result, "ProductBanner", $$ProductBanner, { "id": id, "data-astro-cid-blkumcyv": true })}
  </div>
  <div class="banner banner-pharmacist" data-astro-cid-blkumcyv>
    ${renderComponent($$result, "PharmacistBanner", $$PharmacistBanner, { "data-astro-cid-blkumcyv": true })}
  </div>
</div>

${renderScript($$result, "/Users/bofft/Works/bebo/src/components/BottomBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/bofft/Works/bebo/src/components/BottomBanner.astro", void 0);

const $$Astro = createAstro();
const $$ResultFeedback = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResultFeedback;
  const { type } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/ResultFeedback.astro?astro&type=script&index=0&lang.ts")}
${renderComponent($$result, "WaveSeparator", $$WaveSeparator, { "colorTop": "#f8f5f0", "colorBottom": "#fff", "data-astro-cid-6lkfq5zf": true })}
${renderComponent($$result, "result-feedback", "result-feedback", { "type": type, "data-astro-cid-6lkfq5zf": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<div class="ResultFeedback" data-astro-cid-6lkfq5zf>
    ${renderComponent($$result, "SecondPageTitle", $$SecondPageTitle, { "title": "\u3053\u306E\u7D50\u679C\u306F<br />\u53C2\u8003\u306B\u306A\u308A\u307E\u3057\u305F\u304B\uFF1F", "data-astro-cid-6lkfq5zf": true })}
    <div class="stars" data-astro-cid-6lkfq5zf>
      <svg viewBox="0 0 30 29" fill="none" data-astro-cid-6lkfq5zf>
        <path d="M14.0488 2.07324C14.3482 1.15193 15.6518 1.15193 15.9512 2.07324L18.0898 8.65723C18.4915 9.89317 19.6438 10.7295 20.9434 10.7295H27.8662C28.8346 10.7299 29.2367 11.9697 28.4531 12.5391L22.8535 16.6074C21.8021 17.3714 21.3621 18.7258 21.7637 19.9619L23.9023 26.5459C24.2013 27.467 23.1469 28.2324 22.3633 27.6631L16.7637 23.5947C15.7122 22.8308 14.2878 22.8308 13.2363 23.5947L7.63672 27.6631C6.85312 28.2324 5.79872 27.467 6.09766 26.5459L8.23633 19.9619C8.63795 18.7258 8.19795 17.3714 7.14648 16.6074L1.54688 12.5391C0.763284 11.9698 1.16539 10.7299 2.13379 10.7295H9.05664C10.3562 10.7295 11.5085 9.89317 11.9102 8.65723L14.0488 2.07324Z" data-astro-cid-6lkfq5zf></path>
      </svg>
      <svg viewBox="0 0 30 29" fill="none" data-astro-cid-6lkfq5zf>
        <path d="M14.0488 2.07324C14.3482 1.15193 15.6518 1.15193 15.9512 2.07324L18.0898 8.65723C18.4915 9.89317 19.6438 10.7295 20.9434 10.7295H27.8662C28.8346 10.7299 29.2367 11.9697 28.4531 12.5391L22.8535 16.6074C21.8021 17.3714 21.3621 18.7258 21.7637 19.9619L23.9023 26.5459C24.2013 27.467 23.1469 28.2324 22.3633 27.6631L16.7637 23.5947C15.7122 22.8308 14.2878 22.8308 13.2363 23.5947L7.63672 27.6631C6.85312 28.2324 5.79872 27.467 6.09766 26.5459L8.23633 19.9619C8.63795 18.7258 8.19795 17.3714 7.14648 16.6074L1.54688 12.5391C0.763284 11.9698 1.16539 10.7299 2.13379 10.7295H9.05664C10.3562 10.7295 11.5085 9.89317 11.9102 8.65723L14.0488 2.07324Z" data-astro-cid-6lkfq5zf></path>
      </svg>
      <svg viewBox="0 0 30 29" fill="none" data-astro-cid-6lkfq5zf>
        <path d="M14.0488 2.07324C14.3482 1.15193 15.6518 1.15193 15.9512 2.07324L18.0898 8.65723C18.4915 9.89317 19.6438 10.7295 20.9434 10.7295H27.8662C28.8346 10.7299 29.2367 11.9697 28.4531 12.5391L22.8535 16.6074C21.8021 17.3714 21.3621 18.7258 21.7637 19.9619L23.9023 26.5459C24.2013 27.467 23.1469 28.2324 22.3633 27.6631L16.7637 23.5947C15.7122 22.8308 14.2878 22.8308 13.2363 23.5947L7.63672 27.6631C6.85312 28.2324 5.79872 27.467 6.09766 26.5459L8.23633 19.9619C8.63795 18.7258 8.19795 17.3714 7.14648 16.6074L1.54688 12.5391C0.763284 11.9698 1.16539 10.7299 2.13379 10.7295H9.05664C10.3562 10.7295 11.5085 9.89317 11.9102 8.65723L14.0488 2.07324Z" data-astro-cid-6lkfq5zf></path>
      </svg>
      <svg viewBox="0 0 30 29" fill="none" data-astro-cid-6lkfq5zf>
        <path d="M14.0488 2.07324C14.3482 1.15193 15.6518 1.15193 15.9512 2.07324L18.0898 8.65723C18.4915 9.89317 19.6438 10.7295 20.9434 10.7295H27.8662C28.8346 10.7299 29.2367 11.9697 28.4531 12.5391L22.8535 16.6074C21.8021 17.3714 21.3621 18.7258 21.7637 19.9619L23.9023 26.5459C24.2013 27.467 23.1469 28.2324 22.3633 27.6631L16.7637 23.5947C15.7122 22.8308 14.2878 22.8308 13.2363 23.5947L7.63672 27.6631C6.85312 28.2324 5.79872 27.467 6.09766 26.5459L8.23633 19.9619C8.63795 18.7258 8.19795 17.3714 7.14648 16.6074L1.54688 12.5391C0.763284 11.9698 1.16539 10.7299 2.13379 10.7295H9.05664C10.3562 10.7295 11.5085 9.89317 11.9102 8.65723L14.0488 2.07324Z" data-astro-cid-6lkfq5zf></path>
      </svg>
      <svg viewBox="0 0 30 29" fill="none" data-astro-cid-6lkfq5zf>
        <path d="M14.0488 2.07324C14.3482 1.15193 15.6518 1.15193 15.9512 2.07324L18.0898 8.65723C18.4915 9.89317 19.6438 10.7295 20.9434 10.7295H27.8662C28.8346 10.7299 29.2367 11.9697 28.4531 12.5391L22.8535 16.6074C21.8021 17.3714 21.3621 18.7258 21.7637 19.9619L23.9023 26.5459C24.2013 27.467 23.1469 28.2324 22.3633 27.6631L16.7637 23.5947C15.7122 22.8308 14.2878 22.8308 13.2363 23.5947L7.63672 27.6631C6.85312 28.2324 5.79872 27.467 6.09766 26.5459L8.23633 19.9619C8.63795 18.7258 8.19795 17.3714 7.14648 16.6074L1.54688 12.5391C0.763284 11.9698 1.16539 10.7299 2.13379 10.7295H9.05664C10.3562 10.7295 11.5085 9.89317 11.9102 8.65723L14.0488 2.07324Z" data-astro-cid-6lkfq5zf></path>
      </svg>
    </div>
    <div class="btn" data-astro-cid-6lkfq5zf>
      ${renderComponent($$result, "Btn", $$Btn, { "type": "outline", "tag": "button", "size": "M", "text": "\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092\u9001\u4FE1", "data-astro-cid-6lkfq5zf": true })}
    </div>
  </div>


${renderComponent($$result, "WaveSeparator", $$WaveSeparator, { "colorTop": "#fff", "colorBottom": "#000", "data-astro-cid-6lkfq5zf": true })}

` })}`;
}, "/Users/bofft/Works/bebo/src/components/ResultFeedback.astro", void 0);

export { $$ResultContent as $, $$BottomBanner as a, $$ResultDiagnosis as b, $$ResultRecommend as c, $$ResultFeedback as d };
