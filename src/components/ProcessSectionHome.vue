<script setup>
import ProcessSlide from "./elements/ProcessSlide.vue";
import SectionHeader from "./elements/SectionHeader.vue";
</script>

<template>
  <SectionHeader text="Процесс изготовления"></SectionHeader>
  <ProcessSlide number="1" header="Снятие необходимых размеров" image="Measurement@1080w.png"></ProcessSlide>
  <ProcessSlide number="2" header="Создание дизайна и предварительное проектирование" image="Preliminary design@1080w.png"></ProcessSlide>
  <ProcessSlide number="3" header="Корректировка проекта и отрисовка в 3D" image="3D Visualization@1080w.png"></ProcessSlide>
  <ProcessSlide number="4" header="Изготовление кованого изделия" image="Forging@1080w.png"></ProcessSlide>
  <ProcessSlide number="5" header="Доставка и монтаж" image="Delivery@1080w.png"></ProcessSlide>
</template>

<style lang="scss" scoped></style>
