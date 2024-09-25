<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <router-link to="/articles">
    <div class="button-go-back">
      <div class="button-go-back__arrow"></div>
      <span class="button-go-back__text">{{ t("buttonGoBack") }}</span>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

@mixin element-color($color) {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%2075.03%22%20fill%3D%22#{$color}%22%3E%0A%20%20%3Cpath%20d%3D%22M97.91%2C41.93a5.73%2C5.73%2C0%2C0%2C0%2C0-8.85L62.18%2C1.83a7.9%2C7.9%2C0%2C0%2C0-10.11%2C0%2C5.71%2C5.71%2C0%2C0%2C0%2C0%2C8.85L75.62%2C31.26H7.15C3.2%2C31.26%2C0%2C34.06%2C0%2C37.51s3.18%2C6.25%2C7.15%2C6.25H75.62L52.09%2C64.35a5.7%2C5.7%2C0%2C0%2C0%2C0%2C8.84%2C7.87%2C7.87%2C0%2C0%2C0%2C10.11%2C0L97.92%2C42Z%22%2F%3E%0A%3C%2Fsvg%3E%0A");
}

.button-go-back {
  position: relative;
  padding: 15px 16px;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 7px;
  transition: all 0.1s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    width: calc(100% - 14px);
    background-color: $outline-variant;
  }

  @include breakpoint(sm) {
    padding: 12px 10px;
  }

  @media screen {
    &:hover {
      background-color: $surface-container-low;

      .button-go-back__arrow {
        transform: translateX(-5px) rotate(180deg);
      }
    }
  }
}

.button-go-back__arrow {
  @include element-color($on-primary-url);
  background-repeat: no-repeat;
  background-size: 1.5rem;
  background-position: center;

  height: 2rem;
  width: 2rem;

  transform: rotate(180deg);
  transition: all 0.1s ease;
}

.button-go-back__text {
  font-size: $font-controls;
  font-weight: $font-medium;
  color: $on-surface;

  @include breakpoint(sm) {
    font-size: $font-controls-mobile;
  }
}
</style>

<i18n>
  {
    "ru-RU": {
      buttonGoBack: "Вернуться назад"
    },
    "by-BY": {
      buttonGoBack: "Вярнуцца назад"
    }
  }
</i18n>
