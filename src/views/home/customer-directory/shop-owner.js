import React from "react";
import { Input, Table } from "reactstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiDeleteBinLine } from 'react-icons/ri'
import { TbEdit } from 'react-icons/tb'
// import { Button, Table } from 'reactstrap'

const Shopowner = () => {
  const ShopownerData = [
    {
      name: "Lorem ipsum",
      nationality: "country",
      gender: "male",
      status: "Inactive",
    },
    {
        name: "Lorem ipsum",
        nationality: "country",
        gender: "Female",
        status: "Inactive",
      },
      {
        name: "Lorem ipsum",
        nationality: "country",
        gender: "male",
        status: "Active",
      },
      {
        name: "Lorem ipsum",
        nationality: "country",
        gender: "male",
        status: "Pending",
      },
      {
        name: "steven rods",
        nationality: "#621234AML",
        gender: "male",
        status: "Inactive",
      },
      {
        name: "Lorem ipsum",
        nationality: "country",
        gender: "Female",
        status: "Active",
      },

  ];
  return (
    <div>
      <div>
        <h1 className="py-1">SHOP OWNER + SUB ACCOUNTS</h1>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eius
          nostrum quae? optio, omnis odit numquam quod nemo repellendus
          blanditiis quo expedita placeat assumenda corporis consequuntur
          corrupti adipisci facilis architecto.
        </span>
      </div>
      {/* buttons section */}
      <div
        className=" p-2 rounded mb-2"
        style={{ marginTop: "3rem", backgroundColor: "#FFFFFF" }}>
        <div className="row ">
          <div className="col-lg-6 col-12 d-flex align-items-center gap-1">
            <div className="row  align-items-center">
            <div className="col-8 col-lg-8">
                <input type="text" class="form-control" placeholder=" Search Customer" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="col-4 col-lg-4 ">
              <Input className="" type="select">
                <option value="">Filter by</option>
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
        </div>
      </div>
      {/* Table Section */}
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
              <th scope="col">CUSTOMER NAME</th>
              <th scope="col">NATIONALITY</th>
              <th scope="col">GENDER</th>
              <th scope="col">STATUS</th>
              <th scope="col" style={{ minWidth: "120px" }}>
                ACTION{" "}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {ShopownerData.map(({ name, nationality, gender, status }) => (
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
                <td className="py-2">{name}</td>
                <td>{nationality}</td>
                <td>{gender}</td>
                <td>
                  {status === "Active" && (
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
                  {status === "Inactive" && (
                    <span
                      className="rounded px-1 d-inline-block"
                      style={{
                        backgroundColor: "rgba(22, 41, 245, 0.05)",
                        color: "rgba(10, 17, 114, 1)",
                      }}
                    >
                      {status}
                    </span>
                  )}
                  {status === "Pending" && (
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
      
                <td className="" size={17}  >
                  <span>
                    <TbEdit />
                  </span>
                  <span className='px-1'>
                    <RiDeleteBinLine size={17} className="" />
                  </span>
                </td>
           
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Shopowner;
