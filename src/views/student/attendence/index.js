import { Fragment } from "react"
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


const Attendence = () => {
  const { t } = useTranslation();

  const DecisionData = [
    {
      name: "Date of birth",
      match: "Administrator",
      watchlist: "International Security Database",
      status: "Potential Positive",
    },
    {
      name: "Nationality",
      match: "Administrator",
      watchlist: "security database",
      status: "False Positive",
    },
    {
      name: "Gender",
      match: "Administrator",
      watchlist: "security database",
      status: "Potential Positive",
    },
    {
      name: "Country",
      match: "Administrator",
      watchlist: "security database",
      status: "Potential Positive",
    },
  ];



  return (
    <Fragment>

      <div className="">
        <h3 className="py-2">{t("Attendence")}</h3>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </span>
      </div>

      {/* button card section */}




      <div
        className="d-md-flex  d-block p-2 rounded"
        style={{ marginTop: "3rem", backgroundColor: "#FFFFFF" }}
      >
        <div>
          <button
            type="button"
            className=" btn border bg-white hover-bg-danger border rounded-4"

          >
            <span
              style={{ fontSize: "20px", marginRight: "" }} >
            </span>
            <span>Subject 01</span>
          </button>
        </div>
        <div className=" gap-5"></div>

        <div>
          <button
            type="button"
            className=" btn border bg-white hover-bg-danger border rounded-4 "
            style={{ marginLeft: "8px" }}
          >
            <span
              style={{ fontSize: "20px", marginRight: "" }} >
            </span>
            <span>Crieria 02</span>
          </button>
        </div>

        <div>
          <button
            type="button"
            className=" btn border bg-white hover-bg-danger border rounded-4 "
            style={{ marginLeft: "8px" }}
          >
            <span
              style={{ fontSize: "20px", marginRight: "" }} >
            </span>
            <span>Subject 03</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className=" btn border bg-white hover-bg-danger border rounded-4 "
            style={{ marginLeft: "8px" }}
          >
            <span
              style={{ fontSize: "20px", marginRight: "" }} >
            </span>
            <span>Subject 04</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className=" btn border bg-white hover-bg-danger border rounded-4 w-2"
            style={{ marginLeft: "8px", width: "100px" }}
          >
            <span
              style={{ fontSize: "20px", marginRight: "" }} >
            </span>
            <span className=" "><HiOutlinePlus /> </span>
          </button>
        </div>
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
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <th>{t("SORT BY")}</th>
              <th>{t("Date")}</th>
              <th>{t("STATUS")}</th>
              <th style={{ minWidth: '120px' }}> {t("ACTION")}</th>
            </tr>
          </thead>
          <tbody>
            {DecisionData.map(({ name, match, watchlist, status }) => (
              <tr>
                <td scope="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
                <td className="px-2 py-2">{name}</td>
                <td>{match}</td>
                <td>
                  {status === "Potential Positive" && (
                    <span className="rounded px-1  d-inline-block
                    d-inline-block" style={{ backgroundColor: " rgba(40, 199, 111, 0.16)", color: " rgba(40, 199, 111, 1)" }}>{status}</span>
                  )}

                  {status === "False Positive" && (
                    <span className="rounded px-1  d-inline-block
                    d-inline-block" style={{ backgroundColor: " rgba(255, 159, 67, 0.16)", color: " rgba(255, 159, 67, 1)" }}>{status}</span>
                  )}
                </td>
                <td className="  gap-1" style={{ fontSize: "17px" }}>
                  <span className="px-1">
                    <TbEdit />
                  </span>
                  <span>
                    <RiDeleteBinLine className="" />
                  </span>
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