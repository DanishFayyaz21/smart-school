// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Third Party Components
import Select from 'react-select'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Button, Label, FormText, Form, Input } from 'reactstrap'

// ** Store & Actions
import { addUser } from '../store'
import { useDispatch } from 'react-redux'
import { post } from '../../../../services'

const defaultValues = {
  email: '',
  contact: '',

  username: '',
  section: null
}

const SectionOptions = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D' },
  { label: 'F', value: 'F' }
]

const checkIsValid = data => {
  return Object.values(data).every(field => (typeof field === 'object' ? field !== null : field.length > 0))
}

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [data, setData] = useState(null)
  const [status, setStatus] = useState()
  const [studentclass, setClass] = useState()
  const [formStatus, setFormStatus] = useState(1)

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** Function to handle form submit
  const onSubmit = async (data) => {
    const formData = { ...data, status, studentclass, role: "Student" }
    const res = await post("/register-student", formData)
    console.log("res.....................", res)
    // setData(data)
    // if (checkIsValid(data)) {
    //   if (formStatus == 2)toggleSidebar()
    //   dispatch(
    //     addUser({
    //       role,
    //       avatar: '',
    //       status: 'active',
    //       email: data.email,
    //       currentPlan: plan,
    //       billing: 'auto debit',
    //       company: data.company,
    //       contact: data.contact,
    //       fullName: data.fullName,
    //       username: data.username,
    //       country: data.country.value
    //     })
    //   )
    //   setFormStatus(2)

    // } else {
    //   for (const key in data) {
    //     if (data[key] === null) {
    //       setError('country', {
    //         type: 'manual'
    //       })
    //     }
    //     if (data[key] !== null && data[key].length === 0) {
    //       setError(key, {
    //         type: 'manual'
    //       })
    //     }
    //   }
    // }
  }

  const handleSidebarClosed = () => {
    for (const key in defaultValues) {
      setValue(key, '')
    }
    // setRole('subscriber')
    // setPlan('basic')
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New Student'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
      onClosed={handleSidebarClosed}
    >
      {formStatus == 1 &&
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div><h1>Student details</h1></div>
          <div className='mb-1'>
            <div>
              <Label className='form-label' for='fullName'>
                Fisrt Name <span className='text-danger'>*</span>
              </Label>
              <Controller
                name='firstName'
                control={control}
                render={({ field }) => (
                  <Input id='fullName' placeholder='M John' invalid={errors.fullName && true} {...field} />
                )}
              />
            </div>
            <div>
              <Label className='form-label' for='fullName'>
                Last Name <span className='text-danger'>*</span>
              </Label>
              <Controller
                name='lastName'
                control={control}
                render={({ field }) => (
                  <Input id='fullName' placeholder='M John' invalid={errors.fullName && true} {...field} />
                )}
              />
            </div>
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='username'>
              Username <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => (
                <Input id='username' placeholder='Doe' invalid={errors.username && true} {...field} />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='userEmail'>
              Email <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <Input
                  type='email'
                  id='userEmail'
                  placeholder='john.doe@example.com'
                  invalid={errors.email && true}
                  {...field}
                />
              )}
            />
            <FormText color='muted'>You can use letters, numbers & periods</FormText>
          </div>

          <div className='mb-1'>
            <Label className='form-label' for='contact'>
              Contact <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='contact'
              control={control}
              render={({ field }) => (
                <Input id='contact' placeholder='(397) 294-5153' invalid={errors.contact && true} {...field} />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='cnic'>
              CNIC/B-form <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='cnic'
              control={control}
              render={({ field }) => (
                <Input id='cnic' placeholder='00000-0000000-0' invalid={errors.company && true} {...field} />
              )}
            />
          </div>

          <div className='mb-1'>
            <Label className='form-label' for='user-role'>
              Class
            </Label>
            <Input type='select' id='user-role' name='user-role' value={studentclass} onChange={e => setClass(e.target.value)}>
              <option value='1st Class'>1st Class</option>
              <option value='2nd Class'>2nd Class</option>
              <option value='3rd Class'>3rd Class</option>
              <option value='4th Class'>4th Class</option>
              <option value='5th Class'>5th Class</option>
              <option value='6th Class'>6th Class</option>
              <option value='7th Class'>7th Class</option>
              <option value='8th Class'>8th Class</option>
              <option value='9th Class'>9th Class</option>
              <option value='10th Class'>10th Class</option>
              <option value='11th Class'>11th Class</option>
              <option value='12th Class'>12th Class</option>
            </Input>
          </div>

          <div className='mb-1'>
            <Label className='form-label' for='section'>
              Section <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='section'
              control={control}
              render={({ field }) => (
                // <Input id='country' placeholder='Australia' invalid={errors.country && true} {...field} />
                <Select
                  isClearable={false}
                  classNamePrefix='select'
                  options={SectionOptions}
                  theme={selectThemeColors}
                  className={classnames('react-select', { 'is-invalid': data !== null && data.country === null })}
                  {...field}
                />
              )}
            />
          </div>
          <div className='mb-1'  >
            <Label className='form-label' for='select-plan'>
              Status
            </Label>
            <Input type='select' id='select-plan' name='select-plan' onChange={e => setStatus(e.target.value)} >
              <option value='basic'>Active</option>
              <option value='enterprise'>InActive</option>
            </Input>
          </div>
          <Button type='submit' className='me-1' color='primary' >
            Submit
          </Button>
          <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
            Cancel
          </Button>
        </Form>}

      {/* {formStatus == 2 &&
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div><h1>Guardians details</h1></div>
          <div className='mb-1'>
            <Label className='form-label' for='fullName'>
              Full Name <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='fullName'
              control={control}
              render={({ field }) => (
                <Input id='fullName' placeholder='M John' invalid={errors.fullName && true} {...field} />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='username'>
              Last Name <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='username'
              control={control}
              render={({ field }) => (
                <Input id='username' placeholder='Doe' invalid={errors.username && true} {...field} />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='userEmail'>
              Email <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <Input
                  type='email'
                  id='userEmail'
                  placeholder='john.doe@example.com'
                  invalid={errors.email && true}
                  {...field}
                />
              )}
            />
            <FormText color='muted'>You can use letters, numbers & periods</FormText>
          </div>

          <div className='mb-1'>
            <Label className='form-label' for='contact'>
              Contact <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='contact'
              control={control}
              render={({ field }) => (
                <Input id='contact' placeholder='(397) 294-5153' invalid={errors.contact && true} {...field} />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='company'>
              CNIC<span className='text-danger'>*</span>
            </Label>
            <Controller
              name='company'
              control={control}
              render={({ field }) => (
                <Input id='company' placeholder='00000-0000000-0' invalid={errors.company && true} {...field} />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='country'>
              Relation with Student <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='country'
              control={control}
              render={({ field }) => (
                // <Input id='country' placeholder='Australia' invalid={errors.country && true} {...field} />
                <Select
                  isClearable={false}
                  classNamePrefix='select'
                  options={countryOptions}
                  theme={selectThemeColors}
                  className={classnames('react-select', { 'is-invalid': data !== null && data.country === null })}
                  {...field}
                />
              )}
            />
          </div>
          <Button type='submit' className='me-1' color='primary'>
            Submit
          </Button>
          <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
            Cancel
          </Button>
        </Form>} */}
    </Sidebar>
  )
}

export default SidebarNewUsers
