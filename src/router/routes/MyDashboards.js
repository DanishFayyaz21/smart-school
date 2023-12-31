import { lazy } from 'react'

const DashboardAnalytics = lazy(() => import('../../views/dashboard/analytics'))
const DashboardEcommerce = lazy(() => import('../../views/dashboard/ecommerce'))

const MyDashboardRoutes= [
  // {
  //   path: '/dashboard/analytics',
  //   element: <DashboardAnalytics />
  // },
  {
    path: '/dashboard/ecommerce',
    element: <DashboardEcommerce />
  }
]

export default MyDashboardRoutes;
