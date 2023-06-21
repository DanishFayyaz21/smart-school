// ** Third Party Components
import { useTranslation } from 'react-i18next'
import ReactCountryFlag from 'react-country-flag'
import {TbMessages} from 'react-icons/tb'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle,Badge , Button} from 'reactstrap'

const Messages = () => {
  // ** Hooks
  const { i18n } = useTranslation()

  // ** Vars
  const langObj = {
    en: 'English',
    de: 'German',
    fr: 'French',
    ar: 'Arabic',
    pt: 'Portuguese'
  }

  // ** Function to switch Language
  const handleLangUpdate = (e, lang) => {
    e.preventDefault()
    i18n.changeLanguage(lang)
  }

  return (
   <UncontrolledDropdown tag='li' className='dropdown-notification nav-item me-25'>
      <DropdownToggle tag='a' className='nav-link' href='/' onClick={e => e.preventDefault()}>
      <TbMessages size={22} />
        {/* <Badge pill color='danger' className='badge-up'>
          5
        </Badge> */}
      </DropdownToggle>
      <DropdownMenu end tag='ul' className='dropdown-menu-media mt-0'>
        <li className='dropdown-menu-header'>
          <DropdownItem className='d-flex' tag='div' header>
            <h4 className='notification-title mb-0 me-auto'>Messages</h4>
            {/* <Badge tag='div' color='light-primary' pill>
              6 New
            </Badge> */}
          </DropdownItem>
        </li>
        {/* {renderNotificationItems()} */}
        <li className='dropdown-menu-footer'>
          <Button color='primary' block>
            Read all Messages
          </Button>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
    
  )
}

export default Messages
