import { computed, reactive, watch } from "vue";
import { useField } from "./field";

export function useForm(init = {}, options = { validateOnInput: false }) {
    const form = reactive({
        fields: {},
        sending: false,
        submitClicked: false,
        reset,
        validate
    });

    for (const [key, value] of Object.entries(init)) {
        form.fields[key] = useField(value, { validateOnInput: options.validateOnInput });
    }

    form["valid"] = computed(() => {
        return Object.keys(form.fields).reduce((acc, key) => {
            return acc && form.fields[key].valid;
        }, true);
    })

    return form;
}

function reset() {
    Object.keys(this.fields).forEach((key) => {
        this.fields[key].touched = false;

        if (typeof this.fields[key].value === "boolean") {
            this.fields[key].value = false;
        } else {
            this.fields[key].value = "";
        }
    })
}

function validate() {
    Object.keys(this.fields).forEach((key) => {
        this.fields[key].reassign();
    })
}