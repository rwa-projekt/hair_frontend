import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../../auth'

// MUI
import { Stack, Box, Typography, Divider, Button, Link } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import Input from '../../../form-components/Input'

// Form
import { useForm } from "react-hook-form";
import { FORM_VALIDATIONS } from '../../../constants'

export default function Login(){

    // Hooks
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation();

    // Variables
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

    function onSubmitCallback(){
        let isAdmin = auth.isAdmin;
        let path = isAdmin ? '/admin/dashboard' : '/dashboard'
        let from = path

        console.log("AUTH => ", auth)
        console.log("ISADMIN => ", isAdmin)
        console.log("PATH => ", path)
        console.log("FROM => ", from)
        navigate(from, { replace: true })
    }

    function onSubmit(user) {
        console.log(user)
        localStorage.setItem('bb:last-email', getValues('email'))

        auth.login(user, onSubmitCallback)
    }


    return(
        <Stack spacing={6} sx={{ maxWidth: 480, width: '100%' }}>
            {/* Title */}
            <Box>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    Dobrodošli u BarberBooking
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
                    {...register("fullName", { 
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
                false ?
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
            
        </Stack>
    )
}