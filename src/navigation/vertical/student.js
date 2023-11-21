import { CiViewTimeline } from "react-icons/ci"
import { BsGrid } from 'react-icons/bs'
import { TbToggleLeft } from 'react-icons/tb'

export default [
  {
    header: 'Student'
  },
  {
    id: 'timeTable',
    title: 'Time Table',
    icon: <CiViewTimeline />,
    navLink: '/time-table'
  },
  {
    id: 'attendence',
    title: 'Attendence',
    icon: <BsGrid />,
    navLink: '/attendence'
  },
  {
    id: 'subjects',
    title: 'Subjects',
    icon: <TbToggleLeft />,
    navLink: '/subjects'
  }
]