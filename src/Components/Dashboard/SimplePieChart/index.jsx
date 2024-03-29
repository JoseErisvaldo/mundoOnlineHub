import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SimplePieChart = () => {
  const [chartData] = useState({
    series: [44, 55, 13, 43],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['REACT + TAILWIND CSS', 'HTML/CSS - INTERMEDIÁRIO', 'HTML/CSS - BASICO', 'JAVASCRIPT- AVANCADO'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={480} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default SimplePieChart;
