<script setup>
const props = defineProps({
  title: String,
  text: String,
  imagePath: String
})
</script>

<template>
  <router-link class="article-card" to="/articles/1">
    <div class="article-card__image">
      <img src="../../wrapper_images/1000x1000.jpg" alt="">
    </div>

    <div class="article-card__text-block">
      <h1 class="article-card__title">{{ title }}</h1>
      <p class="article-card__description">{{ text }}</p>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import '../../assets/_vars.scss';

.article-card {
  width: 100%;
  background-color: $surface-container-lowest;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  gap: 50px;
  transition: all 0.3s;
  color: $on-surface;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: $surface;
    box-shadow: 0 5px 10px 5px #e0e0e0;

    &:after {
      transform: translate(50%, -50%);
    } 
  }

  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    right: 0;
    top: 50%;
    border-radius: 50%;
    transform: translate(100%, -50%);
    transition: all 0.3s 0.3s ease-in-out;
    
    background-color: $primary;
  }
}

.article-card__image {
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    height: 100%;
    object-fit: cover;
  }
}

.article-card__text-block {
  flex-grow: 1;
}

.article-card__title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.article-card__description {
  font-size: 1.4rem;
  text-align: justify;
}
</style>