<script setup>
import IconTelegram from "@/components/icons/footer/IconTelegram.vue";
import IconInstagram from "@/components/icons/footer/IconInstagram.vue";
import IconVK from "@/components/icons/footer/IconVK.vue";
import IconViber from "@/components/icons/footer/IconViber.vue";
</script>

<template>
  <div class="social-links">
    <!-- <h2>
      <slot></slot>
    </h2> -->
    <div class="social-links__block">
      <a
        href="https://www.instagram.com/bliznyuksasha/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconInstagram></IconInstagram>
      </a>
      <a
        class="link-vk"
        href="https://www.instagram.com/bliznyuksasha/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconVK></IconVK>
      </a>
      <a
        href="https://t.me/+375447199961"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconTelegram></IconTelegram>
      </a>
      <a
        class="link-viber"
        href="viber://chat?number=%2B375447199961"
        rel="noopener noreferrer"
      >
        <IconViber></IconViber>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

.social-links {
  // h2 {
  //   font-size: 2.5rem;
  //   margin-bottom: 10px;
  //   color: $inverse-on-surface;

  //   @include breakpoint(sm) {
  //     font-size: 2rem;
  //   }
  // }

  .social-links__block {
    // margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;

    @include breakpoint(sm) {
      // ! 
      // margin-top: 20px;
    }

    a {
      width: 30px;

      color: $surface-container-lowest;
      position: relative;

      &:hover {
        color: #fff;
      }

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
        // transition: transform 0.3s ease-in-out, color 0.3s;
      }

      &:hover {
        img,
        svg {
          animation: hover-effect ease-out 0.4s;
          // transform: translate(0, -2px);
        }
      }
    }
  }
}
</style>
