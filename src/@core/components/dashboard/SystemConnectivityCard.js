// ** Reactstrap Imports
import { useTranslation } from 'react-i18next'
import { Card, CardBody } from 'reactstrap'

// ** Default Options
// import { areaChartOptions } from './ChartOptions'

const SystemConnectivityCard = () => {
  const {t} = useTranslation();
  // ** Props
  return (
    <Card className='system_connectivity_card'>
      <CardBody>
        <p className='Card_1_hading '>
         {t("System Connectivity")}
          </p>
        <div className='d-flex align-items-center  justify-content-between py-1'>
          <div><span className='Card1_child1'>
            
         {t("System Vitals")}

            </span></div>
          <div className='Card1_status'><p className='Card1_status_child'>Good</p></div>
        </div>
        <p className='card-text'>Lorem ipsum dolor sit amet</p>
        <div className='d-flex align-items-center  justify-content-between py-1'>
          <div><span className='Card1_child2'>
          
         {t("Database Vitals")}

            </span></div>
          <div className='Card1_status'><p className='Card1_status_child'>Good</p></div>
        </div>
        <p className='card-text'>Lorem ipsum dolor sit amet</p>

      </CardBody>
    </Card>
  )
}

export default SystemConnectivityCard

