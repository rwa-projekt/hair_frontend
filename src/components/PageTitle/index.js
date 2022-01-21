import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Hooks
import useGetMenuItem, { useGetAdminMenuItem } from '../../hooks/useGetMenuItem'

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

function AdminPageTitle(){

    // Hooks
    const navigate = useNavigate()
    const location = useLocation()
    const menuItem = useGetAdminMenuItem()

    if(!menuItem.breadcrumbs){
        return null;
    }

    // Variables
    const baseRoute = `/${menuItem.url}`
    const isBaseRoute = location.pathname === baseRoute
    const middleLink = menuItem.children.find(item => item.path === '').name
    const lastLink = 
        menuItem.children.find(item => location.pathname == `${baseRoute}/${item.path}`)?.name || 
        menuItem.children.find(item => item.path === '*').name

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
                        onClick={() => navigate('/admin/dashboard')}
                        sx={{ cursor: 'pointer' }}
                    >
                        Dashboard
                    </Link>

                    {/* Current route */}
                    {
                        isBaseRoute ?
                            <Typography>
                                { middleLink }
                            </Typography>
                            :
                            <Link 
                                underline="hover" 
                                color="inherit" 
                                onClick={() => navigate(baseRoute)}
                                sx={{ cursor: 'pointer' }}
                            >
                                { middleLink }
                            </Link>
                    }
                    

                    {/* Current route */}
                    {
                        !isBaseRoute &&
                            <Typography color="text.primary">
                                { lastLink }
                            </Typography>
                    }
                </Breadcrumbs>
            </div>
        </Box>
    )
}

export { AdminPageTitle }