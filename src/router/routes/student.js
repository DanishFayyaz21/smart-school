import { lazy } from 'react'



const Attendence = lazy(() => import('../../views/student/attendence'))
const Simulation = lazy(() => import('../../views/student/simulation'))
const Calendar = lazy(() => import('../../views/student/calendar'))

const configurationRoutes = [
    {
        path: '/time-table',
        element: <Calendar />
    },
    {
        path: '/attendence',
        element: <Attendence />
    },
    {
        path: '/grades',
        element: <Simulation />
    },


]

export default configurationRoutes
