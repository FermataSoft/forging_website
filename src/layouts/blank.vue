<script>
import { RouterView } from 'vue-router';
import Navigation from '../components/Navigation.vue';
</script>

<template>
  <RouterView class="router-view" v-slot="{ Component }">
      <component :is="Component" :key="$route.path"></component>
  </RouterView>
</template>

<style>
.router-view {
  min-height: 80vh;
}
</style>