import { useRoutes } from 'react-router-dom'

// Routes
import AppRoutes from './AppRoutes'
import AuthRoutes from './AuthRoutes'
import SiteRoutes from './SiteRoutes'

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
    return useRoutes([SiteRoutes, AppRoutes, AuthRoutes], '')
}