<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
</script>

<template>
  <div class="hero">
    <img class="hero-image" src="../images/hero/Main-page_hero-image_2×.png" alt="" />
    <div class="title-block">
      <h1 class="title">ИНТЕРЬЕР<br>СТАЛЬ</h1>
      <h2 class="subtitle"></h2>
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
    text-align: left;
    text-shadow: 0 0 30px hsl(0, 0%, 0%, 1);

    .title {
      font-size: 8rem;
      font-weight: 500;
      color: $primary;
    }

    .subtitle {
      margin-top: 4rem;
      font-size: 3rem;
      font-weight: 200;
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
