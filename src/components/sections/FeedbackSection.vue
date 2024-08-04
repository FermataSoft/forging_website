<script setup>
import Feedback from "../forms/Feedback.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="feedback-section">
    <h1>{{ t("headerFeedbackSection") }}</h1>
    <Feedback></Feedback>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

.feedback-section {
  width: 100%;
  margin-top: 80px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3.5rem;
    font-weight: $font-regular;
    color: $on-surface;
  }
}
</style>

<i18n>
  {
    ru-RU: {
      "headerFeedbackSection": "Свяжитесь с нами"
    },
    by-BY: {
      "headerFeedbackSection": "Звяжыцеся з намі"
    }
  }
</i18n>