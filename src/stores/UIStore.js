import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUIStore = defineStore('UIStore', {
  state: () => ({
    isBurgerMenuActive: ref(false),
  }),
});