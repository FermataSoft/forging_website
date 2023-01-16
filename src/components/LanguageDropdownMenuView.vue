<script setup>
defineProps({
  lang_active: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="dropdown-menu">
    <div id="lang-current">{{ lang_active }}</div>
    <div class="dropdown-menu_block">
      <div class="dropdown-menu_item" id="lang-ru">RU</div>
      <div class="dropdown-menu_item" id="lang-by">BY</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/_vars.scss";

.dropdown-menu {
  position: relative;
  width: max-content;

  font-size: 1.6rem;
  font-weight: $font-bold;
  color: $white;
  line-height: 2rem;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0);
  transition: all 0.3s ease-in-out;

  cursor: pointer;

  &._active {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  }

  #lang-current {
    position: relative;
    display: flex;
    gap: 5px;
    padding: 10px;

    background-color: transparent;

    border-radius: 7px 7px 0 0;

    &::after {
      content: "▲";
      display: block;
      transform: rotate(180deg);
      transition: rotate 0.3s ease-out;

      font-size: 1.2rem;
      color: $accent;
    }

    &._active {
      transform: rotate(0deg);
    }
  }

  .dropdown-menu_block {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;

    .dropdown-menu_item {
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
  }
}
</style>
