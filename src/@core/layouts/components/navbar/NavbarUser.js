// ** Dropdowns Imports
import IntlDropdown from './IntlDropdown'
import GridAdd from './GridAdd'
import UserDropdown from './UserDropdown'
import NotificationDropdown from './NotificationDropdown'
import Messages from './navbarMessage'

// ** Third Party Components
import { Sun, Moon } from 'react-feather'

// ** Reactstrap Imports
import { NavItem, NavLink } from 'reactstrap'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin } = props  

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else { 
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <ul className='nav navbar-nav align-items-center ms-auto'>
      {/* <IntlDropdown /> */}
      <NavItem className='d-none d-lg-block'>
        <NavLink className='nav-link-style'>
          {/* <ThemeToggler /> */}
        </NavLink>
      </NavItem>
      {/* <GridAdd />   */}
      {/* <NotificationDropdown /> */}
      {/* <Messages/> */}
      <UserDropdown />
    </ul>
  )
}
export default NavbarUser
