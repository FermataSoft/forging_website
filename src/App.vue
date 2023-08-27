<script setup>
import { ref, onMounted, provide, watchEffect } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';

import MyButton from './components/elements/OrderButton.vue';
import LanguageDropdownMenu from './components/LanguageDropdownMenuView.vue';
import FooterSection from './components/sections/FooterSection.vue';
import ScrollTopButton from './components/elements/ScrollTopButton.vue';
import { useLocaleStore } from './stores/LocaleStore';
import { useWindowParamsStore } from './stores/WindowParamsStore';

const windowParamsStore = useWindowParamsStore();

onMounted(() => {
  window.addEventListener('scroll', () => {
    windowParamsStore.$patch({
      scrollYPos: window.scrollY,
    });
  });

  window.addEventListener('resize', () => {
    windowParamsStore.$patch({
      windowHeight: window.innerHeight,
    });
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
      </div>

      <nav>
        <div class="nav__item">
          <RouterLink to="/">Главная</RouterLink>
        </div>
        <div class="nav__item">
          <RouterLink to="/works/all">Наши работы</RouterLink>
        </div>
        <div class="nav__item"><RouterLink to="/articles">Статьи</RouterLink></div>
        <div class="nav__item"><RouterLink to="/contacts">Контакты</RouterLink></div>
        <div class="nav__item"><RouterLink to="/about">О нас</RouterLink></div>
      </nav>
      <MyButton>Заказать</MyButton>
      <LanguageDropdownMenu></LanguageDropdownMenu>
    </div>
  </header>
  <div class="navbar-margin"></div>

  <RouterView class="router-view" v-slot="{ Component }">
    <Transition name="fade" mode="out-in" appear>
      <component :is="Component" :key="$route.path"></component>
    </Transition>
  </RouterView>

  <FooterSection></FooterSection>

  <ScrollTopButton></ScrollTopButton>
</template>

<style scoped lang="scss">
@import './assets/vars.scss';

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

header {
  position: fixed;
  display: block;
  height: 50px;
  width: 100%;
  z-index: 9999999;

  background-color: $inverse-surface;

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
        width: 30px;
        height: auto;
      }
    }

    nav {
      height: 100%;
      width: 100%;

      display: flex;
      flex-direction: row;
      gap: 30px;
      align-items: center;
      justify-content: center;

      .nav__item {
        height: 100%;
        position: relative;
      }

      a {
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 1.6rem;
        font-weight: $font-regular;
        height: 100%;

        color: $inverse-on-surface;

        transition: color 0.2s ease-in-out;

        &::after {
          content: '';

          position: absolute;
          bottom: 0;
          left: 50%;
          height: 3px;
          width: 0;

          transform: translate(-50%, 0%);

          background-color: $primary;
        }

        &::before,
        &::after {
          transition: all 0.3s ease-in-out;
        }

        &:hover {
          &::before,
          &::after {
            width: 80%;
          }
        }

        &.router-link-active {
          color: $primary;

          &::before {
            width: 67%;
          }

          &::after {
            width: 67%;
          }
        }
      }
    }
  }
}

.navbar-margin {
  height: 50px;
}

.router-view {
  min-height: 80vh;
}
</style>
