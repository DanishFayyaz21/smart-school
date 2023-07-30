// ** React Imports
import { lazy } from 'react'
import StudentView from '../../views/admin/student/view';
import TeacherView from '../../views/admin/teacher/view';

const StudentList = lazy(() => import('../../views/admin/student/list'))
const TeachersList = lazy(() => import('../../views/admin/teacher/list'))
const AssignClasses = lazy(() => import('../../views/admin/assignClasses'))
const TimeTable = lazy(() => import('../../views/admin/timetable'))
const HomeRoutes = [
  {
    path: '/student',
    element: <StudentList />
  },
  {
    element: <StudentView />,
    path: '/student/view/:id'
  },
  {
    path: '/teachers',
    element: <TeachersList />
  },
  {
    element: <TeacherView />,
    path: '/teacher/view/:id'
  },
  {
    element: <AssignClasses />,
    path: '/assign-classes'
  },

  {
    element: <TimeTable/>,
    path: '/admin/time-table'
  },

]

export default HomeRoutes
