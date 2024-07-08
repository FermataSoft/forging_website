<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  src: String,
  alt: String,
});

const isLoading = ref(true);
const imageSrc = ref("");

onMounted(() => {
  const image = new Image();
  image.onload = () => {
    toggleLoadState();
    imageSrc.value = image.src;
  };
  image.src = props.src;
});

function toggleLoadState() {
  isLoading.value = false;
}
</script>

<template>
  <div class="async-img">
    <Loader v-if="isLoading"></Loader>
    <img
      v-show="!isLoading"
      :src="imageSrc"
      :alt="alt"
    />
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}
</style>
