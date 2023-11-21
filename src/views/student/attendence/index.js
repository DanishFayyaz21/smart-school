import { useEffect } from "react";
import { Fragment } from "react"
import { useTranslation } from "react-i18next";
import { CiExport } from 'react-icons/ci'
import { HiOutlinePlus } from 'react-icons/hi'
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

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
import { getClassSubjects } from "../../../redux/slices/subjectSlice";
import { get } from "../../../utility/Axios";
import { useState } from "react";
import moment from "moment";


const Attendence = () => {
  const { t } = useTranslation();


  const [attendance, setAttendance] = useState([])
  const [presents, setPresents] = useState([])

  const dispatch = useDispatch()
  const { classesSubject } = useSelector(state => state.subject)
  const { userData } = useSelector(state => state.auth)
  const [selectedSubject, setSelectedSubject] = useState()

  useEffect(() => {
    if (userData?.studentclass) {
      dispatch(getClassSubjects(JSON.stringify([userData?.studentclass])))
    }
  }, [userData?.studentclass])

  const getSubjectAttendance = async (subjectId) => {
    try {
      const response = await get(`/get-subject-attendance?userId=${userData?._id}&subjectId=${subjectId}`)
      console.log("respoinse.", response.data.attendance)
      setPresents(response.data?.attendance?.map(item => moment(item.date).format("YYYY-MM-DD")))
    } catch (err) {
      console.log("err", err)
    }
  }
  const getLast30Days = () => {
    const currentDate = new Date();
    const dateArray = Array.from({ length: 30 }, (_, index) => {
      const date = moment(new Date(currentDate).setDate(currentDate.getDate() - index)).format("YYYY-MM-DD")

      return date;
    });
    setAttendance(dateArray)

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
  return (
    <Fragment>

      <div className="">
        <h2 className="py-2 text-capitalize">{userData?.studentclass?.name}</h2>

        <h3 className="py-2">{t("Attendence")}</h3>
        <span>
          Select the subject to see your Attendence.
        </span>
      </div>

      <div
        className="d-md-flex flex-wrap  d-block p-2 rounded"
        style={{ marginTop: "3rem", backgroundColor: "#FFFFFF" }}
      >
        {classesSubject.length > 0 ? classesSubject?.map((item, i) => (
          <div className="me-1">

            <Button className='mt-2 border rounded-2'
              color={selectedSubject == item?._id && "primary"}
              block onClick={() => {
                setSelectedSubject(item?._id)
                // setCurrentClass(item?.classId?._id)
                getSubjectAttendance(item?._id)
              }}>
              <span className='align-middle'>{item?.name + "-" + item?.classId?.name}</span>
            </Button>
          </div>
        )) : <span>No Class Assigned Yet</span>}
      </div>

      {/* button card section */}

      <div
        className="d-flex justify-content-between p-2 rounded"
        style={{ marginTop: "3rem", backgroundColor: "#FFFFFF" }}
      >
        <div>
          <button
            type="button"
            className="flex btn border bg-white hover-bg-danger"
          >
            <span>
              <CiExport style={{ fontSize: "20px", marginRight: "1rem" }} />
            </span>
            <span>{t("Export")}</span>
          </button>
        </div>
        <div className="d-flex gap-5"></div>
      </div>

      {/* Table card section */}
      <Card>
        <Table responsive>
          <thead>
            <tr>
              <th scope="col">
                <div class="form-check">
                <span>Id</span>
                </div>
              </th>

              <th>{t("Date")}</th>
              <th>{t("STATUS")}</th>

            </tr>
          </thead>
          <tbody>
            {attendance.map((item, i) => (
              <tr>
                <td scope="col">
                  <p>{i + 1}</p>
                </td>
                <td className="px-2 py-2">{moment(item).format("YYYY-MM-DD, dddd")}</td>

                <td>
                  {presents.includes(item) === true && (
                    <span className="rounded px-1  d-inline-block
                    d-inline-block" style={{ backgroundColor: " rgba(40, 199, 111, 0.16)", color: " rgba(40, 199, 111, 1)" }}>Prsent</span>
                  )}
                  {console.log("presents.includes(item)", presents.includes(item), presents, item)}
                  {presents.includes(item) === false && (
                    <span className="rounded px-1  d-inline-block
                    d-inline-block" style={{ backgroundColor: " rgba(255, 159, 67, 0.16)", color: " rgba(255, 159, 67, 1)" }}>Absent</span>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

    </Fragment>

  )
}


export default Attendence