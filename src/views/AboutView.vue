<script setup>
import MyButton from "../components/elements/OrderButton.vue";
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MyButton text="fdsfdsf"></MyButton>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/vars.scss';

h1 {
  color: $primary;
  font-size: 2rem;
}
</style>
