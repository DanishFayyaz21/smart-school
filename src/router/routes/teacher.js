import { lazy } from 'react'
const ManageUsers = lazy(() => import('../../views/teacher/manage-users'))
const ManagePermissions = lazy(() => import('../../views/teacher/manage-permissions'))
const Attendence = lazy(() => import('../../views/teacher/attendence'))
const Classes = lazy(() => import('../../views/teacher/classes'))


const rolesPermissionsRoutes = [
    {
        path: '/manage_users',
        element: <ManageUsers />
    },
    {
        path: '/teacher-attendence',
        element: <Attendence />
    },
    {
        path: '/classes',
        element: <Classes />
    }
]

export default rolesPermissionsRoutes
