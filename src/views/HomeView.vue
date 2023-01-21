<script setup>
import Hero from "../components/Hero.vue";
import ProductSectionHome from "../components/ProductSectionHome.vue";
import ButtonLink from "../components/ButtonLink.vue";
import ProcessSectionHome from "../components/ProcessSectionHome.vue";
import BenefitsSection from "../components/sections/BenefitsSection.vue";
import FeedbackSection from '../components/sections/FeedbackSection.vue';
import ScrollTopButton from '../components/elements/ScrollTopButton.vue'
</script>

<template>
  <main>
    <Hero></Hero>
    <div class="wrapper">
      <ProductSectionHome></ProductSectionHome>
      <ButtonLink text="Наши работы"></ButtonLink>
    </div>

    <ProcessSectionHome></ProcessSectionHome>

    <div class="wrapper">
      <BenefitsSection></BenefitsSection>
      <FeedbackSection></FeedbackSection>
    </div>

    <ScrollTopButton></ScrollTopButton>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/_vars.scss";

main {
  width: 100%;
  text-align: center;

  .wrapper {
    max-width: $wrapper-width;
    margin: 0 auto;
  }
}
</style>
