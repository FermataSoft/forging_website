<script setup>
import SectionHeader from "../components/elements/SectionHeader.vue"
</script>

<template>
  <div class="about-view">
    <div class="about-view__content">
      <svg id="hexagon-mask" viewBox="0 0 1 1" preserveAspectRatio="none">
        <clipPath id="hexagon" clipPathUnits="objectBoundingBox">
          <path
            d="M.09.32V.68A.09.09,0,0,0,.14.76L.45.94a.09.09,0,0,0,.1,0L.86.76A.09.09,0,0,0,.91.68V.32A.09.09,0,0,0,.86.24L.55.06a.09.09,0,0,0-.1,0L.14.24A.09.09,0,0,0,.09.32Z" />
        </clipPath>
      </svg>
      <SectionHeader>О нас</SectionHeader>
      <div class="about-view__content-slide">
        <div class="about-view__content-slide-image">
          <img src="../images/hero/Main-page_Image_3.webp" alt="">
        </div>
        <h2 class="about-view__content-slide-title">Мы - команда профессионалов, знающих свое дело. Мы занимаемся изготовлением
          кованных изделий на заказ более
          10 лет.</h2>
      </div>
      <div class="about-view__content-slide">
        <div class="about-view__content-slide-image">
          <img src="../images/hero/Main-page_Image_1.webp" alt="">
        </div>
        <h2 class="about-view__content-slide-title">Наша мастерская оснащена современным оборудованием и инструментами, которые
          позволяют нам создавать уникальные и качественные кованные изделия для любых целей и на любой вкус.</h2>
      </div>
      <div class="about-view__content-slide">
        <div class="about-view__content-slide-image">
          <img src="../images/hero/Main-page_Image_4.webp" alt="">
        </div>
        <h2 class="about-view__content-slide-title">Мы учитываем все пожелания наших клиентов, а также предлагаем свои идеи и
          рекомендации по дизайну и исполнению кованных изделий.</h2>
      </div>
      <div class="about-view__content-slide">
        <div class="about-view__content-slide-image">
          <img src="../images/hero/Main-page_Image_5.jpg" alt="">
        </div>
        <h2 class="about-view__content-slide-title">Мы гарантируем высокое качество нашей работы, соблюдение сроков и разумные цены.
        </h2>
      </div>
    </div>

    <h2 class="catchy-header">Свяжитесь с нами<br>и мы обсудим все детали<br>вашего проекта!</h2>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/vars.scss';

#hexagon-mask {
  position: absolute;
  width: 0;
  height: 0;
}

.about-view__content {
  margin: 0 auto;
  width: 80%;
}

.about-view__content-slide {
  position: relative;
  margin-bottom: 100px;

  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;

  &:nth-child(2n-1) {
    flex-direction: row-reverse;
    text-align: right;
  }

  &:not(:last-child)::after {
    content: url('../components/icons/header_elements/Devider.png');

    position: absolute;
    bottom: -85px;
    left: auto;
  }
 
  &:nth-child(2n) img {
    margin-left: 0; // Trouble with clip-path position
  }
}

.about-view__content-slide-title {
  font-size: 3rem;
  width: 50%;

}

.about-view__content-slide-image {
  width: 50%;

    img {
      width: 100%;
      margin-left: calc(100% - 100% / 1.09); // Trouble with clip-path position
      clip-path: url(#hexagon);
      -webkit-clip-path: url(#hexagon);
    }
}

.catchy-header {
  font-size: 5rem;
  text-align: center;
  color: $on-surface;
  font-weight: $font-medium;
  margin-bottom: 100px;
}
</style>
