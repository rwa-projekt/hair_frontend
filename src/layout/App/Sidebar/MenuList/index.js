import React from 'react';

// MUI
import { Typography } from '@mui/material';

// Components
import NavGroup from './NavGroup';
import MenuItems from '../../../../menu-items/App'

// ===========================|| SIDEBAR MENU LIST ||=========================== //

export default function MenuList(){
    const menuItems = MenuItems() ?? []
    const navItems = menuItems?.items.map((item, index) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} index={index} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return navItems;
};