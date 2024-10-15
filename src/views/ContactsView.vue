<script setup>
import Contacts from "../components/sections/Contacts.vue";
import IconTelegram from "../components/icons/footer/IconTelegram.vue";
import IconInstagram from "../components/icons/footer/IconInstagram.vue";
import IconVK from "../components/icons/footer/IconVK.vue";
import IconViber from "../components/icons/footer/IconViber.vue";
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
      <div class="contacts-view__social-links">
        <div class="contacts-view__social-links-block">
          <a
            href="https://www.instagram.com/bliznyuksasha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram></IconInstagram>
          </a>
          <a
            class="link-vk"
            href="https://www.instagram.com/bliznyuksasha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconVK></IconVK>
          </a>
          <a
            href="https://t.me/+375447199961"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconTelegram></IconTelegram>
          </a>
          <a
            class="link-viber"
            href="viber://chat?number=%2B375447199961"
            rel="noopener noreferrer"
          >
            <IconViber></IconViber>
          </a>
        </div>
      </div>
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

.contacts-view__social-links {
  .contacts-view__social-links-block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;

    @include breakpoint(sm) {
      margin-top: 20px;
    }

    a {
      width: 35px;

      color: $secondary;
      position: relative;

      @keyframes hover-effect {
        0% {
          transform: translate(0, 0px);
        }

        50% {
          transform: translate(0, -2px);
        }

        100% {
          transform: translate(0, 0px);
        }
      }

      img,
      svg {
        width: 100%;
        height: auto;
        // transition: transform 0.3s ease-in-out, color 0.3s;
      }

      &:hover {
        img,
        svg {
          animation: hover-effect ease-out 0.4s;
          // transform: translate(0, -2px);
        }
      }
    }
  }
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
