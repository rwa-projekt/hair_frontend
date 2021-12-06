import React, { useState } from 'react'
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
        fullName: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate()
    const methods = useForm({ defaultValues, mode: 'onChange' }); // Rerendering on change - live validation
    const { handleSubmit, register, control, formState } = methods;

    console.log(formState)

    // Methods
    function handleNavigate() {
        navigate('/auth/login')
    }

    function onSubmit(data) {
        console.log(data)
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
                    Create new account to start
                </Typography>
            </Box>

            {/* <Divider /> */}

            <Stack spacing={4}>

                <Input 
                    name="fullName"
                    required 
                    control={control} 
                    label="Full name"
                    inputMode="text"
                    type="fullName"
                    {...register("fullName", { 
                        required: FORM_VALIDATIONS.required
                    })}
                />

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
                    autoComplete="current-password"
                    {...register("password", { 
                        required: FORM_VALIDATIONS.required
                    })}
                />
            </Stack>

            <Divider>
                Already have an account?
                <Link 
                    onClick={handleNavigate} 
                    sx={{ ml: 1, cursor: 'pointer' }}
                >
                    Login now
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
                { formState.isValid ? 'Register' : 'Enter credentials' }
            </Button>
        </Stack>
    )
}