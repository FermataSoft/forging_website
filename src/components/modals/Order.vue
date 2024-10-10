<script setup>
import { watch } from "vue";
import Feedback from "@/components/forms/Feedback.vue";
import SocialLinks from "../sections/SocialLinks.vue";
import CloseModal from "../elements/CloseModal.vue";
import { useWindowParamsStore } from "@/stores/WindowParamsStore.js";

const windowParamsStore = useWindowParamsStore();

const props = defineProps({
  isActive: Boolean,
});

const emits = defineEmits(["close"]);

watch(
  () => props.isActive,
  (newVal) => {
    if (newVal) {
      document.body.classList.add("--locked");
    } else {
      document.body.classList.remove("--locked");
    }
  }
);
</script>

<template>
  <Transition :duration="600">
    <div class="order" v-if="isActive">
      <div class="order__background" @click.self="$emit('close')"></div>

      <div class="order__modal-wrapper">
        <div class="order__modal">
          <div class="order__top-block">
            <h1 class="order__modal-header">Свяжитесь с нами</h1>
          </div>
          <div class="order__mid-block">
            <Feedback class="order__form"></Feedback>
          </div>
          <div class="order__bottom-block">
            <SocialLinks></SocialLinks>
          </div>
        </div>
        <CloseModal
          class="order__close-button"
          @click="$emit('close')"
          :invertColor="windowParamsStore.windowWidth <= 500"
        />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

@include device(screen) {
  body.--locked .order {
    width: calc(100% - $scrollbar-width);
  }
}

.order {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100svh;
  z-index: 5;
  font-family: $font-main;
}

.order__background {
  width: 100%;
  height: 100vh;
  background-color: $secondary;
  opacity: 0.7;
}

.order__modal-wrapper {
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  max-height: calc(100vh - 40px);
  max-height: calc(100svh - 20px);
  transform: translate(-50%, -50%);

  @include breakpoint(xs) {
    width: calc(100% - 40px);
  }
}

.order__close-button {
  position: absolute;
  top: 10px;
  right: -15px;
  transform: translateX(100%);
  width: 45px;
  height: 45px;
  border-radius: 8px;
  background-color: $surface;

  @media (hover: hover) {
    &:hover {
      background-color: $secondary;
    }
  }

  @include breakpoint(xs) {
    position: static;
    display: block;
    width: 55px;
    height: 55px;
    margin: 0 auto;
    margin-top: 20px;
    transform: translateX(0);
    background-color: $secondary;
    border-radius: 50%;
  }
}

.order__modal {
  box-shadow: 0 0 100px hsla(0, 0%, 100%, 0.1);
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
}

.order__top-block {
  background-color: $surface-container-highest;
  padding: 20px 0;

  @include breakpoint(xs) {
    padding: 20px 0 10px 0;
  }

  .order__modal-header {
    font-size: $header2;
    text-align: center;
  }
}

.order__mid-block {
  background-color: $surface-container-highest;
  padding-bottom: 30px;
  padding-top: 10px;
  max-height: calc(100vh - 300px);
  max-height: calc(100svh - 250px);
  overflow-x: hidden;
  overflow-y: scroll;

  @include device(screen) {
    @include scrollbar(12px);
  }

  .order__form {
    padding: 0 23px 0 34px;

    @include breakpoint(xs) {
      padding: 0 20px;
    }
  }
}

.order__bottom-block {
  background-color: $secondary;
  width: 100%;
  height: auto;
  padding: 20px 0px;
}

.v-enter-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from {
  opacity: 0;
}

.v-leave-to {
  opacity: 0;
}

.v-enter-active .order__modal-wrapper {
  transition: all 0.3s ease-in-out;
}

.v-enter-from .order__modal-wrapper {
  left: calc(50% - 30px);
}

.v-enter-active .order__form {
  transition: all 0.3s ease-in-out;
  transition-delay: 0.3s;
}

.v-enter-from .order__form {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
