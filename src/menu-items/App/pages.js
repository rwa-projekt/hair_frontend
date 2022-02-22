// assets
import { IconKey, IconHandStop, IconCalendarTime, IconSmartHome } from '@tabler/icons';

// constant
const icons = { IconKey, IconHandStop, IconCalendarTime, IconSmartHome };

// ===========================|| EXTRA PAGES MENU ITEMS ||=========================== //

const pages = {
    id: 'pages',
    title: 'Stranice',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Početna',
            type: 'item',
            url: '/dashboard',
            icon: icons.IconSmartHome,
            breadcrumbs: false
        },
        {
            id: 'appointments',
            title: 'Rezervacije',
            type: 'item',
            url: '/appointments',
            icon: icons.IconCalendarTime,
            breadcrumbs: true
        },
        {
            id: 'website',
            title: 'Web stranica',
            type: 'item',
            url: '/website',
            icon: icons.IconHandStop,
            breadcrumbs: true
        }
    ]
};

export default pages;