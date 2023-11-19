import { lazy } from 'react'
const TimeTable = lazy(() => import('../../views/teacher/timetable'))
const Attendence = lazy(() => import('../../views/teacher/attendence'))
const Classes = lazy(() => import('../../views/teacher/classes'))
const Subject = lazy(() => import('../../views/teacher/classes/subject'))



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
    },
    {
        path: '/classes/subject/:id',
        element: <Subject />,
        meta: {
            appLayout: true,
            className: 'kanban-application'
          }
    }
]

export default Teacher
