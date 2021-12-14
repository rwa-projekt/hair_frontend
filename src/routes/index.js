import { useRoutes } from 'react-router-dom'

// Routes
import AppRoutes from './App'
import AuthRoutes from './Auth'
import SiteRoutes from './Site'
import AdminRoutes from './Admin'

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
    return useRoutes([SiteRoutes, AuthRoutes, AppRoutes, AdminRoutes], '')
}