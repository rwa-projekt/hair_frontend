import React, { useEffect } from 'react'

// MUI
import { Backdrop, CircularProgress } from '@mui/material'

// React router
import { useNavigate } from "react-router-dom";

export default function Logout(){

    // Variables
    const navigate = useNavigate();

    // Methods
    useEffect(() => {
        setTimeout(() => {
            navigate('/auth/login', { replace: true })
        }, 500);
    }, [])

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}