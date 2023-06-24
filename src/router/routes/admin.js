// ** React Imports
import { lazy } from 'react'
import AccountTabContent from "../../views/admin/student/AccountTabContent";
import KycScreeningTabContent from "../../views/admin/student/KycScreeningTabContent";
import ScreeningReportTabContent from "../../views/admin/student/ScreeningReportTabContent";
import EnhanceDueDiligencyTabContent from "../../views/admin/student/EnhanceDueDiligencyTabContent";
import TransactionReportingTabContent from "../../views/admin/student/TransactionReportingTabContent";
import StudentView from '../../views/admin/student/view';
// import { Activity } from 'react-feather';

const StudentList = lazy(() => import('../../views/admin/student/list'))
const OperationalOverview = lazy(() => import('../../views/admin/operational-overview'))
const CustomerDirectory = lazy(() => import('../../views/admin/customer-directory'))
const BusinessDirectory = lazy(() => import('../../views/admin/business-directory'))
const Activity = lazy(() => import('../../views/admin/Activity'))
const Finance = lazy(() => import('../../views/admin/Finance'))
// const People = lazy(() => import('../../views/home/people'))

// const Todo = lazy(() => import('../../views/apps/todo'))
// const Email = lazy(() => import('../../views/apps/email'))
// const Kanban = lazy(() => import('../../views/apps/kanban'))
// const Calendar = lazy(() => import('../../views/apps/calendar'))

// const InvoiceAdd = lazy(() => import('../../views/apps/invoice/add'))
// const InvoiceList = lazy(() => import('../../views/apps/invoice/list'))
// const InvoiceEdit = lazy(() => import('../../views/apps/invoice/edit'))
// const InvoicePrint = lazy(() => import('../../views/apps/invoice/print'))
// const InvoicePreview = lazy(() => import('../../views/apps/invoice/preview'))

// const EcommerceShop = lazy(() => import('../../views/apps/ecommerce/shop'))
// const EcommerceDetail = lazy(() => import('../../views/apps/ecommerce/detail'))
// const EcommerceWishlist = lazy(() => import('../../views/apps/ecommerce/wishlist'))
// const EcommerceCheckout = lazy(() => import('../../views/apps/ecommerce/checkout'))

// const UserList = lazy(() => import('../../views/apps/user/list'))
// const UserView = lazy(() => import('../../views/apps/user/view'))

// const Roles = lazy(() => import('../../views/apps/roles-permissions/roles'))
// const Permissions = lazy(() => import('../../views/apps/roles-permissions/permissions'))

const HomeRoutes = [
  {
    path: '/student',
    element: <StudentList />,
    // children: [
    //   {
    //     path: 'view/:id',
    //     element: <StudentView />
    //   },
    //   {
    //     path: 'screening',
    //     element: <KycScreeningTabContent />
    //   },
    //   {
    //     path: 'report',
    //     element: <ScreeningReportTabContent />
    //   },
    //   {
    //     path: 'diligence',
    //     element: <EnhanceDueDiligencyTabContent />
    //   },
    //   {
    //     path: 'transaction-report',
    //     element: <TransactionReportingTabContent />
    //   },
    // ]
  },
  {
    element: <StudentView/>,
    path: '/student/view/:id'
  },
  {
    path: '/operational_overview',
    element: <OperationalOverview />
  },
  {
    path:'/customer_directory',
    element:<CustomerDirectory />
  },
  {
    path:'/business_directory',
    element:<BusinessDirectory />
  },
  {
    path:'/finance',
    element:<Finance/>
  },
  {
    path:'/activities',
    element:<Activity />
  }
  // ,
  // {
  //   path:'/people',
  //   element:<People />
  // }
]

export default HomeRoutes
