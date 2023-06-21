import {TbMessages} from 'react-icons/tb'
import {IoSettingsOutline} from 'react-icons/io5'
import {RiLayoutTopLine, RiLayout5Line} from 'react-icons/ri'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {TbChartHistogram,TbLayoutNavbar} from 'react-icons/tb'
import { Circle } from 'react-feather'
import {Layout} from 'react-feather'

export default [
    {
      header: 'HOME'
    },
    {
      id: 'vertical_kyc_process',
      title: 'KYC Process',
      icon: <IoSettingsOutline />,
      children: [
        {
          id: 'vertical_account',
          title: 'Account',
          icon: <Circle size={12} />,
          navLink: '/kyc-process/account'
        },
        {
          id: 'vertical_kyc_screening',
          title: 'KYC Screening',
          icon: <Circle size={12} />,
          navLink: '/kyc-process/screening'
        },
        {
          id: 'vertical_screening_report',
          title: 'Screening Report',
          icon: <Circle size={12} />,
          navLink: '/kyc-process/report'
        },
        {
          id: 'vertical_enhance_due_diligence',
          title: 'Enhance Due Diligence',
          icon: <Circle size={12} />,
          navLink: '/kyc-process/diligence'
        },
        {
          id: 'vertical_transaction_reporting',
          title: 'Transaction Reporting',
          icon: <Circle size={12} />,
          navLink: '/kyc-process/transaction-report'
        }
      ]
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
    // {
    //   id: 'vertical_people',
    //   title: 'people',
    //   icon: <RiLayout5Line />,
    //   navLink: '/people'
    // } 
    // {
    //   id: 'vertical_',
    //   title: 'Financial',
    //   icon: <RiLayout5Line />,
    //   navLink: '/finance'
    // }, 
]
