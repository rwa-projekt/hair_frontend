import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

// Menu Items
import menuItems from '../menu-items'

export default function useGetMenuItem() {

    // Variables
    const location = useLocation()
    const [menuItem, setMenuItem] = useState({})

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