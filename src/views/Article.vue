<script setup>
import { ref, onMounted, onBeforeMount, reactive } from "vue";
import { useRoute } from "vue-router";
import ButtonGoBack from "../components/elements/ButtonGoBack.vue";
import { useFetch } from "@vueuse/core";

const routePath = useRoute().path;
const currentArticleID = ref(routePath.slice(routePath.lastIndexOf("/") + 1));

const content = reactive({
  count: 0,
  IDs: [],
  current: {},
  prevID: null,
  nextID: null,
});

const isPrevArticleShow = ref(false);
const isNextArticleShow = ref(false);

onBeforeMount(async () => {
  content.IDs = await getDataFromDB(
    "/api/articles.php?query=SELECT id FROM articles"
  ).then((result) => result.map((value) => value["id"]));
  content.count = content.IDs.length;

  content.current =
    await getDataFromDB(`/api/articles.php?action=fetch-one&query=SELECT id, title, html_text, creation_date
  FROM articles WHERE id = ${currentArticleID.value};`).then(
      (result) => result[0]
    );

  content.prevID = definePrevId(content.IDs, currentArticleID.value);

  content.nextID = defineNextId(content.IDs, currentArticleID.value);
});

onMounted(async () => {
  checkLessTwoArticles();
});

async function getDataFromDB(query) {
  const { isFetching, error, data } = await useFetch(query, { refetch: true })
    .get()
    .json();
  return data.value;
}

function checkLessTwoArticles() {
  if (content.nextID !== content.prevID) {
    isPrevArticleShow.value = true;
  }
  if (content.count > 1) isNextArticleShow.value = true;
}

function defineNextId(elementsID = [], currentID) {
  let IDs = [...elementsID]; // elementsID is a Proxy(Array)
  let currentIndex = IDs.indexOf(+currentID);
  let count = IDs.length;
  let nextIndex = +currentIndex >= +count - 1 ? 0 : +currentIndex + 1;

  return IDs[nextIndex];
}

function definePrevId(elementsID = [], currentID) {
  let IDs = [...elementsID];
  let currentIndex = IDs.indexOf(+currentID);
  let count = IDs.length;
  let prevIndex = +currentIndex <= 0 ? +count - 1 : +currentIndex - 1;

  return IDs[prevIndex];
}
</script>

<template>
  <div class="article">
    <div class="article__top-bar">
      <ButtonGoBack></ButtonGoBack>
    </div>

    <Suspense>
      <div class="article__content">
        <div class="article__content-header">
          <h1 class="article__title">{{ content.current.title }}</h1>
          <time class="article__creation-date">{{
            new Date(+content.current.creation_date).toLocaleDateString()
          }}</time>
        </div>
        <div class="article__content-block">
          <p v-html="content.current.html_text"></p>
        </div>
      </div>
    </Suspense>

    <div class="article__navigation-block">
      <router-link
        class="article__navigation-item article__navigation-prev"
        :to="`/articles/${content.prevID}`"
        v-show="isPrevArticleShow"
      >
        ← Предыдущая статья
      </router-link>
      <router-link
        class="article__navigation-item article__navigation-next"
        :to="`/articles/${content.nextID}`"
        v-show="isNextArticleShow"
      >
        <span>Следующая статья →</span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_vars.scss";
.article {
  max-width: $wrapper-width;
  margin: 0 auto;
}

.article__top-bar {
  position: fixed;
  top: $navbar-height;
  width: $wrapper-width;
  background-color: $surface-container-highest;
  z-index: 3;
}

.article__content {
  .article__content-header {
    margin-bottom: 30px;
    padding-top: 70px;

    .article__title {
      position: relative;
      font-size: $header2;
      font-weight: $font-medium;
      margin-bottom: 30px;

      @include breakpoint(sm) {
        font-size: $header2-mobile;
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -20px;
        left: 0;
        height: 7px;
        width: 150px;
        border-radius: 0 5px 5px 0;
        background-color: $primary;
      }
    }

    .article__creation-date {
      font-size: $paragraph;
      color: $secondary;

      @include breakpoint(sm) {
        font-size: $paragraph-mobile;
      }
    }
  }

  &:deep(ol) {
    li {
      list-style: auto;
      list-style-position: inside;
    }
  }

  &:deep(ul) {
    li {
      list-style: inside;
      list-style-position: inside;
    }
  }

  &:deep(p) {
    font-size: $paragraph;
    text-align: justify;
    text-indent: 3rem;
    margin-bottom: 20px;
    line-height: 2rem;

    @include breakpoint(sm) {
      font-size: $paragraph-mobile;
    }
  }

  &:deep(img) {
    display: inline-block;
    margin: 20px;
    max-width: 80%;
  }

  &:deep(a) {
    color: $tertiary;
  }
}
.article__navigation-block {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 50px;

  .article__navigation-item {
    height: 100px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: all 0.2s;

    font-size: $font-controls;
    font-weight: $font-medium;
    color: $on-surface;

    @include breakpoint(sm) {
      font-size: $font-controls-mobile;
    }

    @media screen {
      &:hover {
        background-color: $surface-container-low;
      }
    }
  }
}
</style>