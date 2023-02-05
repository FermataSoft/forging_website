<script setup>
import ButtonLink from '../elements/ButtonLink.vue';

</script>

<template>
  <div class="feedback-section">
    <h1>ЕСТЬ ВОПРОСЫ? ЗАДАВАЙТЕ!</h1>

    <form action="submit" class="feedback-form" autocomplete="off">
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
        <input
          type="text"
          maxlength="50"
          id="name"
          name="name"
          class="feedback-form__item-input _required"
          placeholder="Full name"
        />
        <label for="name" class="lang_form_name">Ваше имя</label>
      </div>

      <div class="feedback-form__item">
        <input
          type="email"
          maxlength="50"
          id="email"
          name="email"
          class="feedback-form__item-input _required _email"
          placeholder="Email"
        />
        <label for="email" class="lang_form_email">Ваш Email</label>
      </div>

      <div class="feedback-form__item">
        <input
          type="text"
          maxlength="50"
          id="name"
          name="name"
          class="feedback-form__item-input"
          placeholder="Full name"
        />
        <label for="name" class="lang_form_topic">Тема сообщения</label>
      </div>

      <div class="feedback-form__item">
        <textarea
          wrap="soft"
          rows="7"
          maxlength="300"
          style="resize: none"
          id="message"
          name="message"
          class="feedback-form__item-input _required"
          placeholder="Describe your idea"
        ></textarea>
        <label for="message" class="lang_form_message">Ваше сообщение</label>
      </div>

      <div class="feedback-form__termsAndConditionsBlock">
        <input
          type="checkbox"
          name="privacy-policy"
          id="termsAndConditionsBlock__checkbox"
          value="Accept"
          class="_required"
        />
        <div class="termsAndConditionsBlock__label">
          <label
            for="termsAndConditionsBlock__checkbox"
            class="lang_form_checkboxLabel unselectable"
            >Я даю свое согласие&nbsp;
          </label>
          <a href="#termsAndConditions" class="termsAndConditionsBlock__link lang_form_checkboxLink"
            >Terms and Conditions</a
          >
        </div>
      </div>
      <ButtonLink class="btn-submit" inputType="submit" text="ButtonSubmit"></ButtonLink>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

.feedback-section {
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 4rem;
    font-weight: $font-regular;
    color: $navbar;
  }
}
.feedback-form {
  width: 550px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  margin-top: 60px;
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
      color: #8e8e8e;
      font-size: 1.6rem;
      left: 10px;
    }

    ._required + label::after {
      content: " (обязательно)";
    }

    input {
      border: 1px solid #b8b8b8;
      border-radius: 5px;
      width: 100%;
      height: 50px;
      background-color: $white;
      font-weight: $font-light;
      color: $navbar;
      font-size: 1.6rem;
      padding: 10px 10px 4px 10px;
      outline: none;
      box-shadow: none;
      transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
    }

    & textarea {
      padding: 10px 10px 4px 10px;
      outline: none;
      border: 1px solid $gray;
      border-radius: 5px;
      width: 100%;
      color: $navbar;
      background-color: $white;
      font-weight: $font-light;
      font-size: 1.6rem;
      transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
    }

    // Floating label
    input::placeholder,
    textarea::placeholder {
      color: transparent;
    }

    input:placeholder-shown + label,
    textarea:placeholder-shown + label {
      transform: translate(0, 15px) scale(1);
      font-size: 1.6rem;
    }

    input:not(:placeholder-shown) + label,
    textarea:not(:placeholder-shown) + label {
      transform: translate(0, -7px) scale(0.8);
      font-size: 1.6rem;
      background-color: #fff;
      padding: 0 5px;
    }

    input:focus + label,
    textarea:focus + label {
      transform: translate(0, -7px) scale(0.8);
      font-size: 1.6rem;
      background-color: #fff;
      padding: 0 5px;
      z-index: 2;
    }

    input:focus,
    textarea:focus {
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    ._error {
      border-color: red;
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

  input[type="checkbox"] {
    cursor: pointer;

    &._error {
      box-shadow: 0 0 3px 1px red;
    }
  }

  label {
    color: rgb(122, 122, 122);
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
      color: $accent;
      font-weight: $font-regular;
      font-size: 1.2rem;

      @include breakpoint(xs) {
        font-size: 1rem;
      }

      &::after {
        content: " (обязательно)";
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
//     background-color: $accent;
//     color: $white;
//     font-weight: $font-bold;
//     font-size: 1.6rem;
//     transition: transform 0.05s;
//     transition: background-color 0.3s ease;

//     @include breakpoint(xs) {
//       align-self: end;
//     }

//     &:hover {
//       background-color: $accent;
//     }

//     &:disabled {
//       background-color: $gray;
//     }

//     &:not(:disabled):active {
//       transform: translate(0, 1px);
//     }
//   }
</style>
