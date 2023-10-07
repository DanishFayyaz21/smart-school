// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

import Select from 'react-select'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { selectThemeColors } from '@utils'
// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Table,
  Modal,
  Button,
  CardBody,
  ModalBody,
  ModalHeader,
  FormFeedback,
  Form,
  UncontrolledTooltip
} from 'reactstrap'

// ** Third Party Components
import { Copy, Info } from 'react-feather'


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
import { getCurrentClass } from '../../../redux/slices/classSlice'
import { useDispatch, useSelector } from 'react-redux'
import { post } from '../../../utility/Axios'

// ** Vars
const data = [
  {
    totalUsers: 35,
    title: 'Compiler',
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
    totalUsers: 17,
    title: 'Calculas',
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
    title: 'Programming fundamentals',
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
    title: 'Restricted User',
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

const rolesArr = [
  'User Management',
  'Content Management',
  'Disputes Management',
  'Database Management',
  'Financial Management',
  'Reporting',
  'API Control',
  'Repository Management',
  'Payroll'
]

const defaultValues = {
  name: ""
  // role: "teacher" //Admin, Student, Teacher, Parent,SubAdmin
}

const ClassesCards = () => {
  const [data, setData] = useState(null)
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** States
  const [show, setShow] = useState(false)
  const [modalType, setModalType] = useState('Add New')
  const { currentClass } = useSelector((state) => state.classSlice)

  const { id } = useParams()
  const location = useLocation()
  const searchParams = location.search;
  // const classId = searchParams.get('class-id');
  console.log("pppppppppppppppppp", id)
  // ** Hooks

  const addClass = async (data) => {
    console.log("data.....................", data)
    try {
      const response = await post("add-subject", { ...data, classId: id })
      if (response.data.status == 201) {
        setShow(false)
        reset()
        dispatch(getCurrentClass(id))

      }
    } catch (err) {
      console.log("error:", err)
    }
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
  const dispatch = useDispatch()
  console.log("rrrrrrrrrrrrrrrrrrrrrrrrr", currentClass)
  useEffect(() => {
    dispatch(getCurrentClass(id))
  }, [])
  return (
    <Fragment>
      <Row>
        {currentClass?.subject?.map((item, index) => {
          return (
            <Col key={index} xl={4} md={6}>
              <Link to="/classes/subject">
                <Card>
                  <CardBody>
                    <div className='d-flex justify-content-between'>
                      {/* <span>{`Total ${item.totalUsers} users`}</span> */}
                      {/* <AvatarGroup data={item?.users} /> */}
                    </div>
                    <div className='d-flex justify-content-between align-items-end mt-1 pt-25'>
                      <div className='role-heading'>
                        <h4 className='fw-bolder'>{item.name}</h4>
                        <p>{item.description}</p>
                        <Link
                          to='/'
                          className='role-edit-modal'
                          onClick={e => {
                            e.preventDefault()
                            setModalType('Edit')
                            setShow(true)
                          }}
                        >
                          <small className='fw-bolder'>Edit Role</small>
                        </Link>
                      </div>
                      <Link to='' className='text-body' onClick={e => e.preventDefault()}>
                        <Copy className='font-medium-5' />
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          )
        })}
        <Col xl={4} md={6}>
          <Card>
            <Row>
              <Col sm={5}>
                <div className='d-flex align-items-end justify-content-center h-100'>
                  <img className='img-fluid mt-2' src={illustration} alt='Image' width={85} />
                </div>
              </Col>
              <Col sm={7}>
                <CardBody className='text-sm-end text-center ps-sm-0'>
                  <Button
                    color='primary'
                    className='text-nowrap mb-1'
                    onClick={() => {
                      setModalType('Add New')
                      setShow(true)
                    }}
                  >
                    Add New Subject
                  </Button>
                  <p className='mb-0'>Add a new Subject, if it does not exist</p>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Modal
        isOpen={show}
        onClosed={handleModalClosed}
        toggle={() => setShow(!show)}
        className='modal-dialog-centered modal-lg'
      >
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-5 pb-5'>
          <Form className='pb-3 px-3'
            onSubmit={handleSubmit(addClass)}
          >
            <div><h1>Add Class details</h1></div>
            <div className='mb-1'>
              <Label className='form-label' for='name'>
                Name <span className='text-danger'>*</span>
              </Label>
              <Controller
                name='name'
                control={control}
                render={({ field }) => (
                  <Input id='name' placeholder='Semester 1' invalid={errors.name && true} {...field} />
                )}
              />
            </div>

            <div className='mb-1'>
              <Label className='form-label' for='name'>
                Description<span className='text-danger'>*</span>
              </Label>
              <Controller
                name='description'
                control={control}
                render={({ field }) => (
                  <Input id='description' type='text-area' placeholder='Semester 1' invalid={errors.name && true} {...field} />
                )}
              />
            </div>



            <Button type='submit' className='me-1' color='primary' >
              Submit
            </Button>
            <Button type='reset' color='secondary' outline >
              Cancel
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default ClassesCards
