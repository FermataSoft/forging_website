<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import OrderButton from "./elements/OrderButton.vue";
import LanguageDropdownMenu from "./LanguageDropdownMenu.vue";

const isBurgerMenuActive = ref(false);
const windowWidth = ref(window.innerWidth);
const scrollPos = ref(0);
const scrollTrigger = 80;
const scrollbarWidth = ref();

onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
  scrollbarWidth.value = window.innerWidth - document.documentElement.clientWidth
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});

function scrollHandler() {
  scrollPos.value = window.scrollY;
}

function toggleState(state) {
  return state ? false : true;
}

watch(isBurgerMenuActive, (newVal, oldVal) => {
  if (newVal && windowWidth.value < 820) {
    document.body.style.paddingRight = `${scrollbarWidth.value}px`;
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.paddingRight = "0px";
    document.body.style.overflow = "auto";
  }
});
</script>

<template>
  <header
    class="navbar"
    :class="{
      'navbar--scrolled': $route.path != '/' || scrollPos > scrollTrigger,
      'navbar__wrapper--mobile-active': isBurgerMenuActive,
    }"
  >
    <div class="navbar__wrapper">
      <div class="logo-wrapper">
        <img class="logo" src="../favicon/android-chrome-512x512.png" alt="" />
      </div>

      <nav>
        <div class="nav__item">
          <RouterLink to="/" @click="isBurgerMenuActive = false"
            >Главная</RouterLink
          >
        </div>
        <div class="nav__item">
          <RouterLink
            :to="{ path: '/works', query: { category: 'all' } }"
            @click="isBurgerMenuActive = false"
            >Наши работы</RouterLink
          >
        </div>
        <div class="nav__item">
          <RouterLink to="/articles" @click="isBurgerMenuActive = false"
            >Статьи</RouterLink
          >
        </div>
        <div class="nav__item">
          <RouterLink to="/contacts" @click="isBurgerMenuActive = false"
            >Контакты</RouterLink
          >
        </div>
        <div class="nav__item">
          <RouterLink to="/about" @click="isBurgerMenuActive = false"
            >О нас</RouterLink
          >
        </div>
      </nav>
      <OrderButton>Заказать</OrderButton>
      <LanguageDropdownMenu
        class="navbar__language-dropdown-menu"
      ></LanguageDropdownMenu>
    </div>
    <div
      class="navbar__burger-menu"
      :class="{ 'navbar__burger-menu--active': isBurgerMenuActive }"
      @click="() => (isBurgerMenuActive = toggleState(isBurgerMenuActive))"
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
  width: 100%;
  z-index: 5;
  transition: all 0.2s;
  background-color: transparent;

  .navbar__wrapper {
    position: relative;
    max-width: $wrapper-width;
    height: 100%;
    margin: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 60px;

    transition: all 0.3s ease;

    @include breakpoint(md) {
      max-width: 100vw;
      flex-direction: column;
      height: 100vh;
      background-color: $inverse-surface;
      padding: 20px;
      transform: translateY(-100%);
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

@include breakpoint(md) {
  .navbar__burger-menu {
    display: block;
    position: absolute;
    right: 20px;
    top: 15px;
    width: 25px;
    height: 20px;
    z-index: 4;
    cursor: pointer;

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

.navbar__wrapper--mobile-active .navbar__wrapper {
  @include breakpoint(md) {
    transform: translateY(0%);
  }
}
</style>
