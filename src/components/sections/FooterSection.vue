<script setup>
import { computed, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useWorksStore } from "../../stores/WorksStore";

import Contacts from "@/components/sections/Contacts.vue";
import IconTelegram from "../icons/footer/IconTelegram.vue";
import IconViber from "../icons/footer/IconViber.vue";
import IconInstagram from "../icons/footer/IconInstagram.vue";
import IconVK from "../icons/footer/IconVK.vue";

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
            <p>Регистрирующий орган: Несвижский райисполком</p>
            <p>Дата регистрации: 03.02.2022</p>
            <p>УНП: 693163402</p>
          </div>
          <div class="social-links">
            <h2>Мы в социальных сетях:</h2>
            <div class="social-links__block">
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

              <!-- !!! -->
              <a
                class="link-viber"
                href="viber://chat?number=%2B375447199961"
                rel="noopener noreferrer"
              >
                <IconViber></IconViber>
              </a>
            </div>
          </div>
        </div>

        <div class="footer__site-map-block">
          <div class="footer__site-map-item">
            <h2>Наши работы</h2>
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
            <h2>Информация</h2>
            <ul class="site-map-item__links">
              <li class="site-map-item__link">
                <RouterLink to="/articles">Статьи</RouterLink>
              </li>
              <li class="site-map-item__link">
                <RouterLink to="/contacts">Контакты</RouterLink>
              </li>
              <li class="site-map-item__link">
                <RouterLink to="/about/">О нас</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="copyright-text">
        Copyright © 2023
        <a href="https://www.linkedin.com/in/olegandreev/" target="_blank"
          >Fermata Soft</a
        >. Все права защищены.
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

      .social-links {
        @include breakpoint(md) {
          align-self: center;
        }

        h2 {
          font-size: 1.6rem;
          margin-bottom: 10px;
          color: $inverse-on-surface;
        }

        .social-links__block {
          display: flex;
          flex-direction: row;
          gap: 20px;

          a {
            width: 30px;

            color: $inverse-on-surface;
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
            }

            &:hover {
              img,
              svg {
                animation: hover-effect ease-out 0.4s;
              }
            }
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
