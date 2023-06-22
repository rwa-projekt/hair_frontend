import React from 'react'
import { useAuth } from '../../../../../auth'
import { useNavigate } from 'react-router-dom'
import { useIsTablet } from '../../../../../hooks/useDevice'

// MUI
import { Stack, Box, Typography, Button, Avatar } from '@mui/material'

// Illustrations
import Illustration from '../../../../../assets/illustrations/dashboard_banner.png'

// Icons
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export default function Banner(){

    // Hooks
    const { user } = useAuth()
    const navigate = useNavigate()
    const isTablet = useIsTablet()

    // Variables
    const firstName = user?.data?.account?.name?.split(' ')[0] || 'Korisnik'

    // Methods
    function handleNavigateToProfile(){
        // navigate('/user/me/general')
    }

    function handleNavigateToAppointments(){
        navigate('/appointments')
    }

    return(
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ 
                backgroundColor: 'secondary.light', 
                borderRadius: 2, 
                position: 'relative', 
                height: isTablet ? '100%' : 220,
            }}
        >
            {/* Left */}
            <Stack spacing={isTablet ? 2 : 2.5} sx={{ py: 3, pl: isTablet ? 3 : 4, width: isTablet ? 'calc(100% - 24px)' : '100%' }}>
                <Typography 
                    variant="caption" 
                    sx={{ opacity: .45, fontWeight: 600, fontSize: isTablet && 10 }}
                >
                    BARBER BOOKING
                </Typography>

                {/* Informations */}
                <Stack spacing={1}>
                    {/* Main text */}
                    <Typography 
                        variant="h5" 
                        sx={{ fontWeight: 500, fontSize: isTablet && 18 }}
                    >
                        Dobrodošli natrag, { firstName }
                    </Typography>

                    {/* Informations */}
                    <Stack direction="row" spacing={1}>
                        <Avatar variant="rounded" sx={{ width: 20, height: 20, borderRadius: 2 }} /> 
                        <Stack direction="row" spacing={1}>
                            <Typography 
                                variant="body2" 
                                sx={{ opacity: .65, fontSize: isTablet && 12 }}
                            >
                                Rezervirajte termin u našem salonu
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Button 
                    onClick={handleNavigateToAppointments} 
                    disableElevation 
                    color="secondary" 
                    variant="contained" 
                    sx={{ width: isTablet ? '100%' : 'max-content' }}
                >
                    Napravite rezervaciju
                </Button>
            </Stack>

            {/* Right */}
            {
                !isTablet && 
                    <Box sx={{ height: '100%', width: 220, mr: 16, position: 'relative'}}>
                        <img 
                            src={Illustration} 
                            style={{ 
                                position: 'absolute',
                                left: -40,
                                bottom: 0, 
                                height: 300 
                            }} 
                        />
                    </Box>
            }
        </Stack>
    )
}