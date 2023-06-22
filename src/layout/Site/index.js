import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation, } from 'react-router-dom'
import { useIsMobile, useIsTablet } from '../../hooks/useDevice'

// MUI
import { Container, AppBar, Toolbar, Typography, Stack, Button, Fab, Drawer, IconButton } from '@mui/material'
import styles from './styles.module.css'

// Icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Divide as Hamburger } from 'hamburger-react'

// Components
import HideOnScroll from './components/HideOnScroll'
import ScrollToTop from './components/ScrollToTop'

export default function SiteLayout() {

    // Hooks
    const isMobile = useIsMobile()
    const isTablet = useIsTablet()
    const location = useLocation()
    const navigate = useNavigate()

    // Variables
    const [drawerOpened, setDrawerOpened] = useState(false)
    
    // Methods
    function toggleDrawer() {
        // if(!drawerOpened){ navigate('#navigation') }
        // else{ router.replace(router.pathname) }
        setDrawerOpened(previousState => !previousState)
    }

    function handleOnVisionClick() {
        window.open('https://drive.google.com/file/d/1e3Oq782caTc2x4OPAjJ-2m7azHkaVlC4/view', '_blank')
    }

    function handleOnLoginClick() {
        navigate("/auth/login")
    }

    function handleNavigate(url){
        navigate(`/website/${url}`)
    }

    function handleNavigateFromDrawer(url, callback = null){
        toggleDrawer()
        if(url){
            handleNavigate(url)
        }
        else{
            callback()
        }
    }


    return (
        <>
            {/* App Bar */}
            <HideOnScroll>
                <AppBar 
                    color="background" 
                    elevation="0"
                    position="fixed"
                    sx={{ 
                        display: 'flex', 
                        py: 0,  
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        borderBottom: '1px solid #e4e4e4',
                        zIndex: (theme) => theme.zIndex.drawer + 1
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
                        {
                            isTablet ?
                                <Stack sx={{ width: '100%' }} direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h6"> Barber Booking</Typography>
                                    <IconButton size="small" onClick={toggleDrawer}>
                                        <Hamburger toggled={drawerOpened} rounded size={26} />
                                    </IconButton>
                                </Stack>
                                :
                                <>
                                    <Stack spacing={3} alignItems="center" direction="row">
                                        <Typography variant="h6">
                                            Barber Booking
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

                                        {/* <Typography
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
                                        </Typography> */}

                                        </Stack>


                                        <Stack spacing={2} alignItems="center" direction="row">
                                        {/* <Button 
                                            sx={{ textTransform: 'none', borderRadius: 40, borderColor: '#cdcdcd' }} 
                                            onClick={handleOnVisionClick} 
                                            color="inherit"
                                            variant="outlined"
                                        >
                                            Vizija
                                        </Button> */}
                                        <Button 
                                            sx={{ textTransform: 'none', borderRadius: 40 }}
                                            disableElevation
                                            onClick={handleOnLoginClick} 
                                            color="primary"
                                            variant="contained"
                                        >
                                            Prijavite se
                                        </Button>
                                    </Stack>
                                </>
                        }

                    </Toolbar>
                </AppBar>
            </HideOnScroll>

            {/* Outlet */}
            <Container maxWidth="lg" sx={{ pt: 2 }}>
                <div style={{ minHeight: 100 }} /> {/* Padding top */} 
                <Outlet />
                <div style={{ minHeight: 120 }} /> {/* Padding bottom */}
            </Container>

            {
                !isTablet &&
                    <ScrollToTop>
                        <Fab color="primary" size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </ScrollToTop>
            }

            {
                isTablet &&
                    <Drawer
                        open={drawerOpened}
                        variant="temporary"
                        anchor='top'
                        hideBackdrop
                    >
                        <Stack className={styles.drawerContent}>
                            <Stack spacing={4} alignItems="center" direction="column" className={styles.drawerWrapper}>
                                <Typography
                                    onClick={() => handleNavigateFromDrawer('home')} 
                                    component="a" 
                                    variant="h5" 
                                    sx={{ 
                                        fontWeight: 500, 
                                        opacity: location.pathname.includes('home') ? 1 : .5,
                                        cursor: 'pointer'
                                    }}
                                >
                                    Početna
                                </Typography>

                                <Typography
                                    onClick={() => handleNavigateFromDrawer('about-us')} 
                                    component="a" 
                                    variant="h5" 
                                    sx={{ 
                                        fontWeight: 500, 
                                        opacity: location.pathname.includes('about-us') ? 1 : .5,
                                        cursor: 'pointer'
                                    }}
                                >
                                    O nama
                                </Typography>

                                <Button 
                                    sx={{ textTransform: 'none', borderRadius: 40 }}
                                    disableElevation
                                    onClick={() => handleNavigateFromDrawer(null, handleOnLoginClick)} 
                                    color="primary"
                                    variant="contained"
                                >
                                    {
                                        isMobile ?
                                            <Typography
                                                component="a" 
                                                variant="h6" 
                                                sx={{ fontWeight: 500 }}
                                            >
                                                Prijavite se
                                            </Typography>
                                            :
                                            'Prijavite se'
                                    }
                                </Button>

                                <Button 
                                    sx={{ textTransform: 'none', borderRadius: 40, borderColor: '#cdcdcd' }}
                                    onClick={() => handleNavigateFromDrawer(null, handleOnVisionClick)} 
                                    color="inherit"
                                    variant="outlined"
                                >
                                    {
                                        isMobile ?
                                            <Typography 
                                                component="a" 
                                                variant="h6" 
                                                sx={{ 
                                                    fontWeight: 500, 
                                                    opacity: location.pathname.includes('home') ? 1 : .5,
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                Vizija
                                            </Typography> 
                                            : 
                                            'Vizija'
                                    }
                                </Button>
                                
                            </Stack>
                        </Stack>
                    </Drawer>
            }
        </>
    );
}