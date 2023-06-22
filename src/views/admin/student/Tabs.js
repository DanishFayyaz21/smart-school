// ** Reactstrap Imports
import { Nav, NavItem, NavLink } from 'reactstrap'

// ** Icons Imports
import {FiUsers} from 'react-icons/fi'
import {TbLock} from 'react-icons/tb'
import {IoDocumentTextOutline} from 'react-icons/io5'
import {HiOutlineBell, HiOutlineLink} from 'react-icons/hi'

import {useLocation, useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Tabs = ({ activeTab, toggleTab }) => {
  const {t} = useTranslation()
  const location = useLocation()
  const path = location.pathname
  const navigate = useNavigate()
  console.log('path current: ', path)
  return (
    <Nav pills className='mb-2'>
      <NavItem>
        <NavLink active={path === '/kyc-process/account'} onClick={() => navigate('/kyc-process/account')}>
          <FiUsers size={18} />
          <span className='fw-bold'style={{fontSize:"13px"}}>
            {t("Account")}
            </span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={path === '/kyc-process/screening'} onClick={() => navigate('/kyc-process/screening')}>
        <TbLock size={18}/>
          <span className='fw-bold'style={{fontSize:"13px"}}>
           
            {t("KYC Screening")}
            
            </span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={path === '/kyc-process/report'} onClick={() => navigate('/kyc-process/report')}>
          <IoDocumentTextOutline size={18}/>
          <span className='fw-bold'style={{fontSize:"13px"}}>
           
            {t("Screening Report")}
            
            </span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={path === '/kyc-process/diligence'} onClick={() => navigate('/kyc-process/diligence')}>
          <HiOutlineBell size={18} className='me-50' />
          <span className='fw-bold'style={{fontSize:"13px"}}>
            {t("Enhance Due Diligence")}

            </span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={path === '/kyc-process/transaction-report'} onClick={() => navigate('/kyc-process/transaction-report')}>
          <HiOutlineLink size={18}/>
          <span className='fw-bold'style={{fontSize:"13px"}}>
           {t("Transaction Reporting")}
            </span>
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Tabs
