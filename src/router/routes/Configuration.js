import { lazy } from 'react'



const ScreeningPriority = lazy(() => import('../../views/configuration/screening-priority'))
const DecisionCriterion = lazy(() => import('../../views/configuration/decision-criterion'))
const Simulation = lazy(() => import('../../views/configuration/simulation'))

const configurationRoutes = [
    {
        path: '/screening_priority',
        element: <ScreeningPriority />
    },
    {
        path: '/decision_criterion',
        element: <DecisionCriterion />
    },
    {
        path: '/simulation',
        element: <Simulation />
    },

    
]

export default configurationRoutes
