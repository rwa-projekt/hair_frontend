export const FORM_VALIDATIONS = {
    required: {
        value: true,
        message: 'This field is required'
    },
    email: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid e-mail address."
    }
}