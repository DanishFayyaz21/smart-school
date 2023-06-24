// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import { User, Lock, Bookmark, Bell, Link } from 'react-feather'

// ** User Components
import InvoiceList from './InvoiceList'
import SecurityTab from './SecurityTab'
import Connections from './Connections'
import BillingPlanTab from './BillingTab'
import UserTimeline from './UserTimeline'
import Notifications from './Notifications'
import UserProjectsList from './UserProjectsList'

const UserTabs = ({ active, toggleTab }) => {
  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <User className='font-medium-3 me-50' />
            <span className='fw-bold'>Account</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <Bookmark className='font-medium-3 me-50' />
            <span className='fw-bold'>Guardians</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <Bell className='font-medium-3 me-50' />
            <span className='fw-bold'>Attendence</span>
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <Link className='font-medium-3 me-50' />
            <span className='fw-bold'>Connections</span>
          </NavLink>
        </NavItem> */}

        <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <Lock className='font-medium-3 me-50' />
            <span className='fw-bold'>Security</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
          <UserProjectsList />
          <UserTimeline />
          <InvoiceList />
        </TabPane>
        <TabPane tabId='2'>
          <BillingPlanTab />
        </TabPane>
        <TabPane tabId='3'>
          <Notifications />
        </TabPane>
        {/* <TabPane tabId='4'>
          <Connections />
        </TabPane> */}
        <TabPane tabId='4'>
          <SecurityTab />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UserTabs
