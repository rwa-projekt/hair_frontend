import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useIsLaptop } from '../../hooks/useDevice'

// MUI
import { IconButton } from '@mui/material'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons'

function _ScrollView({ children }) {
  return (
    <ScrollMenu 
        LeftArrow={LeftArrow} 
        RightArrow={RightArrow}
        wrapperClassName='scrollmenu-wrapper'
        itemClassName='scrollmenu-item'
        scrollContainerClassName='scrollmenu-container'
    >
      { children }
    </ScrollMenu>
  );
}

function LeftArrow() {
  const smallScreen = useIsLaptop()
  if(smallScreen){
      return null;
  }
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
  return (
    <Arrow 
        disabled={isFirstItemVisible} 
        onClick={() => scrollPrev()}
        right={32}
    >
      <IconArrowLeft />
    </Arrow>
  );
}

function RightArrow() {
  const smallScreen = useIsLaptop()
  if(smallScreen){
      return null;
  }
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  return (
    <Arrow 
        disabled={isLastItemVisible} 
        onClick={() => scrollNext()}
        right={0}
    >
      <IconArrowRight />
    </Arrow>
  );
}

function Arrow({ children, disabled, onClick, right }){
    return (
      <IconButton
        disabled={disabled}
        onClick={onClick}
        size="small"
        sx={{ 
            cursor: 'pointer',
            height: 'max-content',
            position: 'absolute',
            top: -16,
            opacity: disabled && .25,
            right
        }}
      >
        {children}
      </IconButton>
    );
  }

export default _ScrollView;