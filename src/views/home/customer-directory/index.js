import React, { useEffect } from "react";
import { Button, Form, Input, Modal, ModalBody, ModalHeader, Row, Table } from "reactstrap";
import { CiExport } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { get } from "../../../utility/Axios";
import People from "./people-directory";
import Screened from "./screneed-directory";
import Shopowner from "./shop-owner";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { getCustomerAsync } from "../../../redux/slices/home/customerSlice";
import { Link } from "react-router-dom";
import countriesArray from "../../components/registerstep/countriesArray.js";
import { useTranslation } from "react-i18next";
// import nationalitesArray from "./nationalitesArray.js";

const index = () => {
  const {t} = useTranslation()
  const {
    customerDirectory: { customers, loading, error },
  } = useSelector((store) => store);

  // if (loading) {
  //   return <div>Loading ...</div>;
  // }

  // if (error) {
  //   return <div>Error {error}</div>;
  // }

  const dispatch = useDispatch();

  useEffect(() => {
    const res = dispatch(getCustomerAsync());
    console.log(res);
  }, [dispatch]);

  const [show, setShow] = useState(false)
  const [modalType, setModalType] = useState('Add New')
  
  const {
    reset,
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { roleName: '' } })
 
  const onSubmit = data => {
    if (data.roleName.length) {
      setShow(false)
    } else {
      setError('roleName', {
        type: 'manual'
      })
    }
  }
 
  const onReset = () => {
    setShow(false)
    reset({ roleName: '' })
  }
 
  const handleModalClosed = () => {
    setModalType('Add New')
    setValue('roleName')
  }

  return (
    <div>
      {/* heading section */}
      <div>
        <h1>{t("Customer Directory")}</h1>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eius
          nostrum quae? Nihil optio, omnis odit numquam quod nemo repellendus
          blanditiis quo expedita placeat assumenda corporis consequuntur
          corrupti adipisci facilis architecto. Corrupti sunt quos eveniet
          perspiciatis vero nihil quae blanditiis?
        </span>
      </div>
      {/* buttons card section */}
      <div
        className=" w-100 d-flex flex-md-row flex-column justify-content-between p-2 rounded gap-2"
        style={{ marginTop: "3rem", backgroundColor: "#FFFFFF" }}
      >
        <div className="d-flex flex-md-row flex-column">
          <button
            type="button"
            className="flex btn border bg-white hover-bg-danger"
          >
            <span className="me-1">
              <CiExport size={20} />
            </span>
            <span>{t("Export")} </span>
          </button>
        </div>
        <div className="d-flex flex-md-row flex-column gap-1">
          <div>
            <Input
              id="search-invoice"
              className=" me-2 w-100"
              type="text"
              placeholder={t("Search Customer")}
            />
          </div>
          <div>
            <Input className="w-100 " type="select">
              <option value="">{t("Filter by")}</option>
              <option value="downloaded">Downloaded</option>
              <option value="draft">Draft</option>
              <option value="paid">Paid</option>
              <option value="partial payment">Partial Payment</option>
              <option value="past due">Past Due</option>
              <option value="sent">Sent</option>
            </Input>
          </div>
        </div>
      </div>
      {/* Table section */}
      <div className="mt-7">
        <Table responsive>
          <thead>
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
              <th scope="col">{t("CUSTOMER NAME")}</th>
              <th scope="col">{t("NATIONALITY")}</th>
              <th scope="col">{t("GENDER")}</th>
              <th scope="col">{t("STATUS")}</th>
              <th scope="col" style={{ minWidth: "120px" }}>
                {t("ACTION")}{" "}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {customers?.map(({ id, customerName, nationality, gender, status }) => (
              <tr key={id}>
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
                <td className="py-2">{customerName}</td>
                <td>{nationality}</td>
                <td>{gender}</td>
                <td>
                  {status === "active" && (
                    <span
                      className="rounded px-1  d-inline-block
                        d-inline-block"
                      style={{
                        backgroundColor: "rgba(40, 199, 111, 0.16)",
                        color: "rgba(40, 199, 111, 1)",
                      }}
                    >
                      {status}
                    </span>
                  )}
                  {status === "inactive" && (
                    <span
                      className="rounded px-1 d-inline-block"
                      style={{
                        backgroundColor: "rgba(168, 170, 174, 0.16)",
                        color: "rgba(168, 170, 174, 1)",
                      }}
                    >
                      {status}
                    </span>
                  )}
                  {status === "pending" && (
                    <span
                      className="rounded px-1 d-inline-block"
                      style={{
                        backgroundColor: "rgba(255, 159, 67, 0.16)",
                        color: "rgba(255, 159, 67, 1)",
                      }}
                    >
                      {status}
                    </span>
                  )}
                </td>
                <td>
                  <span>
                  <Link
                        to='/'
                        className='role-edit-modal'
                       
                        onClick={e => {
                          e.preventDefault()
                          setModalType('Edit')
                          setShow(true)
                        }}
                      >
                    <TbEdit size={17} className="text-secondary" />
                    </Link>
                  </span>
                  <span className="px-1">
                    <RiDeleteBinLine size={17} onClick={e => {id}}  />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* //Modal popup */}
        {/* <Modal
            isOpen={show}
            onClosed={handleModalClosed}
            toggle={() => setShow(!show)}
            className='modal-dialog-centered  '
          >
            <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
            <ModalBody className='px-5 pb-5'>
              <div className=' mb-1 text-center'>
                <h1 style={{fontWeight:"500", fontSize:"20px"}}> Edit Customer</h1>
              </div>
              <Row tag='form' onSubmit={handleSubmit(onSubmit)}>
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
                      Customer Name: 
                   </label>
                   <input
                      type="text"
                      class="form-control"
                      id="register_page_username"
                      placeholder="Enter Customer Name"
                   />
                   
                </div>
                <div class="form-group w-100">
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
                      Nationality: 
                   </label>
                <Controller
                  className="form-control"
                  id="customer_page_nationality_name"
                  name="nationality"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      autoFocus
                      type="select"
                      placeholder="Select"
                      invalid={errors.nationality && true}
                      {...field}
                      >
                     
                      {countriesArray &&
                     countriesArray.map(({ name }) => (
                        <option value={name}>{name}</option>
                     ))}
                     </Input>
                  )}
                />
                  {errors.nationality && (
                  <FormFeedback>{errors.nationality.message}</FormFeedback>
                )}
                </div>
             </div>
             <div className="d-flex flex-column flex-md-row gap-2 justify-content-between mt-2">
                <div class="form-group w-100">
                <label
                  for="customer_page_gender_select"
                  style={{
                     position: "absolute",
                     backgroundColor: "#fff",
                     marginTop: "-10px",
                     marginLeft: "7px",
                     padding: "0px 8px",
                     fontSize: "13px",
                  }}
               >
                  Gender:
               </label>
               <Controller
                  className="form-control"
                  id="customer_page_gender_select"
                  name="gender"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      autoFocus
                      type="select"
                      placeholder=" Select gender"
                      invalid={errors.gender && true}
                      {...field}
                      >
                           
                       <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                     </Input>
                  )}
                />
                  {errors.gender && (
                  <FormFeedback>{errors.gender.message}</FormFeedback>
                )}
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
                      Status: 
                   </label>
                   <Controller
                  className="form-control"
                  id="Status_page_gender_select"
                  name="status"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      autoFocus
                      type="select"
                      placeholder=" Select gender"
                      invalid={errors.status && true}
                      {...field}
                      >
                      
                       <option value="male">Active</option>
                  <option value="female">Inactive</option>
             
                     </Input>
                  )}
                />
                  {errors.status && (
                  <FormFeedback>{errors.status.message}</FormFeedback>
                )}
                </div>
             </div>
          
    
              </Row>
    
             
    
        
     
           
          <Button
           color="primary"
            className="me-1 mt-1"
                onClick={() => setShow(false)}
              >
           Submit</Button>
            </ModalBody>
          </Modal> */}

      </div>
      <People />
      <Screened />
      <Shopowner />
    </div>
  );
};

export default index;
