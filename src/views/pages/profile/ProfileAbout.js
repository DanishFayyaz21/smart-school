// ** Reactstrap Imports
import { useTranslation } from 'react-i18next'
import { Card, CardBody, CardText } from 'reactstrap'

const ProfileAbout = ({ data }) => {
  const {t} = useTranslation();
  return (
    <Card>
      <CardBody>
        <h5 className='mb-75'>About</h5>
        <CardText>{data.about}</CardText>
        <div className='mt-2'>
          <h5 className='mb-75'>Joined:</h5>
          <CardText>{data.joined}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Lives:</h5>
          <CardText>{data.lives}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>{t("Email:")} </h5>
          <CardText>{data.email}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Website:</h5>
          <CardText>{data.website}</CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProfileAbout
