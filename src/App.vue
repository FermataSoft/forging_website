<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useI18n } from "vue-i18n";

import { useLocaleStore } from "./stores/LocaleStore";
import { useWindowParamsStore } from "./stores/WindowParamsStore";

const windowParamsStore = useWindowParamsStore();

onMounted(() => {
  window.addEventListener("scroll", () => {
    windowParamsStore.$patch({
      scrollYPos: window.scrollY,
    });
  });

  window.addEventListener("resize", () => {
    windowParamsStore.$patch({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  });
});

// Change localisation according to global state
const localeStore = useLocaleStore();
const { locale } = useI18n();

localeStore.$subscribe(() => {
  let currentLocale = localeStore.currentLocale;

  locale.value = currentLocale;
  localStorage.setItem("locale", currentLocale);
});
</script>

<template>
  <main>
    <component :is="$route.meta.layout || 'div'">
      <router-view></router-view>
    </component>
  </main>
</template>

<style lang="scss" scoped>
@import "./assets/vars";

main {
  background-color: $surface-container-highest;
}
</style>