<script setup lang="ts">
defineProps({
  inputType: {
    type: String,
    default: "button",
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
<<<<<<<< HEAD:src/components/elements/ButtonSubmit.vue
  <input type="submit" class="lang_form-submit" value="{{ text }}" />
========
  <div class="btn-wrapper">
    <input class="btn" :type="inputType" :value="text" @click.prevent=""/>
    <div class="btn-arrow"></div>
  </div>
>>>>>>>> 5e035cc2fe763282b379b4aa155f0dea6b44c1d3:src/components/ButtonLink.vue
</template>

<style lang="scss" scoped>
@import "../assets/_vars.scss";

.btn-wrapper {
  position: relative;
  width: fit-content;
  cursor: pointer;
}
.btn {
  background-color: $accent;
  padding: 20px 40px;
  border-radius: 5px;

  font-size: 2rem;
  font-weight: $font-bold;
  color: $navbar;

  transform: translate(0);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

@mixin element-color($color) {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%2075.03%22%20fill%3D%22#{$color}%22%3E%0A%20%20%3Cpath%20d%3D%22M97.91%2C41.93a5.73%2C5.73%2C0%2C0%2C0%2C0-8.85L62.18%2C1.83a7.9%2C7.9%2C0%2C0%2C0-10.11%2C0%2C5.71%2C5.71%2C0%2C0%2C0%2C0%2C8.85L75.62%2C31.26H7.15C3.2%2C31.26%2C0%2C34.06%2C0%2C37.51s3.18%2C6.25%2C7.15%2C6.25H75.62L52.09%2C64.35a5.7%2C5.7%2C0%2C0%2C0%2C0%2C8.84%2C7.87%2C7.87%2C0%2C0%2C0%2C10.11%2C0L97.92%2C42Z%22%2F%3E%0A%3C%2Fsvg%3E%0A");
}

.btn-arrow {
  // background-image: url("./icons/arrow.svg");
  
  @include element-color($navbar-url);
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: center;

  position: absolute;
  right: 0;
  top: 0;

  height: 100%;
  width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $accent-hover;
  color: $navbar;

  border-radius: 50%;

  transform-origin: right;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

.btn-wrapper:hover .btn {
  padding-left: 15px;
  padding-right: 65px;
}

.btn-wrapper:hover .btn-arrow {
  transform: scaleX(1);
  border-radius: 0 5px 5px 0;
}
</style>
