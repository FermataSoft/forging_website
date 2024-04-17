<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import SectionHeader from "../components/elements/SectionHeader.vue";
import ArticleCard from "../components/elements/ArticleCard.vue";

import { Database } from "../api/db";

const { t } = useI18n();
const content = ref([]);
const db = new Database();

onBeforeMount(async () => {
  content.value = await db.getContent("SELECT * FROM articles;");
});
</script>

<template>
  <div class="articles">
    <div class="articles__wrapper" v-if="useRoute().path === '/articles'">
      <SectionHeader>{{ t("ArticlesHeader") }}</SectionHeader>

      <div class="articles__items">
        <ArticleCard
          v-for="item in content"
          :id="item.id"
          :title="item.title"
          :description="item.description"
          :upload-date="item.creation_date"
        >
        </ArticleCard>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.articles {
  width: 100%;
  margin-bottom: 50px;
  max-width: $wrapper-width;
  margin-left: auto;
  margin-right: auto;

  @include breakpoint(lg) {
    padding: 0 20px;
  }
}

.articles__items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

<i18n>
  {
    "ru-RU": {
      ArticlesHeader: "Статьи"
    },
    "by-BY": {
      ArticlesHeader: "Артыкул"
    }
  }
</i18n>
