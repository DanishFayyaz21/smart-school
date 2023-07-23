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
import student from "./student";
import teacher from "./teacher";
import system_connectivity from "./system_connectivity";
import manage_license from "./manage_license";

// ** Merge & Export

// Development Navigations

export default [
    ...dashboards,
    ...admin, ...student, ...teacher,
    ...system_connectivity, ...manage_license, ...apps, ...pages, ...uiElements, ...forms,
    ...tables, ...charts, ...others]

// Production Navigations
// export default [
//    ...dashboards,
//    ...home,
//    ...configuration,
//    ...teacher,
//    ...system_connectivity,
//    ...manage_license,
// ];
