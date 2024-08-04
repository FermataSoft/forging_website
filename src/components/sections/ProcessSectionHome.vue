<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import ProcessSlide from "../elements/ProcessSlide.vue";

const { t } = useI18n();

const slides = ref([
  {
    number: 1,
    headerI18n: "Measurement",
    image: "Measurement@1080w.webp",
  },
  {
    number: 2,
    headerI18n: "PreliminaryDesign",
    image: "Preliminary-design@1080w.webp",
  },
  {
    number: 3,
    headerI18n: "3DVisualization",
    image: "3D-Visualization@1080w.webp",
  },
  {
    number: 4,
    headerI18n: "Forging",
    image: "Forging@1080w.webp",
  },
  {
    number: 5,
    headerI18n: "Delivery",
    image: "Delivery@1080w.webp",
  },
]);

const swiperEl = ref(null);
</script>

<template>
  <div class="process-section">
    <div class="process_section__header">
      <SectionHeader inverseColor noMargin>{{
        t("SectionProcessHeader")
      }}</SectionHeader>
    </div>
    <div class="process-section__slides">
      <swiper-container
        class="swiper-container"
        ref="swiperEl"
        :slides-per-view="1"
        :speed="1000"
        :autoplay="{
          delay: 3000,
        }"
        :pagination="{
          type: 'bullets',
          clickable: true,
        }"
        virtual
      >
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in slides"
          :key="index"
        >
          <ProcessSlide
            class="process-section__slide"
            :key="item.number"
            :number="item.number"
            :header="t(item.headerI18n)"
            :image="item.image"
          ></ProcessSlide>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/vars";
.process-section {
  width: 100%;
  overflow: hidden;
  background-color: $inverse-surface;
  margin-top: 50px;
}

.process_section__header {
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  background-color: $inverse-surface;
  z-index: 4;

  @include breakpoint(md) {
    padding-bottom: 0;
  }
}

.process-section__slides {
  height: 50vh;
  min-height: 500px;

  .swiper-container {
    height: 100%;
  }
}

.process-section__slide {
  background-color: $surface-container-highest;
}
</style>

<i18n>
  {
    "ru-RU": {
      "Measurement": "Снятие необходимых размеров",
      "PreliminaryDesign": "Создание дизайна и предварительное проектирование",
      "3DVisualization": "Корректировка проекта и отрисовка в 3D",
      "Forging": "Изготовление кованого изделия",
      "Delivery": "Доставка и монтаж"
    },
    "by-BY": {
      "Measurement": "",
      "PreliminaryDesign": "",
      "3DVisualization": "",
      "Forging": "",
      "Delivery": ""
    }
  }
</i18n>
