import { Fragment, useState } from "react";
import { Progress } from "reactstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  Row,
  Col,
  Form,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  FormFeedback,
  Badge,
  Alert,
  Table,
} from "reactstrap";

// ** Third Party Components
import Select from "react-select";
import Cleave from "cleave.js/react";
import { useForm, Controller } from "react-hook-form";
import "cleave.js/dist/addons/cleave-phone.us";
import { useTranslation } from "react-i18next";

const ScreeningReport = () => {
  const screenData = [
    {
      risk: "Content not available",
      details: "Content not available",
    },
    {
      risk: "Content not available",
      details: "Content not available",
    },
    {
      risk: "Content not available",
      details: "Content not available",
    },
  ];

  const { t } = useTranslation();

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
                className="  rounded-3 p-2"
                style={{ backgroundColor: "rgba(255, 159, 67, 0.16)" }}
              >
                <h4 className="text-warning">
                  {" "}
                  {t("Searching & Screening Data")}
                </h4>
                <div className="text-warning">
                  {" "}
                  {t("Content not available")}
                </div>
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
            <Col xs={12}>
              <Button
                color="primary"
                className="me-1 mt-1"
                onClick={() => setShow(true)}
              >
               {t("PROCEED TO ADD QUESTION")}
              </Button>
              <Button
                outline
                color="primary"
                className="mt-1 border border-primary"
              >
             {t("EDIT DETAILS")}
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <div className="py-1  ">
        <h4
          className="py-2 "
          style={{
            fontWeight: "500",
            lineHeight: "28px",
            fontStyle: "normal",
            fontSize: "24px",
          }}
        >
         {t("OTHER DETAILS")}
        </h4>
        <span className="py-2">
         {t("Each category (Basic, Professional, and Business) includes the four predefined roles shown below")}
        </span>
      </div>
      <Card>
        <CardTitle
          className="m-2 "
          tag="h4"
          style={{ fontWeight: "500", fontSize: "20px" }}
        >
         {t("KYC Screening")}
        </CardTitle>
        <Table responsive>
          <thead>
            <tr>
              <th style={{ color: "rgba(51, 48, 60, 0.87)" }}>{t("Risk Level")}</th>
              <th style={{ color: "rgba(51, 48, 60, 0.87)" }}>{t("Details")}</th>
              <th
                style={{ color: "rgba(51, 48, 60, 0.87)", minWidth: "120px" }}
              >
                {" "}
               {t("Action")}
              </th>
            </tr>
          </thead>
          <tbody>
            {screenData.map(({ risk, details, action }) => (
              <tr>
                <td>{t(risk)}</td>
                <td>{t(details)}</td>
                <td>
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

export default ScreeningReport;
