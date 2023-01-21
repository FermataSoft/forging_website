<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1>{{ text }}</h1>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

h1 {
  font-size: 4rem;
  font-weight: $font-bold;
  margin-top: 80px;
  margin-bottom: 50px;
  color: $navbar;

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
