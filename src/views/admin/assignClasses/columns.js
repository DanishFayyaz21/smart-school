// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { getUser } from '@src/views/apps/user/store'

// ** Icons Imports
import { Slack, User, Settings, Database, Edit2, Eye } from 'react-feather'

// ** Reactstrap Imports
import { Badge } from 'reactstrap'

// ** Renders Client Columns
const renderClient = row => {
  if (row.avatar.length) {
    return <Avatar className='me-1' img={row.avatar} width='32' height='32' />
  } else {
    return (
      <Avatar
        initials
        className='me-1'
        content={row.fullName || 'John Doe'}
        color={row.avatarColor || 'light-primary'}
      />
    )
  }
}

// ** Renders Role Columns
const renderRole = row => {
  const roleObj = {
    subscriber: {
      class: 'text-primary',
      icon: User
    },
    maintainer: {
      class: 'text-success',
      icon: Database
    },
    editor: {
      class: 'text-info',
      icon: Edit2
    },
    author: {
      class: 'text-warning',
      icon: Settings
    },
    admin: {
      class: 'text-danger',
      icon: Slack
    }
  }

  const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

  return (
    <span className='text-truncate text-capitalize align-middle'>
      <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} me-50`} />
      {row.role}
    </span>
  )
}

const statusObj = {
  pending: 'light-warning',
  active: 'light-success',
  inactive: 'light-secondary'
}

export const columns = [
  {
    name: 'Class',
    sortable: true,
    minWidth: '297px',
    sortField: 'Class',
    selector: row => row.fullName,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {/* {renderClient(row)} */}
        <div className='d-flex flex-column'>
          <Link
            to={`/admin/class/${row._id}`}
            className='user_name text-truncate text-body'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='fw-bold text-capitalize'>{row.name}</span>
          </Link>
          {/* <small className='text-truncate text-muted mb-0'>{row.email}</small> */}
        </div>
      </div>
    )
  },
  // {
  //   name: 'Department',
  //   sortable: true,
  //   minWidth: '172px',
  //   sortField: 'role',
  //   selector: row => row.role,
  //   cell: row => <div>
  //     coming soon..
  //   </div>
  // },
  {
    name: 'Subjects',
    sortable: true,
    minWidth: '138px',
    sortField: 'currentPlan',
    selector: row => row.currentPlan,
    cell: row => <span className='text-capitalize'>{row?.subject?.length}</span>
  },
  // {
  //   name: 'Students',
  //   sortable: true,
  //   minWidth: '230px',
  //   sortField: 'billing',
  //   selector: row => row.billing,
  //   cell: row => <span className='text-capitalize'>{row?.students?.length}</span>
  // },
  // {
  //   name: '',
  //   sortable: true,
  //   minWidth: '138px',
  //   sortField: 'status',
  //   selector: row => row.status,
  //   cell: row => (
  //     <Badge className='text-capitalize' color={statusObj[row.status]} pill>
  //       {row.status}
  //     </Badge>
  //   )
  // },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: row => (
      <Link to={`/admin/class/${row._id}`}>
        <Eye className='font-medium-3 text-body' />
      </Link>
    )
  }
]
