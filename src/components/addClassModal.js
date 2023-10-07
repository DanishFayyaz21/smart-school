// ** React Imports
import { Fragment, useState } from 'react'
// ** Third Party Components
import Select from 'react-select'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Label, FormText, Form, Input } from 'reactstrap'
import { post } from '../utility/Axios'
import { getAllClasses } from '../redux/slices/classSlice'
import { useDispatch } from 'react-redux'

const defaultValues = {
    name: ""
    // role: "teacher" //Admin, Student, Teacher, Parent,SubAdmin
}

const AddClassModal = ({ show, setShow }) => {
    // ** States
    const dispatch = useDispatch()
    const {
        control,
        setValue,
        setError,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ defaultValues })

    const [data, setData] = useState(null)
    const [disabledAnimation, setDisabledAnimation] = useState(false)
    const addClass = async (values) => {
        console.log("values,,,,,,,,,,,,,", values)
        try {
            const response = await post("/create-class", values)
            if (response?.data?.success) {
                setShow(false)
                reset()
                dispatch(getAllClasses())
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='demo-inline-spacing'>


            <div className='disabled-animation-modal'>
                {/* <Button color='primary' outline onClick={() => setDisabledAnimation(!disabledAnimation)}>
          Disabled Animation
        </Button> */}
                <Modal
                    isOpen={show}
                    toggle={() => setShow(!show)}
                    className='modal-dialog-centered'
                    fade={false}
                >
                    <ModalHeader toggle={() => setShow(!disabledAnimation)}></ModalHeader>
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
                            <Label className='form-label' for='designation'>
                                Subjects <span className='text-danger'>*</span>
                            </Label>
                            <Controller
                                name='designation'
                                control={control}
                                render={({ field }) => (
                                    // <Input id='country' placeholder='Australia' invalid={errors.country && true} {...field} />
                                    <Select
                                        isClearable={false}
                                        classNamePrefix='select'
                                        options={[]}
                                        theme={selectThemeColors}
                                        className={classnames('react-select', { 'is-invalid': data !== null && data.designation === null })}
                                        {...field}
                                    />
                                )}
                            />
                        </div>
                        <div className='mb-1'>
                            <Label className='form-label' for='gender'>
                                Students <span className='text-danger'>*</span>
                            </Label>
                            <Controller
                                name='gender'
                                control={control}
                                render={({ field }) => (
                                    // <Input id='gender' placeholder='Australia' invalid={errors.gender && true} {...field} />
                                    <Select
                                        isClearable={false}
                                        classNamePrefix='select'
                                        options={[]}
                                        theme={selectThemeColors}
                                        className={classnames('react-select', { 'is-invalid': data !== null && data.gender === null })}
                                        {...field}
                                    />
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
                </Modal>
            </div>
        </div>
    )
}
export default AddClassModal
