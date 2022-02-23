import { useAuth } from '../../auth'

// assets
import { IconCut, IconUsers } from '@tabler/icons';

// constant
const icons = {
    IconCut,
    IconUsers
};

// ===========================|| UTILITIES MENU ITEMS ||=========================== //

export default function About(){

    const { hasPermission } = useAuth()
    const hasViewClientsPermission = hasPermission('view_client')
    
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
                id: 'users',
                title: hasViewClientsPermission ? 'Korisnici' : 'Radnici',
                type: hasViewClientsPermission ? 'collapse' : 'item',
                url: '/users',
                icon: icons.IconUsers,
                breadcrumbs: true,
                children: hasViewClientsPermission && [
                    {
                        id: 'users-workers',
                        title: 'Frizeri',
                        type: 'item',
                        url: '/users/workers',
                        target: true
                    },
                    {
                        id: 'users-clients',
                        title: 'Korisnici',
                        type: 'item',
                        url: '/users/clients',
                        target: true
                    },
                ]
            },
        ]
    };

    return about
}