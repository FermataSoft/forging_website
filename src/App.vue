<script setup>
import { RouterLink, RouterView } from "vue-router";
import MyButton from "./components/OrderButton.vue";
import LanguageDropdownMenu from "./components/LanguageDropdownMenuView.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/works">Наши работы</RouterLink>
        <RouterLink to="/articles">Статьи</RouterLink>
        <RouterLink to="/contacts">Контакты</RouterLink>
        <RouterLink to="/about">О нас</RouterLink>
      </nav>
      <MyButton text="Заказать"></MyButton>
      <LanguageDropdownMenu lang_active="RU"></LanguageDropdownMenu>
    </div>
  </header>
  <div class="navbar-margin"></div>

  <RouterView />
</template>

<style scoped lang="scss">
@import "./assets/vars.scss";

header {
  position: fixed;
  display: block;
  height: 50px;
  width: 100%;
  z-index: 9999999;

  background-color: $navbar;

  .wrapper {
    width: $wrapper-width;
    height: 100%;
    margin: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 60px;

    nav {
      height: 100%;
      width: 100%;

      display: flex;
      flex-direction: row;
      gap: 30px;
      align-items: center;
      justify-content: end;

      a {
        position: relative;
        font-size: 1.6rem;
        font-weight: $font-regular;

        color: $white;
        padding: 6px 0;

        transition: color 0.2s ease-in-out;

        &::before {
          content: "";

          position: absolute;
          top: 1px;
          left: 0%;
          height: 2px;
          width: 67%;
          transform: translate(-50%) scaleX(0);

          background-color: $accent;
        }

        &::after {
          content: "";

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
