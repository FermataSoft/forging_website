import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWindowParamsStore = defineStore('WindowParamsStore', {
  state: () => ({
    windowHeight: ref(window.innerHeight),
    scrollYPos: ref(Math.floor(window.scrollY)),
  }),
});