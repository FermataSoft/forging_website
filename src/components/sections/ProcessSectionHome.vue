<script setup>
import { ref, onMounted } from "vue";
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
onMounted(() => {});
</script>

<template>
  <div class="process-section">
    <SectionHeader class="process-section__header" inverseColor>{{
      t("SectionProcessHeader")
    }}</SectionHeader>
    <div class="process-section__slides">
      <ProcessSlide
        v-for="slide in slides"
        :key="slide.number"
        class="process-section__slide"
        :number="slide.number"
        :header="t(slide.headerI18n)"
        :image="slide.image"
      ></ProcessSlide>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/vars";
.process-section {
  width: 100%;
  background-color: $inverse-surface;
  margin-top: 50px;
}

.process-section__header {
  color: $inverse-on-surface;
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
