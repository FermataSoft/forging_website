import { createApp, ref } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";
import SectionHeader from "./components/elements/SectionHeader.vue"
import ButtonClose from "./components/elements/ButtonClose.vue"
import Devider from "./components/elements/Devider.vue"

import VueAwesomePaginate from "vue-awesome-paginate";

import "./assets/main.css";

const app = createApp(App);

app.component("SectionHeader", SectionHeader)
app.component("ButtonClose", ButtonClose)
app.component("Devider", Devider)

import ru from "./locales/ru-RU.json";
import by from "./locales/by-BY.json";
import { useLocaleStore } from "./stores/LocaleStore";

const messages = {
  "ru-RU": ru,
  "by-BY": by,
};

app.use(createPinia());

const i18n = createI18n({
  legacy: false,
  locale: useLocaleStore().currentLocale,
  fallbackLocale: "ru-RU",
  messages,
  missingWarn: false,
  fallbackWarn: false
});

import { register } from "swiper/element/bundle";
register();

app.use(VueAwesomePaginate);
app.use(router);
app.use(i18n);

app.mount("#app");
