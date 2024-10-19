<script setup>
import Contacts from "../components/sections/Contacts.vue";
import SocialLinks from "../components/sections/SocialLinks.vue";
import Feedback from "../components/forms/Feedback.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="wrapper">
    <SectionHeader>{{ t("contacts-view__header") }}</SectionHeader>
    <div class="contacts-view">
      <Contacts
        class="contacts-view__contacts-block"
        :monochromeIcons="true"
      ></Contacts>

      <SocialLinks :width="35" :gap="30" mode="dark"></SocialLinks>

      <div class="contacts-view__feedback-form">
        <h1 class="contacts-view__feedback-form-header">
          {{ t("contacts-view__feedback-form-header") }}
        </h1>
        <Feedback></Feedback>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.wrapper {
  margin-bottom: 80px;
}

.contacts-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 50px;
}

.contacts-view__contacts-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
}

.contacts-view__feedback-form {
  margin-top: 50px;
  padding: 0 10px;
}
.contacts-view__feedback-form-header {
  font-size: $header1;
  text-align: center;
  margin-bottom: 20px;

  @include breakpoint(xs) {
    font-size: $header1-mobile;
  }
}
</style>

<i18n>
  {
    "ru-RU": {
      "contacts-view__header": "Контакты",
      "contacts-view__feedback-form-header": "Оставьте заявку прямо сейчас",
    },
    "by-BY": {
      "contacts-view__header": "Кантакты",
      "contacts-view__feedback-form-header": "Пакіньце заяўку прама зараз"
    }
  }
</i18n>
