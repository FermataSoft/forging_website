import { defineStore } from 'pinia';
import { ref } from 'vue';

let userLocale = localStorage.getItem('locale') || 'ru-RU';

export const useLocaleStore = defineStore('LocaleStore', () => {
  const currentLocale = ref(userLocale);
  return { currentLocale };
});
