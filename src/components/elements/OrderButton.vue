<script setup>
</script>

<template>
  <div class="btn --unselectable">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/_vars.scss';
.btn {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: $primary;
  padding: 0 20px;
  height: 30px;
  border-radius: 3px;

  font-size: 1.4rem;
  font-weight: $font-medium;
  color: $on-primary;
  text-wrap: nowrap;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: $primary-lighten;
  }

  @include breakpoint(xs) {
    padding: 20px 40px;
  }
}
</style>
