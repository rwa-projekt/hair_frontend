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
        },
        // {
        //     id: 'user',
        //     title: 'Korisnik',
        //     type: 'item',
        //     url: '/user/me', // For breadcrumbs
        //     icon: icons.IconUser,
        //     breadcrumbs: true,
        // }
    ]
};

export default more;