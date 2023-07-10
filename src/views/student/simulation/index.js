import React, { Fragment } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";

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
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
  Table,
} from "reactstrap";


// ** Third Party Components
import Select from "react-select";
import Cleave from "cleave.js/react";
import { useForm, Controller } from "react-hook-form";
import "cleave.js/dist/addons/cleave-phone.us";


// ** Utils
import { selectThemeColors } from '@utils'
import { width } from 'dom7'
import { color } from 'd3-color'
import { useTranslation } from 'react-i18next';

const countryOptions = [
  { value: 'uk', label: 'UK' },
  { value: 'usa', label: 'USA' },
  { value: 'france', label: 'France' },
  { value: 'russia', label: 'Russia' },
  { value: 'canada', label: 'Canada' }
]

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'no_respond', label: 'Prefer not to respond' }
]

const Simulation = () => {

  const {t} = useTranslation();
  const onSubmit = data => console.log(data);
  // ** Hooks
  const defaultValues = {
    lastName: '',
    firstName: ''
  }
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })


  const SimulationData = [
    {
      customer: "First Name",
      detail: "Hassan",
   
    },
    {
      customer: "Last Name",
      detail: "Ali",
   
    },
    {
      customer: "ID Number",
      detail: "2",
   
    },
    {
      customer: "Gender",
      detail: "Mail",
   
    },
  ];

  return (
  <Fragment>
<div className="py-1" style={{color: "rgba(51, 48, 60, 0.87)"}}>
        <h3 className="py-1" style={{fontWeight:"500", fontSize:"24px"}}>{t("Simulation")}</h3>
        <span className=''>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </span>
      </div>

      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'style={{fontWeight:"500", fontSize:"20px"}} >{t("Customer Database Record")}</CardTitle>
        </CardHeader>
        <CardBody className='py-2 my-25'>
          {/* <div className='d-flex justify-content-between'>
            <div className='d-flex'>
              <div className='me-25'>
                <img className='rounded me-50' src={avatar} alt='Generic placeholder image' height='100' width='100' />
              </div>
              <div className='d-flex align-items-end ms-1 my-1 '>
                <div>
                  <Button tag={Label} className='mb-75 me-75 px-2 py-1' size='sm' color='secondary'>
                    UPLOAD NEW PHOTO
                    <Input type='file' hidden accept='image/*' />
                  </Button>
                  <Button className='mb-75 px-2 py-1' color='secondary' size='sm' outline>
                    RESET
                  </Button>
                  <p className='mb-0'>Allowed JPG, GIF or PNG. Max size of 800kB</p>
                </div>
              </div>
            </div>
            <div className='mt-1'>
              <Button tag={Label} className='px-2 py-1' size='sm' color='danger'>
                SCAN DETAILS VIA OCR
              </Button>
            </div>  
          </div> */}
          <Form className='mt-2 pt-50' onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col sm='6' className='mb-1 input-group-lg'>
                <Controller
                  name='firstName'
                  control={control}
                  render={({ field }) => (
                    <Input id='firstName' placeholder='First' invalid={errors.firstName && true} {...field} />
                  )}
                />
                {errors && errors.firstName && <FormFeedback>Please enter a valid First Name</FormFeedback>}
              </Col>
              <Col sm='6' className='mb-1 input-group-lg'>
                <Controller
                  name='lastName'
                  control={control}
                  render={({ field }) => (
                    <Input id='lastName' placeholder='Last Name' invalid={errors.lastName && true} {...field} />
                  )}
                />
                {errors.lastName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
              </Col>
              <Col sm='6' className='mb-1 input-group-lg'>
                <Input id='idNumber' type='text' name='idNumber' placeholder='ID Number' defaultValue='' />
              </Col>
              <Col sm='6' className='mb-1 input-group-lg'>
                <Input defaultValue='' type='text' id='passportNumber' name='passportNumber' placeholder='Passport Number' />
              </Col>
              <Col sm='6' className='mb-1 input-group-lg'>
                <Input defaultValue='' id='dateOfBirth' name='doB' placeholder='Date of Birth' />
              </Col>
              <Col sm='6' className='mb-1 input-group-lg'>
                {/* <Select
                  id='gender'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={genderOptions}
                  placeholder='Gender'
                  theme={selectThemeColors.neutral20}
                  defaultValue=''
                /> */}
                <Input defaultValue='' type='text' id='gender' name='Gender' placeholder='Gender' />
              </Col>
              <Col sm='6' className='mb-1 input-group-lg'>
                <Input defaultValue='' type='email' id='email' name='email' placeholder='Email' />
              </Col>
              <Col sm='6' className='mb-1 input-group-lg'>
                <Cleave
                  id='phNumber'
                  name='phNumber'
                  className='form-control'
                  placeholder='1 234 567 8900'
                  options={{ phone: true, phoneRegionCode: 'US' }}
                />
              </Col>
              <Col sm='6' className='mb-1 input-group-lg '>
                {/* <Select
                  id='country'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={countryOptions}
                  placeholder='City, Country'
                  theme={selectThemeColors.neutral20}
                  defaultValue=''
                /> */}
                <Input defaultValue='' type='text' id='country' name='City, Country' placeholder='City, Country' />
              </Col>
              <Col sm='6' className='mb-1 input-group-lg'>
                <Input type='text' id='address' name='address' placeholder='Address' />
              </Col>
              <Col className='mt-2' sm='12'>
                <Button type='submit' className='me-1 px-2 py-1' color='primary'>
                  {t("SUBMIT")}
                </Button>
                <Button className='px-2 py-1' color='secondary' outline>
                  {t("RESET")}
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>

      <Card>

      <div className="py-1 m-1" style={{color: "rgba(51, 48, 60, 0.87)"}}>
        <h3 className="py-1"> {t("Simulation result")}</h3>
        <div className="border-white " style={{backgroundColor: "rgba(51, 48, 60, 0.04)"}}>        
           <span className='' style={{color: "rgba(51, 48, 60, 0.6)"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </span>
        </div>

      </div>
      <Card>
        <Table responsive>
          <thead>
            <tr>
              <th  style={{color:" rgba(51, 48, 60, 0.87)"}} >{t("CUSTOMER")}</th>
              <th  style={{color:" rgba(51, 48, 60, 0.87)"}}>{t("DETAILS")}</th>
              
            </tr>
          </thead>
          <tbody>
            {SimulationData.map(({ customer, detail }) => (
              <tr>
             
                <td className="px-2 py-2">{customer}</td>
                <td>{detail}</td>
              
                {/* <td className="d-flex  gap-1" style={{ fontSize: "17px" }}>
                  <span>
                    <TbEdit />
                  </span>
                  <span>
                    <RiDeleteBinLine className="text-primary" />
                  </span>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      </Card>

      </Fragment>
  )
}

export default Simulation