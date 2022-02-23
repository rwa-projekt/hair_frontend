import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
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
    const location = useLocation()

    // Variables
    const currentUser = useSelector(state => state.USER.user)
    const [snackbarOpened, setSnackbarOpened] = useState(false)
    const [defaultValues] = useState({
        email: localStorage.getItem('bb:last-email'),
        password: "",
    })
    const methods = useForm({ defaultValues, mode: 'onChange' }); // Rerendering on change - live validation
    const { handleSubmit, register, control, formState, getValues } = methods;

    // Methods
    function handleNavigate() {
        navigate('/auth/register')
    }

    function closeSnackbar(){
        setSnackbarOpened(false)
    }

    function openSnackbar(){
        setSnackbarOpened(true)
    }

    async function onUserCallback(email){
        navigate('/dashboard', { replace: true })
        await localStorage.setItem('bb:last-email', email)
    }

    async function onAdminCallback(email){
        await localStorage.setItem('bb:last-email', email)
    }

    function onSubmit(user) {
        console.log(user)
        auth.login(
            user, 
            () => onUserCallback(user.email),
            () => onAdminCallback(user.email), 
            openSnackbar
        )
    }


    return(
        <Stack spacing={6} sx={{ maxWidth: 480, width: '100%' }}>
            {/* Title */}
            <Box>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    Dobrodošli u Barber Booking
                </Typography>
                <Typography variant="subtitle2" sx={{ opacity: .8, fontWeight: 400 }}>
                    Prijavite se da bi nastavili
                </Typography>
            </Box>

            {/* <Divider /> */}

            <Stack sx={{ width: '100%' }} spacing={4}>

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
                    {...register("password", { 
                        required: FORM_VALIDATIONS.required
                    })}
                />
            </Stack>

            <Divider>
                Nemate račun?
                <Link 
                    onClick={handleNavigate} 
                    sx={{ ml: 1, cursor: 'pointer' }}
                >
                    Stvorite ga
                </Link>
            </Divider>

            {
                currentUser.status === 'loading' ?
                    <LoadingButton
                        loading
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="outlined"
                        sx={{ height: 54, textTransform: 'none' }} 
                    >
                        Prijavljivanje...
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
                        { formState.isValid ? 'Prijava' : 'Unesite podatke' }
                    </Button>
            }

            <Snackbar
                open={snackbarOpened}
                autoHideDuration={3000}
                onClose={closeSnackbar}
                message={SNACKBAR_ALERTS.login_error}
            >
                <Alert onClose={closeSnackbar} severity="error" sx={{ width: '100%' }}>
                    { SNACKBAR_ALERTS.login_error }
                </Alert>
            </Snackbar>
            
        </Stack>
    )
}