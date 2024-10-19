<script setup>
import IconTelegram from "@/components/icons/footer/IconTelegram.vue";
import IconInstagram from "@/components/icons/footer/IconInstagram.vue";
import IconVK from "@/components/icons/footer/IconVK.vue";
import IconViber from "@/components/icons/footer/IconViber.vue";
import { useWindowParamsStore } from "@/stores/WindowParamsStore";
import { computed, ref } from "vue";

const props = defineProps({
  width: {
    type: [Number, String],
    default: 30,
    validator(value) {
      return !/\D+/g.test(value);
    },
  },
  widthMobile: {
    type: [Number, String],
    validator(value) {
      return !/\D+/g.test(value);
    },
  },
  gap: {
    type: [Number, String],
    default: 20,
    validator(value) {
      return !/\D+/g.test(value);
    },
  },
  mode: {
    type: String,
    default: "dark",
    validator(value) {
      return ["light", "dark"].includes(value);
    },
  },
});

const width = computed(() => {
  return useWindowParamsStore().windowWidth && props.widthMobile < 650
    ? props.widthMobile
    : props.width;
});
</script>

<template>
  <div
    class="social-links"
    :class="{
      '--light': props.mode === 'light',
      '--dark': props.mode === 'dark',
    }"
    :style="{ gap: props.gap + 'px' }"
  >
    <a
      href="https://www.instagram.com/bliznyuksasha/"
      target="_blank"
      rel="noopener noreferrer"
      :style="{ width: width + 'px' }"
    >
      <IconInstagram></IconInstagram>
    </a>
    <a
      class="link-vk"
      href="https://www.instagram.com/bliznyuksasha/"
      target="_blank"
      rel="noopener noreferrer"
      :style="{ width: width + 'px' }"
    >
      <IconVK></IconVK>
    </a>
    <a
      href="https://t.me/+375447199961"
      target="_blank"
      rel="noopener noreferrer"
      :style="{ width: width + 'px' }"
    >
      <IconTelegram></IconTelegram>
    </a>
    <a
      class="link-viber"
      href="viber://chat?number=%2B375447199961"
      rel="noopener noreferrer"
      :style="{ width: width + 'px' }"
    >
      <IconViber></IconViber>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

.social-links {
  display: flex;
  flex-direction: row;

  a {
    position: relative;

    @keyframes hover-effect {
      0% {
        transform: translate(0, 0px);
      }

      50% {
        transform: translate(0, -2px);
      }

      100% {
        transform: translate(0, 0px);
      }
    }

    img,
    svg {
      width: 100%;
      height: auto;
    }

    @include device(screen) {
      &:hover {
        img,
        svg {
          animation: hover-effect ease-out 0.4s;
        }
      }
    }
  }

  &.--light a {
    color: $inverse-on-surface;
  }

  &.--dark a {
    color: $secondary;
  }
}
</style>
