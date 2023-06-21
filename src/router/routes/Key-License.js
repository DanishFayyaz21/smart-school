import { lazy } from 'react'
const License = lazy(() => import('../../views/Key-License/manage-license'))

const keyLicenseRoutes = [
    {
        path: '/key-license',
        element: <License />
    },
]

export default keyLicenseRoutes
