import React from 'react';

// MUI
import { List, Typography, ListSubheader, Tooltip } from '@mui/material';
import { useStyles } from './styles'
import { useLayoutCtx } from '@mui-treasury/layout'

// Components
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';
import NavMenu from '../NavMenu'


// ===========================|| SIDEBAR MENU LIST GROUP ||=========================== //

export default function NavGroup ({ item }) {

    const classes = useStyles();
    const { state: { leftEdgeSidebar: { collapsed } } } = useLayoutCtx()

    // menu list collapse & items
    const items = item.children.map((menu) => {
        switch (menu.type) {
            case 'collapse':
                if(collapsed){
                    return <NavMenu key={menu.id} menu={menu} level={1} />
                }
                return <NavCollapse key={menu.id} menu={menu} level={1} />;
            case 'item':
                return <NavItem key={menu.id} item={menu} level={1} />;
            default:
                return (
                    <Typography key={menu.id} className={classes.menuItemsError} variant="body2" color="error" align="left">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    const title = 
        <ListSubheader 
            disableSticky
            variant="caption" 
            className={classes.menuCaption} 
            display="block" 
            
            sx={{ 
                width: collapsed ? "72px" : "max-content",
                minWidth: collapsed ? "72px" : "max-content", 
                marginLeft: collapsed && -1, 
                textAlign: collapsed && "center",
                transition: "250ms ease"
            }}
        >
            {item.title}
            {item.caption && (
                <Typography 
                    variant="caption" 
                    className={classes.subMenuCaption} 
                    display="block" 
                    
                    sx={{ 
                        width: collapsed ? "60px" : "max-content", 
                        marginLeft: collapsed && -1, 
                        textAlign: collapsed && "center",
                        transition: "250ms ease" 
                    }}
                >
                    {item.caption}
                </Typography>
            )}
        </ListSubheader>

    return (
        <>
            <List
                subheader={
                    item.title &&
                        <Tooltip 
                            title={item.title}
                            placement="right"
                            enterDelay={!collapsed && 1000}
                            enterNextDelay={!collapsed && 1000}
                            arrow
                        >
                            { title }
                        </Tooltip>
                }
            >
                {items}
            </List>

            {/* group divider */}
            {/* <Divider className={classes.menuDivider} /> */}
        </>
    );
};