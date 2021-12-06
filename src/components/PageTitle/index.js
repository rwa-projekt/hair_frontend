import React from 'react'
import { useNavigate } from 'react-router-dom'

// Hooks
import useGetMenuItem from '../../hooks/useGetMenuItem'

// MUI
import { Typography, Breadcrumbs, Link, Box } from '@mui/material'


export default function PageTitle(){

    // Variables
    const navigate = useNavigate()
    const menuItem = useGetMenuItem()

    // Methods
    function handleLinkClick(url) {
        navigate(url)
    }

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
                        href="/dashboard"
                        onClick={() => handleLinkClick('/dashboard')}
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