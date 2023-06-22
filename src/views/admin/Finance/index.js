import React from "react";
import { Input, Table } from "reactstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { Card } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFinancialAsync } from "../../../redux/slices/home/financialSlice";
import { useTranslation } from "react-i18next";
const index = () => {
  const {t} = useTranslation();
  // const FinancialData = [
  //   {
  //     name: "Lorem ipsm",
  //     descripton:"City,Country",
  //     id: "#1122",
  //     watchlist: "security database",
  //     hit: "Potential Positive",
  //   },
  //   {
  //     name: "Lorem ipsm",
  //     descripton:"City,Country",
  //     id: "#1122",
  //     watchlist: "security database",
  //     hit: "False Positive",
  //   },
  //   {
  //     name: "Lorem ipsm",
  //     descripton:"City,Country",
  //     id: "#1122",
  //     watchlist: "security database",
  //     hit: "Potential Positive",
  //   },
  //   {
  //     name: "Lorem ipsm",
  //     descripton:"City,Country",
  //     id: "#1122",
  //     watchlist: "security database",
  //     hit: "Potential Positive",
  //   },
  //   {
  //     name: "Lorem ipsm",
  //     descripton:"City,Country",
  //     id: "#1122",
  //     watchlist: "security database",
  //     hit: "False Positive",
  //   },
  //   {
  //     name: "Lorem ipsm",
  //     descripton:"City,Country",
  //     id: "#1122",
  //     watchlist: "security database",
  //     hit: "False Positive",
  //   },
  //   {
  //     name: "Lorem ipsm",
  //     descripton:"City,Country",
  //     id: "#1122",
  //     watchlist: "security database",
  //     hit: "False Positive",
  //   },
  // ];
 
  const {
    financial: { financial, loading, error },
  } = useSelector((store) => store);


  const dispatch = useDispatch();

  useEffect(() => {
    const res = dispatch(getFinancialAsync());
    console.log(res);
  }, [dispatch]);
 
  return (
    <div>
      <div>
        <h1 style={{ color: "#0A1172" }}>{t("Financial")}</h1>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eius
          nostrum quae? optio, omnis odit numquam quod nemo repellendus
          blanditiis quo expedita placeat assumenda.
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
                <input type="text" class="form-control" placeholder={t("Search HIT Assessment")} aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="col-4 col-lg-4 ">
              <Input className="" type="select">
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
        </div>
      </div>
      {/* Table Section */}
      <div className="mt-7">
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
              <th scope="col" style={{color:"rgba(77, 75, 85, 1)", fontWeight:"700", fontSize:"12px", lineHeight:"14px"}} >{t("TRANSACTION NAME")}</th>
              <th scope="col" style={{color:"rgba(77, 75, 85, 1)", fontWeight:"700", fontSize:"12px", lineHeight:"14px"}} >{t("TRANSACTION ID")}</th>
              <th scope="col" style={{color:"rgba(77, 75, 85, 1)", fontWeight:"700", fontSize:"12px", lineHeight:"14px"}}> {t("WATCHLIST TYPE")}</th>
              <th scope="col" style={{color:"rgba(77, 75, 85, 1)", fontWeight:"700", fontSize:"12px", lineHeight:"14px"}}> {t("HIT ASSESSMENT")}</th>
              <th scope="col" style={{color:"rgba(77, 75, 85, 1)", fontWeight:"700", fontSize:"12px", lineHeight:"14px",minWidth: '120px'}}> {t("ACTION")}</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {financial?.map(({ transactionName, id, watchlist, hit }) => (
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
                <td className="">
                  <span className="d-block table_customer_hading">{transactionName}</span>
                  {/* <span className="d-block  table_risk_description">{descripton}</span> */}
                </td>
                <td>{id}</td>
                <td>{watchlist}</td>
                <td>
                  {hit === "Potential Positive" && (
                    <span  className="rounded px-1  d-inline-block
                    d-inline-block" style={{ backgroundColor: " rgba(40, 199, 111, 0.16)", color:" rgba(40, 199, 111, 1)" }}>{hit}</span>
                  )}

                  {hit === "False Positive" && (
                    <span className="rounded px-1  d-inline-block
                    d-inline-block" style={{ backgroundColor: " rgba(255, 159, 67, 0.16)", color: " rgba(255, 159, 67, 1)" }}>{hit}</span>
                  )}
                </td>
                <td className="">
                  {/* <span className="px-1">
                    <TbEdit />
                  </span>
                  <span>
                    <RiDeleteBinLine size={17} className="" />
                  </span> */}
                  <span className="px-1">
                    <AiOutlineInfoCircle size={17} className="" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      </div>
    </div>
  );
};

export default index;
