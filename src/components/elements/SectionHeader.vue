<script setup>
import IconHeaderAfter from "../icons/header_elements/IconHeaderAfter.vue";
import IconHeaderBefore from "../icons/header_elements/IconHeaderBefore.vue";

const props = defineProps({
  inverseColor: Boolean,
  noMargin: Boolean
});
</script>

<template>
  <h1
    class="section-header"
    :class="{ 'section-header--inverse-color': inverseColor, 'section-header--no-margin': noMargin }"
  >
    <IconHeaderBefore class="section-header__icon-before"></IconHeaderBefore>
    <slot></slot>
    <IconHeaderAfter class="section-header__icon-after"></IconHeaderAfter>
  </h1>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

.section-header {
  font-size: 4rem;
  font-weight: $font-bold;
  padding-top: 50px;
  margin-bottom: 50px;
  color: $on-surface;
  text-align: center;

  @include breakpoint(md) {
    font-size: 3rem;
  }

  @include breakpoint(sm) {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }

  .section-header__icon-before {
    margin-right: 10px;

    @include breakpoint(sm) {
      margin-right: 0;
    }
  }
  .section-header__icon-after {
    margin-left: 10px;

    @include breakpoint(sm) {
      margin-left: 0;
    }
  }

  .section-header__icon-before,
  .section-header__icon-after {
    transform: scale(1) translateY(3px);

    @include breakpoint(md) {
      transform: scale(0.9) translateY(3px);
    }

    @include breakpoint(sm) {
      transform: scale(0.5) translateY(10px);
    }
  }
}

.section-header--inverse-color {
  color: $inverse-on-surface;

  &::before,
  &::after {
    color: $inverse-on-surface;
  }
}

.section-header--no-margin {
  margin: 0;
}
</style>
