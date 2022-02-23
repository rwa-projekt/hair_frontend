import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

// MUI
import { Stack, List, Tooltip, ListItemButton, ListItemIcon, IconButton, Avatar, useTheme } from '@mui/material';

// Icons
import { IconBrandTabler } from '@tabler/icons'

// Components
import MenuItems from '../../../menu-items/Admin'


// ===========================|| SIDEBAR DRAWER ||=========================== //

export default function Sidebar () {

    // Hooks
    const menuItems = MenuItems()
    const theme = useTheme()
    const { pathname } = useLocation();
    const navigate = useNavigate()

    // Methods
    function handleNavigateToDashboard(){
        navigate('/dashboard')
    }

    // Content
    const navigation = 
        menuItems.items[0].children.map((item, index) => {

            // Variables
            const selected = pathname.includes(item.url)

            // Methods
            function handleNavigate(){
                navigate(item.url)
            }

            const Icon = item.icon;
            const ItemIcon = Icon && (
                <Icon 
                    color={selected ? theme.palette.primary.main : '#ffffff40'} 
                    stroke={1.5} 
                    size="1.5rem" 
                />
            )
            
            return(
                <Tooltip key={index} title={item.title} placement="right">
                    <ListItemButton
                        onClick={handleNavigate}
                        selected={selected}
                        sx={{ width: 64, height: 64, borderRadius: 4, my: 2 }} 
                    >
                        <ListItemIcon sx={{ pl: .5 }} >
                            { ItemIcon }
                        </ListItemIcon>
                    </ListItemButton>
                </Tooltip> 
            )

        })
    

    const drawer = (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{ height: '100%' }}
        >

            {/* Logo icon */}
            <IconButton
                onClick={handleNavigateToDashboard}
                size="medium" 
                sx={{ 
                    bgcolor: "secondary.main",
                    '&:hover': { bgcolor: '#DF6D73aa' } 
                }}
            >
                <IconBrandTabler/>
            </IconButton>

            {/* Rendering menu items */}
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                spacing={4}
                sx={{ width: '100%' }}
            >
                <List sx={{ width: 64 }}>
                    { navigation }
                </List>
            </Stack>

            {/* Avatar */}
            <Avatar sx={{ bgcolor: "secondary.main", color: "#212121" }}>K</Avatar>
            
        </Stack>
    );


    return (
        <nav 
            style={{ 
                padding: "24px 0px", 
                width: 80,
                height: '100%',
                backgroundColor: theme.palette.grey[900]
            }}
        >
            {/* Rendering drawer */}
            { drawer }
        </nav>
    );
}