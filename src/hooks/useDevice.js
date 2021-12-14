import { useTheme, useMediaQuery } from '@mui/material';

export function useDevice(breakpoint) {

  // Variables
  const theme = useTheme();
  const device = useMediaQuery(theme.breakpoints.down(breakpoint));

  return device;
}

export function useIsMobile() {

  // Variables
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return isMobile;
}

export function useIsTablet() {

  // Variables
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return isTablet;

}

export function useIsLaptop() {

  // Variables
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));

  return isLaptop;

}