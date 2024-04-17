<script setup>
import SectionHeader from "../components/elements/SectionHeader.vue";
</script>

<template>
  <div class="about-view">
    <div class="about-view__content">
      <svg id="hexagon-mask" viewBox="0 0 1 1" preserveAspectRatio="none">
        <clipPath id="hexagon" clipPathUnits="objectBoundingBox">
          <path
            d="M.09.32V.68A.09.09,0,0,0,.14.76L.45.94a.09.09,0,0,0,.1,0L.86.76A.09.09,0,0,0,.91.68V.32A.09.09,0,0,0,.86.24L.55.06a.09.09,0,0,0-.1,0L.14.24A.09.09,0,0,0,.09.32Z"
          />
        </clipPath>
      </svg>
      <SectionHeader>О нас</SectionHeader>
      <div class="about-view__content-slide">
        <div class="about-view__content-slide-image">
          <img src="../images/hero/Main-page_Image_3.webp" alt="" />
        </div>
        <p class="about-view__content-slide-title">
          Мы - команда профессионалов, знающих свое дело. Мы занимаемся
          изготовлением лестниц, металлокаркасов и различных кованных изделий на заказ более 10 лет.
        </p>
      </div>
      <div class="about-view__content-slide">
        <div class="about-view__content-slide-image">
          <img src="../images/hero/Main-page_Image_1.webp" alt="" />
        </div>
        <p class="about-view__content-slide-title">
          Наша мастерская оснащена современным оборудованием и инструментами,
          которые позволяют нам создавать уникальные и качественные изделия для любых целей и на любой вкус.
        </p>
      </div>
      <div class="about-view__content-slide">
        <div class="about-view__content-slide-image">
          <img src="../images/hero/Main-page_Image_4.webp" alt="" />
        </div>
        <h2 class="about-view__content-slide-title">
          Мы учитываем все пожелания наших клиентов, а также предлагаем свои
          идеи и рекомендации по дизайну и исполнению кованных изделий.
        </h2>
      </div>
      <div class="about-view__content-slide">
        <div class="about-view__content-slide-image">
          <img src="../images/hero/Main-page_Image_5.jpg" alt="" />
        </div>
        <p class="about-view__content-slide-title">
          Мы гарантируем высокое качество нашей работы, соблюдение сроков и
          разумные цены.
        </p>
      </div>
    </div>

    <h2 class="catchy-header">
      Свяжитесь с нами<br />и мы обсудим все детали<br />вашего проекта!
    </h2>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/vars.scss";

#hexagon-mask {
  position: absolute;
  width: 0;
  height: 0;
}

.about-view {
  max-width: $wrapper-width;
  margin: 0 auto;

  @include breakpoint(lg) {
    padding: 0 20px;
  }
}

.about-view__content-slide {
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;

  @include breakpoint(sm) {
    margin-bottom: 50px;
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  &:nth-child(2n-1) {
    flex-direction: row-reverse;
    text-align: right;

    @include breakpoint(sm) {
      flex-direction: column;
      text-align: center;
    }
  }

  &:nth-child(2n) img {
    margin-left: 0; // Trouble with clip-path position
  }
}

.about-view__content-slide-title {
  font-size: 2.4rem;
  width: 50%;

  @include breakpoint(sm) {
    font-size: 1.6rem;
    width: 100%;
  }
}

.about-view__content-slide-image {
  width: 50%;
  max-width: 500px;

  @include breakpoint(sm) {
    width: 250px;
  }

  img {
    width: 100%;
    margin-left: calc(100% - 100% / 1.09); // Trouble with clip-path position
    clip-path: url(#hexagon);
    -webkit-clip-path: url(#hexagon);

    @include breakpoint(sm) {
      margin-left: 0;
    }
  }
}

.catchy-header {
  font-size: 5rem;
  text-align: center;
  color: $on-surface;
  font-weight: $font-medium;
  margin-top: 50px;
  margin-bottom: 100px;

  @include breakpoint(sm) {
    font-size: 2.4rem;
  }
}
</style>
