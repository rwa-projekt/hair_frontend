import React from 'react';
import { Outlet, useNavigate, useLocation, } from 'react-router-dom'

// MUI
import { Container, AppBar, Box, Toolbar, Typography, Stack, Button, Divider, Fab } from '@mui/material'

// Icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import { IconBrandTabler } from '@tabler/icons'

// Components
import HideOnScroll from './components/HideOnScroll'
import ScrollToTop from './components/ScrollToTop'

export default function SiteLayout() {

    // Variables
    const location = useLocation()
    const navigate = useNavigate()
    
    // Methods
    function handleOnVisionClick() {
        window.open('https://drive.google.com/file/d/1YMk469lD-JUJlNKKm_YPn_IS4X3GK8Gm/view', '_blank')
    }

    function handleOnRegisterClick() {
        navigate("/auth/register")
    }

    function handleNavigate(url){
        navigate(`/website/${url}`)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* App Bar */}
            {/* <HideOnScroll> */}
                <AppBar 
                    color="background" 
                    elevation="0"
                    position="sticky"
                    sx={{ 
                        display: 'flex', 
                        py: 1,  
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        borderBottom: '1px solid #e4e4e4' 
                    }}
                >
                    <Toolbar 
                        sx={{ 
                            maxWidth: '1200px', 
                            width: '100%', 
                            display: 'flex', 
                            justifyContent: 'space-between' 
                        }}
                    >

                        <Stack spacing={3} alignItems="center" direction="row">

                            <Typography variant="h6">
                                Barbershop
                            </Typography>

                            <div style={{ width: 1, height: 32, backgroundColor: '#e4e4e4' }} />

                            <Typography
                                onClick={() => handleNavigate('home')} 
                                component="a" 
                                variant="body2" 
                                sx={{ 
                                    fontWeight: 500, 
                                    opacity: location.pathname.includes('home') ? 1 : .5,
                                    cursor: 'pointer'
                                }}
                            >
                                Početna
                            </Typography>

                            <Typography
                                onClick={() => handleNavigate('about-us')} 
                                component="a" 
                                variant="body2" 
                                sx={{ 
                                    fontWeight: 500, 
                                    opacity: location.pathname.includes('about-us') ? 1 : .5,
                                    cursor: 'pointer'
                                }}
                            >
                                O nama
                            </Typography>

                        </Stack>


                        <Stack spacing={2} alignItems="center" direction="row">
                            <Button 
                                sx={{ textTransform: 'none', borderRadius: 40, borderColor: '#cdcdcd' }} 
                                onClick={handleOnVisionClick} 
                                color="inherit"
                                variant="outlined"
                            >
                                Vizija
                            </Button>
                            <Button 
                                sx={{ textTransform: 'none', borderRadius: 40 }}
                                disableElevation
                                onClick={handleOnRegisterClick} 
                                color="primary"
                                variant="contained"
                            >
                                Započnite
                            </Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            {/* </HideOnScroll> */}

            {/* Outlet */}
            <Container maxWidth="lg" sx={{ pt: 2 }}>
                <Outlet />
                <div style={{ minHeight: 120 }} /> {/* Padding bottom */}
            </Container>

            <ScrollToTop>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollToTop>
        </Box>
    );
}