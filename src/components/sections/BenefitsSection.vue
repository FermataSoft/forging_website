<script setup>
import BenefitsItem from "../elements/BenefitsItem.vue";
import SectionHeader from "../elements/SectionHeader.vue";
</script>

<template>
  <SectionHeader text="Наши преимущества"></SectionHeader>
  <div class="benefits-block">
    <BenefitsItem
      icon="drawing@96.webp"
      text="Индивидуальный подход к каждому заказу"
    ></BenefitsItem>
    <BenefitsItem icon="stack-of-coins@96.webp" text="Конкурентная цена"></BenefitsItem>
    <BenefitsItem
      icon="embroidery@96.webp"
      text="Выполняем даже самые смелые Ваши решения"
    ></BenefitsItem>
    <BenefitsItem
      icon="quality@96.webp"
      text="Высокое качество изготовления. Все сварные стыки тщательно зачищаются и полируются"
    ></BenefitsItem>
    <BenefitsItem
      icon="key@96.webp"
      text="Изделия выполняем “под ключ”. Осуществляем доставку"
    ></BenefitsItem>
    <BenefitsItem
      icon="3d-model@96.webp"
      text="Один из этапов изготовления - 3D визуализация будущего изделия"
    ></BenefitsItem>
  </div>
</template>

<style lang="scss" scoped>
.benefits-block {
  width: fit-content;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 100px;
  row-gap: 50px;
}
</style>
