import { lazy } from 'react'
const SystemConnection = lazy(() => import('../../views/SystemConnectivity/SystemConnection'))
const DatabaseConnection = lazy(() => import('../../views/SystemConnectivity/DatabaseConnection'))

const SystemConnectivityRoutes = [
    {
        path: '/system-connection',
        element: <SystemConnection />
    },
    {
        path: '/database-connection',
        element: <DatabaseConnection />
    }

]

export default SystemConnectivityRoutes
