import { lazy } from 'react'
const DashboardAnalytics = lazy(() => import('../../views/dashboard/analytics'))
const Profile = lazy(() => import('../../views/profile'))
const AccountSettings = lazy(() => import('../../views/account-settings'))


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
    path: '/account-settings',
    element: <AccountSettings />
  }

]

export default DashboardRoutes
