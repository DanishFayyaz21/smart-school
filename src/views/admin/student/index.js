// ** React Imports
import { Fragment, useState } from "react";

// ** Reactstrap Imports
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";

// ** Account App Component Imports
// ** Components
import Tabs from "./Tabs";

// // ** Custom Hooks
// import { useRTL } from '@hooks/useRTL'

// // ** Store & Actions
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchEvents, selectEvent, updateEvent, updateFilter, updateAllFilters, addEvent, removeEvent } from './store'

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/home/home-kyc-process.scss";
import { Outlet } from "react-router-dom";

const AccountComponent = ({ tab }) => {
   // ** States
   const [activeTab, setActiveTab] = useState("1");

   const toggleTab = (tab) => {
      setActiveTab(tab);
   };

   return (
      //    <Fragment>
      //        <Row>
      //          <Col xs={12}>
      //            <Tabs className='mb-2' activeTab={activeTab} toggleTab={toggleTab} />
      //          <TabContent activeTab={activeTab}>
      //            <TabPane tabId='1'>
      //              <AccountTabContent />
      //            </TabPane>
      //            <TabPane tabId='2'>
      //              {/* <SecurityTabContent /> */}
      //              <KycScreeningTabContent />
      //            </TabPane>
      //            <TabPane tabId='3'>
      //              {/* <BillingTabContent /> */}
      //              <ScreeningReportTabContent />
      //            </TabPane>
      //            <TabPane tabId='4'>
      //              {/* <NotificationsTabContent /> */}
      //              <EnhanceDueDiligencyTabContent />
      //            </TabPane>
      //            <TabPane tabId='5'>
      //              {/* <ConnectionsTabContent /> */}
      //              <TransactionReportingTabContent />
      //            </TabPane>
      //          </TabContent>
      //        </Col>
      //      </Row>
      //  </Fragment>
      <Fragment>
         <Row>
            <Col xs={12}>
               <Tabs
                  className="mb-2"
                  activeTab={activeTab}
                  toggleTab={toggleTab}
               />
               <Outlet />
            </Col>
         </Row>
      </Fragment>
   );
};

export default AccountComponent;

//         <TabContent activeTab={activeTab}>
//           <TabPane tabId='1'>
//             <AccountTabContent />
//           </TabPane>
//           <TabPane tabId='2'>
//             {/* <SecurityTabContent /> */}
//             <KycScreeningTabContent />
//           </TabPane>
//           <TabPane tabId='3'>
//             {/* <BillingTabContent /> */}
//             <AccountTabContent />
//           </TabPane>
//           <TabPane tabId='4'>
//             {/* <NotificationsTabContent /> */}
//             <AccountTabContent />
//           </TabPane>
//           <TabPane tabId='5'>
//             {/* <ConnectionsTabContent /> */}
//             <AccountTabContent />
//           </TabPane>
//         </TabContent>
//       </Col>
//     </Row>
// </Fragment>
//
//    );
// };
