// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Imports
import { Plus } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Button, Input, FormText } from 'reactstrap'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Kanban Component
import { useParams } from 'react-router-dom'
import { get, post } from '../../../../utility/Axios'
import RenderTasks from './renderTasks'

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

const StudentSubjectView = () => {
  // ** States
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showAddBoard, setShowAddBoard] = useState(false)
  const [students, setStudents] = useState([])
  const [taskCategories, setTaskCategories] = useState([])
  console.log("taskCategories", taskCategories)
  const { classId, subjectId } = useParams()

  const getSubjectTasks = async () => {
    try {
      const response = await get(`get-tasks?subjectId=${subjectId}`)
      if (response.data.status == 200) {
        setTaskCategories(response.data?.taskCategories)
      }
    } catch (err) {
      console.log("error", err)
    }
  }

  useEffect(() => {
    if (subjectId) { getSubjectTasks(subjectId) }
  }, [subjectId])


  return (

    <div style={{ overflow: "auto", width: "100%" }}>
      <div className='app-kanban-wrapper'>

        {/* <div className='ms-1' style={{ minWidth: 150 }}>
          <Button size='sm' color='light-secondary' >
            <Plus size={14} className='me-25' />
            <span className='align-middle'> Add Board</span>
          </Button>

        </div> */}

        {taskCategories.length > 0 && taskCategories.map((item, i) => (
          <>
            <RenderTasks data={item} />
          </>
        ))}


      </div>

    </div>
  )
}
export default StudentSubjectView
