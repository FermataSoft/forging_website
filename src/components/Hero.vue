<script setup></script>

<template>
  <div class="hero">
    <mask class="mask" maskUnits="objectBoundingBox" x="0" y="0">
      <picture>
        <source
          class="hero__image"
          media="(hover: hover)"
          type="image/webp"
          srcset="
            ../images/hero/sizes/Main-page_hero-image@1000w.webp 1000w,
            ../images/hero/sizes/Main-page_hero-image@1920w.webp 1920w,
            ../images/hero/sizes/Main-page_hero-image@3840w.webp 3840w
          "
          sizes="
            (max-width: 800px) 1000px,
            (max-width: 1920px) 1920px,
            3840px
            "
        />
        <source
          class="hero__image"
          media="(hover: none) and (orientation: portrait)"
          type="image/webp"
          srcset="../images/hero/sizes/Main-page_hero-image@mobile-1000w.webp"
        />
        <source
          class="hero__image"
          media="(hover: none) and (orientation: portrait)"
          type="image"
          srcset="../images/hero/sizes/Main-page_hero-image@mobile-1000w.png"
        />
        <img
          class="hero__image"
          src="../images/hero/sizes/Main-page_hero-image@1920w.png"
          alt="hero__image"
        />
      </picture>
    </mask>
    <div class="hero__title-block">
      <!-- Интерьер<br />Сталь -->
      <h1 class="hero__title">Интерьер<br />Сталь</h1>
      <h2 class="hero__subtitle">Работаем по всей Беларуси</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/_vars.scss";
@import url("https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap");
.hero {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: $inverse-surface;

  .hero__title-block {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    text-align: right;

    .hero__title {
      font-family: "Play", sans-serif;
      font-size: 11rem;
      font-weight: 700;
      line-height: 11rem;
      color: $primary;
      filter: drop-shadow(20px 20px 30px $primary-opacity);
      // -webkit-filter: drop-shadow(20px 20px 40px $primary-opacity);
      // background: -webkit-linear-gradient(180deg, $tertiary, $primary);
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      @include breakpoint(lg) {
        font-size: 8rem;
        line-height: 8rem;
      }
      @include breakpoint(sm) {
        font-size: 6rem;
        line-height: 6rem;
      }
    }

    .hero__subtitle {
      margin-top: 2rem;
      font-size: 3.4rem;
      font-family: "Play", sans-serif;
      color: $tertiary;
      // -webkit-filter: drop-shadow(5px 0px 10px $secondary);
      filter: drop-shadow(5px 0px 10px $secondary);

      @include breakpoint(lg) {
        font-size: 2.5rem;
      }

      @include breakpoint(sm) {
        font-size: 2rem;
      }
    }
  }

  .hero__image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    mask: url("./masks/Brush\ stroke@1080p.svg");
    mask-repeat: no-repeat;
    mask-size: auto 100%;

    @media (min-aspect-ratio: 16/9) {
      mask-size: 100%;
    }

    @include breakpoint(lg) {
      mask-position: 30%;
    }
  }
}
</style>
