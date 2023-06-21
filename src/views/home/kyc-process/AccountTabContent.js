// ** React Imports
import { Fragment, useState } from "react";

// ** Third Party Components
import Select from "react-select";
import Cleave from "cleave.js/react";
import { useForm, Controller } from "react-hook-form";
import "cleave.js/dist/addons/cleave-phone.us";
import { useDropzone } from "react-dropzone";
import { FileText, X, DownloadCloud } from "react-feather";

import avatar from "../../../assets/images/kyc-process/15.png";
import { CgSoftwareUpload } from "react-icons/cg";

// ** Reactstrap Imports
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
  ListGroup,
  ListGroupItem,
} from "reactstrap";

// ** Utils
import { selectThemeColors } from "@utils";
import { width } from "dom7";
import { color } from "d3-color";
import { useTranslation } from "react-i18next";

const countryOptions = [
  { value: "uk", label: "UK" },
  { value: "usa", label: "USA" },
  { value: "france", label: "France" },
  { value: "russia", label: "Russia" },
  { value: "canada", label: "Canada" },
];

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "no_respond", label: "Prefer not to respond" },
];

const AccountTabs = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles.map((file) => Object.assign(file))]);
    },
  });
  const renderFilePreview = (file) => {
    if (file.type.startsWith("image")) {
      return (
        <img
          className="rounded"
          alt={file.name}
          src={URL.createObjectURL(file)}
          height="28"
          width="28"
        />
      );
    } else {
      return <FileText size="28" />;
    }
  };

  const handleRemoveFile = (file) => {
    const uploadedFiles = files;
    const filtered = uploadedFiles.filter((i) => i.name !== file.name);
    setFiles([...filtered]);
  };

  const renderFileSize = (size) => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`;
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`;
    }
  };

  const onSubmit = (data) => console.log(data);
  // ** Hooks
  const defaultValues = {
    lastName: "",
    firstName: "",
  };
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  /*
  // ** States
  const [avatar, setAvatar] = useState(data.avatar ? data.avatar : '')

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  } 

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      return null
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  const handleImgReset = () => {
    setAvatar('@src/assets/images/avatars/avatar-blank.png')
  } */

  const fileList = files.map((file, index) => (
    <ListGroupItem
      key={`${file.name}-${index}`}
      className="d-flex align-items-center justify-content-between"
    >
      <div className="file-details d-flex align-items-center">
        <div className="file-preview me-1">{renderFilePreview(file)}</div>
        <div>
          <p className="file-name mb-0">{file.name}</p>
          <p className="file-size mb-0">{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button
        color="danger"
        outline
        size="sm"
        className="btn-icon"
        onClick={() => handleRemoveFile(file)}
      >
        <X size={14} />
      </Button>
    </ListGroupItem>
  ));

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };
  const { t } = useTranslation();
  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">{t("Profile Details")}</CardTitle>
        </CardHeader>
        <CardBody className="py-2 my-25">
          <div className="d-flex justify-content-between">
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
                    {t("Upload New Photo")}
                    <Input type="file" hidden accept="image/*" />
                  </Button>
                  <Button
                    className="mb-75 px-2 py-1"
                    color="primary"
                    size="sm"
                    outline
                  >
                    {t("Reset")}
                  </Button>
                  <p className="mb-0">
                    {t("Allowed JPG, GIF or PNG. Max size of 800kB")}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-1">
              <Button
                tag={Label}
                className="px-2 py-1"
                size="sm"
                color="danger"
              >
                {t("Scan details via OCR")}
              </Button>
            </div>
          </div>
          <Form className="mt-2 pt-50" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm="6" className="mb-1 input-group-lg">
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="firstName"
                      placeholder={t("First Name")}
                      invalid={errors.firstName && true}
                      {...field}
                    />
                  )}
                />
                {errors && errors.firstName && (
                  <FormFeedback>Please enter a valid First Name</FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1 input-group-lg">
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="lastName"
                      placeholder={t("Last Name")}
                      invalid={errors.lastName && true}
                      {...field}
                    />
                  )}
                />
                {errors.lastName && (
                  <FormFeedback>Please enter a valid Last Name</FormFeedback>
                )}
              </Col>
              <Col sm="6" className="mb-1 input-group-lg">
                <Input
                  id="idNumber"
                  type="text"
                  placeholder={t("ID Number:")}
                  defaultValue=""
                />
              </Col>
              <Col sm="6" className="mb-1 input-group-lg">
                <Input
                  defaultValue=""
                  type="text"
                  id="passportNumber:"
                  name="passportNumber"
                  placeholder={t("Passport Number")}
                />
              </Col>
              <Col sm="6" className="mb-1 input-group-lg">
                <Input
                  defaultValue=""
                  id="dateOfBirth"
                  name="doB"
                  placeholder={t("Date of Birth:")}
                />
              </Col>
              <Col sm="6" className="mb-1 input-group-lg">
                {/* <Select
                  id='gender'
                  isClearable={false}
                  className='react-select '
                  classNamePrefix='select'
                  options={genderOptions}
                  placeholder='Gender'
                  theme={selectThemeColors.neutral20}
                  defaultValue=''
                /> */}
                <Input
                  defaultValue=""
                  id="gender"
                  name="gender"
                  placeholder={t("Gender")}
                />
              </Col>
              <Col sm="6" className="mb-1 input-group-lg">
                <Input
                  defaultValue=""
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("Email")}
                />
              </Col>
              <Col sm="6" className="mb-1 input-group-lg ">
                <Cleave
                  id="phNumber"
                  name="phNumber"
                  className="form-control"
                  placeholder="1 234 567 8900"
                  options={{ phone: true, phoneRegionCode: "US" }}
                />
              </Col>
              <Col sm="6" className="mb-1 input-group-lg ">
                {/* <Select
                  id='country'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={countryOptions}
                  placeholder='City, Country'
                  style={{height:"45px"}}
                  theme={selectThemeColors.neutral20}
                  defaultValue=''
                /> */}
                <Input
                  defaultValue=""
                  type="text"
                  id="country"
                  name="City, Country"
                  placeholder={t("City, Country")}
                />
              </Col>
              <Col sm="6" className="mb-1 input-group-lg">
                <Input
                  type="text"
                  id="address"
                  name="address"
                  placeholder={t("Address")}
                />
              </Col>
              <Col className="mt-2" sm="12">
                <Button
                  type="submit"
                  className="me-1 px-2 py-1"
                  color="primary"
                >
                  {t("Save & Continue")}
                </Button>
                <Button className="px-2 py-1" color="primary" outline>
                  {t("Reset")}
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
      <Card>
        <div>
          <div className="py-2 px-5 my-25">
            <h5
              style={{
                marginLeft: "15px",
                fontSize: "20px",
                color: "rgba(77, 75, 85, 0.6)",
              }}
            >
              {t("Upload Files")}
            </h5>
          </div>
          <CardBody>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <div
                className="text-center py-5 rounded-3"
                style={{ border: "1px dashed rgba(51, 48, 60, 0.12) " }}
              >
                {/* <div className='d-flex align-items-center justify-content-center flex-column border dashed py-5'> */}

                <CgSoftwareUpload
                  size={30}
                  className="bg-primary text-white border rounded-2"
                />
                <h5
                  className="my-1 "
                  style={{
                    marginLeft: "15px",
                    fontSize: "20px",
                    color: "rgba(77, 75, 85, 0.6)",
                  }}
                >
                  {t("Drop files here or click to upload")}
                </h5>
                <p className="text-secondary">
                  {t("Drop files here or click browse thorough your machine")}
                </p>
              </div>
              {/* </div> */}
            </div>
            {files.length ? (
              <Fragment>
                <ListGroup className="my-2">{fileList}</ListGroup>
                <div className="d-flex justify-content-end">
                  <Button
                    className="me-1"
                    color="danger"
                    outline
                    onClick={handleRemoveAllFiles}
                  >
                    Remove All
                  </Button>
                  <Button color="primary">Upload Files</Button>
                </div>
              </Fragment>
            ) : null}
          </CardBody>
        </div>
      </Card>
    </Fragment>
  );
};

export default AccountTabs;
