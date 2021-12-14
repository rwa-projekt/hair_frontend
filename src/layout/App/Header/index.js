import React, { useState, useEffect } from "react";
import { motion, useViewportScroll } from 'framer-motion'
import useGetMenuItem from '../../../hooks/useGetMenuItem'
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_SIDEBAR_COLLAPSED, TOGGLE_SIDEBAR_OPENED, TOGGLE_MODE } from '../../../state/modules/ui/actions'

// MUI
import { Box, Typography, IconButton, useTheme, useMediaQuery, useScrollTrigger } from '@mui/material'
import { useLayoutCtx } from "@mui-treasury/layout";

// Icons
import Menu from "@mui/icons-material/Menu";
import ArrowLeft from "@mui/icons-material/ArrowLeft";

// Components
import ThemeToggler from '../../../components/ThemeMode/Toggler'
import AccountMenu from './AccountMenu'

// ===========================|| HEADER ||=========================== //

export default function Header({ drawerOpen, setDrawerOpen }){

  // Framer motion
  const variants = {
    visible: { y: 0 },
    hidden: { y: -60 },
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  useEffect(() => {
    if(trigger){
        setShowHeader(true)
    }
    else{
        setShowHeader(false)
    }
  }, [trigger])

  // Variables
  const [showHeader, setShowHeader] = useState(false);
  const currentPage = useGetMenuItem()
  const mode = useSelector(state => state.UI.mode)
  const dispatch = useDispatch()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { state: { leftEdgeSidebar: { collapsed, open } }, toggleLeftSidebarCollapsed, toggleLeftSidebarOpen } = useLayoutCtx()

  function toggleSidebarCollapsed() {
      dispatch({ type: TOGGLE_SIDEBAR_COLLAPSED, collapsed: !collapsed })
      toggleLeftSidebarCollapsed()
  }

  function toggleSidebarOpened() {
    dispatch({ type: TOGGLE_SIDEBAR_OPENED, opened: !open })
    toggleLeftSidebarOpen()
  }

  async function toggleMode(){
    const newMode = mode === 'light' ? 'dark' : 'light'
    dispatch({ type: TOGGLE_MODE, mode: newMode })
    await localStorage.setItem("bb:theme-mode", newMode )
  }

  return (
    <Box 
        display="flex" 
        justifyContent="stretch" 
        alignItems="center" 
        gap={1} 
        px={1} 
        sx={{ padding: "8px" }}
    >
        {
            isMobile ?
                // Toggle sidebar on mobile device
                <IconButton onClick={() => setDrawerOpen(previousState => !previousState)}>
                    {
                        drawerOpen ? 
                            <ArrowLeft /> : 
                            <Menu />
                    }
                </IconButton>

                :

                // Toggle sidebar on desktop
                open ?
                    <IconButton onClick={toggleSidebarCollapsed}>
                        {
                            !collapsed ? 
                            <ArrowLeft /> : 
                            <Menu />
                        }
                    </IconButton>
                    :
                    <IconButton onClick={toggleSidebarOpened}>
                        <Menu />
                    </IconButton>
        }

        {/* Page name */}
        <motion.div
            initial="hidden"
            animate={showHeader ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ ease: 'easeOut', duration: .25 }}
        >
            <Typography variant="subtitle1">{ currentPage.title }</Typography>
        </motion.div>

        {/* Spacing */}
        <Box flex={1} />

        {/* Account */}
        <AccountMenu mode={mode} setMode={toggleMode} />
        


        {/* Theme toggler */}
        {/* <ThemeToggler mode={mode} setMode={toggleMode} /> */}
    </Box>
  );
};