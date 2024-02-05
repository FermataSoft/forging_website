<script setup>
import IconHeaderAfter from "../icons/header_elements/IconHeaderAfter.vue";
import IconHeaderBefore from "../icons/header_elements/IconHeaderBefore.vue"

const props = defineProps({
  inverseColor: Boolean,
});
</script>

<template>
  <h1
    class="section-header"
    :class="{ 'section-header_inverse-color': inverseColor }"
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

  .section-header__icon-before {
    margin-right: 10px;
  }
  .section-header__icon-after {
    margin-left: 10px;
  }
}

.section-header_inverse-color {
  color: $inverse-on-surface;

  &::before,
  &::after {
    color: $inverse-on-surface;
  }
}
</style>
