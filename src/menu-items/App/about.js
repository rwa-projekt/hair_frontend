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
    title: 'Informacije',
    caption: "Naše usluge i korisnici",
    type: 'group',
    children: [
        {
            id: 'hairstyles',
            title: 'Usluge',
            type: 'item',
            url: '/hairstyles',
            icon: icons.IconCut,
            breadcrumbs: true
        },
        {
            id: 'workers',
            title: 'Radnici',
            type: 'item',
            url: '/workers',
            icon: icons.IconUsers,
            breadcrumbs: true
        },
    ]
};

export default about;