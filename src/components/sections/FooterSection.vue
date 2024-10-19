<script setup>
import { useI18n } from "vue-i18n";
import { useWorksStore } from "../../stores/WorksStore";

import Contacts from "@/components/sections/Contacts.vue";
import IconTelegram from "../icons/footer/IconTelegram.vue";
import IconViber from "../icons/footer/IconViber.vue";
import IconInstagram from "../icons/footer/IconInstagram.vue";
import IconVK from "../icons/footer/IconVK.vue";
import SocialLinks from "./SocialLinks.vue";

const { t } = useI18n();

const workStore = useWorksStore();
</script>

<template>
  <footer>
    <div class="wrapper">
      <div class="footer__top-block">
        <div class="footer__information-block">
          <Contacts fontColor="light"></Contacts>
          <div class="footer__ip-information">
            <p>ИП Близнюк Светлана Юрьевна</p>
            <p>
              {{ t("footer__ip-information-registration-authority") }}:
              Несвижский райисполком
            </p>
            <p>
              {{ t("footer__ip-information-registration-date") }}: 03.02.2022
            </p>
            <p>УНП: 693163402</p>
          </div>
          <div class="footer__social-links">
            <h2 class="footer__social-links-header">
              {{ t("socialLinksHeader") }}
            </h2>
            <SocialLinks
              :width="30"
              :width-mobile="35"
              mode="light"
            ></SocialLinks>
          </div>
        </div>

        <div class="footer__site-map-block">
          <div class="footer__site-map-item">
            <h2>{{ t("ourWorksHeader") }}</h2>
            <ul
              class="site-map-item__links"
              v-for="item in workStore.categories"
            >
              <li class="site-map-item__link">
                <RouterLink
                  :to="{ path: '/works', query: { category: item.category } }"
                  >{{ t("category-" + item.category) }}</RouterLink
                >
              </li>
            </ul>
          </div>
          <div class="footer__site-map-item">
            <h2>{{ t("informationHeader") }}</h2>
            <ul class="site-map-item__links">
              <li class="site-map-item__link">
                <RouterLink to="/articles">{{ t("articlesLink") }}</RouterLink>
              </li>
              <li class="site-map-item__link">
                <RouterLink to="/contacts">{{ t("contactsLink") }}</RouterLink>
              </li>
              <li class="site-map-item__link">
                <RouterLink to="/about/">{{ t("aboutLink") }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="copyright-text">
        Copyright © 2024
        <a href="https://www.linkedin.com/in/olegandreev/" target="_blank"
          >Fermata Soft</a
        >. {{ t("footer__copyright-text") }}.
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

.footer-bottom-position {
  position: fixed;
  bottom: 0;
  width: 100%;
}

footer {
  background-color: $inverse-surface;

  &._fixed {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .wrapper {
    max-width: calc($wrapper-width + 50px);
    margin: 0 auto;
    padding: 0 25px;
  }

  .footer__top-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 50px 0 25px 0;

    @include breakpoint(md) {
      justify-content: center;
    }

    .footer__information-block {
      display: flex;
      flex-direction: column;
      gap: 50px;

      .footer__ip-information {
        font-size: 1.4rem;
        font-weight: $font-light;
        line-height: 2rem;
        color: $inverse-on-surface-variant;

        @include breakpoint(sm) {
          font-size: 1.2rem;
        }
      }

      .footer__social-links {
        @include breakpoint(md) {
          align-self: center;
        }

        .footer__social-links-header {
          font-size: 1.6rem;
          margin-bottom: 20px;
          color: $inverse-on-surface;

          @include breakpoint(xs) {
            text-align: center;
          }
        }
      }
    }

    .footer__site-map-block {
      display: flex;
      flex-direction: row;
      gap: 100px;

      @include breakpoint(lg) {
        gap: 25px;
      }

      @include breakpoint(md) {
        display: none;
      }

      ul {
        list-style: none;
      }

      .footer__site-map-item {
        h2 {
          font-size: 2rem;
          font-weight: $font-medium;
          color: $inverse-on-surface;
          margin-bottom: 1.6rem;
        }

        .site-map-item__links {
          .site-map-item__link {
            margin-bottom: 8px;

            a {
              position: relative;
              display: inline-block;
              width: auto;
              padding-bottom: 8px;
              font-size: 1.5rem;
              font-weight: $font-regular;
              color: $inverse-on-surface-variant;
              transition: color 0.2s;

              &:hover {
                color: $inverse-on-surface;
              }

              &::after {
                content: "";
                display: block;
                position: absolute;
                bottom: 2px;
                left: 0;
                height: 2px;
                width: 0;
                background-color: $primary;

                transition: all 0.3s ease-in-out;
              }

              &:hover::after {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}

.copyright-text {
  font-size: 1.4rem;
  font-weight: $font-light;
  color: $inverse-on-surface-variant;
  text-align: center;
  padding-bottom: 10px;

  @include breakpoint(sm) {
    font-size: 1.2rem;
  }

  a {
    color: $inverse-on-surface;
    font-weight: $font-regular;

    &:hover {
      color: $primary;
    }
  }
}
</style>

<i18n>
  {
    "ru-RU": {
      "socialLinksHeader": "Мы в социальных сетях",
      "ourWorksHeader": "Наши работы",
      "informationHeader": "Информация",
      "articlesLink": "Статьи",
      "contactsLink": "Контакты",
      "aboutLink": "О нас",
      "footer__ip-information-registration-authority": "Регистрирующий орган",
      "footer__ip-information-registration-date": "Дата регистрации",
      "footer__copyright-text": "Все права защищены",
    },
    "by-BY": {
      "socialLinksHeader": "Мы ў сацыяльных сетках",
      "ourWorksHeader": "Нашы вырабы",
      "informationHeader": "Інфармацыя",
      "articlesLink": "Артыкулы",
      "contactsLink": "Кантакты",
      "aboutLink": "Пра нас",
      "footer__ip-information-registration-authority": "Рэгіструючы орган",
      "footer__ip-information-registration-date": "Дата рэгістрацыі",
      "footer__copyright-text": "Усе правы абаронены",
    }
  }
</i18n>
