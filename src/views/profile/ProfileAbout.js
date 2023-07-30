// ** Reactstrap Imports
import { useTranslation } from 'react-i18next'
import { Card, CardBody, CardText } from 'reactstrap'

const ProfileAbout = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardBody>
        <h5 className='mb-75'>About</h5>
        <CardText>An accomplished MERN stack developer with a strong frontend and backend proficiency. From small business websites to complex e-commerce platforms, I've worked on diverse projects.</CardText>
        <div className='mt-2'>
          <h5 className='mb-75'>Joined:</h5>
          <CardText>{data.joined}</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Lives:</h5>
          <CardText>PK</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>{t("Email:")} </h5>
          <CardText>danishfayyaz91@gmail.com</CardText>
        </div>
        <div className='mt-2'>
          <h5 className='mb-75'>Website:</h5>
          <CardText>https://danish21portfolio.netlify.app/</CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProfileAbout
