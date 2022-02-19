import React from 'react'
import moment from 'moment'

// Context
import { useAppointments } from '../../index'

// MUI
import { Stack, Button, Typography } from '@mui/material';

export default function Checkout(){

    // Variables
    const { checkout } = useAppointments()

    return(
        <Stack direction="row" flexWrap="wrap" sx={{ width: '100%', position: 'relative' }} >
            <CheckoutItem 
                label="Datum i vrijeme" 
                value={moment(`${checkout.date} ${checkout.time}`).calendar()} 
            />
            <CheckoutItem 
                label="Frizer" 
                value={checkout.barber} 
            />
            <CheckoutItem 
                label="Cijena" 
                value={`${checkout.price} KM`} 
            />
            <CheckoutItem 
                label="Vrijeme potrebno" 
                value={`${checkout.time_needed} min.`} 
            />
            <CheckoutItem 
                label="Usluge" 
                value={checkout.services}
                // value={checkout.services.map(item => item).join(", ") || "-"}
                fullWidth
            />
        </Stack>
    )
}

export const CheckoutItem = ({ label = "", value = "-", fullWidth = false }) => {
    return(
        <Stack
            direction="column"
            align="flex-start"
            sx={{ width: fullWidth ? '100%' : '50%', mb: 6 }}
        >
            <Typography variant="body2" sx={{ opacity: .75 }}>{ label }</Typography>
            <Typography variant="h6">{ value }</Typography>
        </Stack>
    )
}