// ** Reactstrap Imports
import { Card, CardBody, CardText } from "reactstrap";

// ** Images
import imageRight from "@src/assets/images/elements/image_right.svg";
import { useTranslation } from "react-i18next";

const DashboardMainCard = () => {
   const { t } = useTranslation()
   return (
      <Card className="card-congratulations">
         <CardBody className="rounded Card_Congratulations">
            <div className="d-flex flex-column flex-md-row-reverse justify-content-between align-items-center">
               <div>
                  <img className="congratulations-img-right" src={imageRight} alt="decor-right" />
               </div>
               <div className="text-center-responsive">
                  <p className="fs-4 fw-bolder">
                     {t("Dashboard")}
                  </p>
                  {/* <p className="fw-light" style={{fontSize: '0.875rem'}}>
                     You have done <strong>57.6%</strong> more sales today
                  </p> */}
                  <CardText className="text-start">
                     <p className="fs-6 fw-bold">{t("Statistics")} </p>
                     <div className="d-flex flex-column gap-2 flex-md-row justify-content-between mb-2">
                        <div className="w-100">
                           <span style={{ background: 'rgba(255, 255, 255, 0.2)', fontSize: '0.875rem', padding: "0.375rem", borderRadius: "5px", marginRight: '0.325rem' }}>90%</span>
                           <span className="fs-6 fw-lighter">Admissions</span>
                        </div>
                        <div className="w-100">
                           <span
                              style={{
                                 background: 'rgba(255, 255, 255, 0.2)',
                                 padding: "0.375rem",
                                 fontSize: '0.875rem',
                                 borderRadius: "5px",
                                 marginRight: '0.325rem'
                              }}
                           >
                              9.1k
                           </span>
                           <span className="fs-6 fw-lighter">Students</span>
                        </div>
                     </div>
                     <div className="d-flex flex-column gap-2 flex-md-row justify-content-between">
                        <div className="w-100">
                           <span
                              style={{
                                 background: 'rgba(255, 255, 255, 0.2)',
                                 padding: "0.375rem",
                                 fontSize: '0.875rem',
                                 borderRadius: "5px",
                                 marginRight: '0.325rem'
                              }}
                           >
                              0.1k
                           </span>
                           <span className="fs-6 fw-lighter">Teachers</span>
                        </div>
                        <div className="w-100">
                           <span
                              style={{
                                 background: 'rgba(255, 255, 255, 0.2)',
                                 padding: "0.375rem",
                                 fontSize: '0.875rem',
                                 borderRadius: "5px",
                                 marginRight: '0.325rem'
                              }}
                           >
                              3.1k
                           </span>
                           <span className="fs-6 fw-lighter">Transactions</span>
                        </div>
                     </div>
                  </CardText>
               </div>
            </div>
         </CardBody>
      </Card>
   );
};

export default DashboardMainCard;
