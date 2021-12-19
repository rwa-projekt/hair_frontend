import React, { forwardRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

//  MUI
import { Avatar, Chip, ListItemIcon, ListItemText, ListItemButton, Typography, Badge, Tooltip, useTheme } from '@mui/material'
import { useStyles } from './styles'
import { useLayoutCtx } from '@mui-treasury/layout'

// Icons
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


// ===========================|| SIDEBAR MENU LIST ITEMS ||=========================== //

export default function NavItem ({ item, level, menuItem = false, handleClose }){

    // Variables
    const mode = useSelector(state => state.UI.mode)
    const theme = useTheme()
    const navigate = useNavigate()
    const { pathname } = useLocation();
    const classes = useStyles();
    const { state: { leftEdgeSidebar: { collapsed } } } = useLayoutCtx()

    // const listItemProps = {
    //     component: forwardRef((props, ref) => <Link ref={ref} {...props} to={`./${item.url}`}/>)
    // };

    const selected = pathname === item.url

    const Icon = item.icon;
    const itemIcon = item.icon ? (
        <Badge
            badgeContent={item.chip?.label} 
            color={item.chip?.color}
            variant={collapsed ? 'dot' : item.chip?.variant}
            invisible={!collapsed}
        >
            <Icon 
                color={selected ? theme.palette.primary.main : mode === 'light' ? 'rgba(0, 0, 0, 0.54)' : 'rgb(255,255,255)'} 
                stroke={1.5} 
                size="1.3rem" 
                className={classes.listCustomIcon} 
            />
        </Badge>
    ) : (
        <FiberManualRecordIcon
            className={
                !true > -1 ? classes.listCustomIconSubActive : classes.listCustomIconSub
            }
            fontSize={level > 0 ? 'inherit' : 'default'}
        />
    );

    let itemIconClass = !item.icon ? classes.listIcon : classes.menuIcon;
    itemIconClass = !true ? [itemIconClass, classes.listCustomIcon].join(' ') : itemIconClass;

    function handleOnClick() {
        navigate(item.url)
        if(handleClose) handleClose()
    }

    return (
        <Tooltip 
            title={item.title}
            placement="right"
            enterDelay={menuItem ? 1000 : !collapsed && 1000}
            enterNextDelay={menuItem ? 1000 : !collapsed && 1000}
            arrow
        >
            <ListItemButton
                disabled={item.disabled}
                style={{ 
                    paddingLeft: `${level * 17}px`,
                    padding: menuItem && '8px 0',
                    marginBottom: menuItem && 0
                }}
                className={level > 1 ? classes.listItemNoBack : classes.listItem}
                sx={{ 
                    borderRadius: 2,
                    py: 1,
                    pl: `${level * 17}px`
                }}
                onClick={handleOnClick}
                disableRipple={menuItem}
                selected={selected}
            >
                { !menuItem && <ListItemIcon className={itemIconClass}>{itemIcon}</ListItemIcon> }
                <ListItemText
                    primary={
                        <Typography sx={{ fontWeight: selected ? 500 : 400, color: selected && 'primary.main' }} variant={menuItem ? 'body2' : 'body1'} color="inherit">
                            {item.title}
                        </Typography>
                    }
                    secondary={
                        item.caption && (
                            <Typography className={classes.subMenuCaption} variant="caption" display="block" >
                                {item.caption}
                            </Typography>
                        )
                    }
                />
                {item.chip && (
                    <Chip
                        color={item.chip.color}
                        variant={item.chip.variant}
                        size={item.chip.size}
                        label={item.chip.label}
                        avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                    />
                )}
            </ListItemButton>
        </Tooltip>
    );
};