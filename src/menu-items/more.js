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
    title: 'More',
    type: 'group',
    children: [
        {
            id: 'history',
            title: 'History',
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
            title: 'User',
            type: 'collapse',
            url: '/user', // For breadcrumbs
            icon: icons.IconUser,
            breadcrumbs: true,
            children: [
                {
                    id: 'user-profile',
                    title: 'Visit profile',
                    type: 'item',
                    url: '/user/me/general',
                    target: true
                },
                {
                    id: 'change-password',
                    title: 'Change password',
                    type: 'item',
                    url: '/user/me/change-password',
                    target: true
                },
                // {
                //     id: 'shifts',
                //     title: 'Shifts',
                //     type: 'item',
                //     url: '/user/me/shifts',
                //     target: true
                // },
            ]
        }
    ]
};

export default more;