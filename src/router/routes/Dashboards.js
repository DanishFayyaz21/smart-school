import { lazy } from 'react'
const DashboardAnalytics = lazy(() => import('../../views/dashboard/analytics'))
const Profile = lazy(() => import('../../views/profile'))
const AccountSettings = lazy(() => import('../../views/account-settings'))
const Chat = lazy(() => import('../../views/chat'))


const DashboardRoutes = [
  {
    path: '/dashboard',
    element: <DashboardAnalytics />
  },
  {
    path: '/profile',
    element: <Profile />
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
  }

]

export default DashboardRoutes
