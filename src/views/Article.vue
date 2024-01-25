<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import initSqlJs from "sql.js";
import ButtonGoBack from "../components/elements/ButtonGoBack.vue";

const routePath = useRoute().path;
const currentArticleID = ref(routePath.slice(routePath.lastIndexOf("/") + 1));
const contentDbCount = ref(0);

const content = ref({
  current: {},
  prev: {},
  next: {},
});

const isPrevArticleShow = ref(false);
const isNextArticleShow = ref(false);

async function initDB() {
  const sqlPromise = initSqlJs({
    locateFile: (file) =>
      "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.wasm",
  });

  const dataPromise = fetch("../database.db").then((res) => res.arrayBuffer());
  const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
  const db = new SQL.Database(new Uint8Array(buf));

  const contentDbCountQuery = db.prepare(`SELECT COUNT(*) FROM articles;`);
  contentDbCountQuery.step();

  contentDbCount.value = contentDbCountQuery.get()[0];

  const contentDb = db.prepare(
    `SELECT id, title, html_text, creation_date FROM articles WHERE id = ${currentArticleID.value};`
  );
  contentDb.step();

  const contentDbPrev = db.prepare(
    `SELECT id, title FROM articles WHERE id = ${definePrevId(
      contentDbCount.value,
      currentArticleID.value
    )};`
  );
  contentDbPrev.step();

  const contentDbNext = db.prepare(
    `SELECT id, title FROM articles WHERE id = ${defineNextId(
      contentDbCount.value,
      currentArticleID.value
    )};`
  );
  contentDbNext.step();

  return [
    contentDb.getAsObject(),
    contentDbPrev.getAsObject(),
    contentDbNext.getAsObject(),
    contentDbCount.value,
  ];
}

function defineNextId(count, current) {
  return +current + 1 > +count ? 1 : +current + 1;
}

function definePrevId(count, current) {
  return +current - 1 <= 0 ? +count : +current - 1;
}

// function contentToObj(contentDB) {
//   let contentObj = {};

//   contentDB.values.forEach((value) => {
//     contentDB.columns.forEach((columnName, index) => {
//       contentObj[columnName] = value[index];
//     });
//     content.value.push(contentObj);
//     contentObj = {};
//   });
// }

onMounted(() => {
  initDB().then((result) => {
    [
      content.value["current"],
      content.value["prev"],
      content.value["next"],
      contentDbCount.value,
    ] = result;

    if (content.value.next["id"] !== content.value.prev["id"])
      isPrevArticleShow.value = true;
    if (contentDbCount.value > 1) isNextArticleShow.value = true;
  });
});
</script>

<template>
  <div class="article">
    <div class="article__top-bar">
      <button-go-back></button-go-back>
    </div>

    <div class="article__content">
      <div class="article__content-header">
        <h1 class="article__title">{{ content.current.title }}</h1>
        <span class="article__creation-date">{{
          new Date(+content.current.creation_date).toLocaleDateString()
        }}</span>
      </div>
      <div class="article__content-block">
        <p v-html="content.current.html_text"></p>
      </div>
    </div>

    <div class="article__navigation-block">
      <router-link
        class="article__navigation-item article__navigation-prev"
        :to="`/articles/${definePrevId(contentDbCount, currentArticleID)}`"
        v-show="isPrevArticleShow"
      >
        ← Предыдущая статья
      </router-link>
      <router-link
        class="article__navigation-item article__navigation-next"
        :to="`/articles/${defineNextId(contentDbCount, currentArticleID)}`"
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
  width: $wrapper-width;
  margin: 0 auto;
  // padding: 20px;
}

.article__top-bar {
  margin-bottom: 30px;
}

.article__content {
  .article__content-header {
    margin-bottom: 30px;

    .article__title {
      position: relative;
      font-size: $header1;
      font-weight: bold;
      margin-bottom: 30px;

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
    }
  }

  p {
    font-size: $paragraph;
    margin-bottom: 20px;
    line-height: 2rem;
  }

  img {
    margin: 20px;
  }
}
.article__navigation-block {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 50px;
}

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

  &:hover {
    background-color: $surface-container-low;
  }
}
</style>
