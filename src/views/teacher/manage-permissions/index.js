import React,{ useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { RiDeleteBinLine } from 'react-icons/ri'
import { TbEdit } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table } from 'reactstrap'
import { getPermissionAsync } from '../../../redux/slices/permission/permissionSlice'


const ManagePermissions = () => {
  const {t} = useTranslation();
  
  // const Permissiondata = [
  //   {
  //     name: "steven rods",
  //     assinged: "Administrator",
  //     date: "22 january,2023",
  //   },
  //   {
  //     name: "steven rods",
  //     assinged: "System User",
  //       date: "22 january,2023",

  //   },
  //   {
  //     name: "steven rods",
  //     assinged: "Support",
  //     date: "22 january,2023",
  //   },
  //   {
  //     name: "steven rods",
  //     assinged: "System User",
  //     date: "22 january,2023",

  //   },
  //   {
  //     name: "steven rods",
  //     assinged: "Administrator",
  //     date: "22 january,2023"

  //   },
  //   {
  //     name: "steven rods",
  //     assinged: "System User",
  //     date: "22 january,2023",

  //   },
  //   {
  //     name: "steven rods",
  //     assinged: "Administrator",
  //     date: "22 january,2023"
  //   }
  // ]

const {permission : {permissions,error,loading}} = useSelector((store) => store);

  const dispatch = useDispatch();
useEffect(() => {
  const res = dispatch(getPermissionAsync());
        console.log("hhhhhhhhhhhhhhhhhhhhhhh" ,res)

},[dispatch])


  return (
    <div>

      <div>
        <h1>{t("Permissions List")}</h1>
        <span>
        Each category (Basic, Professional, and Business) includes the four predefined roles shown below.
        </span>
      </div>
      {/* card section */}
      <div className="mt-1 px-2  bg-white">
        <div className="d-flex flex-md-row flex-column justify-content-between p-2 gap-2 mb-2">
          <div>
          <button
            type="button"
            className="flex btn border bg-white w-100"
          >
            <span>{t("Search Permission")} </span>
          </button>
          </div>
          <div><Button color='primary' className="btn w-100 ">{t("Add Permission")} </Button></div>
          </div>
      </div>
      {/* table section */}
      <Table responsive>
          <thead>
            <tr>
              <th scope="col">
                <td class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
              </th>
              <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)"}}> {t("NAME")}</th>
              <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)"}}>{t("Description")}</th>
              <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)"}}>{t("Assigned to")}</th>
              <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)"}}>{t("Date Created")}</th>
              <th scope="col" style={{minWidth: "120px", color:" rgba(51, 48, 60, 0.87)"}} >{t("ACTION")} </th>
            </tr>
          </thead>
          <tbody className="bg-white">
      
            {permissions?.slice(0,10).map(({permission,description}) => (
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
                <td  className="px-2 py-1">{permission}</td>
                <td  className="px-2 py-1">{description}</td>
                <td  className="px-2 py-1">{description}</td>
                {/* <td  className="px-2 py-1">06-06-22</td> */}
                 {/* <td>
                    { assinged === 'Administrator' &&
                        <span
                        className="rounded px-1  d-inline-block
                        d-inline-block"
                        style={{ backgroundColor: "rgba(40, 199, 111, 0.16)", color: "rgba(40, 199, 111, 1)"
                    }}
                        >s
                    {assinged}
                  </span>
                }
                    { assinged === 'System User' &&
                        <span
                        className="rounded px-1 d-inline-block"
                        style={{ backgroundColor:"rgba(168, 170, 174, 0.16)", color:"rgba(168, 170, 174, 1)"
                        
                        }}
                        >
                    {assinged}
                  </span>
                }
                    { assinged === "Support" &&
                        <span
                        className="rounded px-1 d-inline-block"
                        style={{ backgroundColor: "rgba(255, 159, 67, 0.16)", color:"rgba(255, 159, 67, 1)"
                    }}
                        >
                    {assinged}
                  </span>
                }
                </td> */}
                <td>06-06-22</td>
                <td className="" size={17}>
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
  )
}

export default ManagePermissions