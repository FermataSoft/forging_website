<script setup>
defineProps({
  isAscendingOrder: Boolean,
});
</script>

<template>
  <div class="sort-toggle">
    <svg
      class="sort-arrow"
      :class="{ ascending: isAscendingOrder }"
      x="0px"
      y="0px"
      viewBox="0 0 12 30"
      stroke-linecap="round"
      stroke="#000"
      stroke-width="2px"
    >
      <line x1="6.2" y1="23" x2="6.2" y2="7" />
      <line x1="2.1" y1="12.2" x2="6.2" y2="7" />
      <line x1="10.4" y1="12.2" x2="6.2" y2="7" />
    </svg>

    <svg
      x="0px"
      y="0px"
      viewBox="10 0 20 30"
      stroke-linecap="round"
      stroke="#000"
      stroke-width="2px"
    >
      <line x1="15.7" y1="7" x2="18.8" y2="7" />
      <line x1="16" y1="12.2" x2="22.1" y2="12.2" />
      <line x1="16" y1="17.3" x2="25.2" y2="17.3" />
      <line x1="15.7" y1="23" x2="27.9" y2="23" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/_vars.scss';

.sort-toggle {
  padding: 0px 2px;
  transition: all 0.2s ease-in-out;
}
.sort-toggle:hover {
  border-radius: 3px;
  background-color: $surface-container-high;
}

svg {
  height: 2rem;
}

.sort-arrow {
  transition: all 0.3s ease-in-out;
}

.sort-arrow.ascending {
  transform: rotate(180deg);
}
</style>
