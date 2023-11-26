// ** Reactstrap Imports
import react, { useEffect, useState } from 'react'
import { } from 'react'

import { Card, CardTitle, CardBody, Table, Col, Input, Button, Label } from 'reactstrap'
import { selectThemeColors } from '@utils'
import { get, post } from '../../../../utility/Axios'
import moment from 'moment'
import { useLocation, useNavigation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getClassSubjects } from '../../../../redux/slices/subjectSlice'

const typesArr = [
  {
    title: 'New for you',
    defaultChecked: ['email']
  },
  {
    title: 'Account activity',
    defaultChecked: ['browser', 'app']
  },
  {
    title: 'A new browser used to sign in',
    defaultChecked: ['email', 'browser', 'app']
  },
  {
    title: 'A new device is linked',
    defaultChecked: ['browser']
  }
]

const Notifications = () => {

  const { id } = useParams()
  const [selectedSubject, setSelectedSubject] = useState()

  const [attendance, setAttendance] = useState([])
  const [presents, setPresents] = useState([])
  const dispatch = useDispatch()
  const { classesSubject } = useSelector(state => state.subject)
  const { currentStudent } = useSelector(state => state.user)
console.log("presents",presents)
  const handleCheckboxChange = (date) => {
    console.log("datedate", date)
    if (presents.includes(date)) {
      setPresents(presents.filter((id) => id !== date));
    } else {
      setPresents((prevAttendance) => ([
        ...prevAttendance,
        date,
      ]))
    }
  };

  const getSubjectAttendance = async (subjectId) => {
    try {
      const response = await get(`/get-subject-attendance?userId=${id}&subjectId=${subjectId}`)
      console.log("respoinse.", response.data.attendance)
      setPresents(response.data?.attendance?.map(item => moment(item.date).format("YYYY-MM-DD")))
    } catch (err) {
      console.log("err", err)
    }
  }
  const getLast30Days = () => {
    const currentDate = new Date();
    // const dateArray = Array.from({ length: 30 }, (_, index) => {
    //   const date = moment(new Date(currentDate).setDate(currentDate.getDate() - index)).format("YYYY-MM-DD")

    //   return date;
    // });




    // Create an array to store the dates
    const last30Days = [];

    // Generate the last 30 days
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(currentDate.getDate() - i);

      // Format the date as "YYYY-MM-DD"
      // const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

      last30Days.push(moment(date).format("YYYY-MM-DD"));
    }

    setAttendance(last30Days)
    console.log("30.....",last30Days)


  }

  useEffect(() => {
    getLast30Days()
  }, [])

  useEffect(() => {
    if (classesSubject.length > 0) {
      setSelectedSubject(classesSubject[0]?._id)
      getSubjectAttendance(classesSubject[0]?._id)
    }
  }, [classesSubject])

  useEffect(() => {
    if (currentStudent?.studentclass?._id) {
      dispatch(getClassSubjects(JSON.stringify([currentStudent?.studentclass?._id])))
    }
  }, [currentStudent?.studentclass])

  const saveAttendence = async () => {
    const formData = {
      userId: id,
      subjectId: selectedSubject,
      attendance: attendance.map(item => {
        return { date: item, status: presents.includes(item) ? "Present" : "Absent" }
      })
    }
    const response = await post("/mark-user-attendence", formData)
    console.log("response", response.data)
  }

  return (
    <Card>
      <CardBody>
        <CardTitle className='mb-50' tag='h4'>
          Attendence
        </CardTitle>
        <div
          className="d-md-flex flex-wrap my-1  d-block p-2 rounded"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {classesSubject.length > 0 ? classesSubject?.map((item, i) => (
            <div className="me-1">

              <Button className='mt-1 border rounded-2'
                color={selectedSubject == item?._id && "primary"}
                block onClick={() => {
                  setSelectedSubject(item?._id)
                  getSubjectAttendance(item?._id)
                }}>
                <span className='align-middle' >{item?.name}</span>
              </Button>
            </div>
          )) : <span>No Class Assigned Yet</span>}
        </div>

        <Col md='4'>
          <Label for='role-select'>Select Date</Label>
          <Input
            type='date'
            isClearable={false}
            className='react-select'
            theme={selectThemeColors}
          />
        </Col>
      </CardBody>
      <Table className='text-nowrap text-center border-bottom'
        responsive>
        <thead>
          <tr>
            <th className='text-start'>Date</th>
            <th>✉️ Present</th>
            <th>🖥 Absent</th>
            {/* <th>👩🏻‍💻 Leave</th> */}
          </tr>
        </thead>
        <tbody>
          {attendance?.map((item, index) => {
            return (
              <tr key={index}>
                <td className='text-start'>{item}</td>
                <td>
                  <div className='d-flex form-check justify-content-center'>
                    <Input type='checkbox' checked={presents.includes(item)}
                      onChange={() => handleCheckboxChange(item)} />
                  </div>
                </td>
                <td>
                  <div className='d-flex form-check justify-content-center'>
                    <Input type='checkbox' checked={!presents.includes(item)} onChange={() => handleCheckboxChange(item)} />
                  </div>
                </td>
                {/* <td>
                  <div className='d-flex form-check justify-content-center'>
                    <Input type='checkbox' defaultChecked={type.defaultChecked.includes('app')} />
                  </div>
                </td> */}
              </tr>
            )
          })}
        </tbody>
      </Table>
      <CardBody>
        <Button className='me-1' color='primary' onClick={saveAttendence}>
          Save Changes
        </Button>
        <Button outline>Discard</Button>
      </CardBody>
    </Card >
  )
}

export default Notifications
