// ** Icons Import
import { TbSmartHome } from 'react-icons/tb'
import { BsPersonExclamation } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { MessageSquare } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboard',
    icon: <TbSmartHome size={20} />,
    navLink: '/dashboard',
  },
  {
    id: 'profile',
    title: 'Profile',
    icon: <BsPersonExclamation size={20} />,
    navLink: '/profile' 
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    navLink: '/chat'
  },
  {
    id: 'accountSettings',
    title: 'Account Settings',
    icon: <FiSettings size={20} />,
    navLink: '/account-settings' 
  }
]
