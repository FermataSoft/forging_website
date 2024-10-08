<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  totalCount: Number,
  itemsPerPage: Number,
});

const emit = defineEmits(["update"]);

const currentPage = ref(1);

watch(
  () => props.itemsPerPage,
  () => {
    currentPage.value = 1;
  }
);

function onClickHandler() {
  scrollToTop();
  emit("update", currentPage.value);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <vue-awesome-paginate
    v-show="totalCount > itemsPerPage"
    :total-items="totalCount"
    :items-per-page="itemsPerPage"
    :max-pages-shown="5"
    v-model="currentPage"
    :on-click="onClickHandler()"
    :hide-prev-next-when-ends="true"
  />
</template>

<style lang="scss">
@import "../../assets/_vars.scss";

.pagination-container {
  display: flex;
  justify-content: center;
  column-gap: 10px;
  padding-bottom: 50px;
}
.paginate-buttons {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  color: $on-secondary-container;
  font-size: 1.4rem;
  font-weight: $font-medium;
}
.paginate-buttons:hover:not(.active-page) {
  background-color: $secondary-container-variant;
}
.active-page {
  background-color: $secondary;
  color: $on-secondary;
  font-size: 1.6rem;
  font-weight: $font-bold;
}

.back-button,
.next-button {
  font-size: 1.6rem;
  background: $secondary-container;
}
</style>
