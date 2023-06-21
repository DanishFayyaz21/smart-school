import Chart from 'react-apexcharts'
import { useState, useContext } from "react";
import { TbCreditCard } from 'react-icons/tb'
import { Card, CardBody } from "reactstrap";

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Avator
import Avatar from '@components/avatar'
import { useTranslation } from 'react-i18next';

const CustomerScreenedCard = () => {
   const {t} = useTranslation();

   const context = useContext(ThemeColors)

   const options = {
      chart: {
         id: "customer_screened",
         toolbar: {
            show: false,
         },
         sparkline: {
            enabled: true,
         },
      },
      grid: {
         show: false,
      },
      colors: [context.colors.success.main],
      dataLabels: {
         enabled: false,
      },
      stroke: {
         curve: "smooth",
         width: 2.5,
      },
      fill: {
         type: "gradient",
         gradient: {
            shadeIntensity: 0.9,
            opacityFrom: 0.7,
            opacityTo: 0.5,
            stops: [0, 80, 100],
         },
      },

      xaxis: {
         labels: {
            show: false,
         },
         axisBorder: {
            show: false,
         },
      },
      yaxis: {
         labels: {
            show: false,
         },
      },
      tooltip: {
         x: { show: false },
      },
   };

   return (
      <Card className='customer_screened_card'>
         <CardBody
            className="pb-0"
         >
            <Avatar
               className="avatar-stats p-50 m-0"
               color='light-success'
               icon={<TbCreditCard size={30}/>}
            />
            <h2 className="fw-bolder mt-1">97.5k</h2>
            <p className="card-text">{t("Customer Screened")}</p>
         </CardBody>
         <Chart
            options={options}
            series={[{name: 'customer_screened', data: [27, 35, 30, 40, 28, 50, 46]}]}
            type={'area'}
            height={140}
         />
      </Card>
   );
};

export default CustomerScreenedCard;