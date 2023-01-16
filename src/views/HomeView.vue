<script setup>
import Hero from "../components/Hero.vue";
import ProductSectionHome from "../components/ProductSectionHome.vue";
</script>

<template>
  <main>
    <Hero></Hero>
    <ProductSectionHome></ProductSectionHome>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/_vars.scss";

main {
  width: 100%;
  text-align: center;
}
</style>
