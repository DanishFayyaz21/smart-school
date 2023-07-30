import { FiUser } from 'react-icons/fi'
import { TbLock } from 'react-icons/tb'

export default [
  {
    header: 'Teacher'
  },
  {
    id: 'vertical_manage_users',
    title: 'Time Table',
    icon: <FiUser/>,
    navLink: '/teacher/time-table'
  },
  {
    id: 'vertical_manage_permissions',
    title: 'Attendence',
    icon: <TbLock />,
    navLink: '/teacher-attendence'
  },
  {
    id: 'classes',
    title: 'Classes',
    icon: <TbLock />,
    navLink: '/classes'
  }
]