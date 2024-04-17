<script setup>
import Feedback from "@/components/forms/Feedback.vue";
import { useModalsStore } from "@/stores/ModalsStore.js";
import SocialLinks from "../sections/SocialLinks.vue";
import CloseModal from "../elements/CloseModal.vue";
import { useWindowParamsStore } from "@/stores/WindowParamsStore.js";

const modalsStore = useModalsStore();
const windowParamsStore = useWindowParamsStore();

modalsStore.$subscribe((mutation, state) => {
  if (state.order) {
    document.body.classList.add("--locked");
  } else {
    document.body.classList.remove("--locked");
  }
});
</script>

<template>
  <Transition>
    <div class="order" v-if="modalsStore.order">
      <div
        class="order__background"
        @click.self="modalsStore.order = false"
      ></div>

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
          @click="modalsStore.order = false"
          :invertColor="windowParamsStore.windowWidth <= 500"
        />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

@media (hover: hover) and (pointer: fine) {
  body.--locked .order {
    width: calc(100% - 15px);
  }
}

.order {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  z-index: 5;
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
  // width: 500px;
  max-height: calc(100vh - 20px);
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
  background-color: $surface;
  padding-top: 30px;
  padding-bottom: 10px;

  @include breakpoint(xs) {
    padding: 20px;
  }

  .order__modal-header {
    font-size: $header2;
    text-align: center;

    @include breakpoint(xs) {
      margin-bottom: 5px;
    }
  }
}

.order__mid-block {
  background-color: $surface;
  transform: translate(0, -1px);
  padding-bottom: 30px;
  height: 500px;
  max-height: calc(100vh - 140px);
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 3px solid transparent;
    background-color: rgb(34, 34, 34);
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  .order__form {
    padding: 0 40px;
    transform: translate(12px);

    @include breakpoint(xs) {
      transform: translate(0, 0px);
      padding: 0 20px;
    }
  }
}

.order__bottom-block {
  background-color: $secondary;
  width: 100%;
  height: auto;
  padding: 10px 0px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: scale(1.1);
  opacity: 0;
}
</style>
