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
import AssignClasses from '../../admin/assignClasses'

import { useTranslation } from "react-i18next";

const AnalyticsDashboard = () => {

  const { t } = useTranslation();
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
        <Col lg="12" sm="12">
          <DashboardMainCard />
        </Col>
        {/* <Col lg="3" sm="6">
          <SystemConnectivityCard />
        </Col>
        <Col lg="3" sm="6">
          <CustomerScreenedCard />
        </Col> */}
      </Row>
      <AssignClasses />

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

    </div>
  );
};

export default AnalyticsDashboard;
