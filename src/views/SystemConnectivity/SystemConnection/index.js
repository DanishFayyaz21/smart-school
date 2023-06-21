import React from 'react'
import { useTranslation } from 'react-i18next';
// import { Table } from 'react-feather'
import { IoCallOutline, IoMailOutline } from 'react-icons/io5'
import { RiDeleteBinLine } from 'react-icons/ri'
import { TbEdit } from 'react-icons/tb'

import {
  Row,
  Col,
  Form,
  Input,
  Label,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormFeedback,
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
  Table
} from "reactstrap";


const SystemConnection = () => {


    const Connectivitydata = [
        {
          name: "steven rods",
          details:"example@gmail.com"
        },
        {
          name: "steven rods",
          details:"example@gmail.com"
    
        },
        {
          name: "steven rods",
          details:"example@gmail.com"
        },
        {
          name: "steven rods",
          details:"example@gmail.com"
    
        }
      ]
    const {t} = useTranslation();
  return (
    <div>
     <div className='bg-white p-2'>
        <h3 className='p-1'>{t("System Connection")}</h3>
 {/* table section */}
 <Table responsive>
          <thead >
            <tr className='bg-danger'>
              <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)"}}>{t("SYSTEM NAME")}</th>
              <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)"}}>{t("DETAILS")}</th>
              <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)"}}></th>
              <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)", minwidth:"120px"}}>{t("ACTION")}</th>
            </tr>
          </thead>
          <tbody>
      
            {Connectivitydata.map(({name, details}) => (
              <tr>
                <td  className="px-2 py-1">{name}</td>
                <td>
                   {details}
                </td>
                <td>{}</td>
                <td size={17}>
                  <span className='me-1'>
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

     </div>
     {/* Query Section */}

<div className='text-center '>
    <div className='mt-3' ><span className=' px-1 rounded' style={{backgroundColor:"rgba(168, 170, 174, 0.16)"}}>{t("Question")}</span></div>
    <div className='mt-2'><h2>{t("Facing any issue? Contact us")}</h2></div>
    <div className='mt-2'><span>Lorem ipsum dolor sit ant sapiente consequatur veritatis asperiores similique explicabo.</span></div>
</div>
{/* cards section */}
<div className='d-flex flex-md-row flex-column  gap-2 mt-2'>
    {/* card 1 */}
    <div className='w-100 p-4 text-center' style={{backgroundColor:"rgba(168, 170, 174, 0.16)"}}>
<span className='fs-3 px-1' style={{backgroundColor:"rgba(168, 170, 174, 0.16)"}}><IoCallOutline /></span>
<h6 className='mt-1'>+1 (234) 5678 901</h6>
<span>{t("We are always happy to help!")}</span>
    </div>
    {/* card 2 */}

<div className='w-100 p-4 text-center ' style={{backgroundColor:"rgba(168, 170, 174, 0.16)"}} >
<span className='fs-3 px-1'style={{backgroundColor:"rgba(168, 170, 174, 0.16)"}} ><IoMailOutline /></span>
<h6 className='mt-1'>username@gamil.com</h6>
<span>{t("Best way to get answer faster!")}</span>
    </div>
</div>
    </div>
  )
}

export default SystemConnection
