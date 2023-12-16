<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import SectionHeader from "../components/elements/SectionHeader.vue";
import ArticleCard from "../components/elements/ArticleCard.vue";
import initSqlJs from "sql.js";

const { t } = useI18n();
const content = ref([]);

async function initDB() {
  const sqlPromise = initSqlJs({
    locateFile: (file) =>
      "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.wasm",
  });

  const dataPromise = fetch("../database.db").then((res) => res.arrayBuffer());
  const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
  const db = new SQL.Database(new Uint8Array(buf));

  const contentDb = db.exec(`SELECT * FROM articles`);

  return contentDb[0];
}

function contentToObj(contentDB) {
  let contentObj = {};

  contentDB.values.forEach((value) => {
    contentDB.columns.forEach((columnName, index) => {
      contentObj[columnName] = value[index];
    });
    content.value.push(contentObj);
    contentObj = {};
  });
}

onBeforeMount(() => {
  initDB().then((result) => {
    contentToObj(result);
    console.log(content.value);
  });
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
  margin-bottom: 50px;
  max-width: $wrapper-width;
  margin-left: auto;
  margin-right: auto;
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
