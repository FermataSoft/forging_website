<script setup>
import { ref, onMounted } from 'vue';

const windowHeight = ref(window.innerHeight);
const scrollYPos = ref(window.scrollY);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollYPos.value = window.scrollY;
  });

  window.addEventListener('resize', () => {
    windowHeight.value = window.innerHeight;
  });
});
</script>

<template>
  <Transition>
    <div class="btn-scrollTop" v-show="scrollYPos > windowHeight" @click="scrollToTop"></div>
  </Transition>
</template>

<style lang="scss" scoped>
@import '../../assets/_vars.scss';

span {
  position: fixed;
  bottom: 60px;
  right: 80px;
}

.btn-scrollTop {
  z-index: 4;
  position: fixed;
  bottom: 20px;
  right: 20px;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  mix-blend-mode: difference;

  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 5px;
    width: 20px;
    border-radius: 2px;
    background-color: $secondary;
    filter: invert(1);
  }

  &::before {
    transform: translate(-75%, -50%) rotate(-45deg);
  }

  &::after {
    transform: translate(-20%, -50%) rotate(45deg);
  }

  &:hover {
    mix-blend-mode: normal;
  }

  &:hover::before,
  &:hover::after {
    background-color: $primary;
    filter: invert(0);
  }
}

body.--locked .btn-scrollTop {
  right: calc(20px + $scrollbar-width);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  bottom: 0px;
  opacity: 0;
}
</style>
