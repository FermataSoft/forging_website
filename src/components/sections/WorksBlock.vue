<script setup>
import { ref, computed, onBeforeMount } from "vue";
import Pagination from "../../components/elements/Pagination.vue";
import { useFetch } from "@vueuse/core";
import AsyncImg from "../elements/AsyncImg.vue";
import ReloadOnError from "../elements/ReloadOnError.vue";

const props = defineProps({
  currentCategory: String,
  itemsPerPage: Number,
  sortBy: String,
  isAscendingOrder: Boolean,
});

const images = ref([]);
let currentPage = ref(1);
let isError = ref(false);

onBeforeMount(async () => {
  const { isFetching, error, data } = await useFetch(
    "/api/images.php?action=fetch-all",
    {
      refetch: true,
    }
  )
    .get()
    .json();
  if (error.value) {
    isError.value = !!error.value;
    // images.value = (await import("/src/fakeapi/images.json")).default;
  } else {
    images.value = data.value;
  }
});

// Normalize value according to column name in DB
const normalizedSortBy = computed(() => {
  switch (props.sortBy) {
    case "uploadDateNewFirst":
    case "uploadDateOldFirst":
      return "uploadDate";
    default:
      return props.sortBy;
  }
});

function sliceIntoChunks(arr, chunkSize) {
  let res = [];

  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
}

function sortItems(arr, sortByField, ascendingOrder = true) {
  if (typeof arr.map((value, index, array) => array[0]) === "string") {
    // strange behaviour arr[0][sortByField] not working
    return arr.sort((a, b) =>
      ascendingOrder
        ? a[sortByField].localeCompare(b[sortByField])
        : b[sortByField].localeCompare(a[sortByField])
    );
  } else {
    return arr.sort((a, b) =>
      ascendingOrder
        ? a[sortByField] - b[sortByField]
        : b[sortByField] - a[sortByField]
    );
  }
}

const imagesByCategory = computed(() => {
  if (props.currentCategory === "all") {
    return images.value;
  } else {
    return images.value.filter(
      (item) => item.category === props.currentCategory
    );
  }
});

const imagesByCategoryCount = computed(() => {
  return imagesByCategory.value.length;
});

const sortedImages = computed(() => {
  return sortItems(
    [...imagesByCategory.value],
    normalizedSortBy.value,
    props.isAscendingOrder
  );
});

const devidedImages = computed(() => {
  return sliceIntoChunks([...sortedImages.value], props.itemsPerPage);
});
</script>

<template>
  <div class="works-block-wrapper">
    <ReloadOnError v-if="isError"></ReloadOnError>

    <div class="works-block">
      <RouterLink
        class="works-block__item"
        :to="{
          path: '/image/',
          hash: `#${item.srcFilename}`,
          query: {
            category: props.currentCategory,
            ascending: isAscendingOrder,
          },
        }"
        v-for="item in devidedImages[currentPage]"
        :key="item.id"
      >
        <Transition name="fade-slide-up" appear mode="out-in">
          <AsyncImg
            class="works-block__item-image"
            :src="'/images/works/' + `${item.category}/${item.srcFilename}`"
            :alt="item.previewFilename"
          ></AsyncImg>
        </Transition>
      </RouterLink>
    </div>

    <Pagination
      @update="(currPage) => (currentPage = currPage - 1)"
      :totalCount="imagesByCategoryCount"
      :itemsPerPage="itemsPerPage"
      :currentCategory="props.currentCategory"
    ></Pagination>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

.works-block {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  padding: 30px 40px;

  @include breakpoint(lg) {
    grid-template-columns: repeat(3, 1fr);
  }
  @include breakpoint(md) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include breakpoint(sm) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 20px;
  }

  .works-block__item {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;

    &::before {
      content: url("data:image/svg+xml,%3Csvg id='Слой_1' data-name='Слой 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.41 21.41'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: none; stroke: %23fff; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 2px; %7D %3C/style%3E%3C/defs%3E%3Cg%3E%3Cline class='cls-1' x1='13.22' y1='8.2' x2='20.41' y2='1'/%3E%3Cline class='cls-1' x1='15.62' y1='1.5' x2='20.41' y2='1'/%3E%3Cline class='cls-1' x1='19.92' y1='5.79' x2='20.41' y2='1'/%3E%3C/g%3E%3Cg%3E%3Cline class='cls-1' x1='8.2' y1='13.22' x2='1' y2='20.41'/%3E%3Cline class='cls-1' x1='5.79' y1='19.92' x2='1' y2='20.41'/%3E%3Cline class='cls-1' x1='1.5' y1='15.62' x2='1' y2='20.41'/%3E%3C/g%3E%3C/svg%3E");
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      padding: 6px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transform: translateY(50%);
      transition: all 0.3s ease;
    }

    &:hover {
      &::before {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}

.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-up-enter-from,
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
</style>
