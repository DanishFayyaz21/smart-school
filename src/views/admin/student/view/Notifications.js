// ** Reactstrap Imports
import { Card, CardTitle, CardBody, Table, Col, Input, Button, Label } from 'reactstrap'
import { selectThemeColors } from '@utils'

const typesArr = [
  {
    title: 'New for you',
    defaultChecked: ['email']
  },
  {
    title: 'Account activity',
    defaultChecked: ['browser', 'app']
  },
  {
    title: 'A new browser used to sign in',
    defaultChecked: ['email', 'browser', 'app']
  },
  {
    title: 'A new device is linked',
    defaultChecked: ['browser']
  }
]

const Notifications = () => {


  return (
    <Card>
      <CardBody>
        <CardTitle className='mb-50' tag='h4'>
          Attendence
        </CardTitle>
        <Col md='4'>
          <Label for='role-select'>Select Date</Label>
          <Input
            type='date'
            isClearable={false}
            className='react-select'
            theme={selectThemeColors}
          />
        </Col>
      </CardBody>
      <Table className='text-nowrap text-center border-bottom' responsive>
        <thead>
          <tr>
            <th className='text-start'>Date</th>
            <th>✉️ Present</th>
            <th>🖥 Absent</th>
            <th>👩🏻‍💻 Leave</th>
          </tr>
        </thead>
        <tbody>
          {typesArr.map((type, index) => {
            return (
              <tr key={index}>
                <td className='text-start'>{(index + 1) + "/10/2023"}</td>
                <td>
                  <div className='d-flex form-check justify-content-center'>
                    <Input type='checkbox' defaultChecked={type.defaultChecked.includes('email')} />
                  </div>
                </td>
                <td>
                  <div className='d-flex form-check justify-content-center'>
                    <Input type='checkbox' defaultChecked={type.defaultChecked.includes('browser')} />
                  </div>
                </td>
                <td>
                  <div className='d-flex form-check justify-content-center'>
                    <Input type='checkbox' defaultChecked={type.defaultChecked.includes('app')} />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <CardBody>
        <Button className='me-1' color='primary'>
          Save Changes
        </Button>
        <Button outline>Discard</Button>
      </CardBody>
    </Card>
  )
}

export default Notifications
