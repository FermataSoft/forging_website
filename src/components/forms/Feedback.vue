<script setup>
import { useTemplateRef } from "vue";
import { useI18n } from "vue-i18n";
import ButtonSubmit from "../elements/ButtonAccent.vue";
import Checkbox from "../elements/Checkbox.vue";
import { useForm } from "../../composables/form";

const { t } = useI18n();

const required = (val) => !!val;
const maxLength = (num) => (val) => val.length <= num;
const email = (val) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(val);
const TEXTAREA = useTemplateRef("textarea");

const form = useForm({
  name: {
    value: "",
    validators: { required, maxLength: maxLength(50) },
  },
  email: {
    value: "",
    validators: { required, maxLength: maxLength(50), email },
  },
  subject: {
    value: "",
    validators: { maxLength: maxLength(50) },
  },
  message: {
    value: "",
    validators: { required, maxLength: maxLength(3000) },
  },
  termsAndCondition: {
    value: false,
    validators: { required },
  },
});

async function submit() {
  form.submitClicked = true;

  if (!form.valid) {
    return;
  }

  const formData = toFormData(form.fields);
  form.sending = true;

  let response = await fetch("/api/sendmail.php", {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    let result = await response.json();
    alert(result.message);
    form.reset();
    form.sending = false;
  } else {
    alert("Sending message failed!");
    form.sending = false;
  }
}

function toFormData(obj = {}) {
  const formData = new FormData();

  Object.entries(obj).forEach((el) => {
    let [key, value] = el;
    formData.append(key, value.value);
  });
  return formData;
}

function autoResize(element) {
  element.style.height = "5px";
  element.style.height = element.scrollHeight + "px";
}
</script>

<template>
  <form
    class="feedback"
    action="submit"
    autocomplete="off"
    @submit.prevent="submit"
  >
    <div class="feedback__items">
      <Loader v-if="form.sending"></Loader>
      <div
        class="feedback__item"
        :class="{
          invalid: !form.fields.name.valid && form.submitClicked,
        }"
      >
        <input
          class="feedback__item-input"
          v-model="form.fields.name.value"
          @blur="form.fields.name.blur"
          type="text"
          maxlength="50"
          id="name"
          placeholder=""
        />
        <label for="name"
          >{{ t("labelName") }}
          <span>{{ " (" + t("required") + ")" }}</span>
        </label>
        <small
          class="feedback__item-input-error"
          v-if="form.fields.name.errors.required && form.submitClicked"
          >{{ t("errorRequired") }}
        </small>
        <small
          class="feedback__item-input-error"
          v-else-if="form.fields.name.errors.maxLength && form.submitClicked"
        >
          {{ t("errorMaxlength50") }}
          {{ form.fields.name.value.length }}
        </small>
      </div>

      <div
        class="feedback__item"
        :class="{
          invalid: !form.fields.email.valid && form.submitClicked,
        }"
      >
        <input
          class="feedback__item-input"
          v-model="form.fields.email.value"
          @blur="form.fields.email.blur"
          type="email"
          maxlength="50"
          id="email"
          placeholder=""
        />
        <label for="email"
          >{{ t("labelEmail") }}
          <span>{{ " (" + t("required") + ")" }}</span>
        </label>
        <small
          class="feedback__item-input-error"
          v-if="form.fields.email.errors.required && form.submitClicked"
          >{{ t("errorRequired") }}
        </small>
        <small
          class="feedback__item-input-error"
          v-else-if="form.fields.email.errors.email && form.submitClicked"
          >{{ t("errorEmailFormat") }}
        </small>
        <small
          class="feedback__item-input-error"
          v-else-if="form.fields.email.errors.maxLength && form.submitClicked"
          >Максимальная длина строки - 50 символов. Введено
          {{ form.fields.name.value.length }}
        </small>
      </div>

      <div
        class="feedback__item"
        :class="{
          invalid: !form.fields.subject.valid && form.submitClicked,
        }"
      >
        <input
          class="feedback-form__item-input"
          v-model="form.fields.subject.value"
          @blur="form.fields.subject.blur"
          type="text"
          maxlength="50"
          id="subject"
          placeholder=""
        />
        <label for="subject">{{ t("labelTopic") }}</label>
        <small
          class="feedback__item-input-error"
          v-if="form.fields.subject.errors.maxLength && form.submitClicked"
          >{{ t("errorMaxlength50") }}
          {{ form.fields.subject.value.length }}
        </small>
      </div>

      <div
        class="feedback__item"
        :class="{
          invalid: !form.fields.message.valid && form.submitClicked,
        }"
      >
        <textarea
          class="feedback-form__item-input"
          ref="textarea"
          @input="autoResize(TEXTAREA)"
          v-model="form.fields.message.value"
          @blur="form.fields.message.blur"
          wrap="soft"
          maxlength="1000"
          id="message"
          name="message"
          placeholder=""
        ></textarea>
        <label for="message"
          >{{ t("labelMessage") }}
          <span>{{ " (" + t("required") + ")" }}</span>
        </label>
        <small
          class="feedback__item-input-error"
          v-if="form.fields.message.errors.required && form.submitClicked"
          >{{ t("errorRequired") }}
        </small>
        <small
          class="feedback__item-input-error"
          v-else-if="form.fields.subject.errors.maxLength && form.submitClicked"
          >{{ t("errorMaxlength3000") }}
          {{ form.fields.subject.value.length }}
        </small>
      </div>

      <div class="feedback__terms-and-conditions">
        <Checkbox
          :invalid="!form.fields.termsAndCondition.valid && form.submitClicked"
          @blur="form.fields.termsAndCondition.blur"
          v-model="form.fields.termsAndCondition.value"
          >{{ t("labelPrivacyPolicy") }}
          <router-link to="/privacy" target="_blank"
            >{{ t("labelPrivacyPolicyLink") }}
          </router-link>
          <span>{{ " (" + t("required") + ")" }}</span>
        </Checkbox>
        <small
          class="feedback__item-input-error"
          v-if="
            form.fields.termsAndCondition.errors.required && form.submitClicked
          "
          >Поле является обязательным
        </small>
      </div>
    </div>

    <ButtonSubmit
      class="feedback__button-submit"
      :text="t('buttonSubmit')"
      :disabled="form.sending"
    ></ButtonSubmit>
  </form>
</template>

<style lang="scss" scoped>
@import "../../assets/_vars.scss";

$border-width: 1px;

@mixin inputsVisual($height: 0) {
  border: $border-width solid $outline-darker;
  width: 100%;
  min-height: 40px;
  background-color: transparent;
  font-family: $font-main;
  font-weight: $font-regular;
  color: $on-surface;
  font-size: 1.4rem;
  outline: none;
  border-radius: 5px;
}

.feedback {
  width: 450px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;

  @include breakpoint(xs) {
    padding: 0 20px;
    width: 100%;
  }

  .feedback__items {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
  }

  .feedback__item {
    width: 100%;
    position: relative;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    label {
      position: absolute;
      pointer-events: none;
      transform-origin: top left;
      transition: 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms;
      color: $outline-darker;
      font-size: 1.4rem;
      top: 2px;
      left: 10px;
    }

    input {
      padding: 0px 10px;
      @include inputsVisual(0);
    }

    textarea {
      @include inputsVisual(0);
      @include scrollbar($width: 10px);
      padding: 5px 10px;
      min-height: 100px;
      max-height: 250px;
      overflow: auto;
      resize: none;
    }

    small {
      position: absolute;
      bottom: -12px;
      right: 0;
      font-size: 1rem;
      color: $error;
    }

    // Floating label
    input::placeholder,
    textarea::placeholder {
      color: transparent;
    }

    input:placeholder-shown + label,
    textarea:placeholder-shown + label {
      transform: translate(0, 10px) scale(1);
      font-size: 1.4rem;
    }

    input:not(:placeholder-shown) + label,
    textarea:not(:placeholder-shown) + label {
      transform: translate(0, -9px) scale(0.8);
      font-size: 1.4rem;
      padding: 0 5px;
      background-color: $surface-container-highest;
    }

    input:focus + label,
    textarea:focus + label {
      transform: translate(0, -20px) scale(0.8);
      font-size: 1.4rem;
      padding: 0 5px;
      z-index: 2;
    }

    input:focus,
    textarea:focus,
    checkbox:focus {
      border: $border-width solid $primary;
      box-shadow: 0 0 0 1px $primary;
      z-index: 1;
    }
  }
}

.feedback__terms-and-conditions {
  margin: 10px 0;
  position: relative;

  a {
    color: $tertiary;
  }

  small {
    position: absolute;
    bottom: -12px;
    left: 0;
    font-size: 1rem;
    color: $error;
  }
}

.feedback__button-submit {
  margin-top: 15px;

  @include breakpoint(xs) {
    width: 100%;
  }
}

.invalid input:not(:focus),
.invalid textarea:not(:focus) {
  border-color: $error !important;
  border: $border-width solid $error;
}
</style>

<i18n>
  {
    "ru-RU": {
      "required": "обязательно",
      "errorRequired": "Заполните обязательное поле",
      "errorMaxlength50": "Максимальная длина строки - 50 символов. Введено",
      "errorMaxlength3000": "Максимальная длина строки - 3000 символов. Введено",
      "errorEmailFormat": "Указан неверный формат адреса электронной почты",
      "labelName": "Ваше имя",
      "labelEmail": "Ваш Email",
      "labelTopic": "Тема сообщения",
      "labelMessage": "Ваше сообщение",
      "labelPrivacyPolicy": "Я согласен(-на) с",
      "labelPrivacyPolicyLink": "Политикой конфиденциальности",
      "buttonSubmit": "Отправить"
  },
    "by-BY": {
      "required": "абавязкова",
      "errorRequired": "Запоўніце абавязковае поле",
      "errorMaxlength50": "Максімальная даўжыня радка-50 знакаў. Уведзены",
      "errorMaxlength3000": "Максімальная даўжыня радка-3000 знакаў. Уведзены",
      "errorEmailFormat": "Указаны памылковы фармат адраса электроннай пошты",
      "labelName": "Ваша імя",
      "labelEmail": "Ваш Email",
      "labelTopic": "Тэма паведамлення",
      "labelMessage": "Ваша паведамленне",
      "labelPrivacyPolicy": "Я згодзен(-на) з",
      "labelPrivacyPolicyLink": "Палітыкай канфідэнцыяльнасьці",
      "buttonSubmit": "Адправіць"
    }
  }
</i18n>
