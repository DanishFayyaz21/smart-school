// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Reactstrap Imports

import { Badge, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'


// ** Third Party Components
import {
  Eye,
  Send,
  Edit,
  Save,
  Info,
  PieChart,
  Download,
  TrendingUp,
  CheckCircle,
  ArrowDownCircle
} from 'react-feather'

// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** Table columns
export const columns = [
  {
    name: 'Subject',
    sortable: true,
    sortField: 'id',
    minWidth: '107px',
    selector: row => row.id,
    cell: row => <Link className='fw-bolder' to={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Link>
  },
  {
    name: "Type",
    minWidth: '102px',
    sortable: true,
    sortField: 'invoiceStatus',
    selector: row => row.invoiceStatus,
    cell: row => {
      const color = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].color : 'primary',
        Icon = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].icon : Edit
      return (
        <Fragment>
          <Avatar color={color} icon={<Icon size={14} />} id={`av-tooltip-${row.id}`} />
          <UncontrolledTooltip placement='top' target={`av-tooltip-${row.id}`}>
            <span className='fw-bold'>{row.invoiceStatus}</span>
            <br />
            <span className='fw-bold'>Balance:</span> {row.balance}
            <br />
            <span className='fw-bold'>Due Date:</span> {row.dueDate}
          </UncontrolledTooltip>
        </Fragment>
      )
    }
  },

  {
    name: 'Total Marks',
    sortable: true,
    minWidth: '150px',
    sortField: 'total',
    selector: row => row.total,
    cell: row => <span>${row.total || 0}</span>
  },
  {
    minWidth: '200px',
    name: 'Obtained Marks',
    cell: row => row.dueDate
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: row => (
      <div className='column-action'>
        <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={14} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Archive size={14} className='me-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={e => {
                e.preventDefault()
                store.dispatch(deleteUser(row.id))
              }}
            >
              <Trash2 size={14} className='me-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]
