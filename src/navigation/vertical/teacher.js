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
    navLink: '/manage_users'
  },
  {
    id: 'vertical_manage_permissions',
    title: 'Attendence',
    icon: <TbLock />,
    navLink: '/teacher-attendence'
  },
  {
    id: 'classes',
    title: 'classes',
    icon: <TbLock />,
    navLink: '/classes'
  }
]