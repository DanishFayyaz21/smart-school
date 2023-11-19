// ** React Imports
import { Fragment } from 'react'

// ** Roles Components
import Table from './Table'
import ClassesCards from './ClassesCards'

const Roles = () => {
  return (
    <Fragment>
      <h3>Classes</h3>
      <p className='mb-2'>
        These courses are assigned to you. Click on the course to manage it. 
      </p>
      <ClassesCards />
    </Fragment>
  )
}

export default Roles
