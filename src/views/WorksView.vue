<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import IconSort from '../components/elements/IconSort.vue';
import WorksBlock from '../components/sections/WorksBlock.vue';
import { useI18n } from 'vue-i18n';
import { useWorksStore } from '../stores/WorksStore';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const categories = useWorksStore().categories;
const currentCategorySelected = ref(route.query.category || 'all');
const isAscendingOrder = ref(true);
const itemsPerPage = ref(10);
const sortBy = ref('uploadDate');

watch(
  () => route.query,
  (toParams, prevParams) => {
    currentCategorySelected.value = toParams.category;
  }
);

watch(currentCategorySelected, (curr, prev) => {
  router.push({query: {category: curr}})
});
</script>

<template>
  <Transition name="view">
    <div class="wrapper">
      <div class="navbar-margin"></div>
      <div class="menu-block">
        <div class="filters-menu__block">
          <div class="filters-menu__item">
            <h2>Категории</h2>
            <ul class="menu__checkbox-container">
              <li v-for="item in categories" class="menu__checkbox-item">
                <!-- <RouterLink :to="'/works/' + item">{{ t('category-' + item) }}</RouterLink> -->
                <span class="menu__checkbox"></span>
                <input class="_invisible" type="radio" name="menu" :checked="item === currentCategorySelected" :id="item"
                  :value="item" v-model="currentCategorySelected" />
                <span class="menu__background"></span>
                <label :for="item">{{ t('category-' + item) }}</label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <main>
        <div class="sort-menu">
          <div class="sort-menu-left">
            <span>{{ t('show-count') }}:</span>
            <select name="show-count" id="show-count" v-model.number="itemsPerPage">
              <option selected value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
          <div class="sort-menu-right">
            <span>{{ t('sort-by') }}:</span>
            <select name="sort" id="sort" v-model="sortBy">
              <option value="uploadDate">по дате загрузки</option>
              <option value="category">по категориям</option>
            </select>
            <div class="sort-order-button">
              <label>
                <input type="checkbox" id="sort-order" v-model="isAscendingOrder" />
                <IconSort :is-ascending-order="isAscendingOrder"></IconSort>
              </label>
            </div>
          </div>
        </div>

        <WorksBlock :current-category="currentCategorySelected" :items-per-page="itemsPerPage" :sort-by="sortBy"
          :is-ascending-order="isAscendingOrder"></WorksBlock>
      </main>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import '../assets/_vars.scss';

.wrapper {
  width: 100%;
  display: flex;
}

main {
  width: 100%;
}

.menu-block {
  // position: absolute;
  // left: 0;
  // top: 50px;
  // height: 100%;
  width: 300px;
  padding: 20px;
  z-index: 999;
  background-color: $surface-container-low;
  // border-right: 3px solid $outline-variant;
}

.sort-menu {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: $surface-container-lowest;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    font-size: 1.4rem;
  }

  .sort-menu-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .sort-menu-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 10px;

    input[type='checkbox'] {
      width: 0;
      height: 0;
      display: none;
    }
  }
}

.filters-menu__item {
  h2 {
    font-size: 1.6rem;
    font-weight: $font-bold;
  }
}

.menu__checkbox-container {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .menu__checkbox-item {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    border-radius: 3px;

    &:hover {
      background-color: $surface-container-high;
    }

    .menu__checkbox {
      position: absolute;
      height: 3rem;
      width: 3px;
      background-color: $secondary;
      z-index: 3;

      // background-repeat: no-repeat;
      // background-position: center center;
      // background-size: 60% 60%;
      transition: all 0.3s ease;
    }

    label {
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      padding-left: 8px;
      font-size: 1.4rem;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 3;
    }

    .menu__background {
      content: '';
      position: absolute;
      width: 0%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 3px;
      background-color: $primary;
      transition: all 0.3s ease;
      z-index: 2;
    }

    input[type='radio']:checked~label {
      padding-left: 15px;
      font-weight: $font-bold;
    }

    input[type='radio']:checked~.menu__background {
      width: 100%;
    }

    /*     input[type='radio']:checked + .menu__checkbox {
      background-color: $on-surface;
      border-color: $on-surface;
      background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 30 30' xml:space='preserve' fill='none' stroke='%23fff' stroke-width='8px' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='5,16.6 12.5,23 25.4,7 '/%3E%3C/svg%3E");
    } */
  }
}

select {
  padding: 0.3rem;
  border-radius: 5px;
}

.view-enter-active,
.view-leave-active {
  transition: all 1s ease;
}

.view-enter-from,
.view-leave-to {
  opacity: 0;
}
</style>

<i18n>
  {
    "ru-RU": {
      "show-count": "Показывать по",
      "sort-by": "Сортировать"
    },
    "by-BY": {
      "show-count": "Паказваць па",
      "sort-by": "Сартаваць"
    }
  }
</i18n>
