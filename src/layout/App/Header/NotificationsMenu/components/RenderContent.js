import React from 'react';

// MUI
import { Typography } from '@mui/material';

// Icons
import ic_package from '../../../../../assets/icons/ic_notification_package.svg'
import ic_shipping from '../../../../../assets/icons/ic_notification_shipping.svg'
import ic_mail from '../../../../../assets/icons/ic_notification_mail.svg'
import ic_chat from '../../../../../assets/icons/ic_notification_chat.svg'



export default function RenderContent(notification) {
    const title = (
      <Typography variant="subtitle2">
        {notification.title}
        <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
          &nbsp; {notification.description}
        </Typography>
      </Typography>
    );
  
    if (notification.type === 'order_placed') {
      return {
        avatar: <img alt={notification.title} src={ic_package} />,
        title
      };
    }
    if (notification.type === 'order_shipped') {
      return {
        avatar: <img alt={notification.title} src={ic_shipping} />,
        title
      };
    }
    if (notification.type === 'mail') {
      return {
        avatar: <img alt={notification.title} src={ic_mail} />,
        title
      };
    }
    if (notification.type === 'chat_message') {
      return {
        avatar: <img alt={notification.title} src={ic_chat} />,
        title
      };
    }
    return {
      avatar: <img alt={notification.title} src={notification.avatar} />,
      title
    };
}