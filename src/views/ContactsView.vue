<script setup>
import Contacts from "../components/sections/Contacts.vue"
import IconTelegram from '../components/icons/footer/IconTelegram.vue';
import IconInstagram from '../components/icons/footer/IconInstagram.vue';
import IconVK from '../components/icons/footer/IconVK.vue';
import IconViber from '../components/icons/footer/IconViber.vue';
</script>

<template>
  <div class="wrapper">
    <SectionHeader>Контакты</SectionHeader>
    <Contacts :monochromeIcons="true"></Contacts>
    <div class="social-links">
      <h2>Мы в социальных сетях:</h2>
      <div class="social-links__block">
        <a href="https://www.instagram.com/bliznyuksasha/" target="_blank" rel="noopener noreferrer">
          <IconInstagram></IconInstagram>
        </a>
        <a class="link-vk" href="https://www.instagram.com/bliznyuksasha/" target="_blank" rel="noopener noreferrer">
          <IconVK></IconVK>
        </a>
        <a href="https://t.me/+375447199961" target="_blank" rel="noopener noreferrer">
          <IconTelegram></IconTelegram>
        </a>
        <a class="link-viber" href="viber://chat?number=%2B375447199961" rel="noopener noreferrer">
          <IconViber></IconViber>
        </a>
      </div>
    </div>

    <iframe class="yandex-maps-wrapper" src="https://yandex.ru/map-widget/v1/?um=constructor%3A129033f74be22cda48d129a08284fdef72f87a47db1f2215da8784730f8f7db8&amp;source=constructor" width="600" height="400" frameborder="0"></iframe>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/_vars.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer__contact-block {
  display: grid;
  grid-template-columns: auto auto;
  gap: 50px;

  .footer__contact-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    svg {
      width: 30px;
      fill: $accent-gradient;
    }

    .footer__text-block {
      color: black;

      h2 {
        font-size: 2rem;
        font-weight: $font-bold;
        margin-bottom: 10px;
      }

      p {
        font-size: 1.4rem;
      }

      a {
        font-size: 1.4rem;
        color: black;

        &:hover {
          color: $primary;
        }
      }

      .footer__subtext-block {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
    }
  }
}

.social-links {
  margin-top: 80px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #000;

    @include breakpoint(sm) {
      font-size: 2rem;
    }
  }

  .social-links__block {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;

    @include breakpoint(sm) {
      margin-top: 20px;
    }

    a {
      width: 30px;

      color: #000;
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

.yandex-maps-wrapper {
  width: 600px;
  height: 400px;
  margin-top: 50px;
  margin-bottom: 50px;

  @include breakpoint(sm) {
    width: 100%;
    height: 300px;
    padding: 0 30px;
  }
}
</style>