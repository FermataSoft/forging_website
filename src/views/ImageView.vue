<script setup>
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
import { useFetch } from "@vueuse/core";

const route = useRoute();
const swiperEl = ref(null);

const DBTableName = "images";
const initialImageIndex = ref(); // define index according to id from db array
const currentCategory = ref(route.query.category || "all");
const slides = ref([]);

onBeforeMount(async () => {
  const query = getDBQuery(currentCategory.value);
  console.log(query);

  const { isFetching, error, data } = await useFetch(
    `/database.php?action=fetch-all&query=${query}`,
    {
      refetch: true,
    }
  )
    .get()
    .json();

  slides.value = addVirtualSlides(data.value);
  initialImageIndex.value = slides.value.findIndex(
    (value) => value.id == route.hash.slice(1)
  );
  swiperEl.value.swiper.slideTo(initialImageIndex.value);
});

function getDBQuery(category) {
  if (category === "all") {
    return `SELECT * FROM ${DBTableName}`;
  }
  return `SELECT * FROM ${DBTableName} WHERE category="${currentCategory.value}"`;
}

function addVirtualSlides(content = []) {
  let result = [];
  if (!Array.isArray(content)) {
    content = [...content];
  }

  for (let item of content) {
    result.push({
      id: item.id,
      image: `../images/${item.srcFilename}`,
    });
  }
  return result;
}
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
  opacity: 0.3;
  height: 5rem;
  transition: all 0.3s ease;
  background-color: $secondary;
  padding: 30px 40px;
  border-radius: 10px;

  @include breakpoint(xs) {
    opacity: 1;
    height: 3rem;
    padding: 30px 20px;
    background-color: hsla(0, 0%, 21%, 0.2);

    &:active {
      color: $primary;
    }
  }

  @include device(screen) {
    &:hover {
      opacity: 1;
      color: $primary;
      transform: scale(1.05);
    }
  }
}

swiper-container::part(button-next) {
  right: 25px;
  justify-content: end;

  @include breakpoint(xs) {
    right: 5px;
  }
}

swiper-container::part(button-prev) {
  left: 25px;
  justify-content: start;

  @include breakpoint(xs) {
    left: 5px;
  }
}

swiper-container::part(pagination) {
  background: $on-surface-variant;
}
</style>
