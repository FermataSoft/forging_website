<script setup>
import { ref, onMounted, provide, watchEffect } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';

import MyButton from './components/elements/OrderButton.vue';
import LanguageDropdownMenu from './components/LanguageDropdownMenuView.vue';
import FooterSection from './components/sections/FooterSection.vue';
import ScrollTopButton from './components/elements/ScrollTopButton.vue';
import { useLocaleStore } from './stores/LocaleStore';

// Global event listeners
const scrollYPos = ref(window.scrollY);
const windowHeight = ref(window.innerHeight);
const composedPath = ref([]);

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollYPos.value = window.scrollY;
  });

  window.addEventListener('resize', () => {
    windowHeight.value = window.innerHeight;
  });
});

// Change localisation according to global state
const localeStore = useLocaleStore();
const { locale } = useI18n();

localeStore.$subscribe(() => {
  let currentLocale = localeStore.currentLocale;

  locale.value = currentLocale;
  localStorage.setItem('locale', currentLocale);
});
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="logo-wrapper">
        <img class="logo" src="./favicon/android-chrome-512x512.png" alt="" />
        <span>Декоративная ковка</span>
      </div>

      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/works">Наши работы</RouterLink>
        <RouterLink to="/articles">Статьи</RouterLink>
        <RouterLink to="/contacts">Контакты</RouterLink>
        <RouterLink to="/about">О нас</RouterLink>
      </nav>
      <MyButton>Заказать</MyButton>
      <LanguageDropdownMenu></LanguageDropdownMenu>
    </div>
  </header>
  <div class="navbar-margin"></div>

  <RouterView />
  <FooterSection></FooterSection>

  <ScrollTopButton></ScrollTopButton>
</template>

<style scoped lang="scss">
@import './assets/vars.scss';

header {
  position: fixed;
  display: block;
  height: 50px;
  width: 100%;
  z-index: 9999999;

  background-color: $navbar;

  .wrapper {
    max-width: $wrapper-width;
    height: 100%;
    margin: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 60px;

    .logo-wrapper {
      width: fit-content;
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: center;

      .logo {
        width: 35px;
        height: auto;
      }

      span {
        font-size: 2rem;
        font-weight: $font-medium;
        color: $white;
      }
    }

    nav {
      height: 100%;
      // width: 100%;

      display: flex;
      flex-direction: row;
      gap: 30px;
      align-items: center;
      justify-content: center;

      a {
        position: relative;
        font-size: 1.6rem;
        font-weight: $font-regular;

        color: $white;
        padding: 6px 0;

        transition: color 0.2s ease-in-out;

        &::before {
          content: '';

          position: absolute;
          top: 1px;
          left: 0%;
          height: 2px;
          width: 67%;
          transform: translate(-50%) scaleX(0);

          background-color: $accent;
        }

        &::after {
          content: '';

          position: absolute;
          bottom: 0;
          left: 100%;
          transform: translate(-50%) scaleX(0);
          height: 2px;
          width: 67%;

          background-color: $accent;
        }

        &::before,
        &::after {
          transition: all 0.3s ease-in-out;
        }

        &:hover {
          color: $accent;

          &::before,
          &::after {
            left: 50%;
            width: 80%;
            transform: translate(-50%) scaleX(1);
          }
        }

        &.router-link-active {
          color: $accent;

          &::before {
            transform: translate(-50%) scale(1);
            left: 50%;
          }

          &::after {
            transform: translate(-50%) scale(1);
            left: 50%;
          }
        }
      }
    }
  }
}

.navbar-margin {
  height: 50px;
}
</style>
