<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView class="router-view" v-slot="{ Component }">
    <Transition appear>
      <component :is="Component" :key="$route.path"></component>
    </Transition>
  </RouterView>
</template>

<style>
.router-view {
  min-height: 80vh;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
