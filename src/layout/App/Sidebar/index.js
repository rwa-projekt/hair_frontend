import React, { useEffect } from 'react';
import useIsMount from '../../../hooks/useIsMount'
import { useNavigate } from 'react-router'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_SIDEBAR_COLLAPSED } from '../../../state/modules/ui/actions'

// MUI
import { Box, List, ListItem, ListItemButton, IconButton, useMediaQuery, useTheme, Typography } from '@mui/material';
import { useLayoutCtx } from "@mui-treasury/layout";

// Icons
import { IconBrandTabler } from '@tabler/icons'
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import Logo from '../../../assets/icons/favicon.ico'

// Components
import MenuList from './MenuList';
// Styles
import { useStyles } from './styles'

// ===========================|| SIDEBAR DRAWER ||=========================== //

export default function Sidebar ({ onClose }) {

    // Variables
    const navigate = useNavigate()
    const isMount = useIsMount();
    const collapsed = useSelector(state => state.UI.sidebar.collapsed)
    const dispatch = useDispatch()
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { toggleLeftSidebarCollapsed } = useLayoutCtx()

    // Methods
    useEffect(() => {
        if(!isMount){
            dispatch({ type: TOGGLE_SIDEBAR_COLLAPSED, collapsed: isMobile ? false : collapsed })
            if(isMobile && collapsed){
                toggleLeftSidebarCollapsed()
            }
        }
    }, [isMobile])

    function handleNavigate(){
        navigate('/dashboard')
    }

    const drawer = (
        <Box>

            {/* Logo name and icon */}
            <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: isMobile ? '8px' : '24px' }}>
                <List sx={{ padding: '0 !important', width: '100vw' }}>
                    <ListItem sx={{ padding: '0 !important', display: 'flex', justifyContent: 'stretch' }}>

                        {/* Logo icon */}
                        <ListItemButton onClick={handleNavigate} className={classes.logoIconButton}>
                            <img src={Logo} className={classes.logoIcon} />
                        </ListItemButton>

                        {/* Spacing */}
                        <div style={{ flex: 1 }} />

                        {/* Close drawer button (on mobile devices) */}
                        {
                            isMobile &&
                                <IconButton onClick={onClose} style={{ float: 'right' }}>
                                    <ArrowLeft/>
                                </IconButton>
                        }
                    </ListItem>
                </List>
            </Box>

            {/* Rendering menu items */}
            <MenuList />

            {/* Spacing */}
            <Box sx={{ height: 32 }} />
            
        </Box>
    );


    return (
        <nav 
            style={{ 
                padding: "8px", 
                width: isMobile && '80vw' 
            }}
        >
            {/* Rendering drawer */}
            {drawer}
        </nav>
    );
}