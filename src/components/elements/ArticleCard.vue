<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  isLoaded: Boolean,
  id: Number,
  title: String,
  description: String,
  uploadDate: Number,
  previewImage: String,
});

const dateOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

const formattedUploadDate = computed(() => {
  return new Date(props.uploadDate).toLocaleString("ru", dateOptions);
});
</script>

<template>
  <router-link :to="`/articles/${id}`">
    <div class="article-card" :class="{ '--skeleton-active': !isLoaded }">
      <div class="article-card__image" :class="{ '--skeleton': !isLoaded }">
        <img
          v-if="previewImage"
          height="200px"
          width="200px"
          :src="'/images/articles/' + previewImage"
          :alt="previewImage"
        />
        <span class="article-card__image-warning" v-else-if="isLoaded">{{
          t("article-card__image-warning")
        }}</span>
      </div>

      <div class="article-card__text-block">
        <h1 class="article-card__title" :class="{ '--skeleton': !isLoaded }">
          {{ title }}
        </h1>
        <p
          class="article-card__description"
          :class="{ '--skeleton': !isLoaded }"
        >
          {{ description }}
        </p>
      </div>

      <div class="article-card__upload-date --skeleton" v-if="!isLoaded"></div>
      <span class="article-card__upload-date" v-else>{{ formattedUploadDate }} </span>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import "@/assets/_vars.scss";

.article-card {
  width: 100%;
  height: 250px;
  background-color: $surface;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  gap: 50px;
  transition: all 0.3s;
  color: $on-surface;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px -5px 3px rgba(255, 255, 255, 0.2),
    2px 2px 9px rgba(94, 104, 121, 0.5);

  @include breakpoint(sm) {
    height: 120px;
    padding: 20px 10px;
    gap: 20px;
  }

  &:hover {
    background-color: $surface;
    box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
      3px 7px 9px rgba(94, 104, 121, 0.3);

    &::after {
      transform: translate(50%, -50%);
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    right: 0;
    top: 50%;
    border-radius: 50%;
    transform: translate(100%, -50%);
    transition: all 0.3s 0.1s ease-in-out;
    background-color: $primary;
  }

  &.--skeleton-active {
    background-color: #e7e7e7;
    box-shadow: none;
  }
}

.article-card__image {
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  text-align: center;

  @include breakpoint(sm) {
    height: 60px;
  }

  img {
    height: 200px;
    width: 200px;
    object-fit: cover;
  }

  .article-card__image-warning {
    font-size: 2rem;

    @include breakpoint(sm) {
      font-size: 1.6rem;
    }
  }

  &.--skeleton {
    @include skeleton(0);
  }
}

.article-card__text-block {
  flex-grow: 1;
}

.article-card__title {
  font-size: $header3;
  font-weight: $font-bold;
  margin-bottom: 20px;

  @include breakpoint(sm) {
    font-size: $header3-mobile;
    font-weight: $font-medium;
  }

  &.--skeleton {
    height: 30px;
    @include skeleton;
  }
}

.article-card__description {
  font-size: 1.4rem;
  text-align: justify;

  @include breakpoint(sm) {
    display: none;
  }

  &.--skeleton {
    height: 120px;
    @include skeleton;
  }
}

.article-card__upload-date {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 1.2rem;

  @include breakpoint(sm) {
    left: 10px;
    bottom: 10px;
  }

  &.--skeleton {
    height: 15px;
    width: 80px;
    @include skeleton;
  }
}
</style>

<i18n>
{
  ru-RU: {
    "article-card__image-warning": "Изображение отсутствует",
},
  by-BY: {
    "article-card__image-warning": "Малюнак адсутнічае",
  }
}
</i18n>
