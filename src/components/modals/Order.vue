<script setup>
import { ref, onMounted } from "vue";
import Feedback from "@/components/forms/Feedback.vue";
import { useModalsStore } from "@/stores/ModalsStore.js";
import SocialLinks from "../sections/SocialLinks.vue";
import CloseModal from "../elements/CloseModal.vue";

const modalsStore = useModalsStore();
</script>

<template>
  <Transition>
    <div class="order" v-if="modalsStore.order">
      <div
        class="order__background"
        @click.self="modalsStore.order = false"
      ></div>

      <div class="order__modal-wrapper">
        <CloseModal
          class="order__close-button"
          @click="modalsStore.order = false"
        />

        <div class="order__modal">
          <div class="order__top-block">
            <h1 class="order__modal-header">
              Свяжитесь с нами удобным для вас способом
            </h1>
            <Feedback class="order__form"></Feedback>
          </div>
          <div class="order__bottom-block">
            <SocialLinks></SocialLinks>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

.order {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
}

.order__background {
  width: 100%;
  height: 100%;
  background-color: $secondary;
  opacity: 0.5;
}

.order__modal-wrapper {
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

  &:hover {
    background-color: $secondary;
  }
}

.order__modal {
  box-shadow: 0 0 100px hsla(0, 0%, 100%, 0.1);
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
}

.order__top-block {
  background-color: $surface;
  padding: 30px 30px;

  .order__modal-header {
    font-size: $header2;
    text-align: center;
    margin-bottom: 20px;
  }

  .order__form {
    padding: 0 40px;
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
