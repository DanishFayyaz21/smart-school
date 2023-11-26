import { TbMessages } from 'react-icons/tb'
import { IoPeople, } from 'react-icons/io5'
import { RiLayoutTopLine, RiLayout5Line } from 'react-icons/ri'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { TbChartHistogram, TbLayoutNavbar } from 'react-icons/tb'
import { Circle } from 'react-feather'
import { Layout } from 'react-feather'

export default [
  {
    header: 'Admin'
  },
  {
    id: 'vertical_kyc_process',
    title: 'Students',
    icon: <IoPeople />,
    navLink: '/student'
  },
  {
    id: 'teachers',
    title: 'Teacher',
    icon: <TbMessages />,
    navLink: '/teachers'
  },
  {
    id: 'classes',
    title: 'Classes',
    icon: <TbLayoutNavbar />,
    navLink: '/admin/assign-classes'
  },
  
  {
    id: 'make_time_table',
    title: 'Make Time Table',
    icon: <Layout />,
    navLink: '/admin/automatic-time-table'
  },
]
