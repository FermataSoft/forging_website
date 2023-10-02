<script setup>
import { computed, ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useWorksStore } from '../../stores/WorksStore';

import IconAddress from '../icons/footer/IconAddress.vue';
import IconWorkingHours from '../icons/footer/IconWorkingHours.vue';
import IconMail from '../icons/footer/IconMail.vue';
import IconPhone from '../icons/footer/IconPhone.vue';
import IconTelegram from '../icons/footer/IconTelegram.vue';
import IconViber from '../icons/footer/IconViber.vue';
import IconInstagram from '../icons/footer/IconInstagram.vue';
import IconVK from '../icons/footer/IconVK.vue';

const { t } = useI18n();

const workStore = useWorksStore();
</script>

<template>
  <footer>
    <div class="wrapper">
      <div class="footer__top-block">
        <div class="footer__contact-block">
          <div class="footer__contact-item">
            <IconAddress></IconAddress>
            <div class="footer__text-block">
              <h2>Адрес</h2>
              <!-- todo  ссылка на яндекс-карты с точкой -->
              <p>РБ, г. Несвиж, ул. XXXXXXXXXX</p>
            </div>
          </div>

          <div class="footer__contact-item">
            <IconMail></IconMail>
            <div class="footer__text-block">
              <h2>Email</h2>
              <p>
                <a href="mailto:subneck@gmail.com">email@test.ru</a>
              </p>
            </div>
          </div>

          <div class="footer__contact-item">
            <IconWorkingHours></IconWorkingHours>
            <div class="footer__text-block">
              <h2 lang-id="footer__working-hours">Время работы</h2>
              <div class="footer__subtext-block">
                <div class="footer__subtext_left">
                  <p>пн - пт:</p>
                  <p>сб - вс:</p>
                </div>
                <div class="footer__subtext_right">
                  <p>08:00 - 17:00</p>
                  <p>09:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          <div class="footer__contact-item">
            <IconPhone></IconPhone>
            <div class="footer__text-block">
              <h2>Телефоны</h2>
              <div class="footer__subtext-block">
                <div class="footer__subtext_left">
                  <p>А1</p>
                  <p>МТС</p>
                </div>
                <div class="footer__subtext_right">
                  <p>
                    <a href="tel:+375447199961">+375 (44) 719-99-61</a>
                  </p>
                  <p>+375 (XX) XXX-XX-XX</p>
                </div>
              </div>
            </div>
          </div>
          <div class="social-links">
            <h2>Мы в социальных сетях:</h2>
            <div class="social-links__block">
              <a href="https://www.instagram.com/bliznyuksasha/" target="_blank" rel="noopener noreferrer">
                <IconInstagram></IconInstagram>
              </a>
              <a class="link-vk" href="https://www.instagram.com/bliznyuksasha/" target="_blank"
                rel="noopener noreferrer">
                <IconVK></IconVK>
              </a>
              <a href="https://t.me/+375447199961" target="_blank" rel="noopener noreferrer">
                <IconTelegram></IconTelegram>
              </a>

              <!-- !!! -->
              <a class="link-viber" href="viber://chat?number=%2B375447199961" rel="noopener noreferrer">
                <IconViber></IconViber>
              </a>
            </div>
          </div>
        </div>

        <div class="footer__site-map-block">
          <div class="footer__site-map-item">
            <h2>Наши работы</h2>
            <ul class="site-map-item__links" v-for="item in workStore.categories">
              <li class="site-map-item__link">
                <RouterLink :to="{ path: '/works', query: { category: item } }">{{ t('category-' + item) }}</RouterLink>
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
                <RouterLink to="/">Отзывы</RouterLink>
              </li>
              <li class="site-map-item__link">
                <RouterLink to="/about/">О нас</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="copyright-text">
        Copyright © 2023 <a href="">Fermata Soft</a>. Все права защищены.
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/_vars.scss';

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
    max-width: $wrapper-width;
    margin: 0 auto;
  }

  .footer__top-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 50px 0 25px 0;

    .footer__contact-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;

      .footer__contact-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;

        svg {
          width: 30px;
          fill: $accent-gradient;
        }

        .footer__text-block {
          color: $surface;

          h2 {
            font-size: 2rem;
            font-weight: $font-bold;
            margin-bottom: 10px;
          }

          p {
            font-size: 1.4rem;
          }

          a {
            font-size: 1.4rem;
            color: $inverse-on-surface;

            &:hover {
              color: $primary;
            }
          }

          .footer__subtext-block {
            display: flex;
            flex-direction: row;
            gap: 10px;
          }
        }
      }

      .social-links {
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
    }

    .footer__site-map-block {
      display: flex;
      flex-direction: row;
      gap: 100px;

      .footer__site-map-item {
        h2 {
          font-size: 2rem;
          font-weight: $font-bold;
          color: $inverse-on-surface;
          margin-bottom: 12px;
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

              &:hover {
                color: $inverse-on-surface;               
              }
              
              &::after {
                content: '';
  
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
  color: $inverse-on-surface;
  padding-bottom: 20px;

  a {
    color: $primary;
    font-weight: $font-regular;
  }
}
</style>
