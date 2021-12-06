import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// MUI
import { Stack, Box, Typography, Divider, Button, Link } from '@mui/material'
import Input from '../../../form-components/Input'

// Form
import { useForm } from "react-hook-form";
import { FORM_VALIDATIONS } from '../../../constants'

export default function Login(){

    // Variables
    const [defaultValues] = useState({
        email: localStorage.getItem('last-email'),
        password: "",
    })
    const navigate = useNavigate()
    const methods = useForm({ defaultValues, mode: 'onChange' }); // Rerendering on change - live validation
    const { handleSubmit, register, control, formState, getValues } = methods;

    console.log(formState)

    // Methods
    function handleNavigate() {
        navigate('/auth/register')
    }

    function onSubmit(data) {
        console.log(data)
        localStorage.setItem('last-email', getValues('email'))
        navigate('/dashboard')
    }


    return(
        <Stack spacing={6} sx={{ maxWidth: 420 }}>
            {/* Title */}
            <Box>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    Welcome to application
                </Typography>
                <Typography variant="subtitle2" sx={{ opacity: .8, fontWeight: 400 }}>
                    Log in to continue
                </Typography>
            </Box>

            {/* <Divider /> */}

            <Stack spacing={4}>

                <Input 
                    name="email"
                    required 
                    control={control} 
                    label="E-mail address"
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
                    label="Password"
                    type="password"
                    {...register("fullName", { 
                        required: FORM_VALIDATIONS.required
                    })}
                />
            </Stack>

            <Divider>
                Don't have an account?
                <Link 
                    onClick={handleNavigate} 
                    sx={{ ml: 1, cursor: 'pointer' }}
                >
                    Create now
                </Link>
            </Divider>

            <Button
                onClick={handleSubmit(onSubmit)}
                sx={{ height: 54, textTransform: 'none' }} 
                variant="contained" 
                fullWidth
                inputMode="submit"
                disabled={!formState.isValid}
            >
                { formState.isValid ? 'Login' : 'Enter credentials' }
            </Button>
        </Stack>
    )
}