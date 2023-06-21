import { React, useState } from "react";
import { post } from "../../../utility/Axios";
import { Controller, useForm } from "react-hook-form";
import { Form, FormFeedback, Input } from "reactstrap";
import { useTranslation } from "react-i18next";
import { defaultValuesAccount } from "../../auth/defaultValues";
import { AccountSchema } from "../../auth/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { handleAccount, handleProceed } from "../../../redux/slices/auth/registerSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Accounts = () => {
   const { t } = useTranslation();
   const navigate = useNavigate();

   const { accountData } = useSelector((state) => state.register);

   console.log("account data in account: ", accountData);

   const dispatch = useDispatch();
   const {
      control,
      handleSubmit,
      getValues,
      setError,
      formState: { errors, isValid },
   } = useForm({
      mode: "onChange",
      defaultValues: defaultValuesAccount(accountData),
      resolver: yupResolver(AccountSchema),
   });

   const onSubmit = (data) => {
      dispatch(handleAccount(data));
      dispatch(handleProceed());
      navigate("/register/personal-details");
   };

   let intervalID;
   const waitTime = 450;

   const validateUsername = (event) => {
      clearTimeout(intervalID);
      intervalID = setTimeout(() => {
         if (
            getValues("userName").length >= 5 &&
            getValues("userName").length <= 20
         ) {
            post("/register/validate-username", {
               userName: event.target.value,
            }).catch((err) =>
               err.response.data.status === false
                  ? setError("userName", {
                       type: "server",
                       message: err.response.data.message,
                    })
                  : null
            );
         }
      }, waitTime);
   };

   const validateEmail = (event) => {
      clearTimeout(intervalID);
      intervalID = setTimeout(() => {
         if (!errors.email) {
            post("/register/validate-email", {
               email: event.target.value,
            }).catch((err) =>
               err.response.data.status === false
                  ? setError("email", {
                       type: "server",
                       message: err.response.data.message,
                    })
                  : null
            );
         }
      }, waitTime);
   };

   return (
      <div className="py-3">
         <div className="">
            <h1>{t("Account Information")}</h1>
            <span className="fs-8">{t("Enter Your Account Details here")}</span>
         </div>
         <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="d-flex flex-column flex-md-row gap-2 justify-content-between mt-2">
               <div className="form-group w-100">
                  <label
                     className="input"
                     htmlFor="account_username"
                     style={{
                        position: "absolute",
                        backgroundColor: "#fff",
                        marginTop: "-10px",
                        marginLeft: "7px",
                        padding: "0px 8px",
                        fontSize: "13px",
                     }}
                  >
                     {t("User Name:")}
                  </label>
                  <Controller
                     className="form-control"
                     id="account_username"
                     name="userName"
                     control={control}
                     render={({ field }) => (
                        <Input
                           autoFocus
                           type="text"
                           placeholder="Enter User Name"
                           invalid={errors.userName ? true : false}
                           {...field}
                           onKeyUp={(event) => validateUsername(event)}
                        />
                     )}
                  />
                  {errors.userName && (
                     <FormFeedback>{errors.userName.message}</FormFeedback>
                  )}

                  {/* <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
               </div>
               <div class="form-group w-100">
                  <label
                     htmlFor="account_email"
                     style={{
                        position: "absolute",
                        marginTop: "-10px",
                        marginLeft: "7px",
                        backgroundColor: "#fff",
                        padding: "0px 8px",
                        fontSize: "13px",
                     }}
                  >
                     {t("Email: ")}
                  </label>
                  <Controller
                     className="form-control"
                     id="account_email"
                     name="email"
                     control={control}
                     render={({ field }) => (
                        <Input
                           autoFocus
                           type="email"
                           placeholder="Enter Email"
                           invalid={errors.email ? true : false}
                           {...field}
                           onKeyUp={(event) => validateEmail(event)}
                        />
                     )}
                  />
                  {errors.email && (
                     <FormFeedback>{errors.email.message}</FormFeedback>
                  )}
               </div>
            </div>
            <div className="d-flex flex-column flex-md-row gap-2 justify-content-between mt-2">
               <div class="form-group w-100">
                  <label
                     htmlFor="account_password"
                     style={{
                        position: "absolute",
                        marginTop: "-10px",
                        marginLeft: "7px",
                        backgroundColor: "#fff",
                        padding: "0px 8px",
                        fontSize: "13px",
                     }}
                  >
                     {t("Password: ")}
                  </label>
                  <Controller
                     className="form-control"
                     id="account_password"
                     name="password"
                     control={control}
                     render={({ field }) => (
                        <Input
                           autoFocus
                           type="password"
                           placeholder="Enter Password"
                           invalid={errors.password ? true : false}
                           {...field}
                        />
                     )}
                  />
                  {errors.password && (
                     <FormFeedback>{errors.password.message}</FormFeedback>
                  )}
               </div>
               <div class="form-group w-100">
                  <label
                     htmlFor="account_confirm_password"
                     style={{
                        position: "absolute",
                        marginTop: "-10px",
                        marginLeft: "7px",
                        backgroundColor: "#fff",
                        padding: "0px 8px",
                        fontSize: "13px",
                     }}
                  >
                     {t("Confirm Password:")}
                  </label>
                  <Controller
                     className="form-control"
                     id="account_confirm_password"
                     name="confirmPassword"
                     control={control}
                     render={({ field }) => (
                        <Input
                           autoFocus
                           type="password"
                           placeholder="Enter Confirm Password"
                           invalid={errors.confirmPassword ? true : false}
                           {...field}
                        />
                     )}
                  />
                  {errors.confirmPassword && (
                     <FormFeedback>
                        {errors.confirmPassword.message}
                     </FormFeedback>
                  )}
               </div>
            </div>
            <div class="form-group w-100 mt-2">
               <label
                  htmlFor="account_profileLink"
                  style={{
                     position: "absolute",
                     backgroundColor: "#fff",
                     marginTop: "-10px",
                     marginLeft: "7px",
                     padding: "0px 8px",
                     fontSize: "13px",
                  }}
               >
                  {t("Profile Link:")}
               </label>
               <Controller
                  className="form-control"
                  id="account_profileLink"
                  name="profileLink"
                  control={control}
                  render={({ field }) => (
                     <Input
                        autoFocus
                        type="text"
                        placeholder="www.example.com"
                        invalid={errors.profileLink ? true : false}
                        {...field}
                     />
                  )}
               />
               {errors.profileLink && (
                  <FormFeedback>{errors.profileLink.message}</FormFeedback>
               )}
            </div>
            {/* buttons */}
            <div className="d-flex justify-content-between mt-3">
               <button
                  type="button"
                  disabled={true}
                  class="btn border d-block border-primary text-primary"
               >
                  {t("Previous")}
               </button>
               <button type="submit" disabled={!isValid} class="btn d-block btn-primary">
                  {t("Next")}
               </button>
            </div>
         </Form>
      </div>
   );
};

export default Accounts;
