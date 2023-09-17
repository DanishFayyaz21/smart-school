
// export default Router


// ** Router imports
import { lazy } from 'react'

// ** Router imports
import { useRoutes, Navigate } from 'react-router-dom'

// ** Layouts
import BlankLayout from '@layouts/BlankLayout'

// ** Hooks Imports
import { useLayout } from '@hooks/useLayout'

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from '../utility/Utils'

// ** GetRoutes
import { getRoutes } from './routes'

// ** Components
const Error = lazy(() => import('../views/pages/misc/Error'))
const Login = lazy(() => import('../views/auth/Login'))
const NotAuthorized = lazy(() => import('../views/pages/misc/NotAuthorized'))

const Router = () => {
  // ** Hooks
  const { layout } = useLayout()
console.log("layout",layout)
  const allRoutes = getRoutes(layout)
  const getHomeRoute = () => {
    const user = getUserData()

    if (user) {
      console.log("iffffffff", getHomeRouteForLoggedInUser(user.role))
      return getHomeRouteForLoggedInUser(user.role)
    } else {
      console.log("else")
      return '/login'
    }
  }
  console.log("bbbbbbbbbbbbbbbb", getHomeRoute())
  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Navigate replace to={getHomeRoute()} />
    },
    {
      path: '/login',
      element: <BlankLayout />,
      children: [{ path: '/login', element: <Login /> }]
    },
    {
      path: '/auth/not-auth',
      element: <BlankLayout />,
      children: [{ path: '/auth/not-auth', element: <NotAuthorized /> }]
    },
    {
      path: '*',
      element: <BlankLayout />,
      children: [{ path: '*', element: <Error /> }]
    },
    ...allRoutes
  ])
  console.log("all routes", allRoutes)

  return routes
}

export default Router

