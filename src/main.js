import { createApp, ref } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

import ru from './locales/ru-RU.json';
import by from './locales/by-BY.json';
import { useLocaleStore } from './stores/LocaleStore';

const messages = {
  'ru-RU': ru,
  'by-BY': by,
};

app.use(createPinia());

const i18n = createI18n({
  legacy: false,
  locale: useLocaleStore().currentLocale,
  fallbackLocale: 'ru-RU',
  messages,
});

// app.config.globalProperties = {
//   $vars: { pageLocale: 'ru-RU' },
//   $filters: {
//     localize(key) {
//       // todo locale получить из БД (store)
//       const locale = app.config.globalProperties.$vars.pageLocale || 'ru-RU';
//       return locales[locale][key] || `[Localize error]: key ${key} not found`;
//     },
//   },
// };

// app.provide('locale', app.config.globalProperties.$filters.localize);
// app.provide('localeTest', app.config.globalProperties.$filters.localize);


app.use(router);
app.use(i18n);
app.mount('#app');
