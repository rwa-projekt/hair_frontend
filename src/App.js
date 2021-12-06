import React, { useMemo, useEffect } from 'react';
import { TOGGLE_MODE } from './store/modules/ui/actions'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Routes
import Routes from './routes'

// MUI
import { createTheme, ThemeProvider, CssBaseline, useTheme, useMediaQuery } from '@mui/material'

// ===========================|| APP ||=========================== //

export default function App(){

    // Variables
    const theme = useTheme()
    const dispatch = useDispatch()
    const mode = useSelector(state => state.UI.mode)

    // Methods
    useEffect(() => {
      async function getMode(){
        const savedMode = await localStorage.getItem("theme-mode") || 'light'
        dispatch({ 
          type: TOGGLE_MODE,
          mode: savedMode
        })
      }
      getMode()
    }, [])


    useEffect(() => {
      document
        .getElementsByTagName('meta')
        .namedItem('theme-color')
        .setAttribute(
          'content', mode === 'dark' ? '#121212' : theme.palette.background.paper)
    }, [mode, theme])

    const THEME = useMemo(
      () =>
        createTheme({
          palette: {
            mode,
            // primary: {
            //   light: '#3369ff',
            //   main: '#0044ff',
            //   dark: '#002fb2',
            //   contrastText: '#fff',
            // },
          },
          typography: {
              fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
              fontSize: 14,
              body1: { fontSize: 14 },
              button:{ textTransform: 'none' }
          }
        }),
      [mode],
    );

    return (
        <ThemeProvider theme={THEME}>
            <CssBaseline />
            <Routes />
        </ThemeProvider>
    );
};