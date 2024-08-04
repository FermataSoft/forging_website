<script setup>
import BenefitsItem from "../elements/BenefitsItem.vue";
import SectionHeader from "../elements/SectionHeader.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="benefits-section">
    <SectionHeader>{{ t("SectionBenefitsHeader") }}</SectionHeader>
    <div class="benefits-section__items">
      <BenefitsItem icon="drawing@96.webp">{{
        t("SectionBenefitsItem1")
      }}</BenefitsItem>
      <BenefitsItem icon="stack-of-coins@96.webp">{{
        t("SectionBenefitsItem2")
      }}</BenefitsItem>
      <BenefitsItem icon="embroidery@96.webp">{{
        t("SectionBenefitsItem3")
      }}</BenefitsItem>
      <BenefitsItem icon="quality@96.webp">{{
        t("SectionBenefitsItem4")
      }}</BenefitsItem>
      <BenefitsItem icon="key@96.webp">{{
        t("SectionBenefitsItem5")
      }}</BenefitsItem>
      <BenefitsItem icon="3d-model@96.webp">{{
        t("SectionBenefitsItem6")
      }}</BenefitsItem>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

.benefits-section {
  max-width: 100%;

  @include breakpoint(md) {
    padding: 20px 0;
  }
}

.benefits-section__items {
  width: fit-content;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 100px;
  row-gap: 50px;

  @include breakpoint(lg) {
    column-gap: 50px;
  }

  @include breakpoint(md) {
    column-gap: 25px;
  }

  @include breakpoint(sm) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
}
</style>
