// import AddCategories from "../../views/pages/MyCategories/AddCategories";
// import Categories from "../../views/pages/MyCategories/Categories";
// import { default as MyEmail } from '../../views/pages/MyEmail';
// import OrdersList from "../../views/pages/MyOrders/OrdersList";
// import AllPayment from "../../views/pages/MyPayment/AllPayment";
// import AddProducts from "../../views/pages/MyProducts/AddProducts";
// import ParentCategories from "../../views/pages/MyProducts/ParentCategories";
// import ProductsList from "../../views/pages/MyProducts/ProductsList";
// import MyPermisssions from "../../views/pages/MyRolePermissions/MyPermisssions";
// import MyRoles from "../../views/pages/MyRolePermissions/MyRoles";
// import AddTeam from "../../views/pages/MyTeams/AddTeam.jsx";
// import TeamList from "../../views/pages/MyTeams/TeamList";
// import MyTodoList from "../../views/pages/MyTodos/MyTodoList";
// import MyADDUser from "../../views/pages/MyUsers/MyADDUser";
// import MyEditUser from "../../views/pages/MyUsers/MyEditUser";
// import MyUsersList from "../../views/pages/MyUsers/MyUsersList";
// import MyVendorsList from "../../views/pages/MyUsers/MyVendorsList";
// import GamingAndNewsHome from "../../views/pages/dynamicPages/Gaming&News/GamingAndNewsHome";
// import HardwareHero from "../../views/pages/dynamicPages/HardwareAndReview/HardwareHome";
// import Home from "../../views/pages/dynamicPages/Home/Home";
// import ModAndMPlace from "../../views/pages/dynamicPages/ModMarketPlace/ModAndMPlace";
// import PodcastsHome from "../../views/pages/dynamicPages/Podcasts/PodcastsHome";
// import SalesHome from "../../views/pages/dynamicPages/Sales/SalesHome";

import { lazy } from 'react';

// import ShopHome from "../../views/pages/dynamicPages/Shop/ShopHome";
const DashboardEcommerce = lazy(() => import('../../views/dashboard/ecommerce'))
import StudentView from '../../views/admin/student/view';
import TeacherView from '../../views/admin/teacher/view';


const DashboardAnalytics = lazy(() => import('../../views/dashboard/analytics'))
const Profile = lazy(() => import('../../views/profile'))
const AccountSettings = lazy(() => import('../../views/account-settings'))
const Chat = lazy(() => import('../../views/chat'))
const ClassesCards = lazy(() => import('../../views/admin/assignClasses/ClassesCards'))



const StudentList = lazy(() => import('../../views/admin/student/list'))
const TeachersList = lazy(() => import('../../views/admin/teacher/list'))
const AssignClasses = lazy(() => import('../../views/admin/assignClasses'))
const AdminTimeTable = lazy(() => import('../../views/admin/timetable'))

const StudentAttendence = lazy(() => import('../../views/student/attendence'))
const Simulation = lazy(() => import('../../views/student/simulation'))
const Calendar = lazy(() => import('../../views/student/calendar'))

const TimeTable = lazy(() => import('../../views/teacher/timetable'))
const Attendence = lazy(() => import('../../views/teacher/attendence'))
const Classes = lazy(() => import('../../views/teacher/classes'))
const Subject = lazy(() => import('../../views/teacher/classes/subject'))
const ForgotPassword = lazy(() => import('../../views/auth/ForgotPasswordBasic'))


export default [
  {
    path: '/dashboard',
    element: <DashboardAnalytics />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/chat',
    element: <Chat />,
    meta: {
      appLayout: true,
      className: 'chat-application'
    }
  },
  {
    path: '/account-settings',
    element: <AccountSettings />
  },
  {
    path: '/student',
    element: <StudentList />
  },
  {
    element: <StudentView />,
    path: '/student/view/:id'
  },
  {
    path: '/teachers',
    element: <TeachersList />
  },
  {
    element: <TeacherView />,
    path: '/teacher/view/:id'
  },
  {
    element: <ClassesCards />,
    path: '/admin/class/:id'
  },
  {
    element: <AssignClasses />,
    path: '/admin/assign-classes'
  },

  {
    element: <AdminTimeTable />,
    path: '/admin/time-table'
  },

  {
    path: '/time-table',
    element: <Calendar />
  },
  {
    path: '/attendence',
    element: <StudentAttendence />
  },
  {
    path: '/grades',
    element: <Simulation />
  },
  {
    path: '/teacher/time-table',
    element: <TimeTable />
  },
  {
    path: '/teacher-attendence',
    element: <Attendence />
  },
  {
    path: '/classes',
    element: <Classes />
  },
  {
    path: '/classes/subject',
    element: <Subject />,
    meta: {
      appLayout: true,
      className: 'kanban-application'
    }
  }

  // {
  //   element: <MyUsersList />,
  //   path: "/admin/users/list",
  // },
  // {
  //   element: <MyADDUser />,
  //   path: "/admin/users/add",
  // },

  // {
  //   element: <MyEditUser />,
  //   path: "/admin/users/edit",
  // },
  // {
  //   element: <MyVendorsList />,
  //   path: "/admin/users/vendors",
  // },
  // {
  //   element: <Home />,
  //   path: "/admin/home",
  // },
  // {
  //   element: <ModAndMPlace  />,
  //   path: "/admin/ModAndMPlace",
  // },
  // {
  //   element: <HardwareHero />,
  //   path: "/admin/HardwareAndReview",
  // },
  // {
  //   element: <GamingAndNewsHome />,
  //   path: "/admin/GamingAndNews",
  // },

  // {
  //   element: <Categories />,
  //   path: "/admin/categories",
  // },
  // {
  //   element: <PodcastsHome />,
  //   path: "/admin/podcasts",
  // },
  // {
  //   element: <SalesHome />,
  //   path: "/admin/sales",
  // },
  // {
  //   element: <ShopHome />,
  //   path: "/admin/shop",
  // },
  // {
  //   element: <AddCategories />,
  //   path: "/admin/add-categories/modAndMPlace",
  // },
  // {
  //   element: <AddCategories />,
  //   path: "/admin/add-categories/hardwareAndReview",
  // },
  // {
  //   element: <AddCategories />,
  //   path: "/admin/add-categories/GamingAndNews",
  // },

  // // Vendors
  // {
  //   element: <ProductsList />,
  //   path: "/vendor/products/list",
  // },
  // {
  //   element: <AddProducts />,
  //   path: "/vendor/add-new/products",
  // },
  // {
  //   element: <OrdersList />,
  //   path: "/vendor/myOrders/list",
  // },
  // // Teams
  // {
  //   element: <AddTeam />,
  //   path: "/vendor/Teams/team",
  // },

  // // Payment

  // {
  //   element: <AllPayment />,
  //   path: "/payment",
  // },
  // {
  //   element: <TeamList />,
  //   path: "/vendor/Teams/list",
  // },
  // {
  //   element: <TeamList />,
  //   path: "/vendor/Teams/list",
  // },
  // {
  //   element: <ParentCategories />,
  //   path: "/vendor/parentCategories/list",
  // },

  // //Payment

  // // {
  // //   element: <AddPayment/>,
  // //   path: "/vendor/payment/list",
  // // },
  // //Emails
  // {
  //   element: <MyEmail />,
  //   path: "/emails",
  //   meta: {
  //     appLayout: true,
  //     className: 'email-application'
  //   }
  // },

  // // Roles & Permissions
  // // {
  // //   element: <MyPermisssions/>,
  // //   path: "/vendor/myPermisssions",
  // // },
  // {
  //   element: <MyRoles/>,
  //   path: "/vendor/myRoles",
  // },


  // {
  //   element: <MyTodoList />,
  //   path: "/vendor/MyTodos/list",
  //   meta: {
  //     appLayout: true,
  //     className: "todo-application",
  //   },
  // },
];
