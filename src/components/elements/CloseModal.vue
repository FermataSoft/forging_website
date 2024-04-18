<script setup>
const props = defineProps({
  invertColor: false,
});
</script>

<template>
  <button class="button-close">
    <div
      class="button-close__icon"
      :class="{ '--invert-color': props.invertColor }"
    ></div>
  </button>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

@mixin cross(
  $size: 20px,
  $color: currentColor,
  $color-hover: currentColor,
  $thickness: 1px
) {
  margin: 0 auto;
  padding: 0;
  border: 0;
  background: none;
  position: relative;
  width: $size;
  height: $size;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: calc(($size - $thickness) / 2);
    left: 0;
    right: 0;
    height: $thickness;
    background: $color;
    border-radius: $thickness;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  // &:hover {
  //   &:before,
  //   &:after {
  //     background: $color-hover;
  //   }
  // }

  span {
    display: block;
  }
}
.button-close {
  z-index: 5;
  cursor: pointer;

  &:hover {
    .button-close__icon {
      &:before,
      &:after {
        background: $on-secondary;
      }
    }
  }
}

.button-close__icon {
  display: block;
  @include cross(25px, $secondary, $on-secondary, 2px);

  &.--invert-color {
    @include cross(25px, $on-secondary, $secondary, 2px);
  }
}
</style>
