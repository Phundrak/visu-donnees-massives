import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "highlight.js/styles/nord.css";
import hljs from "highlight.js/lib/core";
import rust from "highlight.js/lib/languages/rust";
import hljsVuePlugin from "@highlightjs/vue-plugin";

import "./assets/main.less";

hljs.registerLanguage("rust", rust);

const app = createApp(App);

app.use(router);
app.use(hljsVuePlugin);
app.mount("#app");
