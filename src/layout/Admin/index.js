import React from 'react'
import { Outlet } from 'react-router-dom'

// MUI
import { Container } from '@mui/material'

export default function Admin(){
    return(
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row'}}>
            <div style={{ width: 80, height: '100%', backgroundColor: '#434343' }} />
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Outlet />
            </Container>
        </div>
    )
}