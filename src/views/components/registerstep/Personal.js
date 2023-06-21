import React, { useEffect } from "react";
import countriesArray from "./countriesArray.js";
import nationalitesArray from "./nationalitesArray.js";
import { Controller, useForm } from "react-hook-form";
import { Form, FormFeedback, Input, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { defaultValuesPersonal } from "../../auth/defaultValues.js";
import { PersonalSchema } from "../../auth/validationSchema.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { handlePersonal, handleProceed } from "../../../redux/slices/auth/registerSlice.js";
const Personal = () => {
   const { t } = useTranslation();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const { personalData, proceeded } = useSelector((state) => state.register);
   console.log('proceed: ', proceeded)
   const {
      control,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm({
      mode: "onChange",
      defaultValues: defaultValuesPersonal(personalData),
      resolver: yupResolver(PersonalSchema),
   });

   useEffect(() =>{
      if(!proceeded) navigate('/register/account-details')
   }, [])

   const onsubmit = (data) => {
      dispatch(handlePersonal(data));
      navigate('/register/upload-items')
   };

   return (
      <Row>
         <Form className="auth-register-form" onSubmit={handleSubmit(onsubmit)}>
            <>
               <div className="py-3">
                  <h1>{t("Enter Your Personal Details")}</h1>
                  <span className="fs-8">
                     {t("Enter Your Personal Information here")}
                  </span>
               </div>
               <div className="d-flex flex-column flex-md-row gap-1 justify-content-between mt-2">
                  <div className="form-group w-100">
                     <label
                        htmlFor="personal_first_name"
                        style={{
                           position: "absolute",
                           backgroundColor: "#fff",
                           marginTop: "-10px",
                           marginLeft: "7px",
                           padding: "0px 8px",
                           fontSize: "13px",
                        }}
                     >
                        {t("First Name:")}
                     </label>
                     <Controller
                        className="form-control"
                        id="personal_first_name"
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                           <Input
                              autoFocus
                              type="text"
                              placeholder="Enter First Name"
                              invalid={errors.firstName && true}
                              {...field}
                           />
                        )}
                     />
                     {errors.firstName && (
                        <FormFeedback>{errors.firstName.message}</FormFeedback>
                     )}
                  </div>
                  <div class="form-group w-100">
                     <label
                        htmlFor="personal_last_name"
                        style={{
                           position: "absolute",
                           marginTop: "-10px",
                           marginLeft: "14px",
                           backgroundColor: "#fff",
                           padding: "0px 8px",
                           fontSize: "13px",
                        }}
                     >
                        {t("Last Name:")}
                     </label>
                     <Controller
                        className="form-control"
                        id="personal_last_name"
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                           <Input
                              autoFocus
                              type="text"
                              placeholder=" Enter Last Name"
                              invalid={errors.lastName && true}
                              {...field}
                           />
                        )}
                     />
                     {errors.lastName && (
                        <FormFeedback>{errors.lastName.message}</FormFeedback>
                     )}
                  </div>
               </div>
               <div className="d-flex flex-column flex-md-row gap-1 justify-content-between mt-2">
                  <div class="form-group w-100">
                     <label
                        for="personal_country_select"
                        style={{
                           position: "absolute",
                           backgroundColor: "#fff",
                           marginTop: "-10px",
                           marginLeft: "7px",
                           padding: "0px 8px",
                           fontSize: "13px",
                        }}
                     >
                        {t("Country: ")}
                     </label>
                     <Controller
                        className="form-control"
                        id="personal_country_select"
                        name="country"
                        control={control}
                        render={({ field }) => (
                           <Input
                              autoFocus
                              type="select"
                              placeholder="Select"
                              invalid={errors.country && true}
                              {...field}
                           >
                              {countriesArray &&
                                 countriesArray.map(({ name }) => (
                                    <option value={name}>{name}</option>
                                 ))}
                           </Input>
                        )}
                     />
                     {errors.country && (
                        <FormFeedback>{errors.country.message}</FormFeedback>
                     )}
                  </div>
                  <div class="form-group w-100">
                     <label
                        htmlFor="personal_nationality_select"
                        style={{
                           position: "absolute",
                           marginTop: "-10px",
                           marginLeft: "7px",
                           backgroundColor: "#fff",
                           padding: "0px 8px",
                           fontSize: "13px",
                        }}
                     >
                        {t("Nationality: ")}
                     </label>
                     <Controller
                        className="form-control"
                        id="personal_nationality_select"
                        name="nationality"
                        control={control}
                        render={({ field }) => (
                           <Input
                              autoFocus
                              type="select"
                              placeholder=" Select nationality"
                              invalid={errors.nationality && true}
                              {...field}
                           >
                              {nationalitesArray &&
                                 nationalitesArray.map(({ nationality }) => (
                                    <option value={nationality}>
                                       {nationality}
                                    </option>
                                 ))}
                           </Input>
                        )}
                     />
                     {errors.nationality && (
                        <FormFeedback>
                           {errors.nationality.message}
                        </FormFeedback>
                     )}
                  </div>
               </div>
               <div className="d-flex flex-column flex-md-row gap-1 justify-content-between mt-2">
                  <div class="form-group w-100">
                     <label
                        htmlFor="personal_birthday"
                        style={{
                           position: "absolute",
                           backgroundColor: "#fff",
                           marginTop: "-10px",
                           marginLeft: "7px",
                           padding: "0px 8px",
                           fontSize: "13px",
                        }}
                     >
                        {t("Birthday: ")}
                     </label>

                     <Controller
                        className="form-control"
                        id="personal_birthday"
                        name="birthday"
                        control={control}
                        render={({ field }) => (
                           <Input
                              autoFocus
                              type="date"
                              placeholder="YYYY-MM-DD"
                              invalid={errors.birthday && true}
                              {...field}
                           />
                        )}
                     />
                     {errors.birthday && (
                        <FormFeedback>{errors.birthday.message}</FormFeedback>
                     )}
                  </div>

                  <div class="form-group w-100">
                     <label
                        htmlFor="personal_gender_select"
                        style={{
                           position: "absolute",
                           backgroundColor: "#fff",
                           marginTop: "-10px",
                           marginLeft: "7px",
                           padding: "0px 8px",
                           fontSize: "13px",
                        }}
                     >
                        {t("Gender: ")}
                     </label>
                     <Controller
                        className="form-control"
                        id="personal_gender_select"
                        name="gender"
                        control={control}
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
               </div>
               {/* buttons */}
               <div className="d-flex justify-content-between mt-3">
                  <div>
                     <button
                        type="submit"
                        className="btn border border-primary text-primary"
                        onClick={() => navigate(-1)}
                     >
                        {t("Previous")}
                     </button>
                  </div>
                  <button type="submit" disabled={!isValid} className="btn btn-primary">
                     {t("Next")}
                  </button>
               </div>
            </>
         </Form>
      </Row>
   );
};

export default Personal;
