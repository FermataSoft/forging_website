<script setup></script>

<template>
  <div class="form-loader">
    <div class="form-loader__background"></div>
    <div class="form-loader__animation">
      <div class="form-loader__face">
        <div class="form__circle"></div>
      </div>
      <div class="form-loader__face">
        <div class="form__circle"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_vars.scss";

.form-loader {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  overflow: hidden;
  // opacity: 0;
  // visibility: hidden;

  .form-loader__background {
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: $surface-container-highest;
  }

  .form-loader__animation {
    width: 7rem;
    height: 7rem;
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;

    .form-loader__face {
      position: absolute;
      border-radius: 50%;
      border-style: solid;
      animation: animate 3s linear infinite;
    }

    .form-loader__face:nth-child(1) {
      width: 100%;
      height: 100%;
      color: $tertiary;
      border-color: currentColor transparent transparent currentColor;
      border-width: 0.2em 0.2em 0em 0em;
      --deg: -45deg;
      animation-direction: normal;
    }

    .form-loader__face:nth-child(2) {
      width: 45%;
      height: 45%;
      color: $primary;
      border-color: currentColor currentColor transparent transparent;
      border-width: 0.2em 0em 0em 0.2em;
      --deg: -135deg;
      animation-direction: reverse;
    }

    .form-loader__face .form__circle {
      position: absolute;
      width: 50%;
      height: 0.1em;
      top: 50%;
      left: 50%;
      background-color: transparent;
      transform: rotate(var(--deg));
      transform-origin: left;
    }

    .form-loader__face .form__circle::before {
      position: absolute;
      top: -0.5em;
      right: -0.6em;
      content: "";
      width: 1em;
      height: 1em;
      background-color: currentColor;
      border-radius: 50%;
      box-shadow: 0 0 1em, 0 0 4em, 0 0 0 0.5em rgba(255, 230, 0, 0.1);
    }
  }
}

@keyframes animate {
  to {
    transform: rotate(1turn);
  }
}
</style>
