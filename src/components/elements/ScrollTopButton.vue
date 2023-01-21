<script setup></script>

<template>
  <div class="circle"></div>
</template>

<style lang="scss" scoped>
@import '../../assets/_vars.scss';

.circle {
  position: fixed;
  bottom: 30px;
  right: 30px;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid $navbar;

  cursor: pointer;

  &::before, &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 5px;
    width: 20px;
    background-color: $navbar;
    border-radius: 2px;
  }

  &::before {
    transform: translate(-75%, -50%) rotate(-45deg);
  }

  &::after {
    transform: translate(-20%, -50%) rotate(45deg);
  }
}
</style>