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
import { post } from '../../../../utility/Axios'
import { getAllTeachers } from '../../../../redux/slices/auth/userSlice'

const defaultValues = {
  designation: "",
  cnic: "",
  phone: "",
  country: "",
  // status: "",//active, inactive
  email: "",
  user_name: "",
  firstName: "",
  lastName: "",
  gender: "",
  password: "",
  // role: "teacher" //Admin, Student, Teacher, Parent,SubAdmin
}

const countryOptions = [
  { label: 'Australia', value: 'Australia' },
  { label: 'Bangladesh', value: 'Bangladesh' },
  { label: 'Belarus', value: 'Belarus' },
  { label: 'Brazil', value: 'Brazil' },
  { label: 'Canada', value: 'Canada' },
  { label: 'China', value: 'China' },
  { label: 'France', value: 'France' },
  { label: 'Germany', value: 'Germany' },
  { label: 'India', value: 'India' },
  { label: 'Indonesia', value: 'Indonesia' },
  { label: 'Israel', value: 'Israel' },
  { label: 'Italy', value: 'Italy' },
  { label: 'Japan', value: 'Japan' },
  { label: 'Korea', value: 'Korea' },
  { label: 'Mexico', value: 'Mexico' },
  { label: 'Philippines', value: 'Philippines' },
  { label: 'Russia', value: 'Russia' },
  { label: 'South', value: 'South' },
  { label: 'Thailand', value: 'Thailand' },
  { label: 'Turkey', value: 'Turkey' },
  { label: 'Ukraine', value: 'Ukraine' },
  { label: 'United Arab Emirates', value: 'United Arab Emirates' },
  { label: 'United Kingdom', value: 'United Kingdom' },
  { label: 'United States', value: 'United States' }
]

const designationOptions = [
  { label: 'Professor', value: 'Professor' },
  { label: 'Dr.', value: 'Dr.' },
  { label: 'Assistant Professor', value: 'Assistant Professor' },
  { label: 'Visiting Professor', value: 'Visiting Professor' },
]

const genderOptions = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Prefer not to say', value: 'Prefer not to say' },
]

const checkIsValid = data => {
  return Object.values(data).every(field => (typeof field === 'object' ? field !== null : field.length > 0))
}

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [data, setData] = useState(null)
  const [plan, setPlan] = useState('basic')
  const [role, setRole] = useState('subscriber')
  const [formStatus, setFormStatus] = useState(1)

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const {
    control,
    setValue,
    setError,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** Function to handle form submit
  const onSubmit = async (data) => {
    setData(data)
    if (checkIsValid(data)) {
      // if (formStatus == 2)toggleSidebar()
      // dispatch(
      //   addUser({
      //     role,
      //     avatar: '',
      //     status: 'active',
      //     email: data.email,
      //     currentPlan: plan,
      //     billing: 'auto debit',
      //     company: data.company,
      //     contact: data.contact,
      //     fullName: data.fullName,
      //     username: data.username,
      //     country: data.country.value
      //   })
      // )
      // setFormStatus(2)
      console.log("xxxxxxxxxxxxxx", data)
      const formData = {
        ...data,
        designation: data.designation.value,
        country: data.country.value,
        gender: data.gender.value,
        // country: data.country.value,
        role: "Teacher"
      }
      try {
        const addTeacher = await post("register-teacher", formData)
        if (addTeacher.data.status == 201) {
          reset()
          toggleSidebar()
          dispatch(getAllTeachers())
        }
      } catch (err) {
        console.log("error", errors)
      }
    } else {
      for (const key in data) {
        if (data[key] === null) {
          setError('country', {
            type: 'manual'
          })
        }
        if (data[key] !== null && data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  const handleSidebarClosed = () => {
    for (const key in defaultValues) {
      setValue(key, '')
    }
    setRole('subscriber')
    setPlan('basic')
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
          <div><h1>Teacher details</h1></div>
          <div className='mb-1'>
            <Label className='form-label' for='fullName'>
              Full Name <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='firstName'
              control={control}
              render={({ field }) => (
                <Input id='firstName' placeholder='M John' invalid={errors.firstName && true} {...field} />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='lastName'>
              Father Name <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='lastName'
              control={control}
              render={({ field }) => (
                <Input id='lastName' placeholder='Doe' invalid={errors.lastName && true} {...field} />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='user_name'>
              User Name <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='user_name'
              control={control}
              render={({ field }) => (
                <Input id='user_name' placeholder='Doe' invalid={errors.user_name && true} {...field} />
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
            <Label className='form-label' for='userEmail'>
              Password <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <Input
                  type='password'
                  id='password'
                  invalid={errors.password && true}
                  {...field}
                />
              )}
            />
          </div>

          <div className='mb-1'>
            <Label className='form-label' for='contact'>
              Contact <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='phone'
              control={control}
              render={({ field }) => (
                <Input id='phone' placeholder='(397) 294-5153' invalid={errors.phone && true} {...field} />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='CNIC'>
              CNIC <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='cnic'
              control={control}
              render={({ field }) => (
                <Input id='cnic' placeholder='CNIC' invalid={errors.cnic && true} {...field} />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='designation'>
              Designation <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='designation'
              control={control}
              render={({ field }) => (
                // <Input id='country' placeholder='Australia' invalid={errors.country && true} {...field} />
                <Select
                  isClearable={false}
                  classNamePrefix='select'
                  options={designationOptions}
                  theme={selectThemeColors}
                  className={classnames('react-select', { 'is-invalid': data !== null && data.designation === null })}
                  {...field}
                />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='gender'>
              Gender <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='gender'
              control={control}
              render={({ field }) => (
                // <Input id='gender' placeholder='Australia' invalid={errors.gender && true} {...field} />
                <Select
                  isClearable={false}
                  classNamePrefix='select'
                  options={genderOptions}
                  theme={selectThemeColors}
                  className={classnames('react-select', { 'is-invalid': data !== null && data.gender === null })}
                  {...field}
                />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='country'>
              Country <span className='text-danger'>*</span>
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
          <div className='mb-1'>
            <Label className='form-label' for='user-role'>
              Class
            </Label>
            <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
              <option value='subscriber'>Subscriber</option>
              <option value='editor'>Editor</option>
              <option value='maintainer'>Maintainer</option>
              <option value='author'>Author</option>
              <option value='admin'>Admin</option>
            </Input>
          </div>
          <div className='mb-1' value={plan} onChange={e => setPlan(e.target.value)}>
            <Label className='form-label' for='select-plan'>
              Status
            </Label>
            <Input type='select' id='select-plan' name='select-plan'>
              <option value='active'>active</option>
              <option value='inactive'>inactive</option>
            </Input>
          </div>
          <Button type='submit' className='me-1' color='primary' >
            Submit
          </Button>
          <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
            Cancel
          </Button>
        </Form>}


    </Sidebar>
  )
}

export default SidebarNewUsers
