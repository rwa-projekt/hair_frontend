import About from './about';
import pages from './pages'
import more from './more'

// ===========================|| MENU ITEMS ||=========================== //

export default function MenuItems(){

    const about = About()

    const menuItems = {
        items: [pages, about, more]
    }

    return menuItems
}