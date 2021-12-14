import React from 'react'
import { useNavigate } from 'react-router-dom'

// Hooks
import useGetMenuItem from '../../hooks/useGetMenuItem'

// MUI
import { Typography, Breadcrumbs, Link, Box } from '@mui/material'


export default function PageTitle(){

    // Hooks
    const navigate = useNavigate()
    const menuItem = useGetMenuItem()

    if(!menuItem.breadcrumbs){
        return null;
    }

    return(
        <Box sx={{ mb: 4 }}>
            <Typography sx={{ mb: 0.5 }} variant="h5">
                { menuItem.title }
            </Typography>

            <div role="presentation">
                <Breadcrumbs separator=">" aria-label="breadcrumb">

                    {/* Base route */}
                    <Link 
                        underline="hover" 
                        color="inherit" 
                        onClick={() => navigate('/dashboard')}
                        sx={{ cursor: 'pointer' }}
                    >
                        Dashboard
                    </Link>

                    {/* Current route */}
                    <Typography color="text.primary">
                        { menuItem.title }
                    </Typography>
                </Breadcrumbs>
            </div>
        </Box>
    )
}