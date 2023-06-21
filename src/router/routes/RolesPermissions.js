import { lazy } from 'react'
const ManageUsers = lazy(() => import('../../views/rolesPermissions/manage-users'))
const ManagePermissions = lazy(() => import('../../views/rolesPermissions/manage-permissions'))

const rolesPermissionsRoutes = [
    {
        path: '/manage_users',
        element: <ManageUsers />
    },
    {
        path: '/manage_permissions',
        element: <ManagePermissions />
    }
]

export default rolesPermissionsRoutes
