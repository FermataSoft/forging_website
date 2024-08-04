import { computed, reactive } from "vue";
import { useField } from "./field";

export function useForm(init = {}) {
    const form = reactive({
        fields: {},
        sending: false,
        reset: reset
    });

    for (const [key, value] of Object.entries(init)) {
        form.fields[key] = useField(value);
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