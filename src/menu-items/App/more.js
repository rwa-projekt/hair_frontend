import React from 'react'

// assets
import { IconHistory, IconAdjustmentsHorizontal, IconUser } from '@tabler/icons';

// constant
const icons = {
    IconHistory,
    IconAdjustmentsHorizontal,
    IconUser
};

// ===========================|| MORE MENU ITEMS ||=========================== //

const more = {
    id: 'more',
    title: 'Dodatno',
    type: 'group',
    children: [
        {
            id: 'history',
            title: 'Povijest',
            type: 'item',
            url: '/history',
            icon: icons.IconHistory,
            breadcrumbs: true,
            // chip:{
            //     label: "14",
            //     color: "secondary",
            //     size: "small",
            //     variant: "outlined"
            // }
        },
        {
            id: 'user',
            title: 'Korisnik',
            type: 'collapse',
            url: '/user', // For breadcrumbs
            icon: icons.IconUser,
            breadcrumbs: true,
            children: [
                {
                    id: 'user-profile',
                    title: 'Osnovno',
                    type: 'item',
                    url: '/user/me/general',
                    target: true
                },
                {
                    id: 'shifts',
                    title: 'Smjene',
                    type: 'item',
                    url: '/user/me/shifts',
                    target: true
                },
            ]
        }
    ]
};

export default more;