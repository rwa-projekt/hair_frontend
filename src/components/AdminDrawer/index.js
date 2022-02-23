import React from 'react'

// Mui
import { Box, LinearProgress } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function AdminDrawer({ loading = false, children }){

    // Variables
    const darkTheme = createTheme({ 
        palette: { 
            mode: 'dark',
            secondary:{
                main: '#DF6D73',
            },
        },
        typography: {
            fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
            fontSize: 14,
            body1: { fontSize: 14 },
            button:{ textTransform: 'none' }
        }
    });

    return(
        <ThemeProvider theme={darkTheme}>
            <Box
                id="admin-drawer"
                sx={{ 
                    width: 480, 
                    height: '100vh', 
                    backgroundColor: 'secondary.dark',
                    position: 'relative',
                    overflowY: 'auto'
                }}
            >
                {
                    loading && 
                        <LinearProgress color='secondary' sx={{ position: 'absolute', top: 0, left: 0, width: '100%' }} />
                }

                {/* Content */}
                <Box 
                    sx={{ 
                        backgroundColor: 'secondary.dark',
                        p: 4,
                    }}
                >
                    {/* Rendering children */}
                    { children }
                </Box>
                
            </Box>
        </ThemeProvider>
    )
}