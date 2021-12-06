import React from "react";

// MUI
import { IconButton } from '@mui/material'

// Icons
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";


export default function ThemeModeToggler({ mode, setMode }, ...props){

    // Methods
    function toggleTheme(){
        setMode(previousMode => previousMode === 'light' ? 'dark' : 'light')
    }


    return (
        <IconButton
            onClick={toggleTheme}
            {...props}
        >
            {mode === 'dark' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
    );
};
