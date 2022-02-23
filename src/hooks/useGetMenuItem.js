import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

// Menu Items
import MenuItems from '../menu-items/App'
import AdminMenuItems from '../menu-items/Admin'

export default function useGetMenuItem() {

    // Variables
    const location = useLocation()
    const [menuItem, setMenuItem] = useState({})

    const menuItems = MenuItems()

    // Methods
    useEffect(() => {
        menuItems.items.forEach(page => {
            let _item = page.children.find(item => location.pathname.startsWith(item.url))
            if(_item){
                setMenuItem(_item)
            }
        })
    }, [location])
    
    return menuItem;
};


function useGetAdminMenuItem() {

    // Variables
    const location = useLocation()
    const [menuItem, setMenuItem] = useState({})
    const adminMenuItems = AdminMenuItems()

    // Methods
    useEffect(() => {
        adminMenuItems.items[0].children.forEach(page => {
            let _item = location.pathname.includes(page.url)
            if(_item){
                setMenuItem(page)
            }
        })
    }, [location])
    
    return menuItem;
};

export { useGetAdminMenuItem }