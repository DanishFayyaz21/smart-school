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
import { get } from '../../../../utility/Axios'

const defaultValues = {
  boardTitle: ''
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

  const { classId,subjectId } = useParams()
  console.log("id...........", classId)
  const getClassStudents = async (id) => {
    console.log("sadsadsadasdsad",id)

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
    console.log("sadsadsadasdsad",classId)
    if (classId)
      getClassStudents(classId)
  }, [classId])

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
    dispatch(addBoard({ title: data.boardTitle, id: data.boardTitle.toLowerCase().replace(/ /g, '-') }))
    handleAddBoardReset()
  }

  const handleTaskSidebarToggle = () => setSidebarOpen(!sidebarOpen)

  const renderBoards = () => {
    return store.boards.map((board, index) => {
      const isLastBoard = store.boards[store.boards.length - 1].id === board.id

      return (
        <KanbanBoards
          store={store}
          board={board}
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
    return showAddBoard ? (
      <form onSubmit={handleSubmit(handleAddBoardFormSubmit)}>
        <div className='mb-50'>
          <Controller
            name='boardTitle'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Input
                autoFocus
                value={value}
                id='board-title'
                onChange={onChange}
                placeholder='Board Title'
                invalid={Boolean(errors.boardTitle)}
                aria-describedby='validation-add-board'
              />
            )}
          />
          {errors.boardTitle && (
            <FormText color='danger' id='validation-add-board'>
              Please enter a valid Board Title
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
            <Table students={students}/>
          </div>

        </div>
      </div>
    ) : null)
}

export default KanbanBoard
