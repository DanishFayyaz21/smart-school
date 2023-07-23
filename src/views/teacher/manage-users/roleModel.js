import React, { Fragment, useState, useEffect } from "react";

import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  CardHeader,
  CardTitle,
  Input,
  FormFeedback,
} from "reactstrap";

import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import avatar from "../../../assets/images/kyc-process/15.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { createRoleAsync } from "../../../redux/slices/role/roleSlice";
import { defaultValuesRoles } from "../defaultValues";
import { roleScehma } from "../validationSchema";

function RoleModel() {
  const dispatch = useDispatch();

  const {
    role: { roles },
  } = useSelector((store) => store);
 

  const { t } = useTranslation();


  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState("Add New");

  // ** Hooks
  const {
    reset,
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    defaultValues: defaultValuesRoles,
    resolver: yupResolver(roleScehma),
  });

  const onSubmit = (data) => {
    const res = dispatch(createRoleAsync(data))
    if(res.status){
      setShow(false);
      reset();
    }
  };

  const handleModalClosed = () => {
    setModalType("Add New");
    setValue("roleName");
    reset();
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
        <Button color="primary" className="text-nowrap mb-1">
          Add New Role
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
              <CardTitle tag="h4" className="text-center">
                Add New Role
              </CardTitle>
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
                    Role:
                  </label>
                  <Controller
                    id="role"
                    name="role"
                    className="mb-2"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        autoFocus
                        type="text"
                        placeholder="Enter Role"
                        //  style={{
                        //     padding: "15px 20px",
                        //     fontSize: "16px",
                        //  }}
                        invalid={errors.role ? true : false}
                        valid={!errors.role && dirtyFields.role ? true : false}
                      />
                    )}
                  />
                  {errors.role && (
                    <FormFeedback>{errors.role.message}</FormFeedback>
                  )}
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
                    Code:
                  </label>
                  <Controller
                    id="code"
                    name="code"
                    className="mb-2"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        autoFocus
                        type="text"
                        placeholder="Enter Code"
                        //  style={{
                        //     padding: "15px 20px",
                        //     fontSize: "16px",
                        //  }}
                        invalid={errors.code ? true : false}
                        valid={!errors.code && dirtyFields.code ? true : false}
                      />
                    )}
                  />
                  {errors.code && (
                    <FormFeedback>{errors.code.message}</FormFeedback>
                  )}
                </div>
              </div>

              <Col xs={12}>
                <Button color="primary" 
                className="me-1 mt-1 " 
                type="submit"
                onClick={() => {
                  setShow(false)
                }}
               
                >
                  Create
                </Button>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </Fragment>
    </div>
  );
}

export default RoleModel;
