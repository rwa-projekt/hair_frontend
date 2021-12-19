import React, { useEffect } from 'react'
import { useAuth } from '../../../auth'

// MUI
import { Backdrop, CircularProgress } from '@mui/material'

export default function Logout(){

    // Hooks
    const auth = useAuth()

    // Methods
    useEffect(() => {
        auth.logout()
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