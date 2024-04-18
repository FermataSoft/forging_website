<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="benefits-item _unselectable">
    <img class="benefits-item__icon" :src="`src/images/benefits_icons/${icon}`" alt="" />
    <p class="benefits-item__text">
      <slot></slot>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/_vars.scss';

.benefits-item {
  max-width: 350px;
  height: 150px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 20px;
  gap: 10px;

  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  background-color: $surface;

  transition: all 0.3s ease-in-out;

  @include breakpoint(sm) {
    height: 100px;
  }

  &:hover {
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
  }

  .benefits-item__icon {
    height: auto;
    width: 50px;
  }
  .benefits-item__text {
    text-align: left;
    font-size: 1.6rem;
    font-weight: $font-regular;
    color: $on-surface;
  }
}
</style>
