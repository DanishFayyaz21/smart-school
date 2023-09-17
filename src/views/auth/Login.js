// ** React Imports
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineFacebook } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { CgGoogle } from "react-icons/cg";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";
import useJwt from "@src/auth/jwt/useJwt";

// ** Third Party Components
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller, useFormState } from "react-hook-form";
import { Coffee, X } from "react-feather";

// ** Actions
import { handleLogin } from "@store/authentication";

// ** Context
import { AbilityContext } from "@src/utility/context/Can";

// ** Custom Components
import Avatar from "@components/avatar";
import InputPasswordToggle from "@components/input-password-toggle";

// ** Utils
import { getHomeRouteForLoggedInUser } from "@utils";

// ** Reactstrap Imports
import {
   Row,
   Col,
   Form,
   Input,
   Label,
   Button,
   CardText,
   CardTitle,
   FormFeedback,
} from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

import image from "@src/assets/images/pages/loginphoto.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./validationSchema";
import { LoginUserAsync } from "../../redux/slices/auth/loginSlice";
import { useTranslation } from "react-i18next";
import { defaultValuesLogin } from "./defaultValues";
import { post } from "../../services";

const ToastContent = ({ t, name, role }) => {
   return (
      <div className="d-flex">
         <div className="me-1">
            <Avatar size="sm" color="success" icon={<Coffee size={12} />} />
         </div>
         <div className="d-flex flex-column">
            <div className="d-flex justify-content-between">
               <h6>{name}</h6>
               <X
                  size={12}
                  className="cursor-pointer"
                  onClick={() => toast.dismiss(t.id)}
               />
            </div>
            <span>
               You have successfully logged in as an {role} user to LMS.
            </span>
         </div>
      </div>
   );
};


const Login = () => {
   const { t } = useTranslation()
   // ** Hooks
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const ability = useContext(AbilityContext);
   const {
      control,
      handleSubmit,
      formState: { errors, dirtyFields, isValid },
   } = useForm({ mode: "onChange", resolver: yupResolver(LoginSchema) });

   const onSubmit = async (data) => {
      // if (Object.values(data).every((field) => field.length > 0)) {
      //    useJwt
      //       .login({ email: data.email, password: data.password })
      //       .then((res) => {
      //          const data = {
      //             ...res.data.userData,
      //             accessToken: res.data.accessToken,
      //             refreshToken: res.data.refreshToken,
      //          };
      //          dispatch(handleLogin(data));
      //          ability.update(res.data.userData.ability);
      //          navigate(getHomeRouteForLoggedInUser(data.role));
      //          toast((t) => (
      //             <ToastContent
      //                t={t}
      //                role={data.role || "admin"}
      //                name={data.fullName || data.username || "John Doe"}
      //             />
      //          ));
      //       })
      //       .catch((err) =>
      //          setError("email", {
      //             type: "manual",
      //             message: err.response.data.error,
      //          })
      //       );
      // } else {
      //    for (const key in data) {
      //       if (data[key].length === 0) {
      //          setError(key, {
      //             type: "manual",
      //          });
      //       }
      //    }
      // }
      try {

         const res = await post("login", data)
         if (res.data.status == 200) {
            const logindata = {
               ...res?.data?.data.user,
               accessToken: res?.data?.data.token,
               refreshToken: res?.data?.data.token,
            };
            dispatch(handleLogin(logindata))
            ability.update([
               {
                  "action": "manage",
                  "subject": "all"
               }
            ]);
            navigate(getHomeRouteForLoggedInUser(res?.data?.data?.user?.role));
            // navigate("/");
            toast((t) => (
               <ToastContent
                  t={t}
                  role={res?.data?.data?.user?.role}
                  name={res?.data?.data?.user?.fullName || res?.data?.data?.user?.user_name}
               />
            ));
         }

      }
      catch (err) {
         console.log(err)

      }
      // console.log("data...............", data)
   };
   useEffect(() => {
      document.getElementById("root").style.backgroundColor = "white";
      return () => document.getElementById("root").removeAttribute("style");
   }, []);

   return (
      <div className="main bg-white">
         <div className="shadow bg-white p-2">
            <Link
               className="brand-logo text-center ps-3 my-0"
               to="/"
               onClick={(e) => e.preventDefault()}
            >
               {/* <Col
          className="  px-1  p-2"
          lg="1"
          sm="2"
        >
         
        </Col> */}

               <h1>LMS</h1>
            </Link>
         </div>
         <Row>
            <Col sm="12" lg="5">
               <img
                  className="w-100"
                  style={{ padding: "1.90rem" }}
                  src={image}
                  alt="Login Cover"
               />
            </Col>
            <Col
               sm="12"
               lg="7"
               style={{ display: "grid", placeItems: "center" }}
            >
               <div className="mt-4 mt-sm-2 p-2">
                  <CardTitle
                     tag="h4"
                     className="fw-bold mb-1"
                     style={{ color: "rgba(10, 17, 114, 1)", fontSize: "20px" }}
                  >
                     {t("Welcome to LMS ! 👋🏻")}
                  </CardTitle>
                  <CardText
                     className="mb-2"
                     style={{
                        color: "rgba(77, 75, 85, 0.6)",
                        fontSize: "16px",
                     }}
                  >
                     {t("Please sign-in to your account and start the adventure")}
                  </CardText>
                  {/* <Alert color='primary'> */}
                  {/* <div className='alert-body font-small-2'>
                <p>
                  <small className='me-50'>
                    <span className='fw-bold'>Admin:</span> admin@demo.com | admin
                  </small>
                </p>
                <p>
                  <small className='me-50'>
                    <span className='fw-bold'>Client:</span> client@demo.com | client
                  </small>
                </p>
              </div> */}
                  {/* <HelpCircle
                id='login-tip'
                className='position-absolute'
                size={18}
                style={{ top: '10px', right: '10px' }}
              /> */}
                  {/* <UncontrolledTooltip target='login-tip' placement='left'>
                This is just for ACL demo purpose.
              </UncontrolledTooltip> */}
                  {/* </Alert> */}
                  <Form
                     className="auth-login-form"
                     style={{ marginTop: "10px" }}
                     onSubmit={handleSubmit(onSubmit)}
                  >
                     <div className="mb-1 mt-2" style={{ position: "relative" }}>
                        <label
                           className="form-label"
                           for="login-email"
                           style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              background: "white",
                              marginLeft: "20px",
                              marginTop: "-10px",
                              zIndex: "100",
                              color: "rgba(77, 75, 85, 0.6)",
                              padding: "0px 10px",
                              fontSize: "16px",
                              fontWeight: "400",
                           }}
                        >
                           {t("Email")}:
                        </label>
                        <Controller
                           id="loginEmail"
                           name="email"
                           className="mb-2"
                           control={control}
                           render={({ field }) => (
                              <Input
                                 {...field}
                                 autoFocus
                                 type="email"
                                 placeholder="email"
                                 style={{
                                    padding: "15px 20px",
                                    fontSize: "16px",
                                 }}
                                 invalid={errors.email ? true : false}
                                 valid={!errors.email && dirtyFields.email ? true : false}
                              />
                           )}
                        />
                        {errors.email && (
                           <FormFeedback>{errors.email.message}</FormFeedback>
                        )}
                     </div>
                     <div className="mb-1" style={{ position: "relative" }}>
                        <div className="d-flex justify-content-between">
                           <label
                              className="form-label"
                              for="login-password"
                              style={{
                                 position: "absolute",
                                 top: 0,
                                 left: 0,
                                 background: "white",
                                 marginLeft: "20px",
                                 marginTop: "-10px",
                                 zIndex: "100",
                                 color: "rgba(77, 75, 85, 0.6)",
                                 padding: "0px 10px",
                                 fontSize: "16px",
                                 fontWeight: "400",
                              }}
                           >
                              {t("Password")}
                           </label>
                        </div>
                        <Controller
                           id="password"
                           name="password"
                           control={control}
                           render={({ field }) => (
                              <InputPasswordToggle
                                 className="input-group-merge"
                                 invalid={errors.password ? true : false}
                                 valid={!errors.password && dirtyFields.password ? true : false}
                                 {...field}
                                 autoFocus
                                 style={{
                                    padding: "15px 20px",
                                    fontSize: "16px",
                                 }}
                              />
                           )}
                        />
                        {errors.password && (
                           <FormFeedback>
                              {errors.password.message}
                           </FormFeedback>
                        )}
                     </div>
                     <div className="form-check mb-2">
                        <Input type="checkbox" id="remember-me" />
                        <div className="d-flex justify-content-between align-items-center">
                           <Label
                              className="form-check-label"
                              for="remember-me"
                              style={{
                                 fontWeight: "500",
                                 color: "rgba(77, 75, 85, 0.6)",
                                 fontSize: "12px",
                              }}
                           >
                              {t("Remember Me?")}
                           </Label>

                           <Link to="/forgot-password">
                              <span
                                 style={{
                                    color: "rgba(77, 75, 85, 0.4)",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                 }}
                              >
                                 {t("Forgot Password?")
                                 }                              </span>
                           </Link>
                        </div>
                     </div>
                     <Button
                        type="submit"
                        style={{ backgroundColor: "#0A1172" }}
                        block
                        disabled={!isValid}
                     >
                        {t("LOGIN")}
                     </Button>
                     <br></br>
                     <Link
                        className="btn btn-white text-center d-block w-100"
                        style={{
                           color: "rgba(10, 17, 114, 1)",
                           border: "1px solid rgba(10, 17, 114, 1)",
                           // display: 'block',
                           // width: '100%',
                           // padding: '0.54rem 0rem',
                           // borderRadius: '0.358rem',
                           //               ,width: "60px",
                           // height: "16px",

                           // fontFamily: 'Public Sans',
                           // fontStyle: "normal",
                           // fontWeight: "500",
                           // fontSize: "0.90em",
                           // lineHeight: "16px",

                           // display: "flex",
                           // alignItems: "center",
                           // textAlign: "center",
                           // letterSpacing: "0.43px",
                           // textTransform: "uppercase",
                        }}
                        to={"/register/account-details"}
                     >
                        {t("SIGN UP")}
                     </Link>
                  </Form>
                  {/* <p className='text-center mt-2'>
              <span className='me-25'>New on our platform?</span>
              <Link to='/register'>
                <span>Create an account</span>
              </Link>
            </p> */}
                  <div className="divider my-2">
                     <div className="divider-text">{t("or")} </div>
                  </div>
                  <div className="auth-footer-btn d-flex justify-content-center gap-2 pb-5">
                     <button
                        style={{ border: "none", backgroundColor: "white" }}
                     >
                        <MdOutlineFacebook color="#497CE2" size={18.33} />
                     </button>
                     <button
                        style={{ border: "none", backgroundColor: "white" }}
                     >
                        <TiSocialTwitter color="#1DA1F2" size={18.33} />
                     </button>
                     <button
                        style={{ border: "none", backgroundColor: "white" }}
                     >
                        <AiFillGithub color="#272727" size={18.33} />
                     </button>
                     <button
                        style={{ border: "none", backgroundColor: "white" }}
                     >
                        <CgGoogle color="#DB4437" size={18.33} />
                     </button>
                  </div>
               </div>
            </Col>
         </Row>
      </div>
   );
};

export default Login;
