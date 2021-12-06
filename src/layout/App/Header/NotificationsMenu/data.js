import { set, sub } from 'date-fns';
import ic_avatar from '../../../../assets/icons/ic_avatar_sample.jpg'

const NOTIFICATIONS = [
    {
        id: 1,
        title: 'Your order is placed',
        description: 'waiting for shipping',
        avatar: null,
        type: 'order_placed',
        createdAt: set(new Date(), { hours: 10, minutes: 30 }),
        isUnRead: true
    },
    {
        id: 2,
        title: "Ime Prezime",
        description: 'answered to your comment on the Minimal',
        avatar: ic_avatar,
        type: 'friend_interactive',
        createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
        isUnRead: true
    },
    {
        id: 3,
        title: 'You have new message',
        description: '5 unread messages',
        avatar: null,
        type: 'chat_message',
        createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
        isUnRead: false
    },
    {
        id: 4,
        title: 'You have new mail',
        description: 'sent from Guido Padberg',
        avatar: null,
        type: 'mail',
        createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
        isUnRead: false
    },
    {
        id: 5,
        title: 'Delivery processing',
        description: 'Your order is being shipped',
        avatar: null,
        type: 'order_shipped',
        createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
        isUnRead: false
    }
];

export { NOTIFICATIONS }