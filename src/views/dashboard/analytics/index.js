import { useContext, useState } from "react";
import { ThemeColors } from "@src/utility/context/ThemeColors";

// ** Reactstrap Imports
import { Row, Col, Table, Button } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";

import CustomerScreenedCard from "../../../@core/components/dashboard/CustomerScreenedCard";
import SystemConnectivityCard from "../../../@core/components/dashboard/SystemConnectivityCard";
import DashboardMainCard from "../../../@core/components/dashboard/DashboardMainCard";
import Model from "../../admin/customer-directory/Models/index";
import { useTranslation } from "react-i18next";

const AnalyticsDashboard = () => {
  
  const {t} = useTranslation();
  // ** Context
  const { colors } = useContext(ThemeColors);

  // ** Vars
  const BusinessData = [
    {
      name: "First Last Name",
      description: "City,Country",
      email: "username@gmail.com",
      level: "High",
      level_id: "#621234AML",
      status: "Verified",
    },
    {
      name: "First Last Name",
      description: "City,Country",
      email: "username@gmail.com",
      level: "Medium",
      level_id: "#621234AML",
      status: "EDD",
    },
    {
      name: "First Last Name",
      description: "City,Country",
      email: "username@gmail.com",
      level: "Low",
      level_id: "#621234AML",
      status: "Screening",
    },
    {
      name: "First Last Name",
      description: "City,Country",
      email: "username@gmail.com",
      level: "High",
      level_id: "#621234AML",
      status: "Screening",
    },
    {
      name: "First Last Name",
      description: "City,Country",
      email: "username@gmail.com",
      level: "Medium",
      level_id: "#621234AML",
      status: "Verified",
    },
    {
      name: "First Last Name",
      description: "City,Country",
      email: "username@gmail.com",
      level: "Low",
      level_id: "#621234AML",
      status: "Screening",
    },
  ];

  return (
    <div id="dashboard-analytics">
      <Row>
        <Col lg="6" sm="12">
          <DashboardMainCard />
        </Col>
        <Col lg="3" sm="6">
          <SystemConnectivityCard />
        </Col>
        <Col lg="3" sm="6">
          <CustomerScreenedCard />
        </Col>
      </Row>
      {/* <Row className="match-height bg-danger p-2">
        <Col lg="6" xs="12">
          <AvgSessions primary={colors.primary.main} />
        </Col>
        <Col lg="6" xs="12">
          <SupportTracker
            primary={colors.primary.main}
            danger={colors.danger.main}
          />
        </Col>
      </Row> */}
      {/* <Row className='match-height'>
        <Col lg='4' xs='12'>
          <Card className='card-user-timeline'>
            <CardHeader>
              <div className='d-flex align-items-center'>
                <List className='user-timeline-title-icon' />
                <CardTitle tag='h4'>User Timeline</CardTitle>
              </div>
            </CardHeader>
            <CardBody>
              <Timeline className='ms-50 mb-0' data={data} />
            </CardBody>
          </Card>
        </Col>
        <Col lg='4' md='6' xs='12'>
          <Sales primary={colors.primary.main} info={colors.info.main} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardAppDesign />
        </Col>
      </Row> */}
      <Row className="match-height">
        <Col xs="12">
          {/* <InvoiceList /> */}
          {/* Table section */}
          <div
            className=" w-100 d-flex flex-md-row flex-column gap-1 justify-content-between align-items-center p-2 rounded"
            style={{ marginTop: "3rem", backgroundColor: "#FFFFFF" }}
          >
            <div>
              <span className="k_font  fw-bold">{t("KYC Process")}</span>
            </div>

            <div>
              {/* <Button style={{ background: "rgba(10, 17, 114, 1)" }}>
                SCREEN A CUSTOMER
              </Button> */}
              <Model />
            </div>
          </div>
        </Col>
        <Col xs="12">
          {/* <InvoiceList /> */}
          {/* Table section */}
          <div className="mt-7">
            <Table responsive>
              <thead>
                <tr>
                  <th scope="col">{t("Customer Name")}</th>
                  <th scope="col">{t("Risk Level")}</th>
                  <th scope="col">{t("STATUS")}</th>
                  <th scope="col" style={{ minWidth: "120px" }}>
                    {t("ACTION")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {BusinessData.map(
                  ({ name, description, level, level_id, status }) => (
                    <tr key={level_id}>
                      <td className="">
                        <span className="d-block  table_customer_hading">
                          {" "}
                          {name}
                        </span>
                        <span className="d-block table_risk_description">
                          {" "}
                          {description}
                        </span>
                      </td>
                      <td>
                        <span className="d-block table_risk_hading">
                          {level}
                        </span>
                        <span className="d-block table_risk_description">
                          {level_id}
                        </span>
                      </td>
                      <td className="">
                        {status === "Verified" && (
                          <div
                            className="table_status_verified"
                            // style={{
                            //   backgroundColor: "rgba(40, 199, 111, 0.16)",
                            //   color: "rgba(40, 199, 111, 1)",
                            // }}
                          >
                            <span className="table_status_verified_child">
                              {status}
                            </span>
                          </div>
                        )}

                        {status === "EDD" && (
                          <div
                            className="table_status_edd"
                            // style={{
                            //   backgroundColor: "rgba(255, 159, 67, 0.16)",
                            //   color: "rgba(255, 159, 67, 1)",
                            // }}
                          >
                            <span className="table_status_edd_child">
                              {" "}
                              {status}{" "}
                            </span>
                          </div>
                        )}
                        {status === "Screening" && (
                          <div
                            className="table_status_secreenning"
                            // style={{
                            //   backgroundColor: "rgba(255, 159, 67, 0.16)",
                            //   color: "rgba(255, 159, 67, 1)",
                            // }}
                          >
                            <span className="table_status_secreenning_child">
                              {status}
                            </span>
                          </div>
                        )}
                      </td>
                      <td>
                        <span>
                          <TbEdit size={17} />
                        </span>
                        <span className="px-1">
                          <RiDeleteBinLine size={17} />
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AnalyticsDashboard;
