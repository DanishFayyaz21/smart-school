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
import { getAllClasses, getCurrentClass } from '../../../redux/slices/classSlice'
import { useDispatch, useSelector } from 'react-redux'
import { post } from '../../../utility/Axios'




const AutomatictimeTable = () => {

    // ** States
    const [show, setShow] = useState(false)
    const { allclasses } = useSelector((state) => state.classSlice)





    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllClasses())
    }, [])
    return (
        <Fragment>
            <Row>
                {allclasses?.map((item, index) => {
                    return (
                        <Col key={index} xl={4} md={6}>
                            <Link to={`/admin/time-table/${item?._id}`}>
                                <Card>
                                    <CardBody>
                                        <div className='d-flex justify-content-between'>
                                            {/* <span>{`Total ${item.totalUsers} users`}</span> */}
                                            {/* <AvatarGroup data={item?.users} /> */}
                                        </div>
                                        <div className='d-flex justify-content-between align-items-end mt-1 pt-25'>
                                            <div className='role-heading'>
                                                <h4 className='fw-bolder'>{item?.name}</h4>
                                                <p>{item?.description}</p>
                                                <Link
                                                    to='/'
                                                    className='role-edit-modal'
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setModalType('Edit')
                                                        setShow(true)
                                                    }}
                                                >
                                                    <small className='fw-bolder'>Edit Subject</small>
                                                </Link>
                                            </div>
                                            {/* <Link to='' className='text-body' onClick={e => e.preventDefault()}>
                        <Copy className='font-medium-5' />
                      </Link> */}
                                        </div>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                    )
                })}
                {/* <Col xl={4} md={6}>
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
        </Col> */}
            </Row>

        </Fragment>
    )
}

export default AutomatictimeTable
