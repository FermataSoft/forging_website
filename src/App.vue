<script setup>
import { ref, onMounted, provide, watchEffect } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';

import Navigation from './components/Navigation.vue';
import FooterSection from './components/sections/FooterSection.vue';
import ScrollTopButton from './components/elements/ScrollTopButton.vue';
import { useLocaleStore } from './stores/LocaleStore';
import { useWindowParamsStore } from './stores/WindowParamsStore';

const windowParamsStore = useWindowParamsStore();

onMounted(() => {
  window.addEventListener('scroll', () => {
    windowParamsStore.$patch({
      scrollYPos: window.scrollY,
    });
  });

  window.addEventListener('resize', () => {
    windowParamsStore.$patch({
      windowHeight: window.innerHeight,
    });
  });
});

// Change localisation according to global state
const localeStore = useLocaleStore();
const { locale } = useI18n();

localeStore.$subscribe(() => {
  let currentLocale = localeStore.currentLocale;

  locale.value = currentLocale;
  localStorage.setItem('locale', currentLocale);
});
</script>

<template>
  <Navigation></Navigation>
  <div class="navbar-margin" v-if="$route.path != '/'"></div>
  <RouterView class="router-view" v-slot="{ Component }">
    <Transition name="fade" mode="out-in" appear>
      <component :is="Component" :key="$route.path"></component>
    </Transition>
  </RouterView>

  <FooterSection></FooterSection>

  <ScrollTopButton></ScrollTopButton>
</template>

<style scoped lang="scss">
@import './assets/vars.scss';

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  // opacity: 0;
}

.navbar-margin {
  height: 50px;
  background-color: $inverse-surface;
}

.router-view {
  min-height: 80vh;
}
</style>
