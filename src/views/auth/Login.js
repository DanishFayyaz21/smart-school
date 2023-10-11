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
import { login } from "../../redux/authentication";

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
               You have successfully logged in as an {role} user to Smart school.
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

   const onSubmit = async (values) => {
      console.log("ksssssssssssssss", values)
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

         const res = await dispatch(login(values)).unwrap();
         console.log("ssssssssssssssssss", res.data)
         const data = {
            ...res.data.user,
            ability: [{ action: "manage", subject: "all" }],
            accessToken: res.data.token,
            refreshToken: res.data.token,
         };
         dispatch(handleLogin(data));
         ability.update([{ action: "manage", subject: "all" }]);

         navigate(getHomeRouteForLoggedInUser("admin"));
         dispatch(setToastMessage({ message: res?.message, success: true }));

         // const res = await post("login", data)
         // if (res.data.status == 200) {
         //    const logindata = {
         //       ...res?.data?.data.user,
         //       accessToken: res?.data?.data.token,
         //       refreshToken: res?.data?.data.token,
         //    };
         //    dispatch(handleLogin(logindata))
         //    ability.update([
         //       {
         //          "action": "manage",
         //          "subject": "all"
         //       }
         //    ]);
         //    navigate(getHomeRouteForLoggedInUser(res?.data?.data?.user?.role));
         //    // navigate("/");
         //    toast((t) => (
         //       <ToastContent
         //          t={t}
         //          role={res?.data?.data?.user?.role}
         //          name={res?.data?.data?.user?.fullName || res?.data?.data?.user?.user_name}
         //       />
         //    ));
         // }

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

               <h1>Smart School System</h1>
            </Link>
         </div>
         <Row className="mt-5">
            <Col sm="12" lg="5">
               <div className="justify-content-center d-flex  ">
                  <img
                  className="mt-5 ms-5"
                     // className="w-100"
                     style={{ height:"350px",width:"300px" }}
                     // fluid
                     src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTERUSExMWEhUWFxoaFRYXGBcYFhgZGBUXGBgYFxoYHiojGBolGxgXIjEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPQAzwMBIgACEQEDEQH/xAAcAAEAAwEAAwEAAAAAAAAAAAAABQYHBAECAwj/xABGEAABAwIDBAcDCwMCBAcBAAABAAIDBBEFEiEGEzFBByJRYXGBkTJSoRQjM0Jic5KxssHRcoKiwvAVNOHxJTVDY4Oj0iT/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAOREAAQQABAIHBQYGAwAAAAAAAQACAxEEEiExE0EFIlFhcZGhI4Gx0fAUMkKywfEzUmJykuEVJIL/2gAMAwEAAhEDEQA/ANvRERERERERERERERERERERERERF4JsiLyvlPUNYLuNlFVe0LGOyniqftNtM19mg8XW0+PgANb8lU+UNFq+LDvkcBS0OCsY/wBl1191nmyMzjKAHZhpc8r87dy0NIZOI3MFGaLhuyoiIrVUiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIvjVVAY25VI2o2vaxt2nnYAaknsAHErv2yrnAZW87C/LXRZHV76nrCJbvIk3kdycrhbVo7CBf1J5LJPKRYatmHibo5ysJxIOed605iAcp0I14nsC7sUMU0bYo8rQQN41oOZ32c1uHmF74zjVHU0mZoaJfqtIG8a61vNS+w2G5hd7ePFeJhWOxcgfICC07Ha+79t16Ej2NjEjNOVX2c1N7I4W1jAQLW5KzL0iiDRYL3X0jG5RS8V7sxtERFJRREREREREREREREREREREREREREREREQlEQqGx3FmxtIvYqJ2nx4sORly4mwA4knQBU2esE5LXzAFozdTMebQLO0+s4C4OvIlZ5Zw3RaY4PxOXjEMTlc8PdE6SK99HFvA/0EH1HivesfDWxFr4Jm9hIaHNI4EEOOneu7B8Lnm0kkc9mlgQNPPifMlXqgwONjbEBZmQOeczlc97W779yzbZbZF7ZMz3OkBtbMG3A8QNT3rVcOomxtAC+8UDW8BZfRbWRhqzSzF6IiKxUoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIq7tRi+6Fhx/dWJV7aTBnTEObxFiD3jgoSXl0VkWXN1lnOJiSR93XY+xyt6rswOhvfgLadupXnZSETRVQ63yoBvzVrZWte2Q5bnrF2Vut7aWHNXGk2bkzbyUlxA0v8AsqY6U0uKRycA8Fh8R1mj0zrCY3ZetutmYEaHZXnZbGWFobzGhvxvzB7Crc119QqXjuEl/wD/AFU4tIBd7BwkHaPtd/PgeVu7ZrHQ9oBOvZz/AO6uw84cKVEsd9ZvkrOiAotazIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi9ZZA0XOgXNFiMbjYOXLC7RXWiAouriISi9ZBofBEVS2l2sbADdwaOdys42nxqGpb1HhkoOZhs72m666cON+4lWDHGugrGVD4zIxucaNzuYXAWkDfrEAOGmtnlcG0O0cM0YLDK2aJwfC75PKLPHIkN9k8COYK8uaeYSABtjtuq91H9PReixjWgUFFUm3dWwCxjIbp7RIGnA3avvS7XAzCV7WxF1r5CS15PBwFuJ+Oi+ztp2CojqmMla6Rgjqo9xJbL9V3s2c5hv4tJXPDisG7npHCX5M854XCCXNG5xuWNGW7QHdYEdpVDZZd+EBtsfPly5dovbZSDa5FWQdJLB9e3kf4Vq2a2mbUNBDg4HgQQR8FScK23G5aJ97vAMrrU8js9tM/s/W427SV9thKB7p5ZgwwsklL2R2sQLAXLR7JJF7clow087nESNqux136D0tVyRto6UtXRAi9NYERF4c63FEXlFxuxOIHKXarrY4EXC4Da6QRuvKIi6uIiIiIiIiIiIiKK2kcRAbaKgUbZMoex9nG9weBsT6aK/bT/AEBWK9IcrmUED2OLHCcWc0kEdSbgRwWZ7DJM1gNXotUTssRK0Ok2ofHpK0jv5evBWGk2lidxK/PWEdI9RGMszW1De/qv/EBY+YJ71Y6XbrD5PbbJAe3Lp/8AWdfMK5+FxcWhbmHdr6bqOeF++i3JmKRH64Xk4lF74WPRbRULh1a23jcfqaF7Ox+iGprgfA3/ACaVVnl24bv8T8l3hR/zLR8UqqZ/tG6rdTU0rTZrcx5D/oFA4ZidHUbwxSOm3Tcz75xprwuBfgVXazpDa0WpqcN+1JYf4s4/iVL3PLqy0e/RaIo7HUs/BXMsc/gxsbe13H0/my9m3Z7cQeO1v8cVkOI43VVRtJI5w9wdVg1FrgacbaldlPjtdQvMLi5uTjFKMwGmluYFvdICjkf2jwWjgmuXgtgo6ikdxFlaMNq6dos02WOYbt3FM5rJ6chziGhzbOFyQBxsWjXtKmcTxaip5d1LM6F9g61nkWN7a5SOSnG5+ag2z3arNLGB94kLXP8AiMXvhekmKxD6wWRDHaI8K4eZH7hek20lA32qwu7m5nfpars8pNCN3+J+So4UY/EtNrdqImDQqv1W0UsukbTb3jo315+Sz2r2/oY/oonzO5EjK38TySPwqsY10g1c92sIp2HlHfPbvedfSytZhMXN+HKO06em65nhZtqVqtQ1zSx5eXOLwD2AWOgHktIwk3hb4LGdjyf+G0pJuTI8knibySrZsH+hZ4KiJpbI5pN0SL8DSlM7MxpXYiItKyoiIiIiIiIiIiKJ2n+gKxTpI/8ALY/vx+Uy23aRl4HLLsVwMVlK2EvyAS5iQLmzS/Qa6E34qgyNjnY92wIJWlgJhICw1FssXR1QgBpEjj2l9j6NAHwUXiXRdGdYJ3NPuyAOH4m2I9CvXZ0zhXGrI8R8rWc4d4WXIrNiWw1bFf5negfWiOe/g32vgoaTC526Ohlb4scPzC9COeKQWxwPvVJaRuFcei76Ot+6H5SKoq69G1JIyOsL2OYDELFzSL2El7X4qnQQue5rGi7nEBo7STYDXvXzuMIOKk/8/lC9no/+H9d6mNkqwxzOOXO10bxI08HMtcg+NgPNWDpCmZMC5oOaFzWguFiWuDrA9tnNH4ipTo62ayZ3VLN24uIcHixDWEaa8Lu/ILt21wSO0k878sWr8rCM0hAIjaOwZnanvaPDxHYmM4sMG4G/jWlc+XotfEj17f2/35rLcJ+ni+8Z+sKZ6V/+eH3TPzcobCfp4vvGfrCsHSlRSOrA5sb3N3TRcNcRe7tLgL3ejz/2h/a74hYukfuhURF3RYRUO9mCV3hG8/kFO4bsBWye1GIR2yOA/wARc+oXvyYmKMW9wHiV5IaTsFVEWrYd0YQNsZpXyHsYA1vhrcn1C7ano4onCzN5GRzD7+ocD+ywO6ZwodVnxr50fRW/Z30vpskLYbSf1H4vlK2TB/oWeCy7D8O+TwU8GbPkdbNa1/aN7XNuPatUw0fNN8F48bg6R7hsST5laJRUbQulERaFmREREREREREREUfjrbwuWU45iL6egnljtnYbA8bZntbmtztmv5LXMTZeJw7lltbhonhqKcnLnPG17Xym9ufsrNNlD2l+1i/C9VqivhuAWFT1L3vMj3Oc8m5cSS4nturBg+3FZT2G83zPdlu70d7Q9bdy0mg2GoY223O8PN0hJJ8hYDyC48V6O6SQHd5qd3ItJc2/e1x4eBC9F/SuDm6kjTXeB8NwqBh5G6g6r4Yb0l0zwBMx8LuZHXZ6jX/FTce2NCRcVLPPMD6EXWbYt0fVkRJY0Tt7WHrebTrfwuq/JhFQ3R0ErT3sePzCiOjMDP1o3+oPoRY967xpG6ELaosfp6mOdsEm8yRuzHK4AXa62rgL8DwWSYPSb2Vrb5WjrOd7rRxI7+AHeQrT0b0UkcdYXxvYDELFzS0Gwkva415Kt4PG45yB9UAkkAXzBwbrxJyHQdl+S8+WFsEr44zoK79wDy0XpYJ+ZhLlpNTicjmsbcvBuRlDnuA4i+UE+F/Hmo3Fr1ET4nEskc0bsOuAS1wc1ov22y+JF1admdq6NsTc53ZtaxFx5EaWXJtvjdHNF824PdbSwtbsN+S+aileycNERFHf6FUtgmw5dlqh23t2aeSyTChaoiB0IlZcf3hbDiW0tLBLuZpd2+wdq11rG9tQLcll9WP/ABAOsAHztc2xBBBk4gjvB87hSHSjQSvrA9sT3N3TRma1xbcF2lwLXX08OHjxEwY80KP6dopYcZIWgOCvM+2dC0XNS0/0h7j6NCr+K9J0LdIInSn3n9VniBqT4aLOYcFqXmzaeV3hG/8AhWXCOjiqk1lLYG99nv8AJrTb1IW7/j8BB1pH+v6No+S8/iyu0aPr3qJxfa+rqLh8pa33I+o3ztq7zJUZh2ISwSCSJ5Y4cxz7iOY7itew3YCiiAzMMzu2Rx/S2w9brxiuwNHK05Gbh9tHMJt5tJsR4WPeps6VwbPZtaQ3wFe8c/K1wwSHUnXx/VS1LUGVtK9wyukaHkDgCWNJH+S1GibaNo7lm9HBaWGMa5GAfkP9K0yEWaB3Ly8LsaV0+zQvdERa1mREREREREREREXpO27SO5ZuW5aiRvaAR5G37rSys9x+PJVNPIkj14fGyy4ttsWnDnUhYbjG11ZLKXGaSGxNmRucwN7uqdT3ldWFdIFZEbPcJ29kg18nCxv43Wk0ux9G175DCJXPe5xMgzgZnF1mtPVAF+y6967ZOilFnU0be9jd2fVlvitbukcCfZ8LTwHzv32CoCGXfN8VBYd0l0z7CVkkJ5kddnqLH/FTDNtqAi/ylo8WyA+haqtinRfxNNN/bKP9bR/pVdn6P69psIWu72yR2/ycCuDC9Gy6tky9xIH5h+pTPM3cX9dy0+HaCnqo52wSbzJG7McrgBdrre0BfgVl+AxPlJgjdkdcPY4HXM0FtvAhx9Fa9iNnqiliqzOzJnis3rNceqH39km3EKh0VU+J7ZGHK5puD/viFjfFHHI9kRtorXflrtovQwuZ7DehVsfgVc3R0Mb+85wT45LAr2hwGudo2KOP7QDyR3jOTbxCvGx+Nuq4A94AcAcxGg0JH7KK2w2vyRPbSSNLmkNe+1x1g7SM8HO077WPPhjDnF+XKPWvK1EOkLsvNUJxIq4Ys2YRStYDzJ3xc4n+5zlqOJbT0tPLuppd2+wOrXkWN7atB7Fj+FOvURE6/Os/WFcekLZeqqaoSwx525Gt9tgNwXX0cR2hbo4oZZQ2Z1CjrYGvLfRMYSwDKrLJtvQNGtQD4NkP5NUJifSdC24gifKe19mt8Ra5PwVUpuj6vcdY2x97pGW/wJKsuEdGDBZ1TMX/AGIxlb5uOpHgAtRw/RsOpeXdwN/lA+IWHPM7YV9d6quJ7dVs1/ndy33Yhl/y9r4rs2L2pqxVRRGR87JHhrmyOLrAkAuDjqLDXs4rSqXZejY3K2liI+0wPPq+5Xzj2UpWVEdRHFunsJ0Zow3aW6t4C176W4Lh6RwZY6MRUKNaDetNtvcUEMlg2prB489X4Bo/f91ogVG2KizSOk7XEjwvp8FeVThxTFLEnrUiIivWdERERERERERERFUNt6U2DwNRqPEaq3qPxumzxEKEgtqsidlcCsA6V4X3gnY52R7S0gE5Q4dZpt2kE/gVNwzaKqgIMczx9kkuYfEO0W2GgjkaYZo2yBjrhrwCNb2Njz1cF8ZdlqJ7bGlisfdaGn1ZYruH6TjihEMrLrTlt4FWSYdxeS0qq4N0nRkBtTGWO9+PrN8S0m7fK6nRt5h9r7/y3ct/0qFxboxhdrTyui+y8Z2+AOhHndV2Xo1rAdDE7vDyP1NClwujJdQ8t7rr4g+hIUc0zdKv67loVLtHT1cc7YHOdkjJcS0tHWa61r68jyWNLSNjtmp6OOqM2XrxWbldf2WvvfTvCzdZXMiZK5sRtulG75ar0sEXFpLt1fNn6V0tPHExznRnV0beqHOuc29d7o4BvA2ub304dvafdGGK40DiQ0WaPZAt6KW2DxPcUpdkL3FzsgvZtur1nuPsi9xbUnWwOqgtuqt8kke8IL8pdo0tAa51g0A6kDKTc69Y9yztB4p7EZfF81B4T9PF94z9YWu4ttXS0025me5jsodfKXNsb+7c8uxZFhP08X3jP1hXjbvZCpqqnexZC3I1vWdY3Bd3d60RxwvlDZjQo66DX32oY0uFFqm3beYeBff37hHJf4tVcxrpO0LaWK325LfBgPxJ8lFU/RnVk9Z0TBzu4k+garLhPRpTs1ne6Y9g6jPQHMfXyWrh9GQ9YuL+7f4ADzNdywZpncqWa12NVExJlmkffkXHL5NGg8gtF6NontopZnOcd47LGCSQA3q3A5dZx/CrQzZmjAt8lh82NJ9SLrop6NueOniaGMb1srRYC5NhYeJPmoYnpJmIi4MbMuo7NhqpxQFr8zirjshSZIgVYFz0MOVgHcuhdaKFKh7sziUREUlFERERERERERERF4cLiy8oiKg7SUhhmEoGnB3gf938ljm32Fvo6nfwOcyOa7gWEtyu4ubcHhrcePcv0fjVCJGEWWfTULHfMTxtkDTdge0OGlxwPMAnyKpZMcLLnqwdCO0e/sK05eKzvCyrC+kKsisHubO3/wBwdb8TbH1up2HpUH1qUj+mW/wLNFaq3Y2ilFjTtb3x3YR+HQ+YVZrOixhPzU72jsewPPq0t/JXDEdGSn2jMp94/L8lDJM3Y39d6lsC2sFdHUgQ7oRxk3L818zXcsotw71lJWqbP7JmhiqSZd5vIyPYy2ytf9o34rKysruDxXcD7ulb9mu+u69LBZspzbq/dHTohG98xDWRv4u4Xc1uUNHNxynQaqF28qWyVIe3MAWCwc3K4dd/EHgDxF9bHgpTo6pt9nYTYMdmuLAgOb1teQORvooPbK3yt+UgtysykEEEZG8CDw4qkD2hPcpNHtio7Cfp4fvGfrC0rafbcUdRuTAZBkDswfl430tlPZ2rNcJ+ni+8Z+sLSNrdiDWT74TiPqhuXJm4E63zDtV0fA4o+0fdo9u/LbVVY3Ppk3UNP0q+5S+bpP2DP3VexTbutmuBJuW9kQy/5au+KtdB0XRA3lnfJ3MaGDwJJcfyVlpdkqKMWFNGe94zn1fdavtfRsJ9mzMfr+Y36LBkmdua+u5Uvo1wove+vnJcGXEZdckutq7XjYGw7yexa9sjQFxMrhq43/gKEoaBrnNhiY1kTDq1oAbe97ADTiSfErRcPpgxgAVLpHYmUyu9w7ANh8VNwETMo3K6kRFcsyIiIiIiIiIiIiIoetx5kb8p43UjS1TXi4UQ4FSLSBZX3RF6ySBouTZSUV7EKsbTYNnGZuhGoI5FT8VbG7g4FfZwBHaoOAcKU2uLDaxfafAPlcZync1MY6rgSA4e6631TyP1Se/XJKipqYXujfJLG9ps5pe4EH1X6b2gwO/XZo4cCFnW1ezLKxutoqlo6rj7LwPqu7R8R3hTwmLOGPDl1Zy/p+Y8681ZJGJBnZuq70cVssjKzeSPktELZnOda4kva50VJKvWweGy05ro5mFjhFwPAi0mrTwI7wqKVDF5TiXlu3Vqv7R2aLd0f/DP12q37BxCQSxkgC7XHS97NkOt9CBbnwJuoDaF96qbsEjgPBpyj4BXvo2o45ITrqCQ8DTXWxP9p08+9Vnb8MFWWtOYtaA9x1JcSTqeZAIWJrxxC1XMd7UhQuE/TxfeM/WFYuk7EZmVuVksjW7pps17mi93a2BVdwn6eL7xn6wrZtzgc1XiQZE2/wA0zM46MaLu1cf24lbsGWNxAL6oNdd7bhZukAaFKo4WKuqlbDHJI9zu17rAc3ON9AFr2A4KKZggjJkldbeym5N/PgOxvLjxOvz2awFlKzc0/XldbeykcT2DsA5N5c7laFgGBiMXPHmTxuu4rEnFOysFMHr3nu7B7ysscYiGZ26+2z2EiJg0U4vGgHYud9fGDYuF1wANFKkkvNrpReGuBFwvKkooi5K2vbGLlfDDMYZNo1czC6Uspq6UkiIuqKIovGcYbALlRcW2EZtwUC9oNFWCJzhYCg9p6cCpbcaEkeo0872TDsTfA4AnMy9g7s5Wd3r32ormTDOw9ZpBt4aqg7Q4w+jrs4GeCoY1z4zwJAyEtvwdYN7jfXtGJ9iTqlbmNLmgELcqDEGyNuCq5tRi5vu2auOgVbwbFxkE0D95EeI+sw8wR3dn7LjxrFxTwvqpNXu0iaeZPAfue4Kb57bQ3VbIKda7YJSHuZHODI2xewkXFxe9hq0HwKmKTaWSPSRpA7eI9Vi8uAVpYaw3zEGQkOtLY6l+UageHourCNvqiKzZQJ2/a6r/AMQGvmD4qDc7fum1odBm21W/0ePxSCxIXHi+DRzDM068rcVm2H7UUM31zTP+11B+LVnrYqx01ROwBzHiRvLW1/A8CpccHR4Wfg5DY08V4qWOjvHMC5pBGYdh0Oa35hZ9juwLgN5SO3reO7JGYf0u4OHcbHxWmPx24tNGfG2nqNFHvMd80MmW+paeB8lXlrVhVzHubr+yxugxGopHu3bnQvtleCNfAtcOI+C+FPTyzyZWNdLI43NrlxJOpPmdSVreL4dT1Iy1EeV3KRvEeDuzuIIX2w6GKBm7po2sbzcefeb6uPipcQ8m6/XNX8bnWqrWz+wzYi2aqfq0giNp0BGozO+sb8m9nEq8U0Ek5s0FjOZ+sf4XxifC05pX7x3w8uxd3/HX2tFGQO21h6lcoE5pCs73POv7Kx4ZhkUDRewsvFftLHGNCFT6yoksXzTNibzNwB+J1gFWsQ2woob7u9Q8cx7N/wCt2nm0FWcfkwKoQZjrqVdqraCaX2GkDtOg/wCvkokyEvLd+HTNGbICNBfmOPddZriG2FZVO3cV4w7QMivnPdm9o+VlzU8NRQmGs4Fz3tLbm92HK9knZm63bwv2KDg9251WlsFCtAv0Hsxi4kaGnjzUhiuLNiadVn2H4k2zKqE3jkAJ7jw1776HvC+WPYwyJpnqTYfUiHtOPZb/AGBzUxiOpXNZTAC6/RSVVVPqHXcS1nLkXfwFI7DRXc544EkjstfRZ5sviktU+oq5NA1u7hYPZbnNz4nRlzzvyGi0TZ7EoqeMAnWyjFfEtxVkrSGloV2RVaXbKMcLKbwrERM3MFsD2nQLC6NzRZCjdqsN3rL81RquSTduyRMkmZxY/TOPsnkT36X004rV3tBFiqptDgV+uzRw4EKieLNqFfDIKylZKzbuIEtloshBscrtQRxBBaLFRe2O0NPVxRCNkjHxkgZg22QjUAhx1u1vFWrabZltXcgCKqA/tkt2/wA8R3hZjW0UkLzHIwseOIP5947xoqIwwmxuOVr0owwmwrV0YxSmpc5ry2NrfnByfe4YLdt7m/cRzXJt/iMktUWPa5jY9I2uFrg8X9+a3HsAXTsLKWwV7mktc2C7SOIIbKQR5rrwTGnV5FLU04qeyVlmvYObncAB3gjsseCE08u7EJIeXVsvWsxmCaVs8M0sVRNu4iwtaWRscQ14u4Wy8xbW/ZfTqxXCoCyri+SCFlNHeOfUOe8NuASfbDjpz+Itw41sBKy7qZwnb7psJB3e674HuUJWY1WDLFM+QiNzTu5LjVpuM99XDTmgAdWUrgaDWQroxHZWSNzmteHGKATTX6oZfiwHXMdCRw0XKYayj61poAbajMGnsuR1T4Keqtpqea7WxuidUSRfKXvcC0MYQCGkakWHMDiVNYziAqqacUw3jpJ2wuBe5zQARlkY06NaerqLdutkD3j7y7ncKDgqxR7e1jPacyX+tuvqyyk4+kMH6Ska7tId+xafzXRtPgcLaONkJjJilYx8gyl3Wu12e2oOcjQ8LL1xTZ+mENS1kBaadlxLvPnHOEbZCXMOmQ3tcd9gFz2Z1r6+iFC4zrS927d0h408g8C3/wDQXh+3lIPZppD/AFFv8lfHHsApIaZz2saH7prgTOQ7M62ojPtC/wC6jNl6WkkhmMsDpJIo3SOO8c0OA4NAB0NuaZWVeqUzLm1813ydIpH0VKxneXX/AEtb+aiq3bmtk4SNiHYxoHxdc/FTFBQUrWUx+Sb4VcjwXZnHctz2a0Ec2g6nQ9Rx8OfZSjjZiNRSu68bmyxd5APaODsocNE6gs1spdQX1dlXjQ1dQDIWTS2bmzOzHq9oLuI8FJ4fsvaRxqHfNMp/lB3RzOcw3sGki19Dr3d9xZm4k1tZHWCZvyeaIxi5AMBaMwa5g1tmafNxHZeHxbbFpdBNA3JKxr2SsLbxOa4jqjUEtu240HFdLnu0CZ3u0apTBm0kO4e0HczvzRveGiSKaM5cjnDix2o7teTrjj26xyGWKSnP0sc92ltiwgNIuTfjlOUjtb6V+srKiucyNkQyxghkULLMZc6k9l7cTporDgnR6bh1U8NvwiYRmPOxdwHg2/iEIa05nFcLWtOZx1Xz6McRkEjoMrnxO6xIGkbrcSeQcBbxA71C7cNmFbIJnl/Nh5bs6tAHK3DxBKk8d2olgzUtPB8ia3Q6DeHvvwF+0XJ43XP0l/8AO/8AxM/1Lrbz3W6k2891uu3ZraikpqRsL2SPeXFzw0C176alwv1Q1d0W2sb3tjgojK9xs0Oc0H9JVGwvDJaiQRxMLnHj2NHa48gtS2Z2eZTDJF85O4Wklto37Lewd3ryC49jQe0nkuSNY3xUpG1zwIsrGyOHzgZqGg8gbC59PyV/wCh3UYCj9ncCEYzO48STxJVlAWiCLKLXmTSX1Qi8OaDoV5RaVnVbx3Z5sguOPIjiqPjmEMkbu6qPOB7MoFnt8x/27QtcXDXYayQahUSQh2o3WiOcjQrGcE2SMIqmNlD454sjH21Fw8dYcDbMOB1tyU1gODsjaIKYWb/6kn1nnx/2ByVkqtknB3UJAPtAHQ+KsWE4S2Jo01VDYHF3WV78QKu7VZqdl3NAdGS025c/Ec1CYjR5hkqYGyt7coNvAHge8FaqueejY/i0K1+Ga7VUtxB/EsMrNiKOT6KR0DvdPWHo/U/iUNU9H1Uw5opI324EEsf8dB6rdazZeJ/JRE2yDm/RuLfAkKrhSt2NrS3Ff1eaxCXA8QiY9m6lyyW3gbaQOsbgkNJub8171mL4kYTDJvchGU5orOLewuLblbA/A6pvBxPiAf2Xy+Q1Q5NPkf5UTn5tVvHB7FkVbtRUvjMT2R2LMl931gLW0J4FRmGVk0QkbG2+9jMb+qT1Xcbdh71tm7qvcb/l/KCKq9xvo7+VzMQKy+v+l0SgCqHmskwqsxGJhjgE4YdbNjLuPG12nL5LxS7LVznZhC9pN+s5wYdeJOYg8z6rYRQVRPBo/tP7lfePAKl3F5HgAP2UvacmrhnrXRZbR9HM51lljjHdd58+A+Km6HY+hiN3l1Q7sJ09GW+JK0KDY8nWQl39RJ/NTNJs1EzlddEUjtyqXYrv8lSqGjeQGQRNhZysAPQDQfFSo2VdkLnEl/aTqPDsV1hpWt4ABfYhXMwzWrMcQfwrHdosBZUt3M3UlH0coGvge0drfSyjNodlflNWZpZBHCGtGmr3EA3Dezj3+C1fHMCEoNhqozDtlDfNKS49+qpMDw6m7LQ2cVd0q5guDDKIqePcx8yPbd3k8f3V5wXA2xNGikqSibGLALpV8cIas0kxdoEAREV6oREREREREREREREREREREReERETIOwJkHYF4RcReyIi6iIiIiIiIiIiIiIiIiIiIi//Z"}
                     alt="Login Cover"
                  />
               </div>
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
                     {t("Welcome to Smart School ")}
                  </CardTitle>
                  <CardText
                     className="mb-2"
                     style={{
                        color: "rgba(77, 75, 85, 0.6)",
                        fontSize: "16px",
                     }}
                  >
                     {t("Please sign-in to your account and start Learning")}
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
                     {/* <Link
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
                     </Link> */}
                  </Form>
                  {/* <p className='text-center mt-2'>
              <span className='me-25'>New on our platform?</span>
              <Link to='/register'>
                <span>Create an account</span>
              </Link>
            </p> */}
                  {/* <div className="divider my-2">
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
                  </div> */}
               </div>
            </Col>
         </Row>
      </div>
   );
};

export default Login;
