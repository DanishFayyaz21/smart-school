import React, { Fragment, useState,forwardRef  } from "react";
// import img from "../../../assets/images/avatars/smimg.png"
// import img1 from "../../../assets/images/avatars/smimg1.png"
// import img2 from "../../../assets/images/avatars/smimg2.png"
import { Button, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Modal, ModalBody, ModalHeader, Row, Table, UncontrolledDropdown, UncontrolledTooltip } from "reactstrap";
import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";
import { Archive, ChevronDown, Edit, FileText, MoreVertical, Trash } from "react-feather";
import { CiExport } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import {RxCopy} from "react-icons/rx"
import {FiUser} from "react-icons/fi"
import {HiPencilAlt} from "react-icons/hi"
import {AiOutlineCheckCircle} from "react-icons/ai"
import UserModel from "../Models/user-model";


import { Controller, useForm } from "react-hook-form";

// ** Custom Components
import AvatarGroup from '@components/avatar-group'

// ** FAQ Illustrations
import illustration from '@src/assets/images/illustration/faq-illustrations.svg'

// ** Avatars
import avatar1 from '@src/assets/images/avatars/1.png'
import avatar2 from '@src/assets/images/avatars/2.png'
import avatar3 from '@src/assets/images/avatars/3.png'
import avatar4 from '@src/assets/images/avatars/4.png'
import avatar5 from '@src/assets/images/avatars/5.png'
import avatar6 from '@src/assets/images/avatars/6.png'
import avatar7 from '@src/assets/images/avatars/7.png'
import avatar8 from '@src/assets/images/avatars/8.png'
import avatar9 from '@src/assets/images/avatars/9.png'
import avatar10 from '@src/assets/images/avatars/10.png'
import avatar11 from '@src/assets/images/avatars/11.png'
import avatar12 from '@src/assets/images/avatars/12.png'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RoleModel from "./roleModel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserAsync } from "../../../redux/slices/auth/userSlice";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef((props, ref) => (
  <div className='form-check'>
    <Input type='checkbox' ref={ref} {...props} />
  </div>
))

const ManageUsers = () => {

  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const {user : {users}} = useSelector((store) => store);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync())
  },[dispatch])

  const {t} = useTranslation();
   const Userdata = [
      {
         user: "FirstName SecondName",
         role: "Administrator",
         icon: <TbEdit className=" border rounded-4 border-white " style={{color:"rgba(0, 207, 232, 1)", backgroundColor:"rgba(0, 207, 232, 0.16)"}}/>,
         updated: "22 January, 2023",
         status: "inactive",
      },
      {
         user: "FirstName SecondName",
         role: "Business Owner",
         icon: <AiOutlineCheckCircle className=" border rounded-4  text-secondary border-white " style={{backgroundColor:"rgba(168, 170, 174, 0.16)"}}/>,
         updated: "22 January, 2023",
         status: "pending",
      },
      {
         user: "FirstName SecondName",
         role: "System User",
         icon: <FiUser className=" border rounded-4  text-warning  border-white" style={{backgroundColor:"rgba(255, 159, 67, 0.16)"}}/>,
         updated: "22 January, 2023",
         status: "active",
      },
      {
         user: "FirstName SecondName",
         role: "Administrator",
         icon: <TbEdit className=" border rounded-4 border-white " style={{color:"rgba(0, 207, 232, 1)",backgroundColor:"rgba(0, 207, 232, 0.16)"}}/>,
         updated: "22 January, 2023",
         status: "inactive",
      },
      {
         user: "FirstName SecondName",
         role: "Business Owner",
         icon: <AiOutlineCheckCircle className=" border rounded-4  text-secondary border-white" style={{backgroundColor:"rgba(168, 170, 174, 0.16)"}}/>,
         updated: "22 January, 2023",
         status: "inactive",
      },
      {
         user: "FirstName SecondName",
         role: "Administrator",
         icon: <TbEdit className=" border rounded-4 border-white " style={{color:"rgba(0, 207, 232, 1)",backgroundColor:"rgba(0, 207, 232, 0.16)"}}/>,
         updated: "22 January, 2023",
         status: "pending",
      },
   ];

   const data = [
      {
        totalUsers: 4,
        title: 'Administrator',
        users: [
          {
            size: 'sm',
            title: 'Vinnie Mostowy',
            img: avatar2
          },
          {
            size: 'sm',
            title: 'Allen Rieske',
            img: avatar12
          },
          {
            size: 'sm',
            title: 'Julee Rossignol',
            img: avatar6
          },
          {
            size: 'sm',
            title: 'Kaith Dsouza',
            img: avatar11
          }
        ]
      },
      {
        totalUsers: 7,
        title: 'Business Owner',
        users: [
          {
            size: 'sm',
            title: 'Jimmy Ressula',
            img: avatar4
          },
          {
            size: 'sm',
            title: 'John Doe',
            img: avatar1
          },
          {
            size: 'sm',
            title: 'Kristi Lawker',
            img: avatar2
          },
          {
            size: 'sm',
            title: 'Kaith D',
            img: avatar5
          },
          {
            size: 'sm',
            title: 'Danny Paul',
            img: avatar7
          }
          
        ]
      },
      {
        totalUsers: 5,
        title: 'System User',
        users: [
          {
            size: 'sm',
            title: 'Andrew Tye',
            img: avatar6
          },
          {
            size: 'sm',
            title: 'Rishi Swaat',
            img: avatar9
          },
          {
            size: 'sm',
            title: 'Rossie Kim',
            img: avatar2
          },
          {
            size: 'sm',
            title: 'Kim Merchent',
            img: avatar10
          },
          {
            size: 'sm',
            title: 'Sam Dsouza',
            img: avatar8
          }
        ]
      },
      {
        totalUsers: 3,
        title: 'Support',
        users: [
          {
            size: 'sm',
            title: 'Kim Karlos',
            img: avatar3
          },
          {
            size: 'sm',
            title: 'Katy Turner',
            img: avatar9
          },
          {
            size: 'sm',
            title: 'Peter Adward',
            img: avatar12
          },
          {
            size: 'sm',
            title: 'Kaith Dsouza',
            img: avatar10
          },
          {
            size: 'sm',
            title: 'John Parker',
            img: avatar11
          }
        ]
      },
      {
        totalUsers: 2,
        title: 'Customer',
        users: [
          {
            size: 'sm',
            title: 'Kim Merchent',
            img: avatar10
          },
          {
            size: 'sm',
            title: 'Sam Dsouza',
            img: avatar6
          },
          {
            size: 'sm',
            title: 'Nurvi Karlos',
            img: avatar3
          },
          {
            size: 'sm',
            title: 'Andrew Tye',
            img: avatar8
          },
          {
            size: 'sm',
            title: 'Rossie Kim',
            img: avatar9
          }
        ]
      }
    ]
    
    // const rolesArr = [
    //   'User Management',
    //   'Content Management',
    //   'Disputes Management',
    //   'Database Management',
    //   'Financial Management',
    //   'Reporting',
    //   'API Control',
    //   'Repository Management',
    //   'Payroll'
    // ]

    const columns = [
      {
        name: t("USER"),
        sortable: true,
        maxWidth: '100px',
        selector: row => row.email
      },
      {
        name: t("ROLE"),
        sortable: true,
        minWidth: '225px',
        selector: row => row.firstName,
      },
      {
        name: t("LAST UPDATED"),
        sortable: true,
        minWidth: '310px',
        selector: row => row._id
      },
      {
        name: t("STATUS"),
        sortable: true,
        minWidth: '250px',
        selector: row => row.lastName
      },
      {
        name: 'Actions',
        sortable: true,
        cell: () => {
          return (
            <div className='d-flex'>
              <UncontrolledDropdown>
                <DropdownToggle className='pe-1' tag='span'>
                  <MoreVertical size={15} />
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                    <FileText size={15} />
                    <span className='align-middle ms-50'>Details</span>
                  </DropdownItem>
                  <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                    <Archive size={15} />
                    <span className='align-middle ms-50'>Archive</span>
                  </DropdownItem>
                  <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                    <Trash size={15} />
                    <span className='align-middle ms-50'>Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <Edit size={15} />
            </div>
          )
        }
      }
    ]
   const [show, setShow] = useState(false)
   const [modalType, setModalType] = useState('Add New')
 
   // ** Hooks
   const {
     reset,
     control,
     setError,
     setValue,
     handleSubmit,
     formState: { errors }
   } = useForm({ defaultValues: { roleName: '' } })
 
   const onSubmit = data => {
     if (data.roleName.length) {
       setShow(false)
     } else {
       setError('roleName', {
         type: 'manual'
       })
     }
   }
 
   const onReset = () => {
     setShow(false)
     reset({ roleName: '' })
   }
 
   const handleModalClosed = () => {
     setModalType('Add New')
     setValue('roleName')
   }

   
     // ** Function to handle filter
     const handleFilter = e => {
      // const value = e.target.value
      let updatedData = []
      setSearchValue(value)
     


   if (value.length) {
    updatedData = users.filter(item => {
      const startsWith =
        item.firstName.toLowerCase().startsWith(value.toLowerCase()) ||
        item._id.toLowerCase().startsWith(value.toLowerCase()) ||
        item.email.toLowerCase().startsWith(value.toLowerCase()) ||
        item.lastName.toLowerCase().startsWith(value.toLowerCase()) ||
        item.lastName.toLowerCase().startsWith(value.toLowerCase()) 
        // item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
        // status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

      const includes =
        item.firstName.toLowerCase().includes(value.toLowerCase()) ||
        item._id.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase()) ||
        item.lastName.toLowerCase().includes(value.toLowerCase()) ||
        item.lastName.toLowerCase().includes(value.toLowerCase()) 
        // item.start_date.toLowerCase().includes(value.toLowerCase()) ||
        // status[item.status].title.toLowerCase().includes(value.toLowerCase())

      if (startsWith) {
        return startsWith
      } else if (!startsWith && includes) {
        return includes
      } else return null
    })
    setFilteredData(updatedData)
    setSearchValue(value)
  }
     }

    
   // ** Function to handle Pagination
   const handlePagination = page => {
    setCurrentPage(page.selected)
  } 


  //  Custom Pagination
   const CustomPagination = () => (
     <ReactPaginate
       previousLabel=''
       nextLabel=''
       forcePage={currentPage}
       onPageChange={page => handlePagination(page)}
       pageCount={searchValue.length ? Math.ceil(filteredData.length / 7) : Math.ceil(users.length / 7) || 1}
       breakLabel='...'
       pageRangeDisplayed={2}
       marginPagesDisplayed={2}
       activeClassName='active'
       pageClassName='page-item'
       breakClassName='page-item'
       nextLinkClassName='page-link'
       pageLinkClassName='page-link'
       breakLinkClassName='page-link'
       previousLinkClassName='page-link'
       nextClassName='page-item next-item'
       previousClassName='page-item prev-item'
       containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
     />
   )

   return (
      <div>
         <div>
            <h1 className="" style={{fontWeight:"500",fontSize:"24px",lineHeight:"29px"}}>{t("Roles List")}</h1>
            <span className="mt-3">
            A role provided access to predefined menus and features so that depending on 
            assigned role an administrator can have access to what he need
            </span>
         </div>
         <div className="mt-4">
           
            <Fragment>
                       <Row>
        {data.map((item, index) => {
          return (
            <Col key={index} xl={4} md={6}>
              <Card>
                <CardBody>
                  <div className='d-flex justify-content-between'>
                    <span>{`Total ${item.totalUsers} users`}</span>
                    <AvatarGroup data={item.users} />
                  </div>
                  <div className='d-flex justify-content-between align-items-end mt-1 pt-25'>
                    <div className='role-heading'>
                      <h4 className='fw-bolder'>{item.title}</h4>
                      <Link
                        to='/'
                        className='role-edit-modal'
                        onClick={e => {
                          e.preventDefault()
                          setModalType('Edit')
                          setShow(true)
                        }}
                      >
                        <span  style={{color:"rgba(168, 170, 174, 1)" , fontWeight:"400",fontSize:"12px",lineHeight:"5px"}} className='fw-bolder'>Edit Role</span>
                      </Link>
                    </div>
                      <RxCopy className='text-body font-medium-5' onClick={e => e.preventDefault()} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          )
        })}
        <Col xl={4} md={6}>
          <Card>
            <Row>
              <Col sm={5}>
                <div className='d-flex align-items-end justify-content-center h-100'>
                  {/* <img className='img-fluid mt-2' src={illustration} alt='Image' width={85} /> */}
                </div>
              </Col>
              <Col sm={7}>
                <CardBody className='text-sm-end text-center ps-sm-0'>
                  {/* <Button
                    color='primary'
                    className='text-nowrap mb-1'
                    onClick={() => {
                      setModalType('Add New')
                      setShow(true)
                    }}
                  >
                    Add New Role
                  </Button> */}
                  <RoleModel/>
                  <p className='mb-0'>Add a new role, if it does not exist</p>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* <Modal
        isOpen={show}
        onClosed={handleModalClosed}
        toggle={() => setShow(!show)}
        className='modal-dialog-centered modal-lg'
      >
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-5 pb-5'>
          <div className='text-center mb-4'>
            <h1>{modalType} Role</h1>
            <p>Set role permissions</p>
          </div>
          <Row tag='form' onSubmit={handleSubmit(onSubmit)}>
            <Col xs={12}>
              <Label className='form-label' for='roleName'>
                Role Name
              </Label>
              <Controller
                name='roleName'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='roleName' placeholder='Enter role name' invalid={errors.roleName && true} />
                )}
              />
              {errors.roleName && <FormFeedback>Please enter a valid role name</FormFeedback>}
            </Col>
            <Col xs={12}>
              <h4 className='mt-2 pt-50'>Role Permissions</h4>
              <Table className='table-flush-spacing' responsive>
                <tbody>
                  <tr>
                    <td className='text-nowrap fw-bolder'>
                      <span className='me-50'> Administrator Access</span>
                      <Info size={14} id='info-tooltip' />
                      <UncontrolledTooltip placement='top' target='info-tooltip'>
                        Allows a full access to the system
                      </UncontrolledTooltip>
                    </td>
                    <td>
                      <div className='form-check'>
                        <Input type='checkbox' id='select-all' />
                        <Label className='form-check-label' for='select-all'>
                          Select All
                        </Label>
                      </div>
                    </td>
                  </tr>
                  {rolesArr.map((role, index) => {
                    return (
                      <tr key={index}>
                        <td className='text-nowrap fw-bolder'>{role}</td>
                        <td>
                          <div className='d-flex'>
                            <div className='form-check me-3 me-lg-5'>
                              <Input type='checkbox' id={`read-${role}`} />
                              <Label className='form-check-label' for={`read-${role}`}>
                                Read
                              </Label>
                            </div>
                            <div className='form-check me-3 me-lg-5'>
                              <Input type='checkbox' id={`write-${role}`} />
                              <Label className='form-check-label' for={`write-${role}`}>
                                Write
                              </Label>
                            </div>
                            <div className='form-check'>
                              <Input type='checkbox' id={`create-${role}`} />
                              <Label className='form-check-label' for={`create-${role}`}>
                                Create
                              </Label>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Col>
            <Col className='text-center mt-2' xs={12}>
              <Button type='submit' color='primary' className='me-1'>
                Submit
              </Button>
              <Button type='reset' outline onClick={onReset}>
                Discard
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal> */}
      </Fragment>
 
           
         </div>
         {/* card 3 */}
         <div className="mt-1 px-5   bg-white">
            <div className="d-flex flex-md-row flex-column  justify-content-between p-2 gap-2 mb-2">
               <div>
                  <button
                     type="button"
                     className="flex btn border bg-white w-100"
                  >
                     <span>
                        <CiExport
                           style={{ fontSize: "20px", marginRight: "1rem" }}
                        />
                     </span>
                     <span>{t("Export")} </span>
                  </button>
               </div>
               <div>
                  {/* <Button  color='primary' className="btn w-100">
                     Create A New User
                  </Button> */}
                  <UserModel/>
               </div>
            </div>
         </div>
         {/* Table section */}
        
         <div className='react-dataTable react-dataTable-selectable-rows'>
          <DataTable
           noHeader
            pagination
            selectableRows
            columns={columns}
            paginationPerPage={7}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
            paginationComponent={CustomPagination}
            paginationDefaultPage={currentPage + 1}
            selectableRowsComponent={BootstrapCheckbox}
            data={searchValue.length ? filteredData : users}
          />
        </div>
           {/* <thead>
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
                  <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)"}}>{t("USER")}</th>
                  <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)"}}>{t("ROLE")}</th>
                  <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)"}}>{t("LAST UPDATED")}</th>
                  <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)"}}>{t("STATUS")}</th>
                  <th scope="col" style={{color:" rgba(51, 48, 60, 0.87)",minWidth: '120px'}}>{t("ACTION")} </th>
               </tr>
            </thead>
            <tbody className="bg-white">
               {users?.slice(0,10).map(({ email,firstName, _id, lastName }) => (
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
                     <td className="px-2 py-2">{email}</td>
                     <td>{firstName}</td>
                     <td>{_id}</td>
                     
                     <td>{lastName}</td>
              
                     <td size={17}>
                        <span>
                           <TbEdit />
                        </span>
                        <span className="px-1">
                           <RiDeleteBinLine size={17} className="" />
                        </span>
                     </td>
                  </tr>
               ))}
            </tbody>
           
        */}
      </div>
   );
 };



export default ManageUsers



 