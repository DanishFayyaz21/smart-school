import React from "react";
import { Button, Input, Table } from "reactstrap";
import { CiExport } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteBusinessAsync, getBusinessAsync } from "../../../redux/slices/home/businessSlice";
import { useTranslation } from "react-i18next";
const index = () => {
  const {t} = useTranslation()
 

  const {businessDirectory : {business , error , loading}} = useSelector((store) => store);

const dispatch = useDispatch();

useEffect(() => {
const res = dispatch(getBusinessAsync())
console.log(res)

},[dispatch])

  return (
    <div>
      {/* heading section */}
      <div>
        <h1>{t("Business Directory")}</h1>
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
        className=" w-100 d-flex flex-md-row flex-column gap-1 justify-content-between p-2 rounded"
        style={{ marginTop: "3rem", backgroundColor: "#FFFFFF" }}
      >
        <div>
          <Button
          outline block
          >
            <span className="me-1">
              <CiExport size={20} />
            </span>
            <span>{t("Export")}</span>
          </Button>
        </div>
        <div className="d-flex flex-md-row flex-column gap-1">
          <div>
            <Input
              id="search-invoice"
              className=" me-2 w-100"
              type="text"
              placeholder={t("Search Business")}
            />
          </div>
          <div>
            <Input className="w-100 " type="select">
              <option className="me-1" value="">{t("Filter by")}</option>
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
              <th scope="col">{t("BUSINESS NAME")}</th>
              <th scope="col">{t("EMAIL")}</th>
              <th scope="col">{t("CITY/COUNTRY")}</th>
              <th scope="col">{t("STATUS")}</th>
              <th scope="col" style={{minWidth: '120px'}}>{t("ACTION")}</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {business?.map(({id,businessName, email, city, status}) => (
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
                <td  className="py-2">{businessName}</td>
                <td>{email}</td>  
                <td>{city}</td>
                <td>
                    { status === 'Potential Positive' &&
                        <span
                        className="rounded d-inline-block px-1  "
                        style={{ backgroundColor: "rgba(40, 199, 111, 0.16)", color: "rgba(40, 199, 111, 1)"
                    }}
                        >
                    {status}
                  </span>
                }
                    
                    { status === "False Positive" &&
                        <span
                        className="rounded d-inline-block px-1"
                        style={{ backgroundColor: "rgba(255, 159, 67, 0.16)", color:"rgba(255, 159, 67, 1)"
                    }}
                        >
                    {status}
                  </span>
                }
                </td>
                <td>
                  <span>
                    <TbEdit size={17}/>
                  </span>
                  <span className="px-1">
                  
                    <RiDeleteBinLine size={17} className=""
                     onClick={e => {deleteBusinessAsync}}
                     />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* // Modal delete */}
      {/* <Modal
            isOpen={show}
            onClosed={handleModalClosed}
            toggle={() => setShow(!show)}
            className='modal-dialog-centered  '
          >
            <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
            <ModalBody className='px-5 pb-5'>
              <div className=' mb-1 text-center'>
                <h1 style={{fontWeight:"500", fontSize:"20px"}}> Delete Customer</h1>
              </div>
              <Row tag='form' onSubmit={handleSubmit(onSubmit)}>
                
              <p>Are you sure want to delete?</p>
          
    
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
  );
};

export default index;
