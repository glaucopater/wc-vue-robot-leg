import { defineCustomElement } from "vue";

import App from "./App.vue";

// convert into custom element constructor
const AppCustomElement = defineCustomElement(App);

// Register the custom element.
// After registration, all `<wc-vue-robot-leg>` tags
// on the page will be upgraded.
customElements.define("wc-vue-robot-leg", AppCustomElement);

// You can also programmatically instantiate the element:
// (can only be done after registration)

if (import.meta.env.MODE !== "production") {
  document.body.appendChild(
    new AppCustomElement({
      // initial props (optional)
    })
  );
}
