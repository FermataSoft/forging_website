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
@import "../assets/_vars.scss";

.btn {
  position: relative;
  display: inline-block;
  width: fit-content;
  background-color: $accent;
  padding: 20px 40px;
  border-radius: 5px;

  font-size: 2rem;
  font-weight: $font-bold;
  color: $navbar;

  cursor: pointer;

  transform: translate(0);
  transition: all 0.3s ease-in-out;

  &::after {
    content: "";

    background-image: url("./icons/arrow.svg");
    background-repeat: no-repeat;
    background-size: 2rem;
    background-position: center;

    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $accent-hover;

    border-radius: 0 5px 5px 0;

    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    padding-left: 20px;
    padding-right: 60px;
  }

  &:hover::after {
    transform: scaleX(1);
  }
}
</style>
