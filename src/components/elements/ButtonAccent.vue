<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineProps({
  text: {
    type: String,
    required: true,
  },
  disabled: Boolean,
});
</script>

<template>
  <button :disabled="disabled">{{ t(text) }}</button>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

button {
  background-color: $primary;
  padding: 15px 40px;
  border-radius: 5px;

  font-size: 1.6rem;
  font-weight: $font-bold;
  color: $on-primary;

  transform: translate(0);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @include device(screen) {
    &:hover {
      background-color: $primary-lighten;
    }
  }

  &:active {
    transition: all 0s;
    background-color: $primary-variant;
  }

  &:disabled {
    background-color: $disabled;
    cursor: default;
  }
}
</style>
