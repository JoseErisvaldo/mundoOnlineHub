import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnWithDataLabels = () => {
  const [series] = useState([
    {
      name: 'REACT + TAILWIND CSS',
      data: [44, 55, 41, 67, 22, 43, 45, 86, 46, 45]
    },
    {
      name: 'HTML/CSS - INTERMEDIÁRIO',
      data: [13, 23, 20, 8, 13, 27,45 , 63, 87, 79]
    },
    {
      name: 'HTML/CSS - BASICO',
      data: [11, 17, 15, 15, 21, 14,24, 43, 53, 45]
    },
    {
      name: 'JAVASCRIPT- AVANCADO',
      data: [21, 7, 25, 13, 22, 8, 46, 65, 45, 78]
    }
  ]);

  const [options] = useState({
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      }
    },
    xaxis: {
      type: 'datetime',
       categories: [
        '03/20/2024 GMT',
        '03/21/2024 GMT',
        '03/22/2024 GMT',
        '03/23/2024 GMT',
        '03/24/2024 GMT',
        '03/25/2024 GMT',
        '03/26/2024 GMT',
        '03/27/2024 GMT',
        '03/28/2024 GMT',
        '03/29/2024 GMT'
      ]
    },
    legend: {
      position: 'right',
      offsetY: 40
    },
    fill: {
      opacity: 1
    }
  });

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ColumnWithDataLabels;
