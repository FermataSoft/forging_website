<script setup>
import Hero from '../components/Hero.vue';
import ProductSectionHome from '../components/sections/ProductSectionHome.vue';
import ButtonLink from '../components/elements/ButtonLink.vue';
import ProcessSectionHome from '../components/sections/ProcessSectionHome.vue';
import BenefitsSection from '../components/sections/BenefitsSection.vue';
import FeedbackSection from '../components/sections/FeedbackSection.vue';
</script>

<template>
  <main>
    <Hero></Hero>
    <div class="wrapper">
      <ProductSectionHome></ProductSectionHome>
      <ButtonLink class="btn-works" link="/works" text="ButtonOurWorks"></ButtonLink>
    </div>

    <ProcessSectionHome></ProcessSectionHome>

    <div class="wrapper">
      <BenefitsSection></BenefitsSection>
      <FeedbackSection></FeedbackSection>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '../assets/_vars.scss';

main {
  width: 100%;
  text-align: center;

  .wrapper {
    max-width: $wrapper-width;
    margin: 0 auto;
  }

  .btn-works {
    margin: 0 auto;
  }

  .btn-works {
    margin: 0 auto;
  }
}
</style>
