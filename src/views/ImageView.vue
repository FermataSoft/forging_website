<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, watch, onMounted, onBeforeMount } from "vue";
import initSqlJs from "sql.js";
import appConfig from "../config.js";

const route = useRoute();
const router = useRouter();

const DBTableName = "images";
const initialImageIndex = ref(route.hash.slice(1) || "0");
const currentCategory = ref(route.query.category || "all");
const contentDbCount = ref(0); // lazy loading?
const content = ref({});

const slides = ref([]);

async function initDB() {
  const sqlPromise = initSqlJs({
    locateFile: (file) =>
      "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.wasm",
  });

  const dataPromise = fetch(appConfig.DatabasePath).then((res) =>
    res.arrayBuffer()
  );
  const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
  const db = new SQL.Database(new Uint8Array(buf));

  const contentDbCountQuery = db.prepare(
    `SELECT COUNT(*) FROM ${DBTableName};`
  );
  contentDbCountQuery.step();

  contentDbCount.value = contentDbCountQuery.get()[0];

  const contentDb = db.exec(getDBQuery(currentCategory.value));

  return {
    content: contentDb[0],
  };
}

function getDBQuery(category) {
  if (category === "all") {
    return `SELECT * FROM ${DBTableName};`;
  }
  return `SELECT * FROM ${DBTableName} WHERE category=${currentCategory.value};`;
}

function contentToObj(contentDB) {
  let result = [];
  let contentObj = {};

  contentDB.values.forEach((value) => {
    contentDB.columns.forEach((columnName, index) => {
      contentObj[columnName] = value[index];
    });
    result.push(contentObj);
    contentObj = {};
  });

  return result;
}

function addVirtualSlides(content = []) {
  let result = [];
  for (let item of content) {
    result.push({
      id: item.id,
      image: `../images/${item.srcFilename}`,
    });
  }
  return result;
}

const swiperEl = ref(null);

onBeforeMount(() => {
  initDB().then((result) => {
    content.value = contentToObj(result.content);
    slides.value = addVirtualSlides(content.value);

    swiperEl.value.swiper.on("slideChange", () => {
      router.replace({
        query: { category: currentCategory.value },
        hash:
          "#" +
          swiperEl.value.swiper.slides[
            swiperEl.value.swiper.activeIndex
          ].getAttribute("data-hash"),
      });
    });
  });
});
</script>

<template>
  <div class="image-view">
    <ButtonClose path-to="/works"></ButtonClose>
    <swiper-container
      class="swiper"
      ref="swiperEl"
      :keyboard="true"
      :initial-slide="initialImageIndex"
      :slides-per-view="1"
      :speed="500"
      :navigation="true"
      :pagination="{
        type: 'progressbar',
      }"
      virtual
    >
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in slides"
        :key="index"
        :data-hash="item.id"
      >
        <img :src="item.image" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_vars.scss";
.image-view {
  background: #000;
}

.swiper-slide {
  height: 100vh;
  background: $secondary;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

swiper-container::part(button-prev),
swiper-container::part(button-next) {
  color: $on-secondary;
  opacity: 0.5;
  width: 10%;
  height: 5rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    color: $primary;
    transform: scale(1.05);
  }
}

swiper-container::part(button-next) {
  right: 25px;
  justify-content: end;
}

swiper-container::part(button-prev) {
  left: 25px;
  justify-content: start;
}

swiper-container::part(pagination) {
  background: $on-surface-variant;
}
</style>
