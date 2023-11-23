// ** Navigation imports
import apps from "./apps";
import pages from "./pages";
import forms from "./forms";
import tables from "./tables";
import others from "./others";
import charts from "./charts";
import dashboards from "./dashboards";
import uiElements from "./ui-elements";
import admin from "./admin";
import Student from "./student";
import teacher from "./teacher";
import system_connectivity from "./system_connectivity";
import manage_license from "./manage_license";
import { useSelector } from "react-redux";

// ** Merge & Export

// Development Navigations

const VerticalNavigation = () => {
    const { userData } = useSelector(state => state.auth)
    let routes = [...dashboards, ...admin, ...Student(), ...teacher]
    // if (userData.role == "Admin") {
    //     routes = [
    //         ...routes,
    //         ...admin,
    //     ]
    // }


    // if (userData.role == "Student") {
    //     routes = [
    //         ...routes,
    //         ...student,
    //     ]
    // }
    // if (userData.role == "Teacher") {
    //     routes = [
    //         ...routes,
    //         ...teacher,
    //     ]
    // }
    return routes


}
export default VerticalNavigation
// [
//     ...dashboards,
//     ...admin, ...student, ...teacher,
//     // ...system_connectivity, ...manage_license, ...apps, ...pages, ...uiElements, ...forms,
//     // ...tables, ...charts, ...others
// ]

// Production Navigations
// export default [
//    ...dashboards,
//    ...home,
//    ...configuration,
//    ...teacher,
//    ...system_connectivity,
//    ...manage_license,
// ];
