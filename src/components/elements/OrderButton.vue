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

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.4);
  }

  @include breakpoint(xs) {
    padding: 20px 40px;
  }
}
</style>
