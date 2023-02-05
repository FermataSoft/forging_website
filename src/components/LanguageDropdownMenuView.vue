<script setup>
import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocaleStore } from '../stores/LocaleStore';

const { locale } = useI18n();

let isDropdownMenuActive = ref(false);

function openDropdownMenu() {
  if (isDropdownMenuActive.value) {
    isDropdownMenuActive.value = false;
  } else {
    isDropdownMenuActive.value = true;
  }
}

function isClickWithinBoundaries(event) {
  const dropdownMenuItemsEl = document.querySelector('.dropdown-menu__items');
  const isWithinBoundaries = event.composedPath().includes(dropdownMenuItemsEl);

  if (!isWithinBoundaries) {
    isDropdownMenuActive.value = false;
  }
}

watchEffect(() => {
  if (isDropdownMenuActive.value) {
    document.addEventListener('click', isClickWithinBoundaries);
  } else {
    document.removeEventListener('click', isClickWithinBoundaries);
  }
});
</script>

<template>
  <div class="dropdown-menu _unselectable">
    <div
      class="dropdown-menu__current-lang"
      :class="{ _active: isDropdownMenuActive }"
      @click.stop="openDropdownMenu"
    >
      {{ locale.slice(0, 2).toUpperCase().trim() }}
    </div>
    <Transition name="dropdown-menu__items">
      <div class="dropdown-menu__items" v-if="isDropdownMenuActive">
        <div
          class="dropdown-menu__item"
          :class="{ _active: locale == 'ru-RU' }"
          @click.stop="useLocaleStore().currentLocale = 'ru-RU'"
        >
          RU
        </div>
        <div
          class="dropdown-menu__item"
          :class="{ _active: locale == 'by-BY' }"
          @click.stop="useLocaleStore().currentLocale = 'by-BY'"
        >
          BY
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/_vars.scss';

.dropdown-menu {
  position: relative;
  width: max-content;
  align-self: flex-start;

  font-size: 1.5rem;
  font-weight: $font-medium;
  color: $white;
  line-height: 2rem;
  // font-family: $font-mono;
  letter-spacing: 0.1rem;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0);
  transition: all 0.3s ease-in-out;

  cursor: pointer;

  &._active {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.3);
  }

  .dropdown-menu__current-lang {
    position: relative;
    display: flex;
    width: 60px;
    justify-content: space-between;
    padding: 10px;
    padding-top: 15px;
    z-index: 2;

    background-color: $navbar;

    &::after {
      content: '▲';
      display: block;
      transform: rotate(180deg);
      transform-origin: 50% 52%;
      transition: transform 0.3s ease-out;

      font-size: 1.2rem;
      color: $accent;
    }

    &._active::after {
      transform: rotate(0deg);
    }
  }

  .dropdown-menu__items {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 1;

    .dropdown-menu__item {
      background-color: $navbar;
      padding: 10px;

      &:hover {
        background-color: $accent;
        color: $navbar;
      }

      &:last-child {
        border-radius: 0 0 7px 7px;
      }
    }

    & ._active {
      color: $accent;
    }
  }
}

.dropdown-menu__items-enter-active,
.dropdown-menu__items-leave-active {
  transition: all 0.3s ease;
}

.dropdown-menu__items-enter-from,
.dropdown-menu__items-leave-to {
  transform: translateY(-100%);
}
</style>
