<script setup>
import SectionHeader from "../components/elements/SectionHeader.vue"
</script>

<template>
  <div class="about-view">
    <div class="about-view__content">
      <SectionHeader>О нас</SectionHeader>
      <div class="about-view__content-slide">
        <h2 class="content-slide-title">Мы - команда профессионалов, знающих свое дело. Мы занимаемся изготовлением
          кованных изделий на заказ более
          10 лет.</h2>
        <div class="content-slide-image">
          <img src="../images/hero/Main-page_Image_3.webp" alt="">
        </div>
      </div>
      <div class="about-view__content-slide">
        <h2 class="content-slide-title">Наша мастерская оснащена современным оборудованием и инструментами, которые
          позволяют нам создавать уникальные и качественные кованные изделия для любых целей и на любой вкус.</h2>
        <div class="content-slide-image">
          <img src="../images/hero/Main-page_Image_1.webp" alt="">
        </div>
      </div>
      <div class="about-view__content-slide">
        <h2 class="content-slide-title">Мы учитываем все пожелания наших клиентов, а также предлагаем свои идеи и
          рекомендации по дизайну и исполнению кованных изделий.</h2>
        <div class="content-slide-image">
          <img src="../images/hero/Main-page_Image_1.webp" alt="">
        </div>
      </div>
      <div class="about-view__content-slide">
        <h2 class="content-slide-title">Мы гарантируем высокое качество нашей работы, соблюдение сроков и разумные цены.
        </h2>
        <div class="content-slide-image">
          <img src="../images/hero/Main-page_Image_1.webp" alt="">
        </div>
      </div>

      <ul class="about-view__content-text">

        <li>
          <p>Мы гарантируем высокое качество нашей работы, соблюдение сроков и разумные цены.</p>
        </li>
        <li>
          <p>Наша мастерская имеет множество положительных отзывов от довольных клиентов, которые оценили нашу
            креативность, ответственность и профессионализм. Мы любим свое дело и стремимся к совершенству в искусстве
            ковки. Мы рады видеть вас в числе наших заказчиков и готовы выполнить ваш любой даже самый смелый проект.</p>
        </li>
      </ul>

      <h2>Мы ждем вас!</h2>
      <h2>Свяжитесь с нами и мы обсудим все детали вашего проекта</h2>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import '../assets/vars.scss';

.about-view {}

.about-view__content {
  margin: 0 auto;
  width: 80%;
}

.about-view__content-slide {
  margin-bottom: 100px;

  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;

  &:nth-child(2n-1) {
    flex-direction: row-reverse;
  }
}

.content-slide-title {
  font-size: 3rem;
  width: 50%;
}

.content-slide-image {
  height: 100%;
  width: 50%;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
}


.about-view__content-slide {
  position: relative;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;

  margin-bottom: 100px;

  &:not(:last-child)::after {
    content: url('../icons/header_elements/Devider.png');

    position: absolute;
    bottom: -85px;
    left: auto;
  }

  &:nth-child(2n) {
    flex-direction: row-reverse;

    .content-slide-title {
      h3 {
        text-align: end;
      }
    }
  }

  .content-slide-image {
    height: 100%;

    img {
      height: 100%;
      margin-left: calc(100% - 100% / 1.09); // Trouble with clip-path position
      clip-path: url(#hexagon);
      -webkit-clip-path: url(#hexagon);
    }
  }

  &:nth-child(2n) img {
    margin-left: 0; // Trouble with clip-path position
  }

  .content-slide-title {
    text-align: justify;

    p {
      font-size: 2rem;
      margin-top: 20px;
    }
  }
}
</style>
