import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../auth'
import { useSelector } from 'react-redux'

// MUI
import { Stack, Box, Typography, Divider, Button, Link, Snackbar, Alert } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import Input from '../../../form-components/Input'

// Form
import { useForm } from "react-hook-form";
import { FORM_VALIDATIONS, SNACKBAR_ALERTS } from '../../../constants'

export default function Login(){

    // Hooks
    const auth = useAuth()
    const navigate = useNavigate()

    // Variables
    const [snackbarOpened, setSnackbarOpened] = useState(false)
    const [defaultValues] = useState({
        name: "",
        email: "",
        password: "",
    })
    const registerStatus = useSelector(state => state.USER.register.status)
    const methods = useForm({ defaultValues, mode: 'onChange' }); // Rerendering on change - live validation
    const { handleSubmit, register, control, formState } = methods;

    // Methods
    function handleNavigate() {
        navigate('/auth/login')
    }

    function closeSnackbar(){
        setSnackbarOpened(false)
    }

    function openSnackbar(){
        setSnackbarOpened(true)
    }

    function onSubmitCallback(){
        let next = '/dashboard'
        navigate(next, { replace: true })
    }

    function onSubmit(user) {
        console.log(user)
        auth.register(user, onSubmitCallback, openSnackbar)
    }

    return(
        <Stack spacing={6} sx={{ maxWidth: 480, width: '100%' }}>
            {/* Title */}
            <Box>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    Dobrodošli u Barber Booking
                </Typography>
                <Typography variant="subtitle2" sx={{ opacity: .8, fontWeight: 400 }}>
                    Stvorite račun da biste nastavili
                </Typography>
            </Box>

            {/* <Divider /> */}

            <Stack spacing={4}>

                <Input 
                    name="name"
                    required 
                    control={control} 
                    label="Ime i prezime"
                    inputMode="text"
                    type="text"
                    {...register("name", { 
                        required: FORM_VALIDATIONS.required
                    })}
                />

                <Input 
                    name="email"
                    required 
                    control={control} 
                    label="E-mail adresa"
                    inputMode="email"
                    type="email"
                    {...register("email", { 
                        required: FORM_VALIDATIONS.required, 
                        pattern: FORM_VALIDATIONS.email
                    })}
                />

                <Input 
                    name="password" 
                    required
                    control={control} 
                    label="Lozinka"
                    type="password"
                    autoComplete="current-password"
                    {...register("password", { 
                        required: FORM_VALIDATIONS.required
                    })}
                />
            </Stack>

            <Divider>
                Već imate račun?
                <Link 
                    onClick={handleNavigate} 
                    sx={{ ml: 1, cursor: 'pointer' }}
                >
                    Prijavite se
                </Link>
            </Divider>

            {
                registerStatus === 'loading' ?
                    <LoadingButton
                        loading
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="outlined"
                        sx={{ height: 54, textTransform: 'none' }} 
                    >
                        Stvaranje računa...
                    </LoadingButton>
                    :
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        sx={{ height: 54, textTransform: 'none' }} 
                        variant="contained" 
                        fullWidth
                        inputMode="submit"
                        disabled={!formState.isValid}
                    >
                        { formState.isValid ? 'Stvorite račun' : 'Unesite podatke' }
                    </Button>
            }

            <Snackbar
                open={snackbarOpened}
                autoHideDuration={3000}
                onClose={closeSnackbar}
                message={SNACKBAR_ALERTS.register_error}
            >
                <Alert onClose={closeSnackbar} severity="error" sx={{ width: '100%' }}>
                    { SNACKBAR_ALERTS.register_error }
                </Alert>
            </Snackbar>

            <div style={{ minHeight: 0 }} /> {/* Padding bottom */}
        </Stack>
    )
}