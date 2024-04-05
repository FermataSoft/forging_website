<script setup></script>

<template>
  <button class="button-close">
    <div class="button-close__icon"></div>
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
  margin: 0;
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
        background: $surface;
      }
    }
  }
}

.button-close__icon {
  @include cross(25px, $secondary, $surface, 2px);
  display: block;
  margin: 0 auto;
}
</style>
