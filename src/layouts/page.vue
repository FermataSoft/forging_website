<script setup>
import { RouterView } from "vue-router";

import Navigation from "../components/Navigation.vue";
import FooterSection from "../components/sections/FooterSection.vue";
import ScrollTopButton from "../components/elements/ScrollTopButton.vue";
</script>

<template>
  <Navigation></Navigation>
  <div class="navbar-margin"></div>
  <RouterView class="router-view" v-slot="{ Component, route }">
    <Transition :name="route.meta.transition" mode="out-in" appear>
      <component :is="Component" :key="$route.path"></component>
    </Transition>
  </RouterView>

  <FooterSection></FooterSection>

  <ScrollTopButton></ScrollTopButton>
</template>

<style scoped lang="scss">
@import "../assets/vars.scss";

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}

.slide-enter-from {
  transform: translateY(-5px);
  opacity: 0.3;
}

.slide-leave-to {
  opacity: 0.3;
}

.navbar-margin {
  height: $navbar-height;
}

.router-view {
  min-height: 80vh;
}
</style>
