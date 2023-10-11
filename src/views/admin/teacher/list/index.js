// ** User List Component
import Table from './Table'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'
import { useSelector } from 'react-redux'

const UsersList = () => {
  const { allTeacher } = useSelector(state => state.user)

  return (
    <div className='app-user-list'>
      <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='primary'
            statTitle='Total Teachers'
            icon={<User size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{allTeacher?.length}</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='Female Teachers'
            icon={<UserPlus size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{allTeacher?.filter(item => item.gender == "female").length}</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='Male Teachers'
            icon={<UserCheck size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{allTeacher?.filter(item => item.gender == "male").length}</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='Inactive Teachers'
            icon={<UserX size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{allTeacher?.filter(item => item.status == "inactive").length}</h3>}
          />
        </Col>
      </Row>
      <Table />
    </div>
  )
}

export default UsersList
