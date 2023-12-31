// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Imports
import { Plus } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import {
  Button, Input, FormText, Card,
  CardBody, Col, Row,
} from 'reactstrap'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Kanban Component
// import { Link, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { get, post } from '../../../../utility/Axios'
import moment from 'moment'

const defaultValues = {
  name: ''
}

const labelColors = {
  App: 'info',
  UX: 'success',
  Images: 'warning',
  Forms: 'success',
  'Code Review': 'danger',
  'Charts & Maps': 'primary'
}

const RenderTasks = ({ data }) => {
  // ** States
  const [tasksOpen, setTasksOpen] = useState(false)


  return (

    <div className=' border-bottom mb-3'>
      <h3 className='text-capitalize'>{data.name}</h3>
      <Row className='p-3'>
        {data.tasks.length > 0 ?
          data.tasks?.map((task, index) => (
            <Col key={index} xl={4} md={6}>

              <Card

                //  onClick={handleTaskClick} 
                className='task '
              // data-board-id={task.boardId} 
              // data-task-id={task.id}
              >
                <CardBody >
                  <Link to={`/task/${task?._id}`}>
                    <div className='d-flex justify-content-between'>
                      <h3 className='task-title text-capitalize'>{task.title}</h3>
                      <p><span className='text-info '>Marks:</span> {task.marks || 0}</p>
                    </div>
                    <span className='task-title'>{task?.description}</span>
                  </Link>
                  <div className='text-center mb-2 mt-4'>
                    {task?.taskImage ? (
                      <a className='btn btn-primary' color='primary' href={task?.taskImage} download>Download media file</a>
                    ) : null}
                  </div>

                  <p className='mt-3 mb-0' style={{ fontSize: "12px" }}><span className='text-info '>Last update:</span> {moment(task?.updatedAt).format("H:mm a, DD-MM-YYYY")}</p>
                  <p style={{ fontSize: "12px" }}><span className='text-info '>Deadline:</span> {moment(task?.deadline).format("H:mm a, DD-MM-YYYY")}</p>
                  {/* {renderTaskFooter()} */}
                </CardBody>
              </Card>

            </Col>

          )) : <p>No item has been defined in this board yet.</p>}
      </Row>



    </div >
  )
}
export default RenderTasks
