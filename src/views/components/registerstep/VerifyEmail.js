import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const VerifyEmail = ({getValues}) => {
   const {t} = useTranslation();
   const navigate = useNavigate();
   const email = getValues("email");
   return (
         <div className="my-3">
            <h1>{t("Verify your email")} ✉️</h1>
            <div style={{ marginTop: "5rem" }}>
               <p>
                  {t(`Account activation link sent to your email address: ${email} Please follow the link inside to continue.`)}
               </p>
               <div
                  className="d-flex justify-content-between align-items-center  "
               >
                  <div>
                     <span>{t("DIDN'T GET THE MAIL?")}</span>{" "}
                     <span className="text-danger">{t("Resend")}</span>
                  </div>
                  <div>
                     <button
                        type="submit"
                        class="btn btn-primary"
                        style={{ backgroundColor: "#0A1172" }}
                        onClick={() => navigate('/login')}
                     >
                        {t("SKIP FOR NOW")}
                     </button>
                  </div>
               </div>
            </div>
         </div>
   );
};

export default VerifyEmail;
