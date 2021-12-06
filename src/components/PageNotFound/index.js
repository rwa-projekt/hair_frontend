import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// MUI
import { Box, Stack, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { IconChevronLeft } from '@tabler/icons';

// Lottie
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/page_not_found.json';

export default function PageNotFound() {

    // Variables
    const mode = useSelector(state => state.UI.mode)
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate()
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
        navigate('/dashboard')
    }
    
    return (
      <Stack justifyContent="center" alignItems="center" spacing={4}>
        <Lottie 
          options={defaultOptions}
          width={isMobile ? '80vw' : 500}
          isClickToPauseDisabled={true}
        />

        <Box>
            <Typography variant="h3" sx={{ textAlign: "center", mb: 1 }}>
                Oops...
            </Typography>

            <Typography variant="body1" sx={{ textAlign: "center", maxWidth: isMobile ? '75vw' : 320 }}>
                It looks like this page doesn't exist, go back to dashboard
            </Typography>
        </Box>

        <IconButton onClick={handleOnClick} sx={{ border: `1px solid ${mode === 'light' ? '#0000008a' : '#ffffff40'}` }}>
            <IconChevronLeft />
        </IconButton>


      </Stack>
    );
  }