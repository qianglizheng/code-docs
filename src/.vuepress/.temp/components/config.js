import { hasGlobalComponent } from "E:/docs/my-docs/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "E:/docs/my-docs/node_modules/@vueuse/core/index.mjs";
import Badge from "E:/docs/my-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "E:/docs/my-docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "E:/docs/my-docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
};
