import { Fragment, useState } from "react";
import { Progress } from "reactstrap";
import { CiExport, CiCircleAlert } from "react-icons/ci";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import {CiCircleAlert} from './react-icons/ci'
// ** Reactstrap Imports
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

// ** Third Party Components
import Select from "react-select";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.us";
import { useForm, Controller } from "react-hook-form";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import { useTranslation } from "react-i18next";
import KycModal from "./Modal/kyc-model";

const countryOptions = [
  { value: "uk", label: "UK" },
  { value: "usa", label: "USA" },
  { value: "france", label: "France" },
  { value: "russia", label: "Russia" },
  { value: "canada", label: "Canada" },
];

const defaultValues = {
  companyName: "",
  billingEmail: "",
};

const TransactionReporting = () => {
  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      return null;
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: "manual",
          });
        }
      }
    }
  };

  const TransactionData = [
    {
      name: "Lorem ipsm",
      descripton: "City,Country",
      id: "#1122",
      watchlist: "security database",
      hit: "Potential Positive",
    },
    {
      name: "Lorem ipsm",
      descripton: "City,Country",
      id: "#1122",
      watchlist: "security database",
      hit: "False Positive",
    },
    {
      name: "Lorem ipsm",
      descripton: "City,Country",
      id: "#1122",
      watchlist: "security database",
      hit: "Potential Positive",
    },
    {
      name: "Lorem ipsm",
      descripton: "City,Country",
      id: "#1122",
      watchlist: "security database",
      hit: "Potential Positive",
    },
  ];
const {t} = useTranslation();
  return (
    <Fragment>
      <Card>
        {/* <CardHeader className="">
          <CardTitle tag="h4">FirstName LastName</CardTitle>
        </CardHeader> */}
        <CardBody className="my-2 py-25">
          <Row>
            <Col md="6">
              <div className="mb-2 pb-50">
                <CardTitle
                  tag="h4"
                  style={{ fontWeight: "500", fontSize: "18px" }}
                >
                  {t("FirstName LastName")}
                </CardTitle>
                <h5
                  style={{
                    color: " rgba(51, 48, 60, 0.87)",
                    fontWeight: "550",
                    fontSize: "14px",
                    lineHeight: "19px",
                    fontStyle: "normal",
                  }}
                >
                  {t("ID or Passport Number")}
                </h5>
                <span>{t("Date of Birth:")}</span>
              </div>
              <div className="mb-2 pb-50">
                <h5
                  style={{
                    color: " rgba(51, 48, 60, 0.87)",
                    fontWeight: "550",
                    fontSize: "14px",
                    lineHeight: "19px",
                    fontStyle: "normal",
                  }}
                >
                  {t("Email or Contact Number")}
                </h5>
                <span>{t("Address, City, Country")}</span>
              </div>
              <div className="mb-2 mb-md-1">
                <h5
                  style={{
                    color: " rgba(51, 48, 60, 0.87)",
                    fontWeight: "550",
                    fontSize: "14px",
                    lineHeight: "19px",
                    fontStyle: "normal",
                  }}
                >
                  {t("Decision Criterion")}
                  <Badge color="light-primary" className="ms-50">
                    {t("Change Screening Priority")}
                  </Badge>
                </h5>
                <span style={{ fontWeight: "400" }}>
                  {t("Content not available")}
                </span>
              </div>
            </Col>
            <Col md="6">
              <div
                className=" "
                style={{
                  padding: "15px",
                  backgroundColor: "rgba(234, 84, 85, 0.16)",
                  borderRadius: "10px",
                }}
              >
                <h4
                  className=""
                  style={{
                    color: "rgba(234, 84, 85, 1)",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  {t("Searching & Screening Data")}
                </h4>
                <h5 className="text-danger" style={{}}>
                  {t("Content not available")}
                </h5>
              </div>
              <div className="plan-statistics pt-1">
                <div className="d-flex justify-content-between">
                  <h5
                    className="fw-bolder"
                    style={{
                      fontWeight: "500",
                      fontStyle: "normal",
                      fontSize: "14px",
                    }}
                  >
                    {t("Risk Level")}
                  </h5>
                  <h5
                    className="fw-bolder"
                    style={{
                      fontWeight: "500",
                      fontStyle: "normal",
                      fontSize: "14px",
                    }}
                  >
                    {t("Medium")}
                  </h5>
                </div>
                <Progress className="mb-50" value={75} />
                {/* <p className='mt-50'>4 days remaining until your plan requires update</p> */}
              </div>
              <div className="mt-2" style={{ color: "rgba(51, 48, 60, 0.6)" }}>
                <span>{t("Content not available")}</span>
                <li
                  className="mt-1 px-2"
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "25px",
                  }}
                >
                  {t("Content not available")}
                </li>
                <li
                  className=" px-2"
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "25px",
                  }}
                >
                  {t("Content not available")}
                </li>
                <li
                  className=" px-2"
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "25px",
                  }}
                >
                  {t("Content not available")}
                </li>
              </div>
            </Col>
            <Col className="d-md-flex d-block" xs={12}>
              <Button
                color="primary"
                className="me-1 mt-1"
                onClick={() => setShow(true)}
              >
                {t("DOWNLOAD PDF")}
              </Button>
              <Button outline color="primary" className="mt-1 border border-primary">
              REPORT TO AUTHORITIES
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <div className="py-2  ">
        <h4
          className="py-2 "
          style={{ fontWeight: "500", fontSize: "23px", lineHeight: "28px" }}
        >
         {t("Detailed Report & Search Results")}
        </h4>
        <span className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut..
        </span>
      </div>
      {/* button card section */}
      <Card>
        {/* <Row> */}
        <Col className="d-flex flex-column flex-sm-row gap-2 justify-content-between p-2 rounded">
          {/* <div>
          <Button
          outline block
          >
            <span className="me-1">
              <CiExport size={20} />
            </span>
            <span>Export</span>
          </Button>
        </div> */}
          <div className="d-flex flex-column flex-md-row gap-1">
            <div>
              <Input
                id="search-invoice"
                className=" me-2 "
                type="text"
                placeholder={t("Search HIT Assessment")}
              />
            </div>
            <div>
              <Input className=" w-100" type="select">
                <option value="">{t("Filter by")}</option> 
                <option value="downloaded">{t("Downloaded")}</option>
              </Input>
            </div>
          </div>
        </Col>
        {/* </Row> */}
      </Card>

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
              <th scope="col">{t("Transaction name")}</th>
              <th scope="col">{t("Transaction id")}</th>
              <th scope="col"> {t("Watchlist type")}</th>
              <th scope="col"> {t("Hit Assessment")}</th>
              <th scope="col" style={{ minWidth: "120px" }}>
                {t("Action")}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {TransactionData.map(({ name, descripton, id, watchlist, hit }) => (
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
                <td className="">
                  <span className="d-block table_customer_hading">{t("name")}</span>
                  <span className="d-block  table_risk_description">
                    {t("description")}
                  </span>
                </td>
                <td>{id}</td>
                <td>{t(watchlist)}</td>
                <td>
                  {hit === "Potential Positive" && (
                    <span
                      className="rounded px-1  d-inline-block
                    d-inline-block"
                      style={{
                        backgroundColor: " rgba(40, 199, 111, 0.16)",
                        color: " rgba(40, 199, 111, 1)",
                      }}
                    >
                      {t(hit)}
                    </span>
                  )}

                  {hit === "False Positive" && (
                    <span
                      className="rounded px-1  d-inline-block
                    d-inline-block"
                      style={{
                        backgroundColor: " rgba(255, 159, 67, 0.16)",
                        color: " rgba(255, 159, 67, 1)",
                      }}
                    >
                      {t(hit)}
                    </span>
                  )}
                </td>
                <td className="">
                  {/* <span className="px-1">
                    <TbEdit />
                  </span>
                  <span>
                    <RiDeleteBinLine size={17} className="" />
                  </span> */}
                  <span className="px-1">
                    <AiOutlineInfoCircle size={17} className="" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Fragment>
  );
};

export default TransactionReporting;
