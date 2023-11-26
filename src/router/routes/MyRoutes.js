
import { lazy } from 'react';

// import ShopHome from "../../views/pages/dynamicPages/Shop/ShopHome";
const DashboardEcommerce = lazy(() => import('../../views/dashboard/ecommerce'))
import StudentView from '../../views/admin/student/view';
import TeacherView from '../../views/admin/teacher/view';
import AutomatictimeTable from '../../views/admin/timetable/automaticTimetable';
import StudentSubjectView from '../../views/student/classes/subject';
import TaskDetails from '../../views/student/classes/subject/taskdetails';
import SubmittedTasks from '../../views/teacher/classes/subject/SubmittedTasks';


const DashboardAnalytics = lazy(() => import('../../views/dashboard/analytics'))
const Profile = lazy(() => import('../../views/profile'))
const AccountSettings = lazy(() => import('../../views/account-settings'))
const Chat = lazy(() => import('../../views/chat'))
const ClassesCards = lazy(() => import('../../views/admin/assignClasses/ClassesCards'))



const StudentList = lazy(() => import('../../views/admin/student/list'))
const TeachersList = lazy(() => import('../../views/admin/teacher/list'))
const AssignClasses = lazy(() => import('../../views/admin/assignClasses'))
const AdminTimeTable = lazy(() => import('../../views/admin/timetable'))

const StudentAttendence = lazy(() => import('../../views/student/attendence'))
const Simulation = lazy(() => import('../../views/student/simulation'))
const StudentsSubjects = lazy(() => import('../../views/student/classes'))
const Calendar = lazy(() => import('../../views/student/calendar'))

const TimeTable = lazy(() => import('../../views/teacher/timetable'))
const Attendence = lazy(() => import('../../views/teacher/attendence'))
const Classes = lazy(() => import('../../views/teacher/classes'))
const Subject = lazy(() => import('../../views/teacher/classes/subject'))
const ForgotPassword = lazy(() => import('../../views/auth/ForgotPasswordBasic'))


export default [
  {
    path: '/dashboard',
    element: <DashboardAnalytics />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/chat',
    element: <Chat />,
    meta: {
      appLayout: true,
      className: 'chat-application'
    }
  },
  {
    path: '/account-settings',
    element: <AccountSettings />
  },
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
    element: <ClassesCards />,
    path: '/admin/class/:id'
  },
  {
    element: <AssignClasses />,
    path: '/admin/assign-classes'
  },

  {
    element: <AdminTimeTable />,
    path: '/admin/time-table/:id'
  },
  {
    element: <AutomatictimeTable />,
    path: '/admin/automatic-time-table'
  },

  {
    path: '/time-table',
    element: <Calendar />
  },
  {
    path: '/attendence',
    element: <StudentAttendence />
  },
  {
    path: '/subjects',
    element: <StudentsSubjects />
  },
  {
    path: '/subject/:classId/:subjectId',
    element: <StudentSubjectView />
  },
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
    path: '/task/:taskId',
    element: <TaskDetails />
  },
  {
    path: '/task/check/:classId/:taskId',
    element: <SubmittedTasks />
  },
  {
    path: '/classes/subject/:subjectName/:classId/:subjectId',
    element: <Subject />,
    meta: {
      appLayout: true,
      className: 'kanban-application'
    }
  }

];
