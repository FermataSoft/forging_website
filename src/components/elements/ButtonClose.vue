<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  pathTo: Object,
});

async function goToPage(path) {
  await router.push(path).then()
  history.replaceState(history.state, '')
}
</script>

<template>
  <div class="button-close" @click="goToPage(props.pathTo)">
    <div class="button-close__icon"></div>
  </div>
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
  cursor: pointer;

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

  &:hover {
    opacity: 1;

    &:before,
    &:after {
      background: $color-hover;
    }
  }

  span {
    display: block;
  }
}
.button-close {
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 4;
}

.button-close__icon {
  @include cross(30px, rgb(221, 221, 221), $primary, 2px);
}
</style>
