import { CiViewTimeline } from "react-icons/ci"
import { BsGrid } from 'react-icons/bs'
import { TbToggleLeft } from 'react-icons/tb'
import { useSelector } from "react-redux"

const StudentRoutes = () => {
  const { userData } = useSelector((state) => state.auth)
  const routes = [
    {
      header: userData.role == "Student" ? "Student" : "Parent"
    },
    {
      id: 'timeTable',
      title: 'Time Table',
      icon: <CiViewTimeline />,
      navLink: '/time-table'
    },
    {
      id: 'attendence',
      title: 'Attendence',
      icon: <BsGrid />,
      navLink: '/attendence'
    },
    {
      id: 'subjects',
      title: 'Subjects',
      icon: <TbToggleLeft />,
      navLink: '/subjects'
    }
  ]
  return routes
}


export default StudentRoutes

// [
//   {
//     header: 'Student'
//   },
//   {
//     id: 'timeTable',
//     title: 'Time Table',
//     icon: <CiViewTimeline />,
//     navLink: '/time-table'
//   },
//   {
//     id: 'attendence',
//     title: 'Attendence',
//     icon: <BsGrid />,
//     navLink: '/attendence'
//   },
//   {
//     id: 'subjects',
//     title: 'Subjects',
//     icon: <TbToggleLeft />,
//     navLink: '/subjects'
//   }
// ]