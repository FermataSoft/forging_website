<script setup>
import ButtonLink from './components/elements/ButtonLink.vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <main>
    <h1>404</h1>
    <h2>{{t("header_PageNotFound")}}</h2>
    <ButtonLink class="link-home" link="/" text="ButtonGoHomePage"></ButtonLink>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 16rem;
    font-weight: bold;
  }

  h2 {
    font-size: 5rem;
  }

  .link-home {
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
