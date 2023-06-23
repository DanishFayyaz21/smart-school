import {TbMessages} from 'react-icons/tb'
import {IoPeople, } from 'react-icons/io5'
import {RiLayoutTopLine, RiLayout5Line} from 'react-icons/ri'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {TbChartHistogram,TbLayoutNavbar} from 'react-icons/tb'
import { Circle } from 'react-feather'
import {Layout} from 'react-feather'

export default [
    {
      header: 'Admin'
    },
    {
      id: 'vertical_kyc_process',
      title: 'Students',
      icon: <IoPeople />,
      navLink: '/student'

      // children: [
      //   {
      //     id: 'vertical_account',
      //     title: 'All Students',
      //     icon: <Circle size={12} />,
      //     navLink: '/kyc-process/account'
      //   },
      //   {
      //     id: 'vertical_kyc_screening',
      //     title: 'Attendence',
      //     icon: <Circle size={12} />,
      //     navLink: '/kyc-process/screening'
      //   },
      //   {
      //     id: 'vertical_screening_report',
      //     title: 'Performance Report',
      //     icon: <Circle size={12} />,
      //     navLink: '/kyc-process/report'
      //   },
      //   {
      //     id: 'vertical_enhance_due_diligence',
      //     title: 'Enhance Due Diligence',
      //     icon: <Circle size={12} />,
      //     navLink: '/kyc-process/diligence'
      //   },
      //   {
      //     id: 'vertical_transaction_reporting',
      //     title: 'Transaction Reporting',
      //     icon: <Circle size={12} />,
      //     navLink: '/kyc-process/transaction-report'
      //   }
      // ]
    },
    {
      id: 'vertical_operational_overview',
      title: 'Operational Overview',
      icon: <TbMessages />,
      navLink: '/operational_overview'
    },
    {
      id: 'vertical_customer_directory',
      title: 'Customer Directory',
      icon: <TbLayoutNavbar />,
      navLink: '/customer_directory'
    },
    {
      id: 'vertical_business_directory',
      title: 'Business Directory',
      icon: <Layout />,
      navLink: '/business_directory'
    },
    {
      id: 'vertical_activity',
      title: 'Activity',
      icon: <HiOutlineClipboardList />,
      navLink: '/activities'
    },
    {
      id: 'vertical_finance',
      title: 'Financial',
      icon: <TbChartHistogram />,
      navLink: '/finance'
    },   
]
