<script setup>
import { ref, getCurrentInstance } from "vue";

const instance = getCurrentInstance();
const uid = ref(instance.uid);
const checked = defineModel();

const emits = defineEmits(["input", "blur"]);

const props = defineProps({
  invalid: true,
});
</script>

<template>
  <div class="checkbox-wrapper" :class="{ invalid: invalid }">
    <input
      class="promoted-input-checkbox"
      :id="uid"
      type="checkbox"
      v-model="checked"
      @blur="$emit('blur')"
    />
    <svg><use xlink:href="#checkmark-28" /></svg>
    <label :for="uid">
      <slot></slot>
    </label>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="checkmark-28" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-miterlimit="10"
          fill="none"
          d="M22.9 3.7l-15.2 16.6-6.6-7.1"
        ></path>
      </symbol>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

.checkbox-wrapper {
  --size: 20px;
  position: relative;
  text-align: left;

  @include breakpoint(xs) {
  --size: 16px;
  }
}

.checkbox-wrapper *,
.checkbox-wrapper *:before {
  box-sizing: border-box;
}

.checkbox-wrapper .promoted-input-checkbox {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.checkbox-wrapper input:checked ~ svg {
  height: calc(var(--size) * 0.6);
  -webkit-animation: draw-checkbox-28 ease-in-out 0.2s forwards;
  animation: draw-checkbox-28 ease-in-out 0.2s forwards;
}

.checkbox-wrapper label:active::before {
  background-color: #e6e6e6;
}

.checkbox-wrapper label {
  color: $secondary;
  font-size: 1.4rem;
  line-height: var(--size);
  cursor: pointer;
  position: relative;

  @include breakpoint(xs) {
    font-size: 1rem;
  }
}

.checkbox-wrapper label::before {
  content: "";
  height: var(--size);
  width: var(--size);
  margin-right: 8px;
  float: left;
  border: 2px solid $outline;
  border-radius: 3px;
  transition: 0.15s all ease-out;
}

.checkbox-wrapper svg {
  stroke: $secondary;
  stroke-width: 3px;
  height: 0;
  width: calc(var(--size) * 0.6);
  position: absolute;
  left: calc(var(--size) * 0.21);
  top: calc(var(--size) * 0.2);
  stroke-dasharray: 33;
}

.checkbox-wrapper.invalid label::before {
  border: 2px solid $error;
}

@-webkit-keyframes draw-checkbox-28 {
  0% {
    stroke-dashoffset: 33;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes draw-checkbox-28 {
  0% {
    stroke-dashoffset: 33;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
