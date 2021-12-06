import React from 'react';
import { Navigate } from "react-router-dom";
import loadable from '@loadable/component'

// Layout
import SiteLayout from '../layout/Site/index';

// App views
const NotFound = loadable(() => import('./fallback-routes/404'));
const LandingPage = loadable(() => import('../views/Site/LandingPage'));
const AboutUs = loadable(() => import('../views/Site/AboutUs'));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <SiteLayout />,
    children: [
        {
            path: '/',
            element: <Navigate replace to="/website/home" />
        },
        {
            path: '/website',
            children:[
                {
                    path: '*',
                    element: <NotFound />
                },
                {
                    path: '',
                    element: <Navigate replace to="home" />
                },
                // {
                //     path: 'home',
                //     element: <LandingPage/>
                // },
                {
                    path: 'about-us',
                    element: <AboutUs/>
                }
            ]
        },
    ]
};

export default MainRoutes;