<script setup>
import { useI18n } from "vue-i18n";
import ButtonAccent from "@/components/elements/ButtonAccent.vue";

const { t } = useI18n();

function reloadPage() {
  location.reload();
}
</script>

<template>
  <div class="reload-on-error">
    <p class="reload-on-error__text">{{ t("onErrorText") }}</p>
    <ButtonAccent
      class="reload-on-error__button-text"
      :text="t('reload-on-error__button-text')"
      @click="reloadPage"
    ></ButtonAccent>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

.reload-on-error {
  padding: 20px;
  text-align: center;
}
.reload-on-error__text {
  font-size: $paragraph-lg;

  @include breakpoint(sm) {
    font-size: $paragraph;
  }
}
.reload-on-error__button-text {
  margin-top: 30px;
}
</style>

<i18n>
  {
    "ru-RU": {
      "onErrorText": "Что-то пошло не так! Попробуйте обновить страницу или вернуться позже.",
      "reload-on-error__button-text": "Обновить страницу"
    },
    "by-BY": {
      "onErrorText": "Нешта пайшло не так! Паспрабуйце абнавіць старонку або вярнуцца пазней.",
      "reload-on-error__button-text": "Абнавіць старонку"
    }
  }
</i18n>
