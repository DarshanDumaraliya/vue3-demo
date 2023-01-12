import { ref } from "vue";

const error = ref();

export default function useFormValidation() {

    // Validate text input field
    const validationField = (fieldName, fieldValue) => {
        error.value = fieldValue === "" ? "The " + fieldName + " field is required" : "";
    }

    // validate the pass word field
    const validationPassword= (fieldName, password) => {
        error.value = password === "" ? "The " + fieldName + " field is required" : "";

        if(password !== "") {
            error.value = password.length < 8 ? 'Password length must be 8 character or more' : '';
        }
    }

    return {
        validationField, validationPassword,error
    }
}