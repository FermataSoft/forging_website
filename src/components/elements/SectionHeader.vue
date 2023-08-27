<script setup>
</script>

<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

h1 {
  font-size: 4rem;
  font-weight: $font-bold;
  margin-top: 50px;
  margin-bottom: 50px;
  color: $on-surface;
  text-align: center;

  &::before {
    content: url(../icons/header_elements/header_before.svg);
    margin-right: 10px;
  }
  &::after {
    content: url(../icons/header_elements/header_after.svg);
    margin-left: 10px;
  }
}
</style>
