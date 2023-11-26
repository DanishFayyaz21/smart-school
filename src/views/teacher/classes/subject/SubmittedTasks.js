// ** React Imports
import { useEffect, useRef, useState } from 'react'

// ** Third Party Imports
import { Plus } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import FileViewer from 'react-file-viewer';
// ** Reactstrap Imports
import {
  Button, Input, FormText, Card,
  CardBody, Col, Row, Modal,
  ModalFooter,
  ModalHeader,
  // ModalTitle,
} from 'reactstrap'
import { ImUpload2 } from "react-icons/im";
// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'
// ** Kanban Component
import { useParams } from 'react-router-dom'
import { get, post } from '../../../../utility/Axios'
import moment from 'moment';



const SubmittedTasks = ({ data }) => {
  // ** States
  const [taskDetails, setTaskDetails] = useState(null)
  const [submittedTasks, setSubmittedTasks] = useState([])
  const [students, setStudents] = useState([])
  const [submissionStudents, setSubmissionStudents] = useState([])



  const { classId, taskId } = useParams()
  const getTaskDetails = async () => {
    const response = await get(`get-task?taskId=${taskId}`)
    if (response.data.status == 200) {
      setTaskDetails(response.data.task)
    }
  }





  const getClassStudents = async (id) => {
    try {
      const response = await get(`get-class-students/${id}`)
      setStudents(response.data.data)
    } catch (err) {
      console.log("err", err)
      setStudents([])

    }
  }

  const getSubmittedTasks = async (id) => {
    try {
      const response = await get(`get-submitted-tasks?taskId=${id}`)
      if (response.data.status == 200) {
        setSubmittedTasks(response.data.data)
      }
    } catch (err) {
      console.log("err", err)
      setStudents([])

    }
  }

  const gradeStudentTask = async (task, student, obtainedMarks) => {
    try {
      if (task && student && obtainedMarks) {
        console.log("task, student, obtainedMarks", task, student, obtainedMarks)

        const response = await post(`grade-student-task`, {
          task,
          student,
          obtainedMarks
        })
        if (response.data.status == 200) {
          getSubmittedTasks(taskId)
        }
      }

    } catch (err) {
      console.log("err", err)
      setStudents([])

    }
  }

  useEffect(() => {
    if (classId) {
      getClassStudents(classId)
    }
  }, [classId])
  useEffect(() => {
    getTaskDetails()
    getSubmittedTasks(taskId)
  }, [taskId])

  const syncTasks = () => {
    const temp = submittedTasks?.map(item => item.user)
    let tempStudents = students
    students.length > 0 && students.map((item, i) => {
      if (temp.includes(item?._id)) {
        const index = submittedTasks.findIndex(obj => obj.user === item?._id);
        tempStudents[i] = {
          ...tempStudents[i],
          document: submittedTasks[index].document,
          obtainedMarks: submittedTasks[index].obtainedMarks
        }
      }
    })
    setSubmissionStudents(tempStudents)

  }
  useEffect(() => {
    syncTasks();
  }, [submittedTasks]);


  return (

    <div className=' border-bottom mb-3'>
      <h2>Task Details</h2>
      <Row className='p-3'>
        {taskDetails ?
          <Card

            //  onClick={handleTaskClick} 
            className='task '
          // data-board-id={task.boardId} 
          // data-task-id={task.id}
          >
            <CardBody >

              <div className='' >
                <div >
                  <div>
                    <h3 className='task-title text-capitalize'>{taskDetails.title}</h3>
                    <div className='d-flex justify-content-between'>
                      <div>
                        <span className='task-title'><span className='text-primary'>Deadline:</span> {moment(taskDetails?.deadline).format("H:mm a, DD-MM-YYY")}</span>
                        <p className='task-title'>{taskDetails?.description}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: "20px" }}><span className='text-primary' style={{ fontWeight: "600" }}>Total Marks:</span> {taskDetails.marks || 0}</p>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className='mb-2 mt-4'>
                {taskDetails?.taskImage ? (
                  <a className='btn btn-primary' color='primary' href={taskDetails?.taskImage} download>Download media file</a>
                ) : null}
              </div>

              <p><span className='text-primary'>Last update:</span> {moment(taskDetails?.updatedAt).format("H:mm a, DD-MM-YYY")}</p>

            </CardBody>
          </Card>

          : <p>No item found.</p>}
      </Row>
      <Row className='p-3'>
        <h2>Student Submissions</h2>
        <Card className='task'>
          <CardBody >
            <div className='row ' >
              <h4 className='col-md-2 task-title text-capitalize'>Roll number</h4>
              <h4 className='col-md-2 text-center task-title text-capitalize'>Student Name</h4>
              <h4 className='col-md-2 text-center task-title text-capitalize'>Document</h4>
              <h4 className='col-md-2 text-center task-title text-capitalize'>Status</h4>
              <h4 className='col-md-2 text-center task-title text-capitalize'>Obt Marks</h4>
              <h4 className='col-md-1 text-center task-title text-capitalize'>Total Marks</h4>
              <h4 className='col-md-1 text-center task-title text-capitalize'>Action</h4>

            </div>
            {submissionStudents.length > 0 && submissionStudents.map((item, i) => (
              <div className='row py-1 border-bottom' key={i}>

                <p className='col-md-2 '>{item?.rollNumber}</p>
                <div className='col-md-2 ps-3'>
                  <p className='mb-0 pb-0'>{item?.firstName + " " + item?.lastName}</p>
                  <span className='text-primary' style={{ fontSize: "10px", fontWeight: "600" }}>
                    {item?.email}
                  </span>
                </div>{/* <p className='text-center'> */}
                <div className='col-md-2'>
                  {/* {item?.document && (
                    <a className='btn btn-primary' color='primary' href="https://example.com/document.pdf" download>
                      Download media file
                    </a>
                  )} */}
                  {item?.document ? (
                    <a
                      className='btn btn-primary'
                      color='primary'
                      style={{ fontSize: "10px" }}
                      href={item?.document}
                      download
                    >
                      Download media file
                    </a>
                  ) : (
                    <p>No document available</p>
                  )}
                </div>
                {/* </p> */}
                <p className='col-md-2 text-center' style={{ fontSize: "10px" }}>{item?.document ? "Submitted" : "Pending"}</p>
                <div className=' col-md-2'>
                  <input
                    className='mx-1 form-control control-form  text-center'
                    style={{ width: "100px" }}
                    value={item?.obtainedMarks}
                    type='number'
                    // placeholder='0'
                    onChange={(e) =>
                      setSubmissionStudents((prev) =>
                        prev.map((submission, index) =>
                          index === i
                            ? { ...submission, obtainedMarks: e.target.value }
                            : submission
                        )
                      )
                    } />
                </div>
                <div className=' col-md-1'>
                  <p className='text-center'>{taskDetails?.marks || 0}</p>
                </div>
                <div className='col-md-1'>
                  <Button
                    disabled={!(item?.document)}
                    variant="primary"
                    onClick={() => gradeStudentTask(taskId, item?._id, item?.obtainedMarks)}
                  >
                    Save
                  </Button>
                </div>

              </div>
            ))}

          </CardBody>
        </Card>


      </Row>

    </div >
  )
}
export default SubmittedTasks
