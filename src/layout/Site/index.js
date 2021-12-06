import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()

    // Methods
    function handleOnLoginClick() {
        navigate("/auth/login")
    }

    function handleOnRegisterClick() {
        navigate("/auth/register")
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

                            <Typography variant="h5">
                                Website
                            </Typography>

                            <div style={{ width: 1, height: 32, backgroundColor: '#e4e4e4' }} />

                            <Typography 
                                href="#plan" 
                                component="a" 
                                variant="body2" 
                                sx={{ 
                                    fontWeight: 500, 
                                    opacity: .8,
                                }}
                            >
                                O projektu
                            </Typography>

                            <Typography 
                                href="#project" 
                                component="a" 
                                variant="body2" 
                                sx={{ 
                                    fontWeight: 500, 
                                    opacity: .8,
                                }}
                            >
                                O projektu
                            </Typography>

                            <Typography 
                                href="#about_us" 
                                component="a" 
                                variant="body2" 
                                sx={{ 
                                    fontWeight: 500, 
                                    opacity: .8,
                                }}
                            >
                                O nama
                            </Typography>

                        </Stack>


                        <Stack spacing={2} alignItems="center" direction="row">
                            <Button 
                                sx={{ textTransform: 'none', borderRadius: 40, borderColor: '#cdcdcd' }} 
                                onClick={handleOnLoginClick} 
                                color="inherit"
                                variant="outlined"
                            >
                                Login
                            </Button>
                            <Button 
                                sx={{ textTransform: 'none', borderRadius: 40 }}
                                disableElevation
                                onClick={handleOnRegisterClick} 
                                color="primary"
                                variant="contained"
                            >
                                Get started
                            </Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            {/* </HideOnScroll> */}

            {/* Outlet */}
            <Container maxWidth="lg">
                <Outlet />
            </Container>

            <ScrollToTop>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollToTop>
        </Box>
    );
}