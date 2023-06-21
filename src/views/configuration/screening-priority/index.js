import { Fragment, useState } from "react";
import { ButtonGroup, FormGroup, Progress } from "reactstrap";
import { CiExport } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { ToggleButton } from "reactstrap";
import {
   Row,
   Col,
   Card,
   Input,
   Button,
   CardTitle,
   CardHeader,
   Table,
} from "reactstrap";

// ** Third Party Components
import "cleave.js/dist/addons/cleave-phone.us";
import { useTranslation } from "react-i18next";

const ScreeningPriority = () => {
   const [rSelected, setRSelected] = useState(1);
   const {t} = useTranslation();

   const ScreeningData = [
      {
         name: "Lorem ipsum dolor sit amet, consectetur elit",
         enable: <ToggleButton />,
         setpriority: "High",
      },
      {
         name: "Lorem ipsum dolor sit amet, consectetur elit",
         enable: <ToggleButton />,
         setpriority: "Medium",
      },
      {
         name: "Lorem ipsum dolor sit amet, consectetur elit",
         enable: <ToggleButton />,
         setpriority: "Low",
      },
      {
         name: "Lorem ipsum dolor sit amet, consectetur elit",
         enable: <ToggleButton />,
         setpriority: "High",
      },
   ];
   return (
      <Fragment>
         <div className="">
            <h3 className="py-2">{t("Screening Priority")}</h3>
            <span>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam.
            </span>
         </div>

         <Row className="py-1">
            <Col md="6">
               <Card>
                  <CardHeader className="pb-5">
                     <CardTitle tag="h4">
                       {t(" Alert Date Priority (choose sorting priority)")}
                     </CardTitle>
                  </CardHeader>
                  <div className="w-100  d-flex justify-content-between " style={{height: "110px"}}>
                     {/* <ButtonGroup>
                        <div className="px-1">
                           <Button
                              color="primary"
                              outline
                              onClick={() => setRSelected(1)}
                              active={rSelected === 1}
                           >
                              FIFO
                           </Button>
                        </div>
                        <div>
                           <Button
                              color="primary"
                              outline
                              onClick={() => setRSelected(2)}
                              active={rSelected === 2}
                           >
                              LIFO
                           </Button>
                        </div>
                     </ButtonGroup> */}
                     <div className="w-50 pt-2 h-75 d-flex ms-1 rounded-1 border-primary">
                     <input class="form-check-input" type="radio"/>
  <label className="px-1">
    FIFO
  </label>
                 
                      <span className="px-5 ">Default</span>
                     {/* <p className=""> FIRST-IN-FIRST-OUT</p>  */}
                     </div>
                     <div className="w-50 pt-2 h-75 me-1 rounded-1 border-primary mx-auto" >
                     <input class="form-check-input" type="radio"/>
  <label className="px-1">
    LIFO
  </label>
                       <p className="px-3 pt-1"> LAST-IN-FIRST-OUT</p> 
                     </div>
                  </div>
               </Card>
            </Col>
            <Col md="6">
               <Card>
                  <CardHeader className="">
                     <CardTitle tag="h4">{t("Job Type (choose keywords)")}</CardTitle>
                  </CardHeader>

                  <span className="px-1">
                     You can fix an option in the input and add any other option
                     as well.
                  </span>
                  <div className="  px-2 m-1 py-1 border border-light border rounded-3  ">
                     {/* <Input type='radio' className=""  /> */}
                     {/* <Label className='px-1 ' style={{color: "rgba(51, 48, 60, 0.87)"}}>
                LIFO
              </Label> */}
                     <span className="d-flex  py-1"> Type Here</span>
                  </div>
               </Card>
            </Col>
         </Row>

         {/* button card section */}

         <div
            className="d-flex justify-content-between p-2 rounded"
            style={{ marginTop: "3rem", backgroundColor: "#FFFFFF" }}
         >
            <div>
               <button
                  type="button"
                  className="flex btn border bg-white hover-bg-danger"
               >
                  <span>
                     <CiExport
                        style={{ fontSize: "20px", marginRight: "1rem" }}
                     />
                  </span>
                  <span>{t("Export")}</span>
               </button>
            </div>
            <div className="d-flex gap-5"></div>
         </div>

         {/* Table card section */}
         <Card>
            <Table responsive>
               <thead>
                  <tr>
                     <th scope="col">
                        <div class="form-check">
                           <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                           />
                        </div>
                     </th>
                     <th style={{color:" rgba(51, 48, 60, 0.87)"}}>{t("Database Name & Alert ID")}</th>
                     <th style={{color:" rgba(51, 48, 60, 0.87)"}}>{t("Enable/Disable")}</th>
                     <th style={{color:" rgba(51, 48, 60, 0.87)"}}> {t("Set priority")}</th>
                     <th style={{minWidth: "120px", color: "rgba(51, 48, 60, 0.87)"}}>{t("Action")}</th>
                  </tr>
               </thead>
               <tbody>
                  {ScreeningData.map(({ name, enable, setpriority }) => (
                     <tr>
                        <td scope="col">
                           <div class="form-check">
                              <input
                                 class="form-check-input"
                                 type="checkbox"
                                 value=""
                                 id="flexCheckDefault"
                              />
                           </div>
                        </td>
                        <td className="px-2 py-2">{name}</td>
                        <td>
                           <FormGroup switch>
                              <Input type="switch" role="switch" />
                           </FormGroup>
                        </td>
                        <td>
                           <ButtonGroup className="px-1 ">
                              <Button
                                 className="border rounded-3"
                                 style={{
                                    marginRight: "10px",
                                    color: "rgba(234, 84, 85, 1)",
                                    backgroundColor: "rgba(234, 84, 85, 0.16)",
                                    borderColor: "rgba(234, 84, 85, 0.16)",
                                 }}
                                 //   color="primary"
                                 outline
                                 onClick={() => setRSelected(1)}
                                 active={rSelected === 1}
                              >
                                 High
                              </Button>
                              <Button
                                 className="border rounded-3"
                                 style={{
                                    marginRight: "10px",
                                    color: "rgba(255, 159, 67, 1)",
                                    backgroundColor: "rgba(255, 159, 67, 0.16)",
                                    borderColor: "rgba(255, 159, 67, 0.16)",
                                 }}
                                 //   color="primary"
                                 outline
                                 onClick={() => setRSelected(2)}
                                 active={rSelected === 2}
                              >
                                 Medium
                              </Button>
                              <Button
                                 className="border rounded-3"
                                 style={{
                                    color: "rgba(0, 207, 232, 1)",
                                    backgroundColor: "rgba(0, 207, 232, 0.16)",
                                    borderColor: "rgba(255, 159, 67, 0.16)",
                                 }}
                                 //   color="primary"
                                 outline
                                 onClick={() => setRSelected(3)}
                                 active={rSelected === 3}
                              >
                                 Low
                              </Button>
                           </ButtonGroup>
                        </td>
                        <td className="" size={17}>
                           <span className=" px-1">
                              <TbEdit />
                           </span>
                           <span>
                              <RiDeleteBinLine size={17} className="" />
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </Table>
         </Card>
      </Fragment>
   );
};

export default ScreeningPriority;
