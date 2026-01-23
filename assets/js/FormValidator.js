import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, a as renderTemplate, f as renderSlot } from './astro/server.js';
import 'kleur/colors';

const $$Astro = createAstro();
const $$FormValidator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormValidator;
  const { submitButtonId, postMessage, editMode = false } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/FormValidator.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "form-validator", "form-validator", { "submit-button-id": submitButtonId, "post-message": typeof postMessage === "string" ? postMessage : postMessage ? JSON.stringify(postMessage) : void 0, "edit-mode": editMode ? "true" : void 0 }, { "default": () => renderTemplate`
  ${renderSlot($$result, $$slots["default"])}
` })}`;
}, "/Users/bofft/Works/bebo/src/components/FormValidator.astro", void 0);

export { $$FormValidator as $ };
