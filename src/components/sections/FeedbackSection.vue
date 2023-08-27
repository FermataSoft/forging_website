<script setup>
import { ref, computed } from 'vue';
import ButtonSubmit from '../elements/ButtonSubmit.vue'

const isEmailValid = computed((email) => {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email);
});

const inputAccordingMaxLength = computed(() => {
  let lengthLimit = el.getAttribute('maxlength');

  if (el.value.length >= lengthLimit) {
    return (el.value = el.value.slice(0, lengthLimit - 1));
  } else return el.value;
});

function submitForm() {
  console.log('Form submitting!');
}
</script>

<template>
  <div class="feedback-section">
    <h1>ЕСТЬ ВОПРОСЫ? ЗАДАВАЙТЕ!</h1>

    <form action="submit" class="feedback-form" autocomplete="off" @submit.prevent="submitForm">
      <!-- <div class="form__loader">
        <div class="form__loader__animation">
          <div class="form__face">
            <div class="form__circle"></div>
          </div>
          <div class="form__face">
            <div class="form__circle"></div>
          </div>
          <div class="form__face">
            <div class="form__circle"></div>
          </div>
        </div>
      </div> -->
      <div class="feedback-form__item">
        <input type="text" maxlength="50" id="name" v-model="name" class="feedback-form__item-input _required"
          placeholder="Full name" />
        <label for="name">Ваше имя</label>
      </div>

      <div class="feedback-form__item">
        <input type="email" maxlength="50" id="email" v-model="email" class="feedback-form__item-input _required _email"
          placeholder="Email" />
        <label for="email">Ваш Email</label>
      </div>

      <div class="feedback-form__item">
        <input type="text" maxlength="50" id="topic" v-model="topic" class="feedback-form__item-input"
          placeholder="Topic" />
        <label for="topic">Тема сообщения</label>
      </div>

      <div class="feedback-form__item">
        <textarea class="feedback-form__item-input _required" wrap="soft" rows="7" maxlength="300" style="resize: none"
          id="message" name="message" placeholder="Describe your idea"></textarea>
        <label for="message">Ваше сообщение</label>
      </div>

      <div class="feedback-form__termsAndConditionsBlock">
        <input type="checkbox" name="privacy-policy" id="termsAndConditionsBlock__checkbox" value="Accept"
          class="_required" />
        <div class="termsAndConditionsBlock__label">
          <label for="termsAndConditionsBlock__checkbox">Я даю свое согласие&nbsp; </label>
          <a href="#termsAndConditions" class="termsAndConditionsBlock__link">Terms and Conditions</a>
        </div>
      </div>

      <ButtonSubmit text="ButtonSubmit"></ButtonSubmit>

      <!-- <ButtonLink class="btn-submit" inputType="submit" text="ButtonSubmit"></ButtonLink> -->
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/_vars.scss';

.feedback-section {
  width: 100%;
  margin-top: 80px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3.5rem;
    font-weight: $font-regular;
    color: $on-surface;
  }
}

.feedback-form {
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  .feedback-form__item {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    label {
      position: absolute;
      pointer-events: none;
      transform-origin: top left;
      transition: 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms;
      color: $outline;
      font-size: 1.4rem;
      left: 10px;
    }

    ._required+label::after {
      content: ' (обязательно)';
    }

    input {
      border: 1px solid $outline-variant;
      border-radius: 5px;
      width: 100%;
      height: 50px;
      background-color: $surface;
      font-weight: $font-light;
      color: $on-surface;
      font-size: 1.4rem;
      padding: 10px 10px 4px 10px;
      outline: none;
      box-shadow: none;
      transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
    }

    & textarea {
      padding: 10px 10px 4px 10px;
      outline: none;
      border: 1px solid $outline-variant;
      border-radius: 5px;
      width: 100%;
      color: $on-surface;
      background-color: $surface;
      font-weight: $font-light;
      font-size: 1.4rem;
      transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
    }

    // Floating label
    input::placeholder,
    textarea::placeholder {
      color: transparent;
    }

    input:placeholder-shown+label,
    textarea:placeholder-shown+label {
      transform: translate(0, 15px) scale(1);
      font-size: 1.4rem;
    }

    input:not(:placeholder-shown)+label,
    textarea:not(:placeholder-shown)+label {
      transform: translate(0, -7px) scale(0.8);
      font-size: 1.4rem;
      background-color: $surface;
      padding: 0 5px;
    }

    input:focus+label,
    textarea:focus+label {
      transform: translate(0, -7px) scale(0.8);
      font-size: 1.4rem;
      background-color: $surface;
      padding: 0 5px;
      z-index: 2;
    }

    input:focus,
    textarea:focus {
      border: 1px solid $outline;
      box-shadow: 0 5px 10px 0 rgba(101, 101, 101, 0.3);
      z-index: 1;
    }

    ._error {
      border-color: $error;
    }
  }
}

.feedback-form__termsAndConditionsBlock {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-self: flex-start;
  align-self: flex-start;

  input[type='checkbox'] {
    cursor: pointer;

    &._error {
      box-shadow: 0 0 3px 1px red;
      background-color: $on-error;
    }
  }

  label {
    color: $on-surface;
    font-weight: $font-regular;
    font-size: 1.2rem;

    @include breakpoint(xs) {
      font-size: 1rem;
    }
  }

  .termsAndConditionsBlock__label {
    display: inline-flex;
    align-content: center;

    @include breakpoint(xs) {
      flex-wrap: wrap;
    }

    .termsAndConditionsBlock__link {
      color: $primary;
      font-weight: $font-regular;
      font-size: 1.2rem;

      @include breakpoint(xs) {
        font-size: 1rem;
      }

      &::after {
        content: ' (обязательно)';
      }
    }
  }
}

.btn-submit {
  align-self: flex-start;
}

// input[type="submit"] {
//     align-self: flex-start;
//     width: 120px;
//     height: 40px;
//     border-radius: 30px;
//     background-color: $primary;
//     color: $surface;
//     font-weight: $font-bold;
//     font-size: 1.6rem;
//     transition: transform 0.05s;
//     transition: background-color 0.3s ease;

//     @include breakpoint(xs) {
//       align-self: end;
//     }

//     &:hover {
//       background-color: $primary;
//     }

//     &:disabled {
//       background-color: $outline;
//     }

//     &:not(:disabled):active {
//       transform: translate(0, 1px);
//     }
//   }
</style>
