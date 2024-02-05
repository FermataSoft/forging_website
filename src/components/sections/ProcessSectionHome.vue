<script setup>
import ProcessSlide from "../elements/ProcessSlide.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="process-section">
    <SectionHeader>{{ t("SectionProcessHeader") }}</SectionHeader>
    <div class="process-section__slides">
      <ProcessSlide
        class="process-section__slide"
        number="1"
        header="Снятие необходимых размеров"
        image="Measurement@1080w.png"
      ></ProcessSlide>
      <ProcessSlide
        class="process-section__slide"
        number="2"
        header="Создание дизайна и предварительное проектирование"
        image="Preliminary design@1080w.png"
      ></ProcessSlide>
      <ProcessSlide
        class="process-section__slide"
        number="3"
        header="Корректировка проекта и отрисовка в 3D"
        image="3D Visualization@1080w.png"
      ></ProcessSlide>
      <ProcessSlide
        class="process-section__slide"
        number="4"
        header="Изготовление кованого изделия"
        image="Forging@1080w.png"
      ></ProcessSlide>
      <ProcessSlide
        class="process-section__slide"
        number="5"
        header="Доставка и монтаж"
        image="Delivery@1080w.png"
      ></ProcessSlide>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
