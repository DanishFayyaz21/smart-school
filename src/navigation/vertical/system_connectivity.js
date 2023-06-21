import { HiOutlineTerminal } from 'react-icons/hi'
import { TbSTurnRight } from 'react-icons/tb'

export default [
  {
    header: 'System Connectivity'
  },
  {
    id: 'vertical_system_connection',
    title: 'System Connection',
    icon: <HiOutlineTerminal/>,
    navLink: '/system-connection'
  },
  {
    id: 'vertical_database_connection',
    title: 'Database Connection',
    icon: <TbSTurnRight />,
    navLink: '/database-connection'
  }
]
