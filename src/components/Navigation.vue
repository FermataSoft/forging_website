<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import OrderButton from "./elements/OrderButton.vue";
import LanguageDropdownMenu from "./LanguageDropdownMenu.vue";
import { useModalsStore } from "@/stores/ModalsStore.js";
import { useUIStore } from "@/stores/UIStore.js";
import { useI18n } from "vue-i18n";

const modalsStore = useModalsStore();
const UIStore = useUIStore();
const scrollPos = ref(0);
const scrollTrigger = 80;
const scrollbarWidth = ref();
const { t } = useI18n();
const items = [
  {
    to: "/",
    i18nId: "nav-home",
    text: "Главная",
  },
  {
    to: { path: "/works", query: { category: "all" } },
    i18nId: "nav-works",
    text: "Наши работы",
  },
  {
    to: "/articles",
    i18nId: "nav-articles",
    text: "Статьи",
  },
  {
    to: "/contacts",
    i18nId: "nav-contacts",
    text: "Контакты",
  },
  {
    to: "/about",
    i18nId: "nav-about",
    text: "О нас",
  },
];

onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
  scrollbarWidth.value =
    window.innerWidth - document.documentElement.clientWidth;
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});

function scrollHandler() {
  scrollPos.value = window.scrollY;
}

function toggleBurgerMenu() {
  if (isSmallResolution()) {
    UIStore.isBurgerMenuActive = toggleState(UIStore.isBurgerMenuActive);
  }
}

function isSmallResolution() {
  return window.innerWidth < 820;
}

function toggleState(state) {
  return state ? false : true;
}

UIStore.$subscribe((mutation, state) => {
  if (state.isBurgerMenuActive) {
    document.body.classList.add("--locked");
  } else {
    document.body.classList.remove("--locked");
  }
});
</script>

<template>
  <header
    class="navbar"
    :class="{
      'navbar--scrolled': $route.path != '/' || scrollPos > scrollTrigger,
      'navbar__wrapper--mobile-active': UIStore.isBurgerMenuActive,
    }"
  >
    <div class="navbar__overlay" @click="toggleBurgerMenu"></div>
    <div class="navbar__wrapper">
      <RouterLink to="./" class="logo-wrapper" @click="toggleBurgerMenu">
        <img class="logo" src="../favicon/android-chrome-512x512.png" alt="" />
      </RouterLink>

      <nav>
        <div class="nav__item" v-for="(item, index) in items">
          <RouterLink :to="item.to" :key="index" @click="toggleBurgerMenu">{{
            t(item.i18nId)
          }}</RouterLink>
        </div>
      </nav>
      <OrderButton
        @click="
          () => {
            modalsStore.order = true;
            UIStore.isBurgerMenuActive = false;
          }
        "
        >{{ t("button-contact") }}</OrderButton
      >
      <LanguageDropdownMenu
        class="navbar__language-dropdown-menu"
      ></LanguageDropdownMenu>
    </div>
    <div
      class="navbar__burger-menu"
      :class="{ 'navbar__burger-menu--active': UIStore.isBurgerMenuActive }"
      @click="toggleBurgerMenu"
    >
      <span></span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.navbar {
  position: fixed;
  display: block;
  height: $navbar-height;
  width: calc(100vw - $scrollbar-width);
  z-index: 5;
  transition: background-color 0.2s, box-shadow 0.2s;
  background-color: transparent;

  .navbar__overlay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    opacity: 0;
    z-index: 3;
    transition: opacity 0.3s ease-in;
  }

  .navbar__wrapper {
    position: relative;
    max-width: $wrapper-width;
    height: 100%;
    margin: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    z-index: 4;

    transition: all 0.3s ease-in-out;

    @media (max-width: 920px) {
      gap: 20px;
    }

    @include breakpoint(lg) {
      padding: 0 20px;
    }

    @include breakpoint(md) {
      max-width: 100%;
      flex-direction: column;
      // ! 100vh
      height: auto;
      background-color: $inverse-surface;
      padding: 20px;
      padding-bottom: 70px;
      border-radius: 0 0 30px 30px;
      transform: translate(0, -100%);
    }

    .logo-wrapper {
      width: fit-content;
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: center;

      .logo {
        width: 30px;
        height: auto;

        @include breakpoint(md) {
          width: 50px;
        }
      }
    }

    nav {
      height: 100%;
      width: 100%;

      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: center;
      justify-content: center;

      @include breakpoint(md) {
        flex-direction: column;
        height: auto;
      }

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

        @include breakpoint(md) {
          font-size: 2rem;
        }

        &::after {
          content: "";

          position: absolute;
          bottom: 0;
          left: 50%;
          height: 3px;
          width: 0;

          transform: translate(-50%, 0%);

          background-color: $primary;

          @include breakpoint(md) {
            bottom: -7px;
          }
        }

        &::after {
          transition: all 0.3s ease-in-out;
        }

        &:hover {
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

.navbar__wrapper--mobile-active {
  @include breakpoint(md) {
    .navbar__wrapper {
      transform: translateY(0%) scale(1);
    }

    .navbar__overlay {
      visibility: visible;
      width: 100%;
      height: 100%;
      opacity: 0.3;
    }
  }
}

@include breakpoint(md) {
  .navbar__burger-menu {
    display: block;
    position: absolute;
    right: 40px;
    top: 15px;
    width: 25px;
    height: 20px;
    z-index: 4;
    cursor: pointer;

    @include device(touch) {
      right: 20px;
    }

    &::before,
    &::after {
      content: "";
      background-color: #fff;
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 1px;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }

    &::before {
      top: 0;
      left: 0px;
    }

    &::after {
      bottom: 0;
      left: 0px;
    }

    span {
      background-color: #fffdfb;
      position: absolute;
      width: 100%;
      height: 2px;
      top: 9px;
      right: 0;
      border-radius: 2px;
      -webkit-transition: all 0.1s ease;
      transition: all 0.1s ease;
    }
  }

  .navbar__burger-menu--active {
    &::before {
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      top: 9px;
      height: 2px;
      left: 0;
    }

    &::after {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 9px;
      height: 2px;
      left: 0;
    }

    span {
      opacity: 0;
      right: -10px;
    }
  }
}

.navbar__language-dropdown-menu {
  @include breakpoint(md) {
    position: absolute;
    top: 0;
    left: 20px;
  }
}

.navbar--scrolled {
  background-color: $inverse-surface;
  box-shadow: 0px 2px 10px hsla(0, 0%, 0%, 0.2);
}
</style>

<i18n>
  {
    ru-RU: {
      "nav-home": "Главная",
      "nav-works": "Наши работы",
      "nav-articles": "Статьи",
      "nav-contacts": "Контакты",
      "nav-about": "О нас",
      "button-contact": "Связаться с нами",
    },
    by-BY: {
      "nav-home": "Галоўная",
      "nav-works": "Нашы вырабы",
      "nav-articles": "Артыкулы",
      "nav-contacts": "Кантакты",
      "nav-about": "Пра нас",
      "button-contact": "Звязацца з намі"
    }
  }
</i18n>
