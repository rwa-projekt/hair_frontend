import React from 'react'

// Context
import { useAppointments } from '../../index'

// MUI
import { Stack, Button, Typography } from '@mui/material';

export default function Checkout(){

    // Variables
    const { checkout, submit, canSubmit } = useAppointments()


    return(
        <Stack direction="column" spacing={2}>
            <Typography variant="h6">Ovo još malo sredit i responzivnost 💆🏽‍♂️</Typography>
            <Typography variant="body2">{ checkout.date } { checkout.time }</Typography>
            <Typography variant="body2">{ checkout.barber }</Typography>
            <Typography variant="body2">{ checkout.price } KM,  { checkout.time_needed} min.</Typography>
            <Typography variant="body2">{ checkout.services.map(item => item).join(", ") }</Typography>
        </Stack>
    )
}