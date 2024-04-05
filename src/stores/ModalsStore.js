import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalsStore = defineStore('ModalsStore', {
  state: () => ({
    order: ref(false),
  }),
});