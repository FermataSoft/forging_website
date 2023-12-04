<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import initSqlJs from "sql.js";

const routePath = useRoute().path;
const currentArticleID = ref(routePath.slice(routePath.lastIndexOf("/") + 1));
const contentDbCount = ref(0);

const content = ref({
  current: {},
  prev: {},
  next: {},
});

const isPrevArticleShow = ref(false);

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
    `SELECT id, title, html_text FROM articles WHERE id = ${currentArticleID.value};`
  );
  contentDb.step();

  const contentDbPrev = db.prepare(
    `SELECT id, title FROM articles WHERE id = ${prepareDBQuery(
      contentDbCount.value,
      currentArticleID.value,
      "prev"
    )};`
  );
  contentDbPrev.step();

  const contentDbNext = db.prepare(
    `SELECT id, title FROM articles WHERE id = ${prepareDBQuery(
      contentDbCount.value,
      currentArticleID.value,
      "next"
    )};`
  );
  contentDbNext.step();

  return [
    contentDb.getAsObject(),
    contentDbPrev.getAsObject(),
    contentDbNext.getAsObject(),
    contentDbCount
  ];
}

function prepareDBQuery(count, current, order = "prev" ?? "next") {
  count = +count;
  current = +current;

  switch (order) {
    case "prev":
      return current - 1 <= 0 ? count : current - 1;
    case "next":
      return current + 1 > count ? 1 : current + 1;
  }
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
    [content.value["current"], content.value["prev"], content.value["next"], contentDbCount.value] =
      result;
    
    if (content.value.next["id"] !== content.value.prev["id"]) isPrevArticleShow = true;
    console.log(content.value);
  });
});
</script>

<template>
  <div class="article">
    <div class="article__content">
      <h1>{{ content.current.title }}</h1>
      <p v-html="content.current.html_text"></p>
    </div>

    <div class="article__navigation-block">
      <div class="article__navigation-prev" v-show="isPrevArticleShow">
        <span>← Предыдущая</span>
      </div>
      
      <div class="article__navigation-next">
        <span>Следующая →</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
