<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import IconImage from "../icons/IconImage.vue";

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
  return new Date(+props.uploadDate).toLocaleString("ru", dateOptions);
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
        <div class="article-card__image-placeholder" v-else-if="isLoaded">
          <IconImage class="article-card__image-placeholder-icon"></IconImage>
        </div>
      </div>

      <div class="article-card__text-block">
        <div
          class="article-card__upload-date --skeleton"
          v-if="!isLoaded"
        ></div>
        <span class="article-card__upload-date" v-else
          >{{ formattedUploadDate }}
        </span>
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

      <div class="article-card__bottom-block" v-show="isLoaded"></div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import "@/assets/_vars.scss";

.article-card {
  width: $card-width-lg;
  height: $card-height-lg;
  background-color: $surface;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  gap: 10px;
  transition: box-shadow 0.5s;
  color: $on-surface;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(41, 41, 41, 0.4);

  @include breakpoint(md) {
    width: $card-width-md;
    height: $card-height-md;
    gap: 5px;
  }

  @include breakpoint(sm) {
    width: $card-width-sm;
    height: $card-height-sm;
  }

  @include device(screen) {
    &:hover {
      box-shadow: 0px 5px 10px $primary;

      &::after {
        transform: translate(-50%, 70%);
      }
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 10%;
      left: 50%;
      bottom: 0;
      border-radius: 50%;
      transform: translate(-50%, 100%);
      transition: all 0.2s 0.1s cubic-bezier(0.45, 0, 0.15, 0.99);
      background-color: $primary;
    }
  }

  &.--skeleton-active {
    background-color: #e7e7e7;
    box-shadow: none;
  }
}

.article-card__image {
  height: 40%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  text-align: center;

  img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  .article-card__image-placeholder {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: $secondary-container;

    .article-card__image-placeholder-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      color: $on-secondary-container;
    }
  }

  &.--skeleton {
    height: 40%;
    @include skeleton(0);
  }
}

.article-card__text-block {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
}

.article-card__title {
  font-size: $header2;
  font-weight: $font-medium;

  @include breakpoint(md) {
    font-size: $header3-mobile;
  }

  &.--skeleton {
    height: 50px;
    @include skeleton;
  }
}

.article-card__description {
  font-size: $paragraph-lg;
  text-align: left;
  font-weight: $font-regular;
  color: $on-surface-lighten;

  @include breakpoint(md) {
    font-size: $paragraph;
  }

  &.--skeleton {
    height: 120px;
    @include skeleton;
  }
}

.article-card__upload-date {
  position: relative;
  color: $tertiary;
  font-size: $paragraph;
  font-weight: $font-bold;
  margin: 10px 0;

  @include breakpoint(md) {
    font-size: $paragraph-mobile;
    margin: 5px 0;
  }

  &.--skeleton {
    height: 15px;
    width: 80px;
    @include skeleton;
  }
}

.article-card__bottom-block {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: $surface;
  box-shadow: 0 -10px 8px $surface;

  @include breakpoint(sm) {
    height: 20px;
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
