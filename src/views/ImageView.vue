<script setup>
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
import appConfig from "../globals";
import { Database } from "../api/db";

const route = useRoute();
const db = new Database();
const swiperEl = ref(null);

const DBTableName = "images";
const initialImageIndex = ref(); // define index according to id from db array
const currentCategory = ref(route.query.category || "all");
const content = ref({});
const slides = ref([]);


function getDBQuery(category) {
  if (category === "all") {
    return `SELECT * FROM ${DBTableName};`;
  }
  return `SELECT * FROM ${DBTableName} WHERE category="${currentCategory.value}";`;
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

onBeforeMount(() => {
  const query = getDBQuery(currentCategory.value)
  db.getContent(query)
    .then((result) => (content.value = db.contentToObj(result)))
    .then(() => {
      slides.value = addVirtualSlides(content.value);
      initialImageIndex.value = slides.value.findIndex(
        (value) => value.id == route.hash.slice(1)
      );
      swiperEl.value.swiper.slideTo(initialImageIndex.value);
    });
});
</script>

<template>
  <div class="image-view">
    <ButtonClose
      :path-to="{ path: '/works', query: { category: currentCategory } }"
    ></ButtonClose>
    <swiper-container
      class="swiper"
      ref="swiperEl"
      :keyboard="true"
      :slides-per-view="1"
      :speed="500"
      :navigation="true"
      :pagination="{
        type: 'progressbar',
      }"
      virtual
      :hash-navigation="true"
      :hash-navigation-replace-state="true"
      :hash-navigation-watch-state="true"
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
