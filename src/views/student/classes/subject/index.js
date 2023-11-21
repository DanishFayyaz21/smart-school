// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Imports
import { Plus } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Button, Input, FormText } from 'reactstrap'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions
import { fetchBoards, fetchTasks, addBoard } from './store'

// ** Kanban Component
import TaskSidebar from './TaskSidebar'
import KanbanBoards from './KanbanBoards'

// ** Styles
import '@styles/react/apps/app-kanban.scss'
import Table from '../Table'
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

const KanbanBoard = () => {
  // ** States
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showAddBoard, setShowAddBoard] = useState(false)
  const [students, setStudents] = useState([])
  const [taskCategories, setTaskCategories] = useState([])

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

  const getClassStudents = async (id) => {

    try {
      const response = await get(`get-class-students/${id}`)
      console.log("rrposne.", response.data.data)
      setStudents(response.data.data)
    } catch (err) {
      console.log("err", err)
      setStudents([])

    }
  }

  useEffect(() => {
    console.log("sadsadsadasdsad", classId)
    if (classId) {
      getClassStudents(classId)
    }
    if (subjectId) { getSubjectTasks(subjectId) }
  }, [classId, subjectId])

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.kanban)
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const handleAddBoardReset = () => {
    reset()
    setShowAddBoard(false)
  }

  const handleOpenAddBoard = () => {
    reset()
    setShowAddBoard(true)
  }

  const handleAddBoardFormSubmit = data => {
    dispatch(addBoard({ title: data.name, id: data.name.toLowerCase().replace(/ /g, '-') }))
    handleAddBoardReset()
  }

  const handleTaskSidebarToggle = () => setSidebarOpen(!sidebarOpen)

  const renderBoards = () => {
    const boards = taskCategories.length > 0 ? taskCategories.map((item) => {
      return { id: item._id, title: item?.name }
    }) : []

    let tasks = []
    taskCategories.length > 0 && taskCategories.map((item) => {
      if (item?.tasks.length > 0) {
        const temp = item?.tasks?.length > 0 && item?.tasks.map((item) => {
          console.log("item?._iditem?._id", item)
          return {
            id: item?._id,
            "labels": [
              "UX"
            ],
            boardId: item?.taskCategory,
            description: item?.description,
            dueDate: 1700594583088,
            title: item?.title,
            coverImage: item?.taskImage,
            "attachments": [
              {
                "name": "documentation.doc",
                "img": "/src/assets/images/icons/file-icons/doc.png"
              },
              {
                "name": "app.js",
                "img": "/src/assets/images/icons/file-icons/js.png"
              }
            ],
            "comments": [
              {
                "name": "Joey Tribbiani",
                "img": "/src/assets/images/portrait/small/avatar-s-3.jpg",
                "comment": "Complete this on priority"
              },
              {
                "name": "Chandler Bing",
                "img": "/src/assets/images/portrait/small/avatar-s-5.jpg",
                "comment": "Complete this on priority"
              },
              {
                "name": "Monica Geller",
                "img": "/src/assets/images/portrait/small/avatar-s-6.jpg",
                "comment": "Complete this on priority"
              }
            ],
            "assignedTo": [
              {
                "title": "Ross Geller",
                "img": "/src/assets/images/portrait/small/avatar-s-1.jpg"
              },
              {
                "title": "Pheobe Buffay",
                "img": "/src/assets/images/portrait/small/avatar-s-2.jpg"
              }
            ]
          }
        })
        tasks = [...tasks, ...temp]
      }
    })

    return boards.length > 0 && boards.map((board, index) => {

      const isLastBoard = boards[boards.length - 1].id === board.id

      return (
        <KanbanBoards
          store={{ boards, tasks }}
          board={board}
          subjectId={subjectId}
          classId={classId}
          getSubjectTasks={getSubjectTasks}
          labelColors={labelColors}
          isLastBoard={isLastBoard}
          key={`${board.id}-${index}`}
          index={`${board.id}-${index}`}
          handleTaskSidebarToggle={handleTaskSidebarToggle}
        />
      )
    })
  }

  const renderAddBoardForm = () => {
    const addTaskCategory = async (e) => {
      try {
        const formData = {
          name: e?.name,
          subject: subjectId
        }
        const response = await post("/add-task-category", formData)
        if (response.data.status == 201) {
          handleAddBoardReset()
        }
      } catch (err) {
        console.log("err", err)
      }
    }
    return showAddBoard ? (
      <form onSubmit={handleSubmit((e) => {
        // handleAddBoardFormSubmit(e)
        addTaskCategory(e)
      })}>
        <div className='mb-50'>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                autoFocus
                value={value}
                id='name'
                onChange={onChange}
                placeholder='Task Category'
                invalid={Boolean(errors.name)}
                aria-describedby='validation-add-board'
              />
            )}
          />
          {errors.name && (
            <FormText color='danger' id='validation-add-board'>
              Please enter a valid Task Category Title
            </FormText>
          )}
        </div>
        <div>
          <Button color='primary' size='sm' type='submit' className='me-75'>
            Add
          </Button>
          <Button outline size='sm' color='secondary' onClick={handleAddBoardReset}>
            Cancel
          </Button>
        </div>
      </form>
    ) : null
  }

  useEffect(() => {
    dispatch(fetchBoards())
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    store.boards ? (
      <div style={{ overflow: "auto", width: "100%" }}>
        <div className='app-kanban-wrapper'>
          {renderBoards()}

          <div className='ms-1' style={{ minWidth: 150 }}>
            {!showAddBoard ? (
              <Button size='sm' color='light-secondary' onClick={handleOpenAddBoard}>
                <Plus size={14} className='me-25' />
                <span className='align-middle'> Add Board</span>
              </Button>
            ) : (
              renderAddBoardForm()
            )}
          </div>

          <TaskSidebar
            labelColors={labelColors}
            sidebarOpen={sidebarOpen}
            getSubjectTasks={getSubjectTasks}
            selectedTask={store.selectedTask}
            handleTaskSidebarToggle={handleTaskSidebarToggle}
          />

        </div>
        <div style={{
          display: "block",
          width: "100%",
          overflow: "auto",
          minHeight: "100vh"
        }}>

          <h3 className='mt-50'>Students</h3>
          <div className='app-user-list'>
            <Table students={students} />
          </div>

        </div>
      </div>
    ) : null)
}

export default KanbanBoard
