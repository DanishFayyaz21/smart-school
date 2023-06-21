import React, { useEffect } from "react";
import { Col, Row, Table } from "reactstrap";

import {
  Card,
  DropdownToggle,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getActivityAsync } from "../../../redux/slices/home/activitySlice";


const Activity = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const  {activity: {activities}} = useSelector((store) => store);

  useEffect(() => {
    dispatch(getActivityAsync());
  }, [dispatch]);

  return (
    <div>
      {/* heading section */}
      <div>
        <h1
          className="py-1"
          style={{
            color: "rgba(10, 17, 114, 1)",
            fontWeight: "700",
            fontSize: "24",
          }}
        >
          {t("Activity")}
        </h1>
        <span
          style={{
            color: "rgba(77, 75, 85, 0.6)",
            fontWeight: "700",
            fontSize: "13px",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eius
          nostrum quae? Nihil optio, omnis odit numquam quod nemo repellendus
          blanditiis quo expedita placeat.
        </span>
      </div>
      {/* buttons card section */}
      {/* <div
        className="d-md-flex d-block p-2 rounded "
        style={{ marginTop: "3rem", backgroundColor: "#FFFFFF" }}
      >
        <div className=" gap-5">
        
        <div className="mx-1 ">
          <Input className="w-auto " type="select">
            <option value="">All action</option>
            <option value="downloaded">Downloaded</option>
            <option value="draft">Draft</option>
            
          </Input>
        </div>
      </div>
      <div className=" gap-5 ">
        
        <div  style={{fontWeight:"700", fontSize: "16px", color:"rgba(77, 75, 85, 0.6)"}}>
          <Input className="w-auto " type="select">
            <option value="">Everyone</option>
            <option value="downloaded">Downloaded</option>
            <option value="draft">Draft</option>
          </Input>
        </div>
      </div>
        <div className=" gap-5 mx-1">
        
          <div>
            <Input className="w-auto " type="select">
              <option value="">Newest</option>
              <option value="downloaded">Downloaded</option>
              <option value="draft">Draft</option>
             
            </Input>
          </div>
        </div>
      </div> */}
      <Card className="my-1">
        <Row className="">
          <Col className="">
            <DropdownToggle
              outline
              caret
              className="mx-1 my-1 rounded"
              style={{
                color: "rgba(77, 75, 85, 0.6)",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              {t("All action")}
            </DropdownToggle>

            <DropdownToggle
              outline
              caret
              className=" mx-1 rounded"
              style={{
                color: "rgba(77, 75, 85, 0.6)",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              {t("Everyone")}
            </DropdownToggle>

            <DropdownToggle
              outline
              caret
              className="mx-1 my-1 rounded"
              style={{
                color: "rgba(77, 75, 85, 0.6)",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              {t("Newest")}
            </DropdownToggle>
          </Col>
        </Row>
      </Card>
      {/* Table section */}
      <div className="mt-7">
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
              <th
                scope="col"
                style={{
                  color: "rgba(77, 75, 85, 1)",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "14px",
                }}
              >
                {t("ACTION")}
              </th>
              <th
                scope="col"
                style={{
                  color: "rgba(77, 75, 85, 1)",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "14px",
                }}
              >
                {t("EDITOR")}
              </th>
              <th
                scope="col"
                style={{
                  color: "rgba(77, 75, 85, 1)",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "14px",
                }}
              >
                {t("DATE")}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {activities?.map(({ action, editor, date }) => (
              <tr>
                <th scope="row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
                <td className="px-2 py-2">{action}</td>
                <td>
                  <spna
                    className="d-block table_customer_hading"
                    style={{ fontSize: "14px" }}
                  >
                    {editor}
                  </spna>
                  {/* <span className="d-block table_risk_description">{id}</span> */}
                </td>
                <td>{date}</td>
                {/* <td >
                  <span>
                    <TbEdit size={17}/>
                  </span>
                  <span className="px-1">
                    <RiDeleteBinLine size={17} className="text-primary" />
                  </span>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Activity;
