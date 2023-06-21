import { FiUser } from 'react-icons/fi'
import { TbLock } from 'react-icons/tb'

export default [
  {
    header: 'Roles & permissions'
  },
  {
    id: 'vertical_manage_users',
    title: 'Manage Users',
    icon: <FiUser/>,
    navLink: '/manage_users'
  },
  {
    id: 'vertical_manage_permissions',
    title: 'Manage Permissions',
    icon: <TbLock />,
    navLink: '/manage_permissions'
  },
]