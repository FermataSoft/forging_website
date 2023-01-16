<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="btn">{{ text }}</div>
</template>

<style lang="scss" scoped>
@import '../assets/_vars.scss';
.btn {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: $accent;
  width: 120px;
  height: 30px;
  border-radius: 3px;

  font-size: 1.4rem;
  font-weight: $font-medium;
  color: $navbar; 

  cursor: pointer;

  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.4);
  }
}


</style>
