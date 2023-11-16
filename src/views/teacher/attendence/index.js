import { Fragment, useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import { CiExport } from 'react-icons/ci'
import { HiOutlinePlus } from 'react-icons/hi'
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";

import {
  Row,
  Col,
  Form,
  Input,
  Label,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormFeedback,
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
  Table,
} from "reactstrap";
import { get, post } from "../../../utility/Axios";
import { useSelector } from "react-redux";
import moment from "moment/moment";


const Attendence = () => {
  const { t } = useTranslation();


  const { userData } = useSelector(state => state.auth)
  const [classes, setClasses] = useState([])
  const [selectedSubject, setSelectedSubject] = useState()
  const [attendance, setAttendance] = useState([]);
  const [students, setStudents] = useState([])
  const [currentClass, setCurrentClass] = useState()
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"))
  const getTeacherClasses = async (id) => {
    try {
      const response = await get(`get-teacher-classes?id=${id}`)
      setClasses(response.data.data)
      setSelectedSubject(response.data.data[0]?._id)
      setCurrentClass(response.data.data[0]?.classId?._id)
      getClassStudents(response.data.data[0]?.classId?._id)
    } catch (err) {
      console.log("err", err)
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

    getTeacherClasses(userData?._id)
  }, [])

  useEffect(() => {
    getSpecificDateAttendence(date)
  }, [selectedSubject])
  const handleCheckboxChange = (studentId) => {

    if (attendance.includes(studentId)) {
      setAttendance(attendance.filter((id) => id !== studentId));
    } else {
      setAttendance((prevAttendance) => ([
        ...prevAttendance,
        studentId,
      ]))
    }
  };

  const getSpecificDateAttendence = async (date) => {
    try {
      const response = await get(`get-specific-attendance?subjectId=${selectedSubject}&date=${date}`)
      if (response.status == 200) {
        setAttendance(response.data?.attendance.users?.map(item => item?.user))
      } else {
        setAttendance([])
      }
    } catch (err) {
      console.log("err", err)
      setAttendance([])
    }
  }
  const martAttendence = async () => {
    try {
      const formData = {
        classId: currentClass,
        subjectId: selectedSubject,
        users: attendance,
        date
      }
      const response = await post("/mark-attendence", formData)
      console.log(response.data)
    } catch (err) {
      console.log("err", err)
    }
  }



  return (
    <Fragment>
      <div
        className="d-md-flex flex-wrap  d-block p-2 rounded"
        style={{ marginTop: "3rem", backgroundColor: "#FFFFFF" }}
      >
        {classes.length > 0 ? classes.map((item, i) => (
          <div className="me-1">
            {/* <button
            type="button"
            className=" btn border mx-1 bg-white hover-bg-danger border rounded-4"

          >
            <span
              style={{ fontSize: "20px", marginRight: "" }} >
            </span>
            <span>{item?.name}</span>
          </button> */}

            <Button className='mt-2 border rounded-2' color={selectedSubject == item?._id && "primary"} block onClick={() => {
              setSelectedSubject(item?._id)
              setCurrentClass(item?.classId?._id)
              getClassStudents(item?.classId?._id)
            }}>
              <span className='align-middle'>{item?.name + "-" + item?.classId?.name}</span>
            </Button>
          </div>
        )) : <span>No Class Assigned Yet</span>}


      </div>

      {/* button card section */}

      <div
        className="d-flex  justify-content-between p-2 rounded"
        style={{ marginTop: "3rem", backgroundColor: "#FFFFFF" }}
      >
        <div className="d-flex  justify-content-between ">
          <button
            type="button"
            className="flex btn border bg-white hover-bg-danger"
          >
            <span>
              <CiExport style={{ fontSize: "20px", marginRight: "1rem" }} />
            </span>
            <span>{t("Export")}</span>
          </button>
          <Input
            className="col-md-4 mx-2 "
            type="date"
            value={date}
            onChange={(e) => {
              console.log("eeeeeeeee", e.target.value)
              getSpecificDateAttendence(e.target.value)
              setDate(moment(e.target.value).format("YYYY-MM-DD"))
            }}
          />
        </div>

        <div className="d-flex gap-5">
          <Button color="primary" onClick={martAttendence}>Submit</Button>
        </div>
      </div>

      {/* Table card section */}
      <Card>
        <Table responsive>
          <thead>
            <tr>
              <th scope="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    checked={attendance?.length == students?.length}
                    id="flexCheckDefault"
                    onChange={() => {
                      if (attendance?.length == students?.length) {
                        setAttendance([])
                      } else {
                        setAttendance(students.map(item => item?._id))
                      }
                    }}
                  /> Mart All Present
                </div>
              </th>
              <th>{t("Roll no")}</th>
              <th>{t("Student Name ")}</th>
              <th>{t("Attendence")}</th>
              {/* <th style={{ minWidth: '120px' }}> {t("ACTION")}</th> */}
            </tr>
          </thead>

          {students.length > 0 ?
            students.map((item) => (
              <tbody>
                <tr>
                  <td scope="col">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={attendance.includes(item?._id) || false}
                        onChange={() => handleCheckboxChange(item?._id)}
                        id="flexCheckDefault"
                      />
                      {console.log("attendance.map(elem => elem == item?._id).length", attendance.includes(item?._id))}
                    </div>
                  </td>
                  <td className="px-2 py-2 ">{item?.rollNumber}</td>
                  <td className="text-capitalize">{item?.user_name}</td>
                  <td>
                    {attendance.includes(item?._id) == true && (
                      <span className="rounded px-1  d-inline-block
                    d-inline-block" style={{ backgroundColor: " rgba(40, 199, 111, 0.16)", color: " rgba(40, 199, 111, 1)" }}>Present</span>
                    )}

                    {attendance.includes(item?._id) == false && (
                      <span className="rounded px-1  d-inline-block
                    d-inline-block" style={{ backgroundColor: " rgba(255, 159, 67, 0.16)", color: " rgba(255, 159, 67, 1)" }}>Absent</span>
                    )}
                  </td>
                  {/* <td className="  gap-1" style={{ fontSize: "17px" }}>
                    <span className="px-1">
                      <TbEdit />
                    </span>
                    <span>
                      <RiDeleteBinLine className="" />
                    </span>
                  </td> */}
                </tr>
              </tbody>

            )) : <div className="d-flex justify-content-center text-center w-100">
              <span className="m-5 text-center align-self-center">No Student Found</span>
            </div>}

        </Table>
      </Card>
    </Fragment>

  )
}


export default Attendence