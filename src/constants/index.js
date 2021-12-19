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

export const SNACKBAR_ALERTS = {
    login_error: 'Dogodila se greška prilikom prijave',
    register_error: 'Dogodila se greška prilikom stvaranja računa'
}