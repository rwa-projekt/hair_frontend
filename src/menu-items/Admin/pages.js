// assets
import { IconCut, IconUsers, IconDashboard } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconCut,
    IconUsers
};

// ===========================|| PAGES MENU ITEMS ||=========================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    // caption: "Pages",
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: 'admin/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: true
        },
        {
            id: 'hairstyles',
            title: 'Usluge',
            type: 'item',
            url: 'admin/hairstyles',
            icon: icons.IconCut,
            breadcrumbs: true,
            children: [
                {
                    path: '',
                    name: 'Usluge',
                },
                {
                    path: 'add',
                    name: 'Dodavanje',
                },
                {
                    path: '*',
                    name: 'Uređivanje',
                }
            ]
        },
        {
            id: 'workers',
            title: 'Workers',
            type: 'item',
            url: 'admin/workers',
            icon: icons.IconUsers,
            breadcrumbs: true
        },
    ]
};

export default pages;