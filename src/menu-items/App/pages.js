// assets
import { IconKey, IconHandStop, IconDashboard, IconCalendarTime } from '@tabler/icons';

// constant
const icons = { IconKey, IconHandStop, IconDashboard, IconCalendarTime };

// ===========================|| EXTRA PAGES MENU ITEMS ||=========================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'appointments',
            title: 'Appointments',
            type: 'item',
            url: '/appointments',
            icon: icons.IconCalendarTime,
            breadcrumbs: true
        },
        {
            id: 'website',
            title: 'Website',
            type: 'item',
            url: '/website',
            icon: icons.IconHandStop,
            breadcrumbs: true
        }
    ]
};

export default pages;