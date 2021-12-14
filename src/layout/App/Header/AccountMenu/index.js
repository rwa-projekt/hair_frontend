import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../auth'
import { TOGGLE_SIDEBAR_OPENED } from '../../../../state/modules/ui/actions'
import Switch from '../../../../components/CustomSwitch'

// MUI
import { useLayoutCtx } from '@mui-treasury/layout'
import { Avatar, Menu, Stack, MenuItem, ListItemIcon, ListItemText,  Typography, Divider, Box, IconButton, Dialog, useTheme, useMediaQuery } from '@mui/material'

// Icons
import {  Logout, AccountCircle, ChevronLeftOutlined } from '@mui/icons-material'
import {  IconLayoutSidebar } from '@tabler/icons'
import MoonIcon from '../../../../components/ThemeMode/MoonIcon'
import SunIcon from '../../../../components/ThemeMode/SunIcon'

// Styles
import { PaperProps } from './styles'

// ===========================|| ACCOUNT MENU ||=========================== //

export default function AccountMenu({ mode, setMode }) {

  // Hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useTheme();
  const auth = useAuth()

  // Variables
  const [dialogOpened, setDialogOpened] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const menuElevation = theme.palette.mode === 'dark' && 2
  const { 
    state: { leftEdgeSidebar: { open } }, 
    toggleLeftSidebarOpen
  } = useLayoutCtx()

  // Methods
  function handleClick(event){
    setAnchorEl(event.currentTarget);
    if(isMobile){
        setDialogOpened(true)
    }
  };
  
  // Methods  
  function handleClose(){
    setAnchorEl(null);
  };

  function toggleSidebarOpened() {
    dispatch({ type: TOGGLE_SIDEBAR_OPENED, opened: !open })
    toggleLeftSidebarOpen()
  }

  
  function onClose() {
      setDialogOpened(false)
      handleClose()
  }

  function handleOnLogout(){
    navigate('/auth/login', { replace: true })
  }

  function handleOnProfileClick(){
    onClose()
    navigate('/user/me')
  }

  function toggleMode(){
    setMode()
    onClose()
  }

  const Content = 
    <Box 
        sx={{ 
            width: isMobile ? '100%' : 280, 
            height: '100%',
            pt: isMobile && 2,
            pb: isMobile && 1,
            px: 1
        }}>

        {/* Profile */}
        <MenuItem onClick={handleOnProfileClick}>
            <Stack direction="column" alignItems="center" sx={{ width: '100%', px: 2, py: 1 }}>
                <Avatar sx={{ width: '56px !important', height: '56px !important', mx: '0 !important', mb: 1 }} />
                <Typography variant="subtitle1">Full Name</Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', opacity: .8 }}>
                    Small description about <br/> user
                </Typography>
            </Stack>
        </MenuItem>

        {/* Divider */}
        <Divider />

        {/* Sidebar */}
        <MenuItem sx={{ py: 1.2 }} onClick={toggleSidebarOpened}>
            <ListItemIcon>
                <IconLayoutSidebar />
            </ListItemIcon>
            {`${open ? "Hide" : "Show"} sidebar`}
        </MenuItem>

        {/* Dark mode switch */}
        <MenuItem sx={{ py: 1.2 }} onClick={toggleMode}>
            <ListItemIcon>
                { 
                    mode === 'light' ?
                        <SunIcon width="24px" height="24px" /> :
                        <MoonIcon width="24px" height="24px" />
                }
            </ListItemIcon>
            <ListItemText id="switch-list-label-dark-mode" primary="Dark mode" />
            <Switch
                edge="end"
                checked={mode === 'dark'}
                inputProps={{'aria-labelledby': 'switch-list-label-dark-mode'}}
            />
        </MenuItem>

        {/* Divider */}
        <Divider />

        {/* Logout */}
        <MenuItem onClick={handleOnLogout}>
            <ListItemIcon>
                <Logout />
            </ListItemIcon>
            Logout
        </MenuItem>

    </Box>

  if(isMobile){
    return(
        <>
            {/* Account */}
            <IconButton onClick={handleClick} sx={{ p: '10px' }} aria-label="search">
                <AccountCircle />
            </IconButton>
            <Dialog
                open={dialogOpened}
                onClose={onClose}
                fullWidth
                maxWidth="xl"
                sx={{
                    py: 4
                }}
            >
                { Content }
            </Dialog>
        </>
    )
  }

  return (
    <>
        {/* Account */}
        {/* <IconButton onClick={handleClick} sx={{ p: '10px' }} aria-label="search">
            <AccountCircle />
        </IconButton> */}
        <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ width: 34, height: 34 }} />
            <Stack>
                <Typography variant="subtitle2" sx={{ mb: -.5 }}>{ auth.user.fullName }</Typography>
                <Typography variant="caption" sx={{ opacity: .65 }}>{ auth.user.email }</Typography>
            </Stack>
            <IconButton onClick={handleClick}>
                <ChevronLeftOutlined sx={{ transform: `rotate(${menuOpen ? '90deg' : '-90deg'})`, transition: '150ms ease' }} />
            </IconButton>
        </Stack>

        <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{ ...PaperProps, elevation: menuElevation }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            { Content }
        </Menu>
    </>
  )
}