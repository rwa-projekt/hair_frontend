import React from 'react';
// Routes
import Routes from './routes'

// MUI
import { ThemeProvider, CssBaseline } from '@mui/material'

// Theme
import useCustomTheme from './theme/useTheme'

// ===========================|| APP ||=========================== //

export default function App(){

    // Variables
    const THEME = useCustomTheme();

    return (
        <ThemeProvider theme={THEME}>
            <CssBaseline />
            <Routes />
        </ThemeProvider>
    );
};