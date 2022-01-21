import React from 'react'
import { Outlet } from 'react-router-dom'

// MUI
import { Container } from '@mui/material'

// Components
import Sidebar from './Sidebar'

export default function Admin(){
    return(
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row'}}>
            {/* Sidebar */}
            <Sidebar />

            {/* Rendering components */}
            <Container maxWidth="xxxl" sx={{ p: '0 !important' }}>
                <Outlet />
            </Container>
        </div>
    )
}