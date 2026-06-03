import { c as createComponent, m as maybeRenderHead, f as renderSlot, a as renderTemplate, d as createAstro, b as renderScript, r as renderComponent } from './astro/server.js';
import 'kleur/colors';
import 'clsx';
/* empty css                             */
import { $ as $$WaveSeparator } from './WaveSeparator.js';
import { a as $$Btn } from './Layout.js';
import { $ as $$SecondPageTitle } from './SecondPageTitle.js';

const $$ResultContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="ResultContent">
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/bofft/Works/bebo/src/components/ResultContent.astro", void 0);

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

export { $$ResultContent as $, $$ResultFeedback as a };
