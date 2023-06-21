import { Fragment, useState } from "react";
import { Progress } from "reactstrap";

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
} from "reactstrap";

// ** Third Party Components
import Select from "react-select";
import Cleave from "cleave.js/react";
import { useForm, Controller } from "react-hook-form";
import "cleave.js/dist/addons/cleave-phone.us";
import KycModal from "./Modal/kyc-model";
import { useTranslation } from "react-i18next";

const KycScreening = () => {
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
                className=" "
                style={{
                  padding: "15px",
                  backgroundColor: "#F1F0F2",
                  borderRadius: "10px",
                }}
              >
                <h4
                  className=""
                  style={{
                    color: " rgba(78, 75, 85, 1)",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  {t("Searching & Screening Data")}
                </h4>
                <h5 className="" style={{}}>
                  {t("Content not available")}
                </h5>
              </div>
              <div className="plan-statistics pt-1">
                <div className="d-flex justify-content-between">
                  <h5 className="fw-bolder">{t("Loading")}</h5>
                  <h5 className="fw-bolder">75%</h5>
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
                {t("Edit Details")}
              </Button>
              {/* <Button outline color="primary" className="mt-1 border border-primary">
                CANCEL SCREENING
              </Button> */}
              <KycModal />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default KycScreening;
