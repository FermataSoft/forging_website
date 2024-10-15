<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useFetch } from "@vueuse/core";
import SectionHeader from "../components/elements/SectionHeader.vue";
import ArticleCard from "../components/elements/ArticleCard.vue";
import ReloadOnError from "../components/elements/ReloadOnError.vue";

const { t } = useI18n();
const content = ref([{}, {}, {}]);
let isLoaded = ref(false);
let isError = ref(false);

onMounted(async () => {
  const { isFetching, error, data } = await useFetch(
    "/api/articles.php?query=SELECT id, title, description, creation_date, preview_image FROM articles"
  )
    .get()
    .json();

  // Fake API ---------------
/*   const fakeArticles = (await import("@/fakeapi/articles.json")).default;
  let error = { value: false}
  let data = ref([]);
  data.value = fakeArticles;
  isLoaded.value = true; */
  // --------------- Fake API

  if (error.value) {
    isError.value = !!error.value;
  } else {
    content.value = data.value;
    isLoaded.value = !isFetching.value;
  }
});
</script>

<template>
  <div class="articles">
    <div class="articles__wrapper" v-if="useRoute().path === '/articles'">
      <SectionHeader>{{ t("ArticlesHeader") }}</SectionHeader>
      <ReloadOnError v-if="isError"></ReloadOnError>
      <div class="articles__items" v-else>
        <ArticleCard
          v-for="item in content"
          :is-loaded="isLoaded"
          :id="item.id"
          :title="item.title"
          :description="item.description"
          :upload-date="item.creation_date"
          :preview-image="item.preview_image"
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
      ArticlesHeader: "Артыкулы"
    }
  }
</i18n>
