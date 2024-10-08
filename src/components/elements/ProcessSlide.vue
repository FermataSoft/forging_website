<script setup>
import SlidesDevider from "../elements/SlidesDevider.vue";

const props = defineProps({
  number: {
    type: Number,
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
  actualParentContainerHeight: Number,
});
</script>

<template>
  <div class="process-slide">
    <div class="process-slide__text-block">
      <div class="process-slide__text-block-background--dark"></div>
      <div class="process-slide__text-block-background--light"></div>
      <SlidesDevider class="process-slide__devider"></SlidesDevider>
      <h1 class="process-slide__text-block-number">
        {{ number }}
      </h1>
      <h2 class="process-slide__text-block-header">
        {{ header }}
      </h2>
    </div>
    <div class="process-slide__image-block">
      <img
        class="process-slide__image"
        :src="`./images/section_process/${image}`"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";
.process-slide {
  width: 100%;
  height: 100%;
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
    height: 40%;
    width: 100%;
    padding: 0 20px 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
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

    @include breakpoint(sm) {
      font-size: 8rem;
      -webkit-text-stroke: 4px $primary;
    }
  }

  .process-slide__text-block-header {
    font-size: 4rem;
    color: $inverse-on-surface;
    z-index: 2;
    text-wrap: pretty;

    @include breakpoint(lg) {
      font-size: 3rem;
    }

    @include breakpoint(md) {
      font-size: 2.5rem;
    }

    @include breakpoint(sm) {
      font-size: 2rem;
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
    right: -30px;
    width: 30px;
    height: 100%;
    position: absolute;
    background-color: $surface-container-highest;
    z-index: 1;

    @include breakpoint(md) {
      top: 100%;
      left: 0;
      width: 100%;
      height: 20px;
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
    transform: translate(-50%, -50%) scale(0.7) rotate(90deg);
  }
}

.process-slide__image-block {
  height: 100%;
  width: 60%;
  margin-left: 40px;
  overflow: hidden;
  background-color: $surface-container-highest;
  z-index: 2;

  @include breakpoint(md) {
    width: 100%;
    height: 60%;
    padding: 0;
    margin: 0;
  }

  .process-slide__image {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>
