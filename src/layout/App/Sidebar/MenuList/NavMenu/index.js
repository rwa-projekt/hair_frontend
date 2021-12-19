import React from 'react';
import { useSelector } from 'react-redux'

// MUI
import { Menu, MenuItem, ListItemIcon, ListItemText, ListItemButton, Typography, Tooltip } from '@mui/material'
import { useLayoutCtx } from '@mui-treasury/layout'
import { useStyles, PaperProps } from './styles'

// Components
import NavItem from '../NavItem';

// Icons
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

// ===========================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||=========================== //

export default function NavMenu({ menu, level }){

    // Variables
    const collapsed = useSelector(state => state.UI.collapsed)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl);

    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClick = (event) => {
        setOpen(!open);
        setSelected(!selected ? menu.id : null);
        handleMenuClick(event)
    };


    // menu collapse & item
    const menus = menu.children.map((item) => {
        switch (item.type) {
            case 'collapse':
                return <NavMenu key={item.id} menu={item} level={level + 1}/>;
            case 'item':
                return (
                    <MenuItem>
                        <NavItem 
                            key={item.id} 
                            item={item} 
                            level={level + 1} 
                            handleClose={handleClose} 
                            menuItem 
                        />
                    </MenuItem>
                );
            default:
                return (
                    <Typography 
                        key={item.id} 
                        className={classes.menuItemsError} 
                        sx={{ paddingLeft: `${level * 34}px !important` }} 
                        variant="body2" 
                        color="error" 
                        align="left"
                    >
                        Menu Items Error
                    </Typography>
                );
        }
    });

    const Icon = menu.icon;
    const menuIcon = menu.icon ? (
        <Icon stroke={1.5} size="1.3rem" className={classes.listCustomIcon}/>
    ) : (
        <FiberManualRecordIcon
            className={classes.listCustomIconSub}
            fontSize={level > 0 ? 'inherit' : 'default'}
        />
    );

    const menuIconClass = !menu.icon ? classes.listIcon : classes.menuIcon;

    return (
        <>
            <Tooltip 
                title={menu.title}
                placement="right"
                enterDelay={!collapsed && 1000}
                enterNextDelay={!collapsed && 1000}
                arrow
            >
                
                <ListItemButton
                    className={level > 1 ? classes.listItemNoBack : classes.listItem}
                    sx={{ 
                        borderRadius: 2
                    }}
                    // selected={selected === menu.id}
                    onClick={handleClick}
                    style={{ paddingLeft: `${level * 17}px` }}
                >
                    <ListItemIcon className={menuIconClass}>{menuIcon}</ListItemIcon>
                    
                    <ListItemText
                        primary={
                            <Typography sx={{ fontWeight: selected === menu.id ? 500 : 400 }} variant='body1' color="inherit" className={classes.listItemTypography}>
                                {menu.title}
                            </Typography>
                        }
                        secondary={
                            menu.caption && (
                                <Typography variant="caption" className={classes.subMenuCaption} display="block" >
                                    {menu.caption}
                                </Typography>
                            )
                        }
                    />
                    {open ? (
                        <IconChevronUp stroke={1.5} size="1rem" className={level > 1 ? classes.collapseIconSub : classes.collapseIcon}/>
                    ) : (
                        <IconChevronDown stroke={1.5} size="1rem" className={level > 1 ? classes.collapseIconSub : classes.collapseIcon}/>
                    )}
                </ListItemButton>
            </Tooltip>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleClose}
                arrow
                MenuListProps={{'aria-labelledby': 'basic-button' }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                PaperProps={PaperProps}
            >
                {menus}
            </Menu>
        </>
    );
};