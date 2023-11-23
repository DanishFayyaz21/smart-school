// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { Row, Col } from 'reactstrap'

// ** Calendar App Component Imports
import Calendar from './Calendar'
import SidebarLeft from './SidebarLeft'
import AddEventSidebar from './AddEventSidebar'

// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'
import { fetchEvents, selectEvent, updateEvent, updateFilter, updateAllFilters, addEvent, removeEvent } from './store'

// ** Styles
import '@styles/react/apps/app-calendar.scss'
import { get } from '../../../utility/Axios'

// ** CalendarColors
const calendarsColor = {
  Business: 'primary',
  Holiday: 'success',
  Personal: 'danger',
  Family: 'warning',
  ETC: 'info'
}

const CalendarComponent = () => {
  // ** Variables
  const dispatch = useDispatch()
  const store = useSelector(state => state.calendar)
  const { userData } = useSelector(state => state.auth)
  console.log(" useSelector(state => state.calendar)", userData)
  // ** states
  const [calendarApi, setCalendarApi] = useState(null)
  const [addSidebarOpen, setAddSidebarOpen] = useState(false)
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)

  // ** Hooks
  const [isRtl] = useRTL()

  // ** AddEventSidebar Toggle Function
  const handleAddEventSidebar = () => setAddSidebarOpen(!addSidebarOpen)

  // ** LeftSidebar Toggle Function
  const toggleSidebar = val => setLeftSidebarOpen(val)

  // ** Blank Event Object
  const blankEvent = {
    title: '',
    start: '',
    end: '',
    allDay: false,
    url: '',
    extendedProps: {
      calendar: '',
      guests: [],
      location: '',
      description: ''
    }
  }

  // ** refetchEvents
  const refetchEvents = () => {
    if (calendarApi !== null) {
      calendarApi.refetchEvents()
    }
  }

  // ** Fetch Events On Mount
  useEffect(() => {
    dispatch(fetchEvents(store.selectedCalendars))
  }, [])

  const [myLectures, setMyLectures] = useState()

  const getAllLectures = async (id, subject) => {
    try {
      // const response = await get(`/time-table?classId=652145146f05649f3ed1a106`)
      const response = await get(`/time-table?classId=${id}`)
      console.log("response........", response.data.timeTable)
      if (response.data?.status == 200) {
        if (response.data.timeTable.length > 0) {
          setMyLectures(response.data.timeTable.map((item, i) => {
            console.log("000000", calendarsColor[Object.keys(calendarsColor)[Math.floor(Math.random() * Object.keys(calendarsColor).length)]])
            return {
              id: item?._id,
              url: "",
              title: item?.subject?.name,
              start: item?.startDateTime,
              end: item?.endDateTime,
              allDay: false,
              extendedProps: {
                calendar: calendarsColor[Object.keys(calendarsColor)[Math.floor(Math.random() * Object.keys(calendarsColor).length)]]
              }
            }
          }))
        }

      }

    } catch (err) {
      console.log("error: ", err)
    }
  }

  useEffect(() => {
    console.log("userData?.studentclass", userData)
    if (userData.role == "Parent") {

      console.log("asdsad", userData.role)
      getAllLectures(userData?.child.studentclass)

    } else {
      getAllLectures(userData?.studentclass?._id)

    }
  }, [userData])
  return (
    <Fragment>
      <div className='app-calendar overflow-hidden border'>
        <Row className='g-0'>
          <Col
            id='app-calendar-sidebar'
            className={classnames('col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column', {
              show: leftSidebarOpen
            })}
          >
            <SidebarLeft
              store={store}
              dispatch={dispatch}
              updateFilter={updateFilter}
              toggleSidebar={toggleSidebar}
              updateAllFilters={updateAllFilters}
              handleAddEventSidebar={handleAddEventSidebar}
              setMyLectures={setMyLectures}
              myLectures={myLectures}
            />
          </Col>
          <Col className='position-relative'>
            <Calendar
              isRtl={isRtl}
              setMyLectures={setMyLectures}
              myLectures={myLectures}

              store={store}
              dispatch={dispatch}
              blankEvent={blankEvent}
              calendarApi={calendarApi}
              selectEvent={selectEvent}
              updateEvent={updateEvent}
              toggleSidebar={toggleSidebar}
              calendarsColor={calendarsColor}
              setCalendarApi={setCalendarApi}
              handleAddEventSidebar={handleAddEventSidebar}
            />
          </Col>
          <div
            className={classnames('body-content-overlay', {
              show: leftSidebarOpen === true
            })}
            onClick={() => toggleSidebar(false)}
          ></div>
        </Row>
      </div>
      <AddEventSidebar
        store={store}
        dispatch={dispatch}
        addEvent={addEvent}
        open={addSidebarOpen}
        selectEvent={selectEvent}
        updateEvent={updateEvent}
        removeEvent={removeEvent}
        calendarApi={calendarApi}
        refetchEvents={refetchEvents}
        calendarsColor={calendarsColor}
        handleAddEventSidebar={handleAddEventSidebar}
      />
    </Fragment>
  )
}

export default CalendarComponent
