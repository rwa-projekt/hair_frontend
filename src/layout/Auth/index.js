import React from "react";
import { Outlet } from 'react-router-dom'

// MUI
import { Container, useTheme, useMediaQuery } from '@mui/material'

export default function AuthLayout(){

    // Variables
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container 
            maxWidth="lg" 
            sx={{ 
                minHeight: !isMobile && '100vh',
                pt: isMobile && 6,
                display: 'grid',
                placeItems: 'center'
            }}
        >

            {/* Rendering content */}
            <Outlet />
        </Container>
    );
};