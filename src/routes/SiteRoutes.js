import React from 'react';
import { Navigate } from "react-router-dom";
import loadable from '@loadable/component'

// Layout
import SiteLayout from '../layout/Site/index';

// App views
const LandingPage = loadable(() => import('../views/Site/LandingPage'));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <SiteLayout />,
    children: [
        {
            path: '/',
            element: <Navigate replace to="/website" />
        },
        {
            path: '/website',
            element: <LandingPage/>
        },
    ]
};

export default MainRoutes;