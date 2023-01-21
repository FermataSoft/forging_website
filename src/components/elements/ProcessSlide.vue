<script setup>
import SlidesDevider from "../icons/SlidesDevider.vue";

defineProps({
  number: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="header-block">
      <h1 class="number">{{ number }}</h1>
      <h2 class="header">{{ header }}</h2>
    </div>
    <SlidesDevider></SlidesDevider>
    <div class="slide-image-wrapper">
      <img :src="`/src/images/section_process/${image}`" alt=""/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";
.wrapper {
  width: 100%;
  height: calc(100vh - 50px);
  padding: 0 50px;

  // background-color: coral;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;

  .header-block {
    max-width: 30%;
    text-align: right;
    font-weight: $font-bold;

    .number {
      font-size: 16rem;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 8px $accent;
      letter-spacing: -5px;
    }

    .header {
      font-size: 4rem;
      color: $navbar;
    }
  }

  .slide-image-wrapper {
    height: auto;
    width: 50%;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
