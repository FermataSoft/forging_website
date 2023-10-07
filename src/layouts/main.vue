<script setup>
import { RouterView } from 'vue-router';

import Navigation from '../components/Navigation.vue';
import FooterSection from '../components/sections/FooterSection.vue';
import ScrollTopButton from '../components/elements/ScrollTopButton.vue';
</script>

<template>
  <Navigation></Navigation>

  <RouterView class="router-view" v-slot="{ Component }">
    <Transition name="fade" mode="out-in" appear>
      <component :is="Component" :key="$route.path"></component>
    </Transition>
  </RouterView>

  <FooterSection></FooterSection>

  <ScrollTopButton></ScrollTopButton>
</template>

<style scoped lang="scss">
@import '../assets/vars.scss';

.fade-enter-active,
.fade-leave-active {
}

.fade-enter-from,
.fade-leave-to {

}

.router-view {
  min-height: 80vh;
}
</style>
