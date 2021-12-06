import React from 'react';
import { formatDistanceToNow } from 'date-fns';

// Icons
import { WatchLater as IconClock } from '@mui/icons-material'

// MUI
import { Avatar, Typography, ListItemText, ListItemAvatar, ListItemButton } from '@mui/material';

// Components
import RenderContent from './RenderContent'


export default function NotificationItem({ notification }) {

    // Variables
    const { avatar, title } = RenderContent(notification);
  
    return (
      <ListItemButton
        to="#"
        disableGutters
        sx={{
          py: 1.5,
          px: 2.5,
          mt: '1px',
          ...(notification.isUnRead && {
            bgcolor: 'action.selected'
          })
        }}
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <Typography
              variant="caption"
              sx={{
                mt: 0.5,
                display: 'flex',
                alignItems: 'center',
                color: 'text.disabled'
              }}
            >
             <IconClock sx={{ mr: 0.5, width: 16, height: 16 }}/>
              {formatDistanceToNow(new Date(notification.createdAt))}
            </Typography>
          }
        />
      </ListItemButton>
    );
  }