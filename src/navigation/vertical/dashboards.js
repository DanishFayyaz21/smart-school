// ** Icons Import
import { TbSmartHome } from 'react-icons/tb'
import { BsPersonExclamation } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

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
    id: 'accountSettings',
    title: 'Account Settings',
    icon: <FiSettings size={20} />,
    navLink: '/account-settings' 
  }
]
