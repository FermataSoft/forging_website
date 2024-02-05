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
  <div class="process-slide">
    <div class="process-slide__text-block">
      <h1 class="process-slide__text-block-number">{{ number }}</h1>
      <h2 class="process-slide__text-block-header">{{ header }}</h2>
    </div>
    <SlidesDevider class="process-slide__devider"></SlidesDevider>
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
}

.process-slide__text-block {
  position: relative;
  background-color: $secondary;
  height: 100%;
  width: 40%;
  text-align: right;
  font-weight: $font-bold;
  padding-right: 100px;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .process-slide__text-block-number {
    font-size: 16rem;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 8px $primary;
    letter-spacing: -5px;
  }

  .process-slide__text-block-header {
    font-size: 4rem;
    color: $inverse-on-surface;
  }
}

.process-slide__devider {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%) scale(1.2);
  color: $secondary;
  z-index: 4;
  mix-blend-mode: difference;
  filter: invert(1);
}

.process-slide__image-block {
  height: 100%;
  width: 60%;
  padding: 50px;
  overflow: hidden;
  // background-color: $surface;
  z-index: 3;

  .process-slide__image {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>
