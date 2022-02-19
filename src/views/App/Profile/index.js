import React, { useState, useEffect } from 'react'

// React router
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// MUI
import { Box, Tabs, Tab } from '@mui/material'

// Components
import PageTitle from '../../../components/PageTitle'

function LinkTab(props) {

    // Variables
    const navigate = useNavigate()

    return (
      <Tab
        component="a"
        sx={{ 
            textTransform: "none", 
            mr: 2 
        }}
        onClick={(event) => {
          event.preventDefault();
          navigate(`/user/me/${props.value}`)
        }}
        {...props}
      />
    );
  }


export default function MyProfile(){

    // Variables
    const location = useLocation()
    const [value, setValue] = useState(location.pathname.split('/')[3]);

    // Methods
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setValue(location.pathname.split('/')[3])
    }, [location])

    return(
        <div id="profile-tabs">

            <PageTitle />

            {/* Tabs */}
            <Box sx={{ width: '100%', mb: 4 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs 
                        value={value} 
                        onChange={handleChange} 
                        aria-label="basic tabs example"
                    >
                        <LinkTab label="Osnovno" value="general" />
                        <LinkTab label="Smjene" value="shifts" />
                    </Tabs>
                </Box>
            </Box>

            {/* Rendering routes */}
            <Outlet />
        </div>
    )
}