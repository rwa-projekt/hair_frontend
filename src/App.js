import React, { useEffect } from 'react';
// Routes
import Routes from './routes'

// MUI
import { ThemeProvider, CssBaseline } from '@mui/material'

// Theme
import useCustomTheme from './theme/useTheme'

import moment from 'moment';
import localization from 'moment/locale/hr'

// ===========================|| APP ||=========================== //

export default function App(){

    // Variables
    const THEME = useCustomTheme();

    // Methods
    useEffect(() => { 
        moment.updateLocale('hr', localization);
    }, [])

    return (
        <ThemeProvider theme={THEME}>
            <CssBaseline />
            <Routes />
        </ThemeProvider>
    );
};