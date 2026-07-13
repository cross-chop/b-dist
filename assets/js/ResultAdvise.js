import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute, u as unescapeHTML } from './astro/server.js';
import 'kleur/colors';
import { $ as $$SecondPageTitle } from './SecondPageTitle.js';
/* empty css                                  */

const sharedAdvice = [
  {
    title: "腸内環境を整える食生活を",
    description: "腸内環境を整えるには、食物繊維（ごぼう・海藻・きのこ類）、発酵食品（ヨーグルト・納豆・味噌）、オリゴ糖（バナナ・玉ねぎ）などを日常的に摂るのがおすすめです。便秘でなくても腸をいたわる習慣が大切。水分もこまめに補給しましょう。",
    image: "/assets/img/type-check/result/advice_shared_01.webp"
  },
  {
    title: "整腸剤でおなかの環境をととのえる",
    description: "乳酸菌などを含んだ整腸剤はおなかの中のバランスを整えて、自然に出るリズムを助けてくれます。便秘薬だけに頼らず、毎日のサポートとして使うのもおすすめです。",
    image: "/assets/img/type-check/result/advice_shared_02.webp"
  },
  {
    title: '腸は"第2の脳"といわれます',
    description: "腸はストレスや食生活の影響を受けやすい繊細な臓器です。今は便秘でなくても、整腸剤を取り入れることで腸内環境を整え、毎日の快調を保ちやすくなります。",
    image: "/assets/img/type-check/result/advice_shared_03.webp"
  }
];
const atonicConstipationAdvice = [
  {
    title: "水分をこまめにとりましょう",
    description: "体の中の水分が足りないと、便がかたくなって出にくくなります。1日コップ7〜10杯（1.5〜2リットル）を目安に、水やお茶をとりましょう。朝起きたら、まずコップ1杯の水（や白湯）を飲むと、腸が動きやすくなりますよ。",
    image: "/assets/img/type-check/result/advice_atonic_01.webp"
  },
  {
    title: "刺激性の便秘薬は使いすぎに注意",
    description: "便をやわらかくする酸化マグネシウムに比べて、腸を動かす刺激性便秘薬は、繰り返し使い続けると体が慣れてしまい、効果が出にくくなることがあります。どうしてもつらい時など、短期間の使用にとどめましょう。",
    image: "/assets/img/type-check/result/advice_atonic_02.webp"
  },
  {
    title: "デスクワークなどの座りすぎに注意しましょう",
    description: "長時間座りっぱなしの生活は腸の動きを鈍らせます。1時間に一度は立ち上がったり、水分を摂取したり、体を軽くひねるなどの動きを取り入れることで、腸の働きが促進されやすくなります。",
    image: "/assets/img/type-check/result/advice_atonic_03.webp"
  }
];
const rectalConstipationAdvice = [
  {
    title: "水分と食物せんいをとりましょう",
    description: "水分が不足すると便がかたくなり、直腸にたまりやすくなります。こまめに水分をとることを意識しつつ、特に不溶性食物繊維を含む野菜やきのこ、豆類なども適度に取り入れましょう。",
    image: "/assets/img/type-check/result/advice_rectal_01.webp"
  },
  {
    title: "「トイレに行きたい」感覚を大切に",
    description: "直腸性便秘では便秘薬に頼りすぎないことがポイントです 。特に腸を動かすタイプの刺激性便秘薬は、使いすぎると自然な便意が弱まることも 。便秘薬はおなかがつらい時に、上手に使って自然なリズムを取り戻しましょう。",
    image: "/assets/img/type-check/result/advice_rectal_02.webp"
  },
  {
    title: "お腹の力を取り戻しましょう",
    description: "「腹式呼吸」は、お腹を意識的に膨らませてゆっくりと息を吸い込む方法で、腸の働きを促しつつ腹筋のトレーニングにもなります。排便時に適切な力を加えられるよう、無理のない範囲で、毎日の習慣に取り入れてみてください。",
    image: "/assets/img/type-check/result/advice_rectal_03.webp"
  }
];
const resultAdvice = {
  "atonic-constipation_mg": atonicConstipationAdvice,
  "atonic-constipation_bisa": atonicConstipationAdvice,
  "atonic-constipation_kampo": atonicConstipationAdvice,
  "atonic-constipation_mg_bisa": atonicConstipationAdvice,
  "atonic-constipation_mg_kampo": atonicConstipationAdvice,
  "atonic-constipation_mg_ointment": atonicConstipationAdvice,
  "spastic-constipation": [
    {
      title: "カフェイン、アルコール、刺激ぶつを避ける",
      description: "カフェインを含むコーヒー、紅茶、緑茶や、唐辛子などの香辛料、アルコールの多量は腸を刺激して便秘や腹痛を悪化させることがあるため、日常的に控えるようにしましょう。 ほっと一息つきたいときはノンカフェインのハーブティーや麦茶がおすすめです。",
      image: "/assets/img/type-check/result/advice_spastic_01.webp"
    },
    {
      title: "刺激性の便秘薬は避けましょう",
      description: "腸を動かすタイプの刺激性便秘薬は、腸のけいれんを悪化させて、おなかの痛みを強くすることがあります。酸化マグネシウムなどのおなかにやさしい便秘薬を選ぶようにしましょう。",
      image: "/assets/img/type-check/result/advice_spastic_02.webp"
    },
    {
      title: "自分を労る工夫をしましょう",
      description: "強い緊張やストレスは、腸に過剰な刺激を与え、お腹のトラブルを引き起こしやすくなります。意識的に休息を取り、ぬるめのお風呂や深呼吸などで心身をリラックスさせる時間を意識的に作ることが大切です。",
      image: "/assets/img/type-check/result/advice_spastic_03.webp"
    }
  ],
  "rectal-constipation_mg": rectalConstipationAdvice,
  "rectal-constipation_bisa": rectalConstipationAdvice,
  "rectal-constipation_kampo": rectalConstipationAdvice,
  "rectal-constipation_mg_bisa": rectalConstipationAdvice,
  "rectal-constipation_mg_kampo": rectalConstipationAdvice,
  "rectal-constipation_mg_ointment": rectalConstipationAdvice,
  "no-constipation": sharedAdvice,
  "no-constipation_mg": sharedAdvice,
  hemorrhoids: sharedAdvice
};

const $$Astro = createAstro();
const $$ResultAdvise = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResultAdvise;
  const { id } = Astro2.props;
  const adviceData = resultAdvice[id];
  const baseData = [
    {
      id: "01",
      person: {
        job: "\u7BA1\u7406\u6804\u990A\u58EB",
        name: "\u672C\u7530\u7965\u5B50"
      }
    },
    {
      id: "02",
      person: {
        job: "\u85AC\u5264\u5E2B",
        name: "\u8358\u53F8\u548C\u5B50"
      }
    },
    {
      id: "03",
      person: {
        job: "\u770B\u8B77\u5E2B",
        name: "\u6C5F\u53E3\u5B9F\u5948\u7F8E"
      }
    }
  ];
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/ResultAdvise.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "result-advise", "result-advise", { "data-astro-cid-ywgv65fy": true }, { "default": () => renderTemplate`
  ${maybeRenderHead()}<div class="ResultAdvice" data-astro-cid-ywgv65fy>
    ${renderComponent($$result, "SecondPageTitle", $$SecondPageTitle, { "title": "\u5C02\u9580\u5BB6\u306E\u30A2\u30C9\u30D0\u30A4\u30B9", "data-astro-cid-ywgv65fy": true })}
    <p class="lead" data-astro-cid-ywgv65fy>
      検査結果に応じて、薬・食事・生活習慣の3つの視点から、専門家があなたに合ったケアのヒントをお届けします。
    </p>
    <section class="splide" data-astro-cid-ywgv65fy>
      <div class="splide__track" data-astro-cid-ywgv65fy>
        <ul class="splide__list" data-astro-cid-ywgv65fy>
          ${adviceData.map((advice, i) => renderTemplate`<div class="splide__slide" data-astro-cid-ywgv65fy>
                <div class="card" data-astro-cid-ywgv65fy>
                  
                  <div class="thumb" data-astro-cid-ywgv65fy>
                    <img${addAttribute(advice.image, "src")} alt="" data-astro-cid-ywgv65fy>
                  </div>
                  <div class="header" data-astro-cid-ywgv65fy>
                    <div class="number" data-astro-cid-ywgv65fy>Advice ${baseData[i].id}</div>
                  </div>
                  <div class="content" data-astro-cid-ywgv65fy>
                    <div class="body" data-astro-cid-ywgv65fy>
                      <h3 class="title" data-astro-cid-ywgv65fy>${advice.title}</h3>
                      <div class="divider" data-astro-cid-ywgv65fy></div>
                      <p class="description" data-astro-cid-ywgv65fy>${unescapeHTML(advice.description)}</p>
                    </div>
                    <div class="person" data-astro-cid-ywgv65fy>
                      <div class="avatar" data-astro-cid-ywgv65fy>
                        <img${addAttribute(`/assets/img/type-check/result/specialist_${baseData[i].id}.webp`, "src")} alt="" data-astro-cid-ywgv65fy>
                      </div>
                      <div class="info" data-astro-cid-ywgv65fy>
                        <div class="job" data-astro-cid-ywgv65fy>${baseData[i].person.job}</div>
                        <div class="name" data-astro-cid-ywgv65fy>${baseData[i].person.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`)}
        </ul>
      </div>
    </section>
  </div>
` })}`;
}, "/Users/bofft/Works/bebo/src/components/ResultAdvise.astro", void 0);

export { $$ResultAdvise as $ };
