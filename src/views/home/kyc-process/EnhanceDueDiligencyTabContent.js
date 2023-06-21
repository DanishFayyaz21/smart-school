import { Fragment, useState } from "react";
import { Progress } from "reactstrap";

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

const EnhanceDueDiligency = () => {
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
               GO TO DASHBOARD
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
          {t("Enhance Due Diligence Questions")}
        </h4>
        <span className="py-2">
          {t(
            "Each category (Basic, Professional, and Business) includes the four predefined roles shown below"
          )}
        </span>
      </div>

      <Card>
        <CardHeader className="border-bottom">
          <CardTitle
            className=""
            tag="h4"
            style={{ fontWeight: "500", fontSize: "18px", lineHeight: "24px" }}
          >
            {t("Account Details & Screening Analysis")}
          </CardTitle>
        </CardHeader>
        <CardBody className="my-2 py-50">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md="6" className="mb-1">
                <Input
                  className="py-1"
                  id=""
                  name=""
                  placeholder={t("Source of Income")}
                />
              </Col>
              <Col md="6" className="mb-1">
                <Input
                  className="py-1"
                  id=""
                  name=""
                  placeholder={t("Source of Additional income, if any")}
                />
              </Col>

              <Col md="6" className="mb-1">
                <Input
                  className="py-1"
                  id=""
                  name=""
                  placeholder={t(
                    "Hits generated and the association with the customer"
                  )}
                />
              </Col>

              <Col md="6" className="mb-1">
                <Input
                  className="py-1"
                  id=""
                  name=""
                  placeholder={t(
                    "Adverse news and the association with the customer"
                  )}
                />
              </Col>

              <Col xs="12" className="mt-2">
                <Button type="submit" className="me-1" color="primary">
                  {t("SAVE & CONTINUE")}
                </Button>
                <Button
                  className="border border-primary"
                  type="reset"
                  color="primary"
                  outline
                >
                  {t("Reset")}
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default EnhanceDueDiligency;
