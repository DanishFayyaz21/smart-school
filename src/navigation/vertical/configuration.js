import { AiOutlineIdcard } from "react-icons/ai"
import { BsGrid } from 'react-icons/bs'
import { TbToggleLeft } from 'react-icons/tb'

export default [
  {
    header: 'Configuration'
  },
  {
    id: 'vertical_screening_priority',
    title: 'Screening Priority',
    icon: <AiOutlineIdcard/>,
    navLink: '/screening_priority'
  },
  {
    id: 'vertical_decision_criterion',
    title: 'Decision Criterion',
    icon: <BsGrid />,
    navLink: '/decision_criterion'
  },
  {
    id: 'vertical_simulation',
    title: 'Simulation',
    icon: <TbToggleLeft />,
    navLink: '/simulation'
  }
]