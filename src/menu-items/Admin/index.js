import Pages from './pages'

// ===========================|| MENU ITEMS ||=========================== //
export default function MenuItems(){

    const pages = Pages()

    const menuItems = {
        items: [pages]
    }

    return menuItems
}