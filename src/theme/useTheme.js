import { useMemo, useEffect } from 'react';
import { TOGGLE_MODE } from '../state/modules/ui/actions'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// MUI
import { createTheme,  useTheme } from '@mui/material'

// ===========================|| THEME ||=========================== //

export default function useCustomTheme(){

    // Variables
    const theme = useTheme()
    const dispatch = useDispatch()
    const mode = useSelector(state => state.UI.mode)
    const isLight = mode === 'light'

    // Methods
    useEffect(() => {
      async function getMode(){
        const savedMode = await localStorage.getItem("bb:theme-mode") || 'light'
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
            secondary:{
              main: '#DF6D73',
              light: isLight ? '#FCEFF0' : '#643739',
            },
            success: {
              main: '#44b700',
              contrastText: '#fff'
            }
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

    return THEME
};