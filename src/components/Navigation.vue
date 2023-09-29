<script setup>
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import OrderButton from './elements/OrderButton.vue';
import LanguageDropdownMenu from './LanguageDropdownMenu.vue';

let scrollPos = ref(0);
let scrollTrigger = 80;

onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
})

function scrollHandler() {
  scrollPos.value = window.scrollY;
}
</script>

<template>
  <header class="navbar" :class="{ 'navbar--scrolled': $route.path != '/' || scrollPos > scrollTrigger }">
    <div class="wrapper">
      <div class="logo-wrapper">
        <img class="logo" src="../favicon/android-chrome-512x512.png" alt="" />
      </div>

      <nav>
        <div class="nav__item">
          <RouterLink to="/">Главная</RouterLink>
        </div>
        <div class="nav__item">
          <RouterLink :to="{path: '/works', query: {category: 'all'}}">Наши работы</RouterLink>
        </div>
        <div class="nav__item">
          <RouterLink to="/articles">Статьи</RouterLink>
        </div>
        <div class="nav__item">
          <RouterLink to="/contacts">Контакты</RouterLink>
        </div>
        <div class="nav__item">
          <RouterLink to="/about">О нас</RouterLink>
        </div>
      </nav>
      <OrderButton>Заказать</OrderButton>
      <LanguageDropdownMenu></LanguageDropdownMenu>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/_vars.scss';

.navbar {
  position: fixed;
  display: block;
  height: $navbar-height;
  width: 100%;
  z-index: 9999999;
  transition: all .2s;
  background-color: transparent;

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

.navbar--scrolled {
  background-color: $inverse-surface;
}
</style>