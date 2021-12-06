// assets
import { IconCut, IconUsers } from '@tabler/icons';

// constant
const icons = {
    IconCut,
    IconUsers
};

// ===========================|| UTILITIES MENU ITEMS ||=========================== //

const about = {
    id: 'about',
    title: 'About',
    caption: "Informations about barbershop",
    type: 'group',
    children: [
        {
            id: 'hairstyles',
            title: 'Hairstyles',
            type: 'item',
            url: '/hairstyles',
            icon: icons.IconCut,
            breadcrumbs: true
        },
        {
            id: 'workers',
            title: 'Workers',
            type: 'item',
            url: '/workers',
            icon: icons.IconUsers,
            breadcrumbs: true
        },
    ]
};

export default about;