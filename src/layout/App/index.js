import React, { useState } from "react";
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

// MUI
import { CssBaseline, Container, Drawer, useTheme, useMediaQuery } from '@mui/material'
import { Root, Header, EdgeSidebar, SidebarContent, Content } from "@mui-treasury/layout";

import { Scrollbar } from "react-scrollbars-custom";

// Components
import Sidebar from './Sidebar'
import HeaderContent from './Header'

// Root style
import { scheme } from './root-style'

export default function AppLayout(){

  // Variables
  const { opened, collapsed } = useSelector(state => state.UI.sidebar)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Methods
  function onOpen() {
    setDrawerOpen(true)
  }

  function onClose() {
    setDrawerOpen(false)
  }

  return (
    <Root
      id="rootLayout"
      scheme={scheme}
      initialState={{
        leftEdgeSidebar:{
          open: isMobile ? false : opened,
          collapsed
        }
      }}
    >
      
      <CssBaseline />
      <Header 
        style={{ 
          backgroundColor: 
            theme.palette.mode === "light" ? 
              "rgba(255,255,255, .75)" : 
              "rgba(18,18,18, .9)", 
          backdropFilter: 'blur(5px)', 
          height: 64 
        }}>
        <HeaderContent 
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
        />
      </Header>

      {/* Sidebar */}
      {
        isMobile ? 
          <Drawer 
            open={drawerOpen}
            onOpen={onOpen}
            onClose={onClose}
            variant="temporary"
          >
            <Scrollbar style={{ height: '100vh', width: 'calc(80vw + 10px)' }}>
              <Sidebar onClose={onClose}/>
            </Scrollbar>
          </Drawer>
          :
          <EdgeSidebar anchor="left">
            <Scrollbar style={{ height: '100vh' }}>
              <SidebarContent sx={{ overflowX: "hidden", overflowY: 'hidden' }}>
                <Sidebar/>
              </SidebarContent>
            </Scrollbar>
          </EdgeSidebar>
      }
    

      {/* Content */}
      <Content>
        <Container maxWidth="lg" sx={{ pt: isMobile ? 2 : 6 }}>
          <Outlet />
        </Container>
        <div style={{ minHeight: 40 }} />
      </Content>
    </Root>
  );
};