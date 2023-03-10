<script setup>
import { ref, computed } from 'vue';
import Pagination from '../../components/elements/Pagination.vue';
import works from '../../assets/works.json';

const props = defineProps({
  currentCategory: String,
  itemsPerPage: Number,
  sortBy: String,
  isAscendingOrder: Boolean,
});

let currentPage = ref(1);

function sliceIntoChunks(arr, chunkSize) {
  let res = [];

  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
}

function sortItems(arr, sortByField, ascendingOrder) {
  if (typeof (arr[0] === String)) {
    return arr.sort((a, b) =>
      ascendingOrder
        ? a[sortByField].localeCompare(b[sortByField])
        : b[sortByField].localeCompare(a[sortByField])
    );
  } else {
    return arr.sort((a, b) =>
      ascendingOrder ? a[sortByField] - b[sortByField] : b[sortByField] - a[sortByField]
    );
  }
}

const worksByCategory = computed(() => {
  if (props.currentCategory === 'all') {
    return Object.values(works);
  } else {
    return Object.values(works).filter((item) => item.category === props.currentCategory);
  }
});

const worksByCategoryCount = computed(() => {
  return worksByCategory.value.length;
});

const sortedWorks = computed(() => {
  return sortItems([...worksByCategory.value], props.sortBy, props.isAscendingOrder);
});

const devidedWorks = computed(() => {
  return sliceIntoChunks([...sortedWorks.value], props.itemsPerPage);
});
</script>

<template>
  <div class="works-block">
    <div v-for="item in devidedWorks[currentPage]" :key="item.id" class="works-item">
      <Transition name="fade-slide-up" appear mode="out-in">
        <img :src="'/src/images/section_product/' + item.srcName" :alt="item.srcName" />
      </Transition>
    </div>
  </div>

  <Pagination
    @update="(currPage) => (currentPage = currPage - 1)"
    :totalCount="worksByCategoryCount"
    :itemsPerPage="itemsPerPage"
  ></Pagination>
</template>

<style lang="scss" scoped>
@import '../../assets/_vars.scss';

.works-block {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  padding: 30px 40px;

  .works-item {
    position: relative;
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
      // transform: translateY(-3px);

      &::before {
        opacity: 1;
        transform: translateY(0);
      }
    }

    img {
      width: 100%;
      height: auto;
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
  transform: translateY(10px);
}
</style>
