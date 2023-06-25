// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import { User, Lock, Bookmark, Bell, Link } from 'react-feather'

// ** User Components
import SecurityTab from './SecurityTab'
import Notifications from './Notifications'
import UserProjectsList from './UserProjectsList'
import UserInfoCard from './UserInfoCard'
import { useSelector } from 'react-redux'

const UserTabs = ({ active, toggleTab }) => {
  const store = useSelector(state => state.users)

  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <User className='font-medium-3 me-50' />
            <span className='fw-bold'>Acadmics</span>
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
        </TabPane>
        <TabPane tabId='2'>
          {/* <BillingPlanTab /> */}
          <div className='d-flex flex-wrap gap-2'>
          <UserInfoCard selectedUser={store.selectedUser} />
          <UserInfoCard selectedUser={store.selectedUser} />
        
          </div>
          </TabPane>
        <TabPane tabId='3'>
          <Notifications />
        </TabPane>
        <TabPane tabId='4'>
          <SecurityTab />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UserTabs
