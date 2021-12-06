import React, { useRef, useState } from 'react';

// Icons
import { IconChecks } from '@tabler/icons'
import { Notifications as NotificationsIcon } from '@mui/icons-material'


// material
import { alpha } from '@mui/material/styles';
import {
  Box,
  List,
  Badge,
  Dialog,
  Button,
  Popover,
  Tooltip,
  Divider,
  IconButton,
  Typography,
  ListSubheader,
  useTheme, useMediaQuery
} from '@mui/material';

// Styles
import { PaperProps } from '../AccountMenu/styles'

// Components
import { Scrollbar } from "react-scrollbars-custom";
import { NOTIFICATIONS } from './data'
import NotificationItem from './components/NotificationItem'


export default function NotificationsPopover() {

  // Variables
  const [dialogOpened, setDialogOpened] = useState(false)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;
  const menuElevation = (isMobile && theme.palette.mode === 'dark') && 2

  // Methods
  const handleOpen = () => {
    setOpen(true);
    if(isMobile){
      setDialogOpened(true)
  }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false
      }))
    );
  };

  function onClose() {
    setDialogOpened(false)
    handleClose()
  }

  const Content = 
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1">Notifications</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            You have {totalUnRead} unread messages
          </Typography>
        </Box>

        {totalUnRead > 0 && (
          <Tooltip title=" Mark all as read">
            <IconButton color="success" onClick={handleMarkAllAsRead}>
              <IconChecks />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <Divider />

      {/* New Notifications */}
      <Scrollbar style={{ height: 'auto', minHeight: isMobile ? 320 : 400, width: isMobile ? 'auto' : 400 }}>
          <List
          disablePadding
          subheader={
            <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
              New
            </ListSubheader>
          }
        >
          {notifications.slice(0, 2).map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </List>

        {/* Old Notifications */}
        <List
          disablePadding
          subheader={
            <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
              Before that
            </ListSubheader>
          }
        >
          {notifications.slice(2, 5).map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </List>
      </Scrollbar>

      <Divider />

      {/* Footer */}
      <Box sx={{ p: 1 }}>
        <Button fullWidth to="#">
          View All
        </Button>
      </Box>
    </Box>

  if(isMobile){
    return(
        <>
            {/* Button */}
            <IconButton
              ref={anchorRef}
              size="large"
              color={open ? 'primary' : 'default'}
              onClick={handleOpen}
              sx={{
                ...(open && {
                  bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
                })
              }}
            >
              <Badge badgeContent={totalUnRead} color="error">
                <NotificationsIcon width={20} height={20} />
              </Badge>
            </IconButton>
            <Dialog
                open={dialogOpened}
                onClose={onClose}
                fullWidth
                maxWidth="xl"
                sx={{
                  py: 4,
                }}
            >
              {/* Rendering content */}
              { Content }
            </Dialog>
        </>
    )
  }

  return (
    <>

      {/* Button */}
      <IconButton
        ref={anchorRef}
        size="large"
        color={open ? 'primary' : 'default'}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <NotificationsIcon width={20} height={20} />
        </Badge>
      </IconButton>

      <Popover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 'auto' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{ ...PaperProps, elevation: menuElevation }}
      >

        {/* Rendering content */}
        { Content }
      </Popover>
    </>
  );
}