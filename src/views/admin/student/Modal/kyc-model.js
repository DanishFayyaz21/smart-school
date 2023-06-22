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
import AlertModal from "./alertregulatory-modal";
import FormModal from "./formsubmission-modal";
import { useTranslation } from "react-i18next";

// import avatar from '../../../assets/images/kyc-process/15.png'

function KycModal() {
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
    reset({});
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
        <Button outline color="primary" className="mt-1 border border-primary">
          {t("CANCEL SCREENING")}
        </Button>
        {/* <span  style={{color:"rgba(168, 170, 174, 1)" , fontWeight:"400",fontSize:"12px",lineHeight:"5px"}} className='fw-bolder'>Edit Role</span> */}
      </Link>

      <Fragment>
        <Modal
          isOpen={show}
          onClosed={handleModalClosed}
          toggle={() => setShow(!show)}
          className="modal-dialog-centered  "
        >
          <ModalHeader
            className="bg-transparent"
            toggle={() => setShow(!show)}
          ></ModalHeader>
          <ModalBody className="px-5 pb-5">
            <CardHeader className="py-2">
              <CardTitle
                tag="h4"
                className=""
                style={{ color: " rgba(77, 75, 85, 1)", fontWeight: "600" }}
              >
                Cancel Screening
              </CardTitle>
            </CardHeader>

            <Row tag="form" onSubmit={handleSubmit(onSubmit)}>
              <p>Are You Sure You Want to Cancel Screening ?</p>

              <Col xs={12} className="d-md-flex d-block">
                {/* <Button
                color="primary"
                outline
                className="me-1 mt-1"
   
              >
                Alert to Regulatory User
              </Button> */}
                <AlertModal />
                <FormModal />
                <Button
                  className="mt-1 bg-danger text-white border-white "
                  onClick={(e) => {
                    e.preventDefault();
                    setModalType("Edit");
                    setShow(false);
                  }}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </Fragment>
    </div>
  );
}

export default KycModal;
