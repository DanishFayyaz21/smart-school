import React, { Fragment, useState,useEffect } from "react";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  CardHeader,
  CardTitle,

} from "reactstrap";

import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import avatar from "../../../assets/images/kyc-process/15.png";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { createPermissionAsync } from "../../../redux/slices/permission/permissionSlice";

function PermissionModel() {

const dispatch = useDispatch();



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
      <Button color='primary' className="btn w-100 ">{t("Add Permission")}
                  </Button>
       
      </Link>

      <Fragment>
        <Modal
          isOpen={show}
          onClosed={handleModalClosed}
          toggle={() => setShow(!show)}
          className="modal-dialog-centered "
        >
          <ModalHeader
            className="bg-transparent"
            toggle={() => setShow(!show)}
          ></ModalHeader>
          <ModalBody className="px-5 pb-5">
            <CardHeader className="">
              <CardTitle tag="h4" className="text-center">Add Permission</CardTitle>
            </CardHeader>
        
            <Row tag="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex flex-column flex-md-row gap-2 justify-content-between mt-2">
                <div className="form-group w-100">
                  <label
                    className="input"
                    for="manage_page_role"
                    style={{
                      position: "absolute",
                      backgroundColor: "#fff",
                      marginTop: "-10px",
                      marginLeft: "7px",
                      padding: "0px 8px",
                      fontSize: "13px",
                    }}
                  >
                    Permission:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="manage_page_permission"
                    placeholder="Enter Permission"
                  />
                  {/* <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small> */}
                </div>
                <div class="form-group w-100">
                  <label
                    for="manage_page_code"
                    style={{
                      position: "absolute",
                      marginTop: "-10px",
                      marginLeft: "14px",
                      backgroundColor: "#fff",
                      padding: "0px 8px",
                      fontSize: "13px",
                    }}
                  >
                   Description:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="manage_page_description"
                    placeholder="Enter Description"
                  />
                </div>
              </div>
             

              <Col xs={12}>
                <Button color="primary" className="me-1 mt-1"
                onClick={() => {
                    dispatch(createPermissionAsync())
                    }}>
                Submit
                </Button>
             
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </Fragment>
    </div>
  );
}

export default PermissionModel;
