// ** Reactstrap Imports
import moment from 'moment';
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux';
import { Card, CardBody, CardText } from 'reactstrap'

const ProfileAbout = ({ data }) => {
  const { t } = useTranslation();

  const { userData } = useSelector((state) => state.auth)

  return (
    <Card>
      <CardBody>
        <h5 className='mb-75'>About</h5>
        <CardText>An accomplished MERN stack developer with a strong frontend and backend proficiency. From small business websites to complex e-commerce platforms, I've worked on diverse projects.</CardText>
        <div className='mt-2'>
          <h5 className='mb-75'>Joined:</h5>
          <CardText>{moment(userData?.createdAt).format("MMM DD,YYYY")}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Lives:</h5>
          <CardText>{userData?.country}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Email: </h5>
          <CardText>{userData?.email}</CardText>
        </div>
          {userData?.studentClass &&
          <div className='mt-2'>
            <h5 className='mb-75'>class:</h5>
            <CardText>{userData?.studentClass?.name}</CardText>
          </div>}
      </CardBody>
    </Card>
  )
}

export default ProfileAbout
