import { lazy } from 'react'
const DashboardAnalytics = lazy(() => import('../../views/dashboard/analytics'))

const DashboardRoutes = [
  {
    path: '/dashboard',
    element: <DashboardAnalytics />
  },
  // {
  //   path: '/dashboard/ecommerce',
  //   element: <DashboardEcommerce />
  // }
]

export default DashboardRoutes
