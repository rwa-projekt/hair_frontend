import React from 'react'

// MUI
import { Stack, Typography } from '@mui/material'


export default function AboutUs({ type = "Neke informacije", title = "", subtitle = "" }){

    return(
        <Stack
            direction='column'
            alignItems="flex-start"
            sx={{  width: '100%', mb: 12 }}
        >
            <Typography 
                variant="subtitle2" 
                sx={{ fontWeight: 400, letterSpacing: 2, fontSize: 12, opacity: .75, textTransform: 'uppercase', textAlign: 'left' }}
            >
                { type }
            </Typography>
            <Typography
                variant="h3"
                sx={{ fontWeight: 600, opacity: .95, mb: 1, textAlign: 'left' }}
            >
                { title }
            </Typography>
            <Typography 
                variant="h6"
                sx={{ fontWeight: 600, opacity: .75, fontSize: 16, textAlign: 'left' }}
            >
                { subtitle }
            </Typography>
        </Stack>
    )
}