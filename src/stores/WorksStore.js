import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWorksStore = defineStore('WorksStore', {
  state: () => ({
    categories: ref([
      'all',
      'stairs',
      'stair-railing',
      'fence',
      'gates',
      'gate',
      'marquises',
      'pipes',
      'address-plates',
      'other',
    ]),
  }),
});
