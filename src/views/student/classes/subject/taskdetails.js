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



const TaskDetails = ({ data }) => {
  // ** States
  const [tasksOpen, setTasksOpen] = useState(false)
  const [taskDetails, setTaskDetails] = useState(null)
  const [taskStatus, setTaskStatus] = useState(null)
  const { userData } = useSelector((state) => state.auth)
  const [showModal, setShowModal] = useState(false);
  const [document, setDocument] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const fileInputRef = useRef(null);

  const applyhandle = () => {
    fileInputRef.current.click();
  };

  const onResumeChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      var reader = new FileReader();
      if (img) {
        reader.readAsDataURL(img);
        reader.onload = () => {
          var Base64 = reader.result;

          setDocument(Base64);
        };
        reader.onerror = (error) => {
          // console.log("error: ", error);
        };
      }
    }
  };

  const submitTask = async () => {
    // setapplyLoading(true)
    const formData = {
      creator: taskDetails?.creator,
      task: taskDetails?._id,
      classId: taskDetails?.classId,
      subject: taskDetails?.subject,
      document
    };
    try {
      const res = await post("submit-task", formData);
      if (res.data.status == 201) {
        getTaskDetails()
        handleClose()
      }
      // dispatch(getJobDetail(jobId));
      // Toster("success", res?.message);
      // handleClose();
      // setapplyLoading(false)
    } catch (err) {
      // setapplyLoading(false)
      console.log("fail", err.message);
    }
  };
  const { taskId } = useParams()
  const getTaskDetails = async () => {
    const response = await get(`get-task?taskId=${taskId}`)
    if (response.data.status == 200) {
      setTaskDetails(response.data.task)
    }
  }
  console.log("details...", taskStatus)
  const getTaskStatus = async () => {
    try {
      const response = await get(`get-task-status?subjectId=${taskDetails?.subject}&taskId=${taskId}`)
      if (response.data.status == 200) {
        setTaskStatus(response.data.data)
      }
    } catch (err) {
      console.log("err: ", err)
    }
  }
  useEffect(() => {
    getTaskDetails()
  }, [taskId])

  useEffect(() => {
    if (taskDetails) {
      getTaskStatus()
    }
  }, [taskDetails])
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
                        <p style={{ fontSize: "20px" }}><span className='text-primary' style={{ fontWeight: "600" }}>Obtained Marks:</span> {taskStatus?.obtainedMarks || 0}</p>
                        <p style={{ fontSize: "20px" }}><span className='text-primary' style={{ fontWeight: "600" }}>Status:</span> {taskStatus ? taskStatus?.status : "Not Graded"}</p>

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
        <h2>Submission</h2>
        <Card className='task '>
          <CardBody >
            <div className='d-flex justify-content-between' >
              <h3 className='task-title text-capitalize'>Status</h3>
              <h5 className='task-title text-capitalize align-self-center'>{!(
                taskDetails?.submittedStudents?.filter(
                  (elem) => elem == userData?._id
                ).length <= 0
              ) ? "Submitted" : "pending"}</h5>
              {console.log("sdsdsdsd", taskDetails?.submittedStudents, userData?._id, !(
                taskDetails?.submittedStudents?.filter(
                  (elem) => elem == userData?._id
                ).length <= 0
              ))}
              <Button
                disabled={
                  !(
                    taskDetails?.submittedStudents?.filter(
                      (elem) => elem == userData?._id
                    ).length <= 0
                  )
                }
                variant="primary"
                onClick={handleShow}
              >
                Upload
              </Button>

            </div>

          </CardBody>
        </Card>


      </Row>
      <div>
        <Modal
          className=""
          isOpen={showModal}
          // onHide={handleClose}
          toggle={handleClose}
        >
          <ModalHeader closeButton>
            <p className='text-capitalize'>Submit for {taskDetails?.title}</p>
          </ModalHeader>
          <div className="px-5 py-2">

            <div
              className=" p-3 "
              style={{ cursor: "pointer" }}
            >
              <div
                // className={`${applycategory == 2
                //   ? "job-apply-card-active"
                //   : "job-apply-card"
                //   } d-flex flex-column  justify-content-center align-items-center p-3`}
                onClick={() => {
                  applyhandle();
                }}
                className='text-center'
              >
                <div>
                  <ImUpload2 size={100} color="#0A1172" />
                  <h6 className="py-2 text-dark fs-5 fw-semibold text-center">
                    Upload File
                  </h6>
                </div>
                <input
                  hidden
                  type="file"
                  className="form-control"
                  ref={fileInputRef}
                  onChange={(e) => onResumeChange(e)}
                />
              </div>
            </div>
          </div>


          <ModalFooter>
            <Button
              disabled={!document}
              variant="secondary"
              // disabled={applyLoading}
              onClick={() => submitTask()}
            >
              {/* {applyLoading ? (
                <>
                  <span
                    class="spinner-border spinner-border-sm me-2"
                    role="status"
                    style={{ color: "orange" }}
                    aria-hidden="true"
                  ></span>
                  <span style={{ color: "orange" }}>Loading...</span>
                </>
              ) : "Submit"} */}
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div >
  )
}
export default TaskDetails
