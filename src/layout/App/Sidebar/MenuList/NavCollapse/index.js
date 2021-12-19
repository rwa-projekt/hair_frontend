import React from 'react';

// MUI
import { Collapse, Menu, List, ListItemIcon, ListItemText, ListItemButton, Typography, Tooltip } from '@mui/material'
import { useStyles } from './styles'
import { useLayoutCtx } from '@mui-treasury/layout'

// Components
import NavItem from '../NavItem';

// Icons
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

// ===========================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||=========================== //

export default function NavCollapse({ menu, level }){

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl);
    const { state: { leftEdgeSidebar: { collapsed } } } = useLayoutCtx()

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
                return <NavCollapse key={item.id} menu={item} level={level + 1} />;
            case 'item':
                return <NavItem key={item.id} item={item} level={level + 1} />;
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
    const menuIcon = menu.icon ? 
        <Icon stroke={1.5} size="1.3rem" className={classes.listCustomIcon}/>
        : 
        <FiberManualRecordIcon
            className={selected === menu.id ? classes.listCustomIconSubActive : classes.listCustomIconSub}
            fontSize={level > 0 ? 'inherit' : 'default'}
        />

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
                    sx={{ borderRadius: 2 }}
                    selected={selected === menu.id}
                    onClick={handleClick}
                    style={{ paddingLeft: `${level + 1 * 17}px` }}
                >
                    <ListItemIcon className={menuIconClass}>{menuIcon}</ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography variant='body1' color="inherit" className={classes.listItemTypography}>
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

            {
                !collapsed ?
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding  className={classes.collapseWrapper}>
                            {menus}
                        </List>
                    </Collapse>
                    :
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <List component="div" disablePadding  className={classes.collapseWrapper}>
                            {menus}
                        </List>
                    </Menu>
            }

        </>
    );
};