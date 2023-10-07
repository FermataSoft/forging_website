<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
</script>

<template>
  <div class="hero">
    <img class="hero-image" src="../images/hero/Main-page_hero-image.webp" alt="" />
    <div class="title-block">
      <h1 class="title">КАРКАСЫ И<br>ЛЕСТНИЦЫ<br>из металла</h1>
      <h2 class="subtitle">в городе Несвиж</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/_vars.scss";

.hero {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .title-block {
    position: absolute;
    top: 50%;
    left: 200px;
    transform: translateY(-50%);
    text-align: right;
    text-shadow: 0 0 60px hsla(0, 0%, 0%, 1);

    .title {
      font-size: 8rem;
      line-height: 8rem;
      font-weight: bold;
      color: $primary;
    }

    .subtitle {
      margin-top: 4rem;
      font-size: 5rem;
      font-weight: 400;
      color: $tertiary;
    }
  }



  .hero-image {
    // height: calc(100vh - 50px);
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }

  .hero-image-man {}
}
</style>
