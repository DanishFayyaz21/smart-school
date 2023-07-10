import { AiOutlineIdcard } from "react-icons/ai"
import { BsGrid } from 'react-icons/bs'
import { TbToggleLeft } from 'react-icons/tb'

export default [
  {
    header: 'Student'
  },
  {
    id: 'vertical_screening_priority',
    title: 'Screening Priority',
    icon: <AiOutlineIdcard />,
    navLink: '/screening_priority'
  },
  {
    id: 'vertical_decision_criterion',
    title: 'Attendence',
    icon: <BsGrid />,
    navLink: '/attendence'
  },
  {
    id: 'vertical_simulation',
    title: 'Simulation',
    icon: <TbToggleLeft />,
    navLink: '/simulation'
  }
]