<script setup>
import { useI18n } from "vue-i18n";
import IconAddress from "../icons/footer/IconAddress.vue";
import IconWorkingHours from "../icons/footer/IconWorkingHours.vue";
import IconMail from "../icons/footer/IconMail.vue";
import IconPhone from "../icons/footer/IconPhone.vue";

const { t } = useI18n();

defineProps({
  fontColor: {
    validator(value) {
      return ["dark", "light"].includes(value);
    },
    default: "dark",
  },
  monochromeIcons: false,
});
</script>

<template>
  <div
    class="contacts"
    :class="{
      'font-dark': fontColor === 'dark',
      'font-light': fontColor === 'light',
    }"
  >
    <!-- <div class="contacts__item">
      <IconAddress :monochrome="monochromeIcons"></IconAddress>
      <div class="contacts__item-text-block">
        <h2>{{ t("addressLabel") }}</h2>
        <p>РБ, г. Несвиж, ул. XXXXXXXXXX</p>
      </div>
    </div> -->

    <div class="contacts__item">
      <IconMail :monochrome="monochromeIcons"></IconMail>
      <div class="contacts__item-text-block">
        <h2>Email</h2>
        <p>
          <a
            :class="{
              'font-dark': fontColor === 'dark',
              'font-light': fontColor === 'light',
            }"
            href="mailto:bliznyuk.alex55789@yandex.ru"
            >bliznyuk.alex55789@yandex.ru</a
          >
        </p>
      </div>
    </div>

    <!-- <div class="contacts__item">
      <IconWorkingHours></IconWorkingHours>
      <div class="contacts__item-text-block">
        <h2 lang-id="contacts__item-working-hours">
          {{ t("workingHoursLabel") }}
        </h2>
        <div class="contacts__item-subtext-block">
          <div class="contacts__item-subtext_left">
            <p>пн - пт:</p>
            <p>сб - вс:</p>
          </div>
          <div class="contacts__item-subtext_right">
            <p>08:00 - 17:00</p>
            <p>09:00 - 16:00</p>
          </div>
        </div>
      </div>
    </div> -->

    <div class="contacts__item">
      <IconPhone :monochrome="monochromeIcons"></IconPhone>
      <div class="contacts__item-text-block">
        <h2>{{ t("phonesLabel") }}</h2>
        <div class="contacts__item-subtext-block">
          <div class="contacts__item-subtext_left">
            <p>А1</p>
          </div>
          <div class="contacts__item-subtext_right">
            <p>
              <a
                :class="{
                  'font-dark': fontColor === 'dark',
                  'font-light': fontColor === 'light',
                }"
                href="tel:+375447199961"
                >+375 (44) 719-99-61</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_vars.scss";

.contacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 50px;
  column-gap: 100px;

  @include breakpoint(lg) {
    column-gap: 25px;
  }

  @include breakpoint(md) {
    grid-template-columns: 1fr;
    row-gap: 25px;
  }

  .contacts__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    @include breakpoint(md) {
      gap: 30px;
    }

    svg {
      width: 30px;
      fill: $accent-gradient;
    }

    .contacts__item-text-block {
      h2 {
        font-size: $header2;
        font-weight: $font-medium;
        margin-bottom: 10px;

        @include breakpoint(sm) {
          font-size: $header2-mobile;
          margin-bottom: 5px;
        }
      }

      p {
        font-size: $paragraph;
        line-height: 2rem;
      }

      a {
        font-size: $paragraph;

        &:hover {
          color: $primary;
        }
      }

      .contacts__item-subtext-block {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
    }
  }
}

.font-dark {
  color: $on-surface;
}

.font-light {
  color: $inverse-on-surface-variant;

  h2 {
    color: $inverse-on-surface;
  }
}
</style>

<i18n>
  {
    ru-RU: {
      "addressLabel": "Адрес",
      "workingHoursLabel": "Время работы",
      "phonesLabel": "Телефоны"
    },
    by-BY: {
      "addressLabel": "Адрас",
      "workingHoursLabel": "Час працы",
      "phonesLabel": "Тэлефоны"
    }
  }
</i18n>
