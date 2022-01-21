import React from 'react'

// MUI
import { Box, Stack, CircularProgress, Typography } from '@mui/material'

export default function Loading({ color = "secondary" }){
    return(
        <Box sx={{ width: '100%', height: 400, display: 'grid', placeItems: 'center' }}>
            <Stack
                direction="column"
                alignItems="center"
                spacing={3}
            >
                <CircularProgress color={color} />
                <Typography variant="subtitle1" sx={{ opacity: .75 }}>Učitavanje ...</Typography>
            </Stack>
        </Box>
    )
}