<script setup>
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import IconSort from "../components/elements/IconSort.vue";
import WorksBlock from "../components/sections/WorksBlock.vue";
import CloseModal from "@/components/elements/CloseModal.vue";
import { useI18n } from "vue-i18n";
import { useWorksStore } from "../stores/WorksStore";
import { useWindowParamsStore } from "../stores/WindowParamsStore";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const windowWidth = ref(0);
const categories = useWorksStore().categories;
const currentCategorySelected = ref(route.query.category || "all");
const itemsPerPage = ref(20);
const sortBy = ref("uploadDateNewFirst");
const isMenuOpened = ref(false);
const BUTTON_MENU_OPEN = ref(null);
const isAscendingOrder = computed(() => {
  return ["uploadDateNewFirst"].includes(sortBy.value);
});

watch(
  () => route.query,
  (toParams, prevParams) => {
    currentCategorySelected.value = toParams.category;
  }
);

watch(currentCategorySelected, (curr, prev) => {
  router.push({ query: { category: curr } });
});

function hideMenu(event) {
  if (windowWidth.value < 630 && event.target !== BUTTON_MENU_OPEN.value) {
    isMenuOpened.value = false;
    document.body.classList.remove("--locked");
  }
}

function openMenu(event) {
  if (windowWidth.value < 630) {
    isMenuOpened.value = true;
    document.body.classList.add("--locked");
  }
}

useWindowParamsStore().$subscribe((mutation, state) => {
  windowWidth.value = state.windowWidth;
})
</script>

<template>
  <Transition name="view">
    <div class="works-view" @click.stop="hideMenu($event)">
      <nav class="menu-block" :class="{ 'menu-block--hidden': !isMenuOpened }">
        <CloseModal class="menu-block__close-button"></CloseModal>
        <div class="filters-menu__block">
          <h2>Категории</h2>
          <ul class="menu__checkbox-container">
            <li v-for="item in categories" class="menu__checkbox-item">
              <span class="menu__checkbox"></span>
              <input
                class="_invisible"
                type="radio"
                name="menu"
                :checked="item === currentCategorySelected"
                :id="item"
                :value="item"
                v-model="currentCategorySelected"
              />
              <span class="menu__background"></span>
              <label :for="item">{{ t("category-" + item) }}</label>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <div class="sort-menu">
          <div class="sort-menu-left">
            <button
              class="works__sort-menu-categories-button"
              ref="BUTTON_MENU_OPEN"
              v-if="windowWidth <= 630"
              @click="openMenu($event)"
            >
              Категории
            </button>
          </div>
          <div class="sort-menu-right">
            <select
              name="show-count"
              id="show-count"
              v-model.number="itemsPerPage"
            >
              <option selected value="20">{{ t("show-count") + " 20" }}</option>
              <option value="50">{{ t("show-count") + " 50" }}</option>
              <option value="100">{{ t("show-count") + " 100" }}</option>
            </select>
            <select name="sort" id="sort" v-model="sortBy">
              <option value="uploadDateNewFirst">сначала новые</option>
              <option value="uploadDateOldFirst">сначала старые</option>
            </select>

            <div class="sort-order-button">
              <label>
                <input
                  type="checkbox"
                  id="sort-order"
                  v-model="isAscendingOrder"
                />
                <!-- <IconSort :is-ascending-order="isAscendingOrder"></IconSort> -->
              </label>
            </div>
          </div>
        </div>

        <div class="works-view__sort-menu-margin"></div>
        <WorksBlock
          class="works-view__works-block"
          :current-category="currentCategorySelected"
          :items-per-page="itemsPerPage"
          :sort-by="sortBy"
          :is-ascending-order="isAscendingOrder"
        ></WorksBlock>
      </main>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import "../assets/_vars.scss";

$sort-menu-height: 50px;

.works-view {
  width: 100%;
  display: flex;
  background-color: $surface-container-highest;
}

main {
  width: 100%;
}

.menu-block {
  position: relative;
  width: 350px;
  padding: 20px;
  z-index: 3;
  background-color: $surface;
  border-right: 1px solid $outline-variant;
  transition: all 0.3s ease;

  @include breakpoint(sm) {
    position: fixed;
    left: 0;
    top: $navbar-height;
    width: 100%;
    max-height: calc(100vh - $navbar-height);
    max-height: calc(100svh - $navbar-height);
    border-right: 0 solid $outline-variant;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 0 10px #6e6e6e;

    &.menu-block--hidden {
      left: -102%;
    }

    @include device(screen) {
      width: calc(100% - $scrollbar-width);
    }

    .menu-block__close-button {
      display: block;
    }
  }
}

.menu-block__close-button {
  position: absolute;
  display: none;
  top: 15px;
  right: 15px;
  background: none;
  border-radius: 50%;
  padding: 3px;

  @include device(screen) {
        &:hover {
          background-color: $secondary;
        }
      }
}

.sort-menu {
  position: fixed;
  top: $navbar-height;
  right: 0;
  width: 100%;
  height: $sort-menu-height;
  background-color: $surface;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid $outline-variant;
  z-index: 2;

  span {
    font-size: 1.4rem;
  }

  .works__sort-menu-categories-button {
    height: 100%;
    background-color: $primary;
    padding: 0 20px;
    border-radius: 3px;
    color: $on-primary;
    font-weight: $font-medium;
    font-family: $font-main;
    cursor: pointer;
    transition: all 0.2s;

    @include breakpoint(xs) {
      padding: 0 10px;
    }

    @media screen {
      &:hover {
        background-color: $primary-variant;
      }
    }
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
    padding: 10px;

    input[type="checkbox"] {
      width: 0;
      height: 0;
      display: none;
    }
  }
}

@include device(screen) {
  body.--locked .sort-menu {
    right: 15px;
    padding-left: 15px;
  }
}

.filters-menu__block {
  h2 {
    font-size: $header2;
  }
}

.menu__checkbox-container {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @include breakpoint(xs) {
    margin-top: 30px;
    padding-right: 10px;
    height: calc(100vh - $navbar-height - 150px);
    height: calc(100svh - $navbar-height - 94px);
    overflow-y: scroll;
    @include scrollbar();
  }

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
      transition: all 0.3s ease;
    }

    label {
      width: 100%;
      padding: 12px 0px 12px 8px;
      font-size: 1.4rem;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 3;
    }

    .menu__background {
      content: "";
      position: absolute;
      width: 0%;
      height: 100%;
      left: 0;
      border-radius: 3px;
      background-color: $primary;
      transition: all 0.3s ease;
      z-index: 2;
    }

    input[type="radio"]:checked ~ label {
      padding-left: 15px;
      // font-weight: $font-bold;
    }

    input[type="radio"]:checked ~ .menu__background {
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
  background-color: $surface-container-highest;
  border: 1px solid $outline-variant;
  height: 100%;

  @include breakpoint(xs) {
    font-size: 1.2rem;
    padding: 0;
  }
}

.works-view__sort-menu-margin {
  height: $sort-menu-height;
  width: 100%;
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
