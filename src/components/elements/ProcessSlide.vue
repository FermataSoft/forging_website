<script setup>
import SlidesDevider from "../elements/SlidesDevider.vue";

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
  <div class="process-slide">
    <div class="process-slide__text-block">
      <div class="process-slide__text-block-background--dark"></div>
      <div class="process-slide__text-block-background--light"></div>
      <SlidesDevider class="process-slide__devider"></SlidesDevider>
      <h1 class="process-slide__text-block-number">{{ number }}</h1>
      <h2 class="process-slide__text-block-header">{{ header }}</h2>
    </div>
    <div class="process-slide__image-block">
      <img
        class="process-slide__image"
        :src="`/src/images/section_process/${image}`"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";
.process-slide {
  width: 100%;
  height: calc(100vh - 50px);
  // padding: 0 50px;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @include breakpoint(md) {
    flex-direction: column;
  }
}

.process-slide__text-block {
  position: relative;
  height: 100%;
  width: 40%;
  text-align: right;
  font-weight: $font-bold;
  padding-right: 100px;
  padding-top: 10px;
  padding-bottom: 30px;
  padding: 10px 100px 30px 100px;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @include breakpoint(lg) {
    padding-left: 20px;
    padding-right: 50px;
  }

  @include breakpoint(md) {
    height: 50%;
    width: 100%;
    text-align: center;
    padding-left: 50px;
    padding-right: 50px;
  }
  .process-slide__text-block-number {
    font-size: 16rem;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 8px $primary;
    letter-spacing: -5px;
    z-index: 2;

    @include breakpoint(lg) {
      font-size: 12rem;
      -webkit-text-stroke: 6px $primary;
    }

    @include breakpoint(md) {
      font-size: 10rem;
      -webkit-text-stroke: 5px $primary;
    }
  }

  .process-slide__text-block-header {
    font-size: 4rem;
    color: $inverse-on-surface;
    z-index: 2;

    @include breakpoint(lg) {
      font-size: 3rem;
    }
  }

  .process-slide__text-block-background--dark {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: $secondary;
    z-index: 1;
  }

  .process-slide__text-block-background--light {
    top: 0;
    right: -40px;
    width: 40px;
    height: 100%;
    position: absolute;
    background-color: $surface-container-highest;
    z-index: 1;

    @include breakpoint(md) {
      top: 100%;
      left: 0;
      width: 100%;
      height: 40px;
    }
  }
}

.process-slide__devider {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%) scale(1.2);
  color: $secondary;
  z-index: 3;
  mix-blend-mode: difference;
  filter: invert(1);

  @include breakpoint(md) {
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9) rotate(90deg);
  }

  @include breakpoint(sm) {
    transform: translate(-50%, -50%) scale(0.8) rotate(90deg);
  }
}

.process-slide__image-block {
  height: 100%;
  width: 60%;
  padding: 50px;
  overflow: hidden;
  background-color: $surface-container-highest;
  z-index: 2;

  @include breakpoint(md) {
    width: 100%;
    padding: 10px;
  }

  .process-slide__image {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>
