import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../auth'
import { TOGGLE_SIDEBAR_OPENED } from '../../../../state/modules/ui/actions'
import Switch from '../../../../components/CustomSwitch'

// MUI
import { useLayoutCtx } from '@mui-treasury/layout'
import { Avatar, Menu, Stack, MenuItem, ListItemIcon, ListItemText, Badge, Typography, Divider, Box, IconButton, Dialog, useTheme, useMediaQuery } from '@mui/material'

// Icons
import {  Logout, ChevronLeftOutlined, AdminPanelSettingsOutlined } from '@mui/icons-material'
import {  IconLayoutSidebar } from '@tabler/icons'
import MoonIcon from '../../../../components/ThemeMode/MoonIcon'
import SunIcon from '../../../../components/ThemeMode/SunIcon'

// Styles
import { PaperProps } from './styles'
import AdminAvatar from './avatar'

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
  const menuElevation = theme.palette.mode === 'dark' ? 2 : 0
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
    auth.logout()
  }

  function handleGoToAdminsView() {
    navigate('/admin/')
  }

  function handleOnProfileClick(){
    // onClose()
    // navigate('/user/me')
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
                <Badge 
                    color="success" 
                    badgeContent="A"
                    invisible={!auth.isAdmin}
                >
                    <Avatar sx={{ width: '56px !important', height: '56px !important', mx: '0 !important', mb: 1 }} />
                </Badge>
                <Typography variant="subtitle1">{ auth.user.data?.account?.name || 'Korisnik' }</Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', opacity: .8 }}>
                    { auth.user.data?.account?.email }
                </Typography>
            </Stack>
        </MenuItem>

        {/* Divider */}
        <Divider />

        {/* Sidebar */}
        {
            !isMobile && 
                <MenuItem sx={{ py: 1.2 }} onClick={toggleSidebarOpened}>
                    <ListItemIcon>
                        <IconLayoutSidebar />
                    </ListItemIcon>
                    {`${open ? "Hide" : "Show"} sidebar`}
                </MenuItem>
        }

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

        {
            auth.isAdmin && 
                <MenuItem onClick={handleGoToAdminsView}>
                    <ListItemIcon>
                        <AdminPanelSettingsOutlined />
                    </ListItemIcon>
                    Go to admin panel
                </MenuItem>
        }

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
            <Stack direction="row" spacing={2} alignItems="center" onClick={handleClick}>
                <Stack>
                    <Typography variant="subtitle1" sx={{ opacity: .85, fontWeight: 500 }}>
                        {/* <span style={{ opacity: .75, fontWeight: 400 }}>Pozdrav, </span> */}
                        { auth.user.data?.account?.name || 'Korisnik' }
                    </Typography>
                </Stack>
                {
                    auth.isAdmin ?
                        <AdminAvatar>
                            <Avatar variant="rounded" sx={{ width: 22, height: 22, borderRadius: 2 }} />
                        </AdminAvatar>
                        :
                        <Avatar variant="rounded" sx={{ width: 22, height: 22, borderRadius: 2 }} />
                }
            </Stack>
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
        <Box onClick={handleClick} sx={{ cursor: 'pointer' }}>
            <Stack direction="row" spacing={1} alignItems="center">
                {
                    auth.isAdmin ?
                        <AdminAvatar>
                            <Avatar variant="rounded" sx={{ width: 28, height: 28, borderRadius: 3 }} />
                        </AdminAvatar>
                        :
                        <Avatar variant="rounded" sx={{ width: 28, height: 28, borderRadius: 3 }} />
                }
                <Stack>
                    <Typography variant="subtitle2" sx={{ opacity: .85, fontWeight: 500 }}>
                        <span style={{ opacity: .75, fontWeight: 400 }}>Pozdrav, </span>
                        { auth.user.data?.account?.name || 'Korisnik' }
                    </Typography>
                </Stack>
                <IconButton>
                    <ChevronLeftOutlined sx={{ transform: `rotate(${menuOpen ? '90deg' : '-90deg'})`, transition: '150ms ease' }} />
                </IconButton>
            </Stack>
        </Box>

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