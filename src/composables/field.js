import { ref, reactive, watch } from "vue";

export function useField(field, options = { validateOnInput: false }) {
  const valid = ref(true);
  const value = ref(field.value);
  const touched = ref(false); // use it to check is item touched and show error message after user touches the input
  const errors = reactive({});

  const reassign = val => {
    valid.value = true;
    Object.keys(field.validators ?? {}).map((name) => {
      const isValid = field.validators[name](value.value);
      errors[name] = !isValid;
      if (!isValid) {
        valid.value = false;
      }
    })
  }

  if (options.validateOnInput) {
    watch(value, reassign);
  }

  reassign(field.value);

  return { value, valid, errors, touched, blur: () => touched.value = true, reassign }
}