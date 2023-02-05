<script setup>
import IconAddress from '../icons/footer/IconAddress.vue';
import IconWorkingHours from '../icons/footer/IconWorkingHours.vue';
import IconMail from '../icons/footer/IconMail.vue';
import IconPhone from '../icons/footer/IconPhone.vue';
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
              <p>email@test.ru</p>
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
                  <p>+375 (XX) XXX-XX-XX</p>
                  <p>+375 (XX) XXX-XX-XX</p>
                </div>
              </div>
            </div>
          </div>
          <div class="social-links">
            <h2>Мы в социальных сетях:</h2>
            <div class="social-links__block">
              <a
                href="https://www.instagram.com/bliznyuksasha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../../images/icons/social/Instagram_Glyph_Gradient_RGB.svg" alt="" />
              </a>
              <a
                href="https://www.instagram.com/bliznyuksasha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../../images/icons/social/Telegram.svg" alt="" />
              </a>
              <a
                href="https://www.instagram.com/bliznyuksasha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../../images/icons/social/TikTok-Social-Icon-Circle-Black.svg" alt="" />
              </a>
              <a
                href="https://www.instagram.com/bliznyuksasha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../../images/icons/social/Gmail.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div class="footer__site-map-block">
          <div class="footer__site-map-item">
            <h2>Наши работы</h2>
            <ul>
              <li><RouterLink to="/">Лестницы</RouterLink></li>
              <li><RouterLink to="/">Ограждения</RouterLink></li>
              <li><RouterLink to="/">Ворота</RouterLink></li>
              <li><RouterLink to="/">Калитки</RouterLink></li>
              <li><RouterLink to="/">Козырьки</RouterLink></li>
              <li><RouterLink to="/">Дымники</RouterLink></li>
              <li><RouterLink to="/">Адресные таблички</RouterLink></li>
              <li><RouterLink to="/">Другое</RouterLink></li>
            </ul>
          </div>
          <div class="footer__site-map-item">
            <h2>Информация</h2>
            <ul>
              <li><RouterLink to="/">Статьи</RouterLink></li>
              <li><RouterLink to="/">Контакты</RouterLink></li>
              <li><RouterLink to="/">Отзывы</RouterLink></li>
              <li><RouterLink to="/">О нас</RouterLink></li>
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

footer {
  background-color: $navbar;
  margin-top: 50px;

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
          color: $accent;
        }

        .footer__text-block {
          color: $white;

          h2 {
            font-size: 2rem;
            font-weight: $font-bold;
            margin-bottom: 10px;
          }

          p {
            font-size: 1.6rem;
          }

          .footer__subtext-block {
            display: flex;
            flex-direction: row;
            gap: 10px;
          }
          .footer__subtext_left {
          }
          .footer__subtext_right {
          }
        }
      }

      .social-links {
        h2 {
          font-size: 1.6rem;
          margin-bottom: 10px;
          color: $white;
        }
        .social-links__block {
          display: flex;
          flex-direction: row;
          gap: 20px;

          a {
            width: 40px;
            height: auto;

            img {
              width: 100%;
              height: auto;
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
          color: $white;
          margin-bottom: 12px;
        }

        ul {
          li {
            margin-bottom: 12px;

            a {
              font-size: 1.6rem;
              font-weight: $font-regular;
              color: $gray;

              position: relative;

              &::after {
                content: '';

                display: block;
                position: absolute;
                bottom: -5px;
                left: 0;
                height: 2px;
                width: 100%;
                background-color: $accent;

                transform: scaleX(0);
                transform-origin: left;
                transition: all 0.3s ease-in-out;
              }

              &:hover {
                color: $white;
              }

              &:hover::after {
                transform: scaleX(1);
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
  color: $white;
  padding-bottom: 20px;

  a {
    color: $accent;
    font-weight: $font-regular;
  }
}
</style>
