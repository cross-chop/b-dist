import { c as createComponent, d as createAstro, b as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute, F as Fragment, f as renderSlot } from './astro/server.js';
import 'kleur/colors';
/* empty css                            */

const $$Astro = createAstro();
const $$FormField = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormField;
  const {
    id = "",
    name = "",
    label,
    type = "text",
    placeholder = "",
    required = false,
    errorMessage = "",
    requiredErrorMessage = "",
    value = "",
    options = [],
    className = "",
    showPasswordRequirements = false,
    confirmPassword = "",
    confirmErrorMessage = "",
    simplePasswordValidation = false
  } = Astro2.props;
  const isMulti = type === "multi";
  const isCheckbox = type === "checkbox";
  return renderTemplate`${renderScript($$result, "/Users/bofft/Works/bebo/src/components/FormField.astro?astro&type=script&index=0&lang.ts")}

${renderComponent($$result, "form-field", "form-field", { "class": "FormField", "data-field-id": id, "data-multi": isMulti ? "true" : void 0, "data-checkbox": isCheckbox ? "true" : void 0, "data-confirm-password": confirmPassword ? confirmPassword : void 0, "data-confirm-error-message": confirmErrorMessage ? confirmErrorMessage : void 0, "data-simple-password-validation": simplePasswordValidation ? "true" : void 0 }, { "default": () => renderTemplate`
  ${isCheckbox ? renderTemplate`${maybeRenderHead()}<label class="checkbox">
        <input type="checkbox"${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(value, "value")}${addAttribute(type, "data-field-type")}${addAttribute(required, "required")}>
        <span class="text">${label}</span>
        <div class="check">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="check_stroke" d="M10 15.3333L14.6667 20L22.6667 12" stroke-width="2"></path>
          </svg>
        </div>
      </label>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
        <label${addAttribute(id, "for")}>
          ${required && renderTemplate`<span class="required">
              <span>必須</span>
            </span>`}
          <span class="text">${label}</span>
        </label>

        ${isMulti ? renderTemplate`<div class="multi-fields">
            ${renderSlot($$result2, $$slots["fields"])}
          </div>` : type === "textarea" ? renderTemplate`<textarea${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(type, "data-field-type")}${addAttribute(required, "required")}${addAttribute(className, "class")}></textarea>` : type === "select" ? renderTemplate`<select${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(type, "data-field-type")}${addAttribute(required, "required")}${addAttribute(className, "class")}>
            ${placeholder && renderTemplate`<option value=""${addAttribute(!value, "selected")}>
                ${placeholder}
              </option>`}
            ${options.map((option) => renderTemplate`<option${addAttribute(option.value, "value")}${addAttribute(option.selected, "selected")}>
                ${option.text}
              </option>`)}
          </select>` : type === "password" ? renderTemplate`<div class="password-field">
            <input type="password"${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(value, "value")}${addAttribute(type, "data-field-type")}${addAttribute(required, "required")}${addAttribute(className, "class")}>
            <button type="button" class="password-toggle" aria-label="パスワードを表示/非表示">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-eye">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"></path>
              </svg>
            </button>
          </div>` : renderTemplate`<input${addAttribute(type === "postal" || type === "phone" ? "text" : type, "type")}${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(value, "value")}${addAttribute(type, "data-field-type")}${addAttribute(required, "required")}${addAttribute(className, "class")}>`}${showPasswordRequirements && type === "password" && renderTemplate`<div class="password-requirements">
            <p class="requirements-title">パスワードは15文字以上で次をすべて含めてください。</p>
            <ul class="requirements-list">
              <li>英大文字（A〜Z）</li>
              <li>英小文字（a〜z）</li>
              <li>数字（0〜9）</li>
              <li>記号（例：! @ # $ % ^ & * など）</li>
            </ul>
          </div>`}<p class="error"${addAttribute(`${id}-error`, "id")} style="display: none;"${addAttribute(requiredErrorMessage, "data-required-error")}${addAttribute(errorMessage, "data-validation-error")}>
          ${errorMessage}
        </p>
      ` })}`}
` })}`;
}, "/Users/bofft/Works/bebo/src/components/FormField.astro", void 0);

export { $$FormField as $ };
