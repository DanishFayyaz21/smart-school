// ** Reactstrap Imports
import { Badge, Card, CardBody } from 'reactstrap'

// ** Custom Components
import AvatarGroup from '@components/avatar-group'

// ** Third Party Imports
import classnames from 'classnames'
import { Paperclip, MessageSquare, Edit } from 'react-feather'

// ** Redux Imports
import { useDispatch } from 'react-redux'

// ** Actions
import { handleSelectTask } from './store'
import moment from 'moment'
import { Link } from 'react-router-dom'

const KanbanTasks = props => {
  // ** Props
  const { task, labelColors, handleTaskSidebarToggle } = props

  // ** Hooks
  const dispatch = useDispatch()

  const handleTaskClick = () => {
    dispatch(handleSelectTask(task))
    handleTaskSidebarToggle()
  }

  const renderLabels = () => {
    if (task.labels.length) {
      return (
        <div className='mb-1'>
          {task.labels.map((label, index) => {
            const isLastChip = task.labels[task.labels.length - 1] === label

            return (
              <Badge
                pill
                key={index}
                label={label}
                color={`light-${labelColors[label]}`}
                className={classnames({ 'me-75': !isLastChip })}
              >
                {label}
              </Badge>
            )
          })}
        </div>
      )
    } else {
      return null
    }
  }

  const renderAttachmentsComments = () => {
    if ((task.attachments && task.attachments.length) || (task.comments && task.comments.length)) {
      return (
        <div className='d-flex align-items-center'>
          {task.attachments && task.attachments.length ? (
            <div className='d-flex align-items-center cursor-pointer me-75'>
              <Paperclip size={16} className='me-25' />
              <span>{task.attachments.length}</span>
            </div>
          ) : null}
          {task.comments && task.comments.length ? (
            <div className='d-flex align-items-center cursor-pointer'>
              <MessageSquare size={16} className='me-50' />
              <span>{task.comments.length}</span>
            </div>
          ) : null}
        </div>
      )
    } else {
      return null
    }
  }

  const taskFooterClasses = () => {
    if (task.comments && !task.comments.length && task.attachments && !task.attachments.length) {
      return 'justify-content-end'
    } else {
      return 'justify-content-between'
    }
  }

  const renderTaskFooter = () => {
    return (task.attachments && task.attachments.length) ||
      (task.comments && task.comments.length) ||
      (task.assignedTo && task.assignedTo.length) ? (
      <div className={`task-footer d-flex align-items-center mt-1 ${taskFooterClasses()}`}>
        {renderAttachmentsComments()}
        {task.assignedTo.length ? (
          <div>{task.assignedTo.length ? <AvatarGroup data={task.assignedTo} /> : null}</div>
        ) : null}
      </div>
    ) : null
  }

  return (
    <>

      <Card className='task' data-board-id={task.boardId} data-task-id={task.id}>

        <Link to={`/task/check/${task?.classId}/${task.id}`}>
          <CardBody data-task-id={task.id}>
            {/* {renderLabels()} */}

            {task.coverImage ? (
              <img className='img-fluid rounded task-img mb-1' alt={task.title} src={task.coverImage} />
            ) : null}


            <div className='d-flex justify-content-between'>
              <h3 className='task-title text-capitalize'>{task.title}</h3>
              <p><span className='text-info '>Marks:</span>{task.marks || 0}</p>
            </div>
            <span className='task-title'>{task?.description}</span>
            <p className='mt-3 mb-0' style={{ fontSize: "12px" }}><span className='text-info '>Last update:</span> {moment(task?.updatedAt).format("H:mm a, DD-MM-YYYY")}</p>
            <p style={{ fontSize: "12px" }}><span className='text-info '>Deadline:</span> {moment(task?.deadline).format("H:mm a, DD-MM-YYYY")}</p>


            {/* {renderTaskFooter()} */}
          </CardBody>
        </Link>

        <p className='align-self-end mx-2 ' style={{ cursor: "pointer" }} onClick={handleTaskClick}><Edit size={10} /> </p>

      </Card>
    </>)
}

export default KanbanTasks
