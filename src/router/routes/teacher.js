import { lazy } from 'react'
const TimeTable = lazy(() => import('../../views/teacher/timetable'))
const ManagePermissions = lazy(() => import('../../views/teacher/manage-permissions'))
const Attendence = lazy(() => import('../../views/teacher/attendence'))
const Classes = lazy(() => import('../../views/teacher/classes'))


const Teacher = [
    {
        path: '/teacher/time-table',
        element: <TimeTable />
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

export default Teacher
