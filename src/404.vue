<script setup>
import ButtonLink from "./components/elements/ButtonLink.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <main class="error-page">
    <h1 class="error-page__error-code">404</h1>
    <h2 class="error-page__error-text">{{ t("header_PageNotFound") }}</h2>
    <ButtonLink
      class="error-page__link-home"
      link="/"
      text="ButtonGoHomePage"
    ></ButtonLink>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/_vars.scss";

.error-page {
  display: flex;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .error-page__error-code {
    font-size: 16rem;
    font-weight: bold;

    @include breakpoint(md) {
      font-size: 10rem;
    }
  }

  .error-page__error-text {
    font-size: 5rem;

    @include breakpoint(md) {
      font-size: 2.5rem;
    }
  }

  .error-page__link-home {
    margin-top: 80px;
  }
}
</style>

<i18n>
  {
    "ru-RU": {
      "header_PageNotFound": "Страница не найдена!"
    },
    "by-BY": {
      "header_PageNotFound": "Старонка не знойдзена!"
    }
  }
</i18n>
