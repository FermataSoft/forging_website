<script></script>

<template>
  <div class="hero">
    <img class="hero-image" src="../wrapper_images/1920x1080.webp" alt="" />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/_vars.scss";

.hero {
  height: 100%;
  width: 100%;
  overflow: hidden;

  .hero-image {
    height: calc(100vh - 50px);
    width: 100%;
    object-fit: cover;
  }
}
</style>
