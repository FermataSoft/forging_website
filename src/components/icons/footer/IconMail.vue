<script setup>
defineProps({
  monochrome: false,
});
</script>

<template>
  <svg
    :class="{ monochrome: monochrome, gradient: !monochrome }"
    width="38"
    height="31"
    viewBox="0 0 38 31"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="email-gradient" gradientTransform="rotate(90)">
        <stop offset="0%" stop-color="#fff386" />
        <stop offset="100%" stop-color="#f1de2a" />
      </linearGradient>
    </defs>
    <path
      d="M19.3726 14.4565L37.6275 4.95277V4.32317C37.6275 3.53272 37.3135 2.77464 36.7545 2.21571C36.1956 1.65678 35.4375 1.34277 34.6471 1.34277H3.35295C2.5625 1.34277 1.80443 1.65678 1.2455 2.21571C0.686563 2.77464 0.372559 3.53272 0.372559 4.32317V4.58395L19.3726 14.4565Z"
    />
    <path
      d="M20.3114 17.0603C20.0303 17.2522 19.698 17.3548 19.3577 17.3548C19.0174 17.3548 18.685 17.2522 18.4039 17.0603L0.372559 7.67578V26.6758C0.372559 27.4662 0.686563 28.2243 1.2455 28.7832C1.80443 29.3422 2.5625 29.6562 3.35295 29.6562H34.6471C35.4375 29.6562 36.1956 29.3422 36.7545 28.7832C37.3135 28.2243 37.6275 27.4662 37.6275 26.6758V8.04833L20.3114 17.0603Z"
    />
  </svg>
</template>

<style lang="scss" scoped>
@import "@/assets/vars";

.gradient {
  fill: url("#email-gradient");
  fill: $primary;
}

.monochrome {
  fill: $secondary;
}
</style>
