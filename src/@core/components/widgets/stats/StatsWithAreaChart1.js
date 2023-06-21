// ** Custom Components
import Avatar from '@components/avatar'
// ** Third Party Components
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'

// ** Default Options
import { areaChartOptions } from './ChartOptions'

const StatsWithAreaChart = props => {
  // ** Props
  const {color, stats, statTitle, series, options, type, height, className, ...rest } = props
  return (
    <Card {...rest}>
      <CardBody
        className={classnames('pb-0', {
          [className]: className
        })}
      >
        {/* <Avatar className='avatar-stats p-50 m-0' color={`light-${color}`}  /> */}
        <h2 className='fw-bolder mt-1 fs-3' style={{color:"#0A1172"}}>{stats}</h2>
          {/* ------ */}
        <div className='d-flex align-items-center  justify-content-between py-1'>
          <h4>System Vitals</h4>
          <span className='d-block px-1 rounded d-flex align-items-center justify-content-center 'style={{backgroundColor:"rgba(40, 199, 111, 0.15)", color:"rgba(40, 199, 111, 1)", fontSize:"12px"}}>Good</span>
        </div>
        <p className='card-text'>{statTitle}</p>
        {/* ------- */}
        <div className='d-flex align-items-center  justify-content-between py-1'>
          <h4>Database Vitals</h4>
          <span className='d-block px-1 rounded d-flex align-items-center justify-content-center 'style={{backgroundColor:"rgba(40, 199, 111, 0.15)", color:"rgba(40, 199, 111, 1)", fontSize:"12px"}}>Good</span>
        </div>
        <p className='card-text'>{statTitle}</p>

      </CardBody>
      <Chart options={options} series={series} type={type} height={height ? height : 100} />
    </Card>
  )
}

export default StatsWithAreaChart

// ** PropTypes
StatsWithAreaChart.propTypes = {
  type: PropTypes.string,
  height: PropTypes.string,
  options: PropTypes.object,
  className: PropTypes.string,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
  statTitle: PropTypes.string.isRequired
}

// ** Default Props
StatsWithAreaChart.defaultProps = {
  color: 'primary',
  options: areaChartOptions
}
{}