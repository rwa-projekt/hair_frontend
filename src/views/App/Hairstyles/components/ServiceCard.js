import React from 'react'
import { useIsTablet } from '../../../../hooks/useDevice';

// MUI
import { Box, Stack, Typography, Chip } from '@mui/material'

export default function Card({ item }){

    // Variables
    const smallScreen = useIsTablet()

    return(
        <Box sx={{ width: smallScreen ? '100%' : '33.3%', mb: 4 }}>
            <Stack direction="column" sx={{ maxWidth: '100%', px: smallScreen ? 0 : 2 }}>
                <img 
                    src={item.avatar}  
                    style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: 16 }}
                />
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 2, width: '100%' }}>
                    <Stack direction="column" sx={{ width: '100%' }}>
                        <Typography 
                            variant="subtitle1" 
                            sx={{ fontWeight: 600, maxWidth: '100%' }}
                        >
                            { item.name }
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                            { item.price } KM
                        </Typography>
                    </Stack>
                    <Chip sx={{ width: 'max-content' }} label={`${item.time_needed} min.`} variant="outlined" color="secondary" />
                </Stack>
            </Stack>
        </Box>
    )
}