// ** React Imports
import { Fragment } from 'react'

// ** Roles Components
import Table from './Table'
import ClassesCards from './ClassesCards'
import { useSelector } from 'react-redux'

const Roles = () => {
  const { userData } = useSelector((state) => state.auth)

  return (
    <Fragment>
      <h3 className="text-capitalize">{userData?.studentclass?.name}</h3>
      <p className='mb-2'>
        You are enrolled in the following courses. Click on the course to see your grades in it.
      </p>
      <ClassesCards />
    </Fragment>
  )
}

export default Roles
