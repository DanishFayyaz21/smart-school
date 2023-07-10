import { lazy } from 'react'



const ScreeningPriority = lazy(() => import('../../views/student/screening-priority'))
const Attendence = lazy(() => import('../../views/student/attendence'))
const Simulation = lazy(() => import('../../views/student/simulation'))

const configurationRoutes = [
    {
        path: '/screening_priority',
        element: <ScreeningPriority />
    },
    {
        path: '/attendence',
        element: <Attendence />
    },
    {
        path: '/simulation',
        element: <Simulation />
    },


]

export default configurationRoutes
