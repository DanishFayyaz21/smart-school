import React, { Fragment, useState } from "react";
// import { Input, Table } from "reactstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { TbEye } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePlus } from "react-icons/hi";
import { BsUpcScan } from "react-icons/bs";
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
  CardHeader,
  CardTitle,
  Form,
  Input,
  ButtonGroup,
} from "reactstrap";
import { Copy, User, UserCheck, UserPlus, UserX, Info } from "react-feather";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import avatar from "../../../assets/images/kyc-process/15.png";
import { useTranslation } from "react-i18next";

function UserModel() {
  const {t} = useTranslation();
  const [rSelected, setRSelected] = useState(1);

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
        <Button color="primary" className="btn w-100">
          {t("Create A New User")}
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
            <CardHeader className="py-2">
              <CardTitle tag="h4">Create a new user</CardTitle>
            </CardHeader>
            <div className="d-flex justify-content-between border-bottom py-2">
              <div className="d-flex">
                <div className="me-25">
                  <img
                    className="rounded me-50"
                    src={avatar}
                    alt="Generic placeholder image"
                    height="100"
                    width="100"
                  />
                </div>
                <div className="d-flex align-items-end ms-1 my-1 ">
                  <div>
                    <Button
                      tag={Label}
                      className="mb-75 me-75 px-2 py-1"
                      size="sm"
                      color="primary"
                    >
                      UPLOAD BUSINESS LOGO
                      <Input type="file" hidden accept="image/*" />
                    </Button>
                    {/* <Button className='mb-75 px-2 py-1' color='primary' size='sm' outline>
                    RESET
                  </Button> */}
                    <BsUpcScan
                      className="mx-1 fw-bolder"
                      style={{ marginBottom: "9px" }}
                      color="secondary"
                      size={30}
                    />
                    <p className="mb-0">
                      Allowed PNG or JPEG. Max size of 800K.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-1">
                {/* <Button tag={Label}  className='px-2 py-1' size='sm' color='danger'>
                SCAN DETAILS VIA OCR
              </Button> */}
                <Input className=" w-100" type="select">
                  <option value="" style={{ fontSize: "12px" }}>
                    Select User{" "}
                  </option>{" "}
                  caret
                  <option value="downloaded">Downloaded</option>
                </Input>
              </div>
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
                    Business Name::
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="register_page_username"
                    placeholder="xxx-xxx-xxx"
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
                    Registation Name:
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="register_page_email"
                    placeholder="xxx-xxx-xxx"
                  />
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row gap-2 justify-content-between mt-2">
                <div class="form-group w-100">
                  <label
                    for="user-phone"
                    style={{
                      position: "absolute",
                      backgroundColor: "#fff",
                      marginTop: "-10px",
                      marginLeft: "7px",
                      padding: "0px 8px",
                      fontSize: "13px",
                    }}
                  >
                    Phone:
                  </label>

                  <input
                    type="dob"
                    class="form-control"
                    id="user-phone"
                    placeholder="xxx-xxx-xxx"
                  />
                </div>
                <div class="form-group w-100">
                  <label
                    for="user-city"
                    style={{
                      position: "absolute",
                      marginTop: "-10px",
                      marginLeft: "7px",
                      backgroundColor: "#fff",
                      padding: "0px 8px",
                      fontSize: "13px",
                    }}
                  >
                    City,Country:
                  </label>
                  <input
                    type="phone"
                    class="form-control"
                    id="user-city"
                    placeholder="xxx-xxx-xxx"
                  />
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row gap-2 justify-content-between mt-2">
                <div class="form-group w-100 ">
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
                  {t("Email")}
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    id="register_page_profile_link"
                    placeholder="xxx-xxx-xxx"
                  />
                </div>
                <div class="form-group w-100 ">
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
                    Password:
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    id="register_page_profile_link"
                    placeholder="xxx-xxx-xxx"
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
                  Business Details:
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="register_page_profile_link"
                  placeholder="xxx-xxx-xxx"
                />
              </div>
              <Col className="w-100 justify-content-between mt-1">
                {/* <ButtonGroup className="px-1 mt-2 bg-white  "> */}
                <Button
                  className="border rounded-3 "
                  style={{
                    marginRight: "10px",
                    fontSize: "10px",
                  }}
                  outline
                  onClick={() => setRSelected(1)}
                  active={rSelected === 1}
                >
                  Upload Store Front Image
                  <HiOutlinePlus className="" />
                </Button>
                <Button
                  className="border rounded-3"
                  style={{
                    marginRight: "10px",
                    fontSize: "10px",
                  }}
                  //   color="primary"
                  outline
                  onClick={() => setRSelected(2)}
                  active={rSelected === 2}
                >
                  Upload Registration Document
                  <HiOutlinePlus className="" />
                </Button>
                <Button
                  className="border rounded-3"
                  style={{
                    fontSize: "10px",
                  }}
                  //   color="primary"
                  outline
                  onClick={() => setRSelected(3)}
                  active={rSelected === 3}
                >
                  Upload other Document
                  <HiOutlinePlus className="" />
                </Button>
                {/* </ButtonGroup> */}
              </Col>

              <Col xs={12}>
                <Button color="primary" className="me-1 mt-1">
                  CREATE USER
                </Button>
                <Button color="primary" outline className="mt-1  ">
                  RESET
                </Button>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </Fragment>
    </div>
  );
}

export default UserModel;
