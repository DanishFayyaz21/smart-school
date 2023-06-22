import React, { Fragment, useState } from "react";
import { Input, Table } from "reactstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { TbEye } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";

// import { Button, Table } from 'reactstrap'

import {
  Button,
  Card,
  CardBody,
  Col,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Badge,
} from "reactstrap";
import { Copy, User, UserCheck, UserPlus, UserX, Info } from "react-feather";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Model() {
  const TransactionData = [
    {
      name: "lorem ipsm",
      id: "#1122",
      watchlist: "security database",
      hit: "Potential Positive",
    },
    {
      name: "lorem ipsm",
      id: "#1122",
      watchlist: "security database",
      hit: "False Positive",
    },
    {
      name: "lorem ipsm",
      id: "#1122",
      watchlist: "security database",
      hit: "Potential Positive",
    },
    {
      name: "lorem ipsm",
      id: "#1122",
      watchlist: "security database",
      hit: "Potential Positive",
    },
  ];

  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState("Add New");

  // ** Hooks
  const {
    reset,
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { roleName: "" } });

  const onSubmit = (data) => {
    if (data.roleName.length) {
      setShow(false);
    } else {
      setError("roleName", {
        type: "manual",
      });
    }
  };

  const onReset = () => {
    setShow(false);
    reset({ roleName: "" });
  };

  const handleModalClosed = () => {
    setModalType("Add New");
    setValue("roleName");
  };

  const { t } = useTranslation();
  return (
    <div>
      <Link
        to="/"
        className="role-edit-modal"
        onClick={(e) => {
          e.preventDefault();
          setModalType("Edit");
          setShow(true);
        }}
      >
        <Button style={{ background: "rgba(10, 17, 114, 1)" }}>
          {t("SCREEN A CUSTOMER")}
        </Button>
        {/* <span  style={{color:"rgba(168, 170, 174, 1)" , fontWeight:"400",fontSize:"12px",lineHeight:"5px"}} className='fw-bolder'>Edit Role</span> */}
      </Link>

      <Fragment>
        <Modal
          isOpen={show}
          onClosed={handleModalClosed}
          toggle={() => setShow(!show)}
          className="modal-dialog-centered modal-lg "
        >
          <ModalHeader
            className="bg-transparent"
            toggle={() => setShow(!show)}
          ></ModalHeader>
          <ModalBody className="px-5 pb-5">
            <div className=" mb-1">
              <h1 style={{ fontWeight: "500", fontSize: "20px" }}>
                {" "}
                FirstName LastName
              </h1>
            </div>
            <Row tag="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex flex-column flex-md-row gap-2 justify-content-between mt-2">
                <div className="form-group w-100">
                  <label
                    className="input"
                    for="register_page_username"
                    style={{
                      position: "absolute",
                      backgroundColor: "#fff",
                      marginTop: "-10px",
                      marginLeft: "7px",
                      padding: "0px 8px",
                      fontSize: "13px",
                    }}
                  >
                    ID or Passport Number:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="register_page_username"
                    placeholder="#6322522"
                  />
                  {/* <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small> */}
                </div>
                <div class="form-group w-100">
                  <label
                    for="register_page_email"
                    style={{
                      position: "absolute",
                      marginTop: "-10px",
                      marginLeft: "14px",
                      backgroundColor: "#fff",
                      padding: "0px 8px",
                      fontSize: "13px",
                    }}
                  >
                    {t("Email")}
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="register_page_email"
                    placeholder="dummy@email.com"
                  />
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row gap-2 justify-content-between mt-2">
                <div class="form-group w-100">
                  <label
                    for="register_page_password"
                    style={{
                      position: "absolute",
                      backgroundColor: "#fff",
                      marginTop: "-10px",
                      marginLeft: "7px",
                      padding: "0px 8px",
                      fontSize: "13px",
                    }}
                  >
                    Date of Birth:
                  </label>

                  <input
                    type="dob"
                    class="form-control"
                    id="register_page_password"
                    placeholder="02-03-2023"
                  />
                </div>
                <div class="form-group w-100">
                  <label
                    for="register_page_conf_password"
                    style={{
                      position: "absolute",
                      marginTop: "-10px",
                      marginLeft: "7px",
                      backgroundColor: "#fff",
                      padding: "0px 8px",
                      fontSize: "13px",
                    }}
                  >
                    Contact Number:
                  </label>
                  <input
                    type="phone"
                    class="form-control"
                    id="register_page_conf_password"
                    placeholder="+00 0000 000 000"
                  />
                </div>
              </div>
              <div class="form-group w-100 mt-2">
                <label
                  for="register_page_profile_link"
                  style={{
                    position: "absolute",
                    backgroundColor: "#fff",
                    marginTop: "-10px",
                    marginLeft: "7px",
                    padding: "0px 8px",
                    fontSize: "13px",
                  }}
                >
                  Addresss:
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="register_page_profile_link"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>
            </Row>

            <h5
              className="py-2"
              style={{
                color: "rgba(77, 75, 85, 1)",
                fontWeight: "550",
                fontSize: "14px",
                lineHeight: "19px",
                fontStyle: "normal",
              }}
            >
              Status{" "}
              <Badge
                color="light-primary"
                className="ms-50"
                style={{ backgroundColor: "rgba(22, 41, 245, 0.05)" }}
              >
                Lorem ipsum dolor sit amet
              </Badge>
            </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="my-1  ">
              <h4
                className="py-1 "
                style={{
                  fontWeight: "500",
                  fontSize: "23px",
                  lineHeight: "28px",
                }}
              >
                Detailed Report & Search Results
              </h4>
              <span className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </span>
            </div>

            {/* button card section */}
            {/* <Card> */}
            {/* <Row> */}
            <Col className="d-flex flex-column flex-sm-row justify-content-between p-2 rounded">
              <div className="d-flex flex-column flex-md-row gap-1">
                <div>
                  <Input
                    id="search-invoice"
                    className=""
                    type="text"
                    placeholder="Search HIT Assessment"
                  />
                </div>
                <div>
                  <Input className=" w-100" type="select">
                    <option value="">Filter</option> caret
                    <option value="downloaded">Downloaded</option>
                  </Input>
                </div>
              </div>
            </Col>
            {/* </Row> */}
            {/* </Card> */}

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
                    <th style={{ color: " rgba(51, 48, 60, 0.87)" }}>
                      Transaction name
                    </th>
                    <th style={{ color: " rgba(51, 48, 60, 0.87)" }}>
                      Transaction id
                    </th>
                    <th style={{ color: " rgba(51, 48, 60, 0.87)" }}>
                      {" "}
                      Watchlist type
                    </th>
                    <th style={{ color: " rgba(51, 48, 60, 0.87)" }}>
                      {" "}
                      Hit Assessment
                    </th>
                    <th
                      style={{
                        color: " rgba(51, 48, 60, 0.87)",
                        minWidth: "120px",
                      }}
                    >
                      {" "}
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TransactionData.map(({ name, id, watchlist, hit }) => (
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
                      <td>{id}</td>
                      <td>{watchlist}</td>
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
                            {hit}
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
                            {hit}
                          </span>
                        )}
                      </td>
                      <td className="">
                        <span className="px-1">
                          <TbEye />
                        </span>
                        <span>
                          <FiDownload size={17} className="" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
            <Button>Submit</Button>
          </ModalBody>
        </Modal>
      </Fragment>
    </div>
  );
}

export default Model;
