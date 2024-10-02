import { defineStore } from 'pinia';
import { markRaw, reactive, shallowRef } from 'vue';

import IconAll from "@/components/icons/works_categories/IconAll.vue";
import IconStairs from "@/components/icons/works_categories/IconStairs.vue";
import IconStairsRailing from "@/components/icons/works_categories/IconStairsRailing.vue";
import IconFence from "@/components/icons/works_categories/IconFence.vue";
import IconGates from "@/components/icons/works_categories/IconGates.vue";
import IconGate from "@/components/icons/works_categories/IconGate.vue";
import IconMarquises from "@/components/icons/works_categories/IconMarquises.vue";
import IconPipes from "@/components/icons/works_categories/IconPipes.vue";
import IconAddressPlates from "@/components/icons/works_categories/IconAddressPlates.vue";
import IconOther from "@/components/icons/works_categories/IconOther.vue";

export const useWorksStore = defineStore('WorksStore', {
  state: () => reactive({
    categories: [
      {
        category: 'all',
        icon: shallowRef(IconAll),
      },
      {
        category: 'stairs',
        icon: shallowRef(IconStairs),
      },
      {
        category: 'stair-railing',
        icon: shallowRef(IconStairsRailing),
      },
      {
        category: 'fence',
        icon: shallowRef(IconFence),
      },
      {
        category: 'gates',
        icon: shallowRef(IconGates),
      },
      {
        category: 'gate',
        icon: shallowRef(IconGate),
      },
      {
        category: 'marquises',
        icon: shallowRef(IconMarquises),
      },
      {
        category: 'pipes',
        icon: shallowRef(IconPipes),
      },
      {
        category: 'address-plates',
        icon: shallowRef(IconAddressPlates),
      },
      {
        category: 'other',
        icon: shallowRef(IconOther),
      },
    ],
  }),
});
