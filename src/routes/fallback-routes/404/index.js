import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// MUI
import { Box, Stack, Typography, Button, useMediaQuery, useTheme } from '@mui/material'

// Lottie
import Lottie from 'react-lottie';
import animationData from '../../../assets/lottie/404.json';

export default function PageNotFound() {

    // Variables
    // const mode = useSelector(state => state.UI.mode)
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate()
    const location = useLocation()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    // Methods
    function handleOnClick() {
      if(location.pathname.includes('website')){
        navigate('/website/home')
      }
      else{
        navigate('/dashboard')
      }
    }
    
    return (
      <Stack justifyContent="center" alignItems="center" spacing={4}>
        <Lottie 
          options={defaultOptions}
          width={isMobile ? '80vw' : 600}
          isClickToPauseDisabled={true}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
                Nažalost ova stranica je nedostupna
            </Typography>

            <Typography variant="body1" sx={{ textAlign: "center", maxWidth: isMobile ? '75vw' : 420 }}>
                Ova stranica nije pronađena. Stranica je možda na drugoj lokaciji ili niste ispravno unijeli adresu.
            </Typography>
        </Box>

        <Button onClick={handleOnClick}>
          Vrati me na početnu stranicu
        </Button>


      </Stack>
    );
  }