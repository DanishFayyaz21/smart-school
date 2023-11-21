// ** React Imports
import { Fragment, useState } from 'react'

// ** Custom Components
import classnames from 'classnames'

// ** Reactstrap Imports
import { Card, CardBody, Button, Input, Label } from 'reactstrap'

// ** illustration import
import illustration from '@src/assets/images/pages/calendar-illustration.png'
import { post } from '../../../utility/Axios'

// ** Filters Checkbox Array
const filters = [
  { label: 'Personal', color: 'danger', className: 'form-check-danger mb-1' },
  { label: 'Business', color: 'primary', className: 'form-check-primary mb-1' },
  { label: 'Family', color: 'warning', className: 'form-check-warning mb-1' },
  { label: 'Holiday', color: 'success', className: 'form-check-success mb-1' },
  { label: 'ETC', color: 'info', className: 'form-check-info' }
]

const SidebarLeft = props => {
  // ** Props
  const { handleAddEventSidebar, myLectures, getAllLectures, toggleSidebar, updateFilter, updateAllFilters, store, dispatch, id } = props

  // ** Function to handle Add Event Click
  const handleAddEventClick = () => {
    toggleSidebar(false)
    handleAddEventSidebar()
  }
  const [loading, setLoading] = useState(false)
  const generateTimetable = async () => {
    try {
      setLoading(true)
      const response = await post(`/time-table/automatic?classId=${id}`)
      if (response.data.status == 200) {
        getAllLectures(id)
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)

      console.log("erroe", err)
    }
  }

  return (
    <Fragment>
      <Card className='sidebar-wrapper shadow-none'>
        <CardBody>
          <h5 className='section-label mb-1'>
            <span className='align-middle'>Filter</span>
          </h5>
          <div className='form-check mb-1'>
            <Input
              id='view-all'
              type='checkbox'
              label='View All'
              className='select-all'
              checked={store.selectedCalendars.length === filters.length}
              onChange={e => dispatch(updateAllFilters(e.target.checked))}
            />
            <Label className='form-check-label' for='view-all'>
              View All
            </Label>
          </div>

          <div className='calendar-events-filter'>
            {/* {console.log(myLectures?.length && myLectures?.map(fil => fil.title, fil.id))} */}
            {myLectures?.length &&
              console.log(Array.from(new Map(myLectures.map(item => [item.title, { id: item.id, title: item.title }])).values()), "lllllllllll")}
            {myLectures?.length &&
              Array.from(new Map(myLectures.map(item => [item.title, { ...item }])).values())?.map(filter => {
                { console.log("fgggggggg", filter, filter.title) }

                return (
                  <div
                    key={`${filter.label}-key`}
                    className={classnames(`form-check mt-1 ${filter?.extendedProps.calender}`, {
                      [filter.className]: filter.className
                    })}
                  >

                    <Input
                      type='checkbox'
                      key={filter.label}
                      label={filter.label}
                      className={`input-filter`}
                      id={`${filter.label}-event`}
                      checked={Array.from(new Map(myLectures.map(item => [item.title, { id: item.id, title: item.title }])).values())?.map(item => item.title)?.includes(filter.title)}
                      onChange={() => {
                        dispatch(updateFilter(filter.label))
                      }}
                    />
                    <Label className='form-check-label' for={`${filter.title}-event`}>
                      {filter.title}
                    </Label>
                  </div>
                )
              })}
            {/* <div
              key={`Physics-key`}

              className="form-check mb-1 form-check-info"
            >
              <Input
                type='checkbox'
                key={"Physics"}
                label={"Physics"}
                className='input-filter'
                id={`Physics`}
                checked={true}
              // onChange={() => {
              //   dispatch(updateFilter(filter.label))
              // }}
              />
              <Label className='form-check-label' for={`Physics-event`}>
                English class 9
              </Label>
            </div>

            <div
              key={`Physics-key`}

              className="form-check mb-1 form-check-success"
            >
              <Input
                type='checkbox'
                key={"Physics"}
                label={"Physics"}
                className='input-filter'
                id={`Physics`}
                checked={true}
              // onChange={() => {
              //   dispatch(updateFilter(filter.label))
              // }}
              />
              <Label className='form-check-label' for={`Physics-event`}>
                Physics class 10
              </Label>
            </div>

            <div
              key={`Physics-key`}

              className="form-check mb-1 form-check-warning"
            >
              <Input
                type='checkbox'
                key={"Physics"}
                label={"Physics"}
                className='input-filter'
                id={`Physics`}
                checked={true}
              // onChange={() => {
              //   dispatch(updateFilter(filter.label))
              // }}
              />
              <Label className='form-check-label' for={`Physics-event`}>
                Chemistry class 9
              </Label>
            </div>

            <div
              key={`Physics-key`}

              className="form-check mb-1 form-check-primary"
            >
              <Input
                type='checkbox'
                key={"Physics"}
                label={"Physics"}
                className='input-filter'
                id={`Physics`}
                checked={true}
              // onChange={() => {
              //   dispatch(updateFilter(filter.label))
              // }}
              />
              <Label className='form-check-label' for={`Physics-event`}>
                Math class 7
              </Label>
            </div>

            <div
              key={`Physics-key`}

              className="form-check mb-1 form-check-danger"
            >
              <Input
                type='checkbox'
                key={"Physics"}
                label={"Physics"}
                className='input-filter'
                id={`Physics`}
                checked={true}
              // onChange={() => {
              //   dispatch(updateFilter(filter.label))
              // }}
              />
              <Label className='form-check-label' for={`Physics-event`}>
                Economics class 8
              </Label>
            </div> */}

          </div>
        </CardBody>
      </Card>
      <div className='mt-auto'>
        <img className='img-fluid' src={illustration} alt='illustration' />
      </div>
    </Fragment>
  )
}

export default SidebarLeft
