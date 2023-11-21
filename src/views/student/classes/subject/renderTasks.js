// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Imports
import { Plus } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import {
  Button, Input, FormText, Card,
  CardBody, Col, Row
} from 'reactstrap'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Kanban Component
import { useParams } from 'react-router-dom'
import { get, post } from '../../../../utility/Axios'

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

  console.log("data,,,,,,,,,,,,,", data)
  return (

    <div className=' border-bottom mb-3'>
      <h3 className='text-capitalize'>{data.name}</h3>
      <Row className='p-3'>
        {data.tasks.length > 0 && data.tasks?.map((task, index) => (
          <Col key={index} xl={4} md={6}>
            <Card

              //  onClick={handleTaskClick} 
              className='task '
            // data-board-id={task.boardId} 
            // data-task-id={task.id}
            >
              <CardBody >
<div className='text-center'>
                {task.taskImage ? (
                  <img className='img-fluid rounded task-img mb-1'
                    alt={task.title}
                    src={task.taskImage}
                  />
                ) : null}
</div>
                <h3 className='task-title text-capitalize'>{task.title}</h3>
                <span className='task-title'>{task?.description}</span>

                {/* {renderTaskFooter()} */}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  )
}
export default RenderTasks
